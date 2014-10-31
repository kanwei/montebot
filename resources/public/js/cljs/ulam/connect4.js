// Compiled by ClojureScript 0.0-2371
goog.provide('ulam.connect4');
goog.require('cljs.core');
goog.require('clojure.set');
ulam.connect4.initial_state = (function initial_state(){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"active","active",1895962068),new cljs.core.Keyword(null,"p1","p1",-936759954),new cljs.core.Keyword(null,"p1","p1",-936759954),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"p2","p2",905500641),cljs.core.PersistentHashSet.EMPTY], null);
});
ulam.connect4.cols = cljs.core.vec.call(null,cljs.core.range.call(null,(7)));
ulam.connect4.MAX_VALUE = (9999999);
ulam.connect4.highest_column = (function highest_column(xs,col){var max_col = cljs.core.filter.call(null,(function (p1__25961_SHARP_){return cljs.core._EQ_.call(null,col,cljs.core.mod.call(null,p1__25961_SHARP_,(7)));
}),xs);if(cljs.core.empty_QMARK_.call(null,max_col))
{return col;
} else
{var max_v = cljs.core.apply.call(null,cljs.core.max,max_col);if((max_v > (34)))
{return null;
} else
{return ((7) + max_v);
}
}
});
ulam.connect4.valid_moves = (function valid_moves(state){return cljs.core.filter.call(null,cljs.core.identity,cljs.core.map.call(null,cljs.core.partial.call(null,ulam.connect4.highest_column,cljs.core.concat.call(null,new cljs.core.Keyword(null,"p1","p1",-936759954).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"p2","p2",905500641).cljs$core$IFn$_invoke$arity$1(state))),ulam.connect4.cols));
});
ulam.connect4.valid_moves.call(null,ulam.connect4.initial_state.call(null));
cljs.core.empty_QMARK_.call(null,ulam.connect4.valid_moves.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"p1","p1",-936759954),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [(39),null,(40),null,(36),null,(41),null,(35),null,(38),null,(37),null], null), null)], null)));
ulam.connect4.check_nw = (function check_nw(pos,bits){return ((cljs.core.mod.call(null,pos,(7)) >= (3))) && ((pos < (21))) && (cljs.core._EQ_.call(null,(3),cljs.core.count.call(null,clojure.set.intersection.call(null,bits,cljs.core.PersistentHashSet.fromArray([(pos + (12)),(pos + (6)),(pos + (18))], true)))));
});
ulam.connect4.check_north = (function check_north(pos,bits){return ((pos < (21))) && (cljs.core._EQ_.call(null,(3),cljs.core.count.call(null,clojure.set.intersection.call(null,bits,cljs.core.PersistentHashSet.fromArray([(pos + (14)),(pos + (21)),(pos + (7))], true)))));
});
ulam.connect4.check_ne = (function check_ne(pos,bits){return ((cljs.core.mod.call(null,pos,(7)) < (4))) && ((pos < (21))) && (cljs.core._EQ_.call(null,(3),cljs.core.count.call(null,clojure.set.intersection.call(null,bits,cljs.core.PersistentHashSet.fromArray([(pos + (8)),(pos + (24)),(pos + (16))], true)))));
});
ulam.connect4.check_east = (function check_east(pos,bits){return ((cljs.core.mod.call(null,pos,(7)) < (4))) && (cljs.core._EQ_.call(null,(3),cljs.core.count.call(null,clojure.set.intersection.call(null,bits,cljs.core.PersistentHashSet.fromArray([(pos + (2)),(pos + (1)),(pos + (3))], true)))));
});
ulam.connect4.check_win = (function check_win(board){return cljs.core.some.call(null,cljs.core.identity,cljs.core.map.call(null,(function (pos){return (ulam.connect4.check_east.call(null,pos,board)) || (ulam.connect4.check_north.call(null,pos,board)) || (ulam.connect4.check_ne.call(null,pos,board)) || (ulam.connect4.check_nw.call(null,pos,board));
}),board));
});
ulam.connect4.check_terminal = (function check_terminal(state){if(cljs.core.truth_(ulam.connect4.check_win.call(null,new cljs.core.Keyword(null,"p1","p1",-936759954).cljs$core$IFn$_invoke$arity$1(state))))
{return new cljs.core.Keyword(null,"p1","p1",-936759954);
} else
{if(cljs.core.truth_(ulam.connect4.check_win.call(null,new cljs.core.Keyword(null,"p2","p2",905500641).cljs$core$IFn$_invoke$arity$1(state))))
{return new cljs.core.Keyword(null,"p2","p2",905500641);
} else
{if(cljs.core.empty_QMARK_.call(null,ulam.connect4.valid_moves.call(null,state)))
{return new cljs.core.Keyword(null,"draw","draw",1358331674);
} else
{return null;
}
}
}
});
ulam.connect4.perform_move = (function perform_move(state,move){return cljs.core.assoc.call(null,cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(state)], null),(function (p1__25962_SHARP_){return cljs.core.conj.call(null,p1__25962_SHARP_,move);
})),new cljs.core.Keyword(null,"active","active",1895962068),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"p1","p1",-936759954),new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(state)))?new cljs.core.Keyword(null,"p2","p2",905500641):new cljs.core.Keyword(null,"p1","p1",-936759954)));
});
ulam.connect4.uct = (function uct(node,parent_visits){if((new cljs.core.Keyword(null,"visited","visited",-1610853875).cljs$core$IFn$_invoke$arity$1(node) === (0)))
{return ulam.connect4.MAX_VALUE;
} else
{return ((new cljs.core.Keyword(null,"score","score",-1963588780).cljs$core$IFn$_invoke$arity$1(node) / new cljs.core.Keyword(null,"visited","visited",-1610853875).cljs$core$IFn$_invoke$arity$1(node)) + Math.sqrt.call(null,(((2) * Math.log.call(null,parent_visits)) / new cljs.core.Keyword(null,"visited","visited",-1610853875).cljs$core$IFn$_invoke$arity$1(node))));
}
});
ulam.connect4.update_node = (function update_node(root,path,result){return cljs.core.update_in.call(null,cljs.core.update_in.call(null,root,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path,new cljs.core.Keyword(null,"visited","visited",-1610853875)], null),cljs.core.inc),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path,new cljs.core.Keyword(null,"score","score",-1963588780)], null),(function (x){return (x + (function (){var player = cljs.core.get_in.call(null,root,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [path,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"active","active",1895962068)], null));if(cljs.core._EQ_.call(null,result,new cljs.core.Keyword(null,"draw","draw",1358331674)))
{return 0.5;
} else
{if(cljs.core._EQ_.call(null,result,player))
{return (0);
} else
{if(cljs.core.not_EQ_.call(null,result,player))
{return (1);
} else
{return null;
}
}
}
})());
}));
});
ulam.connect4.backprop = (function backprop(tree,path,result){while(true){
if((tree.call(null,path) == null))
{return tree;
} else
{{
var G__25963 = ulam.connect4.update_node.call(null,tree,path,result);
var G__25964 = ((!(cljs.core.empty_QMARK_.call(null,path)))?cljs.core.subvec.call(null,path,(0),(cljs.core.count.call(null,path) - (1))):null);
var G__25965 = result;
tree = G__25963;
path = G__25964;
result = G__25965;
continue;
}
}
break;
}
});
ulam.connect4.next_player = (function next_player(player){return ((3) - player);
});
ulam.connect4.best_child = (function best_child(mtcs,path){return cljs.core.last.call(null,cljs.core.sort_by.call(null,(function (p1__25966_SHARP_){return ulam.connect4.uct.call(null,mtcs.call(null,p1__25966_SHARP_),new cljs.core.Keyword(null,"visited","visited",-1610853875).cljs$core$IFn$_invoke$arity$1(mtcs.call(null,path)));
}),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(mtcs.call(null,path))));
});
ulam.connect4.most_visited_child = (function most_visited_child(mtcs,path){return cljs.core.last.call(null,cljs.core.sort_by.call(null,(function (p1__25967_SHARP_){return new cljs.core.Keyword(null,"visited","visited",-1610853875).cljs$core$IFn$_invoke$arity$1(mtcs.call(null,p1__25967_SHARP_));
}),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(mtcs.call(null,path))));
});
ulam.connect4.simulate_game = (function simulate_game(state){while(true){
var temp__4386__auto__ = ulam.connect4.check_terminal.call(null,state);if(cljs.core.truth_(temp__4386__auto__))
{var result = temp__4386__auto__;return result;
} else
{var move = cljs.core.rand_nth.call(null,ulam.connect4.valid_moves.call(null,state));{
var G__25968 = ulam.connect4.perform_move.call(null,state,move);
state = G__25968;
continue;
}
}
break;
}
});
ulam.connect4.state_from_moves = (function state_from_moves(state,move_list){while(true){
if(cljs.core.empty_QMARK_.call(null,move_list))
{return state;
} else
{{
var G__25969 = ulam.connect4.perform_move.call(null,state,cljs.core.first.call(null,move_list));
var G__25970 = cljs.core.rest.call(null,move_list);
state = G__25969;
move_list = G__25970;
continue;
}
}
break;
}
});
ulam.connect4.generate_node = (function generate_node(mtcs,path,state){return cljs.core.reduce.call(null,(function (coll,move){var new_state = ulam.connect4.perform_move.call(null,state,move);var new_path = cljs.core.conj.call(null,path,move);var terminal_result = ulam.connect4.check_terminal.call(null,new_state);return cljs.core.assoc.call(null,cljs.core.update_in.call(null,coll,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path,new cljs.core.Keyword(null,"children","children",-940561982)], null),((function (new_state,new_path,terminal_result){
return (function (p1__25971_SHARP_){return cljs.core.conj.call(null,p1__25971_SHARP_,new_path);
});})(new_state,new_path,terminal_result))
),new_path,(cljs.core.truth_(terminal_result)?new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"state","state",-1988618099),new_state,new cljs.core.Keyword(null,"terminal","terminal",-927870592),true,new cljs.core.Keyword(null,"visited","visited",-1610853875),(0),new cljs.core.Keyword(null,"score","score",-1963588780),(0),new cljs.core.Keyword(null,"result","result",1415092211),terminal_result], null):new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"state","state",-1988618099),new_state,new cljs.core.Keyword(null,"visited","visited",-1610853875),(0),new cljs.core.Keyword(null,"score","score",-1963588780),(0)], null)));
}),mtcs,ulam.connect4.valid_moves.call(null,state));
});
ulam.connect4.mtcs_tree = (function mtcs_tree(mtcs,path,initial_path){while(true){
var node = mtcs.call(null,path);if((new cljs.core.Keyword(null,"visited","visited",-1610853875).cljs$core$IFn$_invoke$arity$1(node) >= (2000)))
{return mtcs;
} else
{if(cljs.core.truth_(new cljs.core.Keyword(null,"terminal","terminal",-927870592).cljs$core$IFn$_invoke$arity$1(node)))
{{
var G__25972 = ulam.connect4.backprop.call(null,mtcs,path,new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(node));
var G__25973 = initial_path;
var G__25974 = initial_path;
mtcs = G__25972;
path = G__25973;
initial_path = G__25974;
continue;
}
} else
{if((new cljs.core.Keyword(null,"visited","visited",-1610853875).cljs$core$IFn$_invoke$arity$1(node) === (0)))
{{
var G__25975 = ulam.connect4.backprop.call(null,ulam.connect4.generate_node.call(null,mtcs,path,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(node)),path,ulam.connect4.simulate_game.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(node)));
var G__25976 = initial_path;
var G__25977 = initial_path;
mtcs = G__25975;
path = G__25976;
initial_path = G__25977;
continue;
}
} else
{var child_path = ulam.connect4.best_child.call(null,mtcs,path);{
var G__25978 = mtcs;
var G__25979 = child_path;
var G__25980 = initial_path;
mtcs = G__25978;
path = G__25979;
initial_path = G__25980;
continue;
}

}
}
}
break;
}
});
ulam.connect4.next_move = (function next_move(move_list){return ulam.connect4.most_visited_child.call(null,ulam.connect4.mtcs_tree.call(null,new cljs.core.PersistentArrayMap.fromArray([move_list,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"visited","visited",-1610853875),(0),new cljs.core.Keyword(null,"score","score",-1963588780),(0),new cljs.core.Keyword(null,"state","state",-1988618099),ulam.connect4.state_from_moves.call(null,ulam.connect4.initial_state.call(null),move_list)], null)], true, false),move_list,move_list),move_list);
});

//# sourceMappingURL=connect4.js.map