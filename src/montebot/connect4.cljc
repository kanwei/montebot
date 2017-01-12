(ns montebot.connect4
  #?(:cljs (:import [goog.math Long]))
  (:require clojure.set))

#?(:clj (set! *warn-on-reflection* true))
#?(:cljs (enable-console-print!))

(defn initial-state []
  {:active   :p1
   :occupied []
   :p1       []
   :p2       []})

(def cols (vec (range 7)))

(def MAX_VALUE #?(:clj Long/MAX_VALUE :cljs js/Number.MAX_VALUE))

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

(def horizontals
  (for [row (range 6)
        x (range 4)]
    (range (+ x (* row 7)) (+ x 4 (* row 7)))))

(def verticals
  (for [column (range 7)
        x (range 3)]
    [(+ column (* x 7)) (+ column (* (+ 1 x) 7)) (+ column (* (+ 2 x) 7)) (+ column (* (+ 3 x) 7))]))

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
            #?(:cljs (.or (.shiftLeft (Long. 1) x) acc)
               :clj  (bit-set acc x))
            )
          (Long. 0)
          v
          ))

(def victory-positions (longs (long-array (map coll-to-bitfield (concat verticals horizontals diagonals)))))

(defn check-win [board]
  (if (>= (count board) 4)
    (let [board-bitfield (coll-to-bitfield board)]
      ; Check the board state against each of the winning positions
      (areduce ^longs victory-positions
               idx, ret, false
               (or ret
                   (.equals (aget victory-positions idx)
                            (.and (aget victory-positions idx) board-bitfield)))))))

;(crit/quick-bench (check-win [0 1 2 3]))

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

(defn next-move [move-history n-iterations]
  (most-visited-child (mtcs-tree {move-history {:visited 0 :score 0 :state (state-from-moves (initial-state) move-history)}}
                                 move-history
                                 move-history
                                 n-iterations) move-history))

(defn next-move-with-state [state move-history n-iterations]
  (most-visited-child (mtcs-tree {move-history {:visited 0 :score 0 :state state}}
                                 move-history
                                 move-history
                                 n-iterations) move-history))

#_(time (next-move [] 2000))

