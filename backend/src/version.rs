use serde::{
    de::{self, Deserializer, Visitor},
    Deserialize, Serialize,
};
use std::fmt;

type Result<E> = std::result::Result<Version, E>;

/// Version string for a mod, potentially deserialized from a number.
#[derive(Serialize, Debug, PartialEq)]
pub struct Version(String);

impl Version {
    fn new<T: ToString>(x: T) -> Self {
        Version(x.to_string())
    }
}

struct Vis;
impl<'a> Visitor<'a> for Vis {
    type Value = Version;

    fn expecting(&self, formatter: &mut fmt::Formatter) -> fmt::Result {
        formatter.write_str("version string or number")
    }

    fn visit_string<E: de::Error>(self, value: String) -> Result<E> {
        Ok(Version::new(value))
    }

    fn visit_str<E: de::Error>(self, value: &str) -> Result<E> {
        Ok(Version::new(value))
    }

    fn visit_f32<E: de::Error>(self, value: f32) -> Result<E> {
        Ok(Version::new(value))
    }

    fn visit_f64<E: de::Error>(self, value: f64) -> Result<E> {
        Ok(Version::new(value))
    }

    fn visit_none<E: de::Error>(self) -> Result<E> {
        Ok(Version::new(""))
    }

    fn visit_unit<E: de::Error>(self) -> Result<E> {
        Ok(Version::new(""))
    }

    fn visit_some<D: Deserializer<'a>>(self, de: D) -> Result<D::Error> {
        Deserialize::deserialize(de)
    }
}

impl<'a> Deserialize<'a> for Version {
    fn deserialize<D: Deserializer<'a>>(deserializer: D) -> Result<D::Error> {
        deserializer.deserialize_any(Vis)
    }
}

#[cfg(test)]
mod test {
    use super::*;
    use serde::Deserialize;

    #[derive(Deserialize, PartialEq, Debug)]
    struct T {
        v: Version,
    }

    fn input(b: &str) -> String {
        ["{\"v\":", b, "}"].concat()
    }

    #[test]
    fn version_string() {
        let x = "1.3.7";
        let i = input(&["\"", x, "\""].concat());
        let t: T = serde_json::from_str(&i).unwrap();
        let v = Version::new(x);
        assert_eq!(t, T { v });
    }

    #[test]
    fn version_float() {
        let x = "1.3";
        let i = input(x);
        let t: T = serde_json::from_str(&i).unwrap();
        let v = Version::new(x);
        assert_eq!(t, T { v });
    }

    #[test]
    fn version_number() {
        let x = "1.3";
        let i = input(x);
        let t: T = serde_json::from_str(&i).unwrap();
        let v = Version::new(x);
        assert_eq!(t, T { v });
    }

    // #[test]
    // fn version_none() {
    //     let i = "{}";
    //     let t: T = serde_json::from_str(&i).unwrap();
    //     let v = Version::new("");
    //     assert_eq!(t, T { v });
    // }
}
