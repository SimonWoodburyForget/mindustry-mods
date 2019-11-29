(ns clodustry.core
  (:require
   [reagent.core :as r]
   [ajax.core :as ajax :refer [GET]]))

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
;; Loading

;; JSON string data dumped by Python, inside a JS string.
(def data
  (js->clj js/rawData
           :keywordize-keys false))


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

(defn delta-ago [m]
  (m "delta_ago"))

(defn stars-fmt [m]
  (if (= 0 (m "stars")) "☆"
  (repeat (m "stars") "★ ")))

(defn make-rows
  [mods]
  
  (for [m mods]
    [:tr
     [:td.metadata
      [:p (icon m) " " (endpoint m) " by " (m "author") " " (version m)]
      (description m)
      [:p (repository-link m) " " (archive-link m)]]
     [:td.delta (delta-ago m) " ago"]
     [:td.stars (stars-fmt m)]]))

(def sorting (r/atom data))

(def query (r/atom ""))

(defn search
  "Simple (and very inefficient) word search."
  [m q]

  (defn included?
    [a b]
    (clojure.string/includes?
     (clojure.string/lower-case a)
     (clojure.string/lower-case b)))
  
  (reduce
   (fn [a b] (or a b))
   [(included? (m "readme") q)
    (included? (m "repo") q)
    (included? (m "author") q)
    (included? (m "name") q)
    (included? (m "desc") q)]))

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
   [:input {:type "text" :value @query
            :on-change #(reset! query (-> % .-target .-value))
            :placeholder "filter a word"}]
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
