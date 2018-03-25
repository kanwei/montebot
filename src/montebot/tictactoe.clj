(ns montebot.tictactoe
  (require [montebot.core :as montebot]
           [criterium.core :as crit]
           [clojure.math.numeric-tower :as math]))

(defn init []
  {:active :p1
   :p1     2r000000000
   :p2     2r000000000})

(def possible-moves
  (for [i (range 9)]
    (math/expt 2 i)))

(defn valid-moves [state]
  (let [occupied (bit-or (:p1 state) (:p2 state))]
    (filter #(zero? (bit-and occupied %))
            possible-moves)))

(def winning-positions
  [2r111000000                                              ;horizontals
   2r000111000
   2r000000111
   2r100100100                                              ;verticals
   2r010010010
   2r001001001
   2r100010001                                              ;diagonals
   2r001010100])

(defn check-win [board]
  (some identity (map (fn [winning-pos]
                        (= winning-pos (bit-and board winning-pos)))
                      winning-positions)))

(defn format-stats [stats]
  (println "===============================")
  (doseq [[move stats] (sort stats)]
    (println move (format "%.5f" (try (double (/ (:total stats) (:n stats)))
                                      (catch Exception e 0.0))))))

(defn perform-move [state move]
  (-> state
      (update-in [(:active state)] #(bit-or % move))
      (assoc :active (if (= :p1 (:active state)) :p2 :p1))))

(defn simulate-step [state]
  (cond (check-win (:p1 state)) 1
        (check-win (:p2 state)) -1
        (= 2r111111111 (bit-or (:p1 state) (:p2 state))) 0
        :else (let [move (rand-nth (valid-moves state))]
                (recur (perform-move state move)))))


(defn simulate [state]
  (let [valids (valid-moves state)]
    (loop [n 0
           stats (into {}
                       (for [move valids]
                         [move {:total 0 :n 0}]))]
      (if (= 1 (mod n 100000))
        (format-stats stats))
      (let [random-move (rand-nth valids)
            result (simulate-step (perform-move state random-move))]
        (recur (inc n)
               (-> stats
                   (update-in [random-move :n] inc)
                   (update-in [random-move :total] #(+ % result))))))))




#_(simulate (init))
#_(simulate {:p1 2r000011100 :p2 2r000100011 :active :p1})

#_(crit/quick-bench (simulate-step (init)))
