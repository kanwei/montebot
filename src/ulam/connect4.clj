(ns ulam.connect4
  (require [ulam.core :as ulam]
           [criterium.core :as crit]
           [io.aviso.repl :as repl]
           [clojure.math.numeric-tower :as math]))

(defn init []
  {:active :p1
   :p1 #{}
   :p2 #{}})

(def cols (vec (range 7)))

(defn highest-column [xs col]
  (let [max-col (filter #(= col (mod % 7)) xs)]
    (if (empty? max-col)
      col
      (let [max-v (apply max max-col)]
        (if (> max-v 34)
          nil
          (+ 7 max-v))))))

(defn valid-moves [state]
  (filter identity (map (partial highest-column (concat (:p1 state) (:p2 state)))
        cols)))

(valid-moves (init))

(empty? (valid-moves {:p1 #{35 36 37 38 39 40 41}}))

(defn check-nw [pos bits]
  (and
    (>= (mod pos 7) 3)
    (< pos 21)
    (= 3 (count (clojure.set/intersection bits
                                          #{(+ pos 6) (+ pos 12) (+ pos 18)})))))

(defn check-north [pos bits]
  (and (< pos 21)
       (= 3 (count (clojure.set/intersection bits
                                             #{(+ pos 7) (+ pos 14) (+ pos 21)})))))

(defn check-ne [pos bits]
  (and
    (< (mod pos 7) 4)
    (< pos 21)
    (= 3 (count (clojure.set/intersection bits
                                          #{(+ pos 8) (+ pos 16) (+ pos 24)})))))

(defn check-east [pos bits]
  (and
    (< (mod pos 7) 4)
    (= 3 (count (clojure.set/intersection bits
                                          #{(+ pos 1) (+ pos 2) (+ pos 3)})))))

(defn check-win [board]
  (some identity (map (fn [pos]
                        (or (check-east pos board)
                            (check-north pos board)
                            (check-ne pos board)
                            (check-nw pos board)))
                      board)))

#_(crit/quick-bench (check-win #{1 3 4 12 20 23}))

(defn format-stats [stats]
  (println "===============================")
  (doseq [[move stats] (sort stats)]
    (println move (format "%.5f" (try (double (/ (:total stats) (:n stats)))
                                      (catch Exception e 0.0))))))

(defn perform-move [state move]
  (-> state
      (update-in [(:active state)] #(conj % move))
      (assoc :active (if (= :p1 (:active state)) :p2 :p1))))


(defn add-node [move state]
  {:state state :unvisited (set (valid-moves state)) :action move :visited 0 :score 0 :children {}}
  )

(add-node nil (init))

(def tree {:visited 0
           :score 0
           :moves #{}
           :children {:move
                       {:visited 0 :score 0 :children {}}
                       }})

(defn uct [node parent-visits]
  (+ (/ (:score node)
        (:visited node))
     (Math/sqrt (/ (* 2 (Math/log parent-visits))
                   (:visited node)))))

#_(crit/quick-bench (uct {:score 3.0 :visited 10} 100))

(defn update-node [root path result]
  (-> root
      (update-in (concat (interleave (repeat :children) path) [:visited]) inc)
      (update-in (concat (interleave (repeat :children) path) [:score]) #(+ % result))))



(defn backprop [root path result]
  (if-not (empty? path)
    (recur (update-node root path result)
           (butlast path)
           result)
    (update-node root [] result)))

(backprop {:visited 0 :score 0 :children {0 {:visited 0 :score 0}}}
             [0]
             15)



(defn process [mtcs node]
  (if-not (empty? (:unvisited node))
    (let [move (rand-nth (vec (:unvisited node)))
          new-node (add-node move (perform-move (:state node) move))
          result (simulate-step (perform-move (:state node) move))
          ]
      (recur (-> mtcs
                 (update-in [:unvisited] disj move)
                 (assoc-in [:children move] new-node)
                 (backprop [move] result)
               ) mtcs))
    (map #(uct % (:visited node))
         (vals (:children node)))))

(let [root (add-node :root (init))]
  (process root root))

(defn simulate-step [state]
  (cond (check-win (:p1 state)) 1
        (check-win (:p2 state)) -1
        (empty? (valid-moves state)) 0
        :else (let [move (rand-nth (valid-moves state))]
                (recur (perform-move state move)))))

(defn simulate [state]
  (let [valids (valid-moves state)]
    (loop [n 0
           stats (into {}
                       (for [move valids]
                         [move {:total 0 :n 0}]))]
      (if (= 1 (mod n 10000))
        (format-stats stats))
      (let [random-move (rand-nth valids)
            result (simulate-step (perform-move state random-move))]
        (recur (inc n)
               (-> stats
                   (update-in [random-move :n] inc)
                   (update-in [random-move :total] #(+ % result))))))))

#_(simulate {:active :p2 :p1 #{3} :p2 #{}})

