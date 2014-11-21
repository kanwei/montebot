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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t17481 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t17481 = (function (f,fn_handler,meta17482){
this.f = f;
this.fn_handler = fn_handler;
this.meta17482 = meta17482;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17481.cljs$lang$type = true;
cljs.core.async.t17481.cljs$lang$ctorStr = "cljs.core.async/t17481";
cljs.core.async.t17481.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t17481");
});
cljs.core.async.t17481.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t17481.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t17481.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t17481.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17483){var self__ = this;
var _17483__$1 = this;return self__.meta17482;
});
cljs.core.async.t17481.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17483,meta17482__$1){var self__ = this;
var _17483__$1 = this;return (new cljs.core.async.t17481(self__.f,self__.fn_handler,meta17482__$1));
});
cljs.core.async.__GT_t17481 = (function __GT_t17481(f__$1,fn_handler__$1,meta17482){return (new cljs.core.async.t17481(f__$1,fn_handler__$1,meta17482));
});
}
return (new cljs.core.async.t17481(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__17485 = buff;if(G__17485)
{var bit__4304__auto__ = null;if(cljs.core.truth_((function (){var or__3640__auto__ = bit__4304__auto__;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return G__17485.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__17485.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__17485);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__17485);
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
{var val_17486 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_17486);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_17486,ret){
return (function (){return fn1.call(null,val_17486);
});})(val_17486,ret))
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4510__auto___17487 = n;var x_17488 = (0);while(true){
if((x_17488 < n__4510__auto___17487))
{(a[x_17488] = (0));
{
var G__17489 = (x_17488 + (1));
x_17488 = G__17489;
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
var G__17490 = (i + (1));
i = G__17490;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t17494 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t17494 = (function (flag,alt_flag,meta17495){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta17495 = meta17495;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17494.cljs$lang$type = true;
cljs.core.async.t17494.cljs$lang$ctorStr = "cljs.core.async/t17494";
cljs.core.async.t17494.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t17494");
});})(flag))
;
cljs.core.async.t17494.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t17494.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t17494.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t17494.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_17496){var self__ = this;
var _17496__$1 = this;return self__.meta17495;
});})(flag))
;
cljs.core.async.t17494.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_17496,meta17495__$1){var self__ = this;
var _17496__$1 = this;return (new cljs.core.async.t17494(self__.flag,self__.alt_flag,meta17495__$1));
});})(flag))
;
cljs.core.async.__GT_t17494 = ((function (flag){
return (function __GT_t17494(flag__$1,alt_flag__$1,meta17495){return (new cljs.core.async.t17494(flag__$1,alt_flag__$1,meta17495));
});})(flag))
;
}
return (new cljs.core.async.t17494(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t17500 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t17500 = (function (cb,flag,alt_handler,meta17501){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta17501 = meta17501;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17500.cljs$lang$type = true;
cljs.core.async.t17500.cljs$lang$ctorStr = "cljs.core.async/t17500";
cljs.core.async.t17500.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t17500");
});
cljs.core.async.t17500.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t17500.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t17500.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t17500.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17502){var self__ = this;
var _17502__$1 = this;return self__.meta17501;
});
cljs.core.async.t17500.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17502,meta17501__$1){var self__ = this;
var _17502__$1 = this;return (new cljs.core.async.t17500(self__.cb,self__.flag,self__.alt_handler,meta17501__$1));
});
cljs.core.async.__GT_t17500 = (function __GT_t17500(cb__$1,flag__$1,alt_handler__$1,meta17501){return (new cljs.core.async.t17500(cb__$1,flag__$1,alt_handler__$1,meta17501));
});
}
return (new cljs.core.async.t17500(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__17503_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17503_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__17504_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17504_SHARP_,port], null));
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
var G__17505 = (i + (1));
i = G__17505;
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
var alts_BANG___delegate = function (ports,p__17506){var map__17508 = p__17506;var map__17508__$1 = ((cljs.core.seq_QMARK_.call(null,map__17508))?cljs.core.apply.call(null,cljs.core.hash_map,map__17508):map__17508);var opts = map__17508__$1;throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__17506 = null;if (arguments.length > 1) {
  p__17506 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__17506);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__17509){
var ports = cljs.core.first(arglist__17509);
var p__17506 = cljs.core.rest(arglist__17509);
return alts_BANG___delegate(ports,p__17506);
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
var pipe__3 = (function (from,to,close_QMARK_){var c__14669__auto___17604 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14669__auto___17604){
return (function (){var f__14670__auto__ = (function (){var switch__14613__auto__ = ((function (c__14669__auto___17604){
return (function (state_17580){var state_val_17581 = (state_17580[(1)]);if((state_val_17581 === (7)))
{var inst_17576 = (state_17580[(2)]);var state_17580__$1 = state_17580;var statearr_17582_17605 = state_17580__$1;(statearr_17582_17605[(2)] = inst_17576);
(statearr_17582_17605[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17581 === (1)))
{var state_17580__$1 = state_17580;var statearr_17583_17606 = state_17580__$1;(statearr_17583_17606[(2)] = null);
(statearr_17583_17606[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17581 === (4)))
{var inst_17559 = (state_17580[(7)]);var inst_17559__$1 = (state_17580[(2)]);var inst_17560 = (inst_17559__$1 == null);var state_17580__$1 = (function (){var statearr_17584 = state_17580;(statearr_17584[(7)] = inst_17559__$1);
return statearr_17584;
})();if(cljs.core.truth_(inst_17560))
{var statearr_17585_17607 = state_17580__$1;(statearr_17585_17607[(1)] = (5));
} else
{var statearr_17586_17608 = state_17580__$1;(statearr_17586_17608[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17581 === (13)))
{var state_17580__$1 = state_17580;var statearr_17587_17609 = state_17580__$1;(statearr_17587_17609[(2)] = null);
(statearr_17587_17609[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17581 === (6)))
{var inst_17559 = (state_17580[(7)]);var state_17580__$1 = state_17580;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17580__$1,(11),to,inst_17559);
} else
{if((state_val_17581 === (3)))
{var inst_17578 = (state_17580[(2)]);var state_17580__$1 = state_17580;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17580__$1,inst_17578);
} else
{if((state_val_17581 === (12)))
{var state_17580__$1 = state_17580;var statearr_17588_17610 = state_17580__$1;(statearr_17588_17610[(2)] = null);
(statearr_17588_17610[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17581 === (2)))
{var state_17580__$1 = state_17580;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17580__$1,(4),from);
} else
{if((state_val_17581 === (11)))
{var inst_17569 = (state_17580[(2)]);var state_17580__$1 = state_17580;if(cljs.core.truth_(inst_17569))
{var statearr_17589_17611 = state_17580__$1;(statearr_17589_17611[(1)] = (12));
} else
{var statearr_17590_17612 = state_17580__$1;(statearr_17590_17612[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17581 === (9)))
{var state_17580__$1 = state_17580;var statearr_17591_17613 = state_17580__$1;(statearr_17591_17613[(2)] = null);
(statearr_17591_17613[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17581 === (5)))
{var state_17580__$1 = state_17580;if(cljs.core.truth_(close_QMARK_))
{var statearr_17592_17614 = state_17580__$1;(statearr_17592_17614[(1)] = (8));
} else
{var statearr_17593_17615 = state_17580__$1;(statearr_17593_17615[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17581 === (14)))
{var inst_17574 = (state_17580[(2)]);var state_17580__$1 = state_17580;var statearr_17594_17616 = state_17580__$1;(statearr_17594_17616[(2)] = inst_17574);
(statearr_17594_17616[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17581 === (10)))
{var inst_17566 = (state_17580[(2)]);var state_17580__$1 = state_17580;var statearr_17595_17617 = state_17580__$1;(statearr_17595_17617[(2)] = inst_17566);
(statearr_17595_17617[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17581 === (8)))
{var inst_17563 = cljs.core.async.close_BANG_.call(null,to);var state_17580__$1 = state_17580;var statearr_17596_17618 = state_17580__$1;(statearr_17596_17618[(2)] = inst_17563);
(statearr_17596_17618[(1)] = (10));
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
});})(c__14669__auto___17604))
;return ((function (switch__14613__auto__,c__14669__auto___17604){
return (function() {
var state_machine__14614__auto__ = null;
var state_machine__14614__auto____0 = (function (){var statearr_17600 = [null,null,null,null,null,null,null,null];(statearr_17600[(0)] = state_machine__14614__auto__);
(statearr_17600[(1)] = (1));
return statearr_17600;
});
var state_machine__14614__auto____1 = (function (state_17580){while(true){
var ret_value__14615__auto__ = (function (){try{while(true){
var result__14616__auto__ = switch__14613__auto__.call(null,state_17580);if(cljs.core.keyword_identical_QMARK_.call(null,result__14616__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__14616__auto__;
}
break;
}
}catch (e17601){if((e17601 instanceof Object))
{var ex__14617__auto__ = e17601;var statearr_17602_17619 = state_17580;(statearr_17602_17619[(5)] = ex__14617__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17580);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e17601;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17620 = state_17580;
state_17580 = G__17620;
continue;
}
} else
{return ret_value__14615__auto__;
}
break;
}
});
state_machine__14614__auto__ = function(state_17580){
switch(arguments.length){
case 0:
return state_machine__14614__auto____0.call(this);
case 1:
return state_machine__14614__auto____1.call(this,state_17580);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14614__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14614__auto____0;
state_machine__14614__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14614__auto____1;
return state_machine__14614__auto__;
})()
;})(switch__14613__auto__,c__14669__auto___17604))
})();var state__14671__auto__ = (function (){var statearr_17603 = f__14670__auto__.call(null);(statearr_17603[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14669__auto___17604);
return statearr_17603;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14671__auto__);
});})(c__14669__auto___17604))
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
return (function (p__17804){var vec__17805 = p__17804;var v = cljs.core.nth.call(null,vec__17805,(0),null);var p = cljs.core.nth.call(null,vec__17805,(1),null);var job = vec__17805;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);var c__14669__auto___17987 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14669__auto___17987,res,vec__17805,v,p,job,jobs,results){
return (function (){var f__14670__auto__ = (function (){var switch__14613__auto__ = ((function (c__14669__auto___17987,res,vec__17805,v,p,job,jobs,results){
return (function (state_17810){var state_val_17811 = (state_17810[(1)]);if((state_val_17811 === (2)))
{var inst_17807 = (state_17810[(2)]);var inst_17808 = cljs.core.async.close_BANG_.call(null,res);var state_17810__$1 = (function (){var statearr_17812 = state_17810;(statearr_17812[(7)] = inst_17807);
return statearr_17812;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17810__$1,inst_17808);
} else
{if((state_val_17811 === (1)))
{var state_17810__$1 = state_17810;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17810__$1,(2),res,v);
} else
{return null;
}
}
});})(c__14669__auto___17987,res,vec__17805,v,p,job,jobs,results))
;return ((function (switch__14613__auto__,c__14669__auto___17987,res,vec__17805,v,p,job,jobs,results){
return (function() {
var state_machine__14614__auto__ = null;
var state_machine__14614__auto____0 = (function (){var statearr_17816 = [null,null,null,null,null,null,null,null];(statearr_17816[(0)] = state_machine__14614__auto__);
(statearr_17816[(1)] = (1));
return statearr_17816;
});
var state_machine__14614__auto____1 = (function (state_17810){while(true){
var ret_value__14615__auto__ = (function (){try{while(true){
var result__14616__auto__ = switch__14613__auto__.call(null,state_17810);if(cljs.core.keyword_identical_QMARK_.call(null,result__14616__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__14616__auto__;
}
break;
}
}catch (e17817){if((e17817 instanceof Object))
{var ex__14617__auto__ = e17817;var statearr_17818_17988 = state_17810;(statearr_17818_17988[(5)] = ex__14617__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17810);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e17817;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17989 = state_17810;
state_17810 = G__17989;
continue;
}
} else
{return ret_value__14615__auto__;
}
break;
}
});
state_machine__14614__auto__ = function(state_17810){
switch(arguments.length){
case 0:
return state_machine__14614__auto____0.call(this);
case 1:
return state_machine__14614__auto____1.call(this,state_17810);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14614__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14614__auto____0;
state_machine__14614__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14614__auto____1;
return state_machine__14614__auto__;
})()
;})(switch__14613__auto__,c__14669__auto___17987,res,vec__17805,v,p,job,jobs,results))
})();var state__14671__auto__ = (function (){var statearr_17819 = f__14670__auto__.call(null);(statearr_17819[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14669__auto___17987);
return statearr_17819;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14671__auto__);
});})(c__14669__auto___17987,res,vec__17805,v,p,job,jobs,results))
);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results))
;var async = ((function (jobs,results,process){
return (function (p__17820){var vec__17821 = p__17820;var v = cljs.core.nth.call(null,vec__17821,(0),null);var p = cljs.core.nth.call(null,vec__17821,(1),null);var job = vec__17821;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1));xf.call(null,v,res);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results,process))
;var n__4510__auto___17990 = n;var __17991 = (0);while(true){
if((__17991 < n__4510__auto___17990))
{var G__17822_17992 = (((type instanceof cljs.core.Keyword))?type.fqn:null);switch (G__17822_17992) {
case "async":
var c__14669__auto___17994 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__17991,c__14669__auto___17994,G__17822_17992,n__4510__auto___17990,jobs,results,process,async){
return (function (){var f__14670__auto__ = (function (){var switch__14613__auto__ = ((function (__17991,c__14669__auto___17994,G__17822_17992,n__4510__auto___17990,jobs,results,process,async){
return (function (state_17835){var state_val_17836 = (state_17835[(1)]);if((state_val_17836 === (7)))
{var inst_17831 = (state_17835[(2)]);var state_17835__$1 = state_17835;var statearr_17837_17995 = state_17835__$1;(statearr_17837_17995[(2)] = inst_17831);
(statearr_17837_17995[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17836 === (6)))
{var state_17835__$1 = state_17835;var statearr_17838_17996 = state_17835__$1;(statearr_17838_17996[(2)] = null);
(statearr_17838_17996[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17836 === (5)))
{var state_17835__$1 = state_17835;var statearr_17839_17997 = state_17835__$1;(statearr_17839_17997[(2)] = null);
(statearr_17839_17997[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17836 === (4)))
{var inst_17825 = (state_17835[(2)]);var inst_17826 = async.call(null,inst_17825);var state_17835__$1 = state_17835;if(cljs.core.truth_(inst_17826))
{var statearr_17840_17998 = state_17835__$1;(statearr_17840_17998[(1)] = (5));
} else
{var statearr_17841_17999 = state_17835__$1;(statearr_17841_17999[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17836 === (3)))
{var inst_17833 = (state_17835[(2)]);var state_17835__$1 = state_17835;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17835__$1,inst_17833);
} else
{if((state_val_17836 === (2)))
{var state_17835__$1 = state_17835;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17835__$1,(4),jobs);
} else
{if((state_val_17836 === (1)))
{var state_17835__$1 = state_17835;var statearr_17842_18000 = state_17835__$1;(statearr_17842_18000[(2)] = null);
(statearr_17842_18000[(1)] = (2));
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
});})(__17991,c__14669__auto___17994,G__17822_17992,n__4510__auto___17990,jobs,results,process,async))
;return ((function (__17991,switch__14613__auto__,c__14669__auto___17994,G__17822_17992,n__4510__auto___17990,jobs,results,process,async){
return (function() {
var state_machine__14614__auto__ = null;
var state_machine__14614__auto____0 = (function (){var statearr_17846 = [null,null,null,null,null,null,null];(statearr_17846[(0)] = state_machine__14614__auto__);
(statearr_17846[(1)] = (1));
return statearr_17846;
});
var state_machine__14614__auto____1 = (function (state_17835){while(true){
var ret_value__14615__auto__ = (function (){try{while(true){
var result__14616__auto__ = switch__14613__auto__.call(null,state_17835);if(cljs.core.keyword_identical_QMARK_.call(null,result__14616__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__14616__auto__;
}
break;
}
}catch (e17847){if((e17847 instanceof Object))
{var ex__14617__auto__ = e17847;var statearr_17848_18001 = state_17835;(statearr_17848_18001[(5)] = ex__14617__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17835);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e17847;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__18002 = state_17835;
state_17835 = G__18002;
continue;
}
} else
{return ret_value__14615__auto__;
}
break;
}
});
state_machine__14614__auto__ = function(state_17835){
switch(arguments.length){
case 0:
return state_machine__14614__auto____0.call(this);
case 1:
return state_machine__14614__auto____1.call(this,state_17835);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14614__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14614__auto____0;
state_machine__14614__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14614__auto____1;
return state_machine__14614__auto__;
})()
;})(__17991,switch__14613__auto__,c__14669__auto___17994,G__17822_17992,n__4510__auto___17990,jobs,results,process,async))
})();var state__14671__auto__ = (function (){var statearr_17849 = f__14670__auto__.call(null);(statearr_17849[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14669__auto___17994);
return statearr_17849;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14671__auto__);
});})(__17991,c__14669__auto___17994,G__17822_17992,n__4510__auto___17990,jobs,results,process,async))
);

break;
case "compute":
var c__14669__auto___18003 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__17991,c__14669__auto___18003,G__17822_17992,n__4510__auto___17990,jobs,results,process,async){
return (function (){var f__14670__auto__ = (function (){var switch__14613__auto__ = ((function (__17991,c__14669__auto___18003,G__17822_17992,n__4510__auto___17990,jobs,results,process,async){
return (function (state_17862){var state_val_17863 = (state_17862[(1)]);if((state_val_17863 === (7)))
{var inst_17858 = (state_17862[(2)]);var state_17862__$1 = state_17862;var statearr_17864_18004 = state_17862__$1;(statearr_17864_18004[(2)] = inst_17858);
(statearr_17864_18004[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17863 === (6)))
{var state_17862__$1 = state_17862;var statearr_17865_18005 = state_17862__$1;(statearr_17865_18005[(2)] = null);
(statearr_17865_18005[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17863 === (5)))
{var state_17862__$1 = state_17862;var statearr_17866_18006 = state_17862__$1;(statearr_17866_18006[(2)] = null);
(statearr_17866_18006[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17863 === (4)))
{var inst_17852 = (state_17862[(2)]);var inst_17853 = process.call(null,inst_17852);var state_17862__$1 = state_17862;if(cljs.core.truth_(inst_17853))
{var statearr_17867_18007 = state_17862__$1;(statearr_17867_18007[(1)] = (5));
} else
{var statearr_17868_18008 = state_17862__$1;(statearr_17868_18008[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17863 === (3)))
{var inst_17860 = (state_17862[(2)]);var state_17862__$1 = state_17862;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17862__$1,inst_17860);
} else
{if((state_val_17863 === (2)))
{var state_17862__$1 = state_17862;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17862__$1,(4),jobs);
} else
{if((state_val_17863 === (1)))
{var state_17862__$1 = state_17862;var statearr_17869_18009 = state_17862__$1;(statearr_17869_18009[(2)] = null);
(statearr_17869_18009[(1)] = (2));
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
});})(__17991,c__14669__auto___18003,G__17822_17992,n__4510__auto___17990,jobs,results,process,async))
;return ((function (__17991,switch__14613__auto__,c__14669__auto___18003,G__17822_17992,n__4510__auto___17990,jobs,results,process,async){
return (function() {
var state_machine__14614__auto__ = null;
var state_machine__14614__auto____0 = (function (){var statearr_17873 = [null,null,null,null,null,null,null];(statearr_17873[(0)] = state_machine__14614__auto__);
(statearr_17873[(1)] = (1));
return statearr_17873;
});
var state_machine__14614__auto____1 = (function (state_17862){while(true){
var ret_value__14615__auto__ = (function (){try{while(true){
var result__14616__auto__ = switch__14613__auto__.call(null,state_17862);if(cljs.core.keyword_identical_QMARK_.call(null,result__14616__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__14616__auto__;
}
break;
}
}catch (e17874){if((e17874 instanceof Object))
{var ex__14617__auto__ = e17874;var statearr_17875_18010 = state_17862;(statearr_17875_18010[(5)] = ex__14617__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17862);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e17874;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__18011 = state_17862;
state_17862 = G__18011;
continue;
}
} else
{return ret_value__14615__auto__;
}
break;
}
});
state_machine__14614__auto__ = function(state_17862){
switch(arguments.length){
case 0:
return state_machine__14614__auto____0.call(this);
case 1:
return state_machine__14614__auto____1.call(this,state_17862);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14614__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14614__auto____0;
state_machine__14614__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14614__auto____1;
return state_machine__14614__auto__;
})()
;})(__17991,switch__14613__auto__,c__14669__auto___18003,G__17822_17992,n__4510__auto___17990,jobs,results,process,async))
})();var state__14671__auto__ = (function (){var statearr_17876 = f__14670__auto__.call(null);(statearr_17876[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14669__auto___18003);
return statearr_17876;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14671__auto__);
});})(__17991,c__14669__auto___18003,G__17822_17992,n__4510__auto___17990,jobs,results,process,async))
);

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type))));

}
{
var G__18012 = (__17991 + (1));
__17991 = G__18012;
continue;
}
} else
{}
break;
}
var c__14669__auto___18013 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14669__auto___18013,jobs,results,process,async){
return (function (){var f__14670__auto__ = (function (){var switch__14613__auto__ = ((function (c__14669__auto___18013,jobs,results,process,async){
return (function (state_17898){var state_val_17899 = (state_17898[(1)]);if((state_val_17899 === (9)))
{var inst_17891 = (state_17898[(2)]);var state_17898__$1 = (function (){var statearr_17900 = state_17898;(statearr_17900[(7)] = inst_17891);
return statearr_17900;
})();var statearr_17901_18014 = state_17898__$1;(statearr_17901_18014[(2)] = null);
(statearr_17901_18014[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17899 === (8)))
{var inst_17884 = (state_17898[(8)]);var inst_17889 = (state_17898[(2)]);var state_17898__$1 = (function (){var statearr_17902 = state_17898;(statearr_17902[(9)] = inst_17889);
return statearr_17902;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17898__$1,(9),results,inst_17884);
} else
{if((state_val_17899 === (7)))
{var inst_17894 = (state_17898[(2)]);var state_17898__$1 = state_17898;var statearr_17903_18015 = state_17898__$1;(statearr_17903_18015[(2)] = inst_17894);
(statearr_17903_18015[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17899 === (6)))
{var inst_17879 = (state_17898[(10)]);var inst_17884 = (state_17898[(8)]);var inst_17884__$1 = cljs.core.async.chan.call(null,(1));var inst_17885 = cljs.core.PersistentVector.EMPTY_NODE;var inst_17886 = [inst_17879,inst_17884__$1];var inst_17887 = (new cljs.core.PersistentVector(null,2,(5),inst_17885,inst_17886,null));var state_17898__$1 = (function (){var statearr_17904 = state_17898;(statearr_17904[(8)] = inst_17884__$1);
return statearr_17904;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17898__$1,(8),jobs,inst_17887);
} else
{if((state_val_17899 === (5)))
{var inst_17882 = cljs.core.async.close_BANG_.call(null,jobs);var state_17898__$1 = state_17898;var statearr_17905_18016 = state_17898__$1;(statearr_17905_18016[(2)] = inst_17882);
(statearr_17905_18016[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17899 === (4)))
{var inst_17879 = (state_17898[(10)]);var inst_17879__$1 = (state_17898[(2)]);var inst_17880 = (inst_17879__$1 == null);var state_17898__$1 = (function (){var statearr_17906 = state_17898;(statearr_17906[(10)] = inst_17879__$1);
return statearr_17906;
})();if(cljs.core.truth_(inst_17880))
{var statearr_17907_18017 = state_17898__$1;(statearr_17907_18017[(1)] = (5));
} else
{var statearr_17908_18018 = state_17898__$1;(statearr_17908_18018[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17899 === (3)))
{var inst_17896 = (state_17898[(2)]);var state_17898__$1 = state_17898;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17898__$1,inst_17896);
} else
{if((state_val_17899 === (2)))
{var state_17898__$1 = state_17898;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17898__$1,(4),from);
} else
{if((state_val_17899 === (1)))
{var state_17898__$1 = state_17898;var statearr_17909_18019 = state_17898__$1;(statearr_17909_18019[(2)] = null);
(statearr_17909_18019[(1)] = (2));
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
});})(c__14669__auto___18013,jobs,results,process,async))
;return ((function (switch__14613__auto__,c__14669__auto___18013,jobs,results,process,async){
return (function() {
var state_machine__14614__auto__ = null;
var state_machine__14614__auto____0 = (function (){var statearr_17913 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_17913[(0)] = state_machine__14614__auto__);
(statearr_17913[(1)] = (1));
return statearr_17913;
});
var state_machine__14614__auto____1 = (function (state_17898){while(true){
var ret_value__14615__auto__ = (function (){try{while(true){
var result__14616__auto__ = switch__14613__auto__.call(null,state_17898);if(cljs.core.keyword_identical_QMARK_.call(null,result__14616__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__14616__auto__;
}
break;
}
}catch (e17914){if((e17914 instanceof Object))
{var ex__14617__auto__ = e17914;var statearr_17915_18020 = state_17898;(statearr_17915_18020[(5)] = ex__14617__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17898);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e17914;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__18021 = state_17898;
state_17898 = G__18021;
continue;
}
} else
{return ret_value__14615__auto__;
}
break;
}
});
state_machine__14614__auto__ = function(state_17898){
switch(arguments.length){
case 0:
return state_machine__14614__auto____0.call(this);
case 1:
return state_machine__14614__auto____1.call(this,state_17898);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14614__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14614__auto____0;
state_machine__14614__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14614__auto____1;
return state_machine__14614__auto__;
})()
;})(switch__14613__auto__,c__14669__auto___18013,jobs,results,process,async))
})();var state__14671__auto__ = (function (){var statearr_17916 = f__14670__auto__.call(null);(statearr_17916[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14669__auto___18013);
return statearr_17916;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14671__auto__);
});})(c__14669__auto___18013,jobs,results,process,async))
);
var c__14669__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14669__auto__,jobs,results,process,async){
return (function (){var f__14670__auto__ = (function (){var switch__14613__auto__ = ((function (c__14669__auto__,jobs,results,process,async){
return (function (state_17954){var state_val_17955 = (state_17954[(1)]);if((state_val_17955 === (7)))
{var inst_17950 = (state_17954[(2)]);var state_17954__$1 = state_17954;var statearr_17956_18022 = state_17954__$1;(statearr_17956_18022[(2)] = inst_17950);
(statearr_17956_18022[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17955 === (20)))
{var state_17954__$1 = state_17954;var statearr_17957_18023 = state_17954__$1;(statearr_17957_18023[(2)] = null);
(statearr_17957_18023[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17955 === (1)))
{var state_17954__$1 = state_17954;var statearr_17958_18024 = state_17954__$1;(statearr_17958_18024[(2)] = null);
(statearr_17958_18024[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17955 === (4)))
{var inst_17919 = (state_17954[(7)]);var inst_17919__$1 = (state_17954[(2)]);var inst_17920 = (inst_17919__$1 == null);var state_17954__$1 = (function (){var statearr_17959 = state_17954;(statearr_17959[(7)] = inst_17919__$1);
return statearr_17959;
})();if(cljs.core.truth_(inst_17920))
{var statearr_17960_18025 = state_17954__$1;(statearr_17960_18025[(1)] = (5));
} else
{var statearr_17961_18026 = state_17954__$1;(statearr_17961_18026[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17955 === (15)))
{var inst_17932 = (state_17954[(8)]);var state_17954__$1 = state_17954;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17954__$1,(18),to,inst_17932);
} else
{if((state_val_17955 === (21)))
{var inst_17945 = (state_17954[(2)]);var state_17954__$1 = state_17954;var statearr_17962_18027 = state_17954__$1;(statearr_17962_18027[(2)] = inst_17945);
(statearr_17962_18027[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17955 === (13)))
{var inst_17947 = (state_17954[(2)]);var state_17954__$1 = (function (){var statearr_17963 = state_17954;(statearr_17963[(9)] = inst_17947);
return statearr_17963;
})();var statearr_17964_18028 = state_17954__$1;(statearr_17964_18028[(2)] = null);
(statearr_17964_18028[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17955 === (6)))
{var inst_17919 = (state_17954[(7)]);var state_17954__$1 = state_17954;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17954__$1,(11),inst_17919);
} else
{if((state_val_17955 === (17)))
{var inst_17940 = (state_17954[(2)]);var state_17954__$1 = state_17954;if(cljs.core.truth_(inst_17940))
{var statearr_17965_18029 = state_17954__$1;(statearr_17965_18029[(1)] = (19));
} else
{var statearr_17966_18030 = state_17954__$1;(statearr_17966_18030[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17955 === (3)))
{var inst_17952 = (state_17954[(2)]);var state_17954__$1 = state_17954;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17954__$1,inst_17952);
} else
{if((state_val_17955 === (12)))
{var inst_17929 = (state_17954[(10)]);var state_17954__$1 = state_17954;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17954__$1,(14),inst_17929);
} else
{if((state_val_17955 === (2)))
{var state_17954__$1 = state_17954;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17954__$1,(4),results);
} else
{if((state_val_17955 === (19)))
{var state_17954__$1 = state_17954;var statearr_17967_18031 = state_17954__$1;(statearr_17967_18031[(2)] = null);
(statearr_17967_18031[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17955 === (11)))
{var inst_17929 = (state_17954[(2)]);var state_17954__$1 = (function (){var statearr_17968 = state_17954;(statearr_17968[(10)] = inst_17929);
return statearr_17968;
})();var statearr_17969_18032 = state_17954__$1;(statearr_17969_18032[(2)] = null);
(statearr_17969_18032[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17955 === (9)))
{var state_17954__$1 = state_17954;var statearr_17970_18033 = state_17954__$1;(statearr_17970_18033[(2)] = null);
(statearr_17970_18033[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17955 === (5)))
{var state_17954__$1 = state_17954;if(cljs.core.truth_(close_QMARK_))
{var statearr_17971_18034 = state_17954__$1;(statearr_17971_18034[(1)] = (8));
} else
{var statearr_17972_18035 = state_17954__$1;(statearr_17972_18035[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17955 === (14)))
{var inst_17932 = (state_17954[(8)]);var inst_17934 = (state_17954[(11)]);var inst_17932__$1 = (state_17954[(2)]);var inst_17933 = (inst_17932__$1 == null);var inst_17934__$1 = cljs.core.not.call(null,inst_17933);var state_17954__$1 = (function (){var statearr_17973 = state_17954;(statearr_17973[(8)] = inst_17932__$1);
(statearr_17973[(11)] = inst_17934__$1);
return statearr_17973;
})();if(inst_17934__$1)
{var statearr_17974_18036 = state_17954__$1;(statearr_17974_18036[(1)] = (15));
} else
{var statearr_17975_18037 = state_17954__$1;(statearr_17975_18037[(1)] = (16));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17955 === (16)))
{var inst_17934 = (state_17954[(11)]);var state_17954__$1 = state_17954;var statearr_17976_18038 = state_17954__$1;(statearr_17976_18038[(2)] = inst_17934);
(statearr_17976_18038[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17955 === (10)))
{var inst_17926 = (state_17954[(2)]);var state_17954__$1 = state_17954;var statearr_17977_18039 = state_17954__$1;(statearr_17977_18039[(2)] = inst_17926);
(statearr_17977_18039[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17955 === (18)))
{var inst_17937 = (state_17954[(2)]);var state_17954__$1 = state_17954;var statearr_17978_18040 = state_17954__$1;(statearr_17978_18040[(2)] = inst_17937);
(statearr_17978_18040[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17955 === (8)))
{var inst_17923 = cljs.core.async.close_BANG_.call(null,to);var state_17954__$1 = state_17954;var statearr_17979_18041 = state_17954__$1;(statearr_17979_18041[(2)] = inst_17923);
(statearr_17979_18041[(1)] = (10));
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
var state_machine__14614__auto____0 = (function (){var statearr_17983 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17983[(0)] = state_machine__14614__auto__);
(statearr_17983[(1)] = (1));
return statearr_17983;
});
var state_machine__14614__auto____1 = (function (state_17954){while(true){
var ret_value__14615__auto__ = (function (){try{while(true){
var result__14616__auto__ = switch__14613__auto__.call(null,state_17954);if(cljs.core.keyword_identical_QMARK_.call(null,result__14616__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__14616__auto__;
}
break;
}
}catch (e17984){if((e17984 instanceof Object))
{var ex__14617__auto__ = e17984;var statearr_17985_18042 = state_17954;(statearr_17985_18042[(5)] = ex__14617__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17954);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e17984;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__18043 = state_17954;
state_17954 = G__18043;
continue;
}
} else
{return ret_value__14615__auto__;
}
break;
}
});
state_machine__14614__auto__ = function(state_17954){
switch(arguments.length){
case 0:
return state_machine__14614__auto____0.call(this);
case 1:
return state_machine__14614__auto____1.call(this,state_17954);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14614__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14614__auto____0;
state_machine__14614__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14614__auto____1;
return state_machine__14614__auto__;
})()
;})(switch__14613__auto__,c__14669__auto__,jobs,results,process,async))
})();var state__14671__auto__ = (function (){var statearr_17986 = f__14670__auto__.call(null);(statearr_17986[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14669__auto__);
return statearr_17986;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__14669__auto___18144 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14669__auto___18144,tc,fc){
return (function (){var f__14670__auto__ = (function (){var switch__14613__auto__ = ((function (c__14669__auto___18144,tc,fc){
return (function (state_18119){var state_val_18120 = (state_18119[(1)]);if((state_val_18120 === (7)))
{var inst_18115 = (state_18119[(2)]);var state_18119__$1 = state_18119;var statearr_18121_18145 = state_18119__$1;(statearr_18121_18145[(2)] = inst_18115);
(statearr_18121_18145[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18120 === (1)))
{var state_18119__$1 = state_18119;var statearr_18122_18146 = state_18119__$1;(statearr_18122_18146[(2)] = null);
(statearr_18122_18146[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18120 === (4)))
{var inst_18096 = (state_18119[(7)]);var inst_18096__$1 = (state_18119[(2)]);var inst_18097 = (inst_18096__$1 == null);var state_18119__$1 = (function (){var statearr_18123 = state_18119;(statearr_18123[(7)] = inst_18096__$1);
return statearr_18123;
})();if(cljs.core.truth_(inst_18097))
{var statearr_18124_18147 = state_18119__$1;(statearr_18124_18147[(1)] = (5));
} else
{var statearr_18125_18148 = state_18119__$1;(statearr_18125_18148[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18120 === (13)))
{var state_18119__$1 = state_18119;var statearr_18126_18149 = state_18119__$1;(statearr_18126_18149[(2)] = null);
(statearr_18126_18149[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18120 === (6)))
{var inst_18096 = (state_18119[(7)]);var inst_18102 = p.call(null,inst_18096);var state_18119__$1 = state_18119;if(cljs.core.truth_(inst_18102))
{var statearr_18127_18150 = state_18119__$1;(statearr_18127_18150[(1)] = (9));
} else
{var statearr_18128_18151 = state_18119__$1;(statearr_18128_18151[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18120 === (3)))
{var inst_18117 = (state_18119[(2)]);var state_18119__$1 = state_18119;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18119__$1,inst_18117);
} else
{if((state_val_18120 === (12)))
{var state_18119__$1 = state_18119;var statearr_18129_18152 = state_18119__$1;(statearr_18129_18152[(2)] = null);
(statearr_18129_18152[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18120 === (2)))
{var state_18119__$1 = state_18119;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18119__$1,(4),ch);
} else
{if((state_val_18120 === (11)))
{var inst_18096 = (state_18119[(7)]);var inst_18106 = (state_18119[(2)]);var state_18119__$1 = state_18119;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18119__$1,(8),inst_18106,inst_18096);
} else
{if((state_val_18120 === (9)))
{var state_18119__$1 = state_18119;var statearr_18130_18153 = state_18119__$1;(statearr_18130_18153[(2)] = tc);
(statearr_18130_18153[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18120 === (5)))
{var inst_18099 = cljs.core.async.close_BANG_.call(null,tc);var inst_18100 = cljs.core.async.close_BANG_.call(null,fc);var state_18119__$1 = (function (){var statearr_18131 = state_18119;(statearr_18131[(8)] = inst_18099);
return statearr_18131;
})();var statearr_18132_18154 = state_18119__$1;(statearr_18132_18154[(2)] = inst_18100);
(statearr_18132_18154[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18120 === (14)))
{var inst_18113 = (state_18119[(2)]);var state_18119__$1 = state_18119;var statearr_18133_18155 = state_18119__$1;(statearr_18133_18155[(2)] = inst_18113);
(statearr_18133_18155[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18120 === (10)))
{var state_18119__$1 = state_18119;var statearr_18134_18156 = state_18119__$1;(statearr_18134_18156[(2)] = fc);
(statearr_18134_18156[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18120 === (8)))
{var inst_18108 = (state_18119[(2)]);var state_18119__$1 = state_18119;if(cljs.core.truth_(inst_18108))
{var statearr_18135_18157 = state_18119__$1;(statearr_18135_18157[(1)] = (12));
} else
{var statearr_18136_18158 = state_18119__$1;(statearr_18136_18158[(1)] = (13));
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
});})(c__14669__auto___18144,tc,fc))
;return ((function (switch__14613__auto__,c__14669__auto___18144,tc,fc){
return (function() {
var state_machine__14614__auto__ = null;
var state_machine__14614__auto____0 = (function (){var statearr_18140 = [null,null,null,null,null,null,null,null,null];(statearr_18140[(0)] = state_machine__14614__auto__);
(statearr_18140[(1)] = (1));
return statearr_18140;
});
var state_machine__14614__auto____1 = (function (state_18119){while(true){
var ret_value__14615__auto__ = (function (){try{while(true){
var result__14616__auto__ = switch__14613__auto__.call(null,state_18119);if(cljs.core.keyword_identical_QMARK_.call(null,result__14616__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__14616__auto__;
}
break;
}
}catch (e18141){if((e18141 instanceof Object))
{var ex__14617__auto__ = e18141;var statearr_18142_18159 = state_18119;(statearr_18142_18159[(5)] = ex__14617__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18119);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e18141;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__18160 = state_18119;
state_18119 = G__18160;
continue;
}
} else
{return ret_value__14615__auto__;
}
break;
}
});
state_machine__14614__auto__ = function(state_18119){
switch(arguments.length){
case 0:
return state_machine__14614__auto____0.call(this);
case 1:
return state_machine__14614__auto____1.call(this,state_18119);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14614__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14614__auto____0;
state_machine__14614__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14614__auto____1;
return state_machine__14614__auto__;
})()
;})(switch__14613__auto__,c__14669__auto___18144,tc,fc))
})();var state__14671__auto__ = (function (){var statearr_18143 = f__14670__auto__.call(null);(statearr_18143[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14669__auto___18144);
return statearr_18143;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14671__auto__);
});})(c__14669__auto___18144,tc,fc))
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
return (function (state_18207){var state_val_18208 = (state_18207[(1)]);if((state_val_18208 === (7)))
{var inst_18203 = (state_18207[(2)]);var state_18207__$1 = state_18207;var statearr_18209_18225 = state_18207__$1;(statearr_18209_18225[(2)] = inst_18203);
(statearr_18209_18225[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18208 === (6)))
{var inst_18193 = (state_18207[(7)]);var inst_18196 = (state_18207[(8)]);var inst_18200 = f.call(null,inst_18193,inst_18196);var inst_18193__$1 = inst_18200;var state_18207__$1 = (function (){var statearr_18210 = state_18207;(statearr_18210[(7)] = inst_18193__$1);
return statearr_18210;
})();var statearr_18211_18226 = state_18207__$1;(statearr_18211_18226[(2)] = null);
(statearr_18211_18226[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18208 === (5)))
{var inst_18193 = (state_18207[(7)]);var state_18207__$1 = state_18207;var statearr_18212_18227 = state_18207__$1;(statearr_18212_18227[(2)] = inst_18193);
(statearr_18212_18227[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18208 === (4)))
{var inst_18196 = (state_18207[(8)]);var inst_18196__$1 = (state_18207[(2)]);var inst_18197 = (inst_18196__$1 == null);var state_18207__$1 = (function (){var statearr_18213 = state_18207;(statearr_18213[(8)] = inst_18196__$1);
return statearr_18213;
})();if(cljs.core.truth_(inst_18197))
{var statearr_18214_18228 = state_18207__$1;(statearr_18214_18228[(1)] = (5));
} else
{var statearr_18215_18229 = state_18207__$1;(statearr_18215_18229[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18208 === (3)))
{var inst_18205 = (state_18207[(2)]);var state_18207__$1 = state_18207;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18207__$1,inst_18205);
} else
{if((state_val_18208 === (2)))
{var state_18207__$1 = state_18207;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18207__$1,(4),ch);
} else
{if((state_val_18208 === (1)))
{var inst_18193 = init;var state_18207__$1 = (function (){var statearr_18216 = state_18207;(statearr_18216[(7)] = inst_18193);
return statearr_18216;
})();var statearr_18217_18230 = state_18207__$1;(statearr_18217_18230[(2)] = null);
(statearr_18217_18230[(1)] = (2));
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
var state_machine__14614__auto____0 = (function (){var statearr_18221 = [null,null,null,null,null,null,null,null,null];(statearr_18221[(0)] = state_machine__14614__auto__);
(statearr_18221[(1)] = (1));
return statearr_18221;
});
var state_machine__14614__auto____1 = (function (state_18207){while(true){
var ret_value__14615__auto__ = (function (){try{while(true){
var result__14616__auto__ = switch__14613__auto__.call(null,state_18207);if(cljs.core.keyword_identical_QMARK_.call(null,result__14616__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__14616__auto__;
}
break;
}
}catch (e18222){if((e18222 instanceof Object))
{var ex__14617__auto__ = e18222;var statearr_18223_18231 = state_18207;(statearr_18223_18231[(5)] = ex__14617__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18207);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e18222;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__18232 = state_18207;
state_18207 = G__18232;
continue;
}
} else
{return ret_value__14615__auto__;
}
break;
}
});
state_machine__14614__auto__ = function(state_18207){
switch(arguments.length){
case 0:
return state_machine__14614__auto____0.call(this);
case 1:
return state_machine__14614__auto____1.call(this,state_18207);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14614__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14614__auto____0;
state_machine__14614__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14614__auto____1;
return state_machine__14614__auto__;
})()
;})(switch__14613__auto__,c__14669__auto__))
})();var state__14671__auto__ = (function (){var statearr_18224 = f__14670__auto__.call(null);(statearr_18224[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14669__auto__);
return statearr_18224;
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
return (function (state_18306){var state_val_18307 = (state_18306[(1)]);if((state_val_18307 === (7)))
{var inst_18288 = (state_18306[(2)]);var state_18306__$1 = state_18306;var statearr_18308_18331 = state_18306__$1;(statearr_18308_18331[(2)] = inst_18288);
(statearr_18308_18331[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18307 === (1)))
{var inst_18282 = cljs.core.seq.call(null,coll);var inst_18283 = inst_18282;var state_18306__$1 = (function (){var statearr_18309 = state_18306;(statearr_18309[(7)] = inst_18283);
return statearr_18309;
})();var statearr_18310_18332 = state_18306__$1;(statearr_18310_18332[(2)] = null);
(statearr_18310_18332[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18307 === (4)))
{var inst_18283 = (state_18306[(7)]);var inst_18286 = cljs.core.first.call(null,inst_18283);var state_18306__$1 = state_18306;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18306__$1,(7),ch,inst_18286);
} else
{if((state_val_18307 === (13)))
{var inst_18300 = (state_18306[(2)]);var state_18306__$1 = state_18306;var statearr_18311_18333 = state_18306__$1;(statearr_18311_18333[(2)] = inst_18300);
(statearr_18311_18333[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18307 === (6)))
{var inst_18291 = (state_18306[(2)]);var state_18306__$1 = state_18306;if(cljs.core.truth_(inst_18291))
{var statearr_18312_18334 = state_18306__$1;(statearr_18312_18334[(1)] = (8));
} else
{var statearr_18313_18335 = state_18306__$1;(statearr_18313_18335[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18307 === (3)))
{var inst_18304 = (state_18306[(2)]);var state_18306__$1 = state_18306;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18306__$1,inst_18304);
} else
{if((state_val_18307 === (12)))
{var state_18306__$1 = state_18306;var statearr_18314_18336 = state_18306__$1;(statearr_18314_18336[(2)] = null);
(statearr_18314_18336[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18307 === (2)))
{var inst_18283 = (state_18306[(7)]);var state_18306__$1 = state_18306;if(cljs.core.truth_(inst_18283))
{var statearr_18315_18337 = state_18306__$1;(statearr_18315_18337[(1)] = (4));
} else
{var statearr_18316_18338 = state_18306__$1;(statearr_18316_18338[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18307 === (11)))
{var inst_18297 = cljs.core.async.close_BANG_.call(null,ch);var state_18306__$1 = state_18306;var statearr_18317_18339 = state_18306__$1;(statearr_18317_18339[(2)] = inst_18297);
(statearr_18317_18339[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18307 === (9)))
{var state_18306__$1 = state_18306;if(cljs.core.truth_(close_QMARK_))
{var statearr_18318_18340 = state_18306__$1;(statearr_18318_18340[(1)] = (11));
} else
{var statearr_18319_18341 = state_18306__$1;(statearr_18319_18341[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18307 === (5)))
{var inst_18283 = (state_18306[(7)]);var state_18306__$1 = state_18306;var statearr_18320_18342 = state_18306__$1;(statearr_18320_18342[(2)] = inst_18283);
(statearr_18320_18342[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18307 === (10)))
{var inst_18302 = (state_18306[(2)]);var state_18306__$1 = state_18306;var statearr_18321_18343 = state_18306__$1;(statearr_18321_18343[(2)] = inst_18302);
(statearr_18321_18343[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18307 === (8)))
{var inst_18283 = (state_18306[(7)]);var inst_18293 = cljs.core.next.call(null,inst_18283);var inst_18283__$1 = inst_18293;var state_18306__$1 = (function (){var statearr_18322 = state_18306;(statearr_18322[(7)] = inst_18283__$1);
return statearr_18322;
})();var statearr_18323_18344 = state_18306__$1;(statearr_18323_18344[(2)] = null);
(statearr_18323_18344[(1)] = (2));
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
var state_machine__14614__auto____0 = (function (){var statearr_18327 = [null,null,null,null,null,null,null,null];(statearr_18327[(0)] = state_machine__14614__auto__);
(statearr_18327[(1)] = (1));
return statearr_18327;
});
var state_machine__14614__auto____1 = (function (state_18306){while(true){
var ret_value__14615__auto__ = (function (){try{while(true){
var result__14616__auto__ = switch__14613__auto__.call(null,state_18306);if(cljs.core.keyword_identical_QMARK_.call(null,result__14616__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__14616__auto__;
}
break;
}
}catch (e18328){if((e18328 instanceof Object))
{var ex__14617__auto__ = e18328;var statearr_18329_18345 = state_18306;(statearr_18329_18345[(5)] = ex__14617__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18306);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e18328;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__18346 = state_18306;
state_18306 = G__18346;
continue;
}
} else
{return ret_value__14615__auto__;
}
break;
}
});
state_machine__14614__auto__ = function(state_18306){
switch(arguments.length){
case 0:
return state_machine__14614__auto____0.call(this);
case 1:
return state_machine__14614__auto____1.call(this,state_18306);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14614__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14614__auto____0;
state_machine__14614__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14614__auto____1;
return state_machine__14614__auto__;
})()
;})(switch__14613__auto__,c__14669__auto__))
})();var state__14671__auto__ = (function (){var statearr_18330 = f__14670__auto__.call(null);(statearr_18330[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14669__auto__);
return statearr_18330;
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
cljs.core.async.Mux = (function (){var obj18348 = {};return obj18348;
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
cljs.core.async.Mult = (function (){var obj18350 = {};return obj18350;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t18572 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t18572 = (function (cs,ch,mult,meta18573){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta18573 = meta18573;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18572.cljs$lang$type = true;
cljs.core.async.t18572.cljs$lang$ctorStr = "cljs.core.async/t18572";
cljs.core.async.t18572.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t18572");
});})(cs))
;
cljs.core.async.t18572.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t18572.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t18572.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t18572.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t18572.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t18572.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t18572.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_18574){var self__ = this;
var _18574__$1 = this;return self__.meta18573;
});})(cs))
;
cljs.core.async.t18572.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_18574,meta18573__$1){var self__ = this;
var _18574__$1 = this;return (new cljs.core.async.t18572(self__.cs,self__.ch,self__.mult,meta18573__$1));
});})(cs))
;
cljs.core.async.__GT_t18572 = ((function (cs){
return (function __GT_t18572(cs__$1,ch__$1,mult__$1,meta18573){return (new cljs.core.async.t18572(cs__$1,ch__$1,mult__$1,meta18573));
});})(cs))
;
}
return (new cljs.core.async.t18572(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__14669__auto___18793 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14669__auto___18793,cs,m,dchan,dctr,done){
return (function (){var f__14670__auto__ = (function (){var switch__14613__auto__ = ((function (c__14669__auto___18793,cs,m,dchan,dctr,done){
return (function (state_18705){var state_val_18706 = (state_18705[(1)]);if((state_val_18706 === (7)))
{var inst_18701 = (state_18705[(2)]);var state_18705__$1 = state_18705;var statearr_18707_18794 = state_18705__$1;(statearr_18707_18794[(2)] = inst_18701);
(statearr_18707_18794[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18706 === (20)))
{var inst_18606 = (state_18705[(7)]);var inst_18616 = cljs.core.first.call(null,inst_18606);var inst_18617 = cljs.core.nth.call(null,inst_18616,(0),null);var inst_18618 = cljs.core.nth.call(null,inst_18616,(1),null);var state_18705__$1 = (function (){var statearr_18708 = state_18705;(statearr_18708[(8)] = inst_18617);
return statearr_18708;
})();if(cljs.core.truth_(inst_18618))
{var statearr_18709_18795 = state_18705__$1;(statearr_18709_18795[(1)] = (22));
} else
{var statearr_18710_18796 = state_18705__$1;(statearr_18710_18796[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18706 === (27)))
{var inst_18646 = (state_18705[(9)]);var inst_18577 = (state_18705[(10)]);var inst_18648 = (state_18705[(11)]);var inst_18653 = (state_18705[(12)]);var inst_18653__$1 = cljs.core._nth.call(null,inst_18646,inst_18648);var inst_18654 = cljs.core.async.put_BANG_.call(null,inst_18653__$1,inst_18577,done);var state_18705__$1 = (function (){var statearr_18711 = state_18705;(statearr_18711[(12)] = inst_18653__$1);
return statearr_18711;
})();if(cljs.core.truth_(inst_18654))
{var statearr_18712_18797 = state_18705__$1;(statearr_18712_18797[(1)] = (30));
} else
{var statearr_18713_18798 = state_18705__$1;(statearr_18713_18798[(1)] = (31));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18706 === (1)))
{var state_18705__$1 = state_18705;var statearr_18714_18799 = state_18705__$1;(statearr_18714_18799[(2)] = null);
(statearr_18714_18799[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18706 === (24)))
{var inst_18606 = (state_18705[(7)]);var inst_18623 = (state_18705[(2)]);var inst_18624 = cljs.core.next.call(null,inst_18606);var inst_18586 = inst_18624;var inst_18587 = null;var inst_18588 = (0);var inst_18589 = (0);var state_18705__$1 = (function (){var statearr_18715 = state_18705;(statearr_18715[(13)] = inst_18586);
(statearr_18715[(14)] = inst_18589);
(statearr_18715[(15)] = inst_18588);
(statearr_18715[(16)] = inst_18623);
(statearr_18715[(17)] = inst_18587);
return statearr_18715;
})();var statearr_18716_18800 = state_18705__$1;(statearr_18716_18800[(2)] = null);
(statearr_18716_18800[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18706 === (39)))
{var state_18705__$1 = state_18705;var statearr_18720_18801 = state_18705__$1;(statearr_18720_18801[(2)] = null);
(statearr_18720_18801[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18706 === (4)))
{var inst_18577 = (state_18705[(10)]);var inst_18577__$1 = (state_18705[(2)]);var inst_18578 = (inst_18577__$1 == null);var state_18705__$1 = (function (){var statearr_18721 = state_18705;(statearr_18721[(10)] = inst_18577__$1);
return statearr_18721;
})();if(cljs.core.truth_(inst_18578))
{var statearr_18722_18802 = state_18705__$1;(statearr_18722_18802[(1)] = (5));
} else
{var statearr_18723_18803 = state_18705__$1;(statearr_18723_18803[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18706 === (15)))
{var inst_18586 = (state_18705[(13)]);var inst_18589 = (state_18705[(14)]);var inst_18588 = (state_18705[(15)]);var inst_18587 = (state_18705[(17)]);var inst_18602 = (state_18705[(2)]);var inst_18603 = (inst_18589 + (1));var tmp18717 = inst_18586;var tmp18718 = inst_18588;var tmp18719 = inst_18587;var inst_18586__$1 = tmp18717;var inst_18587__$1 = tmp18719;var inst_18588__$1 = tmp18718;var inst_18589__$1 = inst_18603;var state_18705__$1 = (function (){var statearr_18724 = state_18705;(statearr_18724[(13)] = inst_18586__$1);
(statearr_18724[(14)] = inst_18589__$1);
(statearr_18724[(15)] = inst_18588__$1);
(statearr_18724[(18)] = inst_18602);
(statearr_18724[(17)] = inst_18587__$1);
return statearr_18724;
})();var statearr_18725_18804 = state_18705__$1;(statearr_18725_18804[(2)] = null);
(statearr_18725_18804[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18706 === (21)))
{var inst_18627 = (state_18705[(2)]);var state_18705__$1 = state_18705;var statearr_18729_18805 = state_18705__$1;(statearr_18729_18805[(2)] = inst_18627);
(statearr_18729_18805[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18706 === (31)))
{var inst_18653 = (state_18705[(12)]);var inst_18657 = done.call(null,null);var inst_18658 = cljs.core.async.untap_STAR_.call(null,m,inst_18653);var state_18705__$1 = (function (){var statearr_18730 = state_18705;(statearr_18730[(19)] = inst_18657);
return statearr_18730;
})();var statearr_18731_18806 = state_18705__$1;(statearr_18731_18806[(2)] = inst_18658);
(statearr_18731_18806[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18706 === (32)))
{var inst_18646 = (state_18705[(9)]);var inst_18648 = (state_18705[(11)]);var inst_18647 = (state_18705[(20)]);var inst_18645 = (state_18705[(21)]);var inst_18660 = (state_18705[(2)]);var inst_18661 = (inst_18648 + (1));var tmp18726 = inst_18646;var tmp18727 = inst_18647;var tmp18728 = inst_18645;var inst_18645__$1 = tmp18728;var inst_18646__$1 = tmp18726;var inst_18647__$1 = tmp18727;var inst_18648__$1 = inst_18661;var state_18705__$1 = (function (){var statearr_18732 = state_18705;(statearr_18732[(9)] = inst_18646__$1);
(statearr_18732[(22)] = inst_18660);
(statearr_18732[(11)] = inst_18648__$1);
(statearr_18732[(20)] = inst_18647__$1);
(statearr_18732[(21)] = inst_18645__$1);
return statearr_18732;
})();var statearr_18733_18807 = state_18705__$1;(statearr_18733_18807[(2)] = null);
(statearr_18733_18807[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18706 === (40)))
{var inst_18673 = (state_18705[(23)]);var inst_18677 = done.call(null,null);var inst_18678 = cljs.core.async.untap_STAR_.call(null,m,inst_18673);var state_18705__$1 = (function (){var statearr_18734 = state_18705;(statearr_18734[(24)] = inst_18677);
return statearr_18734;
})();var statearr_18735_18808 = state_18705__$1;(statearr_18735_18808[(2)] = inst_18678);
(statearr_18735_18808[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18706 === (33)))
{var inst_18664 = (state_18705[(25)]);var inst_18666 = cljs.core.chunked_seq_QMARK_.call(null,inst_18664);var state_18705__$1 = state_18705;if(inst_18666)
{var statearr_18736_18809 = state_18705__$1;(statearr_18736_18809[(1)] = (36));
} else
{var statearr_18737_18810 = state_18705__$1;(statearr_18737_18810[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18706 === (13)))
{var inst_18596 = (state_18705[(26)]);var inst_18599 = cljs.core.async.close_BANG_.call(null,inst_18596);var state_18705__$1 = state_18705;var statearr_18738_18811 = state_18705__$1;(statearr_18738_18811[(2)] = inst_18599);
(statearr_18738_18811[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18706 === (22)))
{var inst_18617 = (state_18705[(8)]);var inst_18620 = cljs.core.async.close_BANG_.call(null,inst_18617);var state_18705__$1 = state_18705;var statearr_18739_18812 = state_18705__$1;(statearr_18739_18812[(2)] = inst_18620);
(statearr_18739_18812[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18706 === (36)))
{var inst_18664 = (state_18705[(25)]);var inst_18668 = cljs.core.chunk_first.call(null,inst_18664);var inst_18669 = cljs.core.chunk_rest.call(null,inst_18664);var inst_18670 = cljs.core.count.call(null,inst_18668);var inst_18645 = inst_18669;var inst_18646 = inst_18668;var inst_18647 = inst_18670;var inst_18648 = (0);var state_18705__$1 = (function (){var statearr_18740 = state_18705;(statearr_18740[(9)] = inst_18646);
(statearr_18740[(11)] = inst_18648);
(statearr_18740[(20)] = inst_18647);
(statearr_18740[(21)] = inst_18645);
return statearr_18740;
})();var statearr_18741_18813 = state_18705__$1;(statearr_18741_18813[(2)] = null);
(statearr_18741_18813[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18706 === (41)))
{var inst_18664 = (state_18705[(25)]);var inst_18680 = (state_18705[(2)]);var inst_18681 = cljs.core.next.call(null,inst_18664);var inst_18645 = inst_18681;var inst_18646 = null;var inst_18647 = (0);var inst_18648 = (0);var state_18705__$1 = (function (){var statearr_18742 = state_18705;(statearr_18742[(9)] = inst_18646);
(statearr_18742[(11)] = inst_18648);
(statearr_18742[(20)] = inst_18647);
(statearr_18742[(27)] = inst_18680);
(statearr_18742[(21)] = inst_18645);
return statearr_18742;
})();var statearr_18743_18814 = state_18705__$1;(statearr_18743_18814[(2)] = null);
(statearr_18743_18814[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18706 === (43)))
{var state_18705__$1 = state_18705;var statearr_18744_18815 = state_18705__$1;(statearr_18744_18815[(2)] = null);
(statearr_18744_18815[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18706 === (29)))
{var inst_18689 = (state_18705[(2)]);var state_18705__$1 = state_18705;var statearr_18745_18816 = state_18705__$1;(statearr_18745_18816[(2)] = inst_18689);
(statearr_18745_18816[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18706 === (44)))
{var inst_18698 = (state_18705[(2)]);var state_18705__$1 = (function (){var statearr_18746 = state_18705;(statearr_18746[(28)] = inst_18698);
return statearr_18746;
})();var statearr_18747_18817 = state_18705__$1;(statearr_18747_18817[(2)] = null);
(statearr_18747_18817[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18706 === (6)))
{var inst_18637 = (state_18705[(29)]);var inst_18636 = cljs.core.deref.call(null,cs);var inst_18637__$1 = cljs.core.keys.call(null,inst_18636);var inst_18638 = cljs.core.count.call(null,inst_18637__$1);var inst_18639 = cljs.core.reset_BANG_.call(null,dctr,inst_18638);var inst_18644 = cljs.core.seq.call(null,inst_18637__$1);var inst_18645 = inst_18644;var inst_18646 = null;var inst_18647 = (0);var inst_18648 = (0);var state_18705__$1 = (function (){var statearr_18748 = state_18705;(statearr_18748[(29)] = inst_18637__$1);
(statearr_18748[(9)] = inst_18646);
(statearr_18748[(30)] = inst_18639);
(statearr_18748[(11)] = inst_18648);
(statearr_18748[(20)] = inst_18647);
(statearr_18748[(21)] = inst_18645);
return statearr_18748;
})();var statearr_18749_18818 = state_18705__$1;(statearr_18749_18818[(2)] = null);
(statearr_18749_18818[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18706 === (28)))
{var inst_18664 = (state_18705[(25)]);var inst_18645 = (state_18705[(21)]);var inst_18664__$1 = cljs.core.seq.call(null,inst_18645);var state_18705__$1 = (function (){var statearr_18750 = state_18705;(statearr_18750[(25)] = inst_18664__$1);
return statearr_18750;
})();if(inst_18664__$1)
{var statearr_18751_18819 = state_18705__$1;(statearr_18751_18819[(1)] = (33));
} else
{var statearr_18752_18820 = state_18705__$1;(statearr_18752_18820[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18706 === (25)))
{var inst_18648 = (state_18705[(11)]);var inst_18647 = (state_18705[(20)]);var inst_18650 = (inst_18648 < inst_18647);var inst_18651 = inst_18650;var state_18705__$1 = state_18705;if(cljs.core.truth_(inst_18651))
{var statearr_18753_18821 = state_18705__$1;(statearr_18753_18821[(1)] = (27));
} else
{var statearr_18754_18822 = state_18705__$1;(statearr_18754_18822[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18706 === (34)))
{var state_18705__$1 = state_18705;var statearr_18755_18823 = state_18705__$1;(statearr_18755_18823[(2)] = null);
(statearr_18755_18823[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18706 === (17)))
{var state_18705__$1 = state_18705;var statearr_18756_18824 = state_18705__$1;(statearr_18756_18824[(2)] = null);
(statearr_18756_18824[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18706 === (3)))
{var inst_18703 = (state_18705[(2)]);var state_18705__$1 = state_18705;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18705__$1,inst_18703);
} else
{if((state_val_18706 === (12)))
{var inst_18632 = (state_18705[(2)]);var state_18705__$1 = state_18705;var statearr_18757_18825 = state_18705__$1;(statearr_18757_18825[(2)] = inst_18632);
(statearr_18757_18825[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18706 === (2)))
{var state_18705__$1 = state_18705;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18705__$1,(4),ch);
} else
{if((state_val_18706 === (23)))
{var state_18705__$1 = state_18705;var statearr_18758_18826 = state_18705__$1;(statearr_18758_18826[(2)] = null);
(statearr_18758_18826[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18706 === (35)))
{var inst_18687 = (state_18705[(2)]);var state_18705__$1 = state_18705;var statearr_18759_18827 = state_18705__$1;(statearr_18759_18827[(2)] = inst_18687);
(statearr_18759_18827[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18706 === (19)))
{var inst_18606 = (state_18705[(7)]);var inst_18610 = cljs.core.chunk_first.call(null,inst_18606);var inst_18611 = cljs.core.chunk_rest.call(null,inst_18606);var inst_18612 = cljs.core.count.call(null,inst_18610);var inst_18586 = inst_18611;var inst_18587 = inst_18610;var inst_18588 = inst_18612;var inst_18589 = (0);var state_18705__$1 = (function (){var statearr_18760 = state_18705;(statearr_18760[(13)] = inst_18586);
(statearr_18760[(14)] = inst_18589);
(statearr_18760[(15)] = inst_18588);
(statearr_18760[(17)] = inst_18587);
return statearr_18760;
})();var statearr_18761_18828 = state_18705__$1;(statearr_18761_18828[(2)] = null);
(statearr_18761_18828[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18706 === (11)))
{var inst_18586 = (state_18705[(13)]);var inst_18606 = (state_18705[(7)]);var inst_18606__$1 = cljs.core.seq.call(null,inst_18586);var state_18705__$1 = (function (){var statearr_18762 = state_18705;(statearr_18762[(7)] = inst_18606__$1);
return statearr_18762;
})();if(inst_18606__$1)
{var statearr_18763_18829 = state_18705__$1;(statearr_18763_18829[(1)] = (16));
} else
{var statearr_18764_18830 = state_18705__$1;(statearr_18764_18830[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18706 === (9)))
{var inst_18634 = (state_18705[(2)]);var state_18705__$1 = state_18705;var statearr_18765_18831 = state_18705__$1;(statearr_18765_18831[(2)] = inst_18634);
(statearr_18765_18831[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18706 === (5)))
{var inst_18584 = cljs.core.deref.call(null,cs);var inst_18585 = cljs.core.seq.call(null,inst_18584);var inst_18586 = inst_18585;var inst_18587 = null;var inst_18588 = (0);var inst_18589 = (0);var state_18705__$1 = (function (){var statearr_18766 = state_18705;(statearr_18766[(13)] = inst_18586);
(statearr_18766[(14)] = inst_18589);
(statearr_18766[(15)] = inst_18588);
(statearr_18766[(17)] = inst_18587);
return statearr_18766;
})();var statearr_18767_18832 = state_18705__$1;(statearr_18767_18832[(2)] = null);
(statearr_18767_18832[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18706 === (14)))
{var state_18705__$1 = state_18705;var statearr_18768_18833 = state_18705__$1;(statearr_18768_18833[(2)] = null);
(statearr_18768_18833[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18706 === (45)))
{var inst_18695 = (state_18705[(2)]);var state_18705__$1 = state_18705;var statearr_18769_18834 = state_18705__$1;(statearr_18769_18834[(2)] = inst_18695);
(statearr_18769_18834[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18706 === (26)))
{var inst_18637 = (state_18705[(29)]);var inst_18691 = (state_18705[(2)]);var inst_18692 = cljs.core.seq.call(null,inst_18637);var state_18705__$1 = (function (){var statearr_18770 = state_18705;(statearr_18770[(31)] = inst_18691);
return statearr_18770;
})();if(inst_18692)
{var statearr_18771_18835 = state_18705__$1;(statearr_18771_18835[(1)] = (42));
} else
{var statearr_18772_18836 = state_18705__$1;(statearr_18772_18836[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18706 === (16)))
{var inst_18606 = (state_18705[(7)]);var inst_18608 = cljs.core.chunked_seq_QMARK_.call(null,inst_18606);var state_18705__$1 = state_18705;if(inst_18608)
{var statearr_18773_18837 = state_18705__$1;(statearr_18773_18837[(1)] = (19));
} else
{var statearr_18774_18838 = state_18705__$1;(statearr_18774_18838[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18706 === (38)))
{var inst_18684 = (state_18705[(2)]);var state_18705__$1 = state_18705;var statearr_18775_18839 = state_18705__$1;(statearr_18775_18839[(2)] = inst_18684);
(statearr_18775_18839[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18706 === (30)))
{var state_18705__$1 = state_18705;var statearr_18776_18840 = state_18705__$1;(statearr_18776_18840[(2)] = null);
(statearr_18776_18840[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18706 === (10)))
{var inst_18589 = (state_18705[(14)]);var inst_18587 = (state_18705[(17)]);var inst_18595 = cljs.core._nth.call(null,inst_18587,inst_18589);var inst_18596 = cljs.core.nth.call(null,inst_18595,(0),null);var inst_18597 = cljs.core.nth.call(null,inst_18595,(1),null);var state_18705__$1 = (function (){var statearr_18777 = state_18705;(statearr_18777[(26)] = inst_18596);
return statearr_18777;
})();if(cljs.core.truth_(inst_18597))
{var statearr_18778_18841 = state_18705__$1;(statearr_18778_18841[(1)] = (13));
} else
{var statearr_18779_18842 = state_18705__$1;(statearr_18779_18842[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18706 === (18)))
{var inst_18630 = (state_18705[(2)]);var state_18705__$1 = state_18705;var statearr_18780_18843 = state_18705__$1;(statearr_18780_18843[(2)] = inst_18630);
(statearr_18780_18843[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18706 === (42)))
{var state_18705__$1 = state_18705;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18705__$1,(45),dchan);
} else
{if((state_val_18706 === (37)))
{var inst_18664 = (state_18705[(25)]);var inst_18577 = (state_18705[(10)]);var inst_18673 = (state_18705[(23)]);var inst_18673__$1 = cljs.core.first.call(null,inst_18664);var inst_18674 = cljs.core.async.put_BANG_.call(null,inst_18673__$1,inst_18577,done);var state_18705__$1 = (function (){var statearr_18781 = state_18705;(statearr_18781[(23)] = inst_18673__$1);
return statearr_18781;
})();if(cljs.core.truth_(inst_18674))
{var statearr_18782_18844 = state_18705__$1;(statearr_18782_18844[(1)] = (39));
} else
{var statearr_18783_18845 = state_18705__$1;(statearr_18783_18845[(1)] = (40));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18706 === (8)))
{var inst_18589 = (state_18705[(14)]);var inst_18588 = (state_18705[(15)]);var inst_18591 = (inst_18589 < inst_18588);var inst_18592 = inst_18591;var state_18705__$1 = state_18705;if(cljs.core.truth_(inst_18592))
{var statearr_18784_18846 = state_18705__$1;(statearr_18784_18846[(1)] = (10));
} else
{var statearr_18785_18847 = state_18705__$1;(statearr_18785_18847[(1)] = (11));
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
});})(c__14669__auto___18793,cs,m,dchan,dctr,done))
;return ((function (switch__14613__auto__,c__14669__auto___18793,cs,m,dchan,dctr,done){
return (function() {
var state_machine__14614__auto__ = null;
var state_machine__14614__auto____0 = (function (){var statearr_18789 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_18789[(0)] = state_machine__14614__auto__);
(statearr_18789[(1)] = (1));
return statearr_18789;
});
var state_machine__14614__auto____1 = (function (state_18705){while(true){
var ret_value__14615__auto__ = (function (){try{while(true){
var result__14616__auto__ = switch__14613__auto__.call(null,state_18705);if(cljs.core.keyword_identical_QMARK_.call(null,result__14616__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__14616__auto__;
}
break;
}
}catch (e18790){if((e18790 instanceof Object))
{var ex__14617__auto__ = e18790;var statearr_18791_18848 = state_18705;(statearr_18791_18848[(5)] = ex__14617__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18705);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e18790;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__18849 = state_18705;
state_18705 = G__18849;
continue;
}
} else
{return ret_value__14615__auto__;
}
break;
}
});
state_machine__14614__auto__ = function(state_18705){
switch(arguments.length){
case 0:
return state_machine__14614__auto____0.call(this);
case 1:
return state_machine__14614__auto____1.call(this,state_18705);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14614__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14614__auto____0;
state_machine__14614__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14614__auto____1;
return state_machine__14614__auto__;
})()
;})(switch__14613__auto__,c__14669__auto___18793,cs,m,dchan,dctr,done))
})();var state__14671__auto__ = (function (){var statearr_18792 = f__14670__auto__.call(null);(statearr_18792[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14669__auto___18793);
return statearr_18792;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14671__auto__);
});})(c__14669__auto___18793,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj18851 = {};return obj18851;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__18852){var map__18857 = p__18852;var map__18857__$1 = ((cljs.core.seq_QMARK_.call(null,map__18857))?cljs.core.apply.call(null,cljs.core.hash_map,map__18857):map__18857);var opts = map__18857__$1;var statearr_18858_18861 = state;(statearr_18858_18861[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);
var temp__4388__auto__ = cljs.core.async.do_alts.call(null,((function (map__18857,map__18857__$1,opts){
return (function (val){var statearr_18859_18862 = state;(statearr_18859_18862[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__18857,map__18857__$1,opts))
,ports,opts);if(cljs.core.truth_(temp__4388__auto__))
{var cb = temp__4388__auto__;var statearr_18860_18863 = state;(statearr_18860_18863[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__18852 = null;if (arguments.length > 3) {
  p__18852 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__18852);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__18864){
var state = cljs.core.first(arglist__18864);
arglist__18864 = cljs.core.next(arglist__18864);
var cont_block = cljs.core.first(arglist__18864);
arglist__18864 = cljs.core.next(arglist__18864);
var ports = cljs.core.first(arglist__18864);
var p__18852 = cljs.core.rest(arglist__18864);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__18852);
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
;var m = (function (){if(typeof cljs.core.async.t18984 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t18984 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta18985){
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
this.meta18985 = meta18985;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18984.cljs$lang$type = true;
cljs.core.async.t18984.cljs$lang$ctorStr = "cljs.core.async/t18984";
cljs.core.async.t18984.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t18984");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t18984.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t18984.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t18984.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t18984.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t18984.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t18984.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t18984.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t18984.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t18984.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_18986){var self__ = this;
var _18986__$1 = this;return self__.meta18985;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t18984.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_18986,meta18985__$1){var self__ = this;
var _18986__$1 = this;return (new cljs.core.async.t18984(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta18985__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t18984 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t18984(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta18985){return (new cljs.core.async.t18984(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta18985));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t18984(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__14669__auto___19103 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14669__auto___19103,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__14670__auto__ = (function (){var switch__14613__auto__ = ((function (c__14669__auto___19103,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_19056){var state_val_19057 = (state_19056[(1)]);if((state_val_19057 === (7)))
{var inst_19000 = (state_19056[(7)]);var inst_19005 = cljs.core.apply.call(null,cljs.core.hash_map,inst_19000);var state_19056__$1 = state_19056;var statearr_19058_19104 = state_19056__$1;(statearr_19058_19104[(2)] = inst_19005);
(statearr_19058_19104[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19057 === (20)))
{var inst_19015 = (state_19056[(8)]);var state_19056__$1 = state_19056;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19056__$1,(23),out,inst_19015);
} else
{if((state_val_19057 === (1)))
{var inst_18990 = (state_19056[(9)]);var inst_18990__$1 = calc_state.call(null);var inst_18991 = cljs.core.seq_QMARK_.call(null,inst_18990__$1);var state_19056__$1 = (function (){var statearr_19059 = state_19056;(statearr_19059[(9)] = inst_18990__$1);
return statearr_19059;
})();if(inst_18991)
{var statearr_19060_19105 = state_19056__$1;(statearr_19060_19105[(1)] = (2));
} else
{var statearr_19061_19106 = state_19056__$1;(statearr_19061_19106[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19057 === (24)))
{var inst_19008 = (state_19056[(10)]);var inst_19000 = inst_19008;var state_19056__$1 = (function (){var statearr_19062 = state_19056;(statearr_19062[(7)] = inst_19000);
return statearr_19062;
})();var statearr_19063_19107 = state_19056__$1;(statearr_19063_19107[(2)] = null);
(statearr_19063_19107[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19057 === (4)))
{var inst_18990 = (state_19056[(9)]);var inst_18996 = (state_19056[(2)]);var inst_18997 = cljs.core.get.call(null,inst_18996,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_18998 = cljs.core.get.call(null,inst_18996,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_18999 = cljs.core.get.call(null,inst_18996,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_19000 = inst_18990;var state_19056__$1 = (function (){var statearr_19064 = state_19056;(statearr_19064[(7)] = inst_19000);
(statearr_19064[(11)] = inst_18999);
(statearr_19064[(12)] = inst_18997);
(statearr_19064[(13)] = inst_18998);
return statearr_19064;
})();var statearr_19065_19108 = state_19056__$1;(statearr_19065_19108[(2)] = null);
(statearr_19065_19108[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19057 === (15)))
{var state_19056__$1 = state_19056;var statearr_19066_19109 = state_19056__$1;(statearr_19066_19109[(2)] = null);
(statearr_19066_19109[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19057 === (21)))
{var inst_19008 = (state_19056[(10)]);var inst_19000 = inst_19008;var state_19056__$1 = (function (){var statearr_19067 = state_19056;(statearr_19067[(7)] = inst_19000);
return statearr_19067;
})();var statearr_19068_19110 = state_19056__$1;(statearr_19068_19110[(2)] = null);
(statearr_19068_19110[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19057 === (13)))
{var inst_19052 = (state_19056[(2)]);var state_19056__$1 = state_19056;var statearr_19069_19111 = state_19056__$1;(statearr_19069_19111[(2)] = inst_19052);
(statearr_19069_19111[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19057 === (22)))
{var inst_19050 = (state_19056[(2)]);var state_19056__$1 = state_19056;var statearr_19070_19112 = state_19056__$1;(statearr_19070_19112[(2)] = inst_19050);
(statearr_19070_19112[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19057 === (6)))
{var inst_19054 = (state_19056[(2)]);var state_19056__$1 = state_19056;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19056__$1,inst_19054);
} else
{if((state_val_19057 === (25)))
{var state_19056__$1 = state_19056;var statearr_19071_19113 = state_19056__$1;(statearr_19071_19113[(2)] = null);
(statearr_19071_19113[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19057 === (17)))
{var inst_19030 = (state_19056[(14)]);var state_19056__$1 = state_19056;var statearr_19072_19114 = state_19056__$1;(statearr_19072_19114[(2)] = inst_19030);
(statearr_19072_19114[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19057 === (3)))
{var inst_18990 = (state_19056[(9)]);var state_19056__$1 = state_19056;var statearr_19073_19115 = state_19056__$1;(statearr_19073_19115[(2)] = inst_18990);
(statearr_19073_19115[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19057 === (12)))
{var inst_19016 = (state_19056[(15)]);var inst_19011 = (state_19056[(16)]);var inst_19030 = (state_19056[(14)]);var inst_19030__$1 = inst_19011.call(null,inst_19016);var state_19056__$1 = (function (){var statearr_19074 = state_19056;(statearr_19074[(14)] = inst_19030__$1);
return statearr_19074;
})();if(cljs.core.truth_(inst_19030__$1))
{var statearr_19075_19116 = state_19056__$1;(statearr_19075_19116[(1)] = (17));
} else
{var statearr_19076_19117 = state_19056__$1;(statearr_19076_19117[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19057 === (2)))
{var inst_18990 = (state_19056[(9)]);var inst_18993 = cljs.core.apply.call(null,cljs.core.hash_map,inst_18990);var state_19056__$1 = state_19056;var statearr_19077_19118 = state_19056__$1;(statearr_19077_19118[(2)] = inst_18993);
(statearr_19077_19118[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19057 === (23)))
{var inst_19041 = (state_19056[(2)]);var state_19056__$1 = state_19056;if(cljs.core.truth_(inst_19041))
{var statearr_19078_19119 = state_19056__$1;(statearr_19078_19119[(1)] = (24));
} else
{var statearr_19079_19120 = state_19056__$1;(statearr_19079_19120[(1)] = (25));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19057 === (19)))
{var inst_19038 = (state_19056[(2)]);var state_19056__$1 = state_19056;if(cljs.core.truth_(inst_19038))
{var statearr_19080_19121 = state_19056__$1;(statearr_19080_19121[(1)] = (20));
} else
{var statearr_19081_19122 = state_19056__$1;(statearr_19081_19122[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19057 === (11)))
{var inst_19015 = (state_19056[(8)]);var inst_19021 = (inst_19015 == null);var state_19056__$1 = state_19056;if(cljs.core.truth_(inst_19021))
{var statearr_19082_19123 = state_19056__$1;(statearr_19082_19123[(1)] = (14));
} else
{var statearr_19083_19124 = state_19056__$1;(statearr_19083_19124[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19057 === (9)))
{var inst_19008 = (state_19056[(10)]);var inst_19008__$1 = (state_19056[(2)]);var inst_19009 = cljs.core.get.call(null,inst_19008__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_19010 = cljs.core.get.call(null,inst_19008__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_19011 = cljs.core.get.call(null,inst_19008__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_19056__$1 = (function (){var statearr_19084 = state_19056;(statearr_19084[(16)] = inst_19011);
(statearr_19084[(10)] = inst_19008__$1);
(statearr_19084[(17)] = inst_19010);
return statearr_19084;
})();return cljs.core.async.ioc_alts_BANG_.call(null,state_19056__$1,(10),inst_19009);
} else
{if((state_val_19057 === (5)))
{var inst_19000 = (state_19056[(7)]);var inst_19003 = cljs.core.seq_QMARK_.call(null,inst_19000);var state_19056__$1 = state_19056;if(inst_19003)
{var statearr_19085_19125 = state_19056__$1;(statearr_19085_19125[(1)] = (7));
} else
{var statearr_19086_19126 = state_19056__$1;(statearr_19086_19126[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19057 === (14)))
{var inst_19016 = (state_19056[(15)]);var inst_19023 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_19016);var state_19056__$1 = state_19056;var statearr_19087_19127 = state_19056__$1;(statearr_19087_19127[(2)] = inst_19023);
(statearr_19087_19127[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19057 === (26)))
{var inst_19046 = (state_19056[(2)]);var state_19056__$1 = state_19056;var statearr_19088_19128 = state_19056__$1;(statearr_19088_19128[(2)] = inst_19046);
(statearr_19088_19128[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19057 === (16)))
{var inst_19026 = (state_19056[(2)]);var inst_19027 = calc_state.call(null);var inst_19000 = inst_19027;var state_19056__$1 = (function (){var statearr_19089 = state_19056;(statearr_19089[(7)] = inst_19000);
(statearr_19089[(18)] = inst_19026);
return statearr_19089;
})();var statearr_19090_19129 = state_19056__$1;(statearr_19090_19129[(2)] = null);
(statearr_19090_19129[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19057 === (10)))
{var inst_19016 = (state_19056[(15)]);var inst_19015 = (state_19056[(8)]);var inst_19014 = (state_19056[(2)]);var inst_19015__$1 = cljs.core.nth.call(null,inst_19014,(0),null);var inst_19016__$1 = cljs.core.nth.call(null,inst_19014,(1),null);var inst_19017 = (inst_19015__$1 == null);var inst_19018 = cljs.core._EQ_.call(null,inst_19016__$1,change);var inst_19019 = (inst_19017) || (inst_19018);var state_19056__$1 = (function (){var statearr_19091 = state_19056;(statearr_19091[(15)] = inst_19016__$1);
(statearr_19091[(8)] = inst_19015__$1);
return statearr_19091;
})();if(cljs.core.truth_(inst_19019))
{var statearr_19092_19130 = state_19056__$1;(statearr_19092_19130[(1)] = (11));
} else
{var statearr_19093_19131 = state_19056__$1;(statearr_19093_19131[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19057 === (18)))
{var inst_19016 = (state_19056[(15)]);var inst_19011 = (state_19056[(16)]);var inst_19010 = (state_19056[(17)]);var inst_19033 = cljs.core.empty_QMARK_.call(null,inst_19011);var inst_19034 = inst_19010.call(null,inst_19016);var inst_19035 = cljs.core.not.call(null,inst_19034);var inst_19036 = (inst_19033) && (inst_19035);var state_19056__$1 = state_19056;var statearr_19094_19132 = state_19056__$1;(statearr_19094_19132[(2)] = inst_19036);
(statearr_19094_19132[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19057 === (8)))
{var inst_19000 = (state_19056[(7)]);var state_19056__$1 = state_19056;var statearr_19095_19133 = state_19056__$1;(statearr_19095_19133[(2)] = inst_19000);
(statearr_19095_19133[(1)] = (9));
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
});})(c__14669__auto___19103,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__14613__auto__,c__14669__auto___19103,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__14614__auto__ = null;
var state_machine__14614__auto____0 = (function (){var statearr_19099 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_19099[(0)] = state_machine__14614__auto__);
(statearr_19099[(1)] = (1));
return statearr_19099;
});
var state_machine__14614__auto____1 = (function (state_19056){while(true){
var ret_value__14615__auto__ = (function (){try{while(true){
var result__14616__auto__ = switch__14613__auto__.call(null,state_19056);if(cljs.core.keyword_identical_QMARK_.call(null,result__14616__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__14616__auto__;
}
break;
}
}catch (e19100){if((e19100 instanceof Object))
{var ex__14617__auto__ = e19100;var statearr_19101_19134 = state_19056;(statearr_19101_19134[(5)] = ex__14617__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19056);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e19100;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19135 = state_19056;
state_19056 = G__19135;
continue;
}
} else
{return ret_value__14615__auto__;
}
break;
}
});
state_machine__14614__auto__ = function(state_19056){
switch(arguments.length){
case 0:
return state_machine__14614__auto____0.call(this);
case 1:
return state_machine__14614__auto____1.call(this,state_19056);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14614__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14614__auto____0;
state_machine__14614__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14614__auto____1;
return state_machine__14614__auto__;
})()
;})(switch__14613__auto__,c__14669__auto___19103,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__14671__auto__ = (function (){var statearr_19102 = f__14670__auto__.call(null);(statearr_19102[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14669__auto___19103);
return statearr_19102;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14671__auto__);
});})(c__14669__auto___19103,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj19137 = {};return obj19137;
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
return (function (p1__19138_SHARP_){if(cljs.core.truth_(p1__19138_SHARP_.call(null,topic)))
{return p1__19138_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__19138_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3640__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t19261 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t19261 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta19262){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta19262 = meta19262;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19261.cljs$lang$type = true;
cljs.core.async.t19261.cljs$lang$ctorStr = "cljs.core.async/t19261";
cljs.core.async.t19261.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t19261");
});})(mults,ensure_mult))
;
cljs.core.async.t19261.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t19261.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t19261.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4388__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4388__auto__))
{var m = temp__4388__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t19261.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t19261.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t19261.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t19261.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t19261.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_19263){var self__ = this;
var _19263__$1 = this;return self__.meta19262;
});})(mults,ensure_mult))
;
cljs.core.async.t19261.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_19263,meta19262__$1){var self__ = this;
var _19263__$1 = this;return (new cljs.core.async.t19261(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta19262__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t19261 = ((function (mults,ensure_mult){
return (function __GT_t19261(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta19262){return (new cljs.core.async.t19261(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta19262));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t19261(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__14669__auto___19383 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14669__auto___19383,mults,ensure_mult,p){
return (function (){var f__14670__auto__ = (function (){var switch__14613__auto__ = ((function (c__14669__auto___19383,mults,ensure_mult,p){
return (function (state_19335){var state_val_19336 = (state_19335[(1)]);if((state_val_19336 === (7)))
{var inst_19331 = (state_19335[(2)]);var state_19335__$1 = state_19335;var statearr_19337_19384 = state_19335__$1;(statearr_19337_19384[(2)] = inst_19331);
(statearr_19337_19384[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19336 === (20)))
{var state_19335__$1 = state_19335;var statearr_19338_19385 = state_19335__$1;(statearr_19338_19385[(2)] = null);
(statearr_19338_19385[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19336 === (1)))
{var state_19335__$1 = state_19335;var statearr_19339_19386 = state_19335__$1;(statearr_19339_19386[(2)] = null);
(statearr_19339_19386[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19336 === (24)))
{var inst_19314 = (state_19335[(7)]);var inst_19323 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_19314);var state_19335__$1 = state_19335;var statearr_19340_19387 = state_19335__$1;(statearr_19340_19387[(2)] = inst_19323);
(statearr_19340_19387[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19336 === (4)))
{var inst_19266 = (state_19335[(8)]);var inst_19266__$1 = (state_19335[(2)]);var inst_19267 = (inst_19266__$1 == null);var state_19335__$1 = (function (){var statearr_19341 = state_19335;(statearr_19341[(8)] = inst_19266__$1);
return statearr_19341;
})();if(cljs.core.truth_(inst_19267))
{var statearr_19342_19388 = state_19335__$1;(statearr_19342_19388[(1)] = (5));
} else
{var statearr_19343_19389 = state_19335__$1;(statearr_19343_19389[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19336 === (15)))
{var inst_19308 = (state_19335[(2)]);var state_19335__$1 = state_19335;var statearr_19344_19390 = state_19335__$1;(statearr_19344_19390[(2)] = inst_19308);
(statearr_19344_19390[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19336 === (21)))
{var inst_19328 = (state_19335[(2)]);var state_19335__$1 = (function (){var statearr_19345 = state_19335;(statearr_19345[(9)] = inst_19328);
return statearr_19345;
})();var statearr_19346_19391 = state_19335__$1;(statearr_19346_19391[(2)] = null);
(statearr_19346_19391[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19336 === (13)))
{var inst_19290 = (state_19335[(10)]);var inst_19292 = cljs.core.chunked_seq_QMARK_.call(null,inst_19290);var state_19335__$1 = state_19335;if(inst_19292)
{var statearr_19347_19392 = state_19335__$1;(statearr_19347_19392[(1)] = (16));
} else
{var statearr_19348_19393 = state_19335__$1;(statearr_19348_19393[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19336 === (22)))
{var inst_19320 = (state_19335[(2)]);var state_19335__$1 = state_19335;if(cljs.core.truth_(inst_19320))
{var statearr_19349_19394 = state_19335__$1;(statearr_19349_19394[(1)] = (23));
} else
{var statearr_19350_19395 = state_19335__$1;(statearr_19350_19395[(1)] = (24));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19336 === (6)))
{var inst_19314 = (state_19335[(7)]);var inst_19316 = (state_19335[(11)]);var inst_19266 = (state_19335[(8)]);var inst_19314__$1 = topic_fn.call(null,inst_19266);var inst_19315 = cljs.core.deref.call(null,mults);var inst_19316__$1 = cljs.core.get.call(null,inst_19315,inst_19314__$1);var state_19335__$1 = (function (){var statearr_19351 = state_19335;(statearr_19351[(7)] = inst_19314__$1);
(statearr_19351[(11)] = inst_19316__$1);
return statearr_19351;
})();if(cljs.core.truth_(inst_19316__$1))
{var statearr_19352_19396 = state_19335__$1;(statearr_19352_19396[(1)] = (19));
} else
{var statearr_19353_19397 = state_19335__$1;(statearr_19353_19397[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19336 === (25)))
{var inst_19325 = (state_19335[(2)]);var state_19335__$1 = state_19335;var statearr_19354_19398 = state_19335__$1;(statearr_19354_19398[(2)] = inst_19325);
(statearr_19354_19398[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19336 === (17)))
{var inst_19290 = (state_19335[(10)]);var inst_19299 = cljs.core.first.call(null,inst_19290);var inst_19300 = cljs.core.async.muxch_STAR_.call(null,inst_19299);var inst_19301 = cljs.core.async.close_BANG_.call(null,inst_19300);var inst_19302 = cljs.core.next.call(null,inst_19290);var inst_19276 = inst_19302;var inst_19277 = null;var inst_19278 = (0);var inst_19279 = (0);var state_19335__$1 = (function (){var statearr_19355 = state_19335;(statearr_19355[(12)] = inst_19301);
(statearr_19355[(13)] = inst_19276);
(statearr_19355[(14)] = inst_19277);
(statearr_19355[(15)] = inst_19279);
(statearr_19355[(16)] = inst_19278);
return statearr_19355;
})();var statearr_19356_19399 = state_19335__$1;(statearr_19356_19399[(2)] = null);
(statearr_19356_19399[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19336 === (3)))
{var inst_19333 = (state_19335[(2)]);var state_19335__$1 = state_19335;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19335__$1,inst_19333);
} else
{if((state_val_19336 === (12)))
{var inst_19310 = (state_19335[(2)]);var state_19335__$1 = state_19335;var statearr_19357_19400 = state_19335__$1;(statearr_19357_19400[(2)] = inst_19310);
(statearr_19357_19400[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19336 === (2)))
{var state_19335__$1 = state_19335;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19335__$1,(4),ch);
} else
{if((state_val_19336 === (23)))
{var state_19335__$1 = state_19335;var statearr_19358_19401 = state_19335__$1;(statearr_19358_19401[(2)] = null);
(statearr_19358_19401[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19336 === (19)))
{var inst_19316 = (state_19335[(11)]);var inst_19266 = (state_19335[(8)]);var inst_19318 = cljs.core.async.muxch_STAR_.call(null,inst_19316);var state_19335__$1 = state_19335;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19335__$1,(22),inst_19318,inst_19266);
} else
{if((state_val_19336 === (11)))
{var inst_19276 = (state_19335[(13)]);var inst_19290 = (state_19335[(10)]);var inst_19290__$1 = cljs.core.seq.call(null,inst_19276);var state_19335__$1 = (function (){var statearr_19359 = state_19335;(statearr_19359[(10)] = inst_19290__$1);
return statearr_19359;
})();if(inst_19290__$1)
{var statearr_19360_19402 = state_19335__$1;(statearr_19360_19402[(1)] = (13));
} else
{var statearr_19361_19403 = state_19335__$1;(statearr_19361_19403[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19336 === (9)))
{var inst_19312 = (state_19335[(2)]);var state_19335__$1 = state_19335;var statearr_19362_19404 = state_19335__$1;(statearr_19362_19404[(2)] = inst_19312);
(statearr_19362_19404[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19336 === (5)))
{var inst_19273 = cljs.core.deref.call(null,mults);var inst_19274 = cljs.core.vals.call(null,inst_19273);var inst_19275 = cljs.core.seq.call(null,inst_19274);var inst_19276 = inst_19275;var inst_19277 = null;var inst_19278 = (0);var inst_19279 = (0);var state_19335__$1 = (function (){var statearr_19363 = state_19335;(statearr_19363[(13)] = inst_19276);
(statearr_19363[(14)] = inst_19277);
(statearr_19363[(15)] = inst_19279);
(statearr_19363[(16)] = inst_19278);
return statearr_19363;
})();var statearr_19364_19405 = state_19335__$1;(statearr_19364_19405[(2)] = null);
(statearr_19364_19405[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19336 === (14)))
{var state_19335__$1 = state_19335;var statearr_19368_19406 = state_19335__$1;(statearr_19368_19406[(2)] = null);
(statearr_19368_19406[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19336 === (16)))
{var inst_19290 = (state_19335[(10)]);var inst_19294 = cljs.core.chunk_first.call(null,inst_19290);var inst_19295 = cljs.core.chunk_rest.call(null,inst_19290);var inst_19296 = cljs.core.count.call(null,inst_19294);var inst_19276 = inst_19295;var inst_19277 = inst_19294;var inst_19278 = inst_19296;var inst_19279 = (0);var state_19335__$1 = (function (){var statearr_19369 = state_19335;(statearr_19369[(13)] = inst_19276);
(statearr_19369[(14)] = inst_19277);
(statearr_19369[(15)] = inst_19279);
(statearr_19369[(16)] = inst_19278);
return statearr_19369;
})();var statearr_19370_19407 = state_19335__$1;(statearr_19370_19407[(2)] = null);
(statearr_19370_19407[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19336 === (10)))
{var inst_19276 = (state_19335[(13)]);var inst_19277 = (state_19335[(14)]);var inst_19279 = (state_19335[(15)]);var inst_19278 = (state_19335[(16)]);var inst_19284 = cljs.core._nth.call(null,inst_19277,inst_19279);var inst_19285 = cljs.core.async.muxch_STAR_.call(null,inst_19284);var inst_19286 = cljs.core.async.close_BANG_.call(null,inst_19285);var inst_19287 = (inst_19279 + (1));var tmp19365 = inst_19276;var tmp19366 = inst_19277;var tmp19367 = inst_19278;var inst_19276__$1 = tmp19365;var inst_19277__$1 = tmp19366;var inst_19278__$1 = tmp19367;var inst_19279__$1 = inst_19287;var state_19335__$1 = (function (){var statearr_19371 = state_19335;(statearr_19371[(13)] = inst_19276__$1);
(statearr_19371[(14)] = inst_19277__$1);
(statearr_19371[(15)] = inst_19279__$1);
(statearr_19371[(16)] = inst_19278__$1);
(statearr_19371[(17)] = inst_19286);
return statearr_19371;
})();var statearr_19372_19408 = state_19335__$1;(statearr_19372_19408[(2)] = null);
(statearr_19372_19408[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19336 === (18)))
{var inst_19305 = (state_19335[(2)]);var state_19335__$1 = state_19335;var statearr_19373_19409 = state_19335__$1;(statearr_19373_19409[(2)] = inst_19305);
(statearr_19373_19409[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19336 === (8)))
{var inst_19279 = (state_19335[(15)]);var inst_19278 = (state_19335[(16)]);var inst_19281 = (inst_19279 < inst_19278);var inst_19282 = inst_19281;var state_19335__$1 = state_19335;if(cljs.core.truth_(inst_19282))
{var statearr_19374_19410 = state_19335__$1;(statearr_19374_19410[(1)] = (10));
} else
{var statearr_19375_19411 = state_19335__$1;(statearr_19375_19411[(1)] = (11));
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
});})(c__14669__auto___19383,mults,ensure_mult,p))
;return ((function (switch__14613__auto__,c__14669__auto___19383,mults,ensure_mult,p){
return (function() {
var state_machine__14614__auto__ = null;
var state_machine__14614__auto____0 = (function (){var statearr_19379 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_19379[(0)] = state_machine__14614__auto__);
(statearr_19379[(1)] = (1));
return statearr_19379;
});
var state_machine__14614__auto____1 = (function (state_19335){while(true){
var ret_value__14615__auto__ = (function (){try{while(true){
var result__14616__auto__ = switch__14613__auto__.call(null,state_19335);if(cljs.core.keyword_identical_QMARK_.call(null,result__14616__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__14616__auto__;
}
break;
}
}catch (e19380){if((e19380 instanceof Object))
{var ex__14617__auto__ = e19380;var statearr_19381_19412 = state_19335;(statearr_19381_19412[(5)] = ex__14617__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19335);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e19380;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19413 = state_19335;
state_19335 = G__19413;
continue;
}
} else
{return ret_value__14615__auto__;
}
break;
}
});
state_machine__14614__auto__ = function(state_19335){
switch(arguments.length){
case 0:
return state_machine__14614__auto____0.call(this);
case 1:
return state_machine__14614__auto____1.call(this,state_19335);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14614__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14614__auto____0;
state_machine__14614__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14614__auto____1;
return state_machine__14614__auto__;
})()
;})(switch__14613__auto__,c__14669__auto___19383,mults,ensure_mult,p))
})();var state__14671__auto__ = (function (){var statearr_19382 = f__14670__auto__.call(null);(statearr_19382[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14669__auto___19383);
return statearr_19382;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14671__auto__);
});})(c__14669__auto___19383,mults,ensure_mult,p))
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
,cljs.core.range.call(null,cnt));var c__14669__auto___19550 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14669__auto___19550,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__14670__auto__ = (function (){var switch__14613__auto__ = ((function (c__14669__auto___19550,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_19520){var state_val_19521 = (state_19520[(1)]);if((state_val_19521 === (7)))
{var state_19520__$1 = state_19520;var statearr_19522_19551 = state_19520__$1;(statearr_19522_19551[(2)] = null);
(statearr_19522_19551[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19521 === (1)))
{var state_19520__$1 = state_19520;var statearr_19523_19552 = state_19520__$1;(statearr_19523_19552[(2)] = null);
(statearr_19523_19552[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19521 === (4)))
{var inst_19484 = (state_19520[(7)]);var inst_19486 = (inst_19484 < cnt);var state_19520__$1 = state_19520;if(cljs.core.truth_(inst_19486))
{var statearr_19524_19553 = state_19520__$1;(statearr_19524_19553[(1)] = (6));
} else
{var statearr_19525_19554 = state_19520__$1;(statearr_19525_19554[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19521 === (15)))
{var inst_19516 = (state_19520[(2)]);var state_19520__$1 = state_19520;var statearr_19526_19555 = state_19520__$1;(statearr_19526_19555[(2)] = inst_19516);
(statearr_19526_19555[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19521 === (13)))
{var inst_19509 = cljs.core.async.close_BANG_.call(null,out);var state_19520__$1 = state_19520;var statearr_19527_19556 = state_19520__$1;(statearr_19527_19556[(2)] = inst_19509);
(statearr_19527_19556[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19521 === (6)))
{var state_19520__$1 = state_19520;var statearr_19528_19557 = state_19520__$1;(statearr_19528_19557[(2)] = null);
(statearr_19528_19557[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19521 === (3)))
{var inst_19518 = (state_19520[(2)]);var state_19520__$1 = state_19520;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19520__$1,inst_19518);
} else
{if((state_val_19521 === (12)))
{var inst_19506 = (state_19520[(8)]);var inst_19506__$1 = (state_19520[(2)]);var inst_19507 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_19506__$1);var state_19520__$1 = (function (){var statearr_19529 = state_19520;(statearr_19529[(8)] = inst_19506__$1);
return statearr_19529;
})();if(cljs.core.truth_(inst_19507))
{var statearr_19530_19558 = state_19520__$1;(statearr_19530_19558[(1)] = (13));
} else
{var statearr_19531_19559 = state_19520__$1;(statearr_19531_19559[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19521 === (2)))
{var inst_19483 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_19484 = (0);var state_19520__$1 = (function (){var statearr_19532 = state_19520;(statearr_19532[(9)] = inst_19483);
(statearr_19532[(7)] = inst_19484);
return statearr_19532;
})();var statearr_19533_19560 = state_19520__$1;(statearr_19533_19560[(2)] = null);
(statearr_19533_19560[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19521 === (11)))
{var inst_19484 = (state_19520[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_19520,(10),Object,null,(9));var inst_19493 = chs__$1.call(null,inst_19484);var inst_19494 = done.call(null,inst_19484);var inst_19495 = cljs.core.async.take_BANG_.call(null,inst_19493,inst_19494);var state_19520__$1 = state_19520;var statearr_19534_19561 = state_19520__$1;(statearr_19534_19561[(2)] = inst_19495);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19520__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19521 === (9)))
{var inst_19484 = (state_19520[(7)]);var inst_19497 = (state_19520[(2)]);var inst_19498 = (inst_19484 + (1));var inst_19484__$1 = inst_19498;var state_19520__$1 = (function (){var statearr_19535 = state_19520;(statearr_19535[(10)] = inst_19497);
(statearr_19535[(7)] = inst_19484__$1);
return statearr_19535;
})();var statearr_19536_19562 = state_19520__$1;(statearr_19536_19562[(2)] = null);
(statearr_19536_19562[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19521 === (5)))
{var inst_19504 = (state_19520[(2)]);var state_19520__$1 = (function (){var statearr_19537 = state_19520;(statearr_19537[(11)] = inst_19504);
return statearr_19537;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19520__$1,(12),dchan);
} else
{if((state_val_19521 === (14)))
{var inst_19506 = (state_19520[(8)]);var inst_19511 = cljs.core.apply.call(null,f,inst_19506);var state_19520__$1 = state_19520;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19520__$1,(16),out,inst_19511);
} else
{if((state_val_19521 === (16)))
{var inst_19513 = (state_19520[(2)]);var state_19520__$1 = (function (){var statearr_19538 = state_19520;(statearr_19538[(12)] = inst_19513);
return statearr_19538;
})();var statearr_19539_19563 = state_19520__$1;(statearr_19539_19563[(2)] = null);
(statearr_19539_19563[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19521 === (10)))
{var inst_19488 = (state_19520[(2)]);var inst_19489 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_19520__$1 = (function (){var statearr_19540 = state_19520;(statearr_19540[(13)] = inst_19488);
return statearr_19540;
})();var statearr_19541_19564 = state_19520__$1;(statearr_19541_19564[(2)] = inst_19489);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19520__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19521 === (8)))
{var inst_19502 = (state_19520[(2)]);var state_19520__$1 = state_19520;var statearr_19542_19565 = state_19520__$1;(statearr_19542_19565[(2)] = inst_19502);
(statearr_19542_19565[(1)] = (5));
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
});})(c__14669__auto___19550,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__14613__auto__,c__14669__auto___19550,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__14614__auto__ = null;
var state_machine__14614__auto____0 = (function (){var statearr_19546 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_19546[(0)] = state_machine__14614__auto__);
(statearr_19546[(1)] = (1));
return statearr_19546;
});
var state_machine__14614__auto____1 = (function (state_19520){while(true){
var ret_value__14615__auto__ = (function (){try{while(true){
var result__14616__auto__ = switch__14613__auto__.call(null,state_19520);if(cljs.core.keyword_identical_QMARK_.call(null,result__14616__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__14616__auto__;
}
break;
}
}catch (e19547){if((e19547 instanceof Object))
{var ex__14617__auto__ = e19547;var statearr_19548_19566 = state_19520;(statearr_19548_19566[(5)] = ex__14617__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19520);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e19547;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19567 = state_19520;
state_19520 = G__19567;
continue;
}
} else
{return ret_value__14615__auto__;
}
break;
}
});
state_machine__14614__auto__ = function(state_19520){
switch(arguments.length){
case 0:
return state_machine__14614__auto____0.call(this);
case 1:
return state_machine__14614__auto____1.call(this,state_19520);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14614__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14614__auto____0;
state_machine__14614__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14614__auto____1;
return state_machine__14614__auto__;
})()
;})(switch__14613__auto__,c__14669__auto___19550,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__14671__auto__ = (function (){var statearr_19549 = f__14670__auto__.call(null);(statearr_19549[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14669__auto___19550);
return statearr_19549;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14671__auto__);
});})(c__14669__auto___19550,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__14669__auto___19675 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14669__auto___19675,out){
return (function (){var f__14670__auto__ = (function (){var switch__14613__auto__ = ((function (c__14669__auto___19675,out){
return (function (state_19651){var state_val_19652 = (state_19651[(1)]);if((state_val_19652 === (7)))
{var inst_19631 = (state_19651[(7)]);var inst_19630 = (state_19651[(8)]);var inst_19630__$1 = (state_19651[(2)]);var inst_19631__$1 = cljs.core.nth.call(null,inst_19630__$1,(0),null);var inst_19632 = cljs.core.nth.call(null,inst_19630__$1,(1),null);var inst_19633 = (inst_19631__$1 == null);var state_19651__$1 = (function (){var statearr_19653 = state_19651;(statearr_19653[(7)] = inst_19631__$1);
(statearr_19653[(9)] = inst_19632);
(statearr_19653[(8)] = inst_19630__$1);
return statearr_19653;
})();if(cljs.core.truth_(inst_19633))
{var statearr_19654_19676 = state_19651__$1;(statearr_19654_19676[(1)] = (8));
} else
{var statearr_19655_19677 = state_19651__$1;(statearr_19655_19677[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19652 === (1)))
{var inst_19622 = cljs.core.vec.call(null,chs);var inst_19623 = inst_19622;var state_19651__$1 = (function (){var statearr_19656 = state_19651;(statearr_19656[(10)] = inst_19623);
return statearr_19656;
})();var statearr_19657_19678 = state_19651__$1;(statearr_19657_19678[(2)] = null);
(statearr_19657_19678[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19652 === (4)))
{var inst_19623 = (state_19651[(10)]);var state_19651__$1 = state_19651;return cljs.core.async.ioc_alts_BANG_.call(null,state_19651__$1,(7),inst_19623);
} else
{if((state_val_19652 === (6)))
{var inst_19647 = (state_19651[(2)]);var state_19651__$1 = state_19651;var statearr_19658_19679 = state_19651__$1;(statearr_19658_19679[(2)] = inst_19647);
(statearr_19658_19679[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19652 === (3)))
{var inst_19649 = (state_19651[(2)]);var state_19651__$1 = state_19651;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19651__$1,inst_19649);
} else
{if((state_val_19652 === (2)))
{var inst_19623 = (state_19651[(10)]);var inst_19625 = cljs.core.count.call(null,inst_19623);var inst_19626 = (inst_19625 > (0));var state_19651__$1 = state_19651;if(cljs.core.truth_(inst_19626))
{var statearr_19660_19680 = state_19651__$1;(statearr_19660_19680[(1)] = (4));
} else
{var statearr_19661_19681 = state_19651__$1;(statearr_19661_19681[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19652 === (11)))
{var inst_19623 = (state_19651[(10)]);var inst_19640 = (state_19651[(2)]);var tmp19659 = inst_19623;var inst_19623__$1 = tmp19659;var state_19651__$1 = (function (){var statearr_19662 = state_19651;(statearr_19662[(11)] = inst_19640);
(statearr_19662[(10)] = inst_19623__$1);
return statearr_19662;
})();var statearr_19663_19682 = state_19651__$1;(statearr_19663_19682[(2)] = null);
(statearr_19663_19682[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19652 === (9)))
{var inst_19631 = (state_19651[(7)]);var state_19651__$1 = state_19651;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19651__$1,(11),out,inst_19631);
} else
{if((state_val_19652 === (5)))
{var inst_19645 = cljs.core.async.close_BANG_.call(null,out);var state_19651__$1 = state_19651;var statearr_19664_19683 = state_19651__$1;(statearr_19664_19683[(2)] = inst_19645);
(statearr_19664_19683[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19652 === (10)))
{var inst_19643 = (state_19651[(2)]);var state_19651__$1 = state_19651;var statearr_19665_19684 = state_19651__$1;(statearr_19665_19684[(2)] = inst_19643);
(statearr_19665_19684[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19652 === (8)))
{var inst_19631 = (state_19651[(7)]);var inst_19632 = (state_19651[(9)]);var inst_19630 = (state_19651[(8)]);var inst_19623 = (state_19651[(10)]);var inst_19635 = (function (){var c = inst_19632;var v = inst_19631;var vec__19628 = inst_19630;var cs = inst_19623;return ((function (c,v,vec__19628,cs,inst_19631,inst_19632,inst_19630,inst_19623,state_val_19652,c__14669__auto___19675,out){
return (function (p1__19568_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__19568_SHARP_);
});
;})(c,v,vec__19628,cs,inst_19631,inst_19632,inst_19630,inst_19623,state_val_19652,c__14669__auto___19675,out))
})();var inst_19636 = cljs.core.filterv.call(null,inst_19635,inst_19623);var inst_19623__$1 = inst_19636;var state_19651__$1 = (function (){var statearr_19666 = state_19651;(statearr_19666[(10)] = inst_19623__$1);
return statearr_19666;
})();var statearr_19667_19685 = state_19651__$1;(statearr_19667_19685[(2)] = null);
(statearr_19667_19685[(1)] = (2));
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
});})(c__14669__auto___19675,out))
;return ((function (switch__14613__auto__,c__14669__auto___19675,out){
return (function() {
var state_machine__14614__auto__ = null;
var state_machine__14614__auto____0 = (function (){var statearr_19671 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_19671[(0)] = state_machine__14614__auto__);
(statearr_19671[(1)] = (1));
return statearr_19671;
});
var state_machine__14614__auto____1 = (function (state_19651){while(true){
var ret_value__14615__auto__ = (function (){try{while(true){
var result__14616__auto__ = switch__14613__auto__.call(null,state_19651);if(cljs.core.keyword_identical_QMARK_.call(null,result__14616__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__14616__auto__;
}
break;
}
}catch (e19672){if((e19672 instanceof Object))
{var ex__14617__auto__ = e19672;var statearr_19673_19686 = state_19651;(statearr_19673_19686[(5)] = ex__14617__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19651);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e19672;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19687 = state_19651;
state_19651 = G__19687;
continue;
}
} else
{return ret_value__14615__auto__;
}
break;
}
});
state_machine__14614__auto__ = function(state_19651){
switch(arguments.length){
case 0:
return state_machine__14614__auto____0.call(this);
case 1:
return state_machine__14614__auto____1.call(this,state_19651);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14614__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14614__auto____0;
state_machine__14614__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14614__auto____1;
return state_machine__14614__auto__;
})()
;})(switch__14613__auto__,c__14669__auto___19675,out))
})();var state__14671__auto__ = (function (){var statearr_19674 = f__14670__auto__.call(null);(statearr_19674[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14669__auto___19675);
return statearr_19674;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14671__auto__);
});})(c__14669__auto___19675,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__14669__auto___19780 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14669__auto___19780,out){
return (function (){var f__14670__auto__ = (function (){var switch__14613__auto__ = ((function (c__14669__auto___19780,out){
return (function (state_19757){var state_val_19758 = (state_19757[(1)]);if((state_val_19758 === (7)))
{var inst_19739 = (state_19757[(7)]);var inst_19739__$1 = (state_19757[(2)]);var inst_19740 = (inst_19739__$1 == null);var inst_19741 = cljs.core.not.call(null,inst_19740);var state_19757__$1 = (function (){var statearr_19759 = state_19757;(statearr_19759[(7)] = inst_19739__$1);
return statearr_19759;
})();if(inst_19741)
{var statearr_19760_19781 = state_19757__$1;(statearr_19760_19781[(1)] = (8));
} else
{var statearr_19761_19782 = state_19757__$1;(statearr_19761_19782[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19758 === (1)))
{var inst_19734 = (0);var state_19757__$1 = (function (){var statearr_19762 = state_19757;(statearr_19762[(8)] = inst_19734);
return statearr_19762;
})();var statearr_19763_19783 = state_19757__$1;(statearr_19763_19783[(2)] = null);
(statearr_19763_19783[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19758 === (4)))
{var state_19757__$1 = state_19757;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19757__$1,(7),ch);
} else
{if((state_val_19758 === (6)))
{var inst_19752 = (state_19757[(2)]);var state_19757__$1 = state_19757;var statearr_19764_19784 = state_19757__$1;(statearr_19764_19784[(2)] = inst_19752);
(statearr_19764_19784[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19758 === (3)))
{var inst_19754 = (state_19757[(2)]);var inst_19755 = cljs.core.async.close_BANG_.call(null,out);var state_19757__$1 = (function (){var statearr_19765 = state_19757;(statearr_19765[(9)] = inst_19754);
return statearr_19765;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19757__$1,inst_19755);
} else
{if((state_val_19758 === (2)))
{var inst_19734 = (state_19757[(8)]);var inst_19736 = (inst_19734 < n);var state_19757__$1 = state_19757;if(cljs.core.truth_(inst_19736))
{var statearr_19766_19785 = state_19757__$1;(statearr_19766_19785[(1)] = (4));
} else
{var statearr_19767_19786 = state_19757__$1;(statearr_19767_19786[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19758 === (11)))
{var inst_19734 = (state_19757[(8)]);var inst_19744 = (state_19757[(2)]);var inst_19745 = (inst_19734 + (1));var inst_19734__$1 = inst_19745;var state_19757__$1 = (function (){var statearr_19768 = state_19757;(statearr_19768[(10)] = inst_19744);
(statearr_19768[(8)] = inst_19734__$1);
return statearr_19768;
})();var statearr_19769_19787 = state_19757__$1;(statearr_19769_19787[(2)] = null);
(statearr_19769_19787[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19758 === (9)))
{var state_19757__$1 = state_19757;var statearr_19770_19788 = state_19757__$1;(statearr_19770_19788[(2)] = null);
(statearr_19770_19788[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19758 === (5)))
{var state_19757__$1 = state_19757;var statearr_19771_19789 = state_19757__$1;(statearr_19771_19789[(2)] = null);
(statearr_19771_19789[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19758 === (10)))
{var inst_19749 = (state_19757[(2)]);var state_19757__$1 = state_19757;var statearr_19772_19790 = state_19757__$1;(statearr_19772_19790[(2)] = inst_19749);
(statearr_19772_19790[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19758 === (8)))
{var inst_19739 = (state_19757[(7)]);var state_19757__$1 = state_19757;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19757__$1,(11),out,inst_19739);
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
});})(c__14669__auto___19780,out))
;return ((function (switch__14613__auto__,c__14669__auto___19780,out){
return (function() {
var state_machine__14614__auto__ = null;
var state_machine__14614__auto____0 = (function (){var statearr_19776 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_19776[(0)] = state_machine__14614__auto__);
(statearr_19776[(1)] = (1));
return statearr_19776;
});
var state_machine__14614__auto____1 = (function (state_19757){while(true){
var ret_value__14615__auto__ = (function (){try{while(true){
var result__14616__auto__ = switch__14613__auto__.call(null,state_19757);if(cljs.core.keyword_identical_QMARK_.call(null,result__14616__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__14616__auto__;
}
break;
}
}catch (e19777){if((e19777 instanceof Object))
{var ex__14617__auto__ = e19777;var statearr_19778_19791 = state_19757;(statearr_19778_19791[(5)] = ex__14617__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19757);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e19777;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19792 = state_19757;
state_19757 = G__19792;
continue;
}
} else
{return ret_value__14615__auto__;
}
break;
}
});
state_machine__14614__auto__ = function(state_19757){
switch(arguments.length){
case 0:
return state_machine__14614__auto____0.call(this);
case 1:
return state_machine__14614__auto____1.call(this,state_19757);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14614__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14614__auto____0;
state_machine__14614__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14614__auto____1;
return state_machine__14614__auto__;
})()
;})(switch__14613__auto__,c__14669__auto___19780,out))
})();var state__14671__auto__ = (function (){var statearr_19779 = f__14670__auto__.call(null);(statearr_19779[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14669__auto___19780);
return statearr_19779;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14671__auto__);
});})(c__14669__auto___19780,out))
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t19800 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t19800 = (function (ch,f,map_LT_,meta19801){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta19801 = meta19801;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19800.cljs$lang$type = true;
cljs.core.async.t19800.cljs$lang$ctorStr = "cljs.core.async/t19800";
cljs.core.async.t19800.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t19800");
});
cljs.core.async.t19800.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t19800.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t19800.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t19800.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t19803 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t19803 = (function (fn1,_,meta19801,ch,f,map_LT_,meta19804){
this.fn1 = fn1;
this._ = _;
this.meta19801 = meta19801;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta19804 = meta19804;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19803.cljs$lang$type = true;
cljs.core.async.t19803.cljs$lang$ctorStr = "cljs.core.async/t19803";
cljs.core.async.t19803.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t19803");
});})(___$1))
;
cljs.core.async.t19803.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t19803.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t19803.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__19793_SHARP_){return f1.call(null,(((p1__19793_SHARP_ == null))?null:self__.f.call(null,p1__19793_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t19803.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_19805){var self__ = this;
var _19805__$1 = this;return self__.meta19804;
});})(___$1))
;
cljs.core.async.t19803.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_19805,meta19804__$1){var self__ = this;
var _19805__$1 = this;return (new cljs.core.async.t19803(self__.fn1,self__._,self__.meta19801,self__.ch,self__.f,self__.map_LT_,meta19804__$1));
});})(___$1))
;
cljs.core.async.__GT_t19803 = ((function (___$1){
return (function __GT_t19803(fn1__$1,___$2,meta19801__$1,ch__$2,f__$2,map_LT___$2,meta19804){return (new cljs.core.async.t19803(fn1__$1,___$2,meta19801__$1,ch__$2,f__$2,map_LT___$2,meta19804));
});})(___$1))
;
}
return (new cljs.core.async.t19803(fn1,___$1,self__.meta19801,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t19800.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t19800.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t19800.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t19800.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19802){var self__ = this;
var _19802__$1 = this;return self__.meta19801;
});
cljs.core.async.t19800.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19802,meta19801__$1){var self__ = this;
var _19802__$1 = this;return (new cljs.core.async.t19800(self__.ch,self__.f,self__.map_LT_,meta19801__$1));
});
cljs.core.async.__GT_t19800 = (function __GT_t19800(ch__$1,f__$1,map_LT___$1,meta19801){return (new cljs.core.async.t19800(ch__$1,f__$1,map_LT___$1,meta19801));
});
}
return (new cljs.core.async.t19800(ch,f,map_LT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t19809 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t19809 = (function (ch,f,map_GT_,meta19810){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta19810 = meta19810;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19809.cljs$lang$type = true;
cljs.core.async.t19809.cljs$lang$ctorStr = "cljs.core.async/t19809";
cljs.core.async.t19809.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t19809");
});
cljs.core.async.t19809.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t19809.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t19809.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t19809.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t19809.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t19809.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t19809.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19811){var self__ = this;
var _19811__$1 = this;return self__.meta19810;
});
cljs.core.async.t19809.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19811,meta19810__$1){var self__ = this;
var _19811__$1 = this;return (new cljs.core.async.t19809(self__.ch,self__.f,self__.map_GT_,meta19810__$1));
});
cljs.core.async.__GT_t19809 = (function __GT_t19809(ch__$1,f__$1,map_GT___$1,meta19810){return (new cljs.core.async.t19809(ch__$1,f__$1,map_GT___$1,meta19810));
});
}
return (new cljs.core.async.t19809(ch,f,map_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t19815 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t19815 = (function (ch,p,filter_GT_,meta19816){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta19816 = meta19816;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19815.cljs$lang$type = true;
cljs.core.async.t19815.cljs$lang$ctorStr = "cljs.core.async/t19815";
cljs.core.async.t19815.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t19815");
});
cljs.core.async.t19815.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t19815.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t19815.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t19815.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t19815.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t19815.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t19815.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t19815.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19817){var self__ = this;
var _19817__$1 = this;return self__.meta19816;
});
cljs.core.async.t19815.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19817,meta19816__$1){var self__ = this;
var _19817__$1 = this;return (new cljs.core.async.t19815(self__.ch,self__.p,self__.filter_GT_,meta19816__$1));
});
cljs.core.async.__GT_t19815 = (function __GT_t19815(ch__$1,p__$1,filter_GT___$1,meta19816){return (new cljs.core.async.t19815(ch__$1,p__$1,filter_GT___$1,meta19816));
});
}
return (new cljs.core.async.t19815(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__14669__auto___19900 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14669__auto___19900,out){
return (function (){var f__14670__auto__ = (function (){var switch__14613__auto__ = ((function (c__14669__auto___19900,out){
return (function (state_19879){var state_val_19880 = (state_19879[(1)]);if((state_val_19880 === (7)))
{var inst_19875 = (state_19879[(2)]);var state_19879__$1 = state_19879;var statearr_19881_19901 = state_19879__$1;(statearr_19881_19901[(2)] = inst_19875);
(statearr_19881_19901[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19880 === (1)))
{var state_19879__$1 = state_19879;var statearr_19882_19902 = state_19879__$1;(statearr_19882_19902[(2)] = null);
(statearr_19882_19902[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19880 === (4)))
{var inst_19861 = (state_19879[(7)]);var inst_19861__$1 = (state_19879[(2)]);var inst_19862 = (inst_19861__$1 == null);var state_19879__$1 = (function (){var statearr_19883 = state_19879;(statearr_19883[(7)] = inst_19861__$1);
return statearr_19883;
})();if(cljs.core.truth_(inst_19862))
{var statearr_19884_19903 = state_19879__$1;(statearr_19884_19903[(1)] = (5));
} else
{var statearr_19885_19904 = state_19879__$1;(statearr_19885_19904[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19880 === (6)))
{var inst_19861 = (state_19879[(7)]);var inst_19866 = p.call(null,inst_19861);var state_19879__$1 = state_19879;if(cljs.core.truth_(inst_19866))
{var statearr_19886_19905 = state_19879__$1;(statearr_19886_19905[(1)] = (8));
} else
{var statearr_19887_19906 = state_19879__$1;(statearr_19887_19906[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19880 === (3)))
{var inst_19877 = (state_19879[(2)]);var state_19879__$1 = state_19879;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19879__$1,inst_19877);
} else
{if((state_val_19880 === (2)))
{var state_19879__$1 = state_19879;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19879__$1,(4),ch);
} else
{if((state_val_19880 === (11)))
{var inst_19869 = (state_19879[(2)]);var state_19879__$1 = state_19879;var statearr_19888_19907 = state_19879__$1;(statearr_19888_19907[(2)] = inst_19869);
(statearr_19888_19907[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19880 === (9)))
{var state_19879__$1 = state_19879;var statearr_19889_19908 = state_19879__$1;(statearr_19889_19908[(2)] = null);
(statearr_19889_19908[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19880 === (5)))
{var inst_19864 = cljs.core.async.close_BANG_.call(null,out);var state_19879__$1 = state_19879;var statearr_19890_19909 = state_19879__$1;(statearr_19890_19909[(2)] = inst_19864);
(statearr_19890_19909[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19880 === (10)))
{var inst_19872 = (state_19879[(2)]);var state_19879__$1 = (function (){var statearr_19891 = state_19879;(statearr_19891[(8)] = inst_19872);
return statearr_19891;
})();var statearr_19892_19910 = state_19879__$1;(statearr_19892_19910[(2)] = null);
(statearr_19892_19910[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19880 === (8)))
{var inst_19861 = (state_19879[(7)]);var state_19879__$1 = state_19879;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19879__$1,(11),out,inst_19861);
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
});})(c__14669__auto___19900,out))
;return ((function (switch__14613__auto__,c__14669__auto___19900,out){
return (function() {
var state_machine__14614__auto__ = null;
var state_machine__14614__auto____0 = (function (){var statearr_19896 = [null,null,null,null,null,null,null,null,null];(statearr_19896[(0)] = state_machine__14614__auto__);
(statearr_19896[(1)] = (1));
return statearr_19896;
});
var state_machine__14614__auto____1 = (function (state_19879){while(true){
var ret_value__14615__auto__ = (function (){try{while(true){
var result__14616__auto__ = switch__14613__auto__.call(null,state_19879);if(cljs.core.keyword_identical_QMARK_.call(null,result__14616__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__14616__auto__;
}
break;
}
}catch (e19897){if((e19897 instanceof Object))
{var ex__14617__auto__ = e19897;var statearr_19898_19911 = state_19879;(statearr_19898_19911[(5)] = ex__14617__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19879);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e19897;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19912 = state_19879;
state_19879 = G__19912;
continue;
}
} else
{return ret_value__14615__auto__;
}
break;
}
});
state_machine__14614__auto__ = function(state_19879){
switch(arguments.length){
case 0:
return state_machine__14614__auto____0.call(this);
case 1:
return state_machine__14614__auto____1.call(this,state_19879);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14614__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14614__auto____0;
state_machine__14614__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14614__auto____1;
return state_machine__14614__auto__;
})()
;})(switch__14613__auto__,c__14669__auto___19900,out))
})();var state__14671__auto__ = (function (){var statearr_19899 = f__14670__auto__.call(null);(statearr_19899[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14669__auto___19900);
return statearr_19899;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14671__auto__);
});})(c__14669__auto___19900,out))
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
return (function (state_20078){var state_val_20079 = (state_20078[(1)]);if((state_val_20079 === (7)))
{var inst_20074 = (state_20078[(2)]);var state_20078__$1 = state_20078;var statearr_20080_20121 = state_20078__$1;(statearr_20080_20121[(2)] = inst_20074);
(statearr_20080_20121[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20079 === (20)))
{var inst_20044 = (state_20078[(7)]);var inst_20055 = (state_20078[(2)]);var inst_20056 = cljs.core.next.call(null,inst_20044);var inst_20030 = inst_20056;var inst_20031 = null;var inst_20032 = (0);var inst_20033 = (0);var state_20078__$1 = (function (){var statearr_20081 = state_20078;(statearr_20081[(8)] = inst_20031);
(statearr_20081[(9)] = inst_20032);
(statearr_20081[(10)] = inst_20030);
(statearr_20081[(11)] = inst_20055);
(statearr_20081[(12)] = inst_20033);
return statearr_20081;
})();var statearr_20082_20122 = state_20078__$1;(statearr_20082_20122[(2)] = null);
(statearr_20082_20122[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20079 === (1)))
{var state_20078__$1 = state_20078;var statearr_20083_20123 = state_20078__$1;(statearr_20083_20123[(2)] = null);
(statearr_20083_20123[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20079 === (4)))
{var inst_20019 = (state_20078[(13)]);var inst_20019__$1 = (state_20078[(2)]);var inst_20020 = (inst_20019__$1 == null);var state_20078__$1 = (function (){var statearr_20084 = state_20078;(statearr_20084[(13)] = inst_20019__$1);
return statearr_20084;
})();if(cljs.core.truth_(inst_20020))
{var statearr_20085_20124 = state_20078__$1;(statearr_20085_20124[(1)] = (5));
} else
{var statearr_20086_20125 = state_20078__$1;(statearr_20086_20125[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20079 === (15)))
{var state_20078__$1 = state_20078;var statearr_20090_20126 = state_20078__$1;(statearr_20090_20126[(2)] = null);
(statearr_20090_20126[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20079 === (21)))
{var state_20078__$1 = state_20078;var statearr_20091_20127 = state_20078__$1;(statearr_20091_20127[(2)] = null);
(statearr_20091_20127[(1)] = (23));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20079 === (13)))
{var inst_20031 = (state_20078[(8)]);var inst_20032 = (state_20078[(9)]);var inst_20030 = (state_20078[(10)]);var inst_20033 = (state_20078[(12)]);var inst_20040 = (state_20078[(2)]);var inst_20041 = (inst_20033 + (1));var tmp20087 = inst_20031;var tmp20088 = inst_20032;var tmp20089 = inst_20030;var inst_20030__$1 = tmp20089;var inst_20031__$1 = tmp20087;var inst_20032__$1 = tmp20088;var inst_20033__$1 = inst_20041;var state_20078__$1 = (function (){var statearr_20092 = state_20078;(statearr_20092[(8)] = inst_20031__$1);
(statearr_20092[(9)] = inst_20032__$1);
(statearr_20092[(14)] = inst_20040);
(statearr_20092[(10)] = inst_20030__$1);
(statearr_20092[(12)] = inst_20033__$1);
return statearr_20092;
})();var statearr_20093_20128 = state_20078__$1;(statearr_20093_20128[(2)] = null);
(statearr_20093_20128[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20079 === (22)))
{var state_20078__$1 = state_20078;var statearr_20094_20129 = state_20078__$1;(statearr_20094_20129[(2)] = null);
(statearr_20094_20129[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20079 === (6)))
{var inst_20019 = (state_20078[(13)]);var inst_20028 = f.call(null,inst_20019);var inst_20029 = cljs.core.seq.call(null,inst_20028);var inst_20030 = inst_20029;var inst_20031 = null;var inst_20032 = (0);var inst_20033 = (0);var state_20078__$1 = (function (){var statearr_20095 = state_20078;(statearr_20095[(8)] = inst_20031);
(statearr_20095[(9)] = inst_20032);
(statearr_20095[(10)] = inst_20030);
(statearr_20095[(12)] = inst_20033);
return statearr_20095;
})();var statearr_20096_20130 = state_20078__$1;(statearr_20096_20130[(2)] = null);
(statearr_20096_20130[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20079 === (17)))
{var inst_20044 = (state_20078[(7)]);var inst_20048 = cljs.core.chunk_first.call(null,inst_20044);var inst_20049 = cljs.core.chunk_rest.call(null,inst_20044);var inst_20050 = cljs.core.count.call(null,inst_20048);var inst_20030 = inst_20049;var inst_20031 = inst_20048;var inst_20032 = inst_20050;var inst_20033 = (0);var state_20078__$1 = (function (){var statearr_20097 = state_20078;(statearr_20097[(8)] = inst_20031);
(statearr_20097[(9)] = inst_20032);
(statearr_20097[(10)] = inst_20030);
(statearr_20097[(12)] = inst_20033);
return statearr_20097;
})();var statearr_20098_20131 = state_20078__$1;(statearr_20098_20131[(2)] = null);
(statearr_20098_20131[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20079 === (3)))
{var inst_20076 = (state_20078[(2)]);var state_20078__$1 = state_20078;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20078__$1,inst_20076);
} else
{if((state_val_20079 === (12)))
{var inst_20064 = (state_20078[(2)]);var state_20078__$1 = state_20078;var statearr_20099_20132 = state_20078__$1;(statearr_20099_20132[(2)] = inst_20064);
(statearr_20099_20132[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20079 === (2)))
{var state_20078__$1 = state_20078;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20078__$1,(4),in$);
} else
{if((state_val_20079 === (23)))
{var inst_20072 = (state_20078[(2)]);var state_20078__$1 = state_20078;var statearr_20100_20133 = state_20078__$1;(statearr_20100_20133[(2)] = inst_20072);
(statearr_20100_20133[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20079 === (19)))
{var inst_20059 = (state_20078[(2)]);var state_20078__$1 = state_20078;var statearr_20101_20134 = state_20078__$1;(statearr_20101_20134[(2)] = inst_20059);
(statearr_20101_20134[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20079 === (11)))
{var inst_20044 = (state_20078[(7)]);var inst_20030 = (state_20078[(10)]);var inst_20044__$1 = cljs.core.seq.call(null,inst_20030);var state_20078__$1 = (function (){var statearr_20102 = state_20078;(statearr_20102[(7)] = inst_20044__$1);
return statearr_20102;
})();if(inst_20044__$1)
{var statearr_20103_20135 = state_20078__$1;(statearr_20103_20135[(1)] = (14));
} else
{var statearr_20104_20136 = state_20078__$1;(statearr_20104_20136[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20079 === (9)))
{var inst_20066 = (state_20078[(2)]);var inst_20067 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_20078__$1 = (function (){var statearr_20105 = state_20078;(statearr_20105[(15)] = inst_20066);
return statearr_20105;
})();if(cljs.core.truth_(inst_20067))
{var statearr_20106_20137 = state_20078__$1;(statearr_20106_20137[(1)] = (21));
} else
{var statearr_20107_20138 = state_20078__$1;(statearr_20107_20138[(1)] = (22));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20079 === (5)))
{var inst_20022 = cljs.core.async.close_BANG_.call(null,out);var state_20078__$1 = state_20078;var statearr_20108_20139 = state_20078__$1;(statearr_20108_20139[(2)] = inst_20022);
(statearr_20108_20139[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20079 === (14)))
{var inst_20044 = (state_20078[(7)]);var inst_20046 = cljs.core.chunked_seq_QMARK_.call(null,inst_20044);var state_20078__$1 = state_20078;if(inst_20046)
{var statearr_20109_20140 = state_20078__$1;(statearr_20109_20140[(1)] = (17));
} else
{var statearr_20110_20141 = state_20078__$1;(statearr_20110_20141[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20079 === (16)))
{var inst_20062 = (state_20078[(2)]);var state_20078__$1 = state_20078;var statearr_20111_20142 = state_20078__$1;(statearr_20111_20142[(2)] = inst_20062);
(statearr_20111_20142[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20079 === (10)))
{var inst_20031 = (state_20078[(8)]);var inst_20033 = (state_20078[(12)]);var inst_20038 = cljs.core._nth.call(null,inst_20031,inst_20033);var state_20078__$1 = state_20078;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20078__$1,(13),out,inst_20038);
} else
{if((state_val_20079 === (18)))
{var inst_20044 = (state_20078[(7)]);var inst_20053 = cljs.core.first.call(null,inst_20044);var state_20078__$1 = state_20078;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20078__$1,(20),out,inst_20053);
} else
{if((state_val_20079 === (8)))
{var inst_20032 = (state_20078[(9)]);var inst_20033 = (state_20078[(12)]);var inst_20035 = (inst_20033 < inst_20032);var inst_20036 = inst_20035;var state_20078__$1 = state_20078;if(cljs.core.truth_(inst_20036))
{var statearr_20112_20143 = state_20078__$1;(statearr_20112_20143[(1)] = (10));
} else
{var statearr_20113_20144 = state_20078__$1;(statearr_20113_20144[(1)] = (11));
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
var state_machine__14614__auto____0 = (function (){var statearr_20117 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_20117[(0)] = state_machine__14614__auto__);
(statearr_20117[(1)] = (1));
return statearr_20117;
});
var state_machine__14614__auto____1 = (function (state_20078){while(true){
var ret_value__14615__auto__ = (function (){try{while(true){
var result__14616__auto__ = switch__14613__auto__.call(null,state_20078);if(cljs.core.keyword_identical_QMARK_.call(null,result__14616__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__14616__auto__;
}
break;
}
}catch (e20118){if((e20118 instanceof Object))
{var ex__14617__auto__ = e20118;var statearr_20119_20145 = state_20078;(statearr_20119_20145[(5)] = ex__14617__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20078);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e20118;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20146 = state_20078;
state_20078 = G__20146;
continue;
}
} else
{return ret_value__14615__auto__;
}
break;
}
});
state_machine__14614__auto__ = function(state_20078){
switch(arguments.length){
case 0:
return state_machine__14614__auto____0.call(this);
case 1:
return state_machine__14614__auto____1.call(this,state_20078);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14614__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14614__auto____0;
state_machine__14614__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14614__auto____1;
return state_machine__14614__auto__;
})()
;})(switch__14613__auto__,c__14669__auto__))
})();var state__14671__auto__ = (function (){var statearr_20120 = f__14670__auto__.call(null);(statearr_20120[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14669__auto__);
return statearr_20120;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__14669__auto___20243 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14669__auto___20243,out){
return (function (){var f__14670__auto__ = (function (){var switch__14613__auto__ = ((function (c__14669__auto___20243,out){
return (function (state_20218){var state_val_20219 = (state_20218[(1)]);if((state_val_20219 === (7)))
{var inst_20213 = (state_20218[(2)]);var state_20218__$1 = state_20218;var statearr_20220_20244 = state_20218__$1;(statearr_20220_20244[(2)] = inst_20213);
(statearr_20220_20244[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20219 === (1)))
{var inst_20195 = null;var state_20218__$1 = (function (){var statearr_20221 = state_20218;(statearr_20221[(7)] = inst_20195);
return statearr_20221;
})();var statearr_20222_20245 = state_20218__$1;(statearr_20222_20245[(2)] = null);
(statearr_20222_20245[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20219 === (4)))
{var inst_20198 = (state_20218[(8)]);var inst_20198__$1 = (state_20218[(2)]);var inst_20199 = (inst_20198__$1 == null);var inst_20200 = cljs.core.not.call(null,inst_20199);var state_20218__$1 = (function (){var statearr_20223 = state_20218;(statearr_20223[(8)] = inst_20198__$1);
return statearr_20223;
})();if(inst_20200)
{var statearr_20224_20246 = state_20218__$1;(statearr_20224_20246[(1)] = (5));
} else
{var statearr_20225_20247 = state_20218__$1;(statearr_20225_20247[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20219 === (6)))
{var state_20218__$1 = state_20218;var statearr_20226_20248 = state_20218__$1;(statearr_20226_20248[(2)] = null);
(statearr_20226_20248[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20219 === (3)))
{var inst_20215 = (state_20218[(2)]);var inst_20216 = cljs.core.async.close_BANG_.call(null,out);var state_20218__$1 = (function (){var statearr_20227 = state_20218;(statearr_20227[(9)] = inst_20215);
return statearr_20227;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20218__$1,inst_20216);
} else
{if((state_val_20219 === (2)))
{var state_20218__$1 = state_20218;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20218__$1,(4),ch);
} else
{if((state_val_20219 === (11)))
{var inst_20198 = (state_20218[(8)]);var inst_20207 = (state_20218[(2)]);var inst_20195 = inst_20198;var state_20218__$1 = (function (){var statearr_20228 = state_20218;(statearr_20228[(10)] = inst_20207);
(statearr_20228[(7)] = inst_20195);
return statearr_20228;
})();var statearr_20229_20249 = state_20218__$1;(statearr_20229_20249[(2)] = null);
(statearr_20229_20249[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20219 === (9)))
{var inst_20198 = (state_20218[(8)]);var state_20218__$1 = state_20218;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20218__$1,(11),out,inst_20198);
} else
{if((state_val_20219 === (5)))
{var inst_20198 = (state_20218[(8)]);var inst_20195 = (state_20218[(7)]);var inst_20202 = cljs.core._EQ_.call(null,inst_20198,inst_20195);var state_20218__$1 = state_20218;if(inst_20202)
{var statearr_20231_20250 = state_20218__$1;(statearr_20231_20250[(1)] = (8));
} else
{var statearr_20232_20251 = state_20218__$1;(statearr_20232_20251[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20219 === (10)))
{var inst_20210 = (state_20218[(2)]);var state_20218__$1 = state_20218;var statearr_20233_20252 = state_20218__$1;(statearr_20233_20252[(2)] = inst_20210);
(statearr_20233_20252[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20219 === (8)))
{var inst_20195 = (state_20218[(7)]);var tmp20230 = inst_20195;var inst_20195__$1 = tmp20230;var state_20218__$1 = (function (){var statearr_20234 = state_20218;(statearr_20234[(7)] = inst_20195__$1);
return statearr_20234;
})();var statearr_20235_20253 = state_20218__$1;(statearr_20235_20253[(2)] = null);
(statearr_20235_20253[(1)] = (2));
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
});})(c__14669__auto___20243,out))
;return ((function (switch__14613__auto__,c__14669__auto___20243,out){
return (function() {
var state_machine__14614__auto__ = null;
var state_machine__14614__auto____0 = (function (){var statearr_20239 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_20239[(0)] = state_machine__14614__auto__);
(statearr_20239[(1)] = (1));
return statearr_20239;
});
var state_machine__14614__auto____1 = (function (state_20218){while(true){
var ret_value__14615__auto__ = (function (){try{while(true){
var result__14616__auto__ = switch__14613__auto__.call(null,state_20218);if(cljs.core.keyword_identical_QMARK_.call(null,result__14616__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__14616__auto__;
}
break;
}
}catch (e20240){if((e20240 instanceof Object))
{var ex__14617__auto__ = e20240;var statearr_20241_20254 = state_20218;(statearr_20241_20254[(5)] = ex__14617__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20218);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e20240;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20255 = state_20218;
state_20218 = G__20255;
continue;
}
} else
{return ret_value__14615__auto__;
}
break;
}
});
state_machine__14614__auto__ = function(state_20218){
switch(arguments.length){
case 0:
return state_machine__14614__auto____0.call(this);
case 1:
return state_machine__14614__auto____1.call(this,state_20218);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14614__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14614__auto____0;
state_machine__14614__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14614__auto____1;
return state_machine__14614__auto__;
})()
;})(switch__14613__auto__,c__14669__auto___20243,out))
})();var state__14671__auto__ = (function (){var statearr_20242 = f__14670__auto__.call(null);(statearr_20242[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14669__auto___20243);
return statearr_20242;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14671__auto__);
});})(c__14669__auto___20243,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__14669__auto___20390 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14669__auto___20390,out){
return (function (){var f__14670__auto__ = (function (){var switch__14613__auto__ = ((function (c__14669__auto___20390,out){
return (function (state_20360){var state_val_20361 = (state_20360[(1)]);if((state_val_20361 === (7)))
{var inst_20356 = (state_20360[(2)]);var state_20360__$1 = state_20360;var statearr_20362_20391 = state_20360__$1;(statearr_20362_20391[(2)] = inst_20356);
(statearr_20362_20391[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20361 === (1)))
{var inst_20323 = (new Array(n));var inst_20324 = inst_20323;var inst_20325 = (0);var state_20360__$1 = (function (){var statearr_20363 = state_20360;(statearr_20363[(7)] = inst_20324);
(statearr_20363[(8)] = inst_20325);
return statearr_20363;
})();var statearr_20364_20392 = state_20360__$1;(statearr_20364_20392[(2)] = null);
(statearr_20364_20392[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20361 === (4)))
{var inst_20328 = (state_20360[(9)]);var inst_20328__$1 = (state_20360[(2)]);var inst_20329 = (inst_20328__$1 == null);var inst_20330 = cljs.core.not.call(null,inst_20329);var state_20360__$1 = (function (){var statearr_20365 = state_20360;(statearr_20365[(9)] = inst_20328__$1);
return statearr_20365;
})();if(inst_20330)
{var statearr_20366_20393 = state_20360__$1;(statearr_20366_20393[(1)] = (5));
} else
{var statearr_20367_20394 = state_20360__$1;(statearr_20367_20394[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20361 === (15)))
{var inst_20350 = (state_20360[(2)]);var state_20360__$1 = state_20360;var statearr_20368_20395 = state_20360__$1;(statearr_20368_20395[(2)] = inst_20350);
(statearr_20368_20395[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20361 === (13)))
{var state_20360__$1 = state_20360;var statearr_20369_20396 = state_20360__$1;(statearr_20369_20396[(2)] = null);
(statearr_20369_20396[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20361 === (6)))
{var inst_20325 = (state_20360[(8)]);var inst_20346 = (inst_20325 > (0));var state_20360__$1 = state_20360;if(cljs.core.truth_(inst_20346))
{var statearr_20370_20397 = state_20360__$1;(statearr_20370_20397[(1)] = (12));
} else
{var statearr_20371_20398 = state_20360__$1;(statearr_20371_20398[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20361 === (3)))
{var inst_20358 = (state_20360[(2)]);var state_20360__$1 = state_20360;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20360__$1,inst_20358);
} else
{if((state_val_20361 === (12)))
{var inst_20324 = (state_20360[(7)]);var inst_20348 = cljs.core.vec.call(null,inst_20324);var state_20360__$1 = state_20360;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20360__$1,(15),out,inst_20348);
} else
{if((state_val_20361 === (2)))
{var state_20360__$1 = state_20360;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20360__$1,(4),ch);
} else
{if((state_val_20361 === (11)))
{var inst_20340 = (state_20360[(2)]);var inst_20341 = (new Array(n));var inst_20324 = inst_20341;var inst_20325 = (0);var state_20360__$1 = (function (){var statearr_20372 = state_20360;(statearr_20372[(7)] = inst_20324);
(statearr_20372[(8)] = inst_20325);
(statearr_20372[(10)] = inst_20340);
return statearr_20372;
})();var statearr_20373_20399 = state_20360__$1;(statearr_20373_20399[(2)] = null);
(statearr_20373_20399[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20361 === (9)))
{var inst_20324 = (state_20360[(7)]);var inst_20338 = cljs.core.vec.call(null,inst_20324);var state_20360__$1 = state_20360;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20360__$1,(11),out,inst_20338);
} else
{if((state_val_20361 === (5)))
{var inst_20328 = (state_20360[(9)]);var inst_20324 = (state_20360[(7)]);var inst_20325 = (state_20360[(8)]);var inst_20333 = (state_20360[(11)]);var inst_20332 = (inst_20324[inst_20325] = inst_20328);var inst_20333__$1 = (inst_20325 + (1));var inst_20334 = (inst_20333__$1 < n);var state_20360__$1 = (function (){var statearr_20374 = state_20360;(statearr_20374[(12)] = inst_20332);
(statearr_20374[(11)] = inst_20333__$1);
return statearr_20374;
})();if(cljs.core.truth_(inst_20334))
{var statearr_20375_20400 = state_20360__$1;(statearr_20375_20400[(1)] = (8));
} else
{var statearr_20376_20401 = state_20360__$1;(statearr_20376_20401[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20361 === (14)))
{var inst_20353 = (state_20360[(2)]);var inst_20354 = cljs.core.async.close_BANG_.call(null,out);var state_20360__$1 = (function (){var statearr_20378 = state_20360;(statearr_20378[(13)] = inst_20353);
return statearr_20378;
})();var statearr_20379_20402 = state_20360__$1;(statearr_20379_20402[(2)] = inst_20354);
(statearr_20379_20402[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20361 === (10)))
{var inst_20344 = (state_20360[(2)]);var state_20360__$1 = state_20360;var statearr_20380_20403 = state_20360__$1;(statearr_20380_20403[(2)] = inst_20344);
(statearr_20380_20403[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20361 === (8)))
{var inst_20324 = (state_20360[(7)]);var inst_20333 = (state_20360[(11)]);var tmp20377 = inst_20324;var inst_20324__$1 = tmp20377;var inst_20325 = inst_20333;var state_20360__$1 = (function (){var statearr_20381 = state_20360;(statearr_20381[(7)] = inst_20324__$1);
(statearr_20381[(8)] = inst_20325);
return statearr_20381;
})();var statearr_20382_20404 = state_20360__$1;(statearr_20382_20404[(2)] = null);
(statearr_20382_20404[(1)] = (2));
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
});})(c__14669__auto___20390,out))
;return ((function (switch__14613__auto__,c__14669__auto___20390,out){
return (function() {
var state_machine__14614__auto__ = null;
var state_machine__14614__auto____0 = (function (){var statearr_20386 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_20386[(0)] = state_machine__14614__auto__);
(statearr_20386[(1)] = (1));
return statearr_20386;
});
var state_machine__14614__auto____1 = (function (state_20360){while(true){
var ret_value__14615__auto__ = (function (){try{while(true){
var result__14616__auto__ = switch__14613__auto__.call(null,state_20360);if(cljs.core.keyword_identical_QMARK_.call(null,result__14616__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__14616__auto__;
}
break;
}
}catch (e20387){if((e20387 instanceof Object))
{var ex__14617__auto__ = e20387;var statearr_20388_20405 = state_20360;(statearr_20388_20405[(5)] = ex__14617__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20360);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e20387;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20406 = state_20360;
state_20360 = G__20406;
continue;
}
} else
{return ret_value__14615__auto__;
}
break;
}
});
state_machine__14614__auto__ = function(state_20360){
switch(arguments.length){
case 0:
return state_machine__14614__auto____0.call(this);
case 1:
return state_machine__14614__auto____1.call(this,state_20360);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14614__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14614__auto____0;
state_machine__14614__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14614__auto____1;
return state_machine__14614__auto__;
})()
;})(switch__14613__auto__,c__14669__auto___20390,out))
})();var state__14671__auto__ = (function (){var statearr_20389 = f__14670__auto__.call(null);(statearr_20389[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14669__auto___20390);
return statearr_20389;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14671__auto__);
});})(c__14669__auto___20390,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__14669__auto___20549 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14669__auto___20549,out){
return (function (){var f__14670__auto__ = (function (){var switch__14613__auto__ = ((function (c__14669__auto___20549,out){
return (function (state_20519){var state_val_20520 = (state_20519[(1)]);if((state_val_20520 === (7)))
{var inst_20515 = (state_20519[(2)]);var state_20519__$1 = state_20519;var statearr_20521_20550 = state_20519__$1;(statearr_20521_20550[(2)] = inst_20515);
(statearr_20521_20550[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20520 === (1)))
{var inst_20478 = [];var inst_20479 = inst_20478;var inst_20480 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_20519__$1 = (function (){var statearr_20522 = state_20519;(statearr_20522[(7)] = inst_20479);
(statearr_20522[(8)] = inst_20480);
return statearr_20522;
})();var statearr_20523_20551 = state_20519__$1;(statearr_20523_20551[(2)] = null);
(statearr_20523_20551[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20520 === (4)))
{var inst_20483 = (state_20519[(9)]);var inst_20483__$1 = (state_20519[(2)]);var inst_20484 = (inst_20483__$1 == null);var inst_20485 = cljs.core.not.call(null,inst_20484);var state_20519__$1 = (function (){var statearr_20524 = state_20519;(statearr_20524[(9)] = inst_20483__$1);
return statearr_20524;
})();if(inst_20485)
{var statearr_20525_20552 = state_20519__$1;(statearr_20525_20552[(1)] = (5));
} else
{var statearr_20526_20553 = state_20519__$1;(statearr_20526_20553[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20520 === (15)))
{var inst_20509 = (state_20519[(2)]);var state_20519__$1 = state_20519;var statearr_20527_20554 = state_20519__$1;(statearr_20527_20554[(2)] = inst_20509);
(statearr_20527_20554[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20520 === (13)))
{var state_20519__$1 = state_20519;var statearr_20528_20555 = state_20519__$1;(statearr_20528_20555[(2)] = null);
(statearr_20528_20555[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20520 === (6)))
{var inst_20479 = (state_20519[(7)]);var inst_20504 = inst_20479.length;var inst_20505 = (inst_20504 > (0));var state_20519__$1 = state_20519;if(cljs.core.truth_(inst_20505))
{var statearr_20529_20556 = state_20519__$1;(statearr_20529_20556[(1)] = (12));
} else
{var statearr_20530_20557 = state_20519__$1;(statearr_20530_20557[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20520 === (3)))
{var inst_20517 = (state_20519[(2)]);var state_20519__$1 = state_20519;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20519__$1,inst_20517);
} else
{if((state_val_20520 === (12)))
{var inst_20479 = (state_20519[(7)]);var inst_20507 = cljs.core.vec.call(null,inst_20479);var state_20519__$1 = state_20519;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20519__$1,(15),out,inst_20507);
} else
{if((state_val_20520 === (2)))
{var state_20519__$1 = state_20519;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20519__$1,(4),ch);
} else
{if((state_val_20520 === (11)))
{var inst_20483 = (state_20519[(9)]);var inst_20487 = (state_20519[(10)]);var inst_20497 = (state_20519[(2)]);var inst_20498 = [];var inst_20499 = inst_20498.push(inst_20483);var inst_20479 = inst_20498;var inst_20480 = inst_20487;var state_20519__$1 = (function (){var statearr_20531 = state_20519;(statearr_20531[(11)] = inst_20497);
(statearr_20531[(12)] = inst_20499);
(statearr_20531[(7)] = inst_20479);
(statearr_20531[(8)] = inst_20480);
return statearr_20531;
})();var statearr_20532_20558 = state_20519__$1;(statearr_20532_20558[(2)] = null);
(statearr_20532_20558[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20520 === (9)))
{var inst_20479 = (state_20519[(7)]);var inst_20495 = cljs.core.vec.call(null,inst_20479);var state_20519__$1 = state_20519;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20519__$1,(11),out,inst_20495);
} else
{if((state_val_20520 === (5)))
{var inst_20483 = (state_20519[(9)]);var inst_20480 = (state_20519[(8)]);var inst_20487 = (state_20519[(10)]);var inst_20487__$1 = f.call(null,inst_20483);var inst_20488 = cljs.core._EQ_.call(null,inst_20487__$1,inst_20480);var inst_20489 = cljs.core.keyword_identical_QMARK_.call(null,inst_20480,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_20490 = (inst_20488) || (inst_20489);var state_20519__$1 = (function (){var statearr_20533 = state_20519;(statearr_20533[(10)] = inst_20487__$1);
return statearr_20533;
})();if(cljs.core.truth_(inst_20490))
{var statearr_20534_20559 = state_20519__$1;(statearr_20534_20559[(1)] = (8));
} else
{var statearr_20535_20560 = state_20519__$1;(statearr_20535_20560[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20520 === (14)))
{var inst_20512 = (state_20519[(2)]);var inst_20513 = cljs.core.async.close_BANG_.call(null,out);var state_20519__$1 = (function (){var statearr_20537 = state_20519;(statearr_20537[(13)] = inst_20512);
return statearr_20537;
})();var statearr_20538_20561 = state_20519__$1;(statearr_20538_20561[(2)] = inst_20513);
(statearr_20538_20561[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20520 === (10)))
{var inst_20502 = (state_20519[(2)]);var state_20519__$1 = state_20519;var statearr_20539_20562 = state_20519__$1;(statearr_20539_20562[(2)] = inst_20502);
(statearr_20539_20562[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20520 === (8)))
{var inst_20479 = (state_20519[(7)]);var inst_20483 = (state_20519[(9)]);var inst_20487 = (state_20519[(10)]);var inst_20492 = inst_20479.push(inst_20483);var tmp20536 = inst_20479;var inst_20479__$1 = tmp20536;var inst_20480 = inst_20487;var state_20519__$1 = (function (){var statearr_20540 = state_20519;(statearr_20540[(14)] = inst_20492);
(statearr_20540[(7)] = inst_20479__$1);
(statearr_20540[(8)] = inst_20480);
return statearr_20540;
})();var statearr_20541_20563 = state_20519__$1;(statearr_20541_20563[(2)] = null);
(statearr_20541_20563[(1)] = (2));
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
});})(c__14669__auto___20549,out))
;return ((function (switch__14613__auto__,c__14669__auto___20549,out){
return (function() {
var state_machine__14614__auto__ = null;
var state_machine__14614__auto____0 = (function (){var statearr_20545 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_20545[(0)] = state_machine__14614__auto__);
(statearr_20545[(1)] = (1));
return statearr_20545;
});
var state_machine__14614__auto____1 = (function (state_20519){while(true){
var ret_value__14615__auto__ = (function (){try{while(true){
var result__14616__auto__ = switch__14613__auto__.call(null,state_20519);if(cljs.core.keyword_identical_QMARK_.call(null,result__14616__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__14616__auto__;
}
break;
}
}catch (e20546){if((e20546 instanceof Object))
{var ex__14617__auto__ = e20546;var statearr_20547_20564 = state_20519;(statearr_20547_20564[(5)] = ex__14617__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20519);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e20546;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20565 = state_20519;
state_20519 = G__20565;
continue;
}
} else
{return ret_value__14615__auto__;
}
break;
}
});
state_machine__14614__auto__ = function(state_20519){
switch(arguments.length){
case 0:
return state_machine__14614__auto____0.call(this);
case 1:
return state_machine__14614__auto____1.call(this,state_20519);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14614__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14614__auto____0;
state_machine__14614__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14614__auto____1;
return state_machine__14614__auto__;
})()
;})(switch__14613__auto__,c__14669__auto___20549,out))
})();var state__14671__auto__ = (function (){var statearr_20548 = f__14670__auto__.call(null);(statearr_20548[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14669__auto___20549);
return statearr_20548;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14671__auto__);
});})(c__14669__auto___20549,out))
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