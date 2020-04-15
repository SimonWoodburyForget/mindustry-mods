use nom::{
    branch::alt,
    bytes::complete::{is_not, tag, take_while_m_n},
    character::complete::{alpha1, char},
    combinator::{map, map_res, opt},
    multi::many0,
    sequence::{preceded, terminated, tuple},
    IResult,
};

type PResult<'a, E> = IResult<&'a str, E>;

/// Represents a color markup token, for the purposes of
/// being encoded into something like HTML.
#[derive(Debug, PartialEq)]
pub enum Markup<'a> {
    /// Parsed (`[#rrggbbaa]`) hex-rgb(a) color tag.
    HexColor { r: u8, g: u8, b: u8, a: Option<u8> },

    /// Parsed (`[red]) named color tag.
    Named(&'a str),

    /// Parsed (`[[`) escaped color tag.
    Escaped,

    /// Parsed (`[]`) *pop* current color tag.
    Popped,

    /// Parsed text which should be rendered visible.
    Text(&'a str),

    /// Parsed newline inserted by user.
    NewLine,
}

impl std::fmt::Display for Markup<'_> {
    /// Writes back what was encoded.
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        match self {
            Self::NewLine => write!(f, "\n"),
            Self::Escaped => write!(f, "[["),
            Self::Popped => write!(f, "[]"),
            Self::Named(color) => write!(f, "[{}]", color),
            Self::Text(text) => write!(f, "{}", text),
            Self::HexColor { r, g, b, a } => match a {
                Some(a) => write!(f, "[#{}{}{}{}]", r, g, b, a),
                None => write!(f, "[#{}{}{}]", r, g, b),
            },
        }
    }
}

impl From<[u8; 4]> for Markup<'_> {
    fn from([r, g, b, a]: [u8; 4]) -> Self {
        Self::HexColor {
            r,
            g,
            b,
            a: Some(a),
        }
    }
}

impl From<[u8; 3]> for Markup<'_> {
    fn from([r, g, b]: [u8; 3]) -> Self {
        Self::HexColor { r, g, b, a: None }
    }
}

fn from_hex(input: &str) -> Result<u8, std::num::ParseIntError> {
    u8::from_str_radix(input, 16)
}

fn is_hex_digit(c: char) -> bool {
    c.is_digit(16)
}

fn hex_primary(input: &str) -> PResult<u8> {
    map_res(take_while_m_n(2, 2, is_hex_digit), from_hex)(input)
}

fn hex_color(input: &str) -> PResult<Markup> {
    let (input, (r, g, b)) =
        preceded(char('#'), tuple((hex_primary, hex_primary, hex_primary)))(input)?;
    let (input, a) = opt(hex_primary)(input)?;
    Ok((input, Markup::HexColor { r, g, b, a }))
}

fn named_color(input: &str) -> PResult<Markup> {
    let (input, color) = alpha1(input)?;
    Ok((input, Markup::Named(color)))
}

fn color_markup(input: &str) -> PResult<Markup> {
    preceded(
        tag("["),
        alt((
            terminated(hex_color, tag("]")),
            map(tag("["), |_| Markup::Escaped),
            map(tag("]"), |_| Markup::Popped),
            terminated(named_color, tag("]")),
        )),
    )(input)
}

impl Markup<'_> {
    pub fn from_str(input: &str) -> PResult<Vec<Markup>> {
        many0(alt((
            color_markup,
            map(char('\n'), |_| Markup::NewLine),
            map(is_not("[\n"), |text| Markup::Text(text)),
        )))(input)
    }
}

#[cfg(test)]
mod test {
    use super::*;

    mod color_tag {
        use super::*;

        #[test]
        fn simple() {
            assert_eq!(hex_color("#2F14DF"), Ok(("", [47, 20, 223].into())));
            assert_eq!(hex_color("#2f14df"), Ok(("", [47, 20, 223].into())));
            assert_eq!(hex_color("#2F14df"), Ok(("", [47, 20, 223].into())));
            assert_eq!(hex_color("#2F14DF05"), Ok(("", [47, 20, 223, 5].into())));
            assert_eq!(named_color("red"), Ok(("", Markup::Named("red"))));
        }
    }

    mod color_markup {
        use super::*;
        use Markup::*;

        #[test]
        fn tag() {
            assert_eq!(color_markup("[#010203]"), Ok(("", [1, 2, 3].into())));
            assert_eq!(color_markup("[red]"), Ok(("", Named("red"))));
            assert_eq!(color_markup("[["), Ok(("", Escaped)));
            assert_eq!(color_markup("[]"), Ok(("", Popped)));
        }

        #[test]
        fn text() {
            assert_eq!(Markup::from_str("[red]"), Ok(("", vec![Named("red")])));
            assert_eq!(
                Markup::from_str("[red][blue]"),
                Ok(("", vec![Named("red"), Named("blue")]))
            );
            assert_eq!(
                Markup::from_str("[red][[blue[green]"),
                Ok((
                    "",
                    vec![Named("red"), Escaped, Text("blue"), Named("green")]
                ))
            );
            assert_eq!(
                Markup::from_str("[][[blue[green]"),
                Ok(("", vec![Popped, Escaped, Text("blue"), Named("green")]))
            );
            assert_eq!(
                Markup::from_str("[#01020304][[blue"),
                Ok(("", vec![[1, 2, 3, 4].into(), Escaped, Text("blue")]))
            );
            assert_eq!(
                Markup::from_str("[red]text"),
                Ok(("", vec![Named("red"), Text("text")]))
            );
            assert_eq!(
                Markup::from_str("[red]text[green]"),
                Ok(("", vec![Named("red"), Text("text"), Named("green")]))
            );
            assert_eq!(
                Markup::from_str("text[red][green]"),
                Ok(("", vec![Text("text"), Named("red"), Named("green")]))
            );
            assert_eq!(
                Markup::from_str("[red]text\n[green]text"),
                Ok((
                    "",
                    vec![
                        Named("red"),
                        Text("text"),
                        NewLine,
                        Named("green"),
                        Text("text")
                    ]
                ))
            );
        }
    }
}
