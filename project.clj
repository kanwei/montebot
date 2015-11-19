(defproject ulam "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.7.0"]
                 [org.clojure/clojurescript "1.7.170"]
                 [org.clojure/core.async "0.2.374"]
                 [criterium "0.4.3"]
                 [re-frame "0.5.0"]
                 [reagent "0.5.1"]
                 [com.taoensso/timbre "4.1.4"]
                 [org.clojure/math.numeric-tower "0.0.4"]]
  :plugins [[lein-cljsbuild "1.1.1"]
            [lein-figwheel "0.5.0-1"]]
  :cljsbuild {
              :builds [{:id "ulam"
                        :source-paths ["src"]
                        :compiler {
                                   :figwheel true
                                   :output-to "resources/public/js/cljs.js"
                                   :output-dir "resources/public/js/cljs"
                                   :optimizations :none
                                   :source-map true}}]}
  :main ^:skip-aot ulam.core
  :target-path "target/%s"
  :profiles {:uberjar {:aot :all}})
