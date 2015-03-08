// Compiled by ClojureScript 0.0-2985 {}
goog.provide('reagent.ratom');
goog.require('cljs.core');
reagent.ratom.debug = false;
reagent.ratom._running = cljs.core.atom.call(null,(0));
reagent.ratom.running = (function running(){
return cljs.core.deref.call(null,reagent.ratom._running);
});
reagent.ratom.capture_derefed = (function capture_derefed(f,obj){
obj.cljsCaptured = null;

var _STAR_ratom_context_STAR_17327 = reagent.ratom._STAR_ratom_context_STAR_;
reagent.ratom._STAR_ratom_context_STAR_ = obj;

try{return f.call(null);
}finally {reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR_17327;
}});
reagent.ratom.captured = (function captured(obj){
var c = obj.cljsCaptured;
obj.cljsCaptured = null;

return c;
});
reagent.ratom.notify_deref_watcher_BANG_ = (function notify_deref_watcher_BANG_(derefable){
var obj = reagent.ratom._STAR_ratom_context_STAR_;
if((obj == null)){
return null;
} else {
var captured = obj.cljsCaptured;
return obj.cljsCaptured = cljs.core.conj.call(null,(((captured == null))?cljs.core.PersistentHashSet.EMPTY:captured),derefable);
}
});

/**
* @constructor
*/
reagent.ratom.RAtom = (function (state,meta,validator,watches){
this.state = state;
this.meta = meta;
this.validator = validator;
this.watches = watches;
this.cljs$lang$protocol_mask$partition0$ = 2153938944;
this.cljs$lang$protocol_mask$partition1$ = 114690;
})
reagent.ratom.RAtom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return goog.getUid(this$__$1);
});

reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
return cljs.core.reduce_kv.call(null,((function (this$__$1){
return (function (_,key,f){
f.call(null,key,this$__$1,oldval,newval);

return null;
});})(this$__$1))
,null,self__.watches);
});

reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return self__.watches = cljs.core.assoc.call(null,self__.watches,key,f);
});

reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return self__.watches = cljs.core.dissoc.call(null,self__.watches,key);
});

reagent.ratom.RAtom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,writer,opts){
var self__ = this;
var a__$1 = this;
cljs.core._write.call(null,writer,"#<Atom: ");

cljs.core.pr_writer.call(null,self__.state,writer,opts);

return cljs.core._write.call(null,writer,">");
});

reagent.ratom.RAtom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.meta;
});

reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state));
});

reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state,x));
});

reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state,x,y));
});

reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,cljs.core.apply.call(null,f,self__.state,x,y,more));
});

reagent.ratom.RAtom.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (a,new_value){
var self__ = this;
var a__$1 = this;
if((self__.validator == null)){
} else {
if(cljs.core.truth_(self__.validator.call(null,new_value))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Validator rejected reference state"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"validator","validator",-325659154,null),new cljs.core.Symbol(null,"new-value","new-value",-1567397401,null))))].join('')));
}
}

var old_value = self__.state;
self__.state = new_value;

if((self__.watches == null)){
} else {
cljs.core._notify_watches.call(null,a__$1,old_value,new_value);
}

return new_value;
});

reagent.ratom.RAtom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
reagent.ratom.notify_deref_watcher_BANG_.call(null,this$__$1);

return self__.state;
});

reagent.ratom.RAtom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return (o__$1 === other);
});

reagent.ratom.RAtom.cljs$lang$type = true;

reagent.ratom.RAtom.cljs$lang$ctorStr = "reagent.ratom/RAtom";

reagent.ratom.RAtom.cljs$lang$ctorPrWriter = (function (this__5784__auto__,writer__5785__auto__,opt__5786__auto__){
return cljs.core._write.call(null,writer__5785__auto__,"reagent.ratom/RAtom");
});

reagent.ratom.__GT_RAtom = (function __GT_RAtom(state,meta,validator,watches){
return (new reagent.ratom.RAtom(state,meta,validator,watches));
});

/**
 * Like clojure.core/atom, except that it keeps track of derefs.
 * @param {...*} var_args
 */
reagent.ratom.atom = (function() {
var atom = null;
var atom__1 = (function (x){
return (new reagent.ratom.RAtom(x,null,null,null));
});
var atom__2 = (function() { 
var G__17331__delegate = function (x,p__17328){
var map__17330 = p__17328;
var map__17330__$1 = ((cljs.core.seq_QMARK_.call(null,map__17330))?cljs.core.apply.call(null,cljs.core.hash_map,map__17330):map__17330);
var validator = cljs.core.get.call(null,map__17330__$1,new cljs.core.Keyword(null,"validator","validator",-1966190681));
var meta = cljs.core.get.call(null,map__17330__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
return (new reagent.ratom.RAtom(x,meta,validator,null));
};
var G__17331 = function (x,var_args){
var p__17328 = null;
if (arguments.length > 1) {
var G__17332__i = 0, G__17332__a = new Array(arguments.length -  1);
while (G__17332__i < G__17332__a.length) {G__17332__a[G__17332__i] = arguments[G__17332__i + 1]; ++G__17332__i;}
  p__17328 = new cljs.core.IndexedSeq(G__17332__a,0);
} 
return G__17331__delegate.call(this,x,p__17328);};
G__17331.cljs$lang$maxFixedArity = 1;
G__17331.cljs$lang$applyTo = (function (arglist__17333){
var x = cljs.core.first(arglist__17333);
var p__17328 = cljs.core.rest(arglist__17333);
return G__17331__delegate(x,p__17328);
});
G__17331.cljs$core$IFn$_invoke$arity$variadic = G__17331__delegate;
return G__17331;
})()
;
atom = function(x,var_args){
var p__17328 = var_args;
switch(arguments.length){
case 1:
return atom__1.call(this,x);
default:
var G__17334 = null;
if (arguments.length > 1) {
var G__17335__i = 0, G__17335__a = new Array(arguments.length -  1);
while (G__17335__i < G__17335__a.length) {G__17335__a[G__17335__i] = arguments[G__17335__i + 1]; ++G__17335__i;}
G__17334 = new cljs.core.IndexedSeq(G__17335__a,0);
}
return atom__2.cljs$core$IFn$_invoke$arity$variadic(x, G__17334);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__2.cljs$lang$applyTo;
atom.cljs$core$IFn$_invoke$arity$1 = atom__1;
atom.cljs$core$IFn$_invoke$arity$variadic = atom__2.cljs$core$IFn$_invoke$arity$variadic;
return atom;
})()
;

/**
* @constructor
*/
reagent.ratom.RCursor = (function (path,ratom){
this.path = path;
this.ratom = ratom;
this.cljs$lang$protocol_mask$partition0$ = 2153938944;
this.cljs$lang$protocol_mask$partition1$ = 114690;
})
reagent.ratom.RCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return goog.getUid(this$__$1);
});

reagent.ratom.RCursor.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
return cljs.core._notify_watches.call(null,self__.ratom,oldval,newval);
});

reagent.ratom.RCursor.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return cljs.core._add_watch.call(null,self__.ratom,key,f);
});

reagent.ratom.RCursor.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return cljs.core._remove_watch.call(null,self__.ratom,key);
});

reagent.ratom.RCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,writer,opts){
var self__ = this;
var a__$1 = this;
cljs.core._write.call(null,writer,"#<Cursor: ");

cljs.core.pr_writer.call(null,self__.path,writer,opts);

cljs.core._write.call(null,writer," ");

cljs.core.pr_writer.call(null,self__.ratom,writer,opts);

return cljs.core._write.call(null,writer,">");
});

reagent.ratom.RCursor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._meta.call(null,self__.ratom);
});

reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f){
var self__ = this;
var a__$1 = this;
return cljs.core.swap_BANG_.call(null,self__.ratom,cljs.core.update_in,self__.path,f);
});

reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){
var self__ = this;
var a__$1 = this;
return cljs.core.swap_BANG_.call(null,self__.ratom,cljs.core.update_in,self__.path,f,x);
});

reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core.swap_BANG_.call(null,self__.ratom,cljs.core.update_in,self__.path,f,x,y);
});

reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){
var self__ = this;
var a__$1 = this;
return cljs.core.swap_BANG_.call(null,self__.ratom,cljs.core.update_in,self__.path,f,x,y,more);
});

reagent.ratom.RCursor.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (a,new_value){
var self__ = this;
var a__$1 = this;
return cljs.core.swap_BANG_.call(null,self__.ratom,cljs.core.assoc_in,self__.path,new_value);
});

reagent.ratom.RCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.ratom),self__.path);
});

reagent.ratom.RCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return (o__$1 === other);
});

reagent.ratom.RCursor.cljs$lang$type = true;

reagent.ratom.RCursor.cljs$lang$ctorStr = "reagent.ratom/RCursor";

reagent.ratom.RCursor.cljs$lang$ctorPrWriter = (function (this__5784__auto__,writer__5785__auto__,opt__5786__auto__){
return cljs.core._write.call(null,writer__5785__auto__,"reagent.ratom/RCursor");
});

reagent.ratom.__GT_RCursor = (function __GT_RCursor(path,ratom){
return (new reagent.ratom.RCursor(path,ratom));
});

reagent.ratom.cursor = (function cursor(path,ra){
return (new reagent.ratom.RCursor(path,ra));
});

reagent.ratom.IDisposable = (function (){var obj17337 = {};
return obj17337;
})();

reagent.ratom.dispose_BANG_ = (function dispose_BANG_(this$){
if((function (){var and__5185__auto__ = this$;
if(and__5185__auto__){
return this$.reagent$ratom$IDisposable$dispose_BANG_$arity$1;
} else {
return and__5185__auto__;
}
})()){
return this$.reagent$ratom$IDisposable$dispose_BANG_$arity$1(this$);
} else {
var x__5841__auto__ = (((this$ == null))?null:this$);
return (function (){var or__5197__auto__ = (reagent.ratom.dispose_BANG_[goog.typeOf(x__5841__auto__)]);
if(or__5197__auto__){
return or__5197__auto__;
} else {
var or__5197__auto____$1 = (reagent.ratom.dispose_BANG_["_"]);
if(or__5197__auto____$1){
return or__5197__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IDisposable.dispose!",this$);
}
}
})().call(null,this$);
}
});


reagent.ratom.IRunnable = (function (){var obj17339 = {};
return obj17339;
})();

reagent.ratom.run = (function run(this$){
if((function (){var and__5185__auto__ = this$;
if(and__5185__auto__){
return this$.reagent$ratom$IRunnable$run$arity$1;
} else {
return and__5185__auto__;
}
})()){
return this$.reagent$ratom$IRunnable$run$arity$1(this$);
} else {
var x__5841__auto__ = (((this$ == null))?null:this$);
return (function (){var or__5197__auto__ = (reagent.ratom.run[goog.typeOf(x__5841__auto__)]);
if(or__5197__auto__){
return or__5197__auto__;
} else {
var or__5197__auto____$1 = (reagent.ratom.run["_"]);
if(or__5197__auto____$1){
return or__5197__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRunnable.run",this$);
}
}
})().call(null,this$);
}
});


reagent.ratom.IComputedImpl = (function (){var obj17341 = {};
return obj17341;
})();

reagent.ratom._update_watching = (function _update_watching(this$,derefed){
if((function (){var and__5185__auto__ = this$;
if(and__5185__auto__){
return this$.reagent$ratom$IComputedImpl$_update_watching$arity$2;
} else {
return and__5185__auto__;
}
})()){
return this$.reagent$ratom$IComputedImpl$_update_watching$arity$2(this$,derefed);
} else {
var x__5841__auto__ = (((this$ == null))?null:this$);
return (function (){var or__5197__auto__ = (reagent.ratom._update_watching[goog.typeOf(x__5841__auto__)]);
if(or__5197__auto__){
return or__5197__auto__;
} else {
var or__5197__auto____$1 = (reagent.ratom._update_watching["_"]);
if(or__5197__auto____$1){
return or__5197__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IComputedImpl.-update-watching",this$);
}
}
})().call(null,this$,derefed);
}
});

reagent.ratom._handle_change = (function _handle_change(k,sender,oldval,newval){
if((function (){var and__5185__auto__ = k;
if(and__5185__auto__){
return k.reagent$ratom$IComputedImpl$_handle_change$arity$4;
} else {
return and__5185__auto__;
}
})()){
return k.reagent$ratom$IComputedImpl$_handle_change$arity$4(k,sender,oldval,newval);
} else {
var x__5841__auto__ = (((k == null))?null:k);
return (function (){var or__5197__auto__ = (reagent.ratom._handle_change[goog.typeOf(x__5841__auto__)]);
if(or__5197__auto__){
return or__5197__auto__;
} else {
var or__5197__auto____$1 = (reagent.ratom._handle_change["_"]);
if(or__5197__auto____$1){
return or__5197__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IComputedImpl.-handle-change",k);
}
}
})().call(null,k,sender,oldval,newval);
}
});

reagent.ratom.call_watches = (function call_watches(obs,watches,oldval,newval){
return cljs.core.reduce_kv.call(null,(function (_,key,f){
f.call(null,key,obs,oldval,newval);

return null;
}),null,watches);
});

/**
* @constructor
*/
reagent.ratom.Reaction = (function (f,state,dirty_QMARK_,active_QMARK_,watching,watches,auto_run,on_set,on_dispose){
this.f = f;
this.state = state;
this.dirty_QMARK_ = dirty_QMARK_;
this.active_QMARK_ = active_QMARK_;
this.watching = watching;
this.watches = watches;
this.auto_run = auto_run;
this.on_set = on_set;
this.on_dispose = on_dispose;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
this.cljs$lang$protocol_mask$partition1$ = 114690;
})
reagent.ratom.Reaction.prototype.reagent$ratom$IComputedImpl$ = true;

reagent.ratom.Reaction.prototype.reagent$ratom$IComputedImpl$_handle_change$arity$4 = (function (this$,sender,oldval,newval){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_((function (){var and__5185__auto__ = self__.active_QMARK_;
if(cljs.core.truth_(and__5185__auto__)){
return (cljs.core.not.call(null,self__.dirty_QMARK_)) && (!((oldval === newval)));
} else {
return and__5185__auto__;
}
})())){
self__.dirty_QMARK_ = true;

return (function (){var or__5197__auto__ = self__.auto_run;
if(cljs.core.truth_(or__5197__auto__)){
return or__5197__auto__;
} else {
return reagent.ratom.run;
}
})().call(null,this$__$1);
} else {
return null;
}
});

reagent.ratom.Reaction.prototype.reagent$ratom$IComputedImpl$_update_watching$arity$2 = (function (this$,derefed){
var self__ = this;
var this$__$1 = this;
var seq__17342_17354 = cljs.core.seq.call(null,derefed);
var chunk__17343_17355 = null;
var count__17344_17356 = (0);
var i__17345_17357 = (0);
while(true){
if((i__17345_17357 < count__17344_17356)){
var w_17358 = cljs.core._nth.call(null,chunk__17343_17355,i__17345_17357);
if(cljs.core.contains_QMARK_.call(null,self__.watching,w_17358)){
} else {
cljs.core.add_watch.call(null,w_17358,this$__$1,reagent.ratom._handle_change);
}

var G__17359 = seq__17342_17354;
var G__17360 = chunk__17343_17355;
var G__17361 = count__17344_17356;
var G__17362 = (i__17345_17357 + (1));
seq__17342_17354 = G__17359;
chunk__17343_17355 = G__17360;
count__17344_17356 = G__17361;
i__17345_17357 = G__17362;
continue;
} else {
var temp__4406__auto___17363 = cljs.core.seq.call(null,seq__17342_17354);
if(temp__4406__auto___17363){
var seq__17342_17364__$1 = temp__4406__auto___17363;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17342_17364__$1)){
var c__5984__auto___17365 = cljs.core.chunk_first.call(null,seq__17342_17364__$1);
var G__17366 = cljs.core.chunk_rest.call(null,seq__17342_17364__$1);
var G__17367 = c__5984__auto___17365;
var G__17368 = cljs.core.count.call(null,c__5984__auto___17365);
var G__17369 = (0);
seq__17342_17354 = G__17366;
chunk__17343_17355 = G__17367;
count__17344_17356 = G__17368;
i__17345_17357 = G__17369;
continue;
} else {
var w_17370 = cljs.core.first.call(null,seq__17342_17364__$1);
if(cljs.core.contains_QMARK_.call(null,self__.watching,w_17370)){
} else {
cljs.core.add_watch.call(null,w_17370,this$__$1,reagent.ratom._handle_change);
}

var G__17371 = cljs.core.next.call(null,seq__17342_17364__$1);
var G__17372 = null;
var G__17373 = (0);
var G__17374 = (0);
seq__17342_17354 = G__17371;
chunk__17343_17355 = G__17372;
count__17344_17356 = G__17373;
i__17345_17357 = G__17374;
continue;
}
} else {
}
}
break;
}

var seq__17346_17375 = cljs.core.seq.call(null,self__.watching);
var chunk__17347_17376 = null;
var count__17348_17377 = (0);
var i__17349_17378 = (0);
while(true){
if((i__17349_17378 < count__17348_17377)){
var w_17379 = cljs.core._nth.call(null,chunk__17347_17376,i__17349_17378);
if(cljs.core.contains_QMARK_.call(null,derefed,w_17379)){
} else {
cljs.core.remove_watch.call(null,w_17379,this$__$1);
}

var G__17380 = seq__17346_17375;
var G__17381 = chunk__17347_17376;
var G__17382 = count__17348_17377;
var G__17383 = (i__17349_17378 + (1));
seq__17346_17375 = G__17380;
chunk__17347_17376 = G__17381;
count__17348_17377 = G__17382;
i__17349_17378 = G__17383;
continue;
} else {
var temp__4406__auto___17384 = cljs.core.seq.call(null,seq__17346_17375);
if(temp__4406__auto___17384){
var seq__17346_17385__$1 = temp__4406__auto___17384;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17346_17385__$1)){
var c__5984__auto___17386 = cljs.core.chunk_first.call(null,seq__17346_17385__$1);
var G__17387 = cljs.core.chunk_rest.call(null,seq__17346_17385__$1);
var G__17388 = c__5984__auto___17386;
var G__17389 = cljs.core.count.call(null,c__5984__auto___17386);
var G__17390 = (0);
seq__17346_17375 = G__17387;
chunk__17347_17376 = G__17388;
count__17348_17377 = G__17389;
i__17349_17378 = G__17390;
continue;
} else {
var w_17391 = cljs.core.first.call(null,seq__17346_17385__$1);
if(cljs.core.contains_QMARK_.call(null,derefed,w_17391)){
} else {
cljs.core.remove_watch.call(null,w_17391,this$__$1);
}

var G__17392 = cljs.core.next.call(null,seq__17346_17385__$1);
var G__17393 = null;
var G__17394 = (0);
var G__17395 = (0);
seq__17346_17375 = G__17392;
chunk__17347_17376 = G__17393;
count__17348_17377 = G__17394;
i__17349_17378 = G__17395;
continue;
}
} else {
}
}
break;
}

return self__.watching = derefed;
});

reagent.ratom.Reaction.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
cljs.core._write.call(null,writer,[cljs.core.str("#<Reaction "),cljs.core.str(cljs.core.hash.call(null,this$__$1)),cljs.core.str(": ")].join(''));

cljs.core.pr_writer.call(null,self__.state,writer,opts);

return cljs.core._write.call(null,writer,">");
});

reagent.ratom.Reaction.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return goog.getUid(this$__$1);
});

reagent.ratom.Reaction.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return (o__$1 === other);
});

reagent.ratom.Reaction.prototype.reagent$ratom$IDisposable$ = true;

reagent.ratom.Reaction.prototype.reagent$ratom$IDisposable$dispose_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var seq__17350_17396 = cljs.core.seq.call(null,self__.watching);
var chunk__17351_17397 = null;
var count__17352_17398 = (0);
var i__17353_17399 = (0);
while(true){
if((i__17353_17399 < count__17352_17398)){
var w_17400 = cljs.core._nth.call(null,chunk__17351_17397,i__17353_17399);
cljs.core.remove_watch.call(null,w_17400,this$__$1);

var G__17401 = seq__17350_17396;
var G__17402 = chunk__17351_17397;
var G__17403 = count__17352_17398;
var G__17404 = (i__17353_17399 + (1));
seq__17350_17396 = G__17401;
chunk__17351_17397 = G__17402;
count__17352_17398 = G__17403;
i__17353_17399 = G__17404;
continue;
} else {
var temp__4406__auto___17405 = cljs.core.seq.call(null,seq__17350_17396);
if(temp__4406__auto___17405){
var seq__17350_17406__$1 = temp__4406__auto___17405;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17350_17406__$1)){
var c__5984__auto___17407 = cljs.core.chunk_first.call(null,seq__17350_17406__$1);
var G__17408 = cljs.core.chunk_rest.call(null,seq__17350_17406__$1);
var G__17409 = c__5984__auto___17407;
var G__17410 = cljs.core.count.call(null,c__5984__auto___17407);
var G__17411 = (0);
seq__17350_17396 = G__17408;
chunk__17351_17397 = G__17409;
count__17352_17398 = G__17410;
i__17353_17399 = G__17411;
continue;
} else {
var w_17412 = cljs.core.first.call(null,seq__17350_17406__$1);
cljs.core.remove_watch.call(null,w_17412,this$__$1);

var G__17413 = cljs.core.next.call(null,seq__17350_17406__$1);
var G__17414 = null;
var G__17415 = (0);
var G__17416 = (0);
seq__17350_17396 = G__17413;
chunk__17351_17397 = G__17414;
count__17352_17398 = G__17415;
i__17353_17399 = G__17416;
continue;
}
} else {
}
}
break;
}

self__.watching = cljs.core.PersistentHashSet.EMPTY;

self__.state = null;

self__.dirty_QMARK_ = true;

if(cljs.core.truth_(self__.active_QMARK_)){
if(cljs.core.truth_(reagent.ratom.debug)){
cljs.core.swap_BANG_.call(null,reagent.ratom._running,cljs.core.dec);
} else {
}

self__.active_QMARK_ = false;
} else {
}

if(cljs.core.truth_(self__.on_dispose)){
return self__.on_dispose.call(null);
} else {
return null;
}
});

reagent.ratom.Reaction.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (a,new_value){
var self__ = this;
var a__$1 = this;
var old_value = self__.state;
self__.state = new_value;

cljs.core._notify_watches.call(null,a__$1,old_value,new_value);

return new_value;
});

reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f__$1){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f__$1.call(null,self__.state));
});

reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f__$1,x){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f__$1.call(null,self__.state,x));
});

reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f__$1,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f__$1.call(null,self__.state,x,y));
});

reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f__$1,x,y,more){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,cljs.core.apply.call(null,f__$1,self__.state,x,y,more));
});

reagent.ratom.Reaction.prototype.reagent$ratom$IRunnable$ = true;

reagent.ratom.Reaction.prototype.reagent$ratom$IRunnable$run$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var oldstate = self__.state;
var res = reagent.ratom.capture_derefed.call(null,self__.f,this$__$1);
var derefed = reagent.ratom.captured.call(null,this$__$1);
if(cljs.core.not_EQ_.call(null,derefed,self__.watching)){
reagent.ratom._update_watching.call(null,this$__$1,derefed);
} else {
}

if(cljs.core.truth_(self__.active_QMARK_)){
} else {
if(cljs.core.truth_(reagent.ratom.debug)){
cljs.core.swap_BANG_.call(null,reagent.ratom._running,cljs.core.inc);
} else {
}

self__.active_QMARK_ = true;
}

self__.dirty_QMARK_ = false;

self__.state = res;

reagent.ratom.call_watches.call(null,this$__$1,self__.watches,oldstate,self__.state);

return res;
});

reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(self__.on_set)){
self__.on_set.call(null,oldval,newval);
} else {
}

return reagent.ratom.call_watches.call(null,this$__$1,self__.watches,oldval,newval);
});

reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,k,wf){
var self__ = this;
var this$__$1 = this;
return self__.watches = cljs.core.assoc.call(null,self__.watches,k,wf);
});

reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
self__.watches = cljs.core.dissoc.call(null,self__.watches,k);

if(cljs.core.empty_QMARK_.call(null,self__.watches)){
return reagent.ratom.dispose_BANG_.call(null,this$__$1);
} else {
return null;
}
});

reagent.ratom.Reaction.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.not.call(null,(function (){var or__5197__auto__ = self__.auto_run;
if(cljs.core.truth_(or__5197__auto__)){
return or__5197__auto__;
} else {
return reagent.ratom._STAR_ratom_context_STAR_;
}
})())){
var x__6807__auto___17417 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.auto_run,reagent.ratom._STAR_ratom_context_STAR_], null);
if(typeof console !== 'undefined'){
console.log([cljs.core.str([cljs.core.str("dbg "),cljs.core.str("reagent.ratom"),cljs.core.str(":"),cljs.core.str(231),cljs.core.str(": "),cljs.core.str("[auto-run *ratom-context*]"),cljs.core.str(": "),cljs.core.str(cljs.core.pr_str.call(null,x__6807__auto___17417))].join(''))].join(''));
} else {
}

} else {
}

if(cljs.core.truth_((function (){var or__5197__auto__ = self__.auto_run;
if(cljs.core.truth_(or__5197__auto__)){
return or__5197__auto__;
} else {
return reagent.ratom._STAR_ratom_context_STAR_;
}
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Reaction derefed outside auto-running context"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),new cljs.core.Symbol(null,"auto-run","auto-run",-696035332,null),new cljs.core.Symbol(null,"*ratom-context*","*ratom-context*",-1557728360,null))))].join('')));
}

reagent.ratom.notify_deref_watcher_BANG_.call(null,this$__$1);

if(cljs.core.truth_(self__.dirty_QMARK_)){
return reagent.ratom.run.call(null,this$__$1);
} else {
return self__.state;
}
});

reagent.ratom.Reaction.cljs$lang$type = true;

reagent.ratom.Reaction.cljs$lang$ctorStr = "reagent.ratom/Reaction";

reagent.ratom.Reaction.cljs$lang$ctorPrWriter = (function (this__5784__auto__,writer__5785__auto__,opt__5786__auto__){
return cljs.core._write.call(null,writer__5785__auto__,"reagent.ratom/Reaction");
});

reagent.ratom.__GT_Reaction = (function __GT_Reaction(f,state,dirty_QMARK_,active_QMARK_,watching,watches,auto_run,on_set,on_dispose){
return (new reagent.ratom.Reaction(f,state,dirty_QMARK_,active_QMARK_,watching,watches,auto_run,on_set,on_dispose));
});

/**
 * @param {...*} var_args
 */
reagent.ratom.make_reaction = (function() { 
var make_reaction__delegate = function (f,p__17418){
var map__17420 = p__17418;
var map__17420__$1 = ((cljs.core.seq_QMARK_.call(null,map__17420))?cljs.core.apply.call(null,cljs.core.hash_map,map__17420):map__17420);
var derefed = cljs.core.get.call(null,map__17420__$1,new cljs.core.Keyword(null,"derefed","derefed",590684583));
var on_dispose = cljs.core.get.call(null,map__17420__$1,new cljs.core.Keyword(null,"on-dispose","on-dispose",2105306360));
var on_set = cljs.core.get.call(null,map__17420__$1,new cljs.core.Keyword(null,"on-set","on-set",-140953470));
var auto_run = cljs.core.get.call(null,map__17420__$1,new cljs.core.Keyword(null,"auto-run","auto-run",1958400437));
var runner = ((cljs.core._EQ_.call(null,auto_run,true))?reagent.ratom.run:auto_run);
var active = !((derefed == null));
var dirty = !(active);
var reaction = (new reagent.ratom.Reaction(f,null,dirty,active,null,cljs.core.PersistentArrayMap.EMPTY,runner,on_set,on_dispose));
if((derefed == null)){
} else {
if(cljs.core.truth_(reagent.ratom.debug)){
cljs.core.swap_BANG_.call(null,reagent.ratom._running,cljs.core.inc);
} else {
}

reagent.ratom._update_watching.call(null,reaction,derefed);
}

return reaction;
};
var make_reaction = function (f,var_args){
var p__17418 = null;
if (arguments.length > 1) {
var G__17421__i = 0, G__17421__a = new Array(arguments.length -  1);
while (G__17421__i < G__17421__a.length) {G__17421__a[G__17421__i] = arguments[G__17421__i + 1]; ++G__17421__i;}
  p__17418 = new cljs.core.IndexedSeq(G__17421__a,0);
} 
return make_reaction__delegate.call(this,f,p__17418);};
make_reaction.cljs$lang$maxFixedArity = 1;
make_reaction.cljs$lang$applyTo = (function (arglist__17422){
var f = cljs.core.first(arglist__17422);
var p__17418 = cljs.core.rest(arglist__17422);
return make_reaction__delegate(f,p__17418);
});
make_reaction.cljs$core$IFn$_invoke$arity$variadic = make_reaction__delegate;
return make_reaction;
})()
;

//# sourceMappingURL=ratom.js.map