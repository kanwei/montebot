(set-env!
  :source-paths #{"src"}
  :resource-paths #{"resources/public"}
  :dependencies '[
                  ; Build Deps
                  [adzerk/boot-cljs "1.7.228-2" :scope "test"]
                  [kanwei/boot-http "0.7.4" :scope "test"]
                  [deraen/boot-sass "0.3.0"]
                  [boot-deps "0.1.6" :scope "test"]

                  [org.clojure/clojure "1.9.0-alpha14" :scope "provided"]
                  [org.clojure/clojurescript "1.9.293"]
                  [org.clojure/test.check "0.9.0"]
                  [org.clojure/core.memoize "0.5.9"]

                  ; Webjars
                  [ring-webjars "0.1.1"]

                  ; CLJS
                  [re-frame "0.9.1"]
                  [reagent "0.6.0" :exclusions [cljsjs/react-dom-server]]
                  [cljsjs/react "15.4.0-0"]
                  [cljsjs/react-dom "15.4.0-0"]
                  [cljsjs/react-dom-server "15.4.0-0"]

                  ; CLJ
                  [org.clojure/math.numeric-tower "0.0.4"]])

(task-options!
  pom {:project 'montebot
       :version "0.1.0-SNAPSHOT"}
  aot {:namespace '#{montebot.handler}}
  jar {:main     'montebot.handler
       :manifest {"Description" "Montebot app"
                  "Url"         "https://github.com/kanwei/montebot"}})

(defn- generate-lein-project-file! [& {:keys [keep-project] :or {:keep-project true}}]
  (require 'clojure.java.io)
  (let [pfile ((resolve 'clojure.java.io/file) "project.clj")
        ; Only works when pom options are set using task-options!
        {:keys [project version]} (:task-options (meta #'boot.task.built-in/pom))
        prop #(when-let [x (get-env %2)] [%1 x])
        head (list* 'defproject (or project 'boot-project) (or version "0.0.0-SNAPSHOT")
                    (concat
                      (prop :url :url)
                      (prop :license :license)
                      (prop :description :description)
                      [:dependencies (get-env :dependencies)
                       :repositories (get-env :repositories)
                       :source-paths (vec (concat (get-env :source-paths)
                                                  (get-env :resource-paths)))]))
        proj (pp-str head)]
    (if-not keep-project (.deleteOnExit pfile))
    (spit pfile proj)))

(deftask lein-generate
         "Generate a leiningen `project.clj` file.
          This task generates a leiningen `project.clj` file based on the boot
          environment configuration, including project name and version (generated
          if not present), dependencies, and source paths. Additional keys may be added
          to the generated `project.clj` file by specifying a `:lein` key in the boot
          environment whose value is a map of keys-value pairs to add to `project.clj`."
         []
         (generate-lein-project-file! :keep-project true))

(require '[adzerk.boot-cljs :refer :all])
(require '[pandeiro.boot-http :refer :all])
(require '[deraen.boot-sass :refer :all])

(deftask dev
         "Run when developing"
         []
         (lein-generate)
         (comp
           (watch)
           (sass :output-style :nested)
           (serve :dir "target" :port 8888)
           #_(serve :init 'montebot.handler/init
                  :handler 'montebot.handler/app
                  :reload true)
           (cljs :compiler-options {:output-wrapper true
                                    :parallel-build true
                                    :pretty-print   false
                                    :compiler-stats true}
                 :optimizations :none)
           #_(repl :port 62909
                   :server true)))

(deftask uberjar
         "Build uberjar"
         []
         (comp
           (cljs :optimizations :advanced
                 :compiler-options {:output-wrapper true
                                    :parallel-build false
                                    :pretty-print   false})
           (sass :output-style :compressed)
           (aot)
           (pom)
           (uber)
           (jar :file "montebot-uberjar.jar")
           #_(sift :include #{#"montebot-uberjar.jar"})
           (target)))
