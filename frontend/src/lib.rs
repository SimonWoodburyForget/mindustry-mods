#![allow(clippy::non_ascii_literal)]

#[macro_use]
extern crate seed;
extern crate hifitime;
extern crate instant;
extern crate wee_alloc;

use seed::prelude::*;
use wasm_bindgen::prelude::*;

use futures::Future;
use seed::{fetch, Method, Request};
use serde::{Deserialize, Serialize};

use hifitime::Epoch;
use humantime;

// #[global_allocator]
// static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[derive(Deserialize, Debug, Clone)]
struct Repo {
    name: String,
    stars: u32,
    date_tt: f64,
}

struct Model {
    count: i32,
    words: String,
    data: Vec<Repo>,
}

impl Default for Model {
    fn default() -> Self {
        Self {
            count: 0,
            words: "string".into(),
            data: vec![],
        }
    }
}

#[derive(Debug, Clone)]
enum Msg {
    Increment,
    Decrement,
    FetchData(fetch::ResponseDataResult<Vec<Repo>>),
}

fn fetch_data() -> impl Future<Item = Msg, Error = Msg> {
    Request::new("data/test.json")
        .method(Method::Get)
        .fetch_json_data(Msg::FetchData)
}

fn update(msg: Msg, model: &mut Model, orders: &mut impl Orders<Msg>) {
    match msg {
        Msg::Increment => {
            model.count += 2;
            orders.skip().perform_cmd(fetch_data());
        }

        Msg::Decrement => model.count -= 1,

        Msg::FetchData(data) => {
            model.data = data.unwrap();
        }
    }
}

mod date {
    use js_sys::Date;
    use std::time::{Duration, SystemTime, UNIX_EPOCH};

    pub fn from_tt(x: f64) -> SystemTime {
        let secs = (x as u64) / 1_000;
        let nanos = ((x as u32) % 1_000) * 1_000_000;
        UNIX_EPOCH + Duration::new(secs, nanos)
    }

    pub fn now() -> SystemTime {
        let x = Date::now();
        from_tt(x)
    }
}

fn view(model: &Model) -> impl View<Msg> {
    let now = date::now();
    let before = date::from_tt(457.3892);

    div![
        button![simple_ev(Ev::Click, Msg::Increment), "+"],
        div![format!("{}", model.count)],
        button![simple_ev(Ev::Click, Msg::Decrement), "-"],
        p![format!("{:?}", model.data)],
        p![format!("{:?}", instant::Instant::now())],
        p![format!(
            "{:?}",
            Epoch::from_gregorian_utc(2017, 12, 25, 02, 02, 14, 0)
        )],
        p![format!(
            "{}",
            humantime::format_duration(now.duration_since(before).unwrap())
        )]
    ]
}

#[wasm_bindgen(start)]
pub fn render() {
    seed::App::builder(update, view).build_and_start();
}
