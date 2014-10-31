(ns ulam.connect4client
  (:require clojure.set
            [reagent.core :as reagent :refer [atom]]
            [ulam.connect4 :as connect4]))

(enable-console-print!)

#_(println (connect4/next-move [0]))

(def moves (atom []))

(range (* 6 7))

(defn position-state [pos]
  (let [player (get (zipmap @moves (cycle [:p1 :p2])) pos)]
    (case player
      :p1 [:svg {:height 50 :width 50}
           [:circle {:cx 25 :cy 25 :r 15 :fill "red"}]]
      :p2 [:svg {:height 50 :width 50}
           [:circle {:cx 25 :cy 25 :r 15 :fill "blue"}]]
      nil "")))

(defn print-board []
  [:table
   [:tr
    (let [moves (connect4/valid-moves (connect4/state-from-moves (connect4/initial-state) @moves))]
      (for [column (range 7)]
        [:td
         (if-let [n (first (filter #(= column (mod % 7)) moves))]
           [:button
            {:on-click #(player-move n)} "PLAY"])]))
    ]
   (for [row (range 5 -1 -1)]
     [:tr
      (for [column (range 7)]
        [:td.grid (position-state (+ column (* row 7)))])
      ])
   ])

(defn player-move [move]
  (swap! moves conj move)
  (reset! moves (connect4/next-move @moves)))

(defn game-values []
  (if-let [result (connect4/check-terminal (connect4/state-from-moves (connect4/initial-state) @moves))]
    [:h1 (str "The game is: " result)])
  )

(defn app []
  [:div
   (print-board)
   (game-values)])

(reagent/render-component [app] (.getElementById js/document "app"))
