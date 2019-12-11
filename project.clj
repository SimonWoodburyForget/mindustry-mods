(defproject clodustry "0.1.0-SNAPSHOT"
  :description "Mindustry-Mods listing html generation."
  :url "https://github.com/SimonWoodburyForget/mindustry-mods"
  :license {:name "GNU General Public License v3.0"
            :url "https://github.com/SimonWoodburyForget/mindustry-mods/blob/master/LICENSE"}
  
  :dependencies [[org.clojure/clojure "1.10.1"]
                 [org.clojure/clojurescript "1.10.597"]
                 [reagent "0.9.0-rc3"]
                 ;; [cljs-ajax "0.8.0"]
                 ;; [org.clojure/data.json "0.2.7"]
                 ]

  :plugins [[lein-cljsbuild "1.1.7"]
            [lein-figwheel "0.5.19"]]

  :clean-targets ^{:protect false}

  [:target-path
   [:cljsbuild :builds :app :compiler :output-dir]
   [:cljsbuild :builds :app :compiler :output-to]]

  :resource-paths ["."]

  :figwheel {:http-server-root "."
             :nrepl-port 7002
             :nrepl-middleware [cider.piggieback/wrap-cljs-repl]
             :css-dirs ["src"]}

  :cljsbuild {:builds
              {:app
               {:source-paths ["src" "env/dev/cljs"]
                :compiler
                {:main "clodustry.dev"
                 :output-to "js/app.js"
                 :output-dir "js/out"
                 :asset-path "js/out"
                 :source-map true
                 :optimizations :none
                 :pretty-print  true}
                :figwheel
                {:on-jsload "clodustry.core/mount-root"
                 :open-urls ["http://localhost:3449/index.html"]}}
               :release
               {:source-paths ["src" "env/prod/cljs"]
                :compiler
                {:output-to "js/app.js"
                 ;; :output-dir "js/release"
                 :optimizations :advanced
                 :infer-externs true
                 :pretty-print false}}}}

  :aliases {"package" ["do" "clean" ["cljsbuild" "once" "release"]]}

  :profiles {:dev {:source-paths ["src" "env/dev/clj"]
                   :dependencies [[binaryage/devtools "0.9.11"]
                                  [figwheel-sidecar "0.5.19"]
                                  [nrepl "0.6.0"]
                                  [cider/piggieback "0.4.2"]]}})
