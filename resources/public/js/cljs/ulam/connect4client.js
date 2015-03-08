// Compiled by ClojureScript 0.0-2985 {}
goog.provide('ulam.connect4client');
goog.require('cljs.core');
goog.require('ulam.connect4');
goog.require('cljs.core.async');
goog.require('reagent.core');
goog.require('clojure.set');
cljs.core.enable_console_print_BANG_.call(null);
ulam.connect4client.moves = reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
ulam.connect4client.player_move = (function player_move(move){
cljs.core.swap_BANG_.call(null,ulam.connect4client.moves,cljs.core.conj,move);

return cljs.core.reset_BANG_.call(null,ulam.connect4client.moves,ulam.connect4.next_move.call(null,cljs.core.deref.call(null,ulam.connect4client.moves),(500)));
});
ulam.connect4client.position_state = (function position_state(pos){
var player = cljs.core.get.call(null,cljs.core.zipmap.call(null,cljs.core.deref.call(null,ulam.connect4client.moves),cljs.core.cycle.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p1","p1",-936759954),new cljs.core.Keyword(null,"p2","p2",905500641)], null))),pos);
var G__10984 = player;
if(cljs.core._EQ_.call(null,null,G__10984)){
return "";
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"p2","p2",905500641),G__10984)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"height","height",1025178622),(50),new cljs.core.Keyword(null,"width","width",-384071477),(50)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cx","cx",1272694324),(25),new cljs.core.Keyword(null,"cy","cy",755331060),(25),new cljs.core.Keyword(null,"r","r",-471384190),(15),new cljs.core.Keyword(null,"fill","fill",883462889),"blue"], null)], null)], null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"p1","p1",-936759954),G__10984)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"height","height",1025178622),(50),new cljs.core.Keyword(null,"width","width",-384071477),(50)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cx","cx",1272694324),(25),new cljs.core.Keyword(null,"cy","cy",755331060),(25),new cljs.core.Keyword(null,"r","r",-471384190),(15),new cljs.core.Keyword(null,"fill","fill",883462889),"red"], null)], null)], null);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(player)].join('')));

}
}
}
});
ulam.connect4client.print_board = (function print_board(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),(function (){var moves = ulam.connect4.valid_moves.call(null,ulam.connect4.state_from_moves.call(null,ulam.connect4.initial_state.call(null),cljs.core.deref.call(null,ulam.connect4client.moves)));
var iter__5953__auto__ = ((function (moves){
return (function iter__11010(s__11011){
return (new cljs.core.LazySeq(null,((function (moves){
return (function (){
var s__11011__$1 = s__11011;
while(true){
var temp__4406__auto__ = cljs.core.seq.call(null,s__11011__$1);
if(temp__4406__auto__){
var s__11011__$2 = temp__4406__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11011__$2)){
var c__5951__auto__ = cljs.core.chunk_first.call(null,s__11011__$2);
var size__5952__auto__ = cljs.core.count.call(null,c__5951__auto__);
var b__11013 = cljs.core.chunk_buffer.call(null,size__5952__auto__);
if((function (){var i__11012 = (0);
while(true){
if((i__11012 < size__5952__auto__)){
var column = cljs.core._nth.call(null,c__5951__auto__,i__11012);
cljs.core.chunk_append.call(null,b__11013,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),(function (){var temp__4404__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (i__11012,column,c__5951__auto__,size__5952__auto__,b__11013,s__11011__$2,temp__4406__auto__,moves){
return (function (p1__10985_SHARP_){
return cljs.core._EQ_.call(null,column,cljs.core.mod.call(null,p1__10985_SHARP_,(7)));
});})(i__11012,column,c__5951__auto__,size__5952__auto__,b__11013,s__11011__$2,temp__4406__auto__,moves))
,moves));
if(cljs.core.truth_(temp__4404__auto__)){
var n = temp__4404__auto__;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__11012,n,temp__4404__auto__,column,c__5951__auto__,size__5952__auto__,b__11013,s__11011__$2,temp__4406__auto__,moves){
return (function (){
return ulam.connect4client.player_move.call(null,n);
});})(i__11012,n,temp__4404__auto__,column,c__5951__auto__,size__5952__auto__,b__11013,s__11011__$2,temp__4406__auto__,moves))
], null),"Place"], null);
} else {
return null;
}
})()], null));

var G__11034 = (i__11012 + (1));
i__11012 = G__11034;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11013),iter__11010.call(null,cljs.core.chunk_rest.call(null,s__11011__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11013),null);
}
} else {
var column = cljs.core.first.call(null,s__11011__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),(function (){var temp__4404__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (column,s__11011__$2,temp__4406__auto__,moves){
return (function (p1__10985_SHARP_){
return cljs.core._EQ_.call(null,column,cljs.core.mod.call(null,p1__10985_SHARP_,(7)));
});})(column,s__11011__$2,temp__4406__auto__,moves))
,moves));
if(cljs.core.truth_(temp__4404__auto__)){
var n = temp__4404__auto__;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (n,temp__4404__auto__,column,s__11011__$2,temp__4406__auto__,moves){
return (function (){
return ulam.connect4client.player_move.call(null,n);
});})(n,temp__4404__auto__,column,s__11011__$2,temp__4406__auto__,moves))
], null),"Place"], null);
} else {
return null;
}
})()], null),iter__11010.call(null,cljs.core.rest.call(null,s__11011__$2)));
}
} else {
return null;
}
break;
}
});})(moves))
,null,null));
});})(moves))
;
return iter__5953__auto__.call(null,cljs.core.range.call(null,(7)));
})()], null),(function (){var iter__5953__auto__ = (function iter__11014(s__11015){
return (new cljs.core.LazySeq(null,(function (){
var s__11015__$1 = s__11015;
while(true){
var temp__4406__auto__ = cljs.core.seq.call(null,s__11015__$1);
if(temp__4406__auto__){
var s__11015__$2 = temp__4406__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11015__$2)){
var c__5951__auto__ = cljs.core.chunk_first.call(null,s__11015__$2);
var size__5952__auto__ = cljs.core.count.call(null,c__5951__auto__);
var b__11017 = cljs.core.chunk_buffer.call(null,size__5952__auto__);
if((function (){var i__11016 = (0);
while(true){
if((i__11016 < size__5952__auto__)){
var row = cljs.core._nth.call(null,c__5951__auto__,i__11016);
cljs.core.chunk_append.call(null,b__11017,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),(function (){var iter__5953__auto__ = ((function (i__11016,row,c__5951__auto__,size__5952__auto__,b__11017,s__11015__$2,temp__4406__auto__){
return (function iter__11026(s__11027){
return (new cljs.core.LazySeq(null,((function (i__11016,row,c__5951__auto__,size__5952__auto__,b__11017,s__11015__$2,temp__4406__auto__){
return (function (){
var s__11027__$1 = s__11027;
while(true){
var temp__4406__auto____$1 = cljs.core.seq.call(null,s__11027__$1);
if(temp__4406__auto____$1){
var s__11027__$2 = temp__4406__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11027__$2)){
var c__5951__auto____$1 = cljs.core.chunk_first.call(null,s__11027__$2);
var size__5952__auto____$1 = cljs.core.count.call(null,c__5951__auto____$1);
var b__11029 = cljs.core.chunk_buffer.call(null,size__5952__auto____$1);
if((function (){var i__11028 = (0);
while(true){
if((i__11028 < size__5952__auto____$1)){
var column = cljs.core._nth.call(null,c__5951__auto____$1,i__11028);
cljs.core.chunk_append.call(null,b__11029,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.grid","td.grid",-401357880),ulam.connect4client.position_state.call(null,(column + (row * (7))))], null));

var G__11035 = (i__11028 + (1));
i__11028 = G__11035;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11029),iter__11026.call(null,cljs.core.chunk_rest.call(null,s__11027__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11029),null);
}
} else {
var column = cljs.core.first.call(null,s__11027__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.grid","td.grid",-401357880),ulam.connect4client.position_state.call(null,(column + (row * (7))))], null),iter__11026.call(null,cljs.core.rest.call(null,s__11027__$2)));
}
} else {
return null;
}
break;
}
});})(i__11016,row,c__5951__auto__,size__5952__auto__,b__11017,s__11015__$2,temp__4406__auto__))
,null,null));
});})(i__11016,row,c__5951__auto__,size__5952__auto__,b__11017,s__11015__$2,temp__4406__auto__))
;
return iter__5953__auto__.call(null,cljs.core.range.call(null,(7)));
})()], null));

var G__11036 = (i__11016 + (1));
i__11016 = G__11036;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11017),iter__11014.call(null,cljs.core.chunk_rest.call(null,s__11015__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11017),null);
}
} else {
var row = cljs.core.first.call(null,s__11015__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),(function (){var iter__5953__auto__ = ((function (row,s__11015__$2,temp__4406__auto__){
return (function iter__11030(s__11031){
return (new cljs.core.LazySeq(null,((function (row,s__11015__$2,temp__4406__auto__){
return (function (){
var s__11031__$1 = s__11031;
while(true){
var temp__4406__auto____$1 = cljs.core.seq.call(null,s__11031__$1);
if(temp__4406__auto____$1){
var s__11031__$2 = temp__4406__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11031__$2)){
var c__5951__auto__ = cljs.core.chunk_first.call(null,s__11031__$2);
var size__5952__auto__ = cljs.core.count.call(null,c__5951__auto__);
var b__11033 = cljs.core.chunk_buffer.call(null,size__5952__auto__);
if((function (){var i__11032 = (0);
while(true){
if((i__11032 < size__5952__auto__)){
var column = cljs.core._nth.call(null,c__5951__auto__,i__11032);
cljs.core.chunk_append.call(null,b__11033,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.grid","td.grid",-401357880),ulam.connect4client.position_state.call(null,(column + (row * (7))))], null));

var G__11037 = (i__11032 + (1));
i__11032 = G__11037;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11033),iter__11030.call(null,cljs.core.chunk_rest.call(null,s__11031__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11033),null);
}
} else {
var column = cljs.core.first.call(null,s__11031__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.grid","td.grid",-401357880),ulam.connect4client.position_state.call(null,(column + (row * (7))))], null),iter__11030.call(null,cljs.core.rest.call(null,s__11031__$2)));
}
} else {
return null;
}
break;
}
});})(row,s__11015__$2,temp__4406__auto__))
,null,null));
});})(row,s__11015__$2,temp__4406__auto__))
;
return iter__5953__auto__.call(null,cljs.core.range.call(null,(7)));
})()], null),iter__11014.call(null,cljs.core.rest.call(null,s__11015__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5953__auto__.call(null,cljs.core.range.call(null,(5),(-1),(-1)));
})()], null);
});
ulam.connect4client.game_values = (function game_values(){
var temp__4404__auto__ = ulam.connect4.check_terminal.call(null,ulam.connect4.state_from_moves.call(null,ulam.connect4.initial_state.call(null),cljs.core.deref.call(null,ulam.connect4client.moves)));
if(cljs.core.truth_(temp__4404__auto__)){
var result = temp__4404__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),[cljs.core.str("The game is: "),cljs.core.str(result),cljs.core.str(" "),cljs.core.str(ulam.connect4.state_from_moves.call(null,ulam.connect4.initial_state.call(null),cljs.core.deref.call(null,ulam.connect4client.moves)))].join('')], null);
} else {
return null;
}
});
ulam.connect4client.app = (function app(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),ulam.connect4client.print_board.call(null),ulam.connect4client.game_values.call(null)], null);
});
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ulam.connect4client.app], null),document.getElementById("app"));

//# sourceMappingURL=connect4client.js.map