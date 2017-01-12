(ns montebot.connect4client
  (:require-macros [reagent.ratom :refer [reaction]])
  (:require clojure.set
            [reagent.core :as reagent :refer [atom]]
            [montebot.connect4 :as connect4]
            [re-frame.core :refer [register-handler subscribe dispatch register-sub]]
            ))

(enable-console-print!)

(def moves (atom []))

(register-sub :state
              (fn [db _]
                (reaction @db)))

(register-handler :player-move (fn [app-state [_ new-move]]
                                 (dispatch ^:flush-dom [:new-move])
                                 (-> app-state
                                     (update :moves conj new-move)
                                     (update :state connect4/perform-move new-move))))

(register-handler :new-move (fn [app-state _]
                              (let [new-moves (connect4/next-move (:moves app-state) (:iterations app-state))]
                                (assoc app-state :moves new-moves
                                                 :state (connect4/state-from-moves (connect4/initial-state) new-moves)))))

(register-handler :ai-move (fn [app-state [_ k v]]
                             (assoc app-state k v)))

(register-handler :initialize (fn [app-state [_]]
                                {:moves []
                                 :iterations 1000
                                 :state (connect4/initial-state)
                                 :turn :p1
                                 :game-over false}))


(dispatch [:initialize])

(defn svg-circle [color]
  [:svg {:height 50 :width 50}
   [:circle {:cx 25 :cy 25 :r 15 :fill color}]])

(defn render-position [zipped-map pos]
  (let [player (get zipped-map pos)]
    (case player
      :p1 (svg-circle "blue")
      :p2 (svg-circle "red")
      nil "")))

(defn print-board []
  (let [state (subscribe [:state])
        zipped-map (zipmap (:moves @state) (cycle [:p1 :p2]))]
    [:table
     [:tr
      ; Generate buttons above columns if there's a valid move in that column
      (let [moves (connect4/valid-moves (:state @state))]
        (for [column (range 7)]
          [:td
           (if-let [n (first (filter #(= column (mod % 7)) moves))]
             [:button.btn.btn-primary.btn-sm
              {:on-click #(dispatch [:player-move n])} "Place"])]))
      ]
     ; Generate rest of table
     (for [row (range 5 -1 -1)]
       [:tr
        (for [column (range 7)]
          [:td.grid
           #_[:span.pull-right (+ column (* row 7))]
           (render-position zipped-map (+ column (* row 7)))])])
     ]))

(defn game-values []
  (let [state (subscribe [:state])]
    [:div
     [:div [:input {:value (:iterations @state)}]]
     [:div (str (:moves @state))]
     (if-let [result (connect4/check-terminal (connect4/state-from-moves (connect4/initial-state) @moves))]
       [:h1 (str "The game is: " result " " (connect4/state-from-moves (connect4/initial-state) @moves))])])
  )

(defn app []
  [:div.row
   [:div.col-md-6 (print-board)]
   [:div.col-md-6 (game-values)]])

(reagent/render-component [app] (.getElementById js/document "app"))
