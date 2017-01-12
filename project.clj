(defproject
  montebot
  "0.1.0-SNAPSHOT"
  :dependencies
  [[adzerk/boot-cljs "1.7.228-2" :scope "test"]
   [kanwei/boot-http "0.7.4" :scope "test"]
   [deraen/boot-sass "0.3.0"]
   [boot-deps "0.1.6" :scope "test"]
   [org.clojure/clojure "1.9.0-alpha14" :scope "provided"]
   [org.clojure/clojurescript "1.9.293"]
   [org.clojure/test.check "0.9.0"]
   [org.clojure/core.memoize "0.5.9"]
   [ring-webjars "0.1.1"]
   [re-frame "0.9.1"]
   [reagent "0.6.0" :exclusions [cljsjs/react-dom-server]]
   [cljsjs/react "15.4.0-0"]
   [cljsjs/react-dom "15.4.0-0"]
   [cljsjs/react-dom-server "15.4.0-0"]
   [org.clojure/math.numeric-tower "0.0.4"]]
  :repositories
  [["clojars" {:url "https://repo.clojars.org/"}]
   ["maven-central" {:url "https://repo1.maven.org/maven2"}]]
  :source-paths
  ["src" "resources/public"])