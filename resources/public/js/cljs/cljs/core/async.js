// Compiled by ClojureScript 0.0-2371
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t180541 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t180541 = (function (f,fn_handler,meta180542){
this.f = f;
this.fn_handler = fn_handler;
this.meta180542 = meta180542;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t180541.cljs$lang$type = true;
cljs.core.async.t180541.cljs$lang$ctorStr = "cljs.core.async/t180541";
cljs.core.async.t180541.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t180541");
});
cljs.core.async.t180541.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t180541.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t180541.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t180541.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_180543){var self__ = this;
var _180543__$1 = this;return self__.meta180542;
});
cljs.core.async.t180541.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_180543,meta180542__$1){var self__ = this;
var _180543__$1 = this;return (new cljs.core.async.t180541(self__.f,self__.fn_handler,meta180542__$1));
});
cljs.core.async.__GT_t180541 = (function __GT_t180541(f__$1,fn_handler__$1,meta180542){return (new cljs.core.async.t180541(f__$1,fn_handler__$1,meta180542));
});
}
return (new cljs.core.async.t180541(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__180545 = buff;if(G__180545)
{var bit__4304__auto__ = null;if(cljs.core.truth_((function (){var or__3640__auto__ = bit__4304__auto__;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return G__180545.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__180545.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__180545);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__180545);
}
});
/**
* Creates a channel with an optional buffer, an optional transducer (like (map f),
* (filter p) etc or a composition thereof), and an optional exception handler.
* If buf-or-n is a number, will create and use a fixed buffer of that size. If a
* transducer is supplied a buffer must be specified. ex-handler must be a
* fn of one argument - if an exception occurs during transformation it will be called
* with the thrown value as an argument, and any non-nil return value will be placed
* in the channel.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){return chan.call(null,buf_or_n,null,null);
});
var chan__2 = (function (buf_or_n,xform){return chan.call(null,buf_or_n,xform,null);
});
var chan__3 = (function (buf_or_n,xform,ex_handler){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);if(cljs.core.truth_(xform))
{if(cljs.core.truth_(buf_or_n__$1))
{} else
{throw (new Error(("Assert failed: buffer must be supplied when transducer is\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null))))));
}
} else
{}
return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});
chan = function(buf_or_n,xform,ex_handler){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
case 2:
return chan__2.call(this,buf_or_n,xform);
case 3:
return chan__3.call(this,buf_or_n,xform,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
chan.cljs$core$IFn$_invoke$arity$2 = chan__2;
chan.cljs$core$IFn$_invoke$arity$3 = chan__3;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){throw (new Error("<! used not in (go ...) block"));
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_180546 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_180546);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_180546,ret){
return (function (){return fn1.call(null,val_180546);
});})(val_180546,ret))
);
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(_){return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){throw (new Error(">! used not in (go ...) block"));
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){var temp__4386__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);if(cljs.core.truth_(temp__4386__auto__))
{var ret = temp__4386__auto__;return cljs.core.deref.call(null,ret);
} else
{return true;
}
});
var put_BANG___3 = (function (port,val,fn1){return put_BANG_.call(null,port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){var temp__4386__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(temp__4386__auto__))
{var retb = temp__4386__auto__;var ret = cljs.core.deref.call(null,retb);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,ret);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4386__auto__){
return (function (){return fn1.call(null,ret);
});})(ret,retb,temp__4386__auto__))
);
}
return ret;
} else
{return true;
}
});
put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn1);
case 4:
return put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4510__auto___180547 = n;var x_180548 = (0);while(true){
if((x_180548 < n__4510__auto___180547))
{(a[x_180548] = (0));
{
var G__180549 = (x_180548 + (1));
x_180548 = G__180549;
continue;
}
} else
{}
break;
}
var i = (1);while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__180550 = (i + (1));
i = G__180550;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t180554 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t180554 = (function (flag,alt_flag,meta180555){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta180555 = meta180555;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t180554.cljs$lang$type = true;
cljs.core.async.t180554.cljs$lang$ctorStr = "cljs.core.async/t180554";
cljs.core.async.t180554.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t180554");
});})(flag))
;
cljs.core.async.t180554.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t180554.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t180554.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t180554.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_180556){var self__ = this;
var _180556__$1 = this;return self__.meta180555;
});})(flag))
;
cljs.core.async.t180554.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_180556,meta180555__$1){var self__ = this;
var _180556__$1 = this;return (new cljs.core.async.t180554(self__.flag,self__.alt_flag,meta180555__$1));
});})(flag))
;
cljs.core.async.__GT_t180554 = ((function (flag){
return (function __GT_t180554(flag__$1,alt_flag__$1,meta180555){return (new cljs.core.async.t180554(flag__$1,alt_flag__$1,meta180555));
});})(flag))
;
}
return (new cljs.core.async.t180554(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t180560 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t180560 = (function (cb,flag,alt_handler,meta180561){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta180561 = meta180561;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t180560.cljs$lang$type = true;
cljs.core.async.t180560.cljs$lang$ctorStr = "cljs.core.async/t180560";
cljs.core.async.t180560.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t180560");
});
cljs.core.async.t180560.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t180560.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t180560.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t180560.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_180562){var self__ = this;
var _180562__$1 = this;return self__.meta180561;
});
cljs.core.async.t180560.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_180562,meta180561__$1){var self__ = this;
var _180562__$1 = this;return (new cljs.core.async.t180560(self__.cb,self__.flag,self__.alt_handler,meta180561__$1));
});
cljs.core.async.__GT_t180560 = (function __GT_t180560(cb__$1,flag__$1,alt_handler__$1,meta180561){return (new cljs.core.async.t180560(cb__$1,flag__$1,alt_handler__$1,meta180561));
});
}
return (new cljs.core.async.t180560(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__180563_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__180563_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__180564_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__180564_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3640__auto__ = wport;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__180565 = (i + (1));
i = G__180565;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3640__auto__ = ret;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328)))
{var temp__4388__auto__ = (function (){var and__3628__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3628__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3628__auto__;
}
})();if(cljs.core.truth_(temp__4388__auto__))
{var got = temp__4388__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints,
* which can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and a
* boolean (true unless already closed, as per put!) for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__180566){var map__180568 = p__180566;var map__180568__$1 = ((cljs.core.seq_QMARK_.call(null,map__180568))?cljs.core.apply.call(null,cljs.core.hash_map,map__180568):map__180568);var opts = map__180568__$1;throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__180566 = null;if (arguments.length > 1) {
  p__180566 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__180566);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__180569){
var ports = cljs.core.first(arglist__180569);
var p__180566 = cljs.core.rest(arglist__180569);
return alts_BANG___delegate(ports,p__180566);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__14669__auto___180664 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14669__auto___180664){
return (function (){var f__14670__auto__ = (function (){var switch__14613__auto__ = ((function (c__14669__auto___180664){
return (function (state_180640){var state_val_180641 = (state_180640[(1)]);if((state_val_180641 === (7)))
{var inst_180636 = (state_180640[(2)]);var state_180640__$1 = state_180640;var statearr_180642_180665 = state_180640__$1;(statearr_180642_180665[(2)] = inst_180636);
(statearr_180642_180665[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_180641 === (1)))
{var state_180640__$1 = state_180640;var statearr_180643_180666 = state_180640__$1;(statearr_180643_180666[(2)] = null);
(statearr_180643_180666[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_180641 === (4)))
{var inst_180619 = (state_180640[(7)]);var inst_180619__$1 = (state_180640[(2)]);var inst_180620 = (inst_180619__$1 == null);var state_180640__$1 = (function (){var statearr_180644 = state_180640;(statearr_180644[(7)] = inst_180619__$1);
return statearr_180644;
})();if(cljs.core.truth_(inst_180620))
{var statearr_180645_180667 = state_180640__$1;(statearr_180645_180667[(1)] = (5));
} else
{var statearr_180646_180668 = state_180640__$1;(statearr_180646_180668[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_180641 === (13)))
{var state_180640__$1 = state_180640;var statearr_180647_180669 = state_180640__$1;(statearr_180647_180669[(2)] = null);
(statearr_180647_180669[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_180641 === (6)))
{var inst_180619 = (state_180640[(7)]);var state_180640__$1 = state_180640;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_180640__$1,(11),to,inst_180619);
} else
{if((state_val_180641 === (3)))
{var inst_180638 = (state_180640[(2)]);var state_180640__$1 = state_180640;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_180640__$1,inst_180638);
} else
{if((state_val_180641 === (12)))
{var state_180640__$1 = state_180640;var statearr_180648_180670 = state_180640__$1;(statearr_180648_180670[(2)] = null);
(statearr_180648_180670[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_180641 === (2)))
{var state_180640__$1 = state_180640;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_180640__$1,(4),from);
} else
{if((state_val_180641 === (11)))
{var inst_180629 = (state_180640[(2)]);var state_180640__$1 = state_180640;if(cljs.core.truth_(inst_180629))
{var statearr_180649_180671 = state_180640__$1;(statearr_180649_180671[(1)] = (12));
} else
{var statearr_180650_180672 = state_180640__$1;(statearr_180650_180672[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_180641 === (9)))
{var state_180640__$1 = state_180640;var statearr_180651_180673 = state_180640__$1;(statearr_180651_180673[(2)] = null);
(statearr_180651_180673[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_180641 === (5)))
{var state_180640__$1 = state_180640;if(cljs.core.truth_(close_QMARK_))
{var statearr_180652_180674 = state_180640__$1;(statearr_180652_180674[(1)] = (8));
} else
{var statearr_180653_180675 = state_180640__$1;(statearr_180653_180675[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_180641 === (14)))
{var inst_180634 = (state_180640[(2)]);var state_180640__$1 = state_180640;var statearr_180654_180676 = state_180640__$1;(statearr_180654_180676[(2)] = inst_180634);
(statearr_180654_180676[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_180641 === (10)))
{var inst_180626 = (state_180640[(2)]);var state_180640__$1 = state_180640;var statearr_180655_180677 = state_180640__$1;(statearr_180655_180677[(2)] = inst_180626);
(statearr_180655_180677[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_180641 === (8)))
{var inst_180623 = cljs.core.async.close_BANG_.call(null,to);var state_180640__$1 = state_180640;var statearr_180656_180678 = state_180640__$1;(statearr_180656_180678[(2)] = inst_180623);
(statearr_180656_180678[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__14669__auto___180664))
;return ((function (switch__14613__auto__,c__14669__auto___180664){
return (function() {
var state_machine__14614__auto__ = null;
var state_machine__14614__auto____0 = (function (){var statearr_180660 = [null,null,null,null,null,null,null,null];(statearr_180660[(0)] = state_machine__14614__auto__);
(statearr_180660[(1)] = (1));
return statearr_180660;
});
var state_machine__14614__auto____1 = (function (state_180640){while(true){
var ret_value__14615__auto__ = (function (){try{while(true){
var result__14616__auto__ = switch__14613__auto__.call(null,state_180640);if(cljs.core.keyword_identical_QMARK_.call(null,result__14616__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__14616__auto__;
}
break;
}
}catch (e180661){if((e180661 instanceof Object))
{var ex__14617__auto__ = e180661;var statearr_180662_180679 = state_180640;(statearr_180662_180679[(5)] = ex__14617__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_180640);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e180661;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__180680 = state_180640;
state_180640 = G__180680;
continue;
}
} else
{return ret_value__14615__auto__;
}
break;
}
});
state_machine__14614__auto__ = function(state_180640){
switch(arguments.length){
case 0:
return state_machine__14614__auto____0.call(this);
case 1:
return state_machine__14614__auto____1.call(this,state_180640);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14614__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14614__auto____0;
state_machine__14614__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14614__auto____1;
return state_machine__14614__auto__;
})()
;})(switch__14613__auto__,c__14669__auto___180664))
})();var state__14671__auto__ = (function (){var statearr_180663 = f__14670__auto__.call(null);(statearr_180663[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14669__auto___180664);
return statearr_180663;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14671__auto__);
});})(c__14669__auto___180664))
);
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
cljs.core.async.pipeline_STAR_ = (function pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){if((n > (0)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null)))))));
}
var jobs = cljs.core.async.chan.call(null,n);var results = cljs.core.async.chan.call(null,n);var process = ((function (jobs,results){
return (function (p__180864){var vec__180865 = p__180864;var v = cljs.core.nth.call(null,vec__180865,(0),null);var p = cljs.core.nth.call(null,vec__180865,(1),null);var job = vec__180865;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);var c__14669__auto___181047 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14669__auto___181047,res,vec__180865,v,p,job,jobs,results){
return (function (){var f__14670__auto__ = (function (){var switch__14613__auto__ = ((function (c__14669__auto___181047,res,vec__180865,v,p,job,jobs,results){
return (function (state_180870){var state_val_180871 = (state_180870[(1)]);if((state_val_180871 === (2)))
{var inst_180867 = (state_180870[(2)]);var inst_180868 = cljs.core.async.close_BANG_.call(null,res);var state_180870__$1 = (function (){var statearr_180872 = state_180870;(statearr_180872[(7)] = inst_180867);
return statearr_180872;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_180870__$1,inst_180868);
} else
{if((state_val_180871 === (1)))
{var state_180870__$1 = state_180870;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_180870__$1,(2),res,v);
} else
{return null;
}
}
});})(c__14669__auto___181047,res,vec__180865,v,p,job,jobs,results))
;return ((function (switch__14613__auto__,c__14669__auto___181047,res,vec__180865,v,p,job,jobs,results){
return (function() {
var state_machine__14614__auto__ = null;
var state_machine__14614__auto____0 = (function (){var statearr_180876 = [null,null,null,null,null,null,null,null];(statearr_180876[(0)] = state_machine__14614__auto__);
(statearr_180876[(1)] = (1));
return statearr_180876;
});
var state_machine__14614__auto____1 = (function (state_180870){while(true){
var ret_value__14615__auto__ = (function (){try{while(true){
var result__14616__auto__ = switch__14613__auto__.call(null,state_180870);if(cljs.core.keyword_identical_QMARK_.call(null,result__14616__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__14616__auto__;
}
break;
}
}catch (e180877){if((e180877 instanceof Object))
{var ex__14617__auto__ = e180877;var statearr_180878_181048 = state_180870;(statearr_180878_181048[(5)] = ex__14617__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_180870);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e180877;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__181049 = state_180870;
state_180870 = G__181049;
continue;
}
} else
{return ret_value__14615__auto__;
}
break;
}
});
state_machine__14614__auto__ = function(state_180870){
switch(arguments.length){
case 0:
return state_machine__14614__auto____0.call(this);
case 1:
return state_machine__14614__auto____1.call(this,state_180870);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14614__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14614__auto____0;
state_machine__14614__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14614__auto____1;
return state_machine__14614__auto__;
})()
;})(switch__14613__auto__,c__14669__auto___181047,res,vec__180865,v,p,job,jobs,results))
})();var state__14671__auto__ = (function (){var statearr_180879 = f__14670__auto__.call(null);(statearr_180879[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14669__auto___181047);
return statearr_180879;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14671__auto__);
});})(c__14669__auto___181047,res,vec__180865,v,p,job,jobs,results))
);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results))
;var async = ((function (jobs,results,process){
return (function (p__180880){var vec__180881 = p__180880;var v = cljs.core.nth.call(null,vec__180881,(0),null);var p = cljs.core.nth.call(null,vec__180881,(1),null);var job = vec__180881;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1));xf.call(null,v,res);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results,process))
;var n__4510__auto___181050 = n;var __181051 = (0);while(true){
if((__181051 < n__4510__auto___181050))
{var G__180882_181052 = (((type instanceof cljs.core.Keyword))?type.fqn:null);switch (G__180882_181052) {
case "async":
var c__14669__auto___181054 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__181051,c__14669__auto___181054,G__180882_181052,n__4510__auto___181050,jobs,results,process,async){
return (function (){var f__14670__auto__ = (function (){var switch__14613__auto__ = ((function (__181051,c__14669__auto___181054,G__180882_181052,n__4510__auto___181050,jobs,results,process,async){
return (function (state_180895){var state_val_180896 = (state_180895[(1)]);if((state_val_180896 === (7)))
{var inst_180891 = (state_180895[(2)]);var state_180895__$1 = state_180895;var statearr_180897_181055 = state_180895__$1;(statearr_180897_181055[(2)] = inst_180891);
(statearr_180897_181055[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_180896 === (6)))
{var state_180895__$1 = state_180895;var statearr_180898_181056 = state_180895__$1;(statearr_180898_181056[(2)] = null);
(statearr_180898_181056[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_180896 === (5)))
{var state_180895__$1 = state_180895;var statearr_180899_181057 = state_180895__$1;(statearr_180899_181057[(2)] = null);
(statearr_180899_181057[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_180896 === (4)))
{var inst_180885 = (state_180895[(2)]);var inst_180886 = async.call(null,inst_180885);var state_180895__$1 = state_180895;if(cljs.core.truth_(inst_180886))
{var statearr_180900_181058 = state_180895__$1;(statearr_180900_181058[(1)] = (5));
} else
{var statearr_180901_181059 = state_180895__$1;(statearr_180901_181059[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_180896 === (3)))
{var inst_180893 = (state_180895[(2)]);var state_180895__$1 = state_180895;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_180895__$1,inst_180893);
} else
{if((state_val_180896 === (2)))
{var state_180895__$1 = state_180895;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_180895__$1,(4),jobs);
} else
{if((state_val_180896 === (1)))
{var state_180895__$1 = state_180895;var statearr_180902_181060 = state_180895__$1;(statearr_180902_181060[(2)] = null);
(statearr_180902_181060[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
});})(__181051,c__14669__auto___181054,G__180882_181052,n__4510__auto___181050,jobs,results,process,async))
;return ((function (__181051,switch__14613__auto__,c__14669__auto___181054,G__180882_181052,n__4510__auto___181050,jobs,results,process,async){
return (function() {
var state_machine__14614__auto__ = null;
var state_machine__14614__auto____0 = (function (){var statearr_180906 = [null,null,null,null,null,null,null];(statearr_180906[(0)] = state_machine__14614__auto__);
(statearr_180906[(1)] = (1));
return statearr_180906;
});
var state_machine__14614__auto____1 = (function (state_180895){while(true){
var ret_value__14615__auto__ = (function (){try{while(true){
var result__14616__auto__ = switch__14613__auto__.call(null,state_180895);if(cljs.core.keyword_identical_QMARK_.call(null,result__14616__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__14616__auto__;
}
break;
}
}catch (e180907){if((e180907 instanceof Object))
{var ex__14617__auto__ = e180907;var statearr_180908_181061 = state_180895;(statearr_180908_181061[(5)] = ex__14617__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_180895);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e180907;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__181062 = state_180895;
state_180895 = G__181062;
continue;
}
} else
{return ret_value__14615__auto__;
}
break;
}
});
state_machine__14614__auto__ = function(state_180895){
switch(arguments.length){
case 0:
return state_machine__14614__auto____0.call(this);
case 1:
return state_machine__14614__auto____1.call(this,state_180895);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14614__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14614__auto____0;
state_machine__14614__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14614__auto____1;
return state_machine__14614__auto__;
})()
;})(__181051,switch__14613__auto__,c__14669__auto___181054,G__180882_181052,n__4510__auto___181050,jobs,results,process,async))
})();var state__14671__auto__ = (function (){var statearr_180909 = f__14670__auto__.call(null);(statearr_180909[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14669__auto___181054);
return statearr_180909;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14671__auto__);
});})(__181051,c__14669__auto___181054,G__180882_181052,n__4510__auto___181050,jobs,results,process,async))
);

break;
case "compute":
var c__14669__auto___181063 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__181051,c__14669__auto___181063,G__180882_181052,n__4510__auto___181050,jobs,results,process,async){
return (function (){var f__14670__auto__ = (function (){var switch__14613__auto__ = ((function (__181051,c__14669__auto___181063,G__180882_181052,n__4510__auto___181050,jobs,results,process,async){
return (function (state_180922){var state_val_180923 = (state_180922[(1)]);if((state_val_180923 === (7)))
{var inst_180918 = (state_180922[(2)]);var state_180922__$1 = state_180922;var statearr_180924_181064 = state_180922__$1;(statearr_180924_181064[(2)] = inst_180918);
(statearr_180924_181064[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_180923 === (6)))
{var state_180922__$1 = state_180922;var statearr_180925_181065 = state_180922__$1;(statearr_180925_181065[(2)] = null);
(statearr_180925_181065[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_180923 === (5)))
{var state_180922__$1 = state_180922;var statearr_180926_181066 = state_180922__$1;(statearr_180926_181066[(2)] = null);
(statearr_180926_181066[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_180923 === (4)))
{var inst_180912 = (state_180922[(2)]);var inst_180913 = process.call(null,inst_180912);var state_180922__$1 = state_180922;if(cljs.core.truth_(inst_180913))
{var statearr_180927_181067 = state_180922__$1;(statearr_180927_181067[(1)] = (5));
} else
{var statearr_180928_181068 = state_180922__$1;(statearr_180928_181068[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_180923 === (3)))
{var inst_180920 = (state_180922[(2)]);var state_180922__$1 = state_180922;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_180922__$1,inst_180920);
} else
{if((state_val_180923 === (2)))
{var state_180922__$1 = state_180922;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_180922__$1,(4),jobs);
} else
{if((state_val_180923 === (1)))
{var state_180922__$1 = state_180922;var statearr_180929_181069 = state_180922__$1;(statearr_180929_181069[(2)] = null);
(statearr_180929_181069[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
});})(__181051,c__14669__auto___181063,G__180882_181052,n__4510__auto___181050,jobs,results,process,async))
;return ((function (__181051,switch__14613__auto__,c__14669__auto___181063,G__180882_181052,n__4510__auto___181050,jobs,results,process,async){
return (function() {
var state_machine__14614__auto__ = null;
var state_machine__14614__auto____0 = (function (){var statearr_180933 = [null,null,null,null,null,null,null];(statearr_180933[(0)] = state_machine__14614__auto__);
(statearr_180933[(1)] = (1));
return statearr_180933;
});
var state_machine__14614__auto____1 = (function (state_180922){while(true){
var ret_value__14615__auto__ = (function (){try{while(true){
var result__14616__auto__ = switch__14613__auto__.call(null,state_180922);if(cljs.core.keyword_identical_QMARK_.call(null,result__14616__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__14616__auto__;
}
break;
}
}catch (e180934){if((e180934 instanceof Object))
{var ex__14617__auto__ = e180934;var statearr_180935_181070 = state_180922;(statearr_180935_181070[(5)] = ex__14617__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_180922);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e180934;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__181071 = state_180922;
state_180922 = G__181071;
continue;
}
} else
{return ret_value__14615__auto__;
}
break;
}
});
state_machine__14614__auto__ = function(state_180922){
switch(arguments.length){
case 0:
return state_machine__14614__auto____0.call(this);
case 1:
return state_machine__14614__auto____1.call(this,state_180922);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14614__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14614__auto____0;
state_machine__14614__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14614__auto____1;
return state_machine__14614__auto__;
})()
;})(__181051,switch__14613__auto__,c__14669__auto___181063,G__180882_181052,n__4510__auto___181050,jobs,results,process,async))
})();var state__14671__auto__ = (function (){var statearr_180936 = f__14670__auto__.call(null);(statearr_180936[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14669__auto___181063);
return statearr_180936;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14671__auto__);
});})(__181051,c__14669__auto___181063,G__180882_181052,n__4510__auto___181050,jobs,results,process,async))
);

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type))));

}
{
var G__181072 = (__181051 + (1));
__181051 = G__181072;
continue;
}
} else
{}
break;
}
var c__14669__auto___181073 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14669__auto___181073,jobs,results,process,async){
return (function (){var f__14670__auto__ = (function (){var switch__14613__auto__ = ((function (c__14669__auto___181073,jobs,results,process,async){
return (function (state_180958){var state_val_180959 = (state_180958[(1)]);if((state_val_180959 === (9)))
{var inst_180951 = (state_180958[(2)]);var state_180958__$1 = (function (){var statearr_180960 = state_180958;(statearr_180960[(7)] = inst_180951);
return statearr_180960;
})();var statearr_180961_181074 = state_180958__$1;(statearr_180961_181074[(2)] = null);
(statearr_180961_181074[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_180959 === (8)))
{var inst_180944 = (state_180958[(8)]);var inst_180949 = (state_180958[(2)]);var state_180958__$1 = (function (){var statearr_180962 = state_180958;(statearr_180962[(9)] = inst_180949);
return statearr_180962;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_180958__$1,(9),results,inst_180944);
} else
{if((state_val_180959 === (7)))
{var inst_180954 = (state_180958[(2)]);var state_180958__$1 = state_180958;var statearr_180963_181075 = state_180958__$1;(statearr_180963_181075[(2)] = inst_180954);
(statearr_180963_181075[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_180959 === (6)))
{var inst_180944 = (state_180958[(8)]);var inst_180939 = (state_180958[(10)]);var inst_180944__$1 = cljs.core.async.chan.call(null,(1));var inst_180945 = cljs.core.PersistentVector.EMPTY_NODE;var inst_180946 = [inst_180939,inst_180944__$1];var inst_180947 = (new cljs.core.PersistentVector(null,2,(5),inst_180945,inst_180946,null));var state_180958__$1 = (function (){var statearr_180964 = state_180958;(statearr_180964[(8)] = inst_180944__$1);
return statearr_180964;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_180958__$1,(8),jobs,inst_180947);
} else
{if((state_val_180959 === (5)))
{var inst_180942 = cljs.core.async.close_BANG_.call(null,jobs);var state_180958__$1 = state_180958;var statearr_180965_181076 = state_180958__$1;(statearr_180965_181076[(2)] = inst_180942);
(statearr_180965_181076[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_180959 === (4)))
{var inst_180939 = (state_180958[(10)]);var inst_180939__$1 = (state_180958[(2)]);var inst_180940 = (inst_180939__$1 == null);var state_180958__$1 = (function (){var statearr_180966 = state_180958;(statearr_180966[(10)] = inst_180939__$1);
return statearr_180966;
})();if(cljs.core.truth_(inst_180940))
{var statearr_180967_181077 = state_180958__$1;(statearr_180967_181077[(1)] = (5));
} else
{var statearr_180968_181078 = state_180958__$1;(statearr_180968_181078[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_180959 === (3)))
{var inst_180956 = (state_180958[(2)]);var state_180958__$1 = state_180958;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_180958__$1,inst_180956);
} else
{if((state_val_180959 === (2)))
{var state_180958__$1 = state_180958;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_180958__$1,(4),from);
} else
{if((state_val_180959 === (1)))
{var state_180958__$1 = state_180958;var statearr_180969_181079 = state_180958__$1;(statearr_180969_181079[(2)] = null);
(statearr_180969_181079[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
});})(c__14669__auto___181073,jobs,results,process,async))
;return ((function (switch__14613__auto__,c__14669__auto___181073,jobs,results,process,async){
return (function() {
var state_machine__14614__auto__ = null;
var state_machine__14614__auto____0 = (function (){var statearr_180973 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_180973[(0)] = state_machine__14614__auto__);
(statearr_180973[(1)] = (1));
return statearr_180973;
});
var state_machine__14614__auto____1 = (function (state_180958){while(true){
var ret_value__14615__auto__ = (function (){try{while(true){
var result__14616__auto__ = switch__14613__auto__.call(null,state_180958);if(cljs.core.keyword_identical_QMARK_.call(null,result__14616__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__14616__auto__;
}
break;
}
}catch (e180974){if((e180974 instanceof Object))
{var ex__14617__auto__ = e180974;var statearr_180975_181080 = state_180958;(statearr_180975_181080[(5)] = ex__14617__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_180958);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e180974;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__181081 = state_180958;
state_180958 = G__181081;
continue;
}
} else
{return ret_value__14615__auto__;
}
break;
}
});
state_machine__14614__auto__ = function(state_180958){
switch(arguments.length){
case 0:
return state_machine__14614__auto____0.call(this);
case 1:
return state_machine__14614__auto____1.call(this,state_180958);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14614__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14614__auto____0;
state_machine__14614__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14614__auto____1;
return state_machine__14614__auto__;
})()
;})(switch__14613__auto__,c__14669__auto___181073,jobs,results,process,async))
})();var state__14671__auto__ = (function (){var statearr_180976 = f__14670__auto__.call(null);(statearr_180976[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14669__auto___181073);
return statearr_180976;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14671__auto__);
});})(c__14669__auto___181073,jobs,results,process,async))
);
var c__14669__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14669__auto__,jobs,results,process,async){
return (function (){var f__14670__auto__ = (function (){var switch__14613__auto__ = ((function (c__14669__auto__,jobs,results,process,async){
return (function (state_181014){var state_val_181015 = (state_181014[(1)]);if((state_val_181015 === (7)))
{var inst_181010 = (state_181014[(2)]);var state_181014__$1 = state_181014;var statearr_181016_181082 = state_181014__$1;(statearr_181016_181082[(2)] = inst_181010);
(statearr_181016_181082[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_181015 === (20)))
{var state_181014__$1 = state_181014;var statearr_181017_181083 = state_181014__$1;(statearr_181017_181083[(2)] = null);
(statearr_181017_181083[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_181015 === (1)))
{var state_181014__$1 = state_181014;var statearr_181018_181084 = state_181014__$1;(statearr_181018_181084[(2)] = null);
(statearr_181018_181084[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_181015 === (4)))
{var inst_180979 = (state_181014[(7)]);var inst_180979__$1 = (state_181014[(2)]);var inst_180980 = (inst_180979__$1 == null);var state_181014__$1 = (function (){var statearr_181019 = state_181014;(statearr_181019[(7)] = inst_180979__$1);
return statearr_181019;
})();if(cljs.core.truth_(inst_180980))
{var statearr_181020_181085 = state_181014__$1;(statearr_181020_181085[(1)] = (5));
} else
{var statearr_181021_181086 = state_181014__$1;(statearr_181021_181086[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_181015 === (15)))
{var inst_180992 = (state_181014[(8)]);var state_181014__$1 = state_181014;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_181014__$1,(18),to,inst_180992);
} else
{if((state_val_181015 === (21)))
{var inst_181005 = (state_181014[(2)]);var state_181014__$1 = state_181014;var statearr_181022_181087 = state_181014__$1;(statearr_181022_181087[(2)] = inst_181005);
(statearr_181022_181087[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_181015 === (13)))
{var inst_181007 = (state_181014[(2)]);var state_181014__$1 = (function (){var statearr_181023 = state_181014;(statearr_181023[(9)] = inst_181007);
return statearr_181023;
})();var statearr_181024_181088 = state_181014__$1;(statearr_181024_181088[(2)] = null);
(statearr_181024_181088[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_181015 === (6)))
{var inst_180979 = (state_181014[(7)]);var state_181014__$1 = state_181014;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_181014__$1,(11),inst_180979);
} else
{if((state_val_181015 === (17)))
{var inst_181000 = (state_181014[(2)]);var state_181014__$1 = state_181014;if(cljs.core.truth_(inst_181000))
{var statearr_181025_181089 = state_181014__$1;(statearr_181025_181089[(1)] = (19));
} else
{var statearr_181026_181090 = state_181014__$1;(statearr_181026_181090[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_181015 === (3)))
{var inst_181012 = (state_181014[(2)]);var state_181014__$1 = state_181014;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_181014__$1,inst_181012);
} else
{if((state_val_181015 === (12)))
{var inst_180989 = (state_181014[(10)]);var state_181014__$1 = state_181014;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_181014__$1,(14),inst_180989);
} else
{if((state_val_181015 === (2)))
{var state_181014__$1 = state_181014;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_181014__$1,(4),results);
} else
{if((state_val_181015 === (19)))
{var state_181014__$1 = state_181014;var statearr_181027_181091 = state_181014__$1;(statearr_181027_181091[(2)] = null);
(statearr_181027_181091[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_181015 === (11)))
{var inst_180989 = (state_181014[(2)]);var state_181014__$1 = (function (){var statearr_181028 = state_181014;(statearr_181028[(10)] = inst_180989);
return statearr_181028;
})();var statearr_181029_181092 = state_181014__$1;(statearr_181029_181092[(2)] = null);
(statearr_181029_181092[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_181015 === (9)))
{var state_181014__$1 = state_181014;var statearr_181030_181093 = state_181014__$1;(statearr_181030_181093[(2)] = null);
(statearr_181030_181093[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_181015 === (5)))
{var state_181014__$1 = state_181014;if(cljs.core.truth_(close_QMARK_))
{var statearr_181031_181094 = state_181014__$1;(statearr_181031_181094[(1)] = (8));
} else
{var statearr_181032_181095 = state_181014__$1;(statearr_181032_181095[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_181015 === (14)))
{var inst_180994 = (state_181014[(11)]);var inst_180992 = (state_181014[(8)]);var inst_180992__$1 = (state_181014[(2)]);var inst_180993 = (inst_180992__$1 == null);var inst_180994__$1 = cljs.core.not.call(null,inst_180993);var state_181014__$1 = (function (){var statearr_181033 = state_181014;(statearr_181033[(11)] = inst_180994__$1);
(statearr_181033[(8)] = inst_180992__$1);
return statearr_181033;
})();if(inst_180994__$1)
{var statearr_181034_181096 = state_181014__$1;(statearr_181034_181096[(1)] = (15));
} else
{var statearr_181035_181097 = state_181014__$1;(statearr_181035_181097[(1)] = (16));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_181015 === (16)))
{var inst_180994 = (state_181014[(11)]);var state_181014__$1 = state_181014;var statearr_181036_181098 = state_181014__$1;(statearr_181036_181098[(2)] = inst_180994);
(statearr_181036_181098[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_181015 === (10)))
{var inst_180986 = (state_181014[(2)]);var state_181014__$1 = state_181014;var statearr_181037_181099 = state_181014__$1;(statearr_181037_181099[(2)] = inst_180986);
(statearr_181037_181099[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_181015 === (18)))
{var inst_180997 = (state_181014[(2)]);var state_181014__$1 = state_181014;var statearr_181038_181100 = state_181014__$1;(statearr_181038_181100[(2)] = inst_180997);
(statearr_181038_181100[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_181015 === (8)))
{var inst_180983 = cljs.core.async.close_BANG_.call(null,to);var state_181014__$1 = state_181014;var statearr_181039_181101 = state_181014__$1;(statearr_181039_181101[(2)] = inst_180983);
(statearr_181039_181101[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__14669__auto__,jobs,results,process,async))
;return ((function (switch__14613__auto__,c__14669__auto__,jobs,results,process,async){
return (function() {
var state_machine__14614__auto__ = null;
var state_machine__14614__auto____0 = (function (){var statearr_181043 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_181043[(0)] = state_machine__14614__auto__);
(statearr_181043[(1)] = (1));
return statearr_181043;
});
var state_machine__14614__auto____1 = (function (state_181014){while(true){
var ret_value__14615__auto__ = (function (){try{while(true){
var result__14616__auto__ = switch__14613__auto__.call(null,state_181014);if(cljs.core.keyword_identical_QMARK_.call(null,result__14616__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__14616__auto__;
}
break;
}
}catch (e181044){if((e181044 instanceof Object))
{var ex__14617__auto__ = e181044;var statearr_181045_181102 = state_181014;(statearr_181045_181102[(5)] = ex__14617__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_181014);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e181044;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__181103 = state_181014;
state_181014 = G__181103;
continue;
}
} else
{return ret_value__14615__auto__;
}
break;
}
});
state_machine__14614__auto__ = function(state_181014){
switch(arguments.length){
case 0:
return state_machine__14614__auto____0.call(this);
case 1:
return state_machine__14614__auto____1.call(this,state_181014);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14614__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14614__auto____0;
state_machine__14614__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14614__auto____1;
return state_machine__14614__auto__;
})()
;})(switch__14613__auto__,c__14669__auto__,jobs,results,process,async))
})();var state__14671__auto__ = (function (){var statearr_181046 = f__14670__auto__.call(null);(statearr_181046[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14669__auto__);
return statearr_181046;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14671__auto__);
});})(c__14669__auto__,jobs,results,process,async))
);
return c__14669__auto__;
});
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the async function af, with parallelism n. af
* must be a function of two arguments, the first an input value and
* the second a channel on which to place the result(s). af must close!
* the channel before returning.  The presumption is that af will
* return immediately, having launched some asynchronous operation
* whose completion/callback will manipulate the result channel. Outputs
* will be returned in order relative to  the inputs. By default, the to
* channel will be closed when the from channel closes, but can be
* determined by the close?  parameter. Will stop consuming the from
* channel if the to channel closes.
*/
cljs.core.async.pipeline_async = (function() {
var pipeline_async = null;
var pipeline_async__4 = (function (n,to,af,from){return pipeline_async.call(null,n,to,af,from,true);
});
var pipeline_async__5 = (function (n,to,af,from,close_QMARK_){return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});
pipeline_async = function(n,to,af,from,close_QMARK_){
switch(arguments.length){
case 4:
return pipeline_async__4.call(this,n,to,af,from);
case 5:
return pipeline_async__5.call(this,n,to,af,from,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline_async.cljs$core$IFn$_invoke$arity$4 = pipeline_async__4;
pipeline_async.cljs$core$IFn$_invoke$arity$5 = pipeline_async__5;
return pipeline_async;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the transducer xf, with parallelism n. Because
* it is parallel, the transducer will be applied independently to each
* element, not across elements, and may produce zero or more outputs
* per input.  Outputs will be returned in order relative to the
* inputs. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes.
* 
* Note this is supplied for API compatibility with the Clojure version.
* Values of N > 1 will not result in actual concurrency in a
* single-threaded runtime.
*/
cljs.core.async.pipeline = (function() {
var pipeline = null;
var pipeline__4 = (function (n,to,xf,from){return pipeline.call(null,n,to,xf,from,true);
});
var pipeline__5 = (function (n,to,xf,from,close_QMARK_){return pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});
var pipeline__6 = (function (n,to,xf,from,close_QMARK_,ex_handler){return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});
pipeline = function(n,to,xf,from,close_QMARK_,ex_handler){
switch(arguments.length){
case 4:
return pipeline__4.call(this,n,to,xf,from);
case 5:
return pipeline__5.call(this,n,to,xf,from,close_QMARK_);
case 6:
return pipeline__6.call(this,n,to,xf,from,close_QMARK_,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline.cljs$core$IFn$_invoke$arity$4 = pipeline__4;
pipeline.cljs$core$IFn$_invoke$arity$5 = pipeline__5;
pipeline.cljs$core$IFn$_invoke$arity$6 = pipeline__6;
return pipeline;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__14669__auto___181204 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14669__auto___181204,tc,fc){
return (function (){var f__14670__auto__ = (function (){var switch__14613__auto__ = ((function (c__14669__auto___181204,tc,fc){
return (function (state_181179){var state_val_181180 = (state_181179[(1)]);if((state_val_181180 === (7)))
{var inst_181175 = (state_181179[(2)]);var state_181179__$1 = state_181179;var statearr_181181_181205 = state_181179__$1;(statearr_181181_181205[(2)] = inst_181175);
(statearr_181181_181205[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_181180 === (1)))
{var state_181179__$1 = state_181179;var statearr_181182_181206 = state_181179__$1;(statearr_181182_181206[(2)] = null);
(statearr_181182_181206[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_181180 === (4)))
{var inst_181156 = (state_181179[(7)]);var inst_181156__$1 = (state_181179[(2)]);var inst_181157 = (inst_181156__$1 == null);var state_181179__$1 = (function (){var statearr_181183 = state_181179;(statearr_181183[(7)] = inst_181156__$1);
return statearr_181183;
})();if(cljs.core.truth_(inst_181157))
{var statearr_181184_181207 = state_181179__$1;(statearr_181184_181207[(1)] = (5));
} else
{var statearr_181185_181208 = state_181179__$1;(statearr_181185_181208[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_181180 === (13)))
{var state_181179__$1 = state_181179;var statearr_181186_181209 = state_181179__$1;(statearr_181186_181209[(2)] = null);
(statearr_181186_181209[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_181180 === (6)))
{var inst_181156 = (state_181179[(7)]);var inst_181162 = p.call(null,inst_181156);var state_181179__$1 = state_181179;if(cljs.core.truth_(inst_181162))
{var statearr_181187_181210 = state_181179__$1;(statearr_181187_181210[(1)] = (9));
} else
{var statearr_181188_181211 = state_181179__$1;(statearr_181188_181211[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_181180 === (3)))
{var inst_181177 = (state_181179[(2)]);var state_181179__$1 = state_181179;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_181179__$1,inst_181177);
} else
{if((state_val_181180 === (12)))
{var state_181179__$1 = state_181179;var statearr_181189_181212 = state_181179__$1;(statearr_181189_181212[(2)] = null);
(statearr_181189_181212[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_181180 === (2)))
{var state_181179__$1 = state_181179;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_181179__$1,(4),ch);
} else
{if((state_val_181180 === (11)))
{var inst_181156 = (state_181179[(7)]);var inst_181166 = (state_181179[(2)]);var state_181179__$1 = state_181179;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_181179__$1,(8),inst_181166,inst_181156);
} else
{if((state_val_181180 === (9)))
{var state_181179__$1 = state_181179;var statearr_181190_181213 = state_181179__$1;(statearr_181190_181213[(2)] = tc);
(statearr_181190_181213[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_181180 === (5)))
{var inst_181159 = cljs.core.async.close_BANG_.call(null,tc);var inst_181160 = cljs.core.async.close_BANG_.call(null,fc);var state_181179__$1 = (function (){var statearr_181191 = state_181179;(statearr_181191[(8)] = inst_181159);
return statearr_181191;
})();var statearr_181192_181214 = state_181179__$1;(statearr_181192_181214[(2)] = inst_181160);
(statearr_181192_181214[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_181180 === (14)))
{var inst_181173 = (state_181179[(2)]);var state_181179__$1 = state_181179;var statearr_181193_181215 = state_181179__$1;(statearr_181193_181215[(2)] = inst_181173);
(statearr_181193_181215[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_181180 === (10)))
{var state_181179__$1 = state_181179;var statearr_181194_181216 = state_181179__$1;(statearr_181194_181216[(2)] = fc);
(statearr_181194_181216[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_181180 === (8)))
{var inst_181168 = (state_181179[(2)]);var state_181179__$1 = state_181179;if(cljs.core.truth_(inst_181168))
{var statearr_181195_181217 = state_181179__$1;(statearr_181195_181217[(1)] = (12));
} else
{var statearr_181196_181218 = state_181179__$1;(statearr_181196_181218[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__14669__auto___181204,tc,fc))
;return ((function (switch__14613__auto__,c__14669__auto___181204,tc,fc){
return (function() {
var state_machine__14614__auto__ = null;
var state_machine__14614__auto____0 = (function (){var statearr_181200 = [null,null,null,null,null,null,null,null,null];(statearr_181200[(0)] = state_machine__14614__auto__);
(statearr_181200[(1)] = (1));
return statearr_181200;
});
var state_machine__14614__auto____1 = (function (state_181179){while(true){
var ret_value__14615__auto__ = (function (){try{while(true){
var result__14616__auto__ = switch__14613__auto__.call(null,state_181179);if(cljs.core.keyword_identical_QMARK_.call(null,result__14616__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__14616__auto__;
}
break;
}
}catch (e181201){if((e181201 instanceof Object))
{var ex__14617__auto__ = e181201;var statearr_181202_181219 = state_181179;(statearr_181202_181219[(5)] = ex__14617__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_181179);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e181201;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__181220 = state_181179;
state_181179 = G__181220;
continue;
}
} else
{return ret_value__14615__auto__;
}
break;
}
});
state_machine__14614__auto__ = function(state_181179){
switch(arguments.length){
case 0:
return state_machine__14614__auto____0.call(this);
case 1:
return state_machine__14614__auto____1.call(this,state_181179);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14614__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14614__auto____0;
state_machine__14614__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14614__auto____1;
return state_machine__14614__auto__;
})()
;})(switch__14613__auto__,c__14669__auto___181204,tc,fc))
})();var state__14671__auto__ = (function (){var statearr_181203 = f__14670__auto__.call(null);(statearr_181203[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14669__auto___181204);
return statearr_181203;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14671__auto__);
});})(c__14669__auto___181204,tc,fc))
);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__14669__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14669__auto__){
return (function (){var f__14670__auto__ = (function (){var switch__14613__auto__ = ((function (c__14669__auto__){
return (function (state_181267){var state_val_181268 = (state_181267[(1)]);if((state_val_181268 === (7)))
{var inst_181263 = (state_181267[(2)]);var state_181267__$1 = state_181267;var statearr_181269_181285 = state_181267__$1;(statearr_181269_181285[(2)] = inst_181263);
(statearr_181269_181285[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_181268 === (6)))
{var inst_181253 = (state_181267[(7)]);var inst_181256 = (state_181267[(8)]);var inst_181260 = f.call(null,inst_181253,inst_181256);var inst_181253__$1 = inst_181260;var state_181267__$1 = (function (){var statearr_181270 = state_181267;(statearr_181270[(7)] = inst_181253__$1);
return statearr_181270;
})();var statearr_181271_181286 = state_181267__$1;(statearr_181271_181286[(2)] = null);
(statearr_181271_181286[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_181268 === (5)))
{var inst_181253 = (state_181267[(7)]);var state_181267__$1 = state_181267;var statearr_181272_181287 = state_181267__$1;(statearr_181272_181287[(2)] = inst_181253);
(statearr_181272_181287[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_181268 === (4)))
{var inst_181256 = (state_181267[(8)]);var inst_181256__$1 = (state_181267[(2)]);var inst_181257 = (inst_181256__$1 == null);var state_181267__$1 = (function (){var statearr_181273 = state_181267;(statearr_181273[(8)] = inst_181256__$1);
return statearr_181273;
})();if(cljs.core.truth_(inst_181257))
{var statearr_181274_181288 = state_181267__$1;(statearr_181274_181288[(1)] = (5));
} else
{var statearr_181275_181289 = state_181267__$1;(statearr_181275_181289[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_181268 === (3)))
{var inst_181265 = (state_181267[(2)]);var state_181267__$1 = state_181267;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_181267__$1,inst_181265);
} else
{if((state_val_181268 === (2)))
{var state_181267__$1 = state_181267;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_181267__$1,(4),ch);
} else
{if((state_val_181268 === (1)))
{var inst_181253 = init;var state_181267__$1 = (function (){var statearr_181276 = state_181267;(statearr_181276[(7)] = inst_181253);
return statearr_181276;
})();var statearr_181277_181290 = state_181267__$1;(statearr_181277_181290[(2)] = null);
(statearr_181277_181290[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
});})(c__14669__auto__))
;return ((function (switch__14613__auto__,c__14669__auto__){
return (function() {
var state_machine__14614__auto__ = null;
var state_machine__14614__auto____0 = (function (){var statearr_181281 = [null,null,null,null,null,null,null,null,null];(statearr_181281[(0)] = state_machine__14614__auto__);
(statearr_181281[(1)] = (1));
return statearr_181281;
});
var state_machine__14614__auto____1 = (function (state_181267){while(true){
var ret_value__14615__auto__ = (function (){try{while(true){
var result__14616__auto__ = switch__14613__auto__.call(null,state_181267);if(cljs.core.keyword_identical_QMARK_.call(null,result__14616__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__14616__auto__;
}
break;
}
}catch (e181282){if((e181282 instanceof Object))
{var ex__14617__auto__ = e181282;var statearr_181283_181291 = state_181267;(statearr_181283_181291[(5)] = ex__14617__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_181267);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e181282;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__181292 = state_181267;
state_181267 = G__181292;
continue;
}
} else
{return ret_value__14615__auto__;
}
break;
}
});
state_machine__14614__auto__ = function(state_181267){
switch(arguments.length){
case 0:
return state_machine__14614__auto____0.call(this);
case 1:
return state_machine__14614__auto____1.call(this,state_181267);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14614__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14614__auto____0;
state_machine__14614__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14614__auto____1;
return state_machine__14614__auto__;
})()
;})(switch__14613__auto__,c__14669__auto__))
})();var state__14671__auto__ = (function (){var statearr_181284 = f__14670__auto__.call(null);(statearr_181284[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14669__auto__);
return statearr_181284;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14671__auto__);
});})(c__14669__auto__))
);
return c__14669__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__14669__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14669__auto__){
return (function (){var f__14670__auto__ = (function (){var switch__14613__auto__ = ((function (c__14669__auto__){
return (function (state_181366){var state_val_181367 = (state_181366[(1)]);if((state_val_181367 === (7)))
{var inst_181348 = (state_181366[(2)]);var state_181366__$1 = state_181366;var statearr_181368_181391 = state_181366__$1;(statearr_181368_181391[(2)] = inst_181348);
(statearr_181368_181391[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_181367 === (1)))
{var inst_181342 = cljs.core.seq.call(null,coll);var inst_181343 = inst_181342;var state_181366__$1 = (function (){var statearr_181369 = state_181366;(statearr_181369[(7)] = inst_181343);
return statearr_181369;
})();var statearr_181370_181392 = state_181366__$1;(statearr_181370_181392[(2)] = null);
(statearr_181370_181392[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_181367 === (4)))
{var inst_181343 = (state_181366[(7)]);var inst_181346 = cljs.core.first.call(null,inst_181343);var state_181366__$1 = state_181366;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_181366__$1,(7),ch,inst_181346);
} else
{if((state_val_181367 === (13)))
{var inst_181360 = (state_181366[(2)]);var state_181366__$1 = state_181366;var statearr_181371_181393 = state_181366__$1;(statearr_181371_181393[(2)] = inst_181360);
(statearr_181371_181393[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_181367 === (6)))
{var inst_181351 = (state_181366[(2)]);var state_181366__$1 = state_181366;if(cljs.core.truth_(inst_181351))
{var statearr_181372_181394 = state_181366__$1;(statearr_181372_181394[(1)] = (8));
} else
{var statearr_181373_181395 = state_181366__$1;(statearr_181373_181395[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_181367 === (3)))
{var inst_181364 = (state_181366[(2)]);var state_181366__$1 = state_181366;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_181366__$1,inst_181364);
} else
{if((state_val_181367 === (12)))
{var state_181366__$1 = state_181366;var statearr_181374_181396 = state_181366__$1;(statearr_181374_181396[(2)] = null);
(statearr_181374_181396[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_181367 === (2)))
{var inst_181343 = (state_181366[(7)]);var state_181366__$1 = state_181366;if(cljs.core.truth_(inst_181343))
{var statearr_181375_181397 = state_181366__$1;(statearr_181375_181397[(1)] = (4));
} else
{var statearr_181376_181398 = state_181366__$1;(statearr_181376_181398[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_181367 === (11)))
{var inst_181357 = cljs.core.async.close_BANG_.call(null,ch);var state_181366__$1 = state_181366;var statearr_181377_181399 = state_181366__$1;(statearr_181377_181399[(2)] = inst_181357);
(statearr_181377_181399[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_181367 === (9)))
{var state_181366__$1 = state_181366;if(cljs.core.truth_(close_QMARK_))
{var statearr_181378_181400 = state_181366__$1;(statearr_181378_181400[(1)] = (11));
} else
{var statearr_181379_181401 = state_181366__$1;(statearr_181379_181401[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_181367 === (5)))
{var inst_181343 = (state_181366[(7)]);var state_181366__$1 = state_181366;var statearr_181380_181402 = state_181366__$1;(statearr_181380_181402[(2)] = inst_181343);
(statearr_181380_181402[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_181367 === (10)))
{var inst_181362 = (state_181366[(2)]);var state_181366__$1 = state_181366;var statearr_181381_181403 = state_181366__$1;(statearr_181381_181403[(2)] = inst_181362);
(statearr_181381_181403[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_181367 === (8)))
{var inst_181343 = (state_181366[(7)]);var inst_181353 = cljs.core.next.call(null,inst_181343);var inst_181343__$1 = inst_181353;var state_181366__$1 = (function (){var statearr_181382 = state_181366;(statearr_181382[(7)] = inst_181343__$1);
return statearr_181382;
})();var statearr_181383_181404 = state_181366__$1;(statearr_181383_181404[(2)] = null);
(statearr_181383_181404[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__14669__auto__))
;return ((function (switch__14613__auto__,c__14669__auto__){
return (function() {
var state_machine__14614__auto__ = null;
var state_machine__14614__auto____0 = (function (){var statearr_181387 = [null,null,null,null,null,null,null,null];(statearr_181387[(0)] = state_machine__14614__auto__);
(statearr_181387[(1)] = (1));
return statearr_181387;
});
var state_machine__14614__auto____1 = (function (state_181366){while(true){
var ret_value__14615__auto__ = (function (){try{while(true){
var result__14616__auto__ = switch__14613__auto__.call(null,state_181366);if(cljs.core.keyword_identical_QMARK_.call(null,result__14616__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__14616__auto__;
}
break;
}
}catch (e181388){if((e181388 instanceof Object))
{var ex__14617__auto__ = e181388;var statearr_181389_181405 = state_181366;(statearr_181389_181405[(5)] = ex__14617__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_181366);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e181388;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__181406 = state_181366;
state_181366 = G__181406;
continue;
}
} else
{return ret_value__14615__auto__;
}
break;
}
});
state_machine__14614__auto__ = function(state_181366){
switch(arguments.length){
case 0:
return state_machine__14614__auto____0.call(this);
case 1:
return state_machine__14614__auto____1.call(this,state_181366);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14614__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14614__auto____0;
state_machine__14614__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14614__auto____1;
return state_machine__14614__auto__;
})()
;})(switch__14613__auto__,c__14669__auto__))
})();var state__14671__auto__ = (function (){var statearr_181390 = f__14670__auto__.call(null);(statearr_181390[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14669__auto__);
return statearr_181390;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14671__auto__);
});})(c__14669__auto__))
);
return c__14669__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj181408 = {};return obj181408;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3628__auto__ = _;if(and__3628__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3628__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4277__auto__ = (((_ == null))?null:_);return (function (){var or__3640__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj181410 = {};return obj181410;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3628__auto__ = m;if(and__3628__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3628__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3628__auto__ = m;if(and__3628__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3628__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3628__auto__ = m;if(and__3628__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3628__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap puts to a closed channel, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t181632 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t181632 = (function (cs,ch,mult,meta181633){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta181633 = meta181633;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t181632.cljs$lang$type = true;
cljs.core.async.t181632.cljs$lang$ctorStr = "cljs.core.async/t181632";
cljs.core.async.t181632.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t181632");
});})(cs))
;
cljs.core.async.t181632.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t181632.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t181632.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t181632.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t181632.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t181632.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t181632.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_181634){var self__ = this;
var _181634__$1 = this;return self__.meta181633;
});})(cs))
;
cljs.core.async.t181632.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_181634,meta181633__$1){var self__ = this;
var _181634__$1 = this;return (new cljs.core.async.t181632(self__.cs,self__.ch,self__.mult,meta181633__$1));
});})(cs))
;
cljs.core.async.__GT_t181632 = ((function (cs){
return (function __GT_t181632(cs__$1,ch__$1,mult__$1,meta181633){return (new cljs.core.async.t181632(cs__$1,ch__$1,mult__$1,meta181633));
});})(cs))
;
}
return (new cljs.core.async.t181632(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__14669__auto___181853 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14669__auto___181853,cs,m,dchan,dctr,done){
return (function (){var f__14670__auto__ = (function (){var switch__14613__auto__ = ((function (c__14669__auto___181853,cs,m,dchan,dctr,done){
return (function (state_181765){var state_val_181766 = (state_181765[(1)]);if((state_val_181766 === (7)))
{var inst_181761 = (state_181765[(2)]);var state_181765__$1 = state_181765;var statearr_181767_181854 = state_181765__$1;(statearr_181767_181854[(2)] = inst_181761);
(statearr_181767_181854[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_181766 === (20)))
{var inst_181666 = (state_181765[(7)]);var inst_181676 = cljs.core.first.call(null,inst_181666);var inst_181677 = cljs.core.nth.call(null,inst_181676,(0),null);var inst_181678 = cljs.core.nth.call(null,inst_181676,(1),null);var state_181765__$1 = (function (){var statearr_181768 = state_181765;(statearr_181768[(8)] = inst_181677);
return statearr_181768;
})();if(cljs.core.truth_(inst_181678))
{var statearr_181769_181855 = state_181765__$1;(statearr_181769_181855[(1)] = (22));
} else
{var statearr_181770_181856 = state_181765__$1;(statearr_181770_181856[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_181766 === (27)))
{var inst_181713 = (state_181765[(9)]);var inst_181708 = (state_181765[(10)]);var inst_181706 = (state_181765[(11)]);var inst_181637 = (state_181765[(12)]);var inst_181713__$1 = cljs.core._nth.call(null,inst_181706,inst_181708);var inst_181714 = cljs.core.async.put_BANG_.call(null,inst_181713__$1,inst_181637,done);var state_181765__$1 = (function (){var statearr_181771 = state_181765;(statearr_181771[(9)] = inst_181713__$1);
return statearr_181771;
})();if(cljs.core.truth_(inst_181714))
{var statearr_181772_181857 = state_181765__$1;(statearr_181772_181857[(1)] = (30));
} else
{var statearr_181773_181858 = state_181765__$1;(statearr_181773_181858[(1)] = (31));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_181766 === (1)))
{var state_181765__$1 = state_181765;var statearr_181774_181859 = state_181765__$1;(statearr_181774_181859[(2)] = null);
(statearr_181774_181859[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_181766 === (24)))
{var inst_181666 = (state_181765[(7)]);var inst_181683 = (state_181765[(2)]);var inst_181684 = cljs.core.next.call(null,inst_181666);var inst_181646 = inst_181684;var inst_181647 = null;var inst_181648 = (0);var inst_181649 = (0);var state_181765__$1 = (function (){var statearr_181775 = state_181765;(statearr_181775[(13)] = inst_181648);
(statearr_181775[(14)] = inst_181683);
(statearr_181775[(15)] = inst_181649);
(statearr_181775[(16)] = inst_181647);
(statearr_181775[(17)] = inst_181646);
return statearr_181775;
})();var statearr_181776_181860 = state_181765__$1;(statearr_181776_181860[(2)] = null);
(statearr_181776_181860[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_181766 === (39)))
{var state_181765__$1 = state_181765;var statearr_181780_181861 = state_181765__$1;(statearr_181780_181861[(2)] = null);
(statearr_181780_181861[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_181766 === (4)))
{var inst_181637 = (state_181765[(12)]);var inst_181637__$1 = (state_181765[(2)]);var inst_181638 = (inst_181637__$1 == null);var state_181765__$1 = (function (){var statearr_181781 = state_181765;(statearr_181781[(12)] = inst_181637__$1);
return statearr_181781;
})();if(cljs.core.truth_(inst_181638))
{var statearr_181782_181862 = state_181765__$1;(statearr_181782_181862[(1)] = (5));
} else
{var statearr_181783_181863 = state_181765__$1;(statearr_181783_181863[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_181766 === (15)))
{var inst_181648 = (state_181765[(13)]);var inst_181649 = (state_181765[(15)]);var inst_181647 = (state_181765[(16)]);var inst_181646 = (state_181765[(17)]);var inst_181662 = (state_181765[(2)]);var inst_181663 = (inst_181649 + (1));var tmp181777 = inst_181648;var tmp181778 = inst_181647;var tmp181779 = inst_181646;var inst_181646__$1 = tmp181779;var inst_181647__$1 = tmp181778;var inst_181648__$1 = tmp181777;var inst_181649__$1 = inst_181663;var state_181765__$1 = (function (){var statearr_181784 = state_181765;(statearr_181784[(13)] = inst_181648__$1);
(statearr_181784[(18)] = inst_181662);
(statearr_181784[(15)] = inst_181649__$1);
(statearr_181784[(16)] = inst_181647__$1);
(statearr_181784[(17)] = inst_181646__$1);
return statearr_181784;
})();var statearr_181785_181864 = state_181765__$1;(statearr_181785_181864[(2)] = null);
(statearr_181785_181864[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_181766 === (21)))
{var inst_181687 = (state_181765[(2)]);var state_181765__$1 = state_181765;var statearr_181789_181865 = state_181765__$1;(statearr_181789_181865[(2)] = inst_181687);
(statearr_181789_181865[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_181766 === (31)))
{var inst_181713 = (state_181765[(9)]);var inst_181717 = done.call(null,null);var inst_181718 = cljs.core.async.untap_STAR_.call(null,m,inst_181713);var state_181765__$1 = (function (){var statearr_181790 = state_181765;(statearr_181790[(19)] = inst_181717);
return statearr_181790;
})();var statearr_181791_181866 = state_181765__$1;(statearr_181791_181866[(2)] = inst_181718);
(statearr_181791_181866[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_181766 === (32)))
{var inst_181705 = (state_181765[(20)]);var inst_181708 = (state_181765[(10)]);var inst_181707 = (state_181765[(21)]);var inst_181706 = (state_181765[(11)]);var inst_181720 = (state_181765[(2)]);var inst_181721 = (inst_181708 + (1));var tmp181786 = inst_181705;var tmp181787 = inst_181707;var tmp181788 = inst_181706;var inst_181705__$1 = tmp181786;var inst_181706__$1 = tmp181788;var inst_181707__$1 = tmp181787;var inst_181708__$1 = inst_181721;var state_181765__$1 = (function (){var statearr_181792 = state_181765;(statearr_181792[(22)] = inst_181720);
(statearr_181792[(20)] = inst_181705__$1);
(statearr_181792[(10)] = inst_181708__$1);
(statearr_181792[(21)] = inst_181707__$1);
(statearr_181792[(11)] = inst_181706__$1);
return statearr_181792;
})();var statearr_181793_181867 = state_181765__$1;(statearr_181793_181867[(2)] = null);
(statearr_181793_181867[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_181766 === (40)))
{var inst_181733 = (state_181765[(23)]);var inst_181737 = done.call(null,null);var inst_181738 = cljs.core.async.untap_STAR_.call(null,m,inst_181733);var state_181765__$1 = (function (){var statearr_181794 = state_181765;(statearr_181794[(24)] = inst_181737);
return statearr_181794;
})();var statearr_181795_181868 = state_181765__$1;(statearr_181795_181868[(2)] = inst_181738);
(statearr_181795_181868[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_181766 === (33)))
{var inst_181724 = (state_181765[(25)]);var inst_181726 = cljs.core.chunked_seq_QMARK_.call(null,inst_181724);var state_181765__$1 = state_181765;if(inst_181726)
{var statearr_181796_181869 = state_181765__$1;(statearr_181796_181869[(1)] = (36));
} else
{var statearr_181797_181870 = state_181765__$1;(statearr_181797_181870[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_181766 === (13)))
{var inst_181656 = (state_181765[(26)]);var inst_181659 = cljs.core.async.close_BANG_.call(null,inst_181656);var state_181765__$1 = state_181765;var statearr_181798_181871 = state_181765__$1;(statearr_181798_181871[(2)] = inst_181659);
(statearr_181798_181871[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_181766 === (22)))
{var inst_181677 = (state_181765[(8)]);var inst_181680 = cljs.core.async.close_BANG_.call(null,inst_181677);var state_181765__$1 = state_181765;var statearr_181799_181872 = state_181765__$1;(statearr_181799_181872[(2)] = inst_181680);
(statearr_181799_181872[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_181766 === (36)))
{var inst_181724 = (state_181765[(25)]);var inst_181728 = cljs.core.chunk_first.call(null,inst_181724);var inst_181729 = cljs.core.chunk_rest.call(null,inst_181724);var inst_181730 = cljs.core.count.call(null,inst_181728);var inst_181705 = inst_181729;var inst_181706 = inst_181728;var inst_181707 = inst_181730;var inst_181708 = (0);var state_181765__$1 = (function (){var statearr_181800 = state_181765;(statearr_181800[(20)] = inst_181705);
(statearr_181800[(10)] = inst_181708);
(statearr_181800[(21)] = inst_181707);
(statearr_181800[(11)] = inst_181706);
return statearr_181800;
})();var statearr_181801_181873 = state_181765__$1;(statearr_181801_181873[(2)] = null);
(statearr_181801_181873[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_181766 === (41)))
{var inst_181724 = (state_181765[(25)]);var inst_181740 = (state_181765[(2)]);var inst_181741 = cljs.core.next.call(null,inst_181724);var inst_181705 = inst_181741;var inst_181706 = null;var inst_181707 = (0);var inst_181708 = (0);var state_181765__$1 = (function (){var statearr_181802 = state_181765;(statearr_181802[(20)] = inst_181705);
(statearr_181802[(10)] = inst_181708);
(statearr_181802[(21)] = inst_181707);
(statearr_181802[(11)] = inst_181706);
(statearr_181802[(27)] = inst_181740);
return statearr_181802;
})();var statearr_181803_181874 = state_181765__$1;(statearr_181803_181874[(2)] = null);
(statearr_181803_181874[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_181766 === (43)))
{var state_181765__$1 = state_181765;var statearr_181804_181875 = state_181765__$1;(statearr_181804_181875[(2)] = null);
(statearr_181804_181875[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_181766 === (29)))
{var inst_181749 = (state_181765[(2)]);var state_181765__$1 = state_181765;var statearr_181805_181876 = state_181765__$1;(statearr_181805_181876[(2)] = inst_181749);
(statearr_181805_181876[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_181766 === (44)))
{var inst_181758 = (state_181765[(2)]);var state_181765__$1 = (function (){var statearr_181806 = state_181765;(statearr_181806[(28)] = inst_181758);
return statearr_181806;
})();var statearr_181807_181877 = state_181765__$1;(statearr_181807_181877[(2)] = null);
(statearr_181807_181877[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_181766 === (6)))
{var inst_181697 = (state_181765[(29)]);var inst_181696 = cljs.core.deref.call(null,cs);var inst_181697__$1 = cljs.core.keys.call(null,inst_181696);var inst_181698 = cljs.core.count.call(null,inst_181697__$1);var inst_181699 = cljs.core.reset_BANG_.call(null,dctr,inst_181698);var inst_181704 = cljs.core.seq.call(null,inst_181697__$1);var inst_181705 = inst_181704;var inst_181706 = null;var inst_181707 = (0);var inst_181708 = (0);var state_181765__$1 = (function (){var statearr_181808 = state_181765;(statearr_181808[(30)] = inst_181699);
(statearr_181808[(20)] = inst_181705);
(statearr_181808[(29)] = inst_181697__$1);
(statearr_181808[(10)] = inst_181708);
(statearr_181808[(21)] = inst_181707);
(statearr_181808[(11)] = inst_181706);
return statearr_181808;
})();var statearr_181809_181878 = state_181765__$1;(statearr_181809_181878[(2)] = null);
(statearr_181809_181878[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_181766 === (28)))
{var inst_181705 = (state_181765[(20)]);var inst_181724 = (state_181765[(25)]);var inst_181724__$1 = cljs.core.seq.call(null,inst_181705);var state_181765__$1 = (function (){var statearr_181810 = state_181765;(statearr_181810[(25)] = inst_181724__$1);
return statearr_181810;
})();if(inst_181724__$1)
{var statearr_181811_181879 = state_181765__$1;(statearr_181811_181879[(1)] = (33));
} else
{var statearr_181812_181880 = state_181765__$1;(statearr_181812_181880[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_181766 === (25)))
{var inst_181708 = (state_181765[(10)]);var inst_181707 = (state_181765[(21)]);var inst_181710 = (inst_181708 < inst_181707);var inst_181711 = inst_181710;var state_181765__$1 = state_181765;if(cljs.core.truth_(inst_181711))
{var statearr_181813_181881 = state_181765__$1;(statearr_181813_181881[(1)] = (27));
} else
{var statearr_181814_181882 = state_181765__$1;(statearr_181814_181882[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_181766 === (34)))
{var state_181765__$1 = state_181765;var statearr_181815_181883 = state_181765__$1;(statearr_181815_181883[(2)] = null);
(statearr_181815_181883[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_181766 === (17)))
{var state_181765__$1 = state_181765;var statearr_181816_181884 = state_181765__$1;(statearr_181816_181884[(2)] = null);
(statearr_181816_181884[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_181766 === (3)))
{var inst_181763 = (state_181765[(2)]);var state_181765__$1 = state_181765;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_181765__$1,inst_181763);
} else
{if((state_val_181766 === (12)))
{var inst_181692 = (state_181765[(2)]);var state_181765__$1 = state_181765;var statearr_181817_181885 = state_181765__$1;(statearr_181817_181885[(2)] = inst_181692);
(statearr_181817_181885[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_181766 === (2)))
{var state_181765__$1 = state_181765;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_181765__$1,(4),ch);
} else
{if((state_val_181766 === (23)))
{var state_181765__$1 = state_181765;var statearr_181818_181886 = state_181765__$1;(statearr_181818_181886[(2)] = null);
(statearr_181818_181886[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_181766 === (35)))
{var inst_181747 = (state_181765[(2)]);var state_181765__$1 = state_181765;var statearr_181819_181887 = state_181765__$1;(statearr_181819_181887[(2)] = inst_181747);
(statearr_181819_181887[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_181766 === (19)))
{var inst_181666 = (state_181765[(7)]);var inst_181670 = cljs.core.chunk_first.call(null,inst_181666);var inst_181671 = cljs.core.chunk_rest.call(null,inst_181666);var inst_181672 = cljs.core.count.call(null,inst_181670);var inst_181646 = inst_181671;var inst_181647 = inst_181670;var inst_181648 = inst_181672;var inst_181649 = (0);var state_181765__$1 = (function (){var statearr_181820 = state_181765;(statearr_181820[(13)] = inst_181648);
(statearr_181820[(15)] = inst_181649);
(statearr_181820[(16)] = inst_181647);
(statearr_181820[(17)] = inst_181646);
return statearr_181820;
})();var statearr_181821_181888 = state_181765__$1;(statearr_181821_181888[(2)] = null);
(statearr_181821_181888[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_181766 === (11)))
{var inst_181666 = (state_181765[(7)]);var inst_181646 = (state_181765[(17)]);var inst_181666__$1 = cljs.core.seq.call(null,inst_181646);var state_181765__$1 = (function (){var statearr_181822 = state_181765;(statearr_181822[(7)] = inst_181666__$1);
return statearr_181822;
})();if(inst_181666__$1)
{var statearr_181823_181889 = state_181765__$1;(statearr_181823_181889[(1)] = (16));
} else
{var statearr_181824_181890 = state_181765__$1;(statearr_181824_181890[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_181766 === (9)))
{var inst_181694 = (state_181765[(2)]);var state_181765__$1 = state_181765;var statearr_181825_181891 = state_181765__$1;(statearr_181825_181891[(2)] = inst_181694);
(statearr_181825_181891[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_181766 === (5)))
{var inst_181644 = cljs.core.deref.call(null,cs);var inst_181645 = cljs.core.seq.call(null,inst_181644);var inst_181646 = inst_181645;var inst_181647 = null;var inst_181648 = (0);var inst_181649 = (0);var state_181765__$1 = (function (){var statearr_181826 = state_181765;(statearr_181826[(13)] = inst_181648);
(statearr_181826[(15)] = inst_181649);
(statearr_181826[(16)] = inst_181647);
(statearr_181826[(17)] = inst_181646);
return statearr_181826;
})();var statearr_181827_181892 = state_181765__$1;(statearr_181827_181892[(2)] = null);
(statearr_181827_181892[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_181766 === (14)))
{var state_181765__$1 = state_181765;var statearr_181828_181893 = state_181765__$1;(statearr_181828_181893[(2)] = null);
(statearr_181828_181893[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_181766 === (45)))
{var inst_181755 = (state_181765[(2)]);var state_181765__$1 = state_181765;var statearr_181829_181894 = state_181765__$1;(statearr_181829_181894[(2)] = inst_181755);
(statearr_181829_181894[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_181766 === (26)))
{var inst_181697 = (state_181765[(29)]);var inst_181751 = (state_181765[(2)]);var inst_181752 = cljs.core.seq.call(null,inst_181697);var state_181765__$1 = (function (){var statearr_181830 = state_181765;(statearr_181830[(31)] = inst_181751);
return statearr_181830;
})();if(inst_181752)
{var statearr_181831_181895 = state_181765__$1;(statearr_181831_181895[(1)] = (42));
} else
{var statearr_181832_181896 = state_181765__$1;(statearr_181832_181896[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_181766 === (16)))
{var inst_181666 = (state_181765[(7)]);var inst_181668 = cljs.core.chunked_seq_QMARK_.call(null,inst_181666);var state_181765__$1 = state_181765;if(inst_181668)
{var statearr_181833_181897 = state_181765__$1;(statearr_181833_181897[(1)] = (19));
} else
{var statearr_181834_181898 = state_181765__$1;(statearr_181834_181898[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_181766 === (38)))
{var inst_181744 = (state_181765[(2)]);var state_181765__$1 = state_181765;var statearr_181835_181899 = state_181765__$1;(statearr_181835_181899[(2)] = inst_181744);
(statearr_181835_181899[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_181766 === (30)))
{var state_181765__$1 = state_181765;var statearr_181836_181900 = state_181765__$1;(statearr_181836_181900[(2)] = null);
(statearr_181836_181900[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_181766 === (10)))
{var inst_181649 = (state_181765[(15)]);var inst_181647 = (state_181765[(16)]);var inst_181655 = cljs.core._nth.call(null,inst_181647,inst_181649);var inst_181656 = cljs.core.nth.call(null,inst_181655,(0),null);var inst_181657 = cljs.core.nth.call(null,inst_181655,(1),null);var state_181765__$1 = (function (){var statearr_181837 = state_181765;(statearr_181837[(26)] = inst_181656);
return statearr_181837;
})();if(cljs.core.truth_(inst_181657))
{var statearr_181838_181901 = state_181765__$1;(statearr_181838_181901[(1)] = (13));
} else
{var statearr_181839_181902 = state_181765__$1;(statearr_181839_181902[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_181766 === (18)))
{var inst_181690 = (state_181765[(2)]);var state_181765__$1 = state_181765;var statearr_181840_181903 = state_181765__$1;(statearr_181840_181903[(2)] = inst_181690);
(statearr_181840_181903[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_181766 === (42)))
{var state_181765__$1 = state_181765;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_181765__$1,(45),dchan);
} else
{if((state_val_181766 === (37)))
{var inst_181733 = (state_181765[(23)]);var inst_181724 = (state_181765[(25)]);var inst_181637 = (state_181765[(12)]);var inst_181733__$1 = cljs.core.first.call(null,inst_181724);var inst_181734 = cljs.core.async.put_BANG_.call(null,inst_181733__$1,inst_181637,done);var state_181765__$1 = (function (){var statearr_181841 = state_181765;(statearr_181841[(23)] = inst_181733__$1);
return statearr_181841;
})();if(cljs.core.truth_(inst_181734))
{var statearr_181842_181904 = state_181765__$1;(statearr_181842_181904[(1)] = (39));
} else
{var statearr_181843_181905 = state_181765__$1;(statearr_181843_181905[(1)] = (40));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_181766 === (8)))
{var inst_181648 = (state_181765[(13)]);var inst_181649 = (state_181765[(15)]);var inst_181651 = (inst_181649 < inst_181648);var inst_181652 = inst_181651;var state_181765__$1 = state_181765;if(cljs.core.truth_(inst_181652))
{var statearr_181844_181906 = state_181765__$1;(statearr_181844_181906[(1)] = (10));
} else
{var statearr_181845_181907 = state_181765__$1;(statearr_181845_181907[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__14669__auto___181853,cs,m,dchan,dctr,done))
;return ((function (switch__14613__auto__,c__14669__auto___181853,cs,m,dchan,dctr,done){
return (function() {
var state_machine__14614__auto__ = null;
var state_machine__14614__auto____0 = (function (){var statearr_181849 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_181849[(0)] = state_machine__14614__auto__);
(statearr_181849[(1)] = (1));
return statearr_181849;
});
var state_machine__14614__auto____1 = (function (state_181765){while(true){
var ret_value__14615__auto__ = (function (){try{while(true){
var result__14616__auto__ = switch__14613__auto__.call(null,state_181765);if(cljs.core.keyword_identical_QMARK_.call(null,result__14616__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__14616__auto__;
}
break;
}
}catch (e181850){if((e181850 instanceof Object))
{var ex__14617__auto__ = e181850;var statearr_181851_181908 = state_181765;(statearr_181851_181908[(5)] = ex__14617__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_181765);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e181850;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__181909 = state_181765;
state_181765 = G__181909;
continue;
}
} else
{return ret_value__14615__auto__;
}
break;
}
});
state_machine__14614__auto__ = function(state_181765){
switch(arguments.length){
case 0:
return state_machine__14614__auto____0.call(this);
case 1:
return state_machine__14614__auto____1.call(this,state_181765);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14614__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14614__auto____0;
state_machine__14614__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14614__auto____1;
return state_machine__14614__auto__;
})()
;})(switch__14613__auto__,c__14669__auto___181853,cs,m,dchan,dctr,done))
})();var state__14671__auto__ = (function (){var statearr_181852 = f__14670__auto__.call(null);(statearr_181852[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14669__auto___181853);
return statearr_181852;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14671__auto__);
});})(c__14669__auto___181853,cs,m,dchan,dctr,done))
);
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj181911 = {};return obj181911;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3628__auto__ = m;if(and__3628__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3628__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3628__auto__ = m;if(and__3628__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3628__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3628__auto__ = m;if(and__3628__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3628__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3628__auto__ = m;if(and__3628__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3628__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3628__auto__ = m;if(and__3628__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3628__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* @param {...*} var_args
*/
cljs.core.async.ioc_alts_BANG_ = (function() { 
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__181912){var map__181917 = p__181912;var map__181917__$1 = ((cljs.core.seq_QMARK_.call(null,map__181917))?cljs.core.apply.call(null,cljs.core.hash_map,map__181917):map__181917);var opts = map__181917__$1;var statearr_181918_181921 = state;(statearr_181918_181921[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);
var temp__4388__auto__ = cljs.core.async.do_alts.call(null,((function (map__181917,map__181917__$1,opts){
return (function (val){var statearr_181919_181922 = state;(statearr_181919_181922[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__181917,map__181917__$1,opts))
,ports,opts);if(cljs.core.truth_(temp__4388__auto__))
{var cb = temp__4388__auto__;var statearr_181920_181923 = state;(statearr_181920_181923[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__181912 = null;if (arguments.length > 3) {
  p__181912 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__181912);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__181924){
var state = cljs.core.first(arglist__181924);
arglist__181924 = cljs.core.next(arglist__181924);
var cont_block = cljs.core.first(arglist__181924);
arglist__181924 = cljs.core.next(arglist__181924);
var ports = cljs.core.first(arglist__181924);
var p__181912 = cljs.core.rest(arglist__181924);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__181912);
});
ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = ioc_alts_BANG___delegate;
return ioc_alts_BANG_;
})()
;
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t182044 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t182044 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta182045){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta182045 = meta182045;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t182044.cljs$lang$type = true;
cljs.core.async.t182044.cljs$lang$ctorStr = "cljs.core.async/t182044";
cljs.core.async.t182044.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t182044");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t182044.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t182044.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t182044.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t182044.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t182044.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t182044.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t182044.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t182044.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t182044.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_182046){var self__ = this;
var _182046__$1 = this;return self__.meta182045;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t182044.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_182046,meta182045__$1){var self__ = this;
var _182046__$1 = this;return (new cljs.core.async.t182044(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta182045__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t182044 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t182044(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta182045){return (new cljs.core.async.t182044(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta182045));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t182044(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__14669__auto___182163 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14669__auto___182163,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__14670__auto__ = (function (){var switch__14613__auto__ = ((function (c__14669__auto___182163,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_182116){var state_val_182117 = (state_182116[(1)]);if((state_val_182117 === (7)))
{var inst_182060 = (state_182116[(7)]);var inst_182065 = cljs.core.apply.call(null,cljs.core.hash_map,inst_182060);var state_182116__$1 = state_182116;var statearr_182118_182164 = state_182116__$1;(statearr_182118_182164[(2)] = inst_182065);
(statearr_182118_182164[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_182117 === (20)))
{var inst_182075 = (state_182116[(8)]);var state_182116__$1 = state_182116;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_182116__$1,(23),out,inst_182075);
} else
{if((state_val_182117 === (1)))
{var inst_182050 = (state_182116[(9)]);var inst_182050__$1 = calc_state.call(null);var inst_182051 = cljs.core.seq_QMARK_.call(null,inst_182050__$1);var state_182116__$1 = (function (){var statearr_182119 = state_182116;(statearr_182119[(9)] = inst_182050__$1);
return statearr_182119;
})();if(inst_182051)
{var statearr_182120_182165 = state_182116__$1;(statearr_182120_182165[(1)] = (2));
} else
{var statearr_182121_182166 = state_182116__$1;(statearr_182121_182166[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_182117 === (24)))
{var inst_182068 = (state_182116[(10)]);var inst_182060 = inst_182068;var state_182116__$1 = (function (){var statearr_182122 = state_182116;(statearr_182122[(7)] = inst_182060);
return statearr_182122;
})();var statearr_182123_182167 = state_182116__$1;(statearr_182123_182167[(2)] = null);
(statearr_182123_182167[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_182117 === (4)))
{var inst_182050 = (state_182116[(9)]);var inst_182056 = (state_182116[(2)]);var inst_182057 = cljs.core.get.call(null,inst_182056,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_182058 = cljs.core.get.call(null,inst_182056,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_182059 = cljs.core.get.call(null,inst_182056,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_182060 = inst_182050;var state_182116__$1 = (function (){var statearr_182124 = state_182116;(statearr_182124[(11)] = inst_182057);
(statearr_182124[(12)] = inst_182059);
(statearr_182124[(13)] = inst_182058);
(statearr_182124[(7)] = inst_182060);
return statearr_182124;
})();var statearr_182125_182168 = state_182116__$1;(statearr_182125_182168[(2)] = null);
(statearr_182125_182168[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_182117 === (15)))
{var state_182116__$1 = state_182116;var statearr_182126_182169 = state_182116__$1;(statearr_182126_182169[(2)] = null);
(statearr_182126_182169[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_182117 === (21)))
{var inst_182068 = (state_182116[(10)]);var inst_182060 = inst_182068;var state_182116__$1 = (function (){var statearr_182127 = state_182116;(statearr_182127[(7)] = inst_182060);
return statearr_182127;
})();var statearr_182128_182170 = state_182116__$1;(statearr_182128_182170[(2)] = null);
(statearr_182128_182170[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_182117 === (13)))
{var inst_182112 = (state_182116[(2)]);var state_182116__$1 = state_182116;var statearr_182129_182171 = state_182116__$1;(statearr_182129_182171[(2)] = inst_182112);
(statearr_182129_182171[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_182117 === (22)))
{var inst_182110 = (state_182116[(2)]);var state_182116__$1 = state_182116;var statearr_182130_182172 = state_182116__$1;(statearr_182130_182172[(2)] = inst_182110);
(statearr_182130_182172[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_182117 === (6)))
{var inst_182114 = (state_182116[(2)]);var state_182116__$1 = state_182116;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_182116__$1,inst_182114);
} else
{if((state_val_182117 === (25)))
{var state_182116__$1 = state_182116;var statearr_182131_182173 = state_182116__$1;(statearr_182131_182173[(2)] = null);
(statearr_182131_182173[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_182117 === (17)))
{var inst_182090 = (state_182116[(14)]);var state_182116__$1 = state_182116;var statearr_182132_182174 = state_182116__$1;(statearr_182132_182174[(2)] = inst_182090);
(statearr_182132_182174[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_182117 === (3)))
{var inst_182050 = (state_182116[(9)]);var state_182116__$1 = state_182116;var statearr_182133_182175 = state_182116__$1;(statearr_182133_182175[(2)] = inst_182050);
(statearr_182133_182175[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_182117 === (12)))
{var inst_182071 = (state_182116[(15)]);var inst_182090 = (state_182116[(14)]);var inst_182076 = (state_182116[(16)]);var inst_182090__$1 = inst_182071.call(null,inst_182076);var state_182116__$1 = (function (){var statearr_182134 = state_182116;(statearr_182134[(14)] = inst_182090__$1);
return statearr_182134;
})();if(cljs.core.truth_(inst_182090__$1))
{var statearr_182135_182176 = state_182116__$1;(statearr_182135_182176[(1)] = (17));
} else
{var statearr_182136_182177 = state_182116__$1;(statearr_182136_182177[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_182117 === (2)))
{var inst_182050 = (state_182116[(9)]);var inst_182053 = cljs.core.apply.call(null,cljs.core.hash_map,inst_182050);var state_182116__$1 = state_182116;var statearr_182137_182178 = state_182116__$1;(statearr_182137_182178[(2)] = inst_182053);
(statearr_182137_182178[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_182117 === (23)))
{var inst_182101 = (state_182116[(2)]);var state_182116__$1 = state_182116;if(cljs.core.truth_(inst_182101))
{var statearr_182138_182179 = state_182116__$1;(statearr_182138_182179[(1)] = (24));
} else
{var statearr_182139_182180 = state_182116__$1;(statearr_182139_182180[(1)] = (25));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_182117 === (19)))
{var inst_182098 = (state_182116[(2)]);var state_182116__$1 = state_182116;if(cljs.core.truth_(inst_182098))
{var statearr_182140_182181 = state_182116__$1;(statearr_182140_182181[(1)] = (20));
} else
{var statearr_182141_182182 = state_182116__$1;(statearr_182141_182182[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_182117 === (11)))
{var inst_182075 = (state_182116[(8)]);var inst_182081 = (inst_182075 == null);var state_182116__$1 = state_182116;if(cljs.core.truth_(inst_182081))
{var statearr_182142_182183 = state_182116__$1;(statearr_182142_182183[(1)] = (14));
} else
{var statearr_182143_182184 = state_182116__$1;(statearr_182143_182184[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_182117 === (9)))
{var inst_182068 = (state_182116[(10)]);var inst_182068__$1 = (state_182116[(2)]);var inst_182069 = cljs.core.get.call(null,inst_182068__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_182070 = cljs.core.get.call(null,inst_182068__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_182071 = cljs.core.get.call(null,inst_182068__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_182116__$1 = (function (){var statearr_182144 = state_182116;(statearr_182144[(10)] = inst_182068__$1);
(statearr_182144[(15)] = inst_182071);
(statearr_182144[(17)] = inst_182070);
return statearr_182144;
})();return cljs.core.async.ioc_alts_BANG_.call(null,state_182116__$1,(10),inst_182069);
} else
{if((state_val_182117 === (5)))
{var inst_182060 = (state_182116[(7)]);var inst_182063 = cljs.core.seq_QMARK_.call(null,inst_182060);var state_182116__$1 = state_182116;if(inst_182063)
{var statearr_182145_182185 = state_182116__$1;(statearr_182145_182185[(1)] = (7));
} else
{var statearr_182146_182186 = state_182116__$1;(statearr_182146_182186[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_182117 === (14)))
{var inst_182076 = (state_182116[(16)]);var inst_182083 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_182076);var state_182116__$1 = state_182116;var statearr_182147_182187 = state_182116__$1;(statearr_182147_182187[(2)] = inst_182083);
(statearr_182147_182187[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_182117 === (26)))
{var inst_182106 = (state_182116[(2)]);var state_182116__$1 = state_182116;var statearr_182148_182188 = state_182116__$1;(statearr_182148_182188[(2)] = inst_182106);
(statearr_182148_182188[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_182117 === (16)))
{var inst_182086 = (state_182116[(2)]);var inst_182087 = calc_state.call(null);var inst_182060 = inst_182087;var state_182116__$1 = (function (){var statearr_182149 = state_182116;(statearr_182149[(18)] = inst_182086);
(statearr_182149[(7)] = inst_182060);
return statearr_182149;
})();var statearr_182150_182189 = state_182116__$1;(statearr_182150_182189[(2)] = null);
(statearr_182150_182189[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_182117 === (10)))
{var inst_182075 = (state_182116[(8)]);var inst_182076 = (state_182116[(16)]);var inst_182074 = (state_182116[(2)]);var inst_182075__$1 = cljs.core.nth.call(null,inst_182074,(0),null);var inst_182076__$1 = cljs.core.nth.call(null,inst_182074,(1),null);var inst_182077 = (inst_182075__$1 == null);var inst_182078 = cljs.core._EQ_.call(null,inst_182076__$1,change);var inst_182079 = (inst_182077) || (inst_182078);var state_182116__$1 = (function (){var statearr_182151 = state_182116;(statearr_182151[(8)] = inst_182075__$1);
(statearr_182151[(16)] = inst_182076__$1);
return statearr_182151;
})();if(cljs.core.truth_(inst_182079))
{var statearr_182152_182190 = state_182116__$1;(statearr_182152_182190[(1)] = (11));
} else
{var statearr_182153_182191 = state_182116__$1;(statearr_182153_182191[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_182117 === (18)))
{var inst_182071 = (state_182116[(15)]);var inst_182070 = (state_182116[(17)]);var inst_182076 = (state_182116[(16)]);var inst_182093 = cljs.core.empty_QMARK_.call(null,inst_182071);var inst_182094 = inst_182070.call(null,inst_182076);var inst_182095 = cljs.core.not.call(null,inst_182094);var inst_182096 = (inst_182093) && (inst_182095);var state_182116__$1 = state_182116;var statearr_182154_182192 = state_182116__$1;(statearr_182154_182192[(2)] = inst_182096);
(statearr_182154_182192[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_182117 === (8)))
{var inst_182060 = (state_182116[(7)]);var state_182116__$1 = state_182116;var statearr_182155_182193 = state_182116__$1;(statearr_182155_182193[(2)] = inst_182060);
(statearr_182155_182193[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__14669__auto___182163,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__14613__auto__,c__14669__auto___182163,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__14614__auto__ = null;
var state_machine__14614__auto____0 = (function (){var statearr_182159 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_182159[(0)] = state_machine__14614__auto__);
(statearr_182159[(1)] = (1));
return statearr_182159;
});
var state_machine__14614__auto____1 = (function (state_182116){while(true){
var ret_value__14615__auto__ = (function (){try{while(true){
var result__14616__auto__ = switch__14613__auto__.call(null,state_182116);if(cljs.core.keyword_identical_QMARK_.call(null,result__14616__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__14616__auto__;
}
break;
}
}catch (e182160){if((e182160 instanceof Object))
{var ex__14617__auto__ = e182160;var statearr_182161_182194 = state_182116;(statearr_182161_182194[(5)] = ex__14617__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_182116);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e182160;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__182195 = state_182116;
state_182116 = G__182195;
continue;
}
} else
{return ret_value__14615__auto__;
}
break;
}
});
state_machine__14614__auto__ = function(state_182116){
switch(arguments.length){
case 0:
return state_machine__14614__auto____0.call(this);
case 1:
return state_machine__14614__auto____1.call(this,state_182116);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14614__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14614__auto____0;
state_machine__14614__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14614__auto____1;
return state_machine__14614__auto__;
})()
;})(switch__14613__auto__,c__14669__auto___182163,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__14671__auto__ = (function (){var statearr_182162 = f__14670__auto__.call(null);(statearr_182162[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14669__auto___182163);
return statearr_182162;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14671__auto__);
});})(c__14669__auto___182163,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj182197 = {};return obj182197;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3628__auto__ = p;if(and__3628__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3628__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4277__auto__ = (((p == null))?null:p);return (function (){var or__3640__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3628__auto__ = p;if(and__3628__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3628__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4277__auto__ = (((p == null))?null:p);return (function (){var or__3640__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3628__auto__ = p;if(and__3628__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3628__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4277__auto__ = (((p == null))?null:p);return (function (){var or__3640__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3628__auto__ = p;if(and__3628__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3628__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4277__auto__ = (((p == null))?null:p);return (function (){var or__3640__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__3640__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3640__auto__,mults){
return (function (p1__182198_SHARP_){if(cljs.core.truth_(p1__182198_SHARP_.call(null,topic)))
{return p1__182198_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__182198_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3640__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t182321 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t182321 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta182322){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta182322 = meta182322;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t182321.cljs$lang$type = true;
cljs.core.async.t182321.cljs$lang$ctorStr = "cljs.core.async/t182321";
cljs.core.async.t182321.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t182321");
});})(mults,ensure_mult))
;
cljs.core.async.t182321.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t182321.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t182321.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4388__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4388__auto__))
{var m = temp__4388__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t182321.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t182321.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t182321.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t182321.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t182321.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_182323){var self__ = this;
var _182323__$1 = this;return self__.meta182322;
});})(mults,ensure_mult))
;
cljs.core.async.t182321.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_182323,meta182322__$1){var self__ = this;
var _182323__$1 = this;return (new cljs.core.async.t182321(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta182322__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t182321 = ((function (mults,ensure_mult){
return (function __GT_t182321(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta182322){return (new cljs.core.async.t182321(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta182322));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t182321(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__14669__auto___182443 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14669__auto___182443,mults,ensure_mult,p){
return (function (){var f__14670__auto__ = (function (){var switch__14613__auto__ = ((function (c__14669__auto___182443,mults,ensure_mult,p){
return (function (state_182395){var state_val_182396 = (state_182395[(1)]);if((state_val_182396 === (7)))
{var inst_182391 = (state_182395[(2)]);var state_182395__$1 = state_182395;var statearr_182397_182444 = state_182395__$1;(statearr_182397_182444[(2)] = inst_182391);
(statearr_182397_182444[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_182396 === (20)))
{var state_182395__$1 = state_182395;var statearr_182398_182445 = state_182395__$1;(statearr_182398_182445[(2)] = null);
(statearr_182398_182445[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_182396 === (1)))
{var state_182395__$1 = state_182395;var statearr_182399_182446 = state_182395__$1;(statearr_182399_182446[(2)] = null);
(statearr_182399_182446[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_182396 === (24)))
{var inst_182374 = (state_182395[(7)]);var inst_182383 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_182374);var state_182395__$1 = state_182395;var statearr_182400_182447 = state_182395__$1;(statearr_182400_182447[(2)] = inst_182383);
(statearr_182400_182447[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_182396 === (4)))
{var inst_182326 = (state_182395[(8)]);var inst_182326__$1 = (state_182395[(2)]);var inst_182327 = (inst_182326__$1 == null);var state_182395__$1 = (function (){var statearr_182401 = state_182395;(statearr_182401[(8)] = inst_182326__$1);
return statearr_182401;
})();if(cljs.core.truth_(inst_182327))
{var statearr_182402_182448 = state_182395__$1;(statearr_182402_182448[(1)] = (5));
} else
{var statearr_182403_182449 = state_182395__$1;(statearr_182403_182449[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_182396 === (15)))
{var inst_182368 = (state_182395[(2)]);var state_182395__$1 = state_182395;var statearr_182404_182450 = state_182395__$1;(statearr_182404_182450[(2)] = inst_182368);
(statearr_182404_182450[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_182396 === (21)))
{var inst_182388 = (state_182395[(2)]);var state_182395__$1 = (function (){var statearr_182405 = state_182395;(statearr_182405[(9)] = inst_182388);
return statearr_182405;
})();var statearr_182406_182451 = state_182395__$1;(statearr_182406_182451[(2)] = null);
(statearr_182406_182451[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_182396 === (13)))
{var inst_182350 = (state_182395[(10)]);var inst_182352 = cljs.core.chunked_seq_QMARK_.call(null,inst_182350);var state_182395__$1 = state_182395;if(inst_182352)
{var statearr_182407_182452 = state_182395__$1;(statearr_182407_182452[(1)] = (16));
} else
{var statearr_182408_182453 = state_182395__$1;(statearr_182408_182453[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_182396 === (22)))
{var inst_182380 = (state_182395[(2)]);var state_182395__$1 = state_182395;if(cljs.core.truth_(inst_182380))
{var statearr_182409_182454 = state_182395__$1;(statearr_182409_182454[(1)] = (23));
} else
{var statearr_182410_182455 = state_182395__$1;(statearr_182410_182455[(1)] = (24));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_182396 === (6)))
{var inst_182326 = (state_182395[(8)]);var inst_182376 = (state_182395[(11)]);var inst_182374 = (state_182395[(7)]);var inst_182374__$1 = topic_fn.call(null,inst_182326);var inst_182375 = cljs.core.deref.call(null,mults);var inst_182376__$1 = cljs.core.get.call(null,inst_182375,inst_182374__$1);var state_182395__$1 = (function (){var statearr_182411 = state_182395;(statearr_182411[(11)] = inst_182376__$1);
(statearr_182411[(7)] = inst_182374__$1);
return statearr_182411;
})();if(cljs.core.truth_(inst_182376__$1))
{var statearr_182412_182456 = state_182395__$1;(statearr_182412_182456[(1)] = (19));
} else
{var statearr_182413_182457 = state_182395__$1;(statearr_182413_182457[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_182396 === (25)))
{var inst_182385 = (state_182395[(2)]);var state_182395__$1 = state_182395;var statearr_182414_182458 = state_182395__$1;(statearr_182414_182458[(2)] = inst_182385);
(statearr_182414_182458[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_182396 === (17)))
{var inst_182350 = (state_182395[(10)]);var inst_182359 = cljs.core.first.call(null,inst_182350);var inst_182360 = cljs.core.async.muxch_STAR_.call(null,inst_182359);var inst_182361 = cljs.core.async.close_BANG_.call(null,inst_182360);var inst_182362 = cljs.core.next.call(null,inst_182350);var inst_182336 = inst_182362;var inst_182337 = null;var inst_182338 = (0);var inst_182339 = (0);var state_182395__$1 = (function (){var statearr_182415 = state_182395;(statearr_182415[(12)] = inst_182337);
(statearr_182415[(13)] = inst_182361);
(statearr_182415[(14)] = inst_182338);
(statearr_182415[(15)] = inst_182339);
(statearr_182415[(16)] = inst_182336);
return statearr_182415;
})();var statearr_182416_182459 = state_182395__$1;(statearr_182416_182459[(2)] = null);
(statearr_182416_182459[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_182396 === (3)))
{var inst_182393 = (state_182395[(2)]);var state_182395__$1 = state_182395;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_182395__$1,inst_182393);
} else
{if((state_val_182396 === (12)))
{var inst_182370 = (state_182395[(2)]);var state_182395__$1 = state_182395;var statearr_182417_182460 = state_182395__$1;(statearr_182417_182460[(2)] = inst_182370);
(statearr_182417_182460[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_182396 === (2)))
{var state_182395__$1 = state_182395;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_182395__$1,(4),ch);
} else
{if((state_val_182396 === (23)))
{var state_182395__$1 = state_182395;var statearr_182418_182461 = state_182395__$1;(statearr_182418_182461[(2)] = null);
(statearr_182418_182461[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_182396 === (19)))
{var inst_182326 = (state_182395[(8)]);var inst_182376 = (state_182395[(11)]);var inst_182378 = cljs.core.async.muxch_STAR_.call(null,inst_182376);var state_182395__$1 = state_182395;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_182395__$1,(22),inst_182378,inst_182326);
} else
{if((state_val_182396 === (11)))
{var inst_182336 = (state_182395[(16)]);var inst_182350 = (state_182395[(10)]);var inst_182350__$1 = cljs.core.seq.call(null,inst_182336);var state_182395__$1 = (function (){var statearr_182419 = state_182395;(statearr_182419[(10)] = inst_182350__$1);
return statearr_182419;
})();if(inst_182350__$1)
{var statearr_182420_182462 = state_182395__$1;(statearr_182420_182462[(1)] = (13));
} else
{var statearr_182421_182463 = state_182395__$1;(statearr_182421_182463[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_182396 === (9)))
{var inst_182372 = (state_182395[(2)]);var state_182395__$1 = state_182395;var statearr_182422_182464 = state_182395__$1;(statearr_182422_182464[(2)] = inst_182372);
(statearr_182422_182464[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_182396 === (5)))
{var inst_182333 = cljs.core.deref.call(null,mults);var inst_182334 = cljs.core.vals.call(null,inst_182333);var inst_182335 = cljs.core.seq.call(null,inst_182334);var inst_182336 = inst_182335;var inst_182337 = null;var inst_182338 = (0);var inst_182339 = (0);var state_182395__$1 = (function (){var statearr_182423 = state_182395;(statearr_182423[(12)] = inst_182337);
(statearr_182423[(14)] = inst_182338);
(statearr_182423[(15)] = inst_182339);
(statearr_182423[(16)] = inst_182336);
return statearr_182423;
})();var statearr_182424_182465 = state_182395__$1;(statearr_182424_182465[(2)] = null);
(statearr_182424_182465[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_182396 === (14)))
{var state_182395__$1 = state_182395;var statearr_182428_182466 = state_182395__$1;(statearr_182428_182466[(2)] = null);
(statearr_182428_182466[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_182396 === (16)))
{var inst_182350 = (state_182395[(10)]);var inst_182354 = cljs.core.chunk_first.call(null,inst_182350);var inst_182355 = cljs.core.chunk_rest.call(null,inst_182350);var inst_182356 = cljs.core.count.call(null,inst_182354);var inst_182336 = inst_182355;var inst_182337 = inst_182354;var inst_182338 = inst_182356;var inst_182339 = (0);var state_182395__$1 = (function (){var statearr_182429 = state_182395;(statearr_182429[(12)] = inst_182337);
(statearr_182429[(14)] = inst_182338);
(statearr_182429[(15)] = inst_182339);
(statearr_182429[(16)] = inst_182336);
return statearr_182429;
})();var statearr_182430_182467 = state_182395__$1;(statearr_182430_182467[(2)] = null);
(statearr_182430_182467[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_182396 === (10)))
{var inst_182337 = (state_182395[(12)]);var inst_182338 = (state_182395[(14)]);var inst_182339 = (state_182395[(15)]);var inst_182336 = (state_182395[(16)]);var inst_182344 = cljs.core._nth.call(null,inst_182337,inst_182339);var inst_182345 = cljs.core.async.muxch_STAR_.call(null,inst_182344);var inst_182346 = cljs.core.async.close_BANG_.call(null,inst_182345);var inst_182347 = (inst_182339 + (1));var tmp182425 = inst_182337;var tmp182426 = inst_182338;var tmp182427 = inst_182336;var inst_182336__$1 = tmp182427;var inst_182337__$1 = tmp182425;var inst_182338__$1 = tmp182426;var inst_182339__$1 = inst_182347;var state_182395__$1 = (function (){var statearr_182431 = state_182395;(statearr_182431[(17)] = inst_182346);
(statearr_182431[(12)] = inst_182337__$1);
(statearr_182431[(14)] = inst_182338__$1);
(statearr_182431[(15)] = inst_182339__$1);
(statearr_182431[(16)] = inst_182336__$1);
return statearr_182431;
})();var statearr_182432_182468 = state_182395__$1;(statearr_182432_182468[(2)] = null);
(statearr_182432_182468[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_182396 === (18)))
{var inst_182365 = (state_182395[(2)]);var state_182395__$1 = state_182395;var statearr_182433_182469 = state_182395__$1;(statearr_182433_182469[(2)] = inst_182365);
(statearr_182433_182469[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_182396 === (8)))
{var inst_182338 = (state_182395[(14)]);var inst_182339 = (state_182395[(15)]);var inst_182341 = (inst_182339 < inst_182338);var inst_182342 = inst_182341;var state_182395__$1 = state_182395;if(cljs.core.truth_(inst_182342))
{var statearr_182434_182470 = state_182395__$1;(statearr_182434_182470[(1)] = (10));
} else
{var statearr_182435_182471 = state_182395__$1;(statearr_182435_182471[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__14669__auto___182443,mults,ensure_mult,p))
;return ((function (switch__14613__auto__,c__14669__auto___182443,mults,ensure_mult,p){
return (function() {
var state_machine__14614__auto__ = null;
var state_machine__14614__auto____0 = (function (){var statearr_182439 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_182439[(0)] = state_machine__14614__auto__);
(statearr_182439[(1)] = (1));
return statearr_182439;
});
var state_machine__14614__auto____1 = (function (state_182395){while(true){
var ret_value__14615__auto__ = (function (){try{while(true){
var result__14616__auto__ = switch__14613__auto__.call(null,state_182395);if(cljs.core.keyword_identical_QMARK_.call(null,result__14616__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__14616__auto__;
}
break;
}
}catch (e182440){if((e182440 instanceof Object))
{var ex__14617__auto__ = e182440;var statearr_182441_182472 = state_182395;(statearr_182441_182472[(5)] = ex__14617__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_182395);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e182440;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__182473 = state_182395;
state_182395 = G__182473;
continue;
}
} else
{return ret_value__14615__auto__;
}
break;
}
});
state_machine__14614__auto__ = function(state_182395){
switch(arguments.length){
case 0:
return state_machine__14614__auto____0.call(this);
case 1:
return state_machine__14614__auto____1.call(this,state_182395);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14614__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14614__auto____0;
state_machine__14614__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14614__auto____1;
return state_machine__14614__auto__;
})()
;})(switch__14613__auto__,c__14669__auto___182443,mults,ensure_mult,p))
})();var state__14671__auto__ = (function (){var statearr_182442 = f__14670__auto__.call(null);(statearr_182442[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14669__auto___182443);
return statearr_182442;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14671__auto__);
});})(c__14669__auto___182443,mults,ensure_mult,p))
);
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__14669__auto___182610 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14669__auto___182610,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__14670__auto__ = (function (){var switch__14613__auto__ = ((function (c__14669__auto___182610,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_182580){var state_val_182581 = (state_182580[(1)]);if((state_val_182581 === (7)))
{var state_182580__$1 = state_182580;var statearr_182582_182611 = state_182580__$1;(statearr_182582_182611[(2)] = null);
(statearr_182582_182611[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_182581 === (1)))
{var state_182580__$1 = state_182580;var statearr_182583_182612 = state_182580__$1;(statearr_182583_182612[(2)] = null);
(statearr_182583_182612[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_182581 === (4)))
{var inst_182544 = (state_182580[(7)]);var inst_182546 = (inst_182544 < cnt);var state_182580__$1 = state_182580;if(cljs.core.truth_(inst_182546))
{var statearr_182584_182613 = state_182580__$1;(statearr_182584_182613[(1)] = (6));
} else
{var statearr_182585_182614 = state_182580__$1;(statearr_182585_182614[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_182581 === (15)))
{var inst_182576 = (state_182580[(2)]);var state_182580__$1 = state_182580;var statearr_182586_182615 = state_182580__$1;(statearr_182586_182615[(2)] = inst_182576);
(statearr_182586_182615[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_182581 === (13)))
{var inst_182569 = cljs.core.async.close_BANG_.call(null,out);var state_182580__$1 = state_182580;var statearr_182587_182616 = state_182580__$1;(statearr_182587_182616[(2)] = inst_182569);
(statearr_182587_182616[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_182581 === (6)))
{var state_182580__$1 = state_182580;var statearr_182588_182617 = state_182580__$1;(statearr_182588_182617[(2)] = null);
(statearr_182588_182617[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_182581 === (3)))
{var inst_182578 = (state_182580[(2)]);var state_182580__$1 = state_182580;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_182580__$1,inst_182578);
} else
{if((state_val_182581 === (12)))
{var inst_182566 = (state_182580[(8)]);var inst_182566__$1 = (state_182580[(2)]);var inst_182567 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_182566__$1);var state_182580__$1 = (function (){var statearr_182589 = state_182580;(statearr_182589[(8)] = inst_182566__$1);
return statearr_182589;
})();if(cljs.core.truth_(inst_182567))
{var statearr_182590_182618 = state_182580__$1;(statearr_182590_182618[(1)] = (13));
} else
{var statearr_182591_182619 = state_182580__$1;(statearr_182591_182619[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_182581 === (2)))
{var inst_182543 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_182544 = (0);var state_182580__$1 = (function (){var statearr_182592 = state_182580;(statearr_182592[(7)] = inst_182544);
(statearr_182592[(9)] = inst_182543);
return statearr_182592;
})();var statearr_182593_182620 = state_182580__$1;(statearr_182593_182620[(2)] = null);
(statearr_182593_182620[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_182581 === (11)))
{var inst_182544 = (state_182580[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_182580,(10),Object,null,(9));var inst_182553 = chs__$1.call(null,inst_182544);var inst_182554 = done.call(null,inst_182544);var inst_182555 = cljs.core.async.take_BANG_.call(null,inst_182553,inst_182554);var state_182580__$1 = state_182580;var statearr_182594_182621 = state_182580__$1;(statearr_182594_182621[(2)] = inst_182555);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_182580__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_182581 === (9)))
{var inst_182544 = (state_182580[(7)]);var inst_182557 = (state_182580[(2)]);var inst_182558 = (inst_182544 + (1));var inst_182544__$1 = inst_182558;var state_182580__$1 = (function (){var statearr_182595 = state_182580;(statearr_182595[(10)] = inst_182557);
(statearr_182595[(7)] = inst_182544__$1);
return statearr_182595;
})();var statearr_182596_182622 = state_182580__$1;(statearr_182596_182622[(2)] = null);
(statearr_182596_182622[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_182581 === (5)))
{var inst_182564 = (state_182580[(2)]);var state_182580__$1 = (function (){var statearr_182597 = state_182580;(statearr_182597[(11)] = inst_182564);
return statearr_182597;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_182580__$1,(12),dchan);
} else
{if((state_val_182581 === (14)))
{var inst_182566 = (state_182580[(8)]);var inst_182571 = cljs.core.apply.call(null,f,inst_182566);var state_182580__$1 = state_182580;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_182580__$1,(16),out,inst_182571);
} else
{if((state_val_182581 === (16)))
{var inst_182573 = (state_182580[(2)]);var state_182580__$1 = (function (){var statearr_182598 = state_182580;(statearr_182598[(12)] = inst_182573);
return statearr_182598;
})();var statearr_182599_182623 = state_182580__$1;(statearr_182599_182623[(2)] = null);
(statearr_182599_182623[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_182581 === (10)))
{var inst_182548 = (state_182580[(2)]);var inst_182549 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_182580__$1 = (function (){var statearr_182600 = state_182580;(statearr_182600[(13)] = inst_182548);
return statearr_182600;
})();var statearr_182601_182624 = state_182580__$1;(statearr_182601_182624[(2)] = inst_182549);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_182580__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_182581 === (8)))
{var inst_182562 = (state_182580[(2)]);var state_182580__$1 = state_182580;var statearr_182602_182625 = state_182580__$1;(statearr_182602_182625[(2)] = inst_182562);
(statearr_182602_182625[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__14669__auto___182610,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__14613__auto__,c__14669__auto___182610,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__14614__auto__ = null;
var state_machine__14614__auto____0 = (function (){var statearr_182606 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_182606[(0)] = state_machine__14614__auto__);
(statearr_182606[(1)] = (1));
return statearr_182606;
});
var state_machine__14614__auto____1 = (function (state_182580){while(true){
var ret_value__14615__auto__ = (function (){try{while(true){
var result__14616__auto__ = switch__14613__auto__.call(null,state_182580);if(cljs.core.keyword_identical_QMARK_.call(null,result__14616__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__14616__auto__;
}
break;
}
}catch (e182607){if((e182607 instanceof Object))
{var ex__14617__auto__ = e182607;var statearr_182608_182626 = state_182580;(statearr_182608_182626[(5)] = ex__14617__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_182580);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e182607;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__182627 = state_182580;
state_182580 = G__182627;
continue;
}
} else
{return ret_value__14615__auto__;
}
break;
}
});
state_machine__14614__auto__ = function(state_182580){
switch(arguments.length){
case 0:
return state_machine__14614__auto____0.call(this);
case 1:
return state_machine__14614__auto____1.call(this,state_182580);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14614__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14614__auto____0;
state_machine__14614__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14614__auto____1;
return state_machine__14614__auto__;
})()
;})(switch__14613__auto__,c__14669__auto___182610,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__14671__auto__ = (function (){var statearr_182609 = f__14670__auto__.call(null);(statearr_182609[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14669__auto___182610);
return statearr_182609;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14671__auto__);
});})(c__14669__auto___182610,chs__$1,out,cnt,rets,dchan,dctr,done))
);
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__14669__auto___182735 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14669__auto___182735,out){
return (function (){var f__14670__auto__ = (function (){var switch__14613__auto__ = ((function (c__14669__auto___182735,out){
return (function (state_182711){var state_val_182712 = (state_182711[(1)]);if((state_val_182712 === (7)))
{var inst_182691 = (state_182711[(7)]);var inst_182690 = (state_182711[(8)]);var inst_182690__$1 = (state_182711[(2)]);var inst_182691__$1 = cljs.core.nth.call(null,inst_182690__$1,(0),null);var inst_182692 = cljs.core.nth.call(null,inst_182690__$1,(1),null);var inst_182693 = (inst_182691__$1 == null);var state_182711__$1 = (function (){var statearr_182713 = state_182711;(statearr_182713[(7)] = inst_182691__$1);
(statearr_182713[(9)] = inst_182692);
(statearr_182713[(8)] = inst_182690__$1);
return statearr_182713;
})();if(cljs.core.truth_(inst_182693))
{var statearr_182714_182736 = state_182711__$1;(statearr_182714_182736[(1)] = (8));
} else
{var statearr_182715_182737 = state_182711__$1;(statearr_182715_182737[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_182712 === (1)))
{var inst_182682 = cljs.core.vec.call(null,chs);var inst_182683 = inst_182682;var state_182711__$1 = (function (){var statearr_182716 = state_182711;(statearr_182716[(10)] = inst_182683);
return statearr_182716;
})();var statearr_182717_182738 = state_182711__$1;(statearr_182717_182738[(2)] = null);
(statearr_182717_182738[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_182712 === (4)))
{var inst_182683 = (state_182711[(10)]);var state_182711__$1 = state_182711;return cljs.core.async.ioc_alts_BANG_.call(null,state_182711__$1,(7),inst_182683);
} else
{if((state_val_182712 === (6)))
{var inst_182707 = (state_182711[(2)]);var state_182711__$1 = state_182711;var statearr_182718_182739 = state_182711__$1;(statearr_182718_182739[(2)] = inst_182707);
(statearr_182718_182739[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_182712 === (3)))
{var inst_182709 = (state_182711[(2)]);var state_182711__$1 = state_182711;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_182711__$1,inst_182709);
} else
{if((state_val_182712 === (2)))
{var inst_182683 = (state_182711[(10)]);var inst_182685 = cljs.core.count.call(null,inst_182683);var inst_182686 = (inst_182685 > (0));var state_182711__$1 = state_182711;if(cljs.core.truth_(inst_182686))
{var statearr_182720_182740 = state_182711__$1;(statearr_182720_182740[(1)] = (4));
} else
{var statearr_182721_182741 = state_182711__$1;(statearr_182721_182741[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_182712 === (11)))
{var inst_182683 = (state_182711[(10)]);var inst_182700 = (state_182711[(2)]);var tmp182719 = inst_182683;var inst_182683__$1 = tmp182719;var state_182711__$1 = (function (){var statearr_182722 = state_182711;(statearr_182722[(11)] = inst_182700);
(statearr_182722[(10)] = inst_182683__$1);
return statearr_182722;
})();var statearr_182723_182742 = state_182711__$1;(statearr_182723_182742[(2)] = null);
(statearr_182723_182742[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_182712 === (9)))
{var inst_182691 = (state_182711[(7)]);var state_182711__$1 = state_182711;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_182711__$1,(11),out,inst_182691);
} else
{if((state_val_182712 === (5)))
{var inst_182705 = cljs.core.async.close_BANG_.call(null,out);var state_182711__$1 = state_182711;var statearr_182724_182743 = state_182711__$1;(statearr_182724_182743[(2)] = inst_182705);
(statearr_182724_182743[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_182712 === (10)))
{var inst_182703 = (state_182711[(2)]);var state_182711__$1 = state_182711;var statearr_182725_182744 = state_182711__$1;(statearr_182725_182744[(2)] = inst_182703);
(statearr_182725_182744[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_182712 === (8)))
{var inst_182691 = (state_182711[(7)]);var inst_182692 = (state_182711[(9)]);var inst_182683 = (state_182711[(10)]);var inst_182690 = (state_182711[(8)]);var inst_182695 = (function (){var c = inst_182692;var v = inst_182691;var vec__182688 = inst_182690;var cs = inst_182683;return ((function (c,v,vec__182688,cs,inst_182691,inst_182692,inst_182683,inst_182690,state_val_182712,c__14669__auto___182735,out){
return (function (p1__182628_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__182628_SHARP_);
});
;})(c,v,vec__182688,cs,inst_182691,inst_182692,inst_182683,inst_182690,state_val_182712,c__14669__auto___182735,out))
})();var inst_182696 = cljs.core.filterv.call(null,inst_182695,inst_182683);var inst_182683__$1 = inst_182696;var state_182711__$1 = (function (){var statearr_182726 = state_182711;(statearr_182726[(10)] = inst_182683__$1);
return statearr_182726;
})();var statearr_182727_182745 = state_182711__$1;(statearr_182727_182745[(2)] = null);
(statearr_182727_182745[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__14669__auto___182735,out))
;return ((function (switch__14613__auto__,c__14669__auto___182735,out){
return (function() {
var state_machine__14614__auto__ = null;
var state_machine__14614__auto____0 = (function (){var statearr_182731 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_182731[(0)] = state_machine__14614__auto__);
(statearr_182731[(1)] = (1));
return statearr_182731;
});
var state_machine__14614__auto____1 = (function (state_182711){while(true){
var ret_value__14615__auto__ = (function (){try{while(true){
var result__14616__auto__ = switch__14613__auto__.call(null,state_182711);if(cljs.core.keyword_identical_QMARK_.call(null,result__14616__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__14616__auto__;
}
break;
}
}catch (e182732){if((e182732 instanceof Object))
{var ex__14617__auto__ = e182732;var statearr_182733_182746 = state_182711;(statearr_182733_182746[(5)] = ex__14617__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_182711);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e182732;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__182747 = state_182711;
state_182711 = G__182747;
continue;
}
} else
{return ret_value__14615__auto__;
}
break;
}
});
state_machine__14614__auto__ = function(state_182711){
switch(arguments.length){
case 0:
return state_machine__14614__auto____0.call(this);
case 1:
return state_machine__14614__auto____1.call(this,state_182711);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14614__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14614__auto____0;
state_machine__14614__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14614__auto____1;
return state_machine__14614__auto__;
})()
;})(switch__14613__auto__,c__14669__auto___182735,out))
})();var state__14671__auto__ = (function (){var statearr_182734 = f__14670__auto__.call(null);(statearr_182734[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14669__auto___182735);
return statearr_182734;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14671__auto__);
});})(c__14669__auto___182735,out))
);
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__14669__auto___182840 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14669__auto___182840,out){
return (function (){var f__14670__auto__ = (function (){var switch__14613__auto__ = ((function (c__14669__auto___182840,out){
return (function (state_182817){var state_val_182818 = (state_182817[(1)]);if((state_val_182818 === (7)))
{var inst_182799 = (state_182817[(7)]);var inst_182799__$1 = (state_182817[(2)]);var inst_182800 = (inst_182799__$1 == null);var inst_182801 = cljs.core.not.call(null,inst_182800);var state_182817__$1 = (function (){var statearr_182819 = state_182817;(statearr_182819[(7)] = inst_182799__$1);
return statearr_182819;
})();if(inst_182801)
{var statearr_182820_182841 = state_182817__$1;(statearr_182820_182841[(1)] = (8));
} else
{var statearr_182821_182842 = state_182817__$1;(statearr_182821_182842[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_182818 === (1)))
{var inst_182794 = (0);var state_182817__$1 = (function (){var statearr_182822 = state_182817;(statearr_182822[(8)] = inst_182794);
return statearr_182822;
})();var statearr_182823_182843 = state_182817__$1;(statearr_182823_182843[(2)] = null);
(statearr_182823_182843[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_182818 === (4)))
{var state_182817__$1 = state_182817;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_182817__$1,(7),ch);
} else
{if((state_val_182818 === (6)))
{var inst_182812 = (state_182817[(2)]);var state_182817__$1 = state_182817;var statearr_182824_182844 = state_182817__$1;(statearr_182824_182844[(2)] = inst_182812);
(statearr_182824_182844[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_182818 === (3)))
{var inst_182814 = (state_182817[(2)]);var inst_182815 = cljs.core.async.close_BANG_.call(null,out);var state_182817__$1 = (function (){var statearr_182825 = state_182817;(statearr_182825[(9)] = inst_182814);
return statearr_182825;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_182817__$1,inst_182815);
} else
{if((state_val_182818 === (2)))
{var inst_182794 = (state_182817[(8)]);var inst_182796 = (inst_182794 < n);var state_182817__$1 = state_182817;if(cljs.core.truth_(inst_182796))
{var statearr_182826_182845 = state_182817__$1;(statearr_182826_182845[(1)] = (4));
} else
{var statearr_182827_182846 = state_182817__$1;(statearr_182827_182846[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_182818 === (11)))
{var inst_182794 = (state_182817[(8)]);var inst_182804 = (state_182817[(2)]);var inst_182805 = (inst_182794 + (1));var inst_182794__$1 = inst_182805;var state_182817__$1 = (function (){var statearr_182828 = state_182817;(statearr_182828[(10)] = inst_182804);
(statearr_182828[(8)] = inst_182794__$1);
return statearr_182828;
})();var statearr_182829_182847 = state_182817__$1;(statearr_182829_182847[(2)] = null);
(statearr_182829_182847[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_182818 === (9)))
{var state_182817__$1 = state_182817;var statearr_182830_182848 = state_182817__$1;(statearr_182830_182848[(2)] = null);
(statearr_182830_182848[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_182818 === (5)))
{var state_182817__$1 = state_182817;var statearr_182831_182849 = state_182817__$1;(statearr_182831_182849[(2)] = null);
(statearr_182831_182849[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_182818 === (10)))
{var inst_182809 = (state_182817[(2)]);var state_182817__$1 = state_182817;var statearr_182832_182850 = state_182817__$1;(statearr_182832_182850[(2)] = inst_182809);
(statearr_182832_182850[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_182818 === (8)))
{var inst_182799 = (state_182817[(7)]);var state_182817__$1 = state_182817;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_182817__$1,(11),out,inst_182799);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__14669__auto___182840,out))
;return ((function (switch__14613__auto__,c__14669__auto___182840,out){
return (function() {
var state_machine__14614__auto__ = null;
var state_machine__14614__auto____0 = (function (){var statearr_182836 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_182836[(0)] = state_machine__14614__auto__);
(statearr_182836[(1)] = (1));
return statearr_182836;
});
var state_machine__14614__auto____1 = (function (state_182817){while(true){
var ret_value__14615__auto__ = (function (){try{while(true){
var result__14616__auto__ = switch__14613__auto__.call(null,state_182817);if(cljs.core.keyword_identical_QMARK_.call(null,result__14616__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__14616__auto__;
}
break;
}
}catch (e182837){if((e182837 instanceof Object))
{var ex__14617__auto__ = e182837;var statearr_182838_182851 = state_182817;(statearr_182838_182851[(5)] = ex__14617__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_182817);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e182837;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__182852 = state_182817;
state_182817 = G__182852;
continue;
}
} else
{return ret_value__14615__auto__;
}
break;
}
});
state_machine__14614__auto__ = function(state_182817){
switch(arguments.length){
case 0:
return state_machine__14614__auto____0.call(this);
case 1:
return state_machine__14614__auto____1.call(this,state_182817);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14614__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14614__auto____0;
state_machine__14614__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14614__auto____1;
return state_machine__14614__auto__;
})()
;})(switch__14613__auto__,c__14669__auto___182840,out))
})();var state__14671__auto__ = (function (){var statearr_182839 = f__14670__auto__.call(null);(statearr_182839[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14669__auto___182840);
return statearr_182839;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14671__auto__);
});})(c__14669__auto___182840,out))
);
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t182860 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t182860 = (function (ch,f,map_LT_,meta182861){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta182861 = meta182861;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t182860.cljs$lang$type = true;
cljs.core.async.t182860.cljs$lang$ctorStr = "cljs.core.async/t182860";
cljs.core.async.t182860.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t182860");
});
cljs.core.async.t182860.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t182860.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t182860.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t182860.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t182863 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t182863 = (function (fn1,_,meta182861,ch,f,map_LT_,meta182864){
this.fn1 = fn1;
this._ = _;
this.meta182861 = meta182861;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta182864 = meta182864;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t182863.cljs$lang$type = true;
cljs.core.async.t182863.cljs$lang$ctorStr = "cljs.core.async/t182863";
cljs.core.async.t182863.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t182863");
});})(___$1))
;
cljs.core.async.t182863.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t182863.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t182863.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__182853_SHARP_){return f1.call(null,(((p1__182853_SHARP_ == null))?null:self__.f.call(null,p1__182853_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t182863.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_182865){var self__ = this;
var _182865__$1 = this;return self__.meta182864;
});})(___$1))
;
cljs.core.async.t182863.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_182865,meta182864__$1){var self__ = this;
var _182865__$1 = this;return (new cljs.core.async.t182863(self__.fn1,self__._,self__.meta182861,self__.ch,self__.f,self__.map_LT_,meta182864__$1));
});})(___$1))
;
cljs.core.async.__GT_t182863 = ((function (___$1){
return (function __GT_t182863(fn1__$1,___$2,meta182861__$1,ch__$2,f__$2,map_LT___$2,meta182864){return (new cljs.core.async.t182863(fn1__$1,___$2,meta182861__$1,ch__$2,f__$2,map_LT___$2,meta182864));
});})(___$1))
;
}
return (new cljs.core.async.t182863(fn1,___$1,self__.meta182861,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3628__auto__ = ret;if(cljs.core.truth_(and__3628__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3628__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t182860.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t182860.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t182860.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t182860.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_182862){var self__ = this;
var _182862__$1 = this;return self__.meta182861;
});
cljs.core.async.t182860.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_182862,meta182861__$1){var self__ = this;
var _182862__$1 = this;return (new cljs.core.async.t182860(self__.ch,self__.f,self__.map_LT_,meta182861__$1));
});
cljs.core.async.__GT_t182860 = (function __GT_t182860(ch__$1,f__$1,map_LT___$1,meta182861){return (new cljs.core.async.t182860(ch__$1,f__$1,map_LT___$1,meta182861));
});
}
return (new cljs.core.async.t182860(ch,f,map_LT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t182869 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t182869 = (function (ch,f,map_GT_,meta182870){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta182870 = meta182870;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t182869.cljs$lang$type = true;
cljs.core.async.t182869.cljs$lang$ctorStr = "cljs.core.async/t182869";
cljs.core.async.t182869.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t182869");
});
cljs.core.async.t182869.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t182869.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t182869.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t182869.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t182869.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t182869.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t182869.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_182871){var self__ = this;
var _182871__$1 = this;return self__.meta182870;
});
cljs.core.async.t182869.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_182871,meta182870__$1){var self__ = this;
var _182871__$1 = this;return (new cljs.core.async.t182869(self__.ch,self__.f,self__.map_GT_,meta182870__$1));
});
cljs.core.async.__GT_t182869 = (function __GT_t182869(ch__$1,f__$1,map_GT___$1,meta182870){return (new cljs.core.async.t182869(ch__$1,f__$1,map_GT___$1,meta182870));
});
}
return (new cljs.core.async.t182869(ch,f,map_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t182875 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t182875 = (function (ch,p,filter_GT_,meta182876){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta182876 = meta182876;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t182875.cljs$lang$type = true;
cljs.core.async.t182875.cljs$lang$ctorStr = "cljs.core.async/t182875";
cljs.core.async.t182875.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t182875");
});
cljs.core.async.t182875.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t182875.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t182875.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t182875.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t182875.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t182875.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t182875.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t182875.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_182877){var self__ = this;
var _182877__$1 = this;return self__.meta182876;
});
cljs.core.async.t182875.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_182877,meta182876__$1){var self__ = this;
var _182877__$1 = this;return (new cljs.core.async.t182875(self__.ch,self__.p,self__.filter_GT_,meta182876__$1));
});
cljs.core.async.__GT_t182875 = (function __GT_t182875(ch__$1,p__$1,filter_GT___$1,meta182876){return (new cljs.core.async.t182875(ch__$1,p__$1,filter_GT___$1,meta182876));
});
}
return (new cljs.core.async.t182875(ch,p,filter_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__14669__auto___182960 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14669__auto___182960,out){
return (function (){var f__14670__auto__ = (function (){var switch__14613__auto__ = ((function (c__14669__auto___182960,out){
return (function (state_182939){var state_val_182940 = (state_182939[(1)]);if((state_val_182940 === (7)))
{var inst_182935 = (state_182939[(2)]);var state_182939__$1 = state_182939;var statearr_182941_182961 = state_182939__$1;(statearr_182941_182961[(2)] = inst_182935);
(statearr_182941_182961[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_182940 === (1)))
{var state_182939__$1 = state_182939;var statearr_182942_182962 = state_182939__$1;(statearr_182942_182962[(2)] = null);
(statearr_182942_182962[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_182940 === (4)))
{var inst_182921 = (state_182939[(7)]);var inst_182921__$1 = (state_182939[(2)]);var inst_182922 = (inst_182921__$1 == null);var state_182939__$1 = (function (){var statearr_182943 = state_182939;(statearr_182943[(7)] = inst_182921__$1);
return statearr_182943;
})();if(cljs.core.truth_(inst_182922))
{var statearr_182944_182963 = state_182939__$1;(statearr_182944_182963[(1)] = (5));
} else
{var statearr_182945_182964 = state_182939__$1;(statearr_182945_182964[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_182940 === (6)))
{var inst_182921 = (state_182939[(7)]);var inst_182926 = p.call(null,inst_182921);var state_182939__$1 = state_182939;if(cljs.core.truth_(inst_182926))
{var statearr_182946_182965 = state_182939__$1;(statearr_182946_182965[(1)] = (8));
} else
{var statearr_182947_182966 = state_182939__$1;(statearr_182947_182966[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_182940 === (3)))
{var inst_182937 = (state_182939[(2)]);var state_182939__$1 = state_182939;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_182939__$1,inst_182937);
} else
{if((state_val_182940 === (2)))
{var state_182939__$1 = state_182939;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_182939__$1,(4),ch);
} else
{if((state_val_182940 === (11)))
{var inst_182929 = (state_182939[(2)]);var state_182939__$1 = state_182939;var statearr_182948_182967 = state_182939__$1;(statearr_182948_182967[(2)] = inst_182929);
(statearr_182948_182967[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_182940 === (9)))
{var state_182939__$1 = state_182939;var statearr_182949_182968 = state_182939__$1;(statearr_182949_182968[(2)] = null);
(statearr_182949_182968[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_182940 === (5)))
{var inst_182924 = cljs.core.async.close_BANG_.call(null,out);var state_182939__$1 = state_182939;var statearr_182950_182969 = state_182939__$1;(statearr_182950_182969[(2)] = inst_182924);
(statearr_182950_182969[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_182940 === (10)))
{var inst_182932 = (state_182939[(2)]);var state_182939__$1 = (function (){var statearr_182951 = state_182939;(statearr_182951[(8)] = inst_182932);
return statearr_182951;
})();var statearr_182952_182970 = state_182939__$1;(statearr_182952_182970[(2)] = null);
(statearr_182952_182970[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_182940 === (8)))
{var inst_182921 = (state_182939[(7)]);var state_182939__$1 = state_182939;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_182939__$1,(11),out,inst_182921);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__14669__auto___182960,out))
;return ((function (switch__14613__auto__,c__14669__auto___182960,out){
return (function() {
var state_machine__14614__auto__ = null;
var state_machine__14614__auto____0 = (function (){var statearr_182956 = [null,null,null,null,null,null,null,null,null];(statearr_182956[(0)] = state_machine__14614__auto__);
(statearr_182956[(1)] = (1));
return statearr_182956;
});
var state_machine__14614__auto____1 = (function (state_182939){while(true){
var ret_value__14615__auto__ = (function (){try{while(true){
var result__14616__auto__ = switch__14613__auto__.call(null,state_182939);if(cljs.core.keyword_identical_QMARK_.call(null,result__14616__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__14616__auto__;
}
break;
}
}catch (e182957){if((e182957 instanceof Object))
{var ex__14617__auto__ = e182957;var statearr_182958_182971 = state_182939;(statearr_182958_182971[(5)] = ex__14617__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_182939);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e182957;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__182972 = state_182939;
state_182939 = G__182972;
continue;
}
} else
{return ret_value__14615__auto__;
}
break;
}
});
state_machine__14614__auto__ = function(state_182939){
switch(arguments.length){
case 0:
return state_machine__14614__auto____0.call(this);
case 1:
return state_machine__14614__auto____1.call(this,state_182939);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14614__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14614__auto____0;
state_machine__14614__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14614__auto____1;
return state_machine__14614__auto__;
})()
;})(switch__14613__auto__,c__14669__auto___182960,out))
})();var state__14671__auto__ = (function (){var statearr_182959 = f__14670__auto__.call(null);(statearr_182959[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14669__auto___182960);
return statearr_182959;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14671__auto__);
});})(c__14669__auto___182960,out))
);
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__14669__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14669__auto__){
return (function (){var f__14670__auto__ = (function (){var switch__14613__auto__ = ((function (c__14669__auto__){
return (function (state_183138){var state_val_183139 = (state_183138[(1)]);if((state_val_183139 === (7)))
{var inst_183134 = (state_183138[(2)]);var state_183138__$1 = state_183138;var statearr_183140_183181 = state_183138__$1;(statearr_183140_183181[(2)] = inst_183134);
(statearr_183140_183181[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_183139 === (20)))
{var inst_183104 = (state_183138[(7)]);var inst_183115 = (state_183138[(2)]);var inst_183116 = cljs.core.next.call(null,inst_183104);var inst_183090 = inst_183116;var inst_183091 = null;var inst_183092 = (0);var inst_183093 = (0);var state_183138__$1 = (function (){var statearr_183141 = state_183138;(statearr_183141[(8)] = inst_183092);
(statearr_183141[(9)] = inst_183115);
(statearr_183141[(10)] = inst_183090);
(statearr_183141[(11)] = inst_183091);
(statearr_183141[(12)] = inst_183093);
return statearr_183141;
})();var statearr_183142_183182 = state_183138__$1;(statearr_183142_183182[(2)] = null);
(statearr_183142_183182[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_183139 === (1)))
{var state_183138__$1 = state_183138;var statearr_183143_183183 = state_183138__$1;(statearr_183143_183183[(2)] = null);
(statearr_183143_183183[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_183139 === (4)))
{var inst_183079 = (state_183138[(13)]);var inst_183079__$1 = (state_183138[(2)]);var inst_183080 = (inst_183079__$1 == null);var state_183138__$1 = (function (){var statearr_183144 = state_183138;(statearr_183144[(13)] = inst_183079__$1);
return statearr_183144;
})();if(cljs.core.truth_(inst_183080))
{var statearr_183145_183184 = state_183138__$1;(statearr_183145_183184[(1)] = (5));
} else
{var statearr_183146_183185 = state_183138__$1;(statearr_183146_183185[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_183139 === (15)))
{var state_183138__$1 = state_183138;var statearr_183150_183186 = state_183138__$1;(statearr_183150_183186[(2)] = null);
(statearr_183150_183186[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_183139 === (21)))
{var state_183138__$1 = state_183138;var statearr_183151_183187 = state_183138__$1;(statearr_183151_183187[(2)] = null);
(statearr_183151_183187[(1)] = (23));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_183139 === (13)))
{var inst_183092 = (state_183138[(8)]);var inst_183090 = (state_183138[(10)]);var inst_183091 = (state_183138[(11)]);var inst_183093 = (state_183138[(12)]);var inst_183100 = (state_183138[(2)]);var inst_183101 = (inst_183093 + (1));var tmp183147 = inst_183092;var tmp183148 = inst_183090;var tmp183149 = inst_183091;var inst_183090__$1 = tmp183148;var inst_183091__$1 = tmp183149;var inst_183092__$1 = tmp183147;var inst_183093__$1 = inst_183101;var state_183138__$1 = (function (){var statearr_183152 = state_183138;(statearr_183152[(8)] = inst_183092__$1);
(statearr_183152[(14)] = inst_183100);
(statearr_183152[(10)] = inst_183090__$1);
(statearr_183152[(11)] = inst_183091__$1);
(statearr_183152[(12)] = inst_183093__$1);
return statearr_183152;
})();var statearr_183153_183188 = state_183138__$1;(statearr_183153_183188[(2)] = null);
(statearr_183153_183188[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_183139 === (22)))
{var state_183138__$1 = state_183138;var statearr_183154_183189 = state_183138__$1;(statearr_183154_183189[(2)] = null);
(statearr_183154_183189[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_183139 === (6)))
{var inst_183079 = (state_183138[(13)]);var inst_183088 = f.call(null,inst_183079);var inst_183089 = cljs.core.seq.call(null,inst_183088);var inst_183090 = inst_183089;var inst_183091 = null;var inst_183092 = (0);var inst_183093 = (0);var state_183138__$1 = (function (){var statearr_183155 = state_183138;(statearr_183155[(8)] = inst_183092);
(statearr_183155[(10)] = inst_183090);
(statearr_183155[(11)] = inst_183091);
(statearr_183155[(12)] = inst_183093);
return statearr_183155;
})();var statearr_183156_183190 = state_183138__$1;(statearr_183156_183190[(2)] = null);
(statearr_183156_183190[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_183139 === (17)))
{var inst_183104 = (state_183138[(7)]);var inst_183108 = cljs.core.chunk_first.call(null,inst_183104);var inst_183109 = cljs.core.chunk_rest.call(null,inst_183104);var inst_183110 = cljs.core.count.call(null,inst_183108);var inst_183090 = inst_183109;var inst_183091 = inst_183108;var inst_183092 = inst_183110;var inst_183093 = (0);var state_183138__$1 = (function (){var statearr_183157 = state_183138;(statearr_183157[(8)] = inst_183092);
(statearr_183157[(10)] = inst_183090);
(statearr_183157[(11)] = inst_183091);
(statearr_183157[(12)] = inst_183093);
return statearr_183157;
})();var statearr_183158_183191 = state_183138__$1;(statearr_183158_183191[(2)] = null);
(statearr_183158_183191[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_183139 === (3)))
{var inst_183136 = (state_183138[(2)]);var state_183138__$1 = state_183138;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_183138__$1,inst_183136);
} else
{if((state_val_183139 === (12)))
{var inst_183124 = (state_183138[(2)]);var state_183138__$1 = state_183138;var statearr_183159_183192 = state_183138__$1;(statearr_183159_183192[(2)] = inst_183124);
(statearr_183159_183192[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_183139 === (2)))
{var state_183138__$1 = state_183138;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_183138__$1,(4),in$);
} else
{if((state_val_183139 === (23)))
{var inst_183132 = (state_183138[(2)]);var state_183138__$1 = state_183138;var statearr_183160_183193 = state_183138__$1;(statearr_183160_183193[(2)] = inst_183132);
(statearr_183160_183193[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_183139 === (19)))
{var inst_183119 = (state_183138[(2)]);var state_183138__$1 = state_183138;var statearr_183161_183194 = state_183138__$1;(statearr_183161_183194[(2)] = inst_183119);
(statearr_183161_183194[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_183139 === (11)))
{var inst_183104 = (state_183138[(7)]);var inst_183090 = (state_183138[(10)]);var inst_183104__$1 = cljs.core.seq.call(null,inst_183090);var state_183138__$1 = (function (){var statearr_183162 = state_183138;(statearr_183162[(7)] = inst_183104__$1);
return statearr_183162;
})();if(inst_183104__$1)
{var statearr_183163_183195 = state_183138__$1;(statearr_183163_183195[(1)] = (14));
} else
{var statearr_183164_183196 = state_183138__$1;(statearr_183164_183196[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_183139 === (9)))
{var inst_183126 = (state_183138[(2)]);var inst_183127 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_183138__$1 = (function (){var statearr_183165 = state_183138;(statearr_183165[(15)] = inst_183126);
return statearr_183165;
})();if(cljs.core.truth_(inst_183127))
{var statearr_183166_183197 = state_183138__$1;(statearr_183166_183197[(1)] = (21));
} else
{var statearr_183167_183198 = state_183138__$1;(statearr_183167_183198[(1)] = (22));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_183139 === (5)))
{var inst_183082 = cljs.core.async.close_BANG_.call(null,out);var state_183138__$1 = state_183138;var statearr_183168_183199 = state_183138__$1;(statearr_183168_183199[(2)] = inst_183082);
(statearr_183168_183199[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_183139 === (14)))
{var inst_183104 = (state_183138[(7)]);var inst_183106 = cljs.core.chunked_seq_QMARK_.call(null,inst_183104);var state_183138__$1 = state_183138;if(inst_183106)
{var statearr_183169_183200 = state_183138__$1;(statearr_183169_183200[(1)] = (17));
} else
{var statearr_183170_183201 = state_183138__$1;(statearr_183170_183201[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_183139 === (16)))
{var inst_183122 = (state_183138[(2)]);var state_183138__$1 = state_183138;var statearr_183171_183202 = state_183138__$1;(statearr_183171_183202[(2)] = inst_183122);
(statearr_183171_183202[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_183139 === (10)))
{var inst_183091 = (state_183138[(11)]);var inst_183093 = (state_183138[(12)]);var inst_183098 = cljs.core._nth.call(null,inst_183091,inst_183093);var state_183138__$1 = state_183138;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_183138__$1,(13),out,inst_183098);
} else
{if((state_val_183139 === (18)))
{var inst_183104 = (state_183138[(7)]);var inst_183113 = cljs.core.first.call(null,inst_183104);var state_183138__$1 = state_183138;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_183138__$1,(20),out,inst_183113);
} else
{if((state_val_183139 === (8)))
{var inst_183092 = (state_183138[(8)]);var inst_183093 = (state_183138[(12)]);var inst_183095 = (inst_183093 < inst_183092);var inst_183096 = inst_183095;var state_183138__$1 = state_183138;if(cljs.core.truth_(inst_183096))
{var statearr_183172_183203 = state_183138__$1;(statearr_183172_183203[(1)] = (10));
} else
{var statearr_183173_183204 = state_183138__$1;(statearr_183173_183204[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__14669__auto__))
;return ((function (switch__14613__auto__,c__14669__auto__){
return (function() {
var state_machine__14614__auto__ = null;
var state_machine__14614__auto____0 = (function (){var statearr_183177 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_183177[(0)] = state_machine__14614__auto__);
(statearr_183177[(1)] = (1));
return statearr_183177;
});
var state_machine__14614__auto____1 = (function (state_183138){while(true){
var ret_value__14615__auto__ = (function (){try{while(true){
var result__14616__auto__ = switch__14613__auto__.call(null,state_183138);if(cljs.core.keyword_identical_QMARK_.call(null,result__14616__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__14616__auto__;
}
break;
}
}catch (e183178){if((e183178 instanceof Object))
{var ex__14617__auto__ = e183178;var statearr_183179_183205 = state_183138;(statearr_183179_183205[(5)] = ex__14617__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_183138);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e183178;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__183206 = state_183138;
state_183138 = G__183206;
continue;
}
} else
{return ret_value__14615__auto__;
}
break;
}
});
state_machine__14614__auto__ = function(state_183138){
switch(arguments.length){
case 0:
return state_machine__14614__auto____0.call(this);
case 1:
return state_machine__14614__auto____1.call(this,state_183138);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14614__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14614__auto____0;
state_machine__14614__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14614__auto____1;
return state_machine__14614__auto__;
})()
;})(switch__14613__auto__,c__14669__auto__))
})();var state__14671__auto__ = (function (){var statearr_183180 = f__14670__auto__.call(null);(statearr_183180[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14669__auto__);
return statearr_183180;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14671__auto__);
});})(c__14669__auto__))
);
return c__14669__auto__;
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__14669__auto___183303 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14669__auto___183303,out){
return (function (){var f__14670__auto__ = (function (){var switch__14613__auto__ = ((function (c__14669__auto___183303,out){
return (function (state_183278){var state_val_183279 = (state_183278[(1)]);if((state_val_183279 === (7)))
{var inst_183273 = (state_183278[(2)]);var state_183278__$1 = state_183278;var statearr_183280_183304 = state_183278__$1;(statearr_183280_183304[(2)] = inst_183273);
(statearr_183280_183304[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_183279 === (1)))
{var inst_183255 = null;var state_183278__$1 = (function (){var statearr_183281 = state_183278;(statearr_183281[(7)] = inst_183255);
return statearr_183281;
})();var statearr_183282_183305 = state_183278__$1;(statearr_183282_183305[(2)] = null);
(statearr_183282_183305[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_183279 === (4)))
{var inst_183258 = (state_183278[(8)]);var inst_183258__$1 = (state_183278[(2)]);var inst_183259 = (inst_183258__$1 == null);var inst_183260 = cljs.core.not.call(null,inst_183259);var state_183278__$1 = (function (){var statearr_183283 = state_183278;(statearr_183283[(8)] = inst_183258__$1);
return statearr_183283;
})();if(inst_183260)
{var statearr_183284_183306 = state_183278__$1;(statearr_183284_183306[(1)] = (5));
} else
{var statearr_183285_183307 = state_183278__$1;(statearr_183285_183307[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_183279 === (6)))
{var state_183278__$1 = state_183278;var statearr_183286_183308 = state_183278__$1;(statearr_183286_183308[(2)] = null);
(statearr_183286_183308[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_183279 === (3)))
{var inst_183275 = (state_183278[(2)]);var inst_183276 = cljs.core.async.close_BANG_.call(null,out);var state_183278__$1 = (function (){var statearr_183287 = state_183278;(statearr_183287[(9)] = inst_183275);
return statearr_183287;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_183278__$1,inst_183276);
} else
{if((state_val_183279 === (2)))
{var state_183278__$1 = state_183278;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_183278__$1,(4),ch);
} else
{if((state_val_183279 === (11)))
{var inst_183258 = (state_183278[(8)]);var inst_183267 = (state_183278[(2)]);var inst_183255 = inst_183258;var state_183278__$1 = (function (){var statearr_183288 = state_183278;(statearr_183288[(10)] = inst_183267);
(statearr_183288[(7)] = inst_183255);
return statearr_183288;
})();var statearr_183289_183309 = state_183278__$1;(statearr_183289_183309[(2)] = null);
(statearr_183289_183309[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_183279 === (9)))
{var inst_183258 = (state_183278[(8)]);var state_183278__$1 = state_183278;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_183278__$1,(11),out,inst_183258);
} else
{if((state_val_183279 === (5)))
{var inst_183255 = (state_183278[(7)]);var inst_183258 = (state_183278[(8)]);var inst_183262 = cljs.core._EQ_.call(null,inst_183258,inst_183255);var state_183278__$1 = state_183278;if(inst_183262)
{var statearr_183291_183310 = state_183278__$1;(statearr_183291_183310[(1)] = (8));
} else
{var statearr_183292_183311 = state_183278__$1;(statearr_183292_183311[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_183279 === (10)))
{var inst_183270 = (state_183278[(2)]);var state_183278__$1 = state_183278;var statearr_183293_183312 = state_183278__$1;(statearr_183293_183312[(2)] = inst_183270);
(statearr_183293_183312[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_183279 === (8)))
{var inst_183255 = (state_183278[(7)]);var tmp183290 = inst_183255;var inst_183255__$1 = tmp183290;var state_183278__$1 = (function (){var statearr_183294 = state_183278;(statearr_183294[(7)] = inst_183255__$1);
return statearr_183294;
})();var statearr_183295_183313 = state_183278__$1;(statearr_183295_183313[(2)] = null);
(statearr_183295_183313[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__14669__auto___183303,out))
;return ((function (switch__14613__auto__,c__14669__auto___183303,out){
return (function() {
var state_machine__14614__auto__ = null;
var state_machine__14614__auto____0 = (function (){var statearr_183299 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_183299[(0)] = state_machine__14614__auto__);
(statearr_183299[(1)] = (1));
return statearr_183299;
});
var state_machine__14614__auto____1 = (function (state_183278){while(true){
var ret_value__14615__auto__ = (function (){try{while(true){
var result__14616__auto__ = switch__14613__auto__.call(null,state_183278);if(cljs.core.keyword_identical_QMARK_.call(null,result__14616__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__14616__auto__;
}
break;
}
}catch (e183300){if((e183300 instanceof Object))
{var ex__14617__auto__ = e183300;var statearr_183301_183314 = state_183278;(statearr_183301_183314[(5)] = ex__14617__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_183278);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e183300;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__183315 = state_183278;
state_183278 = G__183315;
continue;
}
} else
{return ret_value__14615__auto__;
}
break;
}
});
state_machine__14614__auto__ = function(state_183278){
switch(arguments.length){
case 0:
return state_machine__14614__auto____0.call(this);
case 1:
return state_machine__14614__auto____1.call(this,state_183278);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14614__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14614__auto____0;
state_machine__14614__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14614__auto____1;
return state_machine__14614__auto__;
})()
;})(switch__14613__auto__,c__14669__auto___183303,out))
})();var state__14671__auto__ = (function (){var statearr_183302 = f__14670__auto__.call(null);(statearr_183302[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14669__auto___183303);
return statearr_183302;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14671__auto__);
});})(c__14669__auto___183303,out))
);
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__14669__auto___183450 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14669__auto___183450,out){
return (function (){var f__14670__auto__ = (function (){var switch__14613__auto__ = ((function (c__14669__auto___183450,out){
return (function (state_183420){var state_val_183421 = (state_183420[(1)]);if((state_val_183421 === (7)))
{var inst_183416 = (state_183420[(2)]);var state_183420__$1 = state_183420;var statearr_183422_183451 = state_183420__$1;(statearr_183422_183451[(2)] = inst_183416);
(statearr_183422_183451[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_183421 === (1)))
{var inst_183383 = (new Array(n));var inst_183384 = inst_183383;var inst_183385 = (0);var state_183420__$1 = (function (){var statearr_183423 = state_183420;(statearr_183423[(7)] = inst_183384);
(statearr_183423[(8)] = inst_183385);
return statearr_183423;
})();var statearr_183424_183452 = state_183420__$1;(statearr_183424_183452[(2)] = null);
(statearr_183424_183452[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_183421 === (4)))
{var inst_183388 = (state_183420[(9)]);var inst_183388__$1 = (state_183420[(2)]);var inst_183389 = (inst_183388__$1 == null);var inst_183390 = cljs.core.not.call(null,inst_183389);var state_183420__$1 = (function (){var statearr_183425 = state_183420;(statearr_183425[(9)] = inst_183388__$1);
return statearr_183425;
})();if(inst_183390)
{var statearr_183426_183453 = state_183420__$1;(statearr_183426_183453[(1)] = (5));
} else
{var statearr_183427_183454 = state_183420__$1;(statearr_183427_183454[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_183421 === (15)))
{var inst_183410 = (state_183420[(2)]);var state_183420__$1 = state_183420;var statearr_183428_183455 = state_183420__$1;(statearr_183428_183455[(2)] = inst_183410);
(statearr_183428_183455[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_183421 === (13)))
{var state_183420__$1 = state_183420;var statearr_183429_183456 = state_183420__$1;(statearr_183429_183456[(2)] = null);
(statearr_183429_183456[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_183421 === (6)))
{var inst_183385 = (state_183420[(8)]);var inst_183406 = (inst_183385 > (0));var state_183420__$1 = state_183420;if(cljs.core.truth_(inst_183406))
{var statearr_183430_183457 = state_183420__$1;(statearr_183430_183457[(1)] = (12));
} else
{var statearr_183431_183458 = state_183420__$1;(statearr_183431_183458[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_183421 === (3)))
{var inst_183418 = (state_183420[(2)]);var state_183420__$1 = state_183420;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_183420__$1,inst_183418);
} else
{if((state_val_183421 === (12)))
{var inst_183384 = (state_183420[(7)]);var inst_183408 = cljs.core.vec.call(null,inst_183384);var state_183420__$1 = state_183420;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_183420__$1,(15),out,inst_183408);
} else
{if((state_val_183421 === (2)))
{var state_183420__$1 = state_183420;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_183420__$1,(4),ch);
} else
{if((state_val_183421 === (11)))
{var inst_183400 = (state_183420[(2)]);var inst_183401 = (new Array(n));var inst_183384 = inst_183401;var inst_183385 = (0);var state_183420__$1 = (function (){var statearr_183432 = state_183420;(statearr_183432[(10)] = inst_183400);
(statearr_183432[(7)] = inst_183384);
(statearr_183432[(8)] = inst_183385);
return statearr_183432;
})();var statearr_183433_183459 = state_183420__$1;(statearr_183433_183459[(2)] = null);
(statearr_183433_183459[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_183421 === (9)))
{var inst_183384 = (state_183420[(7)]);var inst_183398 = cljs.core.vec.call(null,inst_183384);var state_183420__$1 = state_183420;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_183420__$1,(11),out,inst_183398);
} else
{if((state_val_183421 === (5)))
{var inst_183393 = (state_183420[(11)]);var inst_183384 = (state_183420[(7)]);var inst_183388 = (state_183420[(9)]);var inst_183385 = (state_183420[(8)]);var inst_183392 = (inst_183384[inst_183385] = inst_183388);var inst_183393__$1 = (inst_183385 + (1));var inst_183394 = (inst_183393__$1 < n);var state_183420__$1 = (function (){var statearr_183434 = state_183420;(statearr_183434[(11)] = inst_183393__$1);
(statearr_183434[(12)] = inst_183392);
return statearr_183434;
})();if(cljs.core.truth_(inst_183394))
{var statearr_183435_183460 = state_183420__$1;(statearr_183435_183460[(1)] = (8));
} else
{var statearr_183436_183461 = state_183420__$1;(statearr_183436_183461[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_183421 === (14)))
{var inst_183413 = (state_183420[(2)]);var inst_183414 = cljs.core.async.close_BANG_.call(null,out);var state_183420__$1 = (function (){var statearr_183438 = state_183420;(statearr_183438[(13)] = inst_183413);
return statearr_183438;
})();var statearr_183439_183462 = state_183420__$1;(statearr_183439_183462[(2)] = inst_183414);
(statearr_183439_183462[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_183421 === (10)))
{var inst_183404 = (state_183420[(2)]);var state_183420__$1 = state_183420;var statearr_183440_183463 = state_183420__$1;(statearr_183440_183463[(2)] = inst_183404);
(statearr_183440_183463[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_183421 === (8)))
{var inst_183393 = (state_183420[(11)]);var inst_183384 = (state_183420[(7)]);var tmp183437 = inst_183384;var inst_183384__$1 = tmp183437;var inst_183385 = inst_183393;var state_183420__$1 = (function (){var statearr_183441 = state_183420;(statearr_183441[(7)] = inst_183384__$1);
(statearr_183441[(8)] = inst_183385);
return statearr_183441;
})();var statearr_183442_183464 = state_183420__$1;(statearr_183442_183464[(2)] = null);
(statearr_183442_183464[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__14669__auto___183450,out))
;return ((function (switch__14613__auto__,c__14669__auto___183450,out){
return (function() {
var state_machine__14614__auto__ = null;
var state_machine__14614__auto____0 = (function (){var statearr_183446 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_183446[(0)] = state_machine__14614__auto__);
(statearr_183446[(1)] = (1));
return statearr_183446;
});
var state_machine__14614__auto____1 = (function (state_183420){while(true){
var ret_value__14615__auto__ = (function (){try{while(true){
var result__14616__auto__ = switch__14613__auto__.call(null,state_183420);if(cljs.core.keyword_identical_QMARK_.call(null,result__14616__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__14616__auto__;
}
break;
}
}catch (e183447){if((e183447 instanceof Object))
{var ex__14617__auto__ = e183447;var statearr_183448_183465 = state_183420;(statearr_183448_183465[(5)] = ex__14617__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_183420);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e183447;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__183466 = state_183420;
state_183420 = G__183466;
continue;
}
} else
{return ret_value__14615__auto__;
}
break;
}
});
state_machine__14614__auto__ = function(state_183420){
switch(arguments.length){
case 0:
return state_machine__14614__auto____0.call(this);
case 1:
return state_machine__14614__auto____1.call(this,state_183420);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14614__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14614__auto____0;
state_machine__14614__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14614__auto____1;
return state_machine__14614__auto__;
})()
;})(switch__14613__auto__,c__14669__auto___183450,out))
})();var state__14671__auto__ = (function (){var statearr_183449 = f__14670__auto__.call(null);(statearr_183449[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14669__auto___183450);
return statearr_183449;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14671__auto__);
});})(c__14669__auto___183450,out))
);
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__14669__auto___183609 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14669__auto___183609,out){
return (function (){var f__14670__auto__ = (function (){var switch__14613__auto__ = ((function (c__14669__auto___183609,out){
return (function (state_183579){var state_val_183580 = (state_183579[(1)]);if((state_val_183580 === (7)))
{var inst_183575 = (state_183579[(2)]);var state_183579__$1 = state_183579;var statearr_183581_183610 = state_183579__$1;(statearr_183581_183610[(2)] = inst_183575);
(statearr_183581_183610[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_183580 === (1)))
{var inst_183538 = [];var inst_183539 = inst_183538;var inst_183540 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_183579__$1 = (function (){var statearr_183582 = state_183579;(statearr_183582[(7)] = inst_183540);
(statearr_183582[(8)] = inst_183539);
return statearr_183582;
})();var statearr_183583_183611 = state_183579__$1;(statearr_183583_183611[(2)] = null);
(statearr_183583_183611[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_183580 === (4)))
{var inst_183543 = (state_183579[(9)]);var inst_183543__$1 = (state_183579[(2)]);var inst_183544 = (inst_183543__$1 == null);var inst_183545 = cljs.core.not.call(null,inst_183544);var state_183579__$1 = (function (){var statearr_183584 = state_183579;(statearr_183584[(9)] = inst_183543__$1);
return statearr_183584;
})();if(inst_183545)
{var statearr_183585_183612 = state_183579__$1;(statearr_183585_183612[(1)] = (5));
} else
{var statearr_183586_183613 = state_183579__$1;(statearr_183586_183613[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_183580 === (15)))
{var inst_183569 = (state_183579[(2)]);var state_183579__$1 = state_183579;var statearr_183587_183614 = state_183579__$1;(statearr_183587_183614[(2)] = inst_183569);
(statearr_183587_183614[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_183580 === (13)))
{var state_183579__$1 = state_183579;var statearr_183588_183615 = state_183579__$1;(statearr_183588_183615[(2)] = null);
(statearr_183588_183615[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_183580 === (6)))
{var inst_183539 = (state_183579[(8)]);var inst_183564 = inst_183539.length;var inst_183565 = (inst_183564 > (0));var state_183579__$1 = state_183579;if(cljs.core.truth_(inst_183565))
{var statearr_183589_183616 = state_183579__$1;(statearr_183589_183616[(1)] = (12));
} else
{var statearr_183590_183617 = state_183579__$1;(statearr_183590_183617[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_183580 === (3)))
{var inst_183577 = (state_183579[(2)]);var state_183579__$1 = state_183579;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_183579__$1,inst_183577);
} else
{if((state_val_183580 === (12)))
{var inst_183539 = (state_183579[(8)]);var inst_183567 = cljs.core.vec.call(null,inst_183539);var state_183579__$1 = state_183579;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_183579__$1,(15),out,inst_183567);
} else
{if((state_val_183580 === (2)))
{var state_183579__$1 = state_183579;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_183579__$1,(4),ch);
} else
{if((state_val_183580 === (11)))
{var inst_183547 = (state_183579[(10)]);var inst_183543 = (state_183579[(9)]);var inst_183557 = (state_183579[(2)]);var inst_183558 = [];var inst_183559 = inst_183558.push(inst_183543);var inst_183539 = inst_183558;var inst_183540 = inst_183547;var state_183579__$1 = (function (){var statearr_183591 = state_183579;(statearr_183591[(7)] = inst_183540);
(statearr_183591[(11)] = inst_183557);
(statearr_183591[(8)] = inst_183539);
(statearr_183591[(12)] = inst_183559);
return statearr_183591;
})();var statearr_183592_183618 = state_183579__$1;(statearr_183592_183618[(2)] = null);
(statearr_183592_183618[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_183580 === (9)))
{var inst_183539 = (state_183579[(8)]);var inst_183555 = cljs.core.vec.call(null,inst_183539);var state_183579__$1 = state_183579;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_183579__$1,(11),out,inst_183555);
} else
{if((state_val_183580 === (5)))
{var inst_183547 = (state_183579[(10)]);var inst_183540 = (state_183579[(7)]);var inst_183543 = (state_183579[(9)]);var inst_183547__$1 = f.call(null,inst_183543);var inst_183548 = cljs.core._EQ_.call(null,inst_183547__$1,inst_183540);var inst_183549 = cljs.core.keyword_identical_QMARK_.call(null,inst_183540,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_183550 = (inst_183548) || (inst_183549);var state_183579__$1 = (function (){var statearr_183593 = state_183579;(statearr_183593[(10)] = inst_183547__$1);
return statearr_183593;
})();if(cljs.core.truth_(inst_183550))
{var statearr_183594_183619 = state_183579__$1;(statearr_183594_183619[(1)] = (8));
} else
{var statearr_183595_183620 = state_183579__$1;(statearr_183595_183620[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_183580 === (14)))
{var inst_183572 = (state_183579[(2)]);var inst_183573 = cljs.core.async.close_BANG_.call(null,out);var state_183579__$1 = (function (){var statearr_183597 = state_183579;(statearr_183597[(13)] = inst_183572);
return statearr_183597;
})();var statearr_183598_183621 = state_183579__$1;(statearr_183598_183621[(2)] = inst_183573);
(statearr_183598_183621[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_183580 === (10)))
{var inst_183562 = (state_183579[(2)]);var state_183579__$1 = state_183579;var statearr_183599_183622 = state_183579__$1;(statearr_183599_183622[(2)] = inst_183562);
(statearr_183599_183622[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_183580 === (8)))
{var inst_183547 = (state_183579[(10)]);var inst_183539 = (state_183579[(8)]);var inst_183543 = (state_183579[(9)]);var inst_183552 = inst_183539.push(inst_183543);var tmp183596 = inst_183539;var inst_183539__$1 = tmp183596;var inst_183540 = inst_183547;var state_183579__$1 = (function (){var statearr_183600 = state_183579;(statearr_183600[(7)] = inst_183540);
(statearr_183600[(8)] = inst_183539__$1);
(statearr_183600[(14)] = inst_183552);
return statearr_183600;
})();var statearr_183601_183623 = state_183579__$1;(statearr_183601_183623[(2)] = null);
(statearr_183601_183623[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__14669__auto___183609,out))
;return ((function (switch__14613__auto__,c__14669__auto___183609,out){
return (function() {
var state_machine__14614__auto__ = null;
var state_machine__14614__auto____0 = (function (){var statearr_183605 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_183605[(0)] = state_machine__14614__auto__);
(statearr_183605[(1)] = (1));
return statearr_183605;
});
var state_machine__14614__auto____1 = (function (state_183579){while(true){
var ret_value__14615__auto__ = (function (){try{while(true){
var result__14616__auto__ = switch__14613__auto__.call(null,state_183579);if(cljs.core.keyword_identical_QMARK_.call(null,result__14616__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__14616__auto__;
}
break;
}
}catch (e183606){if((e183606 instanceof Object))
{var ex__14617__auto__ = e183606;var statearr_183607_183624 = state_183579;(statearr_183607_183624[(5)] = ex__14617__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_183579);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e183606;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__183625 = state_183579;
state_183579 = G__183625;
continue;
}
} else
{return ret_value__14615__auto__;
}
break;
}
});
state_machine__14614__auto__ = function(state_183579){
switch(arguments.length){
case 0:
return state_machine__14614__auto____0.call(this);
case 1:
return state_machine__14614__auto____1.call(this,state_183579);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14614__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14614__auto____0;
state_machine__14614__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14614__auto____1;
return state_machine__14614__auto__;
})()
;})(switch__14613__auto__,c__14669__auto___183609,out))
})();var state__14671__auto__ = (function (){var statearr_183608 = f__14670__auto__.call(null);(statearr_183608[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14669__auto___183609);
return statearr_183608;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14671__auto__);
});})(c__14669__auto___183609,out))
);
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

//# sourceMappingURL=async.js.map