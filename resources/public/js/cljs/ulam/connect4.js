// Compiled by ClojureScript 0.0-2985 {}
goog.provide('ulam.connect4');
goog.require('cljs.core');
goog.require('clojure.core.reducers');
goog.require('clojure.set');
ulam.connect4._STAR_warn_on_reflection_STAR_ = true;
ulam.connect4.initial_state = (function initial_state(){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"active","active",1895962068),new cljs.core.Keyword(null,"p1","p1",-936759954),new cljs.core.Keyword(null,"occupied","occupied",-1962123949),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"p1","p1",-936759954),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"p1bits","p1bits",1983512555),(0),new cljs.core.Keyword(null,"p2","p2",905500641),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"p2bits","p2bits",-980937221),(0)], null);
});
ulam.connect4.cols = cljs.core.vec.call(null,cljs.core.range.call(null,(7)));
ulam.connect4.MAX_VALUE = (9999999);
ulam.connect4.highest_column = (function highest_column(xs,col){
var max_col = cljs.core.filter.call(null,(function (p1__6734_SHARP_){
return cljs.core._EQ_.call(null,col,cljs.core.mod.call(null,p1__6734_SHARP_,(7)));
}),xs);
if(cljs.core.empty_QMARK_.call(null,max_col)){
return col;
} else {
var max_v = cljs.core.apply.call(null,cljs.core.max,max_col);
if((max_v > (34))){
return null;
} else {
return ((7) + max_v);
}
}
});
ulam.connect4.valid_moves = (function valid_moves(state){
return cljs.core.filter.call(null,cljs.core.identity,cljs.core.map.call(null,cljs.core.partial.call(null,ulam.connect4.highest_column,new cljs.core.Keyword(null,"occupied","occupied",-1962123949).cljs$core$IFn$_invoke$arity$1(state)),ulam.connect4.cols));
});
ulam.connect4.horizontals = (function (){var iter__5953__auto__ = (function iter__6735(s__6736){
return (new cljs.core.LazySeq(null,(function (){
var s__6736__$1 = s__6736;
while(true){
var temp__4406__auto__ = cljs.core.seq.call(null,s__6736__$1);
if(temp__4406__auto__){
var xs__4959__auto__ = temp__4406__auto__;
var row = cljs.core.first.call(null,xs__4959__auto__);
var iterys__5949__auto__ = ((function (s__6736__$1,row,xs__4959__auto__,temp__4406__auto__){
return (function iter__6737(s__6738){
return (new cljs.core.LazySeq(null,((function (s__6736__$1,row,xs__4959__auto__,temp__4406__auto__){
return (function (){
var s__6738__$1 = s__6738;
while(true){
var temp__4406__auto____$1 = cljs.core.seq.call(null,s__6738__$1);
if(temp__4406__auto____$1){
var s__6738__$2 = temp__4406__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__6738__$2)){
var c__5951__auto__ = cljs.core.chunk_first.call(null,s__6738__$2);
var size__5952__auto__ = cljs.core.count.call(null,c__5951__auto__);
var b__6740 = cljs.core.chunk_buffer.call(null,size__5952__auto__);
if((function (){var i__6739 = (0);
while(true){
if((i__6739 < size__5952__auto__)){
var x = cljs.core._nth.call(null,c__5951__auto__,i__6739);
cljs.core.chunk_append.call(null,b__6740,cljs.core.range.call(null,(x + (row * (7))),((x + (4)) + (row * (7)))));

var G__6741 = (i__6739 + (1));
i__6739 = G__6741;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6740),iter__6737.call(null,cljs.core.chunk_rest.call(null,s__6738__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6740),null);
}
} else {
var x = cljs.core.first.call(null,s__6738__$2);
return cljs.core.cons.call(null,cljs.core.range.call(null,(x + (row * (7))),((x + (4)) + (row * (7)))),iter__6737.call(null,cljs.core.rest.call(null,s__6738__$2)));
}
} else {
return null;
}
break;
}
});})(s__6736__$1,row,xs__4959__auto__,temp__4406__auto__))
,null,null));
});})(s__6736__$1,row,xs__4959__auto__,temp__4406__auto__))
;
var fs__5950__auto__ = cljs.core.seq.call(null,iterys__5949__auto__.call(null,cljs.core.range.call(null,(4))));
if(fs__5950__auto__){
return cljs.core.concat.call(null,fs__5950__auto__,iter__6735.call(null,cljs.core.rest.call(null,s__6736__$1)));
} else {
var G__6742 = cljs.core.rest.call(null,s__6736__$1);
s__6736__$1 = G__6742;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5953__auto__.call(null,cljs.core.range.call(null,(6)));
})();
ulam.connect4.verticals = (function (){var iter__5953__auto__ = (function iter__6743(s__6744){
return (new cljs.core.LazySeq(null,(function (){
var s__6744__$1 = s__6744;
while(true){
var temp__4406__auto__ = cljs.core.seq.call(null,s__6744__$1);
if(temp__4406__auto__){
var xs__4959__auto__ = temp__4406__auto__;
var column = cljs.core.first.call(null,xs__4959__auto__);
var iterys__5949__auto__ = ((function (s__6744__$1,column,xs__4959__auto__,temp__4406__auto__){
return (function iter__6745(s__6746){
return (new cljs.core.LazySeq(null,((function (s__6744__$1,column,xs__4959__auto__,temp__4406__auto__){
return (function (){
var s__6746__$1 = s__6746;
while(true){
var temp__4406__auto____$1 = cljs.core.seq.call(null,s__6746__$1);
if(temp__4406__auto____$1){
var s__6746__$2 = temp__4406__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__6746__$2)){
var c__5951__auto__ = cljs.core.chunk_first.call(null,s__6746__$2);
var size__5952__auto__ = cljs.core.count.call(null,c__5951__auto__);
var b__6748 = cljs.core.chunk_buffer.call(null,size__5952__auto__);
if((function (){var i__6747 = (0);
while(true){
if((i__6747 < size__5952__auto__)){
var x = cljs.core._nth.call(null,c__5951__auto__,i__6747);
cljs.core.chunk_append.call(null,b__6748,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(column + (x * (7))),(column + (((1) + x) * (7))),(column + (((2) + x) * (7))),(column + (((3) + x) * (7)))], null));

var G__6749 = (i__6747 + (1));
i__6747 = G__6749;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6748),iter__6745.call(null,cljs.core.chunk_rest.call(null,s__6746__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6748),null);
}
} else {
var x = cljs.core.first.call(null,s__6746__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(column + (x * (7))),(column + (((1) + x) * (7))),(column + (((2) + x) * (7))),(column + (((3) + x) * (7)))], null),iter__6745.call(null,cljs.core.rest.call(null,s__6746__$2)));
}
} else {
return null;
}
break;
}
});})(s__6744__$1,column,xs__4959__auto__,temp__4406__auto__))
,null,null));
});})(s__6744__$1,column,xs__4959__auto__,temp__4406__auto__))
;
var fs__5950__auto__ = cljs.core.seq.call(null,iterys__5949__auto__.call(null,cljs.core.range.call(null,(3))));
if(fs__5950__auto__){
return cljs.core.concat.call(null,fs__5950__auto__,iter__6743.call(null,cljs.core.rest.call(null,s__6744__$1)));
} else {
var G__6750 = cljs.core.rest.call(null,s__6744__$1);
s__6744__$1 = G__6750;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5953__auto__.call(null,cljs.core.range.call(null,(7)));
})();
ulam.connect4.diagonals = new cljs.core.PersistentVector(null, 24, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(8),(16),(24)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(9),(17),(25)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(10),(18),(26)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(11),(19),(27)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),(15),(23),(31)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(8),(16),(24),(32)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(9),(17),(25),(33)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),(18),(26),(34)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(14),(22),(30),(38)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(15),(23),(31),(39)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(16),(24),(32),(40)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(17),(25),(33),(41)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(21),(15),(9),(3)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(22),(16),(10),(4)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(23),(17),(11),(5)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(24),(18),(12),(6)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(28),(22),(16),(10)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(29),(23),(17),(11)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(30),(24),(18),(12)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(31),(25),(19),(13)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(35),(29),(23),(17)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(36),(30),(24),(18)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(37),(31),(25),(19)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(38),(32),(26),(20)], null)], null);
ulam.connect4.coll_to_bitfield = (function coll_to_bitfield(v){
return cljs.core.reduce.call(null,(function (acc,x){
return (acc | (1 << x));
}),(0),v);
});
ulam.connect4.victory_positions = cljs.core.longs.call(null,cljs.core.long_array.call(null,cljs.core.map.call(null,ulam.connect4.coll_to_bitfield,cljs.core.concat.call(null,ulam.connect4.verticals,ulam.connect4.horizontals,ulam.connect4.diagonals))));
ulam.connect4.check_win = (function check_win(board){
if((cljs.core.count.call(null,board) >= (4))){
var board_bitfield = ulam.connect4.coll_to_bitfield.call(null,board);
var a__6078__auto__ = ulam.connect4.victory_positions;
var idx = (0);
var ret = false;
while(true){
if((idx < a__6078__auto__.length)){
var G__6751 = (idx + (1));
var G__6752 = (ret) || (cljs.core._EQ_.call(null,(ulam.connect4.victory_positions[idx]),((ulam.connect4.victory_positions[idx]) & board_bitfield)));
idx = G__6751;
ret = G__6752;
continue;
} else {
return ret;
}
break;
}
} else {
return null;
}
});
ulam.connect4.check_terminal = (function check_terminal(state){
if(cljs.core.truth_(ulam.connect4.check_win.call(null,new cljs.core.Keyword(null,"p1","p1",-936759954).cljs$core$IFn$_invoke$arity$1(state)))){
return new cljs.core.Keyword(null,"p1","p1",-936759954);
} else {
if(cljs.core.truth_(ulam.connect4.check_win.call(null,new cljs.core.Keyword(null,"p2","p2",905500641).cljs$core$IFn$_invoke$arity$1(state)))){
return new cljs.core.Keyword(null,"p2","p2",905500641);
} else {
if(cljs.core.empty_QMARK_.call(null,ulam.connect4.valid_moves.call(null,state))){
return new cljs.core.Keyword(null,"draw","draw",1358331674);
} else {
return null;
}
}
}
});
ulam.connect4.perform_move = (function perform_move(state,move){
return cljs.core.assoc.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(state)], null),(function (p1__6753_SHARP_){
return cljs.core.conj.call(null,p1__6753_SHARP_,move);
})),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"occupied","occupied",-1962123949)], null),(function (p1__6754_SHARP_){
return cljs.core.conj.call(null,p1__6754_SHARP_,move);
})),new cljs.core.Keyword(null,"active","active",1895962068),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"p1","p1",-936759954),new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(state)))?new cljs.core.Keyword(null,"p2","p2",905500641):new cljs.core.Keyword(null,"p1","p1",-936759954)));
});
ulam.connect4.uct = (function uct(node,parent_visits){
if((new cljs.core.Keyword(null,"visited","visited",-1610853875).cljs$core$IFn$_invoke$arity$1(node) === (0))){
return ulam.connect4.MAX_VALUE;
} else {
return ((new cljs.core.Keyword(null,"score","score",-1963588780).cljs$core$IFn$_invoke$arity$1(node) / new cljs.core.Keyword(null,"visited","visited",-1610853875).cljs$core$IFn$_invoke$arity$1(node)) + Math.sqrt.call(null,(((2) * Math.log.call(null,parent_visits)) / new cljs.core.Keyword(null,"visited","visited",-1610853875).cljs$core$IFn$_invoke$arity$1(node))));
}
});
ulam.connect4.update_node = (function update_node(root,path,result){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,root,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path,new cljs.core.Keyword(null,"visited","visited",-1610853875)], null),cljs.core.inc),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path,new cljs.core.Keyword(null,"score","score",-1963588780)], null),(function (x){
return (x + (function (){var player = cljs.core.get_in.call(null,root,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [path,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"active","active",1895962068)], null));
if(cljs.core._EQ_.call(null,result,new cljs.core.Keyword(null,"draw","draw",1358331674))){
return 0.5;
} else {
if(cljs.core._EQ_.call(null,result,player)){
return (0);
} else {
if(cljs.core.not_EQ_.call(null,result,player)){
return (1);
} else {
return null;
}
}
}
})());
}));
});
ulam.connect4.backprop = (function backprop(tree,path,result){
while(true){
if((tree.call(null,path) == null)){
return tree;
} else {
var G__6755 = ulam.connect4.update_node.call(null,tree,path,result);
var G__6756 = ((!(cljs.core.empty_QMARK_.call(null,path)))?cljs.core.subvec.call(null,path,(0),(cljs.core.count.call(null,path) - (1))):null);
var G__6757 = result;
tree = G__6755;
path = G__6756;
result = G__6757;
continue;
}
break;
}
});
ulam.connect4.best_child = (function best_child(mtcs,path){
return cljs.core.last.call(null,cljs.core.sort_by.call(null,(function (p1__6758_SHARP_){
return ulam.connect4.uct.call(null,mtcs.call(null,p1__6758_SHARP_),new cljs.core.Keyword(null,"visited","visited",-1610853875).cljs$core$IFn$_invoke$arity$1(mtcs.call(null,path)));
}),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(mtcs.call(null,path))));
});
ulam.connect4.most_visited_child = (function most_visited_child(mtcs,path){
return cljs.core.last.call(null,cljs.core.sort_by.call(null,(function (p1__6759_SHARP_){
return new cljs.core.Keyword(null,"visited","visited",-1610853875).cljs$core$IFn$_invoke$arity$1(mtcs.call(null,p1__6759_SHARP_));
}),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(mtcs.call(null,path))));
});
ulam.connect4.simulate_game = (function simulate_game(state){
while(true){
var temp__4404__auto__ = ulam.connect4.check_terminal.call(null,state);
if(cljs.core.truth_(temp__4404__auto__)){
var result = temp__4404__auto__;
return result;
} else {
var move = cljs.core.rand_nth.call(null,ulam.connect4.valid_moves.call(null,state));
var G__6760 = ulam.connect4.perform_move.call(null,state,move);
state = G__6760;
continue;
}
break;
}
});
ulam.connect4.state_from_moves = (function state_from_moves(state,move_list){
while(true){
if(cljs.core.empty_QMARK_.call(null,move_list)){
return state;
} else {
var G__6761 = ulam.connect4.perform_move.call(null,state,cljs.core.first.call(null,move_list));
var G__6762 = cljs.core.rest.call(null,move_list);
state = G__6761;
move_list = G__6762;
continue;
}
break;
}
});
ulam.connect4.generate_node = (function generate_node(mtcs,path,state){
return cljs.core.reduce.call(null,(function (coll,move){
var new_state = ulam.connect4.perform_move.call(null,state,move);
var new_path = cljs.core.conj.call(null,path,move);
var terminal_result = ulam.connect4.check_terminal.call(null,new_state);
return cljs.core.assoc.call(null,cljs.core.update_in.call(null,coll,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path,new cljs.core.Keyword(null,"children","children",-940561982)], null),((function (new_state,new_path,terminal_result){
return (function (p1__6763_SHARP_){
return cljs.core.conj.call(null,p1__6763_SHARP_,new_path);
});})(new_state,new_path,terminal_result))
),new_path,(cljs.core.truth_(terminal_result)?new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"state","state",-1988618099),new_state,new cljs.core.Keyword(null,"terminal","terminal",-927870592),true,new cljs.core.Keyword(null,"visited","visited",-1610853875),(0),new cljs.core.Keyword(null,"score","score",-1963588780),(0),new cljs.core.Keyword(null,"result","result",1415092211),terminal_result], null):new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"state","state",-1988618099),new_state,new cljs.core.Keyword(null,"visited","visited",-1610853875),(0),new cljs.core.Keyword(null,"score","score",-1963588780),(0)], null)));
}),mtcs,ulam.connect4.valid_moves.call(null,state));
});
ulam.connect4.mtcs_tree = (function mtcs_tree(mtcs,path,initial_path,iterations){
while(true){
var node = mtcs.call(null,path);
if((new cljs.core.Keyword(null,"visited","visited",-1610853875).cljs$core$IFn$_invoke$arity$1(node) >= iterations)){
return mtcs;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"terminal","terminal",-927870592).cljs$core$IFn$_invoke$arity$1(node))){
var G__6764 = ulam.connect4.backprop.call(null,mtcs,path,new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(node));
var G__6765 = initial_path;
var G__6766 = initial_path;
var G__6767 = iterations;
mtcs = G__6764;
path = G__6765;
initial_path = G__6766;
iterations = G__6767;
continue;
} else {
if((new cljs.core.Keyword(null,"visited","visited",-1610853875).cljs$core$IFn$_invoke$arity$1(node) === (0))){
var G__6768 = ulam.connect4.backprop.call(null,ulam.connect4.generate_node.call(null,mtcs,path,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(node)),path,ulam.connect4.simulate_game.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(node)));
var G__6769 = initial_path;
var G__6770 = initial_path;
var G__6771 = iterations;
mtcs = G__6768;
path = G__6769;
initial_path = G__6770;
iterations = G__6771;
continue;
} else {
var child_path = ulam.connect4.best_child.call(null,mtcs,path);
var G__6772 = mtcs;
var G__6773 = child_path;
var G__6774 = initial_path;
var G__6775 = iterations;
mtcs = G__6772;
path = G__6773;
initial_path = G__6774;
iterations = G__6775;
continue;

}
}
}
break;
}
});
ulam.connect4.next_move = (function next_move(move_list,iterations){
return ulam.connect4.most_visited_child.call(null,ulam.connect4.mtcs_tree.call(null,new cljs.core.PersistentArrayMap.fromArray([move_list,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"visited","visited",-1610853875),(0),new cljs.core.Keyword(null,"score","score",-1963588780),(0),new cljs.core.Keyword(null,"state","state",-1988618099),ulam.connect4.state_from_moves.call(null,ulam.connect4.initial_state.call(null),move_list)], null)], true, false),move_list,move_list,iterations),move_list);
});

//# sourceMappingURL=connect4.js.map