(ns clodustry.core
  (:require
   [reagent.core :as r]))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Path Stuff

(def home "/mindustry-mods")


(def index-html (clojure.string/join [home "/index.html"]))

;; (def test-home "/mindustry-mods/test.html")

(def contribute-md "https://github.com/SimonWoodburyForget/mindustry-mods/blob/master/CONTRIBUTING.md#adding-mods-to-the-listing")

(defn mod-html
  [repo-name]
  
  (def path
    (clojure.string/replace
     repo-name "/" "--"))
  
  (clojure.string/join [home "/m/" path ".html"]))


;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Data and Stuff

;; JSON string data dumped by Python, inside a JS string.
(def data
  (js->clj js/rawData
           :keywordize-keys false))

(def query (r/atom ""))
(def sorting (r/atom data))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Helpers

(defn map-tag [tag xs]
  (map (fn [x] [tag x]) xs))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Table Stuff

(defn icon [m]
  "Returns icon tag with image and src url if icon exists."
  [:icon [:img
    (if (clojure.string/blank? (m "icon")) {}
        {:src (clojure.string/join
               ["https://raw.githubusercontent.com/"
                (m "repo")
                "/master/"
                (m "icon_raw")])})]])

(defn description [m]
  [:p.description
   (m "desc")])

(defn endpoint [m]
  [:a {:href (mod-html (m "repo"))}
   (m "name")])

(defn version [m]
  (if (clojure.string/blank? (m "version")) [:span.version]
      [:span.version "v" (m "version")]))

(defn repository-link [m]
  [:a {:href (m "link")} "repository"])

(defn archive-link [m]
  [:a {:href (clojure.string/join
              ["https://github.com/"
               (m "repo")
               "/archive/master.zip"])} "zip"])

(defn wiki-link [m]
  (if (some? (m "wiki"))
    [:a {:href (m "wiki")} "wiki"]
    ))

(defn delta-ago [m]
  (m "delta_ago"))

(defn stars-fmt [m]
  (if (= 0 (m "stars")) "☆"
      (repeat (m "stars") "★ ")))

;; (defn tag-button
;;   [tag]

;;   (defn adder [t]
;;     (defn add-tag [q]
;;       (.log js/console t)
;;       (clojure.string/join "" (concat [q " " t]))))

;;   [:tag
;;    [:input
;;     {:type "button" :value tag
;;      :on-click #(swap! query (adder tag))}]])

(defn info
  "Rander a nice inline list of game assets and content."
  [m]

  (def assets
    (set (m "assets")))
  (def contents
    (set (m "contents")))
  (def fmt
    (clojure.set/difference assets #{"content"}))

  [:div
   (when (not-empty fmt)
     [:tags.assets (map-tag :tag fmt) ])
   (when (not-empty contents)
     [:tags.contents (map-tag :tag contents)])])

(defn make-rows
  [mods]

  (for [m mods]
    [:tr
     [:td.metadata
      [:p (icon m) " " (endpoint m) " by " (m "author") " " (version m)]
      (info m)
      (description m)
      [:p
       (repository-link m) " "
       (archive-link m) " "
       (wiki-link m) " "]]
     [:td.delta (delta-ago m) " ago"]
     [:td.stars (stars-fmt m)]]))


(defn search
  "Simple (and very inefficient) word search."
  [m q]

  (defn included?
    [a b]
    (clojure.string/includes?
     (clojure.string/lower-case a)
     (clojure.string/lower-case b)))

  (defn sword
    "Search a word."
    [m w]

    (reduce
     (fn [a b] (or a b))
     [(included? (m "readme") w)
      (included? (m "repo") w)
      (included? (m "author") w)
      (included? (m "name") w)
      (included? (m "desc") w)
      (some #{w} (m "contents"))
      (some #{w} (m "assets"))]))

  (def qs (clojure.string/split q " "))

  (reduce
   (fn [a b] (and a b))   
   (map (fn [qq] (sword m qq)) qs)))

(defn table
  [data]

  (def last-commit
    [:input
     {:type "button" :value "last-commit"
      :on-click #(reset! sorting data)}])
  (def stars
    [:input
     {:type "button" :value "stars"
      :on-click #(reset! sorting (sort-by (fn [m] (m "stars")) > data))}])
  
  (def headers
    [:tr (map-tag :th ["metadata" last-commit stars])])
  (def rows
    (make-rows (filter (fn [m] (search m @query)) @sorting)))
  [:table
   [:thead headers]
   [:tbody rows]])

(defn listing
  []
  [:content
   [:p "This is a currated list of Mindustry mods found on GitHub with authors, descriptions, commit date and stars automatically pulled from the repositories. You can report broken mods, suggest better icons, or add missing mods " [:a {:href contribute-md} "here"] "."]
   [:div
    [:input {:type "text" :value @query
             :on-change #(reset! query (-> % .-target .-value))
             :placeholder "filter by words"}]]
   
   (table data)])

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Views/App

(def header
  [:header
   [:a {:href index-html }
    [:h1 "Mindustry Mods"]]])

(def footer
  [:footer
   [:a {:href "https://github.com/SimonWoodburyForget/mindustry-mods/blob/master/CONTRIBUTING.md#adding-mods-to-the-listing"}
    "Adding mods to this list."]])

(defn app []
  [:app
   header
   (listing)
   footer])

(defn mount-root []
  (r/render [app] (.getElementById js/document "app")))

(defn init! []
  (mount-root))
