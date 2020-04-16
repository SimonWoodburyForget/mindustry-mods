//! Frontend application of for a Mindustry-Mods listing.
#![warn(missing_docs)]

/// Some important constant path stuff.
mod path {
    /// root for test repository
    #[cfg(feature = "test-mode")]
    pub const ROOT: &str = "minmods-test";

    /// root for main repository
    #[cfg(not(feature = "test-mode"))]
    pub const ROOT: &str = "mindustry-mods";
}

/// Simple DateTime utilities.
mod date {
    use humantime::{parse_rfc3339_weak, TimestampError};
    use js_sys::Date;
    use std::time::{Duration, SystemTime, SystemTimeError, UNIX_EPOCH};
    use thiserror::Error as ThisError;

    /// DateTime related error.
    #[derive(Debug, ThisError)]
    pub enum Error {
        /// Error which occurs if times is negative.
        #[error("computation error: {0}")]
        Computation(#[from] SystemTimeError),

        /// Error which occurs if decoding/encoding error occurs.
        #[error("formatting error: {0}")]
        Formatting(#[from] TimestampError),
    }

    fn from_tt(x: f64) -> SystemTime {
        let secs = (x as u64) / 1_000;
        let nanos = ((x as u32) % 1_000) * 1_000_000;
        UNIX_EPOCH + Duration::new(secs, nanos)
    }

    fn now() -> SystemTime {
        let x = Date::now();
        from_tt(x)
    }

    /// Parses weak rfc3339 time stamps and returns the duration since now.
    pub fn ago(date: &str) -> Result<Duration, Error> {
        let sys = parse_rfc3339_weak(date)?;
        let ago = now().duration_since(sys)?;
        Ok(ago)
    }
}

/// Mod listing functions.
mod listing {
    use super::{app::Msg, date, markup};
    use mindustry_mods_core::Mod;
    use seed::{prelude::*, *};
    use serde::Deserialize;
    use std::{convert::TryFrom, iter};

    /// Makes the tiny contents/assets overview lists.
    fn tiny_list(v: &[String]) -> Node<Msg> {
        if !v.is_empty() {
            ul![v
                .iter()
                .filter(|x| x.as_str() != "content")
                .map(|x| li![attrs! { At::Class => x}, x])]
        } else {
            div![]
        }
    }

    /// Wraps mod meta data.
    #[derive(Deserialize, Debug, Clone)]
    pub struct ListingItem(pub Mod);

    impl ListingItem {
        /// Returns whether the mod should be rendered, given a query.
        pub fn filtering(&self, query: &str) -> bool {
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
        fn archieve_link(&self) -> Node<Msg> {
            a![
                attrs! {
                    At::Href => self.0.archieve_link(),
                    At::Target => "_self"
                },
                "zip"
            ]
        }

        /// Endpoint link as a string.
        fn _endpoint_href(&self) -> String {
            let path = self.0.repo.replace("/", "--");
            format!("m/{}.html", path).into()
        }

        /// Endpoint url query string for mod. Essentially used as an ID internally.
        pub fn endpoint_query(&self) -> String {
            let path = self.0.repo.replace("/", "--");
            format!("{}", path)
        }

        // /// Endpoint link to the locally rendered README.md
        // fn endpoint_link(&self) -> Node<Msg> {
        //     a![attrs! { At::Href => self.endpoint_href() }, self.0.name]
        // }

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
            // NOTE: may want to consider using chrono instead.
            use itertools::Itertools;
            let fmt_ago = match date::ago(&self.0.date) {
                Ok(d) => format!("{}", humantime::format_duration(d))
                    .split(" ")
                    .interleave(iter::repeat(" ago"))
                    .take(2)
                    .collect(),

                Err(date::Error::Computation(_)) => "computation error".to_string(),
                Err(date::Error::Formatting(_)) => "formatting error".to_string(),
            };

            div![attrs! { At::Class => "last-commit" }, fmt_ago]
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
                Ok(n) => div![
                    div![
                        attrs! { At::Class => "stars-wrapper" },
                        iter::repeat("★")
                            .take(n)
                            .map(|x| div![attrs! { At::Class => "star" }, x])
                    ],
                    star_count,
                ],
            }
        }

        /// Returns an icon link node. This is a three stage process.
        ///
        /// 1. if official icon exist use it, and this can either be
        ///   a) icon.png (automatic),
        ///   b) yaml path (manual override);
        /// 2. (most-likely) else try out the github user icon;
        /// 3. otherwise, if all fails just pick a `nothing.png` placeholder;
        fn icon(&self) -> Node<Msg> {
            match self.0.icon.as_deref() {
                Some("") | None => {
                    let base = "https://github.com".to_string();
                    let icon = match self.0.repo.split("/").next() {
                        Some(user) => base + "/" + user + ".png?size=64",
                        None => "images/nothing.png".into(),
                    };
                    button![
                        simple_ev(Ev::Click, Msg::Overview(Some(self.endpoint_query()))),
                        img![attrs! {
                            At::Src => &icon,
                            // At::Custom("loading".into()) => "lazy",
                        },]
                    ]
                }

                Some(p) => {
                    let i = format!(
                        "{}/{}/master/{}",
                        "https://raw.githubusercontent.com", self.0.repo, p
                    );
                    button![
                        simple_ev(Ev::Click, Msg::Overview(Some(self.endpoint_query()))),
                        img![attrs! {
                            At::Src => i,
                            At::OnError => "this.src='images/nothing.png'",
                            // At::Custom("loading".into()) => "lazy",
                        }]
                    ]
                }
            }
        }

        /// Description paragraph of the mode for the listing.
        fn description(&self) -> Node<Msg> {
            p![
                style! { St::Background => "#0f0f0f" },
                attrs! { At::Class => "description" },
                match self.0.desc_markup.as_ref() {
                    Some(x) => markup::from_str(x),
                    None => vec![],
                }
            ]
        }

        /// The rendered author.
        fn by_author(&self) -> Node<Msg> {
            div![
                attrs! { At::Class => "by-author" },
                style! { St::Opacity => "60%" },
                "by ",
                markup::from_str(&self.0.author_markup)
            ]
        }

        /// The rendered version number.
        fn v_number(&self) -> Node<Msg> {
            let pre = if self.0.version.is_some() { "v" } else { "" };
            let num = self.0.version.as_ref().map(|x| x.as_str()).unwrap_or("");
            div![
                attrs! { At::Class => "v-number" },
                style! {
                    St::Color => "#484848",
                    St::Opacity => "50%",
                },
                pre,
                markup::from_str(num)
            ]
        }

        /// The thing the user will probably click on.
        fn title_link(&self) -> Node<Msg> {
            let name = &self.0.name_markup;
            div![
                attrs! { At::Class => "title-link" },
                button![
                    style! { St::Background => "#282828" },
                    simple_ev(Ev::Click, Msg::Overview(Some(self.endpoint_query()))),
                    markup::from_str(name),
                ]
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
        pub fn listing_item(&self) -> Node<Msg> {
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
                        self.archieve_link(),
                        self.wiki_link(),
                    ],
                    div![attrs! { At::Class => "box assets" }, self.assets_list()],
                    div![attrs! { At::Class => "box contents" }, self.contents_list()],
                    div![attrs! { At::Class => "box stars" }, self.stars_el()],
                ]
            ]
        }

        /// Returns the `Node<Msg>` for the overview/readme page.
        pub fn overview_item(&self) -> Node<Msg> {
            div! {
                div![
                    class!["outside"],
                    button![
                        style! { St::Background => "#282828" },
                        simple_ev(Ev::Click, Msg::Overview(None)),
                        "back",
                    ],
                ],

                self.listing_item(),

                div![
                    class!["outside"],
                    div! [
                        class!("markdown"),
                        md!(&self.0.readme)
                    ]
                ]
            }
        }
    }
}

/// Color markup rendering layer.
pub mod markup {
    use super::app::Msg;
    use mindustry_mods_core::{
        color::{Color, Name},
        markup::Markup,
    };
    use seed::{prelude::*, Style, *};

    trait ToStyle {
        fn to_style(&self) -> Style;
    }

    impl ToStyle for Color {
        fn to_style(&self) -> Style {
            style! { St::Color => self.to_string() }
        }
    }

    /// Converts input markup string to html nodes.
    pub fn from_str(input: &str) -> Vec<Node<Msg>> {
        let mut colors: Vec<Color> = vec![Name::White.into()];
        let last = |v: &[Color]| v[v.len() - 1].to_style();
        let mut output: Vec<Node<Msg>> = vec![];
        for x in Markup::from_str(input).unwrap_or(("", vec![])).1 {
            use Markup::*;
            match x {
                HexColor { r, g, b, a } => match a {
                    Some(a) => colors.push([r, g, b, a].into()),
                    None => colors.push([r, g, b].into()),
                },
                Named(input) => colors.push(input.into()),
                Popped => {
                    colors.pop();
                }
                Text(text) => output.push(span![last(&colors), text]),
                Escaped => output.push(span![last(&colors), "["]),
                NewLine => output.push(span![last(&colors), "\n"]),
            }
        }
        output
    }
}

/// Base model/msg for application.
pub mod app {
    use super::{listing::ListingItem, path::ROOT};
    use mindustry_mods_core::MOD_VERSION;
    use seed::{prelude::*, *};

    /// Package version string.
    const VERSION: &str = env!("CARGO_PKG_VERSION");

    #[wasm_bindgen]
    extern "C" {
        #[wasm_bindgen(js_namespace = console)]
        fn log(s: &str);
    }

    struct Model {
        /// A vector of mod data.
        data: Vec<ListingItem>,

        /// Button sort state of listing.
        sorting: Sorting,

        /// Filtering characters entered by user.
        filtering: Option<String>,

        /// Overview of specific mod. -- This is stored as a string,
        /// because it could come from the url query or from the
        /// loaded mod itself when clicked onto.
        ///
        /// It's simply string of `"user--repo"` which should prevent
        /// all imaginable collisions, those strings come from the repository
        /// strings, because they're already URL encoded.
        overview: Option<String>,
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
                data: vec![],
                sorting: Sorting::Commit,
                filtering: None,
                overview: None,
            }
        }
    }

    /// Sorting of listing.
    #[derive(Debug, Clone, PartialEq)]
    pub enum Sorting {
        /// Github stars.
        Stars,

        /// Commit datetime.
        Commit,
    }

    /// Main message type for seed-rs application.
    #[derive(Debug, Clone)]
    pub enum Msg {
        /// Fetched mod data for listing.
        FetchData(fetch::ResponseDataResult<Vec<ListingItem>>),

        /// Set sorting order of listing.
        SetSort(Sorting),

        /// Filter by (words?) in string for listing.
        FilterWords(String),

        /// Enables overview for some target mod.
        Overview(Option<String>),
    }

    fn update(msg: Msg, model: &mut Model, _orders: &mut impl Orders<Msg>) {
        match msg {
            Msg::FetchData(data) => match data {
                Ok(x) => model.data = x,
                Err(e) => {
                    log("modmeta loading failed");
                    log(&format!("{:?}", e));
                }
            },

            Msg::SetSort(sorting) => model.sorting = sorting,
            Msg::FilterWords(words) => model.filtering = Some(words),
            Msg::Overview(name) => {
                // FIXME: something here isn't right, this breaks returning the
                // last page from within the app for some reason or another.
                match name {
                    Some(ref modname) => {
                        seed::push_route(
                            seed::Url::new(vec![ROOT]).search(&format!("mod={}", modname)),
                        );
                    }

                    None => {
                        seed::push_route(seed::Url::new(vec![ROOT]));
                    }
                }

                model.overview = name;
            }
        }
    }

    fn view(model: &Model) -> impl View<Msg> {
        div! {
            attrs! { At::Class => "app" },

            // header section
            header![
                match &model.overview {
                    None => h1!["Mindustry Mods"],
                    Some(_) => a![
                        // attrs! { At::Href => "/" },
                        simple_ev(Ev::Click, Msg::Overview(None)),
                        h1!["Mindustry Mods"]
                    ]
                },
                a![
                    attrs! { At::Href => "https://github.com/SimonWoodburyForget/mindustry-mods" },
                    img![attrs! {
                        At::Src => format!("{}/images/GitHub-Mark/PNG/GitHub-Mark-Light-64px.png", ROOT),
                    }]
                ]
            ],

            // button and search bar section
            // (or nothing if overview mode)
            match &model.overview {
                None => div! {
                    attrs! { At::Class => "inputs" },
                    input![
                        attrs! {
                            "placeholder" => "filter by words",
                            At::Value => &model.filtering.as_deref().unwrap_or(""),
                        },
                        input_ev(Ev::Input, Msg::FilterWords)
                    ],
                    div! {
                        attrs! { At::Class => "buttons" },
                        p!["Order by "],
                        button![
                            attrs! { At::Class => if model.sorting == Sorting::Stars {"active"} else {""}},
                            simple_ev(Ev::Click, Msg::SetSort(Sorting::Stars)),
                            "stars"
                        ],
                        button![
                            attrs! { At::Class => if model.sorting == Sorting::Commit {"active"} else {""}},
                            simple_ev(Ev::Click, Msg::SetSort(Sorting::Commit)),
                            "commit"
                        ],
                    }
                },
                Some(_) => div![],
            },

            // listing or overview section
            match &model.data
                .iter()
                .find(|x| Some(x.endpoint_query()) == model.overview)
            {
                Some(overview) => overview.overview_item(),
                None => div! {
                    attrs! { At::Class => "listing-container" },
                    model.listing(),
                },
            }
        }
    }

    async fn fetch_data() -> Result<Msg, Msg> {
        Request::new(format!("{}/data/modmeta.{}.json", ROOT, MOD_VERSION))
            .method(Method::Get)
            .fetch_json_data(Msg::FetchData)
            .await
    }

    /// Initialize data.
    fn after_mount(_: Url, orders: &mut impl Orders<Msg>) -> AfterMount<Model> {
        orders.perform_cmd(fetch_data());
        AfterMount::default()
    }

    fn routes(url: Url) -> Option<Msg> {
        let Url { search, .. } = url;
        Some(match search {
            Some(search) => {
                let mut args = search.split("=");
                let k = args.next();
                let v = args.next();
                match (k, v) {
                    (Some("mod"), Some(name)) => Msg::Overview(Some(name.to_string())),
                    _ => Msg::Overview(None),
                }
            }

            None => Msg::Overview(None),
        })
    }

    /// Entry point of app.
    #[wasm_bindgen(start)]
    pub fn render() {
        log(&format!("frontend v{}", VERSION));
        log(&format!("data v{} loaded", MOD_VERSION));
        seed::App::builder(update, view)
            .routes(routes)
            .after_mount(after_mount)
            .build_and_start();
    }
}
