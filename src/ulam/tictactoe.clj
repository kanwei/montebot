(ns ulam.tictactoe
  (require [ulam.core :as ulam]
           [clojure.math.numeric-tower :as math]))

(defn init []
  {:active :p1
  :p1 2r000000000
  :p2 2r000000000})

(defn filter-board [f board]
  (keep f (map-indexed (fn [i v]
                  (if (nil? v)
                    i))
                board)))

(def possible-moves
  (for [i (range 9)]
    (math/expt 2 i)))

(defn pick-move [state]
  (let [occupied (bit-or (:p1 state) (:p2 state))]
    (rand-nth (keep identity (map-indexed (fn [i pos]
                              (if (zero? (bit-and occupied pos))
                                i))
                            possible-moves)))))

(def winning-positions
  [2r111000000                                              ;horizontals
   2r000111000
   2r000000111
   2r100100100                                              ;verticals
   2r010010010
   2r001001001
   2r100010001                                              ;diagonals
   2r001010100
    ])

(defn check-win [board]
  (some identity (map (fn [winning-pos]
                        (= winning-pos (bit-and board winning-pos)))
                      winning-positions)))

(defn simulate [state]

  )

(defn simulate-step [state player]
  (println state)
  (cond (check-win (:p1 state)) 1
        (check-win (:p2 state)) -1
        (= 2r111111111 (bit-or (:p1 state) (:p2 state))) 0
        :else (let [random-move (pick-move state)
                    bit (math/expt 2 random-move)]
                (recur
                 (update-in state [player] #(bit-or bit %))
                 (if (= :p1 player) :p2 :p1)))))

(simulate-step (init) :p1)
