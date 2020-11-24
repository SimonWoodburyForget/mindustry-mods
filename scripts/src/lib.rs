use mcore::Mod;
use pyo3::prelude::*;

/// This module is implemented in Rust.
#[pymodule]
fn scripts(_py: Python, m: &PyModule) -> PyResult<()> {
    #[pyfn(m, "sum_as_string")]
    fn sum_as_string_py(_py: Python, a: i64, b: i64) -> PyResult<String> {
        let out = sum_as_string(a, b);
        Ok(out)
    }
    Ok(())
}

fn sum_as_string(a: i64, b: i64) -> String {
    format!("{}", a + b)
}
