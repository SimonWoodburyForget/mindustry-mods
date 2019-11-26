(ns clodustry.core
  (:require
   [reagent.core :as r] 
   [ajax.core :as ajax :refer [GET]]))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Constants


(def home "/mindustry-mods")
(def m (clojure.string/join [home "/m"]))

;; Place to move things before replacing root index.html
(def test-home "/mindustry-mods/test.html")

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
;; Views

(defn home-page []
  [:div [:h2 "Welcome to Reagent"]])

(defn header []
  [:header
   [:a {:href home}
    [:h1 "Mindustry Mods"]]])

(defn footer []
  [:footer
   [:a {:href "https://github.com/SimonWoodburyForget/mindustry-mods/blob/master/CONTRIBUTING.md#adding-mods-to-the-listing"}
    "Adding mods to this list."]])

(defn icon [m]
  "Returns icon tag with image and src url if icon exists."
  [:icon [:img
    (if (clojure.string/blank? (m "icon")) {}
        {:src (m "icon_url")})]])

(defn description [m]
  [:p.description
   (m "desc")])

(defn endpoint [m]
  [:a {:href (clojure.string/join [home "/" (m "endpoint")])}
   (m "name")])

(defn version [m]
  (if (clojure.string/blank? (m "version")) [:span.version]
      [:span.version "v" (m "version")]))

(defn repository-link [m]
  [:a {:href (m "link")} "repository"])

(defn archive-link [m]
  [:a {:href (m "archive_link")} "zip"])

(defn delta-ago [m]
  (m "delta_ago"))

(defn stars-fmt [m]
  (m "stars_fmt"))

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

(defn table
  [data]
  [:table
   [:thead
    [:tr
     [:th "metadata"]
     [:th [:input {:type "button" :value "last-commit"
                   :on-click #(reset! sorting data)}]]
     [:th [:input {:type "button" :value "stars"
                   :on-click #(reset! sorting (sort-by (fn [m] (m "stars")) > data))}]]]]
   [:tbody (make-rows @sorting)]])

(defn listing []
  [:div
   [:p "This is a currated list of Mindustry mods found on GitHub with authors, descriptions, commit date and stars automatically pulled from the repositories. You can report broken mods, suggest better icons, or add missing mods "
    [:a {:href "https://github.com/SimonWoodburyForget/mindustry-mods/blob/master/CONTRIBUTING.md#adding-mods-to-the-listing"} "here"] "."]
   (table data)])

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Initialize app



(defn mount-root []
  (r/render [listing] (.getElementById js/document "app")))

(defn init! []
   (mount-root))
