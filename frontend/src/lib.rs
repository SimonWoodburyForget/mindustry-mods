#![allow(clippy::non_ascii_literal)]

#[macro_use]
extern crate seed;
extern crate hifitime;
extern crate instant;
extern crate wee_alloc;

use seed::{prelude::*, *};
// use wasm_bindgen::prelude::*;

use futures::Future;
use seed::{fetch, Method, Request};
use serde::Deserialize;

use hifitime::Epoch;
use humantime;
use instant::Instant;

// #[global_allocator]
// static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

static HOME: &'static str = "/mindustry-mods";

#[derive(Deserialize, Debug, Clone)]
struct Mod {
    name: String,
    stars: u32,
    date_tt: f64,
    desc: String,
    link: String,
    repo: String,
}

impl Mod {
    /// Link to the mod's archive.
    fn archive_link(&self) -> String {
        return format!("https://github.com/{}/archive/master.zip", self.repo);
    }

    /// Endpoint to the rendered README.md
    fn endpoint(&self) -> String {
        let path = self.repo.replace("/", "--");
        return format!("{}/m/{}.html", HOME, path);
    }

    /// Returns the `Node<Msg>` for the listing.
    fn as_listing_node(&self) -> Node<Msg> {
        let repo_link = a![attrs! { At::Href => self.link }, self.name];

        div![repo_link, self.endpoint(), self.archive_link()]
    }
}

struct Model {
    count: i32,

    /// instant the app started
    dt: Instant,

    /// number of requests submitted for date updates
    data_requested: u32,

    data: Vec<Mod>,
}

impl Default for Model {
    fn default() -> Self {
        Self {
            count: 0,
            dt: Instant::now(),
            data_requested: 0,
            data: vec![],
        }
    }

    // fn listing() -> View<Node<>>
}

#[derive(Debug, Clone)]
enum Msg {
    Increment,
    Decrement,
    FetchData(fetch::ResponseDataResult<Vec<Mod>>),
}

fn fetch_data() -> impl Future<Item = Msg, Error = Msg> {
    Request::new("data/modmeta.1.0.json")
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
        attrs! { At::Class => "content" },
        style! { "background" => "yellow" },
        p![format!(
            "{}",
            humantime::format_duration(now.duration_since(before).unwrap())
        )],
        table![model.data.iter().map(|r| r.as_listing_node())],
        p![format!("{}", model.dt.elapsed().as_secs())]
    ]
}

fn after_mount(_: Url, orders: &mut impl Orders<Msg>) -> AfterMount<Model> {
    orders.perform_cmd(fetch_data());
    AfterMount::default()
}

#[wasm_bindgen(start)]
pub fn render() {
    seed::App::builder(update, view)
        .after_mount(after_mount)
        .build_and_start();
}
