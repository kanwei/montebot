// Compiled by ClojureScript 0.0-2371
goog.provide('reagent.ratom');
goog.require('cljs.core');
reagent.ratom.debug = false;
reagent.ratom._running = cljs.core.atom.call(null,(0));
reagent.ratom.running = (function running(){return cljs.core.deref.call(null,reagent.ratom._running);
});
reagent.ratom.capture_derefed = (function capture_derefed(f,obj){obj.cljsCaptured = null;
var _STAR_ratom_context_STAR_180388 = reagent.ratom._STAR_ratom_context_STAR_;try{reagent.ratom._STAR_ratom_context_STAR_ = obj;
return f.call(null);
}finally {reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR_180388;
}});
reagent.ratom.captured = (function captured(obj){var c = obj.cljsCaptured;obj.cljsCaptured = null;
return c;
});
reagent.ratom.notify_deref_watcher_BANG_ = (function notify_deref_watcher_BANG_(derefable){var obj = reagent.ratom._STAR_ratom_context_STAR_;if((obj == null))
{return null;
} else
{var captured = obj.cljsCaptured;return obj.cljsCaptured = cljs.core.conj.call(null,(((captured == null))?cljs.core.PersistentHashSet.EMPTY:captured),derefable);
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
reagent.ratom.RAtom.cljs$lang$type = true;
reagent.ratom.RAtom.cljs$lang$ctorStr = "reagent.ratom/RAtom";
reagent.ratom.RAtom.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"reagent.ratom/RAtom");
});
reagent.ratom.RAtom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return goog.getUid(this$__$1);
});
reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){var self__ = this;
var this$__$1 = this;return cljs.core.reduce_kv.call(null,((function (this$__$1){
return (function (_,key,f){f.call(null,key,this$__$1,oldval,newval);
return null;
});})(this$__$1))
,null,self__.watches);
});
reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){var self__ = this;
var this$__$1 = this;return self__.watches = cljs.core.assoc.call(null,self__.watches,key,f);
});
reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){var self__ = this;
var this$__$1 = this;return self__.watches = cljs.core.dissoc.call(null,self__.watches,key);
});
reagent.ratom.RAtom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,writer,opts){var self__ = this;
var a__$1 = this;cljs.core._write.call(null,writer,"#<Atom: ");
cljs.core.pr_writer.call(null,self__.state,writer,opts);
return cljs.core._write.call(null,writer,">");
});
reagent.ratom.RAtom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.meta;
});
reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f){var self__ = this;
var a__$1 = this;return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state));
});
reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){var self__ = this;
var a__$1 = this;return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state,x));
});
reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){var self__ = this;
var a__$1 = this;return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state,x,y));
});
reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){var self__ = this;
var a__$1 = this;return cljs.core._reset_BANG_.call(null,a__$1,cljs.core.apply.call(null,f,self__.state,x,y,more));
});
reagent.ratom.RAtom.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (a,new_value){var self__ = this;
var a__$1 = this;if((self__.validator == null))
{} else
{if(cljs.core.truth_(self__.validator.call(null,new_value)))
{} else
{throw (new Error(("Assert failed: Validator rejected reference state\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"validator","validator",-325659154,null),new cljs.core.Symbol(null,"new-value","new-value",-1567397401,null)))))));
}
}
var old_value = self__.state;self__.state = new_value;
if((self__.watches == null))
{} else
{cljs.core._notify_watches.call(null,a__$1,old_value,new_value);
}
return new_value;
});
reagent.ratom.RAtom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;reagent.ratom.notify_deref_watcher_BANG_.call(null,this$__$1);
return self__.state;
});
reagent.ratom.RAtom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){var self__ = this;
var o__$1 = this;return (o__$1 === other);
});
reagent.ratom.__GT_RAtom = (function __GT_RAtom(state,meta,validator,watches){return (new reagent.ratom.RAtom(state,meta,validator,watches));
});
/**
* Like clojure.core/atom, except that it keeps track of derefs.
* @param {...*} var_args
*/
reagent.ratom.atom = (function() {
var atom = null;
var atom__1 = (function (x){return (new reagent.ratom.RAtom(x,null,null,null));
});
var atom__2 = (function() { 
var G__180392__delegate = function (x,p__180389){var map__180391 = p__180389;var map__180391__$1 = ((cljs.core.seq_QMARK_.call(null,map__180391))?cljs.core.apply.call(null,cljs.core.hash_map,map__180391):map__180391);var validator = cljs.core.get.call(null,map__180391__$1,new cljs.core.Keyword(null,"validator","validator",-1966190681));var meta = cljs.core.get.call(null,map__180391__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));return (new reagent.ratom.RAtom(x,meta,validator,null));
};
var G__180392 = function (x,var_args){
var p__180389 = null;if (arguments.length > 1) {
  p__180389 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__180392__delegate.call(this,x,p__180389);};
G__180392.cljs$lang$maxFixedArity = 1;
G__180392.cljs$lang$applyTo = (function (arglist__180393){
var x = cljs.core.first(arglist__180393);
var p__180389 = cljs.core.rest(arglist__180393);
return G__180392__delegate(x,p__180389);
});
G__180392.cljs$core$IFn$_invoke$arity$variadic = G__180392__delegate;
return G__180392;
})()
;
atom = function(x,var_args){
var p__180389 = var_args;
switch(arguments.length){
case 1:
return atom__1.call(this,x);
default:
return atom__2.cljs$core$IFn$_invoke$arity$variadic(x, cljs.core.array_seq(arguments, 1));
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
reagent.ratom.RCursor.cljs$lang$type = true;
reagent.ratom.RCursor.cljs$lang$ctorStr = "reagent.ratom/RCursor";
reagent.ratom.RCursor.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"reagent.ratom/RCursor");
});
reagent.ratom.RCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return goog.getUid(this$__$1);
});
reagent.ratom.RCursor.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){var self__ = this;
var this$__$1 = this;return cljs.core._notify_watches.call(null,self__.ratom,oldval,newval);
});
reagent.ratom.RCursor.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){var self__ = this;
var this$__$1 = this;return cljs.core._add_watch.call(null,self__.ratom,key,f);
});
reagent.ratom.RCursor.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){var self__ = this;
var this$__$1 = this;return cljs.core._remove_watch.call(null,self__.ratom,key);
});
reagent.ratom.RCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,writer,opts){var self__ = this;
var a__$1 = this;cljs.core._write.call(null,writer,"#<Cursor: ");
cljs.core.pr_writer.call(null,self__.path,writer,opts);
cljs.core._write.call(null,writer," ");
cljs.core.pr_writer.call(null,self__.ratom,writer,opts);
return cljs.core._write.call(null,writer,">");
});
reagent.ratom.RCursor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core._meta.call(null,self__.ratom);
});
reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f){var self__ = this;
var a__$1 = this;return cljs.core.swap_BANG_.call(null,self__.ratom,cljs.core.update_in,self__.path,f);
});
reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){var self__ = this;
var a__$1 = this;return cljs.core.swap_BANG_.call(null,self__.ratom,cljs.core.update_in,self__.path,f,x);
});
reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){var self__ = this;
var a__$1 = this;return cljs.core.swap_BANG_.call(null,self__.ratom,cljs.core.update_in,self__.path,f,x,y);
});
reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){var self__ = this;
var a__$1 = this;return cljs.core.swap_BANG_.call(null,self__.ratom,cljs.core.update_in,self__.path,f,x,y,more);
});
reagent.ratom.RCursor.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (a,new_value){var self__ = this;
var a__$1 = this;return cljs.core.swap_BANG_.call(null,self__.ratom,cljs.core.assoc_in,self__.path,new_value);
});
reagent.ratom.RCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.ratom),self__.path);
});
reagent.ratom.RCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){var self__ = this;
var o__$1 = this;return (o__$1 === other);
});
reagent.ratom.__GT_RCursor = (function __GT_RCursor(path,ratom){return (new reagent.ratom.RCursor(path,ratom));
});
reagent.ratom.cursor = (function cursor(path,ra){return (new reagent.ratom.RCursor(path,ra));
});
reagent.ratom.IDisposable = (function (){var obj180395 = {};return obj180395;
})();
reagent.ratom.dispose_BANG_ = (function dispose_BANG_(this$){if((function (){var and__3628__auto__ = this$;if(and__3628__auto__)
{return this$.reagent$ratom$IDisposable$dispose_BANG_$arity$1;
} else
{return and__3628__auto__;
}
})())
{return this$.reagent$ratom$IDisposable$dispose_BANG_$arity$1(this$);
} else
{var x__4277__auto__ = (((this$ == null))?null:this$);return (function (){var or__3640__auto__ = (reagent.ratom.dispose_BANG_[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (reagent.ratom.dispose_BANG_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IDisposable.dispose!",this$);
}
}
})().call(null,this$);
}
});
reagent.ratom.IRunnable = (function (){var obj180397 = {};return obj180397;
})();
reagent.ratom.run = (function run(this$){if((function (){var and__3628__auto__ = this$;if(and__3628__auto__)
{return this$.reagent$ratom$IRunnable$run$arity$1;
} else
{return and__3628__auto__;
}
})())
{return this$.reagent$ratom$IRunnable$run$arity$1(this$);
} else
{var x__4277__auto__ = (((this$ == null))?null:this$);return (function (){var or__3640__auto__ = (reagent.ratom.run[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (reagent.ratom.run["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRunnable.run",this$);
}
}
})().call(null,this$);
}
});
reagent.ratom.IComputedImpl = (function (){var obj180399 = {};return obj180399;
})();
reagent.ratom._update_watching = (function _update_watching(this$,derefed){if((function (){var and__3628__auto__ = this$;if(and__3628__auto__)
{return this$.reagent$ratom$IComputedImpl$_update_watching$arity$2;
} else
{return and__3628__auto__;
}
})())
{return this$.reagent$ratom$IComputedImpl$_update_watching$arity$2(this$,derefed);
} else
{var x__4277__auto__ = (((this$ == null))?null:this$);return (function (){var or__3640__auto__ = (reagent.ratom._update_watching[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (reagent.ratom._update_watching["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IComputedImpl.-update-watching",this$);
}
}
})().call(null,this$,derefed);
}
});
reagent.ratom._handle_change = (function _handle_change(k,sender,oldval,newval){if((function (){var and__3628__auto__ = k;if(and__3628__auto__)
{return k.reagent$ratom$IComputedImpl$_handle_change$arity$4;
} else
{return and__3628__auto__;
}
})())
{return k.reagent$ratom$IComputedImpl$_handle_change$arity$4(k,sender,oldval,newval);
} else
{var x__4277__auto__ = (((k == null))?null:k);return (function (){var or__3640__auto__ = (reagent.ratom._handle_change[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (reagent.ratom._handle_change["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IComputedImpl.-handle-change",k);
}
}
})().call(null,k,sender,oldval,newval);
}
});
reagent.ratom.call_watches = (function call_watches(obs,watches,oldval,newval){return cljs.core.reduce_kv.call(null,(function (_,key,f){f.call(null,key,obs,oldval,newval);
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
reagent.ratom.Reaction.cljs$lang$type = true;
reagent.ratom.Reaction.cljs$lang$ctorStr = "reagent.ratom/Reaction";
reagent.ratom.Reaction.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"reagent.ratom/Reaction");
});
reagent.ratom.Reaction.prototype.reagent$ratom$IComputedImpl$ = true;
reagent.ratom.Reaction.prototype.reagent$ratom$IComputedImpl$_handle_change$arity$4 = (function (this$,sender,oldval,newval){var self__ = this;
var this$__$1 = this;if(cljs.core.truth_((function (){var and__3628__auto__ = self__.active_QMARK_;if(cljs.core.truth_(and__3628__auto__))
{return (cljs.core.not.call(null,self__.dirty_QMARK_)) && (!((oldval === newval)));
} else
{return and__3628__auto__;
}
})()))
{self__.dirty_QMARK_ = true;
return (function (){var or__3640__auto__ = self__.auto_run;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return reagent.ratom.run;
}
})().call(null,this$__$1);
} else
{return null;
}
});
reagent.ratom.Reaction.prototype.reagent$ratom$IComputedImpl$_update_watching$arity$2 = (function (this$,derefed){var self__ = this;
var this$__$1 = this;var seq__180400_180412 = cljs.core.seq.call(null,derefed);var chunk__180401_180413 = null;var count__180402_180414 = (0);var i__180403_180415 = (0);while(true){
if((i__180403_180415 < count__180402_180414))
{var w_180416 = cljs.core._nth.call(null,chunk__180401_180413,i__180403_180415);if(cljs.core.contains_QMARK_.call(null,self__.watching,w_180416))
{} else
{cljs.core.add_watch.call(null,w_180416,this$__$1,reagent.ratom._handle_change);
}
{
var G__180417 = seq__180400_180412;
var G__180418 = chunk__180401_180413;
var G__180419 = count__180402_180414;
var G__180420 = (i__180403_180415 + (1));
seq__180400_180412 = G__180417;
chunk__180401_180413 = G__180418;
count__180402_180414 = G__180419;
i__180403_180415 = G__180420;
continue;
}
} else
{var temp__4388__auto___180421 = cljs.core.seq.call(null,seq__180400_180412);if(temp__4388__auto___180421)
{var seq__180400_180422__$1 = temp__4388__auto___180421;if(cljs.core.chunked_seq_QMARK_.call(null,seq__180400_180422__$1))
{var c__4410__auto___180423 = cljs.core.chunk_first.call(null,seq__180400_180422__$1);{
var G__180424 = cljs.core.chunk_rest.call(null,seq__180400_180422__$1);
var G__180425 = c__4410__auto___180423;
var G__180426 = cljs.core.count.call(null,c__4410__auto___180423);
var G__180427 = (0);
seq__180400_180412 = G__180424;
chunk__180401_180413 = G__180425;
count__180402_180414 = G__180426;
i__180403_180415 = G__180427;
continue;
}
} else
{var w_180428 = cljs.core.first.call(null,seq__180400_180422__$1);if(cljs.core.contains_QMARK_.call(null,self__.watching,w_180428))
{} else
{cljs.core.add_watch.call(null,w_180428,this$__$1,reagent.ratom._handle_change);
}
{
var G__180429 = cljs.core.next.call(null,seq__180400_180422__$1);
var G__180430 = null;
var G__180431 = (0);
var G__180432 = (0);
seq__180400_180412 = G__180429;
chunk__180401_180413 = G__180430;
count__180402_180414 = G__180431;
i__180403_180415 = G__180432;
continue;
}
}
} else
{}
}
break;
}
var seq__180404_180433 = cljs.core.seq.call(null,self__.watching);var chunk__180405_180434 = null;var count__180406_180435 = (0);var i__180407_180436 = (0);while(true){
if((i__180407_180436 < count__180406_180435))
{var w_180437 = cljs.core._nth.call(null,chunk__180405_180434,i__180407_180436);if(cljs.core.contains_QMARK_.call(null,derefed,w_180437))
{} else
{cljs.core.remove_watch.call(null,w_180437,this$__$1);
}
{
var G__180438 = seq__180404_180433;
var G__180439 = chunk__180405_180434;
var G__180440 = count__180406_180435;
var G__180441 = (i__180407_180436 + (1));
seq__180404_180433 = G__180438;
chunk__180405_180434 = G__180439;
count__180406_180435 = G__180440;
i__180407_180436 = G__180441;
continue;
}
} else
{var temp__4388__auto___180442 = cljs.core.seq.call(null,seq__180404_180433);if(temp__4388__auto___180442)
{var seq__180404_180443__$1 = temp__4388__auto___180442;if(cljs.core.chunked_seq_QMARK_.call(null,seq__180404_180443__$1))
{var c__4410__auto___180444 = cljs.core.chunk_first.call(null,seq__180404_180443__$1);{
var G__180445 = cljs.core.chunk_rest.call(null,seq__180404_180443__$1);
var G__180446 = c__4410__auto___180444;
var G__180447 = cljs.core.count.call(null,c__4410__auto___180444);
var G__180448 = (0);
seq__180404_180433 = G__180445;
chunk__180405_180434 = G__180446;
count__180406_180435 = G__180447;
i__180407_180436 = G__180448;
continue;
}
} else
{var w_180449 = cljs.core.first.call(null,seq__180404_180443__$1);if(cljs.core.contains_QMARK_.call(null,derefed,w_180449))
{} else
{cljs.core.remove_watch.call(null,w_180449,this$__$1);
}
{
var G__180450 = cljs.core.next.call(null,seq__180404_180443__$1);
var G__180451 = null;
var G__180452 = (0);
var G__180453 = (0);
seq__180404_180433 = G__180450;
chunk__180405_180434 = G__180451;
count__180406_180435 = G__180452;
i__180407_180436 = G__180453;
continue;
}
}
} else
{}
}
break;
}
return self__.watching = derefed;
});
reagent.ratom.Reaction.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){var self__ = this;
var this$__$1 = this;cljs.core._write.call(null,writer,("#<Reaction "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.hash.call(null,this$__$1))+": "));
cljs.core.pr_writer.call(null,self__.state,writer,opts);
return cljs.core._write.call(null,writer,">");
});
reagent.ratom.Reaction.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return goog.getUid(this$__$1);
});
reagent.ratom.Reaction.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){var self__ = this;
var o__$1 = this;return (o__$1 === other);
});
reagent.ratom.Reaction.prototype.reagent$ratom$IDisposable$ = true;
reagent.ratom.Reaction.prototype.reagent$ratom$IDisposable$dispose_BANG_$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var seq__180408_180454 = cljs.core.seq.call(null,self__.watching);var chunk__180409_180455 = null;var count__180410_180456 = (0);var i__180411_180457 = (0);while(true){
if((i__180411_180457 < count__180410_180456))
{var w_180458 = cljs.core._nth.call(null,chunk__180409_180455,i__180411_180457);cljs.core.remove_watch.call(null,w_180458,this$__$1);
{
var G__180459 = seq__180408_180454;
var G__180460 = chunk__180409_180455;
var G__180461 = count__180410_180456;
var G__180462 = (i__180411_180457 + (1));
seq__180408_180454 = G__180459;
chunk__180409_180455 = G__180460;
count__180410_180456 = G__180461;
i__180411_180457 = G__180462;
continue;
}
} else
{var temp__4388__auto___180463 = cljs.core.seq.call(null,seq__180408_180454);if(temp__4388__auto___180463)
{var seq__180408_180464__$1 = temp__4388__auto___180463;if(cljs.core.chunked_seq_QMARK_.call(null,seq__180408_180464__$1))
{var c__4410__auto___180465 = cljs.core.chunk_first.call(null,seq__180408_180464__$1);{
var G__180466 = cljs.core.chunk_rest.call(null,seq__180408_180464__$1);
var G__180467 = c__4410__auto___180465;
var G__180468 = cljs.core.count.call(null,c__4410__auto___180465);
var G__180469 = (0);
seq__180408_180454 = G__180466;
chunk__180409_180455 = G__180467;
count__180410_180456 = G__180468;
i__180411_180457 = G__180469;
continue;
}
} else
{var w_180470 = cljs.core.first.call(null,seq__180408_180464__$1);cljs.core.remove_watch.call(null,w_180470,this$__$1);
{
var G__180471 = cljs.core.next.call(null,seq__180408_180464__$1);
var G__180472 = null;
var G__180473 = (0);
var G__180474 = (0);
seq__180408_180454 = G__180471;
chunk__180409_180455 = G__180472;
count__180410_180456 = G__180473;
i__180411_180457 = G__180474;
continue;
}
}
} else
{}
}
break;
}
self__.watching = cljs.core.PersistentHashSet.EMPTY;
self__.state = null;
self__.dirty_QMARK_ = true;
if(cljs.core.truth_(self__.active_QMARK_))
{if(cljs.core.truth_(reagent.ratom.debug))
{cljs.core.swap_BANG_.call(null,reagent.ratom._running,cljs.core.dec);
} else
{}
self__.active_QMARK_ = false;
} else
{}
if(cljs.core.truth_(self__.on_dispose))
{return self__.on_dispose.call(null);
} else
{return null;
}
});
reagent.ratom.Reaction.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (a,new_value){var self__ = this;
var a__$1 = this;var old_value = self__.state;self__.state = new_value;
cljs.core._notify_watches.call(null,a__$1,old_value,new_value);
return new_value;
});
reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f__$1){var self__ = this;
var a__$1 = this;return cljs.core._reset_BANG_.call(null,a__$1,f__$1.call(null,self__.state));
});
reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f__$1,x){var self__ = this;
var a__$1 = this;return cljs.core._reset_BANG_.call(null,a__$1,f__$1.call(null,self__.state,x));
});
reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f__$1,x,y){var self__ = this;
var a__$1 = this;return cljs.core._reset_BANG_.call(null,a__$1,f__$1.call(null,self__.state,x,y));
});
reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f__$1,x,y,more){var self__ = this;
var a__$1 = this;return cljs.core._reset_BANG_.call(null,a__$1,cljs.core.apply.call(null,f__$1,self__.state,x,y,more));
});
reagent.ratom.Reaction.prototype.reagent$ratom$IRunnable$ = true;
reagent.ratom.Reaction.prototype.reagent$ratom$IRunnable$run$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var oldstate = self__.state;var res = reagent.ratom.capture_derefed.call(null,self__.f,this$__$1);var derefed = reagent.ratom.captured.call(null,this$__$1);if(cljs.core.not_EQ_.call(null,derefed,self__.watching))
{reagent.ratom._update_watching.call(null,this$__$1,derefed);
} else
{}
if(cljs.core.truth_(self__.active_QMARK_))
{} else
{if(cljs.core.truth_(reagent.ratom.debug))
{cljs.core.swap_BANG_.call(null,reagent.ratom._running,cljs.core.inc);
} else
{}
self__.active_QMARK_ = true;
}
self__.dirty_QMARK_ = false;
self__.state = res;
reagent.ratom.call_watches.call(null,this$__$1,self__.watches,oldstate,self__.state);
return res;
});
reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){var self__ = this;
var this$__$1 = this;if(cljs.core.truth_(self__.on_set))
{self__.on_set.call(null,oldval,newval);
} else
{}
return reagent.ratom.call_watches.call(null,this$__$1,self__.watches,oldval,newval);
});
reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,k,wf){var self__ = this;
var this$__$1 = this;return self__.watches = cljs.core.assoc.call(null,self__.watches,k,wf);
});
reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,k){var self__ = this;
var this$__$1 = this;self__.watches = cljs.core.dissoc.call(null,self__.watches,k);
if(cljs.core.empty_QMARK_.call(null,self__.watches))
{return reagent.ratom.dispose_BANG_.call(null,this$__$1);
} else
{return null;
}
});
reagent.ratom.Reaction.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if(cljs.core.not.call(null,(function (){var or__3640__auto__ = self__.auto_run;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return reagent.ratom._STAR_ratom_context_STAR_;
}
})()))
{var x__5240__auto___180475 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.auto_run,reagent.ratom._STAR_ratom_context_STAR_], null);if(typeof console !== 'undefined')
{console.log((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("dbg reagent.ratom:"+231+": [auto-run *ratom-context*]: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,x__5240__auto___180475))))));
} else
{}
} else
{}
if(cljs.core.truth_((function (){var or__3640__auto__ = self__.auto_run;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return reagent.ratom._STAR_ratom_context_STAR_;
}
})()))
{} else
{throw (new Error(("Assert failed: Reaction derefed outside auto-running context\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),new cljs.core.Symbol(null,"auto-run","auto-run",-696035332,null),new cljs.core.Symbol(null,"*ratom-context*","*ratom-context*",-1557728360,null)))))));
}
reagent.ratom.notify_deref_watcher_BANG_.call(null,this$__$1);
if(cljs.core.truth_(self__.dirty_QMARK_))
{return reagent.ratom.run.call(null,this$__$1);
} else
{return self__.state;
}
});
reagent.ratom.__GT_Reaction = (function __GT_Reaction(f,state,dirty_QMARK_,active_QMARK_,watching,watches,auto_run,on_set,on_dispose){return (new reagent.ratom.Reaction(f,state,dirty_QMARK_,active_QMARK_,watching,watches,auto_run,on_set,on_dispose));
});
/**
* @param {...*} var_args
*/
reagent.ratom.make_reaction = (function() { 
var make_reaction__delegate = function (f,p__180476){var map__180478 = p__180476;var map__180478__$1 = ((cljs.core.seq_QMARK_.call(null,map__180478))?cljs.core.apply.call(null,cljs.core.hash_map,map__180478):map__180478);var derefed = cljs.core.get.call(null,map__180478__$1,new cljs.core.Keyword(null,"derefed","derefed",590684583));var on_dispose = cljs.core.get.call(null,map__180478__$1,new cljs.core.Keyword(null,"on-dispose","on-dispose",2105306360));var on_set = cljs.core.get.call(null,map__180478__$1,new cljs.core.Keyword(null,"on-set","on-set",-140953470));var auto_run = cljs.core.get.call(null,map__180478__$1,new cljs.core.Keyword(null,"auto-run","auto-run",1958400437));var runner = ((cljs.core._EQ_.call(null,auto_run,true))?reagent.ratom.run:auto_run);var active = !((derefed == null));var dirty = !(active);var reaction = (new reagent.ratom.Reaction(f,null,dirty,active,null,cljs.core.PersistentArrayMap.EMPTY,runner,on_set,on_dispose));if((derefed == null))
{} else
{if(cljs.core.truth_(reagent.ratom.debug))
{cljs.core.swap_BANG_.call(null,reagent.ratom._running,cljs.core.inc);
} else
{}
reagent.ratom._update_watching.call(null,reaction,derefed);
}
return reaction;
};
var make_reaction = function (f,var_args){
var p__180476 = null;if (arguments.length > 1) {
  p__180476 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return make_reaction__delegate.call(this,f,p__180476);};
make_reaction.cljs$lang$maxFixedArity = 1;
make_reaction.cljs$lang$applyTo = (function (arglist__180479){
var f = cljs.core.first(arglist__180479);
var p__180476 = cljs.core.rest(arglist__180479);
return make_reaction__delegate(f,p__180476);
});
make_reaction.cljs$core$IFn$_invoke$arity$variadic = make_reaction__delegate;
return make_reaction;
})()
;

//# sourceMappingURL=ratom.js.map