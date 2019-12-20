#![allow(clippy::non_ascii_literal)]

use mindustry_mods_core::Mod;

use std::convert::TryFrom;
use std::iter;

// use itertools::IterTools;

use seed::{prelude::*, *};
use wasm_bindgen::prelude::*;

use futures::Future;
use seed::{fetch, Method, Request};
use serde::Deserialize;

use hifitime::Epoch;
use humantime;
use instant::Instant;

use wee_alloc;

#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

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

fn link(rel: String, href: String) -> Node<Msg> {
    custom![
        Tag::Custom("link".into()),
        attrs! { At::Href => href, At::Rel => rel }
    ]
}

fn tiny_list(v: &Vec<String>) -> Node<Msg> {
    if !v.is_empty() {
        ul![v
            .iter()
            .filter(|x| x.as_str() != "content")
            .map(|x| li![attrs! { At::Class => x}, x])]
    } else {
        div![]
    }
}

static HOME: &'static str = "/mindustry-mods";
static RGUC: &'static str = "https://raw.githubusercontent.com";

#[derive(Deserialize, Debug, Clone)]
struct ListingItem(Mod);

impl ListingItem {
    /// Returns whether the mod should be rendered, given a query.
    fn filtering(&self, query: &str) -> bool {
        if query == "" {
            true
        } else {
            query.split_whitespace().all(|q| {
                [
                    &self.0.author,
                    &self.0.desc,
                    &self.0.repo,
                    &self.0.readme,
                    &self.0.contents.join(" "),
                    &self.0.assets.join(" "),
                ]
                .iter()
                .any(|s| s.as_str().to_lowercase().contains(q))
            })
        }
    }

    fn assets_list(&self) -> Node<Msg> {
        tiny_list(&self.0.assets)
    }

    fn contents_list(&self) -> Node<Msg> {
        tiny_list(&self.0.contents)
    }

    /// Link to the mod's archive.
    fn archive_link(&self) -> Node<Msg> {
        let l = format!("https://github.com/{}/archive/master.zip", self.0.repo);
        a![attrs! { At::Href => l }, "zip"]
    }

    /// Endpoint link as a string.
    fn endpoint_href(&self) -> String {
        let path = self.0.repo.replace("/", "--");
        format!("m/{}.html", path).into()
    }

    /// Endpoint link to the locally rendered README.md
    fn endpoint_link(&self) -> Node<Msg> {
        a![attrs! { At::Href => self.endpoint_href() }, self.0.name]
    }

    /// Link to the mods repository.
    fn repo_link(&self) -> Node<Msg> {
        a![attrs! { At::Href => self.0.link }, "repository"]
    }

    /// Optional link to a wiki.
    fn wiki_link(&self) -> Node<Msg> {
        match &self.0.wiki {
            Some(link) => a![attrs! { At::Href => link }, "wiki"],
            None => a![style! { "display" => "none" }],
        }
    }

    /// The rendered `time age` string.
    fn last_commit(&self) -> Node<Msg> {
        // TODO: generate here instead of from Python.
        div![
            attrs! { At::Class => "last-commit" },
            self.0.delta_ago,
            " ago"
        ]
    }

    /// Returns unicode stars.
    fn stars_el(&self) -> Node<Msg> {
        let star_count: Node<Msg> = div![
            attrs! { At::Class => "star-count" },
            format!("{}", self.0.stars)
        ];
        match usize::try_from(self.0.stars) {
            Err(_) => div![star_count, div!["err"]],
            Ok(0) => div![
                div![attrs! { At::Class => "stars-wrapper"}, "☆"],
                star_count,
            ],
            Ok(x) => div![
                div![
                    attrs! { At::Class => "stars-wrapper" },
                    iter::repeat("★")
                        .take(self.0.stars as usize)
                        .map(|x| div![attrs! { At::Class => "star" }, x])
                ],
                star_count,
            ],
        }
    }

    /// Returns an icon link node.
    fn icon(&self) -> Node<Msg> {
        match self.0.icon_raw.as_ref().map(String::as_str) {
            Some("") | None => a![
                attrs! { At::Href => self.endpoint_href() },
                img![attrs! { At::Src => "images/nothing.png" },]
            ],

            Some(p) => {
                let i = format!("{}/{}/master/{}", RGUC, self.0.repo, p);
                a![
                    attrs! { At::Href => self.endpoint_href() },
                    img![attrs! {
                        At::Src => i,
                        At::OnError => "this.src='images/nothing.png'"
                    }]
                ]
            }
        }
    }

    /// Description paragraph of the mode for the listing.
    fn description(&self) -> Node<Msg> {
        p![attrs! { At::Class => "description" }, self.0.desc]
    }

    /// Handles path names, which occur when mod.json doesn't exist.
    fn mod_name(&self) -> String {
        match self.0.name.rfind("/") {
            Some(x) => self.0.name.split_at(x + 1).1.into(),
            None => self.0.name.clone(),
        }
    }

    /// The rendered author.
    fn by_author(&self) -> Node<Msg> {
        div![attrs! { At::Class => "by-author" }, "by ", self.0.author]
    }

    /// The rendered version number.
    fn v_number(&self) -> Node<Msg> {
        let pre = if self.0.version.is_some() { "v" } else { "" };
        let num = self.0.version.as_ref().map(|x| x.as_str()).unwrap_or("");
        div![attrs! { At::Class => "v-number" }, pre, num]
    }

    /// The thing the user will probably click on.
    fn title_link(&self) -> Node<Msg> {
        div![
            attrs! { At::Class => "title-link" },
            a![attrs! { At::Href => self.endpoint_href() }, self.mod_name()]
        ]
    }

    /// Title (name) of the mod in the listing.
    fn listing_title(&self) -> Node<Msg> {
        div![
            attrs! { At::Class => "title-box" },
            self.title_link(),
            self.by_author(),
            self.v_number(),
            self.last_commit()
        ]
    }

    /// Returns the `Node<Msg>` for the listing.
    fn listing_item(&self) -> Node<Msg> {
        div![
            attrs! { At::Class => "outside" },
            div![
                attrs! { At::Class => "wrapper" },
                div![attrs! { At::Class => "box icon" }, self.icon()],
                div![attrs! { At::Class => "box name" }, self.listing_title()],
                div![attrs! { At::Class => "box desc" }, self.description()],
                div![
                    attrs! { At::Class => "box links" },
                    self.repo_link(),
                    self.archive_link(),
                    self.wiki_link(),
                ],
                div![attrs! { At::Class => "box assets" }, self.assets_list()],
                div![attrs! { At::Class => "box contents" }, self.contents_list()],
                div![attrs! { At::Class => "box stars" }, self.stars_el()],
            ]
        ]
    }
}

struct Model {
    count: i32,

    /// instant the app started
    dt: Instant,

    /// number of requests submitted for date updates
    data_requested: u32,

    /// A vector of mod data.
    data: Vec<ListingItem>,

    /// Order of rendered content.
    sorting: Sorting,

    /// Filtering of rendered content.
    filtering: Option<String>,
}

impl Model {
    /// Returns listing of mods, sorted by the sort state.
    fn listing(&self) -> Vec<Node<Msg>> {
        let mut data = self.data.clone();
        match self.sorting {
            Sorting::Commit => data.sort_by_key(|x| x.0.date_tt as u32),
            Sorting::Stars => data.sort_by_key(|x| x.0.stars),
        }
        data.reverse();
        data.iter()
            .filter(|x| {
                self.filtering
                    .as_ref()
                    .map_or(true, |f| x.filtering(f.as_str()))
            })
            .map(|x| x.listing_item())
            .collect()
    }
}

impl Default for Model {
    fn default() -> Self {
        Self {
            count: 0,
            dt: Instant::now(),
            data_requested: 0,
            data: vec![],
            sorting: Sorting::Commit,
            filtering: None,
        }
    }
}

#[derive(Debug, Clone, PartialEq)]
enum Sorting {
    Stars,
    Commit,
}

#[derive(Debug, Clone)]
enum Msg {
    /// Fetched mod data.
    FetchData(fetch::ResponseDataResult<Vec<ListingItem>>),

    /// Set sorting.
    SetSort(Sorting),

    /// Filter by (words?) in string.
    FilterWords(String),
}

fn fetch_data() -> impl Future<Item = Msg, Error = Msg> {
    Request::new("data/modmeta.1.0.json")
        .method(Method::Get)
        .fetch_json_data(Msg::FetchData)
}

fn update(msg: Msg, model: &mut Model, orders: &mut impl Orders<Msg>) {
    match msg {
        Msg::FetchData(data) => model.data = data.unwrap(),

        Msg::SetSort(sorting) => model.sorting = sorting,

        Msg::FilterWords(words) => model.filtering = Some(words),
    }
}

fn view(model: &Model) -> impl View<Msg> {
    div![
        attrs! { At::Class => "app" },
        header![
            link("StyleSheet".into(), "css/header.css".into()),
            h1!["Mindustry Mods"],
            a![
                attrs! { At::Href => "https://github.com/SimonWoodburyForget/mindustry-mods" },
                img![attrs! {
                    At::Src => "images/GitHub-Mark/PNG/GitHub-Mark-Light-64px.png"
                }]
            ]
        ],
        div![
            link("StyleSheet".into(), "css/listing.css".into()),
            attrs! { At::Class => "inputs" },
            input![
                attrs! { "placeholder" => "filter by words" },
                input_ev(Ev::Input, Msg::FilterWords)
            ],
            div![
                attrs! { At::Class => "buttons" },
                p!["Order by "],
                button![
                    attrs! { At::Class => if (model.sorting == Sorting::Stars) {"active"} else { "" }},
                    simple_ev(Ev::Click, Msg::SetSort(Sorting::Stars)),
                    "stars"
                ],
                button![
                    attrs! { At::Class => if (model.sorting == Sorting::Commit) {"active"} else { "" }},
                    simple_ev(Ev::Click, Msg::SetSort(Sorting::Commit)),
                    "commit"
                ],
            ]
        ],
        div![attrs! { At::Class => "listing-container" }, model.listing()]
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
