pub struct Color {
    r: u8,
    g: u8,
    b: u8,
    a: Option<u8>,
}

impl ToString for Color {
    fn to_string(&self) -> String {
        let Color { r, g, b, a } = self;
        match a {
            Some(a) => format!("#{}{}{}{}", r, g, b, a),
            None => format!("#{}{}{}", r, g, b),
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
            Maroon     => 0xb03060ff,
            Violet     => 0xee82eeff,
            Purple     => 0xa020f0ff,
            Magenta    => 0xff00ffff,
            Pink       => 0xff69b4ff,
            Salmon     => 0xfa8072ff,
            Coral      => 0xff7f50ff,
            Scarlet    => 0xff341cff,
            Red        => 0xff0000ff,
            Brick      => 0xb22222ff,
            Tan        => 0xd2b48cff,
            Brown      => 0x8b4513ff,
            Orange     => 0xffa500ff,
            Goldenrod  => 0xdaa520ff,
            Gold       => 0xffd700ff,
            Yellow     => 0xffff00ff,
            Olive      => 0x6b8e23ff,
            Forest     => 0x228b22ff,
            Lime       => 0x32cd32ff,
            Acid       => 0x7fff00ff,
            Green      => 0x00ff00ff,
            Teal       => 0x008888ff,
            Cyan       => 0x00ffffff,
            Sky        => 0x87ceebff,
            Slate      => 0x708090ff,
            Royal      => 0x4169e1ff,
            Navy       => 0x000088ff,
            Blue       => 0x0000ffff,
            Clear      =>          0,
            Black      =>       0xff,
            DarkGray   => 0x3f3f3fff,
            Gray       => 0x7f7f7fff,
            LightGray  => 0xbfbfbfff,
            White      => 0xffffffff,
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
            "white" => White,
            "lightgray" => LightGray,
            "gray" => Gray,
            "darkgray" => DarkGray,
            "black" => Black,
            "clear" => Clear,
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
            name => Err(NameError::Unknown(name))?,
        })
    }
}
