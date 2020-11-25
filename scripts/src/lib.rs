use pyo3::prelude::*;
use serde::{Deserialize, Serialize};

pub const MOD_VERSION: &str = mcore::MOD_VERSION;

/// This module is implemented in Rust.
#[pymodule]
fn scripts(_py: Python, module: &PyModule) -> PyResult<()> {
    #[pyfn(module, "dump")]
    fn dump(_py: Python, mods: Vec<Mod>) -> PyResult<String> {
        Ok(serde_json::to_string(&mods.0).unwrap())
    }

    module.setattr("MOD_VERSION", MOD_VERSION)?;
    module.add_class::<Mod>()?;
    Ok(())
}

#[pyclass]
pub struct Mod(mcore::Mod);

#[pymethods]
impl Mod {
    #[new]
    pub fn new(
        name: String,
        name_markup: String,
        link: String,
        repo: String,
        desc: String,
        desc_markup: Option<String>,
        icon: Option<String>,
        stars: u32,
        author: String,
        author_markup: Option<String>,
        date: String,
        date_tt: f64,
        readme: String,
        version: Option<String>,
        assets: Vec<String>,
        contents: Vec<String>,
        display_name: Option<String>,
    ) -> PyResult<Self> {
        Ok(Self(mcore::Mod {
            name,
            name_markup,
            link,
            repo,
            desc,
            desc_markup,
            icon,
            stars,
            author,
            author_markup,
            date,
            date_tt,
            readme,
            version,
            assets,
            contents,
            display_name,
        }))
    }

    pub fn date_tt(&self) -> PyResult<f64> {
        Ok(self.0.date_tt)
    }
}
