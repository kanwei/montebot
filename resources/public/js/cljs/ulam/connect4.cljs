(ns ulam.connect4
  (:require clojure.set
            #_[criterium.core :as crit]
            [clojure.core.reducers :as r]
            #_[ulam.core :as ulam]))

(set! *warn-on-reflection* true)

(defn initial-state []
  {:active :p1
   :occupied []
   :p1 []
   :p1bits 0
   :p2 []
   :p2bits 0})

(def cols (vec (range 7)))

(def MAX_VALUE 9999999)

(defn highest-column [xs col]
  (let [max-col (filter #(= col (mod % 7)) xs)]
    (if (empty? max-col)
      col
      (let [max-v (apply max max-col)]
        (if (> max-v 34)
          nil
          (+ 7 max-v))))))

(defn valid-moves [state]
  (filter identity (map (partial highest-column (:occupied state))
                        cols)))

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

(def horizontals
  (for [row (range 6)
        x (range 4)]
    (range (+ x (* row 7)) (+ x 4 (* row 7)))
    ))

(def verticals
  (for [column (range 7)
        x (range 3)]
    [(+ column (* x 7)) (+ column (* (+ 1 x) 7)) (+ column (* (+ 2 x) 7)) (+ column (* (+ 3 x) 7))]
    ))

verticals
(def diagonals
  [
   [0 8 16 24]
   [1 9 17 25]
   [2 10 18 26]
   [3 11 19 27]

   [7 15 23 31]
   [8 16 24 32]
   [9 17 25 33]
   [10 18 26 34]

   [14 22 30 38]
   [15 23 31 39]
   [16 24 32 40]
   [17 25 33 41]

   [21 15 9 3]
   [22 16 10 4]
   [23 17 11 5]
   [24 18 12 6]

   [28 22 16 10]
   [29 23 17 11]
   [30 24 18 12]
   [31 25 19 13]

   [35 29 23 17]
   [36 30 24 18]
   [37 31 25 19]
   [38 32 26 20]

   ])

(defn coll-to-bitfield [v]
  (reduce (fn [acc x]
            (bit-set acc x))
          0
          v
          ))

(def victory-positions (mapv coll-to-bitfield (concat verticals horizontals diagonals)))

(defn check-win-2 [board]
  (some identity (map (fn [vic-pos]
                        (= vic-pos (bit-and vic-pos (coll-to-bitfield board))))
                      victory-positions)))

(defn check-win [board]
  (if (>= (count board) 4)
    (loop [vic-pos-left victory-positions]
      (if-let [vic-pos (first vic-pos-left)]
        (if (= vic-pos (bit-and vic-pos (coll-to-bitfield board)))
          true
          (recur (rest vic-pos-left)))))))

(check-win [2 6 16 17 24 31])
(defn check-terminal [state]
  (cond (check-win (:p1 state)) :p1
        (check-win (:p2 state)) :p2
        (empty? (valid-moves state)) :draw))

(defn perform-move [state move]
  (-> state
      (update-in [(:active state)] #(conj % move))
      (update-in [:occupied] #(conj % move))
      (assoc :active (if (= :p1 (:active state)) :p2 :p1))))

(defn uct [node parent-visits]
  (if (zero? (:visited node))
    MAX_VALUE
    (+ (/ (:score node)
          (:visited node))
       (Math/sqrt (/ (* 2 (Math/log parent-visits))
                     (:visited node))))))

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

(defn backprop [tree path result]
  (if (nil? (tree path))
    tree
    (recur (update-node tree path result)
           (if-not (empty? path)
             (subvec path 0 (dec (count path)))
             nil)
           result)
    ))

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

;(crit/quick-bench (simulate-game (initial-state)))
;(crit/quick-bench (check-terminal (initial-state)))

(defn state-from-moves [state move-list]
  (if (empty? move-list)
    state
    (recur (perform-move state (first move-list)) (rest move-list))))

(def buggy (state-from-moves (initial-state) [3 2 9 16 10 17 4 11 18 23 5 6 12 30 37 19 24 26 25 33 40 1 8 15 32 39 31 38 13 20 27 0]))

(check-terminal buggy)
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

(defn mtcs-tree [mtcs path initial-path iterations]
  (let [node (mtcs path)]
    (cond
      (>= (:visited node) iterations)
      mtcs
      ; Terminal nodes are ones that have reached a final state and only return one result
      (:terminal node)
      (recur (backprop mtcs path (:result node)) initial-path initial-path iterations)

      ; Never visited this node before, so expand it
      (zero? (:visited node))
      (recur (-> mtcs
                 (generate-node path (:state node))
                 (backprop path (simulate-game (:state node))))
             initial-path
             initial-path
             iterations)

      ; Use UCT to traverse down the tree
      :else (let [child-path (best-child mtcs path)]
              (recur mtcs child-path initial-path iterations)))))

(defn next-move [move-list iterations]
  (most-visited-child (mtcs-tree {move-list {:visited 0 :score 0 :state (state-from-moves (initial-state) move-list)}}
                                 move-list
                                 move-list
                                 iterations) move-list))

;(next-move [] 2000)

