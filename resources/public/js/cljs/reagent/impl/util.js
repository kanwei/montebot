// Compiled by ClojureScript 0.0-2371
goog.provide('reagent.impl.util');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('reagent.interop');
goog.require('reagent.debug');
reagent.impl.util.is_client = (typeof window !== 'undefined') && (!(((window["document"]) == null)));
reagent.impl.util.extract_props = (function extract_props(v){var p = cljs.core.nth.call(null,v,(1),null);if(cljs.core.map_QMARK_.call(null,p))
{return p;
} else
{return null;
}
});
reagent.impl.util.extract_children = (function extract_children(v){var p = cljs.core.nth.call(null,v,(1),null);var first_child = ((((p == null)) || (cljs.core.map_QMARK_.call(null,p)))?(2):(1));if((cljs.core.count.call(null,v) > first_child))
{return cljs.core.subvec.call(null,v,first_child);
} else
{return null;
}
});
reagent.impl.util.get_argv = (function get_argv(c){return (c["props"]["argv"]);
});
reagent.impl.util.get_props = (function get_props(c){return reagent.impl.util.extract_props.call(null,(c["props"]["argv"]));
});
reagent.impl.util.get_children = (function get_children(c){return reagent.impl.util.extract_children.call(null,(c["props"]["argv"]));
});
reagent.impl.util.reagent_component_QMARK_ = (function reagent_component_QMARK_(c){return !(((c["props"]["argv"]) == null));
});
reagent.impl.util.cached_react_class = (function cached_react_class(c){return (c["cljsReactClass"]);
});
reagent.impl.util.cache_react_class = (function cache_react_class(c,constructor){return (c["cljsReactClass"] = constructor);
});
reagent.impl.util.memoize_1 = (function memoize_1(f){var mem = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);return ((function (mem){
return (function (arg){var v = cljs.core.get.call(null,cljs.core.deref.call(null,mem),arg);if(!((v == null)))
{return v;
} else
{var ret = f.call(null,arg);cljs.core.swap_BANG_.call(null,mem,cljs.core.assoc,arg,ret);
return ret;
}
});
;})(mem))
});
reagent.impl.util.dont_camel_case = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["aria",null,"data",null], null), null);
reagent.impl.util.capitalize = (function capitalize(s){if((cljs.core.count.call(null,s) < (2)))
{return clojure.string.upper_case.call(null,s);
} else
{return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.upper_case.call(null,cljs.core.subs.call(null,s,(0),(1))))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,s,(1))));
}
});
reagent.impl.util.dash_to_camel = (function dash_to_camel(dashed){if(typeof dashed === 'string')
{return dashed;
} else
{var name_str = cljs.core.name.call(null,dashed);var vec__29086 = clojure.string.split.call(null,name_str,/-/);var start = cljs.core.nth.call(null,vec__29086,(0),null);var parts = cljs.core.nthnext.call(null,vec__29086,(1));if(cljs.core.truth_(reagent.impl.util.dont_camel_case.call(null,start)))
{return name_str;
} else
{return cljs.core.apply.call(null,cljs.core.str,start,cljs.core.map.call(null,reagent.impl.util.capitalize,parts));
}
}
});

/**
* @constructor
*/
reagent.impl.util.partial_ifn = (function (f,args,p){
this.f = f;
this.args = args;
this.p = p;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 6291457;
})
reagent.impl.util.partial_ifn.cljs$lang$type = true;
reagent.impl.util.partial_ifn.cljs$lang$ctorStr = "reagent.impl.util/partial-ifn";
reagent.impl.util.partial_ifn.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"reagent.impl.util/partial-ifn");
});
reagent.impl.util.partial_ifn.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.hash.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.f,self__.args], null));
});
reagent.impl.util.partial_ifn.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){var self__ = this;
var ___$1 = this;return (cljs.core._EQ_.call(null,self__.f,other.f)) && (cljs.core._EQ_.call(null,self__.args,other.args));
});
reagent.impl.util.partial_ifn.prototype.call = (function() { 
var G__29088__delegate = function (self__,a){var self____$1 = this;var _ = self____$1;var or__3640__auto___29089 = self__.p;if(cljs.core.truth_(or__3640__auto___29089))
{} else
{self__.p = cljs.core.apply.call(null,cljs.core.partial,self__.f,self__.args);
}
return cljs.core.apply.call(null,self__.p,a);
};
var G__29088 = function (self__,var_args){
var self__ = this;
var a = null;if (arguments.length > 1) {
  a = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__29088__delegate.call(this,self__,a);};
G__29088.cljs$lang$maxFixedArity = 1;
G__29088.cljs$lang$applyTo = (function (arglist__29090){
var self__ = cljs.core.first(arglist__29090);
var a = cljs.core.rest(arglist__29090);
return G__29088__delegate(self__,a);
});
G__29088.cljs$core$IFn$_invoke$arity$variadic = G__29088__delegate;
return G__29088;
})()
;
reagent.impl.util.partial_ifn.prototype.apply = (function (self__,args29087){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args29087)));
});
reagent.impl.util.partial_ifn.prototype.cljs$core$IFn$_invoke$arity$2 = (function() { 
var G__29091__delegate = function (a){var _ = this;var or__3640__auto___29092 = self__.p;if(cljs.core.truth_(or__3640__auto___29092))
{} else
{self__.p = cljs.core.apply.call(null,cljs.core.partial,self__.f,self__.args);
}
return cljs.core.apply.call(null,self__.p,a);
};
var G__29091 = function (var_args){
var self__ = this;
var a = null;if (arguments.length > 0) {
  a = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__29091__delegate.call(this,a);};
G__29091.cljs$lang$maxFixedArity = 0;
G__29091.cljs$lang$applyTo = (function (arglist__29093){
var a = cljs.core.seq(arglist__29093);
return G__29091__delegate(a);
});
G__29091.cljs$core$IFn$_invoke$arity$variadic = G__29091__delegate;
return G__29091;
})()
;
reagent.impl.util.__GT_partial_ifn = (function __GT_partial_ifn(f,args,p){return (new reagent.impl.util.partial_ifn(f,args,p));
});
reagent.impl.util.clj_ifn_QMARK_ = (function clj_ifn_QMARK_(x){var or__3640__auto__ = cljs.core.ifn_QMARK_.call(null,x);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var G__29097 = x;if(G__29097)
{var bit__4304__auto__ = (G__29097.cljs$lang$protocol_mask$partition1$ & (256));if((bit__4304__auto__) || (G__29097.cljs$core$IMultiFn$))
{return true;
} else
{if((!G__29097.cljs$lang$protocol_mask$partition1$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IMultiFn,G__29097);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IMultiFn,G__29097);
}
}
});
reagent.impl.util.merge_class = (function merge_class(p1,p2){var class$ = (function (){var temp__4388__auto__ = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(p1);if(cljs.core.truth_(temp__4388__auto__))
{var c1 = temp__4388__auto__;var temp__4388__auto____$1 = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(p2);if(cljs.core.truth_(temp__4388__auto____$1))
{var c2 = temp__4388__auto____$1;return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(c1)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(c2));
} else
{return null;
}
} else
{return null;
}
})();if((class$ == null))
{return p2;
} else
{return cljs.core.assoc.call(null,p2,new cljs.core.Keyword(null,"class","class",-2030961996),class$);
}
});
reagent.impl.util.merge_style = (function merge_style(p1,p2){var style = (function (){var temp__4388__auto__ = new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(p1);if(cljs.core.truth_(temp__4388__auto__))
{var s1 = temp__4388__auto__;var temp__4388__auto____$1 = new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(p2);if(cljs.core.truth_(temp__4388__auto____$1))
{var s2 = temp__4388__auto____$1;return cljs.core.merge.call(null,s1,s2);
} else
{return null;
}
} else
{return null;
}
})();if((style == null))
{return p2;
} else
{return cljs.core.assoc.call(null,p2,new cljs.core.Keyword(null,"style","style",-496642736),style);
}
});
reagent.impl.util.merge_props = (function merge_props(p1,p2){if((p1 == null))
{return p2;
} else
{if(cljs.core.map_QMARK_.call(null,p1))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"p1","p1",703771573,null)))))));
}
return reagent.impl.util.merge_style.call(null,p1,reagent.impl.util.merge_class.call(null,p1,cljs.core.merge.call(null,p1,p2)));
}
});
reagent.impl.util.doc_node_type = (9);
reagent.impl.util.react_id_name = "data-reactid";
reagent.impl.util.get_react_node = (function get_react_node(cont){if((cont == null))
{return null;
} else
{if((reagent.impl.util.doc_node_type === (cont["nodeType"])))
{return (cont["documentElement"]);
} else
{return (cont["firstChild"]);
}
}
});
reagent.impl.util.get_root_id = (function get_root_id(cont){var G__29099 = reagent.impl.util.get_react_node.call(null,cont);var G__29099__$1 = (((G__29099 == null))?null:(G__29099["getAttribute"])(reagent.impl.util.react_id_name));return G__29099__$1;
});
reagent.impl.util.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
reagent.impl.util.re_render_component = (function re_render_component(comp,container){try{return (React["renderComponent"])(comp.call(null),container);
}catch (e29102){if((e29102 instanceof Object))
{var e = e29102;try{(React["unmountComponentAtNode"])(container);
}catch (e29103){if((e29103 instanceof Object))
{var e_29104__$1 = e29103;if(typeof console !== 'undefined')
{console.log(e_29104__$1);
} else
{}
} else
{throw e29103;

}
}var temp__4388__auto___29105 = reagent.impl.util.get_react_node.call(null,container);if(cljs.core.truth_(temp__4388__auto___29105))
{var n_29106 = temp__4388__auto___29105;(n_29106["removeAttribute"])(reagent.impl.util.react_id_name);
(n_29106["innerHTML"] = "");
} else
{}
throw e;
} else
{throw e29102;

}
}});
reagent.impl.util.render_component = (function render_component(comp,container,callback){return (React["renderComponent"])(comp.call(null),container,(function (){var id_29107 = reagent.impl.util.get_root_id.call(null,container);if((id_29107 == null))
{} else
{cljs.core.swap_BANG_.call(null,reagent.impl.util.roots,cljs.core.assoc,id_29107,((function (id_29107){
return (function (){return reagent.impl.util.re_render_component.call(null,comp,container);
});})(id_29107))
);
}
if((callback == null))
{return null;
} else
{return callback.call(null);
}
}));
});
reagent.impl.util.unmount_component_at_node = (function unmount_component_at_node(container){var id_29108 = reagent.impl.util.get_root_id.call(null,container);if((id_29108 == null))
{} else
{cljs.core.swap_BANG_.call(null,reagent.impl.util.roots,cljs.core.dissoc,id_29108);
}
return (React["unmountComponentAtNode"])(container);
});
reagent.impl.util.force_update_all = (function force_update_all(){var _STAR_always_update_STAR_29114_29119 = reagent.impl.util._STAR_always_update_STAR_;try{reagent.impl.util._STAR_always_update_STAR_ = true;
var seq__29115_29120 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.impl.util.roots)));var chunk__29116_29121 = null;var count__29117_29122 = (0);var i__29118_29123 = (0);while(true){
if((i__29118_29123 < count__29117_29122))
{var f_29124 = cljs.core._nth.call(null,chunk__29116_29121,i__29118_29123);f_29124.call(null);
{
var G__29125 = seq__29115_29120;
var G__29126 = chunk__29116_29121;
var G__29127 = count__29117_29122;
var G__29128 = (i__29118_29123 + (1));
seq__29115_29120 = G__29125;
chunk__29116_29121 = G__29126;
count__29117_29122 = G__29127;
i__29118_29123 = G__29128;
continue;
}
} else
{var temp__4388__auto___29129 = cljs.core.seq.call(null,seq__29115_29120);if(temp__4388__auto___29129)
{var seq__29115_29130__$1 = temp__4388__auto___29129;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29115_29130__$1))
{var c__4410__auto___29131 = cljs.core.chunk_first.call(null,seq__29115_29130__$1);{
var G__29132 = cljs.core.chunk_rest.call(null,seq__29115_29130__$1);
var G__29133 = c__4410__auto___29131;
var G__29134 = cljs.core.count.call(null,c__4410__auto___29131);
var G__29135 = (0);
seq__29115_29120 = G__29132;
chunk__29116_29121 = G__29133;
count__29117_29122 = G__29134;
i__29118_29123 = G__29135;
continue;
}
} else
{var f_29136 = cljs.core.first.call(null,seq__29115_29130__$1);f_29136.call(null);
{
var G__29137 = cljs.core.next.call(null,seq__29115_29130__$1);
var G__29138 = null;
var G__29139 = (0);
var G__29140 = (0);
seq__29115_29120 = G__29137;
chunk__29116_29121 = G__29138;
count__29117_29122 = G__29139;
i__29118_29123 = G__29140;
continue;
}
}
} else
{}
}
break;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_29114_29119;
}return "Updated";
});
reagent.impl.util._not_found = (function (){var obj29142 = {};return obj29142;
})();
reagent.impl.util.identical_ish_QMARK_ = (function identical_ish_QMARK_(x,y){return (cljs.core.keyword_identical_QMARK_.call(null,x,y)) || ((((x instanceof cljs.core.Symbol)) || ((cljs.core.type.call(null,x) === reagent.impl.util.partial_ifn))) && (cljs.core._EQ_.call(null,x,y)));
});
reagent.impl.util.shallow_equal_maps = (function shallow_equal_maps(x,y){var or__3640__auto__ = (x === y);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var and__3628__auto__ = cljs.core.map_QMARK_.call(null,x);if(and__3628__auto__)
{var and__3628__auto____$1 = cljs.core.map_QMARK_.call(null,y);if(and__3628__auto____$1)
{var and__3628__auto____$2 = (cljs.core.count.call(null,x) === cljs.core.count.call(null,y));if(and__3628__auto____$2)
{return cljs.core.reduce_kv.call(null,((function (and__3628__auto____$2,and__3628__auto____$1,and__3628__auto__,or__3640__auto__){
return (function (res,k,v){var yv = cljs.core.get.call(null,y,k,reagent.impl.util._not_found);if(cljs.core.truth_((function (){var or__3640__auto____$1 = (v === yv);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{var or__3640__auto____$2 = reagent.impl.util.identical_ish_QMARK_.call(null,v,yv);if(or__3640__auto____$2)
{return or__3640__auto____$2;
} else
{var and__3628__auto____$3 = cljs.core.keyword_identical_QMARK_.call(null,k,new cljs.core.Keyword(null,"style","style",-496642736));if(and__3628__auto____$3)
{return shallow_equal_maps.call(null,v,yv);
} else
{return and__3628__auto____$3;
}
}
}
})()))
{return res;
} else
{return cljs.core.reduced.call(null,false);
}
});})(and__3628__auto____$2,and__3628__auto____$1,and__3628__auto__,or__3640__auto__))
,true,x);
} else
{return and__3628__auto____$2;
}
} else
{return and__3628__auto____$1;
}
} else
{return and__3628__auto__;
}
}
});
reagent.impl.util.equal_args = (function equal_args(v1,v2){if(cljs.core.vector_QMARK_.call(null,v1))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Symbol(null,"v1","v1",-2141311508,null)))))));
}
if(cljs.core.vector_QMARK_.call(null,v2))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Symbol(null,"v2","v2",1875554983,null)))))));
}
var or__3640__auto__ = (v1 === v2);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var and__3628__auto__ = (cljs.core.count.call(null,v1) === cljs.core.count.call(null,v2));if(and__3628__auto__)
{return cljs.core.reduce_kv.call(null,((function (and__3628__auto__,or__3640__auto__){
return (function (res,k,v){var v_SINGLEQUOTE_ = cljs.core.nth.call(null,v2,k);if(cljs.core.truth_((function (){var or__3640__auto____$1 = (v === v_SINGLEQUOTE_);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{var or__3640__auto____$2 = reagent.impl.util.identical_ish_QMARK_.call(null,v,v_SINGLEQUOTE_);if(or__3640__auto____$2)
{return or__3640__auto____$2;
} else
{var and__3628__auto____$1 = cljs.core.map_QMARK_.call(null,v);if(and__3628__auto____$1)
{return reagent.impl.util.shallow_equal_maps.call(null,v,v_SINGLEQUOTE_);
} else
{return and__3628__auto____$1;
}
}
}
})()))
{return res;
} else
{return cljs.core.reduced.call(null,false);
}
});})(and__3628__auto__,or__3640__auto__))
,true,v1);
} else
{return and__3628__auto__;
}
}
});

//# sourceMappingURL=util.js.map