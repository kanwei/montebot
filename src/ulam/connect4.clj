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

(defn check-terminal [state]
  (cond (check-win (:p1 state)) 1
        (check-win (:p2 state)) -1
        (empty? (valid-moves state)) 0))

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
  (if-let [result (check-terminal state)]
    {:state state :terminal true :visited 0 :score 0 :result result}
    {:state state :unvisited (set (valid-moves state)) :action move :visited 0 :score 0 :children {}})
  )

(add-node nil (init))

(def tree {:visited 0
           :score 0
           :moves #{}
           :children {:move
                       {:visited 0 :score 0 :children {}}}})

(defn uct [node parent-visits]
  (if (zero? (:visited node))
    Long/MAX_VALUE
    (+ (/ (:score node)
          (:visited node))
       (Math/sqrt (/ (* 2 (Math/log parent-visits))
                     (:visited node))))))

#_(crit/quick-bench (uct {:score 3.0 :visited 10} 100))

(defn update-node [root path result]
  (-> root
      (update-in [path :visited] inc)
      (update-in [path :score] #(+ % result))))

(defn backprop [root path result]
  (if-not (empty? path)
    (recur (update-node root path result)
           (subvec path 0 (dec (count path)))
           result)
    (update-node root [] result)))

(subvec [1 2 3] 0 (dec (count [1 2 3])))


(defn best-child [mtcs path]
  (last (sort-by #(uct (second %) (:visited (mtcs path)))
                 (filter (fn [[p node]]
                           (and (= (count p)
                                   (inc (count path)))
                                (= (subvec p 0 (count path))
                                   path))) mtcs))))

(defn simulate-game [state]
  (if-let [result (check-terminal state)]
    result
    (let [move (rand-nth (valid-moves state))]
      (recur (perform-move state move)))))

(defn add-node [move state]
  (if-let [result (check-terminal state)]
    {:state state :terminal true :visited 0 :score 0 :result result}
    {:state state :unvisited (set (valid-moves state)) :action move :visited 0 :score 0 :children {}})
  )

(defn generate-node [mtcs path state]
  (if-let [result (check-terminal state)]
    {:state state :terminal true :visited 0 :score 0 :result result}
    (reduce (fn [coll move]
              (assoc coll (conj path move) {:state (perform-move state move) :visited 0 :score 0})
              )
            mtcs
            (valid-moves state)))
  )

(backprop (generate-node {[] {:visited 0 :score 0}} [] (init)) [6] 1)

(defn process [mtcs path]
  (let [node (mtcs path)]
      (cond
        (> (:visited node) 100)
        (sort mtcs)

        (zero? (:visited node))
        (recur (-> mtcs
                 (generate-node path (:state node))
                 (backprop path (simulate-game (:state node))))
               [])

        (:terminal node)
        (recur (backprop mtcs path (:result node)) [])

        :else (let [[child-path _] (best-child mtcs path)]
                (recur mtcs child-path)))))

(time (loop [root {[] {:visited 0 :score 0 :state (init)}}]
   (process root [])))

(defn simulate [state]
  (let [valids (valid-moves state)]
    (loop [n 0
           stats (into {}
                       (for [move valids]
                         [move {:total 0 :n 0}]))]
      (if (= 1 (mod n 10000))
        (format-stats stats))
      (let [random-move (rand-nth valids)
            result (simulate-game (perform-move state random-move))]
        (recur (inc n)
               (-> stats
                   (update-in [random-move :n] inc)
                   (update-in [random-move :total] #(+ % result))))))))

#_(simulate {:active :p2 :p1 #{3} :p2 #{}})

