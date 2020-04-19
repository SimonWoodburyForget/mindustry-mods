#[derive(Debug, PartialEq)]
pub struct Color {
    r: u8,
    g: u8,
    b: u8,
    a: Option<u8>,
}

impl ToString for Color {
    fn to_string(&self) -> String {
        let Color { r, g, b, a } = *self;
        match a {
            Some(a) => format!("#{:08x}", u32::from_be_bytes([r, g, b, a])),
            None => format!("#{:06x}", u32::from_be_bytes([r, g, b, 0]).rotate_right(8)),
        }
    }
}

impl From<u32> for Color {
    fn from(x: u32) -> Self {
        let [r, g, b, a] = x.to_be_bytes();
        let a = Some(a);
        Self { r, g, b, a }
    }
}

impl From<[u8; 4]> for Color {
    fn from([r, g, b, a]: [u8; 4]) -> Self {
        let a = Some(a);
        Self { r, g, b, a }
    }
}

impl From<[u8; 3]> for Color {
    fn from([r, g, b]: [u8; 3]) -> Self {
        Self { r, g, b, a: None }
    }
}

impl From<&str> for Color {
    fn from(input: &str) -> Self {
        Name::from_str(input).unwrap_or(Name::White).into()
    }
}

pub enum Name {
    White,
    LightGray,
    Gray,
    DarkGray,
    Black,
    Clear,
    Blue,
    Navy,
    Royal,
    Slate,
    Sky,
    Cyan,
    Teal,
    Green,
    Acid,
    Lime,
    Forest,
    Olive,
    Yellow,
    Gold,
    Goldenrod,
    Orange,
    Brown,
    Tan,
    Brick,
    Red,
    Scarlet,
    Coral,
    Salmon,
    Pink,
    Magenta,
    Purple,
    Violet,
    Maroon,
}

impl From<Name> for Color {
    #[rustfmt::skip]
    fn from(input: Name) -> Self {
        use Name::*;
        match input {
            Maroon     => 0xb03060_ff_u32,
            Violet     => 0xee82ee_ff,
            Purple     => 0xa020f0_ff,
            Magenta    => 0xff00ff_ff,
            Pink       => 0xff69b4_ff,
            Salmon     => 0xfa8072_ff,
            Coral      => 0xff7f50_ff,
            Scarlet    => 0xff341c_ff,
            Red        => 0xff0000_ff,
            Brick      => 0xb22222_ff,
            Tan        => 0xd2b48c_ff,
            Brown      => 0x8b4513_ff,
            Orange     => 0xffa500_ff,
            Goldenrod  => 0xdaa520_ff,
            Gold       => 0xffd700_ff,
            Yellow     => 0xffff00_ff,
            Olive      => 0x6b8e23_ff,
            Forest     => 0x228b22_ff,
            Lime       => 0x32cd32_ff,
            Acid       => 0x7fff00_ff,
            Green      => 0x00ff00_ff,
            Teal       => 0x008888_ff,
            Cyan       => 0x00ffff_ff,
            Sky        => 0x87ceeb_ff,
            Slate      => 0x708090_ff,
            Royal      => 0x4169e1_ff,
            Navy       => 0x000088_ff,
            Blue       => 0x0000ff_ff,
            Clear      =>          0,
            Black      => 0x000000_ff,
            DarkGray   => 0x3f3f3f_ff,
            Gray       => 0x7f7f7f_ff,
            LightGray  => 0xbfbfbf_ff,
            White      => 0xffffff_ff,
        }
        .into()
    }
}

#[derive(thiserror::Error, Debug)]
pub enum NameError<'a> {
    #[error("unknown color name: {0}")]
    Unknown(&'a str),
}

impl Name {
    fn from_str(input: &str) -> Result<Self, NameError> {
        use Name::*;
        Ok(match input {
            "clear" => Clear,
            "black" => Black,

            "white" => White,
            "lightgray" => LightGray,
            "gray" => Gray,
            "darkgray" => DarkGray,

            "blue" => Blue,
            "navy" => Navy,
            "royal" => Royal,
            "slate" => Slate,
            "sky" => Sky,
            "cyan" => Cyan,
            "teal" => Teal,

            "green" => Green,
            "acid" => Acid,
            "lime" => Lime,
            "forest" => Forest,
            "olive" => Olive,

            "yellow" => Yellow,
            "gold" => Gold,
            "goldenrod" => Goldenrod,
            "orange" => Orange,

            "brown" => Brown,
            "tan" => Tan,
            "brick" => Brick,

            "red" => Red,
            "scarlet" => Scarlet,
            "coral" => Coral,
            "salmon" => Salmon,
            "pink" => Pink,
            "magenta" => Magenta,

            "purple" => Purple,
            "violet" => Violet,
            "maroon" => Maroon,
            "crimson" => Scarlet,

            name => Err(NameError::Unknown(name))?,
        })
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    const RED_FF: Color = Color {
        r: 0xff,
        g: 0,
        b: 0,
        a: Some(0xff),
    };

    const RED: Color = Color {
        r: 0xff,
        g: 0,
        b: 0,
        a: None,
    };

    const BLUE_FF: Color = Color {
        r: 0,
        g: 0,
        b: 0xff,
        a: Some(0xff),
    };

    #[test]
    fn names() {
        assert_eq!(RED_FF, "red".into());
        assert_eq!(BLUE_FF, "blue".into());
    }

    #[test]
    fn formatting() {
        assert_eq!(RED_FF.to_string(), "#ff0000ff");
        assert_eq!(RED.to_string(), "#ff0000");
        assert_eq!(BLUE_FF.to_string(), "#0000ffff");
    }
}
