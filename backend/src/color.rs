use nom::{
    bytes::complete::{is_not, tag, take_while_m_n},
    combinator::{map_res, opt},
    multi::many0,
    sequence::{delimited, tuple},
    IResult,
};

type PResult<'a, E> = IResult<&'a str, E>;

#[derive(Debug, PartialEq)]
pub enum ColorTag {
    LastColor,
    Color { r: u8, g: u8, b: u8, a: u8 },
}

impl ColorTag {
    pub fn new(r: u8, g: u8, b: u8, a: u8) -> Self {
        Self::Color { r, g, b, a }
    }
}

#[derive(Debug, PartialEq)]
pub struct Text<'a> {
    pub color: ColorTag,
    pub text: &'a str,
}

impl<'a> Text<'a> {
    pub fn new(text: &'a str) -> Self {
        let color = ColorTag::LastColor;
        Self { text, color }
    }

    pub fn with_color(self, r: u8, g: u8, b: u8, a: u8) -> Self {
        let color = ColorTag::new(r, g, b, a);
        Self { color, ..self }
    }
}

#[derive(Debug, PartialEq)]
pub struct Markup<'a> {
    /// Default color.
    color: ColorTag,

    ///
    texts: Vec<Text<'a>>,
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
    let (input, _) = tag("#")(input)?;
    let (input, (r, g, b)) = tuple((hex_primary, hex_primary, hex_primary))(input)?;
    let (input, a) = opt(hex_primary)(input)?;
    let a = a.unwrap_or(0);
    Ok((input, ColorTag::new(r, g, b, a)))
}

fn text_color(input: &str) -> PResult<Text<'_>> {
    let (input, color) = opt(delimited(tag("["), hex_color, tag("]")))(input)?;
    let color = color.unwrap_or(ColorTag::LastColor);
    let (input, text) = is_not("[")(input)?;
    Ok((input, Text { color, text }))
}

fn text_colors(input: &str) -> PResult<Vec<Text<'_>>> {
    Ok(many0(text_color)(input)?)
}

#[test]
fn parse_color() {
    assert_eq!(
        hex_color("#2F14DF"),
        Ok(("", ColorTag::new(47, 20, 223, 0)))
    );
}

#[test]
fn parse_color_alpha() {
    assert_eq!(
        hex_color("#2F14DF05"),
        Ok(("", ColorTag::new(47, 20, 223, 5)))
    );
}

#[test]
fn parse_one_colored_text() {
    assert_eq!(
        text_color("[#01020304]text"),
        Ok(("", Text::new("text").with_color(1, 2, 3, 4)))
    );
}

#[test]
fn parse_many_colored_text() {
    assert_eq!(
        text_colors("[#01020304]texta[#04030201]textb"),
        Ok((
            "",
            vec![
                Text::new("texta").with_color(1, 2, 3, 4),
                Text::new("textb").with_color(4, 3, 2, 1),
            ]
        ))
    );
}

#[test]
fn parse_no_leading_color() {
    assert_eq!(
        text_colors("texta[#04030201]textb"),
        Ok((
            "",
            vec![
                Text::new("texta"),
                Text::new("textb").with_color(4, 3, 2, 1),
            ]
        ))
    );
}
