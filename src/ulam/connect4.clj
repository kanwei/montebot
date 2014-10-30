(ns ulam.connect4
  (require [ulam.core :as ulam]
           [criterium.core :as crit]
           [io.aviso.repl :as repl]
           [clojure.math.numeric-tower :as math]))

(defn initial-state []
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

(valid-moves (initial-state))

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
  (cond (check-win (:p1 state)) :p1
        (check-win (:p2 state)) :p2
        (empty? (valid-moves state)) :draw))

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
      (update-in [path :score]
                 (fn [x] (+ x (let [player (get-in root [path :state :active])]
                                (cond
                                 (= result :draw) 0.5
                                 (= result player) 0
                                 (not= result player) 1
                                 )))))))

(defn backprop [root path result]
  (if (nil? (root path))
    root
    (recur (update-node root path result)
           (if-not (empty? path)
             (subvec path 0 (dec (count path)))
             nil)
           result)
    ))

(defn next-player [player]
  (- 3 player))

(defn best-child [mtcs path]
  (last (sort-by #(uct (mtcs %) (:visited (mtcs path)))
                 (:children (mtcs path)))))

(defn most-visited-child [mtcs path]
  (last (sort-by #(:visited (mtcs %))
                 (:children (mtcs path)))))

(defn simulate-game [state]
  (if-let [result (check-terminal state)]
    result
    (let [move (rand-nth (valid-moves state))]
      (recur (perform-move state move)))))

(defn state-from-moves [state move-list]
  (if (empty? move-list)
    state
    (recur (perform-move state (first move-list)) (rest move-list))))

(defn generate-node [mtcs path state]
  (reduce (fn [coll move]
            (let [new-state (perform-move state move)
                  new-path (conj path move)
                  terminal-result (check-terminal new-state)]
              (-> coll
                  (update-in [path :children] #(conj % new-path))
                  (assoc new-path
                           (if terminal-result
                             {:state new-state :terminal true :visited 0 :score 0 :result terminal-result}
                             {:state new-state :visited 0 :score 0}))))
            )
          mtcs
          (valid-moves state)))

(defn mtcs-tree [mtcs path initial-path]
  (let [node (mtcs path)]
    (cond
      (>= (:visited node) 2000)
      mtcs
      ; Terminal nodes are ones that have reached a final state and only return one result
      (:terminal node)
      (recur (backprop mtcs path (:result node)) initial-path initial-path)

      ; Never visited this node before, so expand it
      (zero? (:visited node))
      (recur (-> mtcs
                 (generate-node path (:state node))
                 (backprop path (simulate-game (:state node))))
             initial-path
             initial-path)

      ; Use UCT to traverse down the tree
      :else (let [child-path (best-child mtcs path)]
              (recur mtcs child-path initial-path)))))

#_(time (loop [root {[] {:visited 0 :score 0 :state (initial-state)}}]
        (best-child (mtcs-tree root []) [])))

(most-visited-child (mtcs-tree {[0 1 2] {:visited 0 :score 0 :state (state-from-moves (initial-state) [0 1 2])}} [0 1 2] [0 1 2]) [0 1 2])

(defn next-move [move-list]
  (most-visited-child (mtcs-tree {move-list {:visited 0 :score 0 :state (state-from-moves (initial-state) move-list)}} move-list move-list) move-list))

(next-move [])
