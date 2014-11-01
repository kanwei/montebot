// Compiled by ClojureScript 0.0-2371
goog.provide('reagent.impl.batching');
goog.require('cljs.core');
goog.require('reagent.impl.util');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('reagent.impl.util');
goog.require('reagent.ratom');
goog.require('reagent.ratom');
goog.require('reagent.interop');
goog.require('reagent.debug');
reagent.impl.batching.fake_raf = (function fake_raf(f){return setTimeout(f,(16));
});
reagent.impl.batching.next_tick = ((cljs.core.not.call(null,reagent.impl.util.is_client))?reagent.impl.batching.fake_raf:(function (){var w = window;var or__3640__auto__ = (w["requestAnimationFrame"]);if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (w["webkitRequestAnimationFrame"]);if(cljs.core.truth_(or__3640__auto____$1))
{return or__3640__auto____$1;
} else
{var or__3640__auto____$2 = (w["mozRequestAnimationFrame"]);if(cljs.core.truth_(or__3640__auto____$2))
{return or__3640__auto____$2;
} else
{var or__3640__auto____$3 = (w["msRequestAnimationFrame"]);if(cljs.core.truth_(or__3640__auto____$3))
{return or__3640__auto____$3;
} else
{return reagent.impl.batching.fake_raf;
}
}
}
}
})());
reagent.impl.batching.compare_levels = (function compare_levels(c1,c2){return ((c1["props"]["level"]) - (c2["props"]["level"]));
});
reagent.impl.batching.run_queue = (function run_queue(a){a.sort(reagent.impl.batching.compare_levels);
var n__4510__auto__ = a.length;var i = (0);while(true){
if((i < n__4510__auto__))
{var c_29074 = (a[i]);if(cljs.core.truth_((c_29074["cljsIsDirty"])))
{(c_29074["forceUpdate"])();
} else
{}
{
var G__29075 = (i + (1));
i = G__29075;
continue;
}
} else
{return null;
}
break;
}
});

/**
* @constructor
*/
reagent.impl.batching.RenderQueue = (function (queue,scheduled_QMARK_){
this.queue = queue;
this.scheduled_QMARK_ = scheduled_QMARK_;
})
reagent.impl.batching.RenderQueue.cljs$lang$type = true;
reagent.impl.batching.RenderQueue.cljs$lang$ctorStr = "reagent.impl.batching/RenderQueue";
reagent.impl.batching.RenderQueue.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"reagent.impl.batching/RenderQueue");
});
reagent.impl.batching.RenderQueue.prototype.queue_render = (function (c){var self__ = this;
var this$ = this;self__.queue.push(c);
return this$.schedule();
});
reagent.impl.batching.RenderQueue.prototype.schedule = (function (){var self__ = this;
var this$ = this;if(cljs.core.truth_(self__.scheduled_QMARK_))
{return null;
} else
{self__.scheduled_QMARK_ = true;
return reagent.impl.batching.next_tick.call(null,((function (this$){
return (function (){return this$.run_queue();
});})(this$))
);
}
});
reagent.impl.batching.RenderQueue.prototype.run_queue = (function (){var self__ = this;
var _ = this;var q = self__.queue;self__.queue = [];
self__.scheduled_QMARK_ = false;
return reagent.impl.batching.run_queue.call(null,q);
});
reagent.impl.batching.__GT_RenderQueue = (function __GT_RenderQueue(queue,scheduled_QMARK_){return (new reagent.impl.batching.RenderQueue(queue,scheduled_QMARK_));
});
reagent.impl.batching.render_queue = (new reagent.impl.batching.RenderQueue([],false));
reagent.impl.batching.flush = (function flush(){return reagent.impl.batching.render_queue.run_queue();
});
reagent.impl.batching.queue_render = (function queue_render(c){(c["cljsIsDirty"] = true);
return reagent.impl.batching.render_queue.queue_render(c);
});
reagent.impl.batching.mark_rendered = (function mark_rendered(c){return (c["cljsIsDirty"] = false);
});
reagent.impl.batching.is_reagent_component = (function is_reagent_component(c){var G__29077 = c;var G__29077__$1 = (((G__29077 == null))?null:(G__29077["props"]));var G__29077__$2 = (((G__29077__$1 == null))?null:(G__29077__$1["argv"]));return G__29077__$2;
});
reagent.impl.batching.run_reactively = (function run_reactively(c,run){if(cljs.core.truth_(reagent.impl.batching.is_reagent_component.call(null,c)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"is-reagent-component","is-reagent-component",-1856228005,null),new cljs.core.Symbol(null,"c","c",-122660552,null)))))));
}
reagent.impl.batching.mark_rendered.call(null,c);
var rat = (c["cljsRatom"]);if((rat == null))
{var res = reagent.ratom.capture_derefed.call(null,run,c);var derefed = reagent.ratom.captured.call(null,c);if(!((derefed == null)))
{(c["cljsRatom"] = reagent.ratom.make_reaction.call(null,run,new cljs.core.Keyword(null,"auto-run","auto-run",1958400437),((function (res,derefed,rat){
return (function (){return reagent.impl.batching.queue_render.call(null,c);
});})(res,derefed,rat))
,new cljs.core.Keyword(null,"derefed","derefed",590684583),derefed));
} else
{}
return res;
} else
{return reagent.ratom.run.call(null,rat);
}
});
reagent.impl.batching.dispose = (function dispose(c){var G__29079_29080 = (c["cljsRatom"]);var G__29079_29081__$1 = (((G__29079_29080 == null))?null:reagent.ratom.dispose_BANG_.call(null,G__29079_29080));return reagent.impl.batching.mark_rendered.call(null,c);
});

//# sourceMappingURL=batching.js.map