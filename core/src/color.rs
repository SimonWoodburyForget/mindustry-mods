#![allow(unused_imports)]

use nom::{
    branch::{alt, permutation},
    bytes::complete::{escaped, is_not, tag, take_while_m_n},
    character::complete::{alpha1, char, none_of, one_of},
    combinator::{map, map_res, not, opt, peek, rest},
    multi::{many0, separated_list},
    sequence::{delimited, pair, preceded, terminated, tuple},
    IResult,
};

type PResult<'a, E> = IResult<&'a str, E>;

/// Token representing color of the following text.
#[derive(Debug, PartialEq)]
pub enum ColorTag<'a> {
    /// Parsed hex-rgb(a) string.
    HexColor { r: u8, g: u8, b: u8, a: u8 },

    /// Parsed named string.
    Named(&'a str),

    /// Parsed escaped color tag.
    Escaped,

    /// Parsed *pop* current color tag.
    Popped,

    /// Parsed text which should be rendered visible.
    Text(&'a str),
}

impl std::fmt::Display for ColorTag<'_> {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        match self {
            Self::Escaped => write!(f, "["),
            Self::Popped => write!(f, "[]"),
            Self::HexColor { r, g, b, a } => write!(f, "[#{}{}{}{}]", r, g, b, a),
            Self::Named(color) => write!(f, "[{}]", color),
            Self::Text(text) => write!(f, "{}", text),
        }
    }
}

impl From<[u8; 4]> for ColorTag<'_> {
    fn from([r, g, b, a]: [u8; 4]) -> Self {
        Self::HexColor { r, g, b, a }
    }
}

impl From<[u8; 3]> for ColorTag<'_> {
    fn from([r, g, b]: [u8; 3]) -> Self {
        let a = 0;
        Self::HexColor { r, g, b, a }
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

fn hex_color(input: &str) -> PResult<ColorTag> {
    let (input, (r, g, b)) =
        preceded(char('#'), tuple((hex_primary, hex_primary, hex_primary)))(input)?;
    let (input, a) = opt(hex_primary)(input)?;
    let a = a.unwrap_or(0);
    Ok((input, [r, g, b, a].into()))
}

fn named_color(input: &str) -> PResult<ColorTag> {
    let (input, color) = alpha1(input)?;
    Ok((input, ColorTag::Named(color)))
}

fn color_markup(input: &str) -> PResult<ColorTag> {
    preceded(
        tag("["),
        alt((
            terminated(hex_color, tag("]")),
            map(tag("["), |_| ColorTag::Escaped),
            map(tag("]"), |_| ColorTag::Popped),
            terminated(named_color, tag("]")),
        )),
    )(input)
}

pub fn markup(input: &str) -> PResult<Vec<ColorTag>> {
    many0(alt((
        color_markup,
        map(is_not("["), |text| ColorTag::Text(text)),
    )))(input)
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
            assert_eq!(named_color("red"), Ok(("", ColorTag::Named("red"))));
        }
    }

    mod color_markup {
        use super::*;
        use ColorTag::*;

        #[test]
        fn tag() {
            assert_eq!(color_markup("[#010203]"), Ok(("", [1, 2, 3].into())));
            assert_eq!(color_markup("[red]"), Ok(("", Named("red"))));
            assert_eq!(color_markup("[["), Ok(("", Escaped)));
            assert_eq!(color_markup("[]"), Ok(("", Popped)));
        }

        #[test]
        fn text() {
            assert_eq!(markup("[red]"), Ok(("", vec![Named("red")])));
            assert_eq!(
                markup("[red][blue]"),
                Ok(("", vec![Named("red"), Named("blue")]))
            );
            assert_eq!(
                markup("[red][[blue[green]"),
                Ok((
                    "",
                    vec![Named("red"), Escaped, Text("blue"), Named("green")]
                ))
            );
            assert_eq!(
                markup("[][[blue[green]"),
                Ok(("", vec![Popped, Escaped, Text("blue"), Named("green")]))
            );
            assert_eq!(
                markup("[#01020304][[blue"),
                Ok(("", vec![[1, 2, 3, 4].into(), Escaped, Text("blue")]))
            );
            assert_eq!(
                markup("[red]text"),
                Ok(("", vec![Named("red"), Text("text")]))
            );
            assert_eq!(
                markup("[red]text[green]"),
                Ok(("", vec![Named("red"), Text("text"), Named("green")]))
            );
            assert_eq!(
                markup("text[red][green]"),
                Ok(("", vec![Text("text"), Named("red"), Named("green")]))
            );
        }
    }
}
