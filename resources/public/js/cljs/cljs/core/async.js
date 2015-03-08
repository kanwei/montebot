// Compiled by ClojureScript 0.0-2985 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){
if(typeof cljs.core.async.t17492 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t17492 = (function (f,fn_handler,meta17493){
this.f = f;
this.fn_handler = fn_handler;
this.meta17493 = meta17493;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17492.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t17492.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t17492.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t17492.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17494){
var self__ = this;
var _17494__$1 = this;
return self__.meta17493;
});

cljs.core.async.t17492.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17494,meta17493__$1){
var self__ = this;
var _17494__$1 = this;
return (new cljs.core.async.t17492(self__.f,self__.fn_handler,meta17493__$1));
});

cljs.core.async.t17492.cljs$lang$type = true;

cljs.core.async.t17492.cljs$lang$ctorStr = "cljs.core.async/t17492";

cljs.core.async.t17492.cljs$lang$ctorPrWriter = (function (this__5784__auto__,writer__5785__auto__,opt__5786__auto__){
return cljs.core._write.call(null,writer__5785__auto__,"cljs.core.async/t17492");
});

cljs.core.async.__GT_t17492 = (function __GT_t17492(f__$1,fn_handler__$1,meta17493){
return (new cljs.core.async.t17492(f__$1,fn_handler__$1,meta17493));
});

}

return (new cljs.core.async.t17492(f,fn_handler,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 * val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 * buffered, but oldest elements in buffer will be dropped (not
 * transferred).
 */
cljs.core.async.sliding_buffer = (function sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full.
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){
var G__17496 = buff;
if(G__17496){
var bit__5878__auto__ = null;
if(cljs.core.truth_((function (){var or__5197__auto__ = bit__5878__auto__;
if(cljs.core.truth_(or__5197__auto__)){
return or__5197__auto__;
} else {
return G__17496.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__17496.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__17496);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__17496);
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
var chan__0 = (function (){
return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){
return chan.call(null,buf_or_n,null,null);
});
var chan__2 = (function (buf_or_n,xform){
return chan.call(null,buf_or_n,xform,null);
});
var chan__3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

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
cljs.core.async.timeout = (function timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 * return nil if closed. Will park if nothing is available.
 * Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){
return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_17497 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_17497);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_17497,ret){
return (function (){
return fn1.call(null,val_17497);
});})(val_17497,ret))
);
}
} else {
}

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
cljs.core.async.nop = (function nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 * inside a (go ...) block. Will park if no buffer space is available.
 * Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){
var temp__4404__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4404__auto__)){
var ret = temp__4404__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});
var put_BANG___3 = (function (port,val,fn1){
return put_BANG_.call(null,port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4404__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4404__auto__)){
var retb = temp__4404__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4404__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4404__auto__))
);
}

return ret;
} else {
return true;
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
cljs.core.async.close_BANG_ = (function close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){
var a = (new Array(n));
var n__6084__auto___17498 = n;
var x_17499 = (0);
while(true){
if((x_17499 < n__6084__auto___17498)){
(a[x_17499] = (0));

var G__17500 = (x_17499 + (1));
x_17499 = G__17500;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__17501 = (i + (1));
i = G__17501;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t17505 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t17505 = (function (flag,alt_flag,meta17506){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta17506 = meta17506;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17505.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t17505.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t17505.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t17505.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_17507){
var self__ = this;
var _17507__$1 = this;
return self__.meta17506;
});})(flag))
;

cljs.core.async.t17505.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_17507,meta17506__$1){
var self__ = this;
var _17507__$1 = this;
return (new cljs.core.async.t17505(self__.flag,self__.alt_flag,meta17506__$1));
});})(flag))
;

cljs.core.async.t17505.cljs$lang$type = true;

cljs.core.async.t17505.cljs$lang$ctorStr = "cljs.core.async/t17505";

cljs.core.async.t17505.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__5784__auto__,writer__5785__auto__,opt__5786__auto__){
return cljs.core._write.call(null,writer__5785__auto__,"cljs.core.async/t17505");
});})(flag))
;

cljs.core.async.__GT_t17505 = ((function (flag){
return (function __GT_t17505(flag__$1,alt_flag__$1,meta17506){
return (new cljs.core.async.t17505(flag__$1,alt_flag__$1,meta17506));
});})(flag))
;

}

return (new cljs.core.async.t17505(flag,alt_flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t17511 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t17511 = (function (cb,flag,alt_handler,meta17512){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta17512 = meta17512;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17511.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t17511.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t17511.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t17511.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17513){
var self__ = this;
var _17513__$1 = this;
return self__.meta17512;
});

cljs.core.async.t17511.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17513,meta17512__$1){
var self__ = this;
var _17513__$1 = this;
return (new cljs.core.async.t17511(self__.cb,self__.flag,self__.alt_handler,meta17512__$1));
});

cljs.core.async.t17511.cljs$lang$type = true;

cljs.core.async.t17511.cljs$lang$ctorStr = "cljs.core.async/t17511";

cljs.core.async.t17511.cljs$lang$ctorPrWriter = (function (this__5784__auto__,writer__5785__auto__,opt__5786__auto__){
return cljs.core._write.call(null,writer__5785__auto__,"cljs.core.async/t17511");
});

cljs.core.async.__GT_t17511 = (function __GT_t17511(cb__$1,flag__$1,alt_handler__$1,meta17512){
return (new cljs.core.async.t17511(cb__$1,flag__$1,alt_handler__$1,meta17512));
});

}

return (new cljs.core.async.t17511(cb,flag,alt_handler,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__17514_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17514_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__17515_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17515_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__5197__auto__ = wport;
if(cljs.core.truth_(or__5197__auto__)){
return or__5197__auto__;
} else {
return port;
}
})()], null));
} else {
var G__17516 = (i + (1));
i = G__17516;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5197__auto__ = ret;
if(cljs.core.truth_(or__5197__auto__)){
return or__5197__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4406__auto__ = (function (){var and__5185__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__5185__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__5185__auto__;
}
})();
if(cljs.core.truth_(temp__4406__auto__)){
var got = temp__4406__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
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
var alts_BANG___delegate = function (ports,p__17517){
var map__17519 = p__17517;
var map__17519__$1 = ((cljs.core.seq_QMARK_.call(null,map__17519))?cljs.core.apply.call(null,cljs.core.hash_map,map__17519):map__17519);
var opts = map__17519__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__17517 = null;
if (arguments.length > 1) {
var G__17520__i = 0, G__17520__a = new Array(arguments.length -  1);
while (G__17520__i < G__17520__a.length) {G__17520__a[G__17520__i] = arguments[G__17520__i + 1]; ++G__17520__i;}
  p__17517 = new cljs.core.IndexedSeq(G__17520__a,0);
} 
return alts_BANG___delegate.call(this,ports,p__17517);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__17521){
var ports = cljs.core.first(arglist__17521);
var p__17517 = cljs.core.rest(arglist__17521);
return alts_BANG___delegate(ports,p__17517);
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
var pipe__2 = (function (from,to){
return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){
var c__8227__auto___17616 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8227__auto___17616){
return (function (){
var f__8228__auto__ = (function (){var switch__8171__auto__ = ((function (c__8227__auto___17616){
return (function (state_17592){
var state_val_17593 = (state_17592[(1)]);
if((state_val_17593 === (7))){
var inst_17588 = (state_17592[(2)]);
var state_17592__$1 = state_17592;
var statearr_17594_17617 = state_17592__$1;
(statearr_17594_17617[(2)] = inst_17588);

(statearr_17594_17617[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17593 === (1))){
var state_17592__$1 = state_17592;
var statearr_17595_17618 = state_17592__$1;
(statearr_17595_17618[(2)] = null);

(statearr_17595_17618[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17593 === (4))){
var inst_17571 = (state_17592[(7)]);
var inst_17571__$1 = (state_17592[(2)]);
var inst_17572 = (inst_17571__$1 == null);
var state_17592__$1 = (function (){var statearr_17596 = state_17592;
(statearr_17596[(7)] = inst_17571__$1);

return statearr_17596;
})();
if(cljs.core.truth_(inst_17572)){
var statearr_17597_17619 = state_17592__$1;
(statearr_17597_17619[(1)] = (5));

} else {
var statearr_17598_17620 = state_17592__$1;
(statearr_17598_17620[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17593 === (13))){
var state_17592__$1 = state_17592;
var statearr_17599_17621 = state_17592__$1;
(statearr_17599_17621[(2)] = null);

(statearr_17599_17621[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17593 === (6))){
var inst_17571 = (state_17592[(7)]);
var state_17592__$1 = state_17592;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17592__$1,(11),to,inst_17571);
} else {
if((state_val_17593 === (3))){
var inst_17590 = (state_17592[(2)]);
var state_17592__$1 = state_17592;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17592__$1,inst_17590);
} else {
if((state_val_17593 === (12))){
var state_17592__$1 = state_17592;
var statearr_17600_17622 = state_17592__$1;
(statearr_17600_17622[(2)] = null);

(statearr_17600_17622[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17593 === (2))){
var state_17592__$1 = state_17592;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17592__$1,(4),from);
} else {
if((state_val_17593 === (11))){
var inst_17581 = (state_17592[(2)]);
var state_17592__$1 = state_17592;
if(cljs.core.truth_(inst_17581)){
var statearr_17601_17623 = state_17592__$1;
(statearr_17601_17623[(1)] = (12));

} else {
var statearr_17602_17624 = state_17592__$1;
(statearr_17602_17624[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17593 === (9))){
var state_17592__$1 = state_17592;
var statearr_17603_17625 = state_17592__$1;
(statearr_17603_17625[(2)] = null);

(statearr_17603_17625[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17593 === (5))){
var state_17592__$1 = state_17592;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17604_17626 = state_17592__$1;
(statearr_17604_17626[(1)] = (8));

} else {
var statearr_17605_17627 = state_17592__$1;
(statearr_17605_17627[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17593 === (14))){
var inst_17586 = (state_17592[(2)]);
var state_17592__$1 = state_17592;
var statearr_17606_17628 = state_17592__$1;
(statearr_17606_17628[(2)] = inst_17586);

(statearr_17606_17628[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17593 === (10))){
var inst_17578 = (state_17592[(2)]);
var state_17592__$1 = state_17592;
var statearr_17607_17629 = state_17592__$1;
(statearr_17607_17629[(2)] = inst_17578);

(statearr_17607_17629[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17593 === (8))){
var inst_17575 = cljs.core.async.close_BANG_.call(null,to);
var state_17592__$1 = state_17592;
var statearr_17608_17630 = state_17592__$1;
(statearr_17608_17630[(2)] = inst_17575);

(statearr_17608_17630[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__8227__auto___17616))
;
return ((function (switch__8171__auto__,c__8227__auto___17616){
return (function() {
var state_machine__8172__auto__ = null;
var state_machine__8172__auto____0 = (function (){
var statearr_17612 = [null,null,null,null,null,null,null,null];
(statearr_17612[(0)] = state_machine__8172__auto__);

(statearr_17612[(1)] = (1));

return statearr_17612;
});
var state_machine__8172__auto____1 = (function (state_17592){
while(true){
var ret_value__8173__auto__ = (function (){try{while(true){
var result__8174__auto__ = switch__8171__auto__.call(null,state_17592);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8174__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8174__auto__;
}
break;
}
}catch (e17613){if((e17613 instanceof Object)){
var ex__8175__auto__ = e17613;
var statearr_17614_17631 = state_17592;
(statearr_17614_17631[(5)] = ex__8175__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17592);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17613;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8173__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17632 = state_17592;
state_17592 = G__17632;
continue;
} else {
return ret_value__8173__auto__;
}
break;
}
});
state_machine__8172__auto__ = function(state_17592){
switch(arguments.length){
case 0:
return state_machine__8172__auto____0.call(this);
case 1:
return state_machine__8172__auto____1.call(this,state_17592);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8172__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8172__auto____0;
state_machine__8172__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8172__auto____1;
return state_machine__8172__auto__;
})()
;})(switch__8171__auto__,c__8227__auto___17616))
})();
var state__8229__auto__ = (function (){var statearr_17615 = f__8228__auto__.call(null);
(statearr_17615[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8227__auto___17616);

return statearr_17615;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8229__auto__);
});})(c__8227__auto___17616))
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
cljs.core.async.pipeline_STAR_ = (function pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__17816){
var vec__17817 = p__17816;
var v = cljs.core.nth.call(null,vec__17817,(0),null);
var p = cljs.core.nth.call(null,vec__17817,(1),null);
var job = vec__17817;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__8227__auto___17999 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8227__auto___17999,res,vec__17817,v,p,job,jobs,results){
return (function (){
var f__8228__auto__ = (function (){var switch__8171__auto__ = ((function (c__8227__auto___17999,res,vec__17817,v,p,job,jobs,results){
return (function (state_17822){
var state_val_17823 = (state_17822[(1)]);
if((state_val_17823 === (2))){
var inst_17819 = (state_17822[(2)]);
var inst_17820 = cljs.core.async.close_BANG_.call(null,res);
var state_17822__$1 = (function (){var statearr_17824 = state_17822;
(statearr_17824[(7)] = inst_17819);

return statearr_17824;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17822__$1,inst_17820);
} else {
if((state_val_17823 === (1))){
var state_17822__$1 = state_17822;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17822__$1,(2),res,v);
} else {
return null;
}
}
});})(c__8227__auto___17999,res,vec__17817,v,p,job,jobs,results))
;
return ((function (switch__8171__auto__,c__8227__auto___17999,res,vec__17817,v,p,job,jobs,results){
return (function() {
var state_machine__8172__auto__ = null;
var state_machine__8172__auto____0 = (function (){
var statearr_17828 = [null,null,null,null,null,null,null,null];
(statearr_17828[(0)] = state_machine__8172__auto__);

(statearr_17828[(1)] = (1));

return statearr_17828;
});
var state_machine__8172__auto____1 = (function (state_17822){
while(true){
var ret_value__8173__auto__ = (function (){try{while(true){
var result__8174__auto__ = switch__8171__auto__.call(null,state_17822);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8174__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8174__auto__;
}
break;
}
}catch (e17829){if((e17829 instanceof Object)){
var ex__8175__auto__ = e17829;
var statearr_17830_18000 = state_17822;
(statearr_17830_18000[(5)] = ex__8175__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17822);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17829;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8173__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18001 = state_17822;
state_17822 = G__18001;
continue;
} else {
return ret_value__8173__auto__;
}
break;
}
});
state_machine__8172__auto__ = function(state_17822){
switch(arguments.length){
case 0:
return state_machine__8172__auto____0.call(this);
case 1:
return state_machine__8172__auto____1.call(this,state_17822);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8172__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8172__auto____0;
state_machine__8172__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8172__auto____1;
return state_machine__8172__auto__;
})()
;})(switch__8171__auto__,c__8227__auto___17999,res,vec__17817,v,p,job,jobs,results))
})();
var state__8229__auto__ = (function (){var statearr_17831 = f__8228__auto__.call(null);
(statearr_17831[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8227__auto___17999);

return statearr_17831;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8229__auto__);
});})(c__8227__auto___17999,res,vec__17817,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__17832){
var vec__17833 = p__17832;
var v = cljs.core.nth.call(null,vec__17833,(0),null);
var p = cljs.core.nth.call(null,vec__17833,(1),null);
var job = vec__17833;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__6084__auto___18002 = n;
var __18003 = (0);
while(true){
if((__18003 < n__6084__auto___18002)){
var G__17834_18004 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__17834_18004) {
case "async":
var c__8227__auto___18006 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__18003,c__8227__auto___18006,G__17834_18004,n__6084__auto___18002,jobs,results,process,async){
return (function (){
var f__8228__auto__ = (function (){var switch__8171__auto__ = ((function (__18003,c__8227__auto___18006,G__17834_18004,n__6084__auto___18002,jobs,results,process,async){
return (function (state_17847){
var state_val_17848 = (state_17847[(1)]);
if((state_val_17848 === (7))){
var inst_17843 = (state_17847[(2)]);
var state_17847__$1 = state_17847;
var statearr_17849_18007 = state_17847__$1;
(statearr_17849_18007[(2)] = inst_17843);

(statearr_17849_18007[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17848 === (6))){
var state_17847__$1 = state_17847;
var statearr_17850_18008 = state_17847__$1;
(statearr_17850_18008[(2)] = null);

(statearr_17850_18008[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17848 === (5))){
var state_17847__$1 = state_17847;
var statearr_17851_18009 = state_17847__$1;
(statearr_17851_18009[(2)] = null);

(statearr_17851_18009[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17848 === (4))){
var inst_17837 = (state_17847[(2)]);
var inst_17838 = async.call(null,inst_17837);
var state_17847__$1 = state_17847;
if(cljs.core.truth_(inst_17838)){
var statearr_17852_18010 = state_17847__$1;
(statearr_17852_18010[(1)] = (5));

} else {
var statearr_17853_18011 = state_17847__$1;
(statearr_17853_18011[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17848 === (3))){
var inst_17845 = (state_17847[(2)]);
var state_17847__$1 = state_17847;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17847__$1,inst_17845);
} else {
if((state_val_17848 === (2))){
var state_17847__$1 = state_17847;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17847__$1,(4),jobs);
} else {
if((state_val_17848 === (1))){
var state_17847__$1 = state_17847;
var statearr_17854_18012 = state_17847__$1;
(statearr_17854_18012[(2)] = null);

(statearr_17854_18012[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__18003,c__8227__auto___18006,G__17834_18004,n__6084__auto___18002,jobs,results,process,async))
;
return ((function (__18003,switch__8171__auto__,c__8227__auto___18006,G__17834_18004,n__6084__auto___18002,jobs,results,process,async){
return (function() {
var state_machine__8172__auto__ = null;
var state_machine__8172__auto____0 = (function (){
var statearr_17858 = [null,null,null,null,null,null,null];
(statearr_17858[(0)] = state_machine__8172__auto__);

(statearr_17858[(1)] = (1));

return statearr_17858;
});
var state_machine__8172__auto____1 = (function (state_17847){
while(true){
var ret_value__8173__auto__ = (function (){try{while(true){
var result__8174__auto__ = switch__8171__auto__.call(null,state_17847);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8174__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8174__auto__;
}
break;
}
}catch (e17859){if((e17859 instanceof Object)){
var ex__8175__auto__ = e17859;
var statearr_17860_18013 = state_17847;
(statearr_17860_18013[(5)] = ex__8175__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17847);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17859;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8173__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18014 = state_17847;
state_17847 = G__18014;
continue;
} else {
return ret_value__8173__auto__;
}
break;
}
});
state_machine__8172__auto__ = function(state_17847){
switch(arguments.length){
case 0:
return state_machine__8172__auto____0.call(this);
case 1:
return state_machine__8172__auto____1.call(this,state_17847);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8172__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8172__auto____0;
state_machine__8172__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8172__auto____1;
return state_machine__8172__auto__;
})()
;})(__18003,switch__8171__auto__,c__8227__auto___18006,G__17834_18004,n__6084__auto___18002,jobs,results,process,async))
})();
var state__8229__auto__ = (function (){var statearr_17861 = f__8228__auto__.call(null);
(statearr_17861[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8227__auto___18006);

return statearr_17861;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8229__auto__);
});})(__18003,c__8227__auto___18006,G__17834_18004,n__6084__auto___18002,jobs,results,process,async))
);


break;
case "compute":
var c__8227__auto___18015 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__18003,c__8227__auto___18015,G__17834_18004,n__6084__auto___18002,jobs,results,process,async){
return (function (){
var f__8228__auto__ = (function (){var switch__8171__auto__ = ((function (__18003,c__8227__auto___18015,G__17834_18004,n__6084__auto___18002,jobs,results,process,async){
return (function (state_17874){
var state_val_17875 = (state_17874[(1)]);
if((state_val_17875 === (7))){
var inst_17870 = (state_17874[(2)]);
var state_17874__$1 = state_17874;
var statearr_17876_18016 = state_17874__$1;
(statearr_17876_18016[(2)] = inst_17870);

(statearr_17876_18016[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17875 === (6))){
var state_17874__$1 = state_17874;
var statearr_17877_18017 = state_17874__$1;
(statearr_17877_18017[(2)] = null);

(statearr_17877_18017[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17875 === (5))){
var state_17874__$1 = state_17874;
var statearr_17878_18018 = state_17874__$1;
(statearr_17878_18018[(2)] = null);

(statearr_17878_18018[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17875 === (4))){
var inst_17864 = (state_17874[(2)]);
var inst_17865 = process.call(null,inst_17864);
var state_17874__$1 = state_17874;
if(cljs.core.truth_(inst_17865)){
var statearr_17879_18019 = state_17874__$1;
(statearr_17879_18019[(1)] = (5));

} else {
var statearr_17880_18020 = state_17874__$1;
(statearr_17880_18020[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17875 === (3))){
var inst_17872 = (state_17874[(2)]);
var state_17874__$1 = state_17874;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17874__$1,inst_17872);
} else {
if((state_val_17875 === (2))){
var state_17874__$1 = state_17874;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17874__$1,(4),jobs);
} else {
if((state_val_17875 === (1))){
var state_17874__$1 = state_17874;
var statearr_17881_18021 = state_17874__$1;
(statearr_17881_18021[(2)] = null);

(statearr_17881_18021[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__18003,c__8227__auto___18015,G__17834_18004,n__6084__auto___18002,jobs,results,process,async))
;
return ((function (__18003,switch__8171__auto__,c__8227__auto___18015,G__17834_18004,n__6084__auto___18002,jobs,results,process,async){
return (function() {
var state_machine__8172__auto__ = null;
var state_machine__8172__auto____0 = (function (){
var statearr_17885 = [null,null,null,null,null,null,null];
(statearr_17885[(0)] = state_machine__8172__auto__);

(statearr_17885[(1)] = (1));

return statearr_17885;
});
var state_machine__8172__auto____1 = (function (state_17874){
while(true){
var ret_value__8173__auto__ = (function (){try{while(true){
var result__8174__auto__ = switch__8171__auto__.call(null,state_17874);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8174__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8174__auto__;
}
break;
}
}catch (e17886){if((e17886 instanceof Object)){
var ex__8175__auto__ = e17886;
var statearr_17887_18022 = state_17874;
(statearr_17887_18022[(5)] = ex__8175__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17874);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17886;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8173__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18023 = state_17874;
state_17874 = G__18023;
continue;
} else {
return ret_value__8173__auto__;
}
break;
}
});
state_machine__8172__auto__ = function(state_17874){
switch(arguments.length){
case 0:
return state_machine__8172__auto____0.call(this);
case 1:
return state_machine__8172__auto____1.call(this,state_17874);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8172__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8172__auto____0;
state_machine__8172__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8172__auto____1;
return state_machine__8172__auto__;
})()
;})(__18003,switch__8171__auto__,c__8227__auto___18015,G__17834_18004,n__6084__auto___18002,jobs,results,process,async))
})();
var state__8229__auto__ = (function (){var statearr_17888 = f__8228__auto__.call(null);
(statearr_17888[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8227__auto___18015);

return statearr_17888;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8229__auto__);
});})(__18003,c__8227__auto___18015,G__17834_18004,n__6084__auto___18002,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__18024 = (__18003 + (1));
__18003 = G__18024;
continue;
} else {
}
break;
}

var c__8227__auto___18025 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8227__auto___18025,jobs,results,process,async){
return (function (){
var f__8228__auto__ = (function (){var switch__8171__auto__ = ((function (c__8227__auto___18025,jobs,results,process,async){
return (function (state_17910){
var state_val_17911 = (state_17910[(1)]);
if((state_val_17911 === (9))){
var inst_17903 = (state_17910[(2)]);
var state_17910__$1 = (function (){var statearr_17912 = state_17910;
(statearr_17912[(7)] = inst_17903);

return statearr_17912;
})();
var statearr_17913_18026 = state_17910__$1;
(statearr_17913_18026[(2)] = null);

(statearr_17913_18026[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17911 === (8))){
var inst_17896 = (state_17910[(8)]);
var inst_17901 = (state_17910[(2)]);
var state_17910__$1 = (function (){var statearr_17914 = state_17910;
(statearr_17914[(9)] = inst_17901);

return statearr_17914;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17910__$1,(9),results,inst_17896);
} else {
if((state_val_17911 === (7))){
var inst_17906 = (state_17910[(2)]);
var state_17910__$1 = state_17910;
var statearr_17915_18027 = state_17910__$1;
(statearr_17915_18027[(2)] = inst_17906);

(statearr_17915_18027[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17911 === (6))){
var inst_17896 = (state_17910[(8)]);
var inst_17891 = (state_17910[(10)]);
var inst_17896__$1 = cljs.core.async.chan.call(null,(1));
var inst_17897 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_17898 = [inst_17891,inst_17896__$1];
var inst_17899 = (new cljs.core.PersistentVector(null,2,(5),inst_17897,inst_17898,null));
var state_17910__$1 = (function (){var statearr_17916 = state_17910;
(statearr_17916[(8)] = inst_17896__$1);

return statearr_17916;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17910__$1,(8),jobs,inst_17899);
} else {
if((state_val_17911 === (5))){
var inst_17894 = cljs.core.async.close_BANG_.call(null,jobs);
var state_17910__$1 = state_17910;
var statearr_17917_18028 = state_17910__$1;
(statearr_17917_18028[(2)] = inst_17894);

(statearr_17917_18028[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17911 === (4))){
var inst_17891 = (state_17910[(10)]);
var inst_17891__$1 = (state_17910[(2)]);
var inst_17892 = (inst_17891__$1 == null);
var state_17910__$1 = (function (){var statearr_17918 = state_17910;
(statearr_17918[(10)] = inst_17891__$1);

return statearr_17918;
})();
if(cljs.core.truth_(inst_17892)){
var statearr_17919_18029 = state_17910__$1;
(statearr_17919_18029[(1)] = (5));

} else {
var statearr_17920_18030 = state_17910__$1;
(statearr_17920_18030[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17911 === (3))){
var inst_17908 = (state_17910[(2)]);
var state_17910__$1 = state_17910;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17910__$1,inst_17908);
} else {
if((state_val_17911 === (2))){
var state_17910__$1 = state_17910;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17910__$1,(4),from);
} else {
if((state_val_17911 === (1))){
var state_17910__$1 = state_17910;
var statearr_17921_18031 = state_17910__$1;
(statearr_17921_18031[(2)] = null);

(statearr_17921_18031[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__8227__auto___18025,jobs,results,process,async))
;
return ((function (switch__8171__auto__,c__8227__auto___18025,jobs,results,process,async){
return (function() {
var state_machine__8172__auto__ = null;
var state_machine__8172__auto____0 = (function (){
var statearr_17925 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17925[(0)] = state_machine__8172__auto__);

(statearr_17925[(1)] = (1));

return statearr_17925;
});
var state_machine__8172__auto____1 = (function (state_17910){
while(true){
var ret_value__8173__auto__ = (function (){try{while(true){
var result__8174__auto__ = switch__8171__auto__.call(null,state_17910);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8174__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8174__auto__;
}
break;
}
}catch (e17926){if((e17926 instanceof Object)){
var ex__8175__auto__ = e17926;
var statearr_17927_18032 = state_17910;
(statearr_17927_18032[(5)] = ex__8175__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17910);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17926;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8173__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18033 = state_17910;
state_17910 = G__18033;
continue;
} else {
return ret_value__8173__auto__;
}
break;
}
});
state_machine__8172__auto__ = function(state_17910){
switch(arguments.length){
case 0:
return state_machine__8172__auto____0.call(this);
case 1:
return state_machine__8172__auto____1.call(this,state_17910);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8172__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8172__auto____0;
state_machine__8172__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8172__auto____1;
return state_machine__8172__auto__;
})()
;})(switch__8171__auto__,c__8227__auto___18025,jobs,results,process,async))
})();
var state__8229__auto__ = (function (){var statearr_17928 = f__8228__auto__.call(null);
(statearr_17928[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8227__auto___18025);

return statearr_17928;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8229__auto__);
});})(c__8227__auto___18025,jobs,results,process,async))
);


var c__8227__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8227__auto__,jobs,results,process,async){
return (function (){
var f__8228__auto__ = (function (){var switch__8171__auto__ = ((function (c__8227__auto__,jobs,results,process,async){
return (function (state_17966){
var state_val_17967 = (state_17966[(1)]);
if((state_val_17967 === (7))){
var inst_17962 = (state_17966[(2)]);
var state_17966__$1 = state_17966;
var statearr_17968_18034 = state_17966__$1;
(statearr_17968_18034[(2)] = inst_17962);

(statearr_17968_18034[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17967 === (20))){
var state_17966__$1 = state_17966;
var statearr_17969_18035 = state_17966__$1;
(statearr_17969_18035[(2)] = null);

(statearr_17969_18035[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17967 === (1))){
var state_17966__$1 = state_17966;
var statearr_17970_18036 = state_17966__$1;
(statearr_17970_18036[(2)] = null);

(statearr_17970_18036[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17967 === (4))){
var inst_17931 = (state_17966[(7)]);
var inst_17931__$1 = (state_17966[(2)]);
var inst_17932 = (inst_17931__$1 == null);
var state_17966__$1 = (function (){var statearr_17971 = state_17966;
(statearr_17971[(7)] = inst_17931__$1);

return statearr_17971;
})();
if(cljs.core.truth_(inst_17932)){
var statearr_17972_18037 = state_17966__$1;
(statearr_17972_18037[(1)] = (5));

} else {
var statearr_17973_18038 = state_17966__$1;
(statearr_17973_18038[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17967 === (15))){
var inst_17944 = (state_17966[(8)]);
var state_17966__$1 = state_17966;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17966__$1,(18),to,inst_17944);
} else {
if((state_val_17967 === (21))){
var inst_17957 = (state_17966[(2)]);
var state_17966__$1 = state_17966;
var statearr_17974_18039 = state_17966__$1;
(statearr_17974_18039[(2)] = inst_17957);

(statearr_17974_18039[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17967 === (13))){
var inst_17959 = (state_17966[(2)]);
var state_17966__$1 = (function (){var statearr_17975 = state_17966;
(statearr_17975[(9)] = inst_17959);

return statearr_17975;
})();
var statearr_17976_18040 = state_17966__$1;
(statearr_17976_18040[(2)] = null);

(statearr_17976_18040[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17967 === (6))){
var inst_17931 = (state_17966[(7)]);
var state_17966__$1 = state_17966;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17966__$1,(11),inst_17931);
} else {
if((state_val_17967 === (17))){
var inst_17952 = (state_17966[(2)]);
var state_17966__$1 = state_17966;
if(cljs.core.truth_(inst_17952)){
var statearr_17977_18041 = state_17966__$1;
(statearr_17977_18041[(1)] = (19));

} else {
var statearr_17978_18042 = state_17966__$1;
(statearr_17978_18042[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17967 === (3))){
var inst_17964 = (state_17966[(2)]);
var state_17966__$1 = state_17966;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17966__$1,inst_17964);
} else {
if((state_val_17967 === (12))){
var inst_17941 = (state_17966[(10)]);
var state_17966__$1 = state_17966;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17966__$1,(14),inst_17941);
} else {
if((state_val_17967 === (2))){
var state_17966__$1 = state_17966;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17966__$1,(4),results);
} else {
if((state_val_17967 === (19))){
var state_17966__$1 = state_17966;
var statearr_17979_18043 = state_17966__$1;
(statearr_17979_18043[(2)] = null);

(statearr_17979_18043[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17967 === (11))){
var inst_17941 = (state_17966[(2)]);
var state_17966__$1 = (function (){var statearr_17980 = state_17966;
(statearr_17980[(10)] = inst_17941);

return statearr_17980;
})();
var statearr_17981_18044 = state_17966__$1;
(statearr_17981_18044[(2)] = null);

(statearr_17981_18044[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17967 === (9))){
var state_17966__$1 = state_17966;
var statearr_17982_18045 = state_17966__$1;
(statearr_17982_18045[(2)] = null);

(statearr_17982_18045[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17967 === (5))){
var state_17966__$1 = state_17966;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17983_18046 = state_17966__$1;
(statearr_17983_18046[(1)] = (8));

} else {
var statearr_17984_18047 = state_17966__$1;
(statearr_17984_18047[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17967 === (14))){
var inst_17946 = (state_17966[(11)]);
var inst_17944 = (state_17966[(8)]);
var inst_17944__$1 = (state_17966[(2)]);
var inst_17945 = (inst_17944__$1 == null);
var inst_17946__$1 = cljs.core.not.call(null,inst_17945);
var state_17966__$1 = (function (){var statearr_17985 = state_17966;
(statearr_17985[(11)] = inst_17946__$1);

(statearr_17985[(8)] = inst_17944__$1);

return statearr_17985;
})();
if(inst_17946__$1){
var statearr_17986_18048 = state_17966__$1;
(statearr_17986_18048[(1)] = (15));

} else {
var statearr_17987_18049 = state_17966__$1;
(statearr_17987_18049[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17967 === (16))){
var inst_17946 = (state_17966[(11)]);
var state_17966__$1 = state_17966;
var statearr_17988_18050 = state_17966__$1;
(statearr_17988_18050[(2)] = inst_17946);

(statearr_17988_18050[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17967 === (10))){
var inst_17938 = (state_17966[(2)]);
var state_17966__$1 = state_17966;
var statearr_17989_18051 = state_17966__$1;
(statearr_17989_18051[(2)] = inst_17938);

(statearr_17989_18051[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17967 === (18))){
var inst_17949 = (state_17966[(2)]);
var state_17966__$1 = state_17966;
var statearr_17990_18052 = state_17966__$1;
(statearr_17990_18052[(2)] = inst_17949);

(statearr_17990_18052[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17967 === (8))){
var inst_17935 = cljs.core.async.close_BANG_.call(null,to);
var state_17966__$1 = state_17966;
var statearr_17991_18053 = state_17966__$1;
(statearr_17991_18053[(2)] = inst_17935);

(statearr_17991_18053[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__8227__auto__,jobs,results,process,async))
;
return ((function (switch__8171__auto__,c__8227__auto__,jobs,results,process,async){
return (function() {
var state_machine__8172__auto__ = null;
var state_machine__8172__auto____0 = (function (){
var statearr_17995 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17995[(0)] = state_machine__8172__auto__);

(statearr_17995[(1)] = (1));

return statearr_17995;
});
var state_machine__8172__auto____1 = (function (state_17966){
while(true){
var ret_value__8173__auto__ = (function (){try{while(true){
var result__8174__auto__ = switch__8171__auto__.call(null,state_17966);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8174__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8174__auto__;
}
break;
}
}catch (e17996){if((e17996 instanceof Object)){
var ex__8175__auto__ = e17996;
var statearr_17997_18054 = state_17966;
(statearr_17997_18054[(5)] = ex__8175__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17966);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17996;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8173__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18055 = state_17966;
state_17966 = G__18055;
continue;
} else {
return ret_value__8173__auto__;
}
break;
}
});
state_machine__8172__auto__ = function(state_17966){
switch(arguments.length){
case 0:
return state_machine__8172__auto____0.call(this);
case 1:
return state_machine__8172__auto____1.call(this,state_17966);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8172__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8172__auto____0;
state_machine__8172__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8172__auto____1;
return state_machine__8172__auto__;
})()
;})(switch__8171__auto__,c__8227__auto__,jobs,results,process,async))
})();
var state__8229__auto__ = (function (){var statearr_17998 = f__8228__auto__.call(null);
(statearr_17998[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8227__auto__);

return statearr_17998;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8229__auto__);
});})(c__8227__auto__,jobs,results,process,async))
);

return c__8227__auto__;
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
var pipeline_async__4 = (function (n,to,af,from){
return pipeline_async.call(null,n,to,af,from,true);
});
var pipeline_async__5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
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
var pipeline__4 = (function (n,to,xf,from){
return pipeline.call(null,n,to,xf,from,true);
});
var pipeline__5 = (function (n,to,xf,from,close_QMARK_){
return pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});
var pipeline__6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
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
var split__2 = (function (p,ch){
return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__8227__auto___18156 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8227__auto___18156,tc,fc){
return (function (){
var f__8228__auto__ = (function (){var switch__8171__auto__ = ((function (c__8227__auto___18156,tc,fc){
return (function (state_18131){
var state_val_18132 = (state_18131[(1)]);
if((state_val_18132 === (7))){
var inst_18127 = (state_18131[(2)]);
var state_18131__$1 = state_18131;
var statearr_18133_18157 = state_18131__$1;
(statearr_18133_18157[(2)] = inst_18127);

(statearr_18133_18157[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18132 === (1))){
var state_18131__$1 = state_18131;
var statearr_18134_18158 = state_18131__$1;
(statearr_18134_18158[(2)] = null);

(statearr_18134_18158[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18132 === (4))){
var inst_18108 = (state_18131[(7)]);
var inst_18108__$1 = (state_18131[(2)]);
var inst_18109 = (inst_18108__$1 == null);
var state_18131__$1 = (function (){var statearr_18135 = state_18131;
(statearr_18135[(7)] = inst_18108__$1);

return statearr_18135;
})();
if(cljs.core.truth_(inst_18109)){
var statearr_18136_18159 = state_18131__$1;
(statearr_18136_18159[(1)] = (5));

} else {
var statearr_18137_18160 = state_18131__$1;
(statearr_18137_18160[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18132 === (13))){
var state_18131__$1 = state_18131;
var statearr_18138_18161 = state_18131__$1;
(statearr_18138_18161[(2)] = null);

(statearr_18138_18161[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18132 === (6))){
var inst_18108 = (state_18131[(7)]);
var inst_18114 = p.call(null,inst_18108);
var state_18131__$1 = state_18131;
if(cljs.core.truth_(inst_18114)){
var statearr_18139_18162 = state_18131__$1;
(statearr_18139_18162[(1)] = (9));

} else {
var statearr_18140_18163 = state_18131__$1;
(statearr_18140_18163[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18132 === (3))){
var inst_18129 = (state_18131[(2)]);
var state_18131__$1 = state_18131;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18131__$1,inst_18129);
} else {
if((state_val_18132 === (12))){
var state_18131__$1 = state_18131;
var statearr_18141_18164 = state_18131__$1;
(statearr_18141_18164[(2)] = null);

(statearr_18141_18164[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18132 === (2))){
var state_18131__$1 = state_18131;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18131__$1,(4),ch);
} else {
if((state_val_18132 === (11))){
var inst_18108 = (state_18131[(7)]);
var inst_18118 = (state_18131[(2)]);
var state_18131__$1 = state_18131;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18131__$1,(8),inst_18118,inst_18108);
} else {
if((state_val_18132 === (9))){
var state_18131__$1 = state_18131;
var statearr_18142_18165 = state_18131__$1;
(statearr_18142_18165[(2)] = tc);

(statearr_18142_18165[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18132 === (5))){
var inst_18111 = cljs.core.async.close_BANG_.call(null,tc);
var inst_18112 = cljs.core.async.close_BANG_.call(null,fc);
var state_18131__$1 = (function (){var statearr_18143 = state_18131;
(statearr_18143[(8)] = inst_18111);

return statearr_18143;
})();
var statearr_18144_18166 = state_18131__$1;
(statearr_18144_18166[(2)] = inst_18112);

(statearr_18144_18166[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18132 === (14))){
var inst_18125 = (state_18131[(2)]);
var state_18131__$1 = state_18131;
var statearr_18145_18167 = state_18131__$1;
(statearr_18145_18167[(2)] = inst_18125);

(statearr_18145_18167[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18132 === (10))){
var state_18131__$1 = state_18131;
var statearr_18146_18168 = state_18131__$1;
(statearr_18146_18168[(2)] = fc);

(statearr_18146_18168[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18132 === (8))){
var inst_18120 = (state_18131[(2)]);
var state_18131__$1 = state_18131;
if(cljs.core.truth_(inst_18120)){
var statearr_18147_18169 = state_18131__$1;
(statearr_18147_18169[(1)] = (12));

} else {
var statearr_18148_18170 = state_18131__$1;
(statearr_18148_18170[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__8227__auto___18156,tc,fc))
;
return ((function (switch__8171__auto__,c__8227__auto___18156,tc,fc){
return (function() {
var state_machine__8172__auto__ = null;
var state_machine__8172__auto____0 = (function (){
var statearr_18152 = [null,null,null,null,null,null,null,null,null];
(statearr_18152[(0)] = state_machine__8172__auto__);

(statearr_18152[(1)] = (1));

return statearr_18152;
});
var state_machine__8172__auto____1 = (function (state_18131){
while(true){
var ret_value__8173__auto__ = (function (){try{while(true){
var result__8174__auto__ = switch__8171__auto__.call(null,state_18131);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8174__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8174__auto__;
}
break;
}
}catch (e18153){if((e18153 instanceof Object)){
var ex__8175__auto__ = e18153;
var statearr_18154_18171 = state_18131;
(statearr_18154_18171[(5)] = ex__8175__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18131);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18153;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8173__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18172 = state_18131;
state_18131 = G__18172;
continue;
} else {
return ret_value__8173__auto__;
}
break;
}
});
state_machine__8172__auto__ = function(state_18131){
switch(arguments.length){
case 0:
return state_machine__8172__auto____0.call(this);
case 1:
return state_machine__8172__auto____1.call(this,state_18131);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8172__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8172__auto____0;
state_machine__8172__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8172__auto____1;
return state_machine__8172__auto__;
})()
;})(switch__8171__auto__,c__8227__auto___18156,tc,fc))
})();
var state__8229__auto__ = (function (){var statearr_18155 = f__8228__auto__.call(null);
(statearr_18155[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8227__auto___18156);

return statearr_18155;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8229__auto__);
});})(c__8227__auto___18156,tc,fc))
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
cljs.core.async.reduce = (function reduce(f,init,ch){
var c__8227__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8227__auto__){
return (function (){
var f__8228__auto__ = (function (){var switch__8171__auto__ = ((function (c__8227__auto__){
return (function (state_18219){
var state_val_18220 = (state_18219[(1)]);
if((state_val_18220 === (7))){
var inst_18215 = (state_18219[(2)]);
var state_18219__$1 = state_18219;
var statearr_18221_18237 = state_18219__$1;
(statearr_18221_18237[(2)] = inst_18215);

(statearr_18221_18237[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18220 === (6))){
var inst_18208 = (state_18219[(7)]);
var inst_18205 = (state_18219[(8)]);
var inst_18212 = f.call(null,inst_18205,inst_18208);
var inst_18205__$1 = inst_18212;
var state_18219__$1 = (function (){var statearr_18222 = state_18219;
(statearr_18222[(8)] = inst_18205__$1);

return statearr_18222;
})();
var statearr_18223_18238 = state_18219__$1;
(statearr_18223_18238[(2)] = null);

(statearr_18223_18238[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18220 === (5))){
var inst_18205 = (state_18219[(8)]);
var state_18219__$1 = state_18219;
var statearr_18224_18239 = state_18219__$1;
(statearr_18224_18239[(2)] = inst_18205);

(statearr_18224_18239[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18220 === (4))){
var inst_18208 = (state_18219[(7)]);
var inst_18208__$1 = (state_18219[(2)]);
var inst_18209 = (inst_18208__$1 == null);
var state_18219__$1 = (function (){var statearr_18225 = state_18219;
(statearr_18225[(7)] = inst_18208__$1);

return statearr_18225;
})();
if(cljs.core.truth_(inst_18209)){
var statearr_18226_18240 = state_18219__$1;
(statearr_18226_18240[(1)] = (5));

} else {
var statearr_18227_18241 = state_18219__$1;
(statearr_18227_18241[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18220 === (3))){
var inst_18217 = (state_18219[(2)]);
var state_18219__$1 = state_18219;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18219__$1,inst_18217);
} else {
if((state_val_18220 === (2))){
var state_18219__$1 = state_18219;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18219__$1,(4),ch);
} else {
if((state_val_18220 === (1))){
var inst_18205 = init;
var state_18219__$1 = (function (){var statearr_18228 = state_18219;
(statearr_18228[(8)] = inst_18205);

return statearr_18228;
})();
var statearr_18229_18242 = state_18219__$1;
(statearr_18229_18242[(2)] = null);

(statearr_18229_18242[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__8227__auto__))
;
return ((function (switch__8171__auto__,c__8227__auto__){
return (function() {
var state_machine__8172__auto__ = null;
var state_machine__8172__auto____0 = (function (){
var statearr_18233 = [null,null,null,null,null,null,null,null,null];
(statearr_18233[(0)] = state_machine__8172__auto__);

(statearr_18233[(1)] = (1));

return statearr_18233;
});
var state_machine__8172__auto____1 = (function (state_18219){
while(true){
var ret_value__8173__auto__ = (function (){try{while(true){
var result__8174__auto__ = switch__8171__auto__.call(null,state_18219);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8174__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8174__auto__;
}
break;
}
}catch (e18234){if((e18234 instanceof Object)){
var ex__8175__auto__ = e18234;
var statearr_18235_18243 = state_18219;
(statearr_18235_18243[(5)] = ex__8175__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18219);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18234;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8173__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18244 = state_18219;
state_18219 = G__18244;
continue;
} else {
return ret_value__8173__auto__;
}
break;
}
});
state_machine__8172__auto__ = function(state_18219){
switch(arguments.length){
case 0:
return state_machine__8172__auto____0.call(this);
case 1:
return state_machine__8172__auto____1.call(this,state_18219);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8172__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8172__auto____0;
state_machine__8172__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8172__auto____1;
return state_machine__8172__auto__;
})()
;})(switch__8171__auto__,c__8227__auto__))
})();
var state__8229__auto__ = (function (){var statearr_18236 = f__8228__auto__.call(null);
(statearr_18236[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8227__auto__);

return statearr_18236;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8229__auto__);
});})(c__8227__auto__))
);

return c__8227__auto__;
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
var onto_chan__2 = (function (ch,coll){
return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){
var c__8227__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8227__auto__){
return (function (){
var f__8228__auto__ = (function (){var switch__8171__auto__ = ((function (c__8227__auto__){
return (function (state_18318){
var state_val_18319 = (state_18318[(1)]);
if((state_val_18319 === (7))){
var inst_18300 = (state_18318[(2)]);
var state_18318__$1 = state_18318;
var statearr_18320_18343 = state_18318__$1;
(statearr_18320_18343[(2)] = inst_18300);

(statearr_18320_18343[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18319 === (1))){
var inst_18294 = cljs.core.seq.call(null,coll);
var inst_18295 = inst_18294;
var state_18318__$1 = (function (){var statearr_18321 = state_18318;
(statearr_18321[(7)] = inst_18295);

return statearr_18321;
})();
var statearr_18322_18344 = state_18318__$1;
(statearr_18322_18344[(2)] = null);

(statearr_18322_18344[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18319 === (4))){
var inst_18295 = (state_18318[(7)]);
var inst_18298 = cljs.core.first.call(null,inst_18295);
var state_18318__$1 = state_18318;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18318__$1,(7),ch,inst_18298);
} else {
if((state_val_18319 === (13))){
var inst_18312 = (state_18318[(2)]);
var state_18318__$1 = state_18318;
var statearr_18323_18345 = state_18318__$1;
(statearr_18323_18345[(2)] = inst_18312);

(statearr_18323_18345[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18319 === (6))){
var inst_18303 = (state_18318[(2)]);
var state_18318__$1 = state_18318;
if(cljs.core.truth_(inst_18303)){
var statearr_18324_18346 = state_18318__$1;
(statearr_18324_18346[(1)] = (8));

} else {
var statearr_18325_18347 = state_18318__$1;
(statearr_18325_18347[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18319 === (3))){
var inst_18316 = (state_18318[(2)]);
var state_18318__$1 = state_18318;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18318__$1,inst_18316);
} else {
if((state_val_18319 === (12))){
var state_18318__$1 = state_18318;
var statearr_18326_18348 = state_18318__$1;
(statearr_18326_18348[(2)] = null);

(statearr_18326_18348[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18319 === (2))){
var inst_18295 = (state_18318[(7)]);
var state_18318__$1 = state_18318;
if(cljs.core.truth_(inst_18295)){
var statearr_18327_18349 = state_18318__$1;
(statearr_18327_18349[(1)] = (4));

} else {
var statearr_18328_18350 = state_18318__$1;
(statearr_18328_18350[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18319 === (11))){
var inst_18309 = cljs.core.async.close_BANG_.call(null,ch);
var state_18318__$1 = state_18318;
var statearr_18329_18351 = state_18318__$1;
(statearr_18329_18351[(2)] = inst_18309);

(statearr_18329_18351[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18319 === (9))){
var state_18318__$1 = state_18318;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18330_18352 = state_18318__$1;
(statearr_18330_18352[(1)] = (11));

} else {
var statearr_18331_18353 = state_18318__$1;
(statearr_18331_18353[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18319 === (5))){
var inst_18295 = (state_18318[(7)]);
var state_18318__$1 = state_18318;
var statearr_18332_18354 = state_18318__$1;
(statearr_18332_18354[(2)] = inst_18295);

(statearr_18332_18354[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18319 === (10))){
var inst_18314 = (state_18318[(2)]);
var state_18318__$1 = state_18318;
var statearr_18333_18355 = state_18318__$1;
(statearr_18333_18355[(2)] = inst_18314);

(statearr_18333_18355[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18319 === (8))){
var inst_18295 = (state_18318[(7)]);
var inst_18305 = cljs.core.next.call(null,inst_18295);
var inst_18295__$1 = inst_18305;
var state_18318__$1 = (function (){var statearr_18334 = state_18318;
(statearr_18334[(7)] = inst_18295__$1);

return statearr_18334;
})();
var statearr_18335_18356 = state_18318__$1;
(statearr_18335_18356[(2)] = null);

(statearr_18335_18356[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__8227__auto__))
;
return ((function (switch__8171__auto__,c__8227__auto__){
return (function() {
var state_machine__8172__auto__ = null;
var state_machine__8172__auto____0 = (function (){
var statearr_18339 = [null,null,null,null,null,null,null,null];
(statearr_18339[(0)] = state_machine__8172__auto__);

(statearr_18339[(1)] = (1));

return statearr_18339;
});
var state_machine__8172__auto____1 = (function (state_18318){
while(true){
var ret_value__8173__auto__ = (function (){try{while(true){
var result__8174__auto__ = switch__8171__auto__.call(null,state_18318);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8174__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8174__auto__;
}
break;
}
}catch (e18340){if((e18340 instanceof Object)){
var ex__8175__auto__ = e18340;
var statearr_18341_18357 = state_18318;
(statearr_18341_18357[(5)] = ex__8175__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18318);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18340;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8173__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18358 = state_18318;
state_18318 = G__18358;
continue;
} else {
return ret_value__8173__auto__;
}
break;
}
});
state_machine__8172__auto__ = function(state_18318){
switch(arguments.length){
case 0:
return state_machine__8172__auto____0.call(this);
case 1:
return state_machine__8172__auto____1.call(this,state_18318);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8172__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8172__auto____0;
state_machine__8172__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8172__auto____1;
return state_machine__8172__auto__;
})()
;})(switch__8171__auto__,c__8227__auto__))
})();
var state__8229__auto__ = (function (){var statearr_18342 = f__8228__auto__.call(null);
(statearr_18342[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8227__auto__);

return statearr_18342;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8229__auto__);
});})(c__8227__auto__))
);

return c__8227__auto__;
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
cljs.core.async.to_chan = (function to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj18360 = {};
return obj18360;
})();

cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){
if((function (){var and__5185__auto__ = _;
if(and__5185__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__5185__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__5841__auto__ = (((_ == null))?null:_);
return (function (){var or__5197__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5841__auto__)]);
if(or__5197__auto__){
return or__5197__auto__;
} else {
var or__5197__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__5197__auto____$1){
return or__5197__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj18362 = {};
return obj18362;
})();

cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__5185__auto__ = m;
if(and__5185__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__5185__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__5841__auto__ = (((m == null))?null:m);
return (function (){var or__5197__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5841__auto__)]);
if(or__5197__auto__){
return or__5197__auto__;
} else {
var or__5197__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__5197__auto____$1){
return or__5197__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){
if((function (){var and__5185__auto__ = m;
if(and__5185__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__5185__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__5841__auto__ = (((m == null))?null:m);
return (function (){var or__5197__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5841__auto__)]);
if(or__5197__auto__){
return or__5197__auto__;
} else {
var or__5197__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__5197__auto____$1){
return or__5197__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){
if((function (){var and__5185__auto__ = m;
if(and__5185__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__5185__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__5841__auto__ = (((m == null))?null:m);
return (function (){var or__5197__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5841__auto__)]);
if(or__5197__auto__){
return or__5197__auto__;
} else {
var or__5197__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__5197__auto____$1){
return or__5197__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
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
cljs.core.async.mult = (function mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t18584 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t18584 = (function (cs,ch,mult,meta18585){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta18585 = meta18585;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18584.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t18584.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t18584.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t18584.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t18584.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t18584.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t18584.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_18586){
var self__ = this;
var _18586__$1 = this;
return self__.meta18585;
});})(cs))
;

cljs.core.async.t18584.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_18586,meta18585__$1){
var self__ = this;
var _18586__$1 = this;
return (new cljs.core.async.t18584(self__.cs,self__.ch,self__.mult,meta18585__$1));
});})(cs))
;

cljs.core.async.t18584.cljs$lang$type = true;

cljs.core.async.t18584.cljs$lang$ctorStr = "cljs.core.async/t18584";

cljs.core.async.t18584.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__5784__auto__,writer__5785__auto__,opt__5786__auto__){
return cljs.core._write.call(null,writer__5785__auto__,"cljs.core.async/t18584");
});})(cs))
;

cljs.core.async.__GT_t18584 = ((function (cs){
return (function __GT_t18584(cs__$1,ch__$1,mult__$1,meta18585){
return (new cljs.core.async.t18584(cs__$1,ch__$1,mult__$1,meta18585));
});})(cs))
;

}

return (new cljs.core.async.t18584(cs,ch,mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__8227__auto___18805 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8227__auto___18805,cs,m,dchan,dctr,done){
return (function (){
var f__8228__auto__ = (function (){var switch__8171__auto__ = ((function (c__8227__auto___18805,cs,m,dchan,dctr,done){
return (function (state_18717){
var state_val_18718 = (state_18717[(1)]);
if((state_val_18718 === (7))){
var inst_18713 = (state_18717[(2)]);
var state_18717__$1 = state_18717;
var statearr_18719_18806 = state_18717__$1;
(statearr_18719_18806[(2)] = inst_18713);

(statearr_18719_18806[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18718 === (20))){
var inst_18618 = (state_18717[(7)]);
var inst_18628 = cljs.core.first.call(null,inst_18618);
var inst_18629 = cljs.core.nth.call(null,inst_18628,(0),null);
var inst_18630 = cljs.core.nth.call(null,inst_18628,(1),null);
var state_18717__$1 = (function (){var statearr_18720 = state_18717;
(statearr_18720[(8)] = inst_18629);

return statearr_18720;
})();
if(cljs.core.truth_(inst_18630)){
var statearr_18721_18807 = state_18717__$1;
(statearr_18721_18807[(1)] = (22));

} else {
var statearr_18722_18808 = state_18717__$1;
(statearr_18722_18808[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18718 === (27))){
var inst_18589 = (state_18717[(9)]);
var inst_18658 = (state_18717[(10)]);
var inst_18660 = (state_18717[(11)]);
var inst_18665 = (state_18717[(12)]);
var inst_18665__$1 = cljs.core._nth.call(null,inst_18658,inst_18660);
var inst_18666 = cljs.core.async.put_BANG_.call(null,inst_18665__$1,inst_18589,done);
var state_18717__$1 = (function (){var statearr_18723 = state_18717;
(statearr_18723[(12)] = inst_18665__$1);

return statearr_18723;
})();
if(cljs.core.truth_(inst_18666)){
var statearr_18724_18809 = state_18717__$1;
(statearr_18724_18809[(1)] = (30));

} else {
var statearr_18725_18810 = state_18717__$1;
(statearr_18725_18810[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18718 === (1))){
var state_18717__$1 = state_18717;
var statearr_18726_18811 = state_18717__$1;
(statearr_18726_18811[(2)] = null);

(statearr_18726_18811[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18718 === (24))){
var inst_18618 = (state_18717[(7)]);
var inst_18635 = (state_18717[(2)]);
var inst_18636 = cljs.core.next.call(null,inst_18618);
var inst_18598 = inst_18636;
var inst_18599 = null;
var inst_18600 = (0);
var inst_18601 = (0);
var state_18717__$1 = (function (){var statearr_18727 = state_18717;
(statearr_18727[(13)] = inst_18600);

(statearr_18727[(14)] = inst_18598);

(statearr_18727[(15)] = inst_18599);

(statearr_18727[(16)] = inst_18601);

(statearr_18727[(17)] = inst_18635);

return statearr_18727;
})();
var statearr_18728_18812 = state_18717__$1;
(statearr_18728_18812[(2)] = null);

(statearr_18728_18812[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18718 === (39))){
var state_18717__$1 = state_18717;
var statearr_18732_18813 = state_18717__$1;
(statearr_18732_18813[(2)] = null);

(statearr_18732_18813[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18718 === (4))){
var inst_18589 = (state_18717[(9)]);
var inst_18589__$1 = (state_18717[(2)]);
var inst_18590 = (inst_18589__$1 == null);
var state_18717__$1 = (function (){var statearr_18733 = state_18717;
(statearr_18733[(9)] = inst_18589__$1);

return statearr_18733;
})();
if(cljs.core.truth_(inst_18590)){
var statearr_18734_18814 = state_18717__$1;
(statearr_18734_18814[(1)] = (5));

} else {
var statearr_18735_18815 = state_18717__$1;
(statearr_18735_18815[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18718 === (15))){
var inst_18600 = (state_18717[(13)]);
var inst_18598 = (state_18717[(14)]);
var inst_18599 = (state_18717[(15)]);
var inst_18601 = (state_18717[(16)]);
var inst_18614 = (state_18717[(2)]);
var inst_18615 = (inst_18601 + (1));
var tmp18729 = inst_18600;
var tmp18730 = inst_18598;
var tmp18731 = inst_18599;
var inst_18598__$1 = tmp18730;
var inst_18599__$1 = tmp18731;
var inst_18600__$1 = tmp18729;
var inst_18601__$1 = inst_18615;
var state_18717__$1 = (function (){var statearr_18736 = state_18717;
(statearr_18736[(13)] = inst_18600__$1);

(statearr_18736[(14)] = inst_18598__$1);

(statearr_18736[(15)] = inst_18599__$1);

(statearr_18736[(16)] = inst_18601__$1);

(statearr_18736[(18)] = inst_18614);

return statearr_18736;
})();
var statearr_18737_18816 = state_18717__$1;
(statearr_18737_18816[(2)] = null);

(statearr_18737_18816[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18718 === (21))){
var inst_18639 = (state_18717[(2)]);
var state_18717__$1 = state_18717;
var statearr_18741_18817 = state_18717__$1;
(statearr_18741_18817[(2)] = inst_18639);

(statearr_18741_18817[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18718 === (31))){
var inst_18665 = (state_18717[(12)]);
var inst_18669 = done.call(null,null);
var inst_18670 = cljs.core.async.untap_STAR_.call(null,m,inst_18665);
var state_18717__$1 = (function (){var statearr_18742 = state_18717;
(statearr_18742[(19)] = inst_18669);

return statearr_18742;
})();
var statearr_18743_18818 = state_18717__$1;
(statearr_18743_18818[(2)] = inst_18670);

(statearr_18743_18818[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18718 === (32))){
var inst_18658 = (state_18717[(10)]);
var inst_18657 = (state_18717[(20)]);
var inst_18660 = (state_18717[(11)]);
var inst_18659 = (state_18717[(21)]);
var inst_18672 = (state_18717[(2)]);
var inst_18673 = (inst_18660 + (1));
var tmp18738 = inst_18658;
var tmp18739 = inst_18657;
var tmp18740 = inst_18659;
var inst_18657__$1 = tmp18739;
var inst_18658__$1 = tmp18738;
var inst_18659__$1 = tmp18740;
var inst_18660__$1 = inst_18673;
var state_18717__$1 = (function (){var statearr_18744 = state_18717;
(statearr_18744[(10)] = inst_18658__$1);

(statearr_18744[(20)] = inst_18657__$1);

(statearr_18744[(22)] = inst_18672);

(statearr_18744[(11)] = inst_18660__$1);

(statearr_18744[(21)] = inst_18659__$1);

return statearr_18744;
})();
var statearr_18745_18819 = state_18717__$1;
(statearr_18745_18819[(2)] = null);

(statearr_18745_18819[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18718 === (40))){
var inst_18685 = (state_18717[(23)]);
var inst_18689 = done.call(null,null);
var inst_18690 = cljs.core.async.untap_STAR_.call(null,m,inst_18685);
var state_18717__$1 = (function (){var statearr_18746 = state_18717;
(statearr_18746[(24)] = inst_18689);

return statearr_18746;
})();
var statearr_18747_18820 = state_18717__$1;
(statearr_18747_18820[(2)] = inst_18690);

(statearr_18747_18820[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18718 === (33))){
var inst_18676 = (state_18717[(25)]);
var inst_18678 = cljs.core.chunked_seq_QMARK_.call(null,inst_18676);
var state_18717__$1 = state_18717;
if(inst_18678){
var statearr_18748_18821 = state_18717__$1;
(statearr_18748_18821[(1)] = (36));

} else {
var statearr_18749_18822 = state_18717__$1;
(statearr_18749_18822[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18718 === (13))){
var inst_18608 = (state_18717[(26)]);
var inst_18611 = cljs.core.async.close_BANG_.call(null,inst_18608);
var state_18717__$1 = state_18717;
var statearr_18750_18823 = state_18717__$1;
(statearr_18750_18823[(2)] = inst_18611);

(statearr_18750_18823[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18718 === (22))){
var inst_18629 = (state_18717[(8)]);
var inst_18632 = cljs.core.async.close_BANG_.call(null,inst_18629);
var state_18717__$1 = state_18717;
var statearr_18751_18824 = state_18717__$1;
(statearr_18751_18824[(2)] = inst_18632);

(statearr_18751_18824[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18718 === (36))){
var inst_18676 = (state_18717[(25)]);
var inst_18680 = cljs.core.chunk_first.call(null,inst_18676);
var inst_18681 = cljs.core.chunk_rest.call(null,inst_18676);
var inst_18682 = cljs.core.count.call(null,inst_18680);
var inst_18657 = inst_18681;
var inst_18658 = inst_18680;
var inst_18659 = inst_18682;
var inst_18660 = (0);
var state_18717__$1 = (function (){var statearr_18752 = state_18717;
(statearr_18752[(10)] = inst_18658);

(statearr_18752[(20)] = inst_18657);

(statearr_18752[(11)] = inst_18660);

(statearr_18752[(21)] = inst_18659);

return statearr_18752;
})();
var statearr_18753_18825 = state_18717__$1;
(statearr_18753_18825[(2)] = null);

(statearr_18753_18825[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18718 === (41))){
var inst_18676 = (state_18717[(25)]);
var inst_18692 = (state_18717[(2)]);
var inst_18693 = cljs.core.next.call(null,inst_18676);
var inst_18657 = inst_18693;
var inst_18658 = null;
var inst_18659 = (0);
var inst_18660 = (0);
var state_18717__$1 = (function (){var statearr_18754 = state_18717;
(statearr_18754[(10)] = inst_18658);

(statearr_18754[(20)] = inst_18657);

(statearr_18754[(11)] = inst_18660);

(statearr_18754[(27)] = inst_18692);

(statearr_18754[(21)] = inst_18659);

return statearr_18754;
})();
var statearr_18755_18826 = state_18717__$1;
(statearr_18755_18826[(2)] = null);

(statearr_18755_18826[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18718 === (43))){
var state_18717__$1 = state_18717;
var statearr_18756_18827 = state_18717__$1;
(statearr_18756_18827[(2)] = null);

(statearr_18756_18827[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18718 === (29))){
var inst_18701 = (state_18717[(2)]);
var state_18717__$1 = state_18717;
var statearr_18757_18828 = state_18717__$1;
(statearr_18757_18828[(2)] = inst_18701);

(statearr_18757_18828[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18718 === (44))){
var inst_18710 = (state_18717[(2)]);
var state_18717__$1 = (function (){var statearr_18758 = state_18717;
(statearr_18758[(28)] = inst_18710);

return statearr_18758;
})();
var statearr_18759_18829 = state_18717__$1;
(statearr_18759_18829[(2)] = null);

(statearr_18759_18829[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18718 === (6))){
var inst_18649 = (state_18717[(29)]);
var inst_18648 = cljs.core.deref.call(null,cs);
var inst_18649__$1 = cljs.core.keys.call(null,inst_18648);
var inst_18650 = cljs.core.count.call(null,inst_18649__$1);
var inst_18651 = cljs.core.reset_BANG_.call(null,dctr,inst_18650);
var inst_18656 = cljs.core.seq.call(null,inst_18649__$1);
var inst_18657 = inst_18656;
var inst_18658 = null;
var inst_18659 = (0);
var inst_18660 = (0);
var state_18717__$1 = (function (){var statearr_18760 = state_18717;
(statearr_18760[(29)] = inst_18649__$1);

(statearr_18760[(10)] = inst_18658);

(statearr_18760[(20)] = inst_18657);

(statearr_18760[(11)] = inst_18660);

(statearr_18760[(30)] = inst_18651);

(statearr_18760[(21)] = inst_18659);

return statearr_18760;
})();
var statearr_18761_18830 = state_18717__$1;
(statearr_18761_18830[(2)] = null);

(statearr_18761_18830[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18718 === (28))){
var inst_18657 = (state_18717[(20)]);
var inst_18676 = (state_18717[(25)]);
var inst_18676__$1 = cljs.core.seq.call(null,inst_18657);
var state_18717__$1 = (function (){var statearr_18762 = state_18717;
(statearr_18762[(25)] = inst_18676__$1);

return statearr_18762;
})();
if(inst_18676__$1){
var statearr_18763_18831 = state_18717__$1;
(statearr_18763_18831[(1)] = (33));

} else {
var statearr_18764_18832 = state_18717__$1;
(statearr_18764_18832[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18718 === (25))){
var inst_18660 = (state_18717[(11)]);
var inst_18659 = (state_18717[(21)]);
var inst_18662 = (inst_18660 < inst_18659);
var inst_18663 = inst_18662;
var state_18717__$1 = state_18717;
if(cljs.core.truth_(inst_18663)){
var statearr_18765_18833 = state_18717__$1;
(statearr_18765_18833[(1)] = (27));

} else {
var statearr_18766_18834 = state_18717__$1;
(statearr_18766_18834[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18718 === (34))){
var state_18717__$1 = state_18717;
var statearr_18767_18835 = state_18717__$1;
(statearr_18767_18835[(2)] = null);

(statearr_18767_18835[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18718 === (17))){
var state_18717__$1 = state_18717;
var statearr_18768_18836 = state_18717__$1;
(statearr_18768_18836[(2)] = null);

(statearr_18768_18836[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18718 === (3))){
var inst_18715 = (state_18717[(2)]);
var state_18717__$1 = state_18717;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18717__$1,inst_18715);
} else {
if((state_val_18718 === (12))){
var inst_18644 = (state_18717[(2)]);
var state_18717__$1 = state_18717;
var statearr_18769_18837 = state_18717__$1;
(statearr_18769_18837[(2)] = inst_18644);

(statearr_18769_18837[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18718 === (2))){
var state_18717__$1 = state_18717;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18717__$1,(4),ch);
} else {
if((state_val_18718 === (23))){
var state_18717__$1 = state_18717;
var statearr_18770_18838 = state_18717__$1;
(statearr_18770_18838[(2)] = null);

(statearr_18770_18838[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18718 === (35))){
var inst_18699 = (state_18717[(2)]);
var state_18717__$1 = state_18717;
var statearr_18771_18839 = state_18717__$1;
(statearr_18771_18839[(2)] = inst_18699);

(statearr_18771_18839[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18718 === (19))){
var inst_18618 = (state_18717[(7)]);
var inst_18622 = cljs.core.chunk_first.call(null,inst_18618);
var inst_18623 = cljs.core.chunk_rest.call(null,inst_18618);
var inst_18624 = cljs.core.count.call(null,inst_18622);
var inst_18598 = inst_18623;
var inst_18599 = inst_18622;
var inst_18600 = inst_18624;
var inst_18601 = (0);
var state_18717__$1 = (function (){var statearr_18772 = state_18717;
(statearr_18772[(13)] = inst_18600);

(statearr_18772[(14)] = inst_18598);

(statearr_18772[(15)] = inst_18599);

(statearr_18772[(16)] = inst_18601);

return statearr_18772;
})();
var statearr_18773_18840 = state_18717__$1;
(statearr_18773_18840[(2)] = null);

(statearr_18773_18840[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18718 === (11))){
var inst_18598 = (state_18717[(14)]);
var inst_18618 = (state_18717[(7)]);
var inst_18618__$1 = cljs.core.seq.call(null,inst_18598);
var state_18717__$1 = (function (){var statearr_18774 = state_18717;
(statearr_18774[(7)] = inst_18618__$1);

return statearr_18774;
})();
if(inst_18618__$1){
var statearr_18775_18841 = state_18717__$1;
(statearr_18775_18841[(1)] = (16));

} else {
var statearr_18776_18842 = state_18717__$1;
(statearr_18776_18842[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18718 === (9))){
var inst_18646 = (state_18717[(2)]);
var state_18717__$1 = state_18717;
var statearr_18777_18843 = state_18717__$1;
(statearr_18777_18843[(2)] = inst_18646);

(statearr_18777_18843[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18718 === (5))){
var inst_18596 = cljs.core.deref.call(null,cs);
var inst_18597 = cljs.core.seq.call(null,inst_18596);
var inst_18598 = inst_18597;
var inst_18599 = null;
var inst_18600 = (0);
var inst_18601 = (0);
var state_18717__$1 = (function (){var statearr_18778 = state_18717;
(statearr_18778[(13)] = inst_18600);

(statearr_18778[(14)] = inst_18598);

(statearr_18778[(15)] = inst_18599);

(statearr_18778[(16)] = inst_18601);

return statearr_18778;
})();
var statearr_18779_18844 = state_18717__$1;
(statearr_18779_18844[(2)] = null);

(statearr_18779_18844[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18718 === (14))){
var state_18717__$1 = state_18717;
var statearr_18780_18845 = state_18717__$1;
(statearr_18780_18845[(2)] = null);

(statearr_18780_18845[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18718 === (45))){
var inst_18707 = (state_18717[(2)]);
var state_18717__$1 = state_18717;
var statearr_18781_18846 = state_18717__$1;
(statearr_18781_18846[(2)] = inst_18707);

(statearr_18781_18846[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18718 === (26))){
var inst_18649 = (state_18717[(29)]);
var inst_18703 = (state_18717[(2)]);
var inst_18704 = cljs.core.seq.call(null,inst_18649);
var state_18717__$1 = (function (){var statearr_18782 = state_18717;
(statearr_18782[(31)] = inst_18703);

return statearr_18782;
})();
if(inst_18704){
var statearr_18783_18847 = state_18717__$1;
(statearr_18783_18847[(1)] = (42));

} else {
var statearr_18784_18848 = state_18717__$1;
(statearr_18784_18848[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18718 === (16))){
var inst_18618 = (state_18717[(7)]);
var inst_18620 = cljs.core.chunked_seq_QMARK_.call(null,inst_18618);
var state_18717__$1 = state_18717;
if(inst_18620){
var statearr_18785_18849 = state_18717__$1;
(statearr_18785_18849[(1)] = (19));

} else {
var statearr_18786_18850 = state_18717__$1;
(statearr_18786_18850[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18718 === (38))){
var inst_18696 = (state_18717[(2)]);
var state_18717__$1 = state_18717;
var statearr_18787_18851 = state_18717__$1;
(statearr_18787_18851[(2)] = inst_18696);

(statearr_18787_18851[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18718 === (30))){
var state_18717__$1 = state_18717;
var statearr_18788_18852 = state_18717__$1;
(statearr_18788_18852[(2)] = null);

(statearr_18788_18852[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18718 === (10))){
var inst_18599 = (state_18717[(15)]);
var inst_18601 = (state_18717[(16)]);
var inst_18607 = cljs.core._nth.call(null,inst_18599,inst_18601);
var inst_18608 = cljs.core.nth.call(null,inst_18607,(0),null);
var inst_18609 = cljs.core.nth.call(null,inst_18607,(1),null);
var state_18717__$1 = (function (){var statearr_18789 = state_18717;
(statearr_18789[(26)] = inst_18608);

return statearr_18789;
})();
if(cljs.core.truth_(inst_18609)){
var statearr_18790_18853 = state_18717__$1;
(statearr_18790_18853[(1)] = (13));

} else {
var statearr_18791_18854 = state_18717__$1;
(statearr_18791_18854[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18718 === (18))){
var inst_18642 = (state_18717[(2)]);
var state_18717__$1 = state_18717;
var statearr_18792_18855 = state_18717__$1;
(statearr_18792_18855[(2)] = inst_18642);

(statearr_18792_18855[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18718 === (42))){
var state_18717__$1 = state_18717;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18717__$1,(45),dchan);
} else {
if((state_val_18718 === (37))){
var inst_18685 = (state_18717[(23)]);
var inst_18589 = (state_18717[(9)]);
var inst_18676 = (state_18717[(25)]);
var inst_18685__$1 = cljs.core.first.call(null,inst_18676);
var inst_18686 = cljs.core.async.put_BANG_.call(null,inst_18685__$1,inst_18589,done);
var state_18717__$1 = (function (){var statearr_18793 = state_18717;
(statearr_18793[(23)] = inst_18685__$1);

return statearr_18793;
})();
if(cljs.core.truth_(inst_18686)){
var statearr_18794_18856 = state_18717__$1;
(statearr_18794_18856[(1)] = (39));

} else {
var statearr_18795_18857 = state_18717__$1;
(statearr_18795_18857[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18718 === (8))){
var inst_18600 = (state_18717[(13)]);
var inst_18601 = (state_18717[(16)]);
var inst_18603 = (inst_18601 < inst_18600);
var inst_18604 = inst_18603;
var state_18717__$1 = state_18717;
if(cljs.core.truth_(inst_18604)){
var statearr_18796_18858 = state_18717__$1;
(statearr_18796_18858[(1)] = (10));

} else {
var statearr_18797_18859 = state_18717__$1;
(statearr_18797_18859[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__8227__auto___18805,cs,m,dchan,dctr,done))
;
return ((function (switch__8171__auto__,c__8227__auto___18805,cs,m,dchan,dctr,done){
return (function() {
var state_machine__8172__auto__ = null;
var state_machine__8172__auto____0 = (function (){
var statearr_18801 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18801[(0)] = state_machine__8172__auto__);

(statearr_18801[(1)] = (1));

return statearr_18801;
});
var state_machine__8172__auto____1 = (function (state_18717){
while(true){
var ret_value__8173__auto__ = (function (){try{while(true){
var result__8174__auto__ = switch__8171__auto__.call(null,state_18717);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8174__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8174__auto__;
}
break;
}
}catch (e18802){if((e18802 instanceof Object)){
var ex__8175__auto__ = e18802;
var statearr_18803_18860 = state_18717;
(statearr_18803_18860[(5)] = ex__8175__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18717);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18802;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8173__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18861 = state_18717;
state_18717 = G__18861;
continue;
} else {
return ret_value__8173__auto__;
}
break;
}
});
state_machine__8172__auto__ = function(state_18717){
switch(arguments.length){
case 0:
return state_machine__8172__auto____0.call(this);
case 1:
return state_machine__8172__auto____1.call(this,state_18717);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8172__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8172__auto____0;
state_machine__8172__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8172__auto____1;
return state_machine__8172__auto__;
})()
;})(switch__8171__auto__,c__8227__auto___18805,cs,m,dchan,dctr,done))
})();
var state__8229__auto__ = (function (){var statearr_18804 = f__8228__auto__.call(null);
(statearr_18804[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8227__auto___18805);

return statearr_18804;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8229__auto__);
});})(c__8227__auto___18805,cs,m,dchan,dctr,done))
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
var tap__2 = (function (mult,ch){
return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

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
cljs.core.async.untap = (function untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

cljs.core.async.Mix = (function (){var obj18863 = {};
return obj18863;
})();

cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){
if((function (){var and__5185__auto__ = m;
if(and__5185__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__5185__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__5841__auto__ = (((m == null))?null:m);
return (function (){var or__5197__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5841__auto__)]);
if(or__5197__auto__){
return or__5197__auto__;
} else {
var or__5197__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__5197__auto____$1){
return or__5197__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){
if((function (){var and__5185__auto__ = m;
if(and__5185__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__5185__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__5841__auto__ = (((m == null))?null:m);
return (function (){var or__5197__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5841__auto__)]);
if(or__5197__auto__){
return or__5197__auto__;
} else {
var or__5197__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__5197__auto____$1){
return or__5197__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){
if((function (){var and__5185__auto__ = m;
if(and__5185__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__5185__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__5841__auto__ = (((m == null))?null:m);
return (function (){var or__5197__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5841__auto__)]);
if(or__5197__auto__){
return or__5197__auto__;
} else {
var or__5197__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__5197__auto____$1){
return or__5197__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){
if((function (){var and__5185__auto__ = m;
if(and__5185__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__5185__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__5841__auto__ = (((m == null))?null:m);
return (function (){var or__5197__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5841__auto__)]);
if(or__5197__auto__){
return or__5197__auto__;
} else {
var or__5197__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__5197__auto____$1){
return or__5197__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){
if((function (){var and__5185__auto__ = m;
if(and__5185__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__5185__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__5841__auto__ = (((m == null))?null:m);
return (function (){var or__5197__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5841__auto__)]);
if(or__5197__auto__){
return or__5197__auto__;
} else {
var or__5197__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__5197__auto____$1){
return or__5197__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

/**
 * @param {...*} var_args
 */
cljs.core.async.ioc_alts_BANG_ = (function() { 
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__18864){
var map__18869 = p__18864;
var map__18869__$1 = ((cljs.core.seq_QMARK_.call(null,map__18869))?cljs.core.apply.call(null,cljs.core.hash_map,map__18869):map__18869);
var opts = map__18869__$1;
var statearr_18870_18873 = state;
(statearr_18870_18873[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4406__auto__ = cljs.core.async.do_alts.call(null,((function (map__18869,map__18869__$1,opts){
return (function (val){
var statearr_18871_18874 = state;
(statearr_18871_18874[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__18869,map__18869__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4406__auto__)){
var cb = temp__4406__auto__;
var statearr_18872_18875 = state;
(statearr_18872_18875[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__18864 = null;
if (arguments.length > 3) {
var G__18876__i = 0, G__18876__a = new Array(arguments.length -  3);
while (G__18876__i < G__18876__a.length) {G__18876__a[G__18876__i] = arguments[G__18876__i + 3]; ++G__18876__i;}
  p__18864 = new cljs.core.IndexedSeq(G__18876__a,0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__18864);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__18877){
var state = cljs.core.first(arglist__18877);
arglist__18877 = cljs.core.next(arglist__18877);
var cont_block = cljs.core.first(arglist__18877);
arglist__18877 = cljs.core.next(arglist__18877);
var ports = cljs.core.first(arglist__18877);
var p__18864 = cljs.core.rest(arglist__18877);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__18864);
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
cljs.core.async.mix = (function mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t18997 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t18997 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta18998){
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
this.meta18998 = meta18998;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18997.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t18997.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t18997.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t18997.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t18997.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t18997.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t18997.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t18997.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t18997.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_18999){
var self__ = this;
var _18999__$1 = this;
return self__.meta18998;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t18997.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_18999,meta18998__$1){
var self__ = this;
var _18999__$1 = this;
return (new cljs.core.async.t18997(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta18998__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t18997.cljs$lang$type = true;

cljs.core.async.t18997.cljs$lang$ctorStr = "cljs.core.async/t18997";

cljs.core.async.t18997.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__5784__auto__,writer__5785__auto__,opt__5786__auto__){
return cljs.core._write.call(null,writer__5785__auto__,"cljs.core.async/t18997");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t18997 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t18997(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta18998){
return (new cljs.core.async.t18997(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta18998));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t18997(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__8227__auto___19116 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8227__auto___19116,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__8228__auto__ = (function (){var switch__8171__auto__ = ((function (c__8227__auto___19116,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_19069){
var state_val_19070 = (state_19069[(1)]);
if((state_val_19070 === (7))){
var inst_19013 = (state_19069[(7)]);
var inst_19018 = cljs.core.apply.call(null,cljs.core.hash_map,inst_19013);
var state_19069__$1 = state_19069;
var statearr_19071_19117 = state_19069__$1;
(statearr_19071_19117[(2)] = inst_19018);

(statearr_19071_19117[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19070 === (20))){
var inst_19028 = (state_19069[(8)]);
var state_19069__$1 = state_19069;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19069__$1,(23),out,inst_19028);
} else {
if((state_val_19070 === (1))){
var inst_19003 = (state_19069[(9)]);
var inst_19003__$1 = calc_state.call(null);
var inst_19004 = cljs.core.seq_QMARK_.call(null,inst_19003__$1);
var state_19069__$1 = (function (){var statearr_19072 = state_19069;
(statearr_19072[(9)] = inst_19003__$1);

return statearr_19072;
})();
if(inst_19004){
var statearr_19073_19118 = state_19069__$1;
(statearr_19073_19118[(1)] = (2));

} else {
var statearr_19074_19119 = state_19069__$1;
(statearr_19074_19119[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19070 === (24))){
var inst_19021 = (state_19069[(10)]);
var inst_19013 = inst_19021;
var state_19069__$1 = (function (){var statearr_19075 = state_19069;
(statearr_19075[(7)] = inst_19013);

return statearr_19075;
})();
var statearr_19076_19120 = state_19069__$1;
(statearr_19076_19120[(2)] = null);

(statearr_19076_19120[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19070 === (4))){
var inst_19003 = (state_19069[(9)]);
var inst_19009 = (state_19069[(2)]);
var inst_19010 = cljs.core.get.call(null,inst_19009,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_19011 = cljs.core.get.call(null,inst_19009,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_19012 = cljs.core.get.call(null,inst_19009,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_19013 = inst_19003;
var state_19069__$1 = (function (){var statearr_19077 = state_19069;
(statearr_19077[(11)] = inst_19012);

(statearr_19077[(12)] = inst_19011);

(statearr_19077[(13)] = inst_19010);

(statearr_19077[(7)] = inst_19013);

return statearr_19077;
})();
var statearr_19078_19121 = state_19069__$1;
(statearr_19078_19121[(2)] = null);

(statearr_19078_19121[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19070 === (15))){
var state_19069__$1 = state_19069;
var statearr_19079_19122 = state_19069__$1;
(statearr_19079_19122[(2)] = null);

(statearr_19079_19122[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19070 === (21))){
var inst_19021 = (state_19069[(10)]);
var inst_19013 = inst_19021;
var state_19069__$1 = (function (){var statearr_19080 = state_19069;
(statearr_19080[(7)] = inst_19013);

return statearr_19080;
})();
var statearr_19081_19123 = state_19069__$1;
(statearr_19081_19123[(2)] = null);

(statearr_19081_19123[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19070 === (13))){
var inst_19065 = (state_19069[(2)]);
var state_19069__$1 = state_19069;
var statearr_19082_19124 = state_19069__$1;
(statearr_19082_19124[(2)] = inst_19065);

(statearr_19082_19124[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19070 === (22))){
var inst_19063 = (state_19069[(2)]);
var state_19069__$1 = state_19069;
var statearr_19083_19125 = state_19069__$1;
(statearr_19083_19125[(2)] = inst_19063);

(statearr_19083_19125[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19070 === (6))){
var inst_19067 = (state_19069[(2)]);
var state_19069__$1 = state_19069;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19069__$1,inst_19067);
} else {
if((state_val_19070 === (25))){
var state_19069__$1 = state_19069;
var statearr_19084_19126 = state_19069__$1;
(statearr_19084_19126[(2)] = null);

(statearr_19084_19126[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19070 === (17))){
var inst_19043 = (state_19069[(14)]);
var state_19069__$1 = state_19069;
var statearr_19085_19127 = state_19069__$1;
(statearr_19085_19127[(2)] = inst_19043);

(statearr_19085_19127[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19070 === (3))){
var inst_19003 = (state_19069[(9)]);
var state_19069__$1 = state_19069;
var statearr_19086_19128 = state_19069__$1;
(statearr_19086_19128[(2)] = inst_19003);

(statearr_19086_19128[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19070 === (12))){
var inst_19029 = (state_19069[(15)]);
var inst_19043 = (state_19069[(14)]);
var inst_19024 = (state_19069[(16)]);
var inst_19043__$1 = inst_19024.call(null,inst_19029);
var state_19069__$1 = (function (){var statearr_19087 = state_19069;
(statearr_19087[(14)] = inst_19043__$1);

return statearr_19087;
})();
if(cljs.core.truth_(inst_19043__$1)){
var statearr_19088_19129 = state_19069__$1;
(statearr_19088_19129[(1)] = (17));

} else {
var statearr_19089_19130 = state_19069__$1;
(statearr_19089_19130[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19070 === (2))){
var inst_19003 = (state_19069[(9)]);
var inst_19006 = cljs.core.apply.call(null,cljs.core.hash_map,inst_19003);
var state_19069__$1 = state_19069;
var statearr_19090_19131 = state_19069__$1;
(statearr_19090_19131[(2)] = inst_19006);

(statearr_19090_19131[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19070 === (23))){
var inst_19054 = (state_19069[(2)]);
var state_19069__$1 = state_19069;
if(cljs.core.truth_(inst_19054)){
var statearr_19091_19132 = state_19069__$1;
(statearr_19091_19132[(1)] = (24));

} else {
var statearr_19092_19133 = state_19069__$1;
(statearr_19092_19133[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19070 === (19))){
var inst_19051 = (state_19069[(2)]);
var state_19069__$1 = state_19069;
if(cljs.core.truth_(inst_19051)){
var statearr_19093_19134 = state_19069__$1;
(statearr_19093_19134[(1)] = (20));

} else {
var statearr_19094_19135 = state_19069__$1;
(statearr_19094_19135[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19070 === (11))){
var inst_19028 = (state_19069[(8)]);
var inst_19034 = (inst_19028 == null);
var state_19069__$1 = state_19069;
if(cljs.core.truth_(inst_19034)){
var statearr_19095_19136 = state_19069__$1;
(statearr_19095_19136[(1)] = (14));

} else {
var statearr_19096_19137 = state_19069__$1;
(statearr_19096_19137[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19070 === (9))){
var inst_19021 = (state_19069[(10)]);
var inst_19021__$1 = (state_19069[(2)]);
var inst_19022 = cljs.core.get.call(null,inst_19021__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_19023 = cljs.core.get.call(null,inst_19021__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_19024 = cljs.core.get.call(null,inst_19021__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_19069__$1 = (function (){var statearr_19097 = state_19069;
(statearr_19097[(10)] = inst_19021__$1);

(statearr_19097[(17)] = inst_19023);

(statearr_19097[(16)] = inst_19024);

return statearr_19097;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_19069__$1,(10),inst_19022);
} else {
if((state_val_19070 === (5))){
var inst_19013 = (state_19069[(7)]);
var inst_19016 = cljs.core.seq_QMARK_.call(null,inst_19013);
var state_19069__$1 = state_19069;
if(inst_19016){
var statearr_19098_19138 = state_19069__$1;
(statearr_19098_19138[(1)] = (7));

} else {
var statearr_19099_19139 = state_19069__$1;
(statearr_19099_19139[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19070 === (14))){
var inst_19029 = (state_19069[(15)]);
var inst_19036 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_19029);
var state_19069__$1 = state_19069;
var statearr_19100_19140 = state_19069__$1;
(statearr_19100_19140[(2)] = inst_19036);

(statearr_19100_19140[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19070 === (26))){
var inst_19059 = (state_19069[(2)]);
var state_19069__$1 = state_19069;
var statearr_19101_19141 = state_19069__$1;
(statearr_19101_19141[(2)] = inst_19059);

(statearr_19101_19141[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19070 === (16))){
var inst_19039 = (state_19069[(2)]);
var inst_19040 = calc_state.call(null);
var inst_19013 = inst_19040;
var state_19069__$1 = (function (){var statearr_19102 = state_19069;
(statearr_19102[(18)] = inst_19039);

(statearr_19102[(7)] = inst_19013);

return statearr_19102;
})();
var statearr_19103_19142 = state_19069__$1;
(statearr_19103_19142[(2)] = null);

(statearr_19103_19142[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19070 === (10))){
var inst_19029 = (state_19069[(15)]);
var inst_19028 = (state_19069[(8)]);
var inst_19027 = (state_19069[(2)]);
var inst_19028__$1 = cljs.core.nth.call(null,inst_19027,(0),null);
var inst_19029__$1 = cljs.core.nth.call(null,inst_19027,(1),null);
var inst_19030 = (inst_19028__$1 == null);
var inst_19031 = cljs.core._EQ_.call(null,inst_19029__$1,change);
var inst_19032 = (inst_19030) || (inst_19031);
var state_19069__$1 = (function (){var statearr_19104 = state_19069;
(statearr_19104[(15)] = inst_19029__$1);

(statearr_19104[(8)] = inst_19028__$1);

return statearr_19104;
})();
if(cljs.core.truth_(inst_19032)){
var statearr_19105_19143 = state_19069__$1;
(statearr_19105_19143[(1)] = (11));

} else {
var statearr_19106_19144 = state_19069__$1;
(statearr_19106_19144[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19070 === (18))){
var inst_19029 = (state_19069[(15)]);
var inst_19023 = (state_19069[(17)]);
var inst_19024 = (state_19069[(16)]);
var inst_19046 = cljs.core.empty_QMARK_.call(null,inst_19024);
var inst_19047 = inst_19023.call(null,inst_19029);
var inst_19048 = cljs.core.not.call(null,inst_19047);
var inst_19049 = (inst_19046) && (inst_19048);
var state_19069__$1 = state_19069;
var statearr_19107_19145 = state_19069__$1;
(statearr_19107_19145[(2)] = inst_19049);

(statearr_19107_19145[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19070 === (8))){
var inst_19013 = (state_19069[(7)]);
var state_19069__$1 = state_19069;
var statearr_19108_19146 = state_19069__$1;
(statearr_19108_19146[(2)] = inst_19013);

(statearr_19108_19146[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__8227__auto___19116,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__8171__auto__,c__8227__auto___19116,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__8172__auto__ = null;
var state_machine__8172__auto____0 = (function (){
var statearr_19112 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19112[(0)] = state_machine__8172__auto__);

(statearr_19112[(1)] = (1));

return statearr_19112;
});
var state_machine__8172__auto____1 = (function (state_19069){
while(true){
var ret_value__8173__auto__ = (function (){try{while(true){
var result__8174__auto__ = switch__8171__auto__.call(null,state_19069);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8174__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8174__auto__;
}
break;
}
}catch (e19113){if((e19113 instanceof Object)){
var ex__8175__auto__ = e19113;
var statearr_19114_19147 = state_19069;
(statearr_19114_19147[(5)] = ex__8175__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19069);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19113;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8173__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19148 = state_19069;
state_19069 = G__19148;
continue;
} else {
return ret_value__8173__auto__;
}
break;
}
});
state_machine__8172__auto__ = function(state_19069){
switch(arguments.length){
case 0:
return state_machine__8172__auto____0.call(this);
case 1:
return state_machine__8172__auto____1.call(this,state_19069);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8172__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8172__auto____0;
state_machine__8172__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8172__auto____1;
return state_machine__8172__auto__;
})()
;})(switch__8171__auto__,c__8227__auto___19116,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__8229__auto__ = (function (){var statearr_19115 = f__8228__auto__.call(null);
(statearr_19115[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8227__auto___19116);

return statearr_19115;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8229__auto__);
});})(c__8227__auto___19116,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
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
cljs.core.async.toggle = (function toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

cljs.core.async.Pub = (function (){var obj19150 = {};
return obj19150;
})();

cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__5185__auto__ = p;
if(and__5185__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__5185__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__5841__auto__ = (((p == null))?null:p);
return (function (){var or__5197__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5841__auto__)]);
if(or__5197__auto__){
return or__5197__auto__;
} else {
var or__5197__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__5197__auto____$1){
return or__5197__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){
if((function (){var and__5185__auto__ = p;
if(and__5185__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__5185__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__5841__auto__ = (((p == null))?null:p);
return (function (){var or__5197__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5841__auto__)]);
if(or__5197__auto__){
return or__5197__auto__;
} else {
var or__5197__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__5197__auto____$1){
return or__5197__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){
if((function (){var and__5185__auto__ = p;
if(and__5185__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__5185__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__5841__auto__ = (((p == null))?null:p);
return (function (){var or__5197__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5841__auto__)]);
if(or__5197__auto__){
return or__5197__auto__;
} else {
var or__5197__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__5197__auto____$1){
return or__5197__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){
if((function (){var and__5185__auto__ = p;
if(and__5185__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__5185__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__5841__auto__ = (((p == null))?null:p);
return (function (){var or__5197__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5841__auto__)]);
if(or__5197__auto__){
return or__5197__auto__;
} else {
var or__5197__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__5197__auto____$1){
return or__5197__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
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
var pub__2 = (function (ch,topic_fn){
return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__5197__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__5197__auto__)){
return or__5197__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__5197__auto__,mults){
return (function (p1__19151_SHARP_){
if(cljs.core.truth_(p1__19151_SHARP_.call(null,topic))){
return p1__19151_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__19151_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__5197__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t19274 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t19274 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta19275){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta19275 = meta19275;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19274.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t19274.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t19274.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4406__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4406__auto__)){
var m = temp__4406__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t19274.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t19274.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t19274.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t19274.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t19274.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_19276){
var self__ = this;
var _19276__$1 = this;
return self__.meta19275;
});})(mults,ensure_mult))
;

cljs.core.async.t19274.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_19276,meta19275__$1){
var self__ = this;
var _19276__$1 = this;
return (new cljs.core.async.t19274(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta19275__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t19274.cljs$lang$type = true;

cljs.core.async.t19274.cljs$lang$ctorStr = "cljs.core.async/t19274";

cljs.core.async.t19274.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__5784__auto__,writer__5785__auto__,opt__5786__auto__){
return cljs.core._write.call(null,writer__5785__auto__,"cljs.core.async/t19274");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t19274 = ((function (mults,ensure_mult){
return (function __GT_t19274(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta19275){
return (new cljs.core.async.t19274(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta19275));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t19274(ensure_mult,mults,buf_fn,topic_fn,ch,pub,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__8227__auto___19396 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8227__auto___19396,mults,ensure_mult,p){
return (function (){
var f__8228__auto__ = (function (){var switch__8171__auto__ = ((function (c__8227__auto___19396,mults,ensure_mult,p){
return (function (state_19348){
var state_val_19349 = (state_19348[(1)]);
if((state_val_19349 === (7))){
var inst_19344 = (state_19348[(2)]);
var state_19348__$1 = state_19348;
var statearr_19350_19397 = state_19348__$1;
(statearr_19350_19397[(2)] = inst_19344);

(statearr_19350_19397[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19349 === (20))){
var state_19348__$1 = state_19348;
var statearr_19351_19398 = state_19348__$1;
(statearr_19351_19398[(2)] = null);

(statearr_19351_19398[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19349 === (1))){
var state_19348__$1 = state_19348;
var statearr_19352_19399 = state_19348__$1;
(statearr_19352_19399[(2)] = null);

(statearr_19352_19399[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19349 === (24))){
var inst_19327 = (state_19348[(7)]);
var inst_19336 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_19327);
var state_19348__$1 = state_19348;
var statearr_19353_19400 = state_19348__$1;
(statearr_19353_19400[(2)] = inst_19336);

(statearr_19353_19400[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19349 === (4))){
var inst_19279 = (state_19348[(8)]);
var inst_19279__$1 = (state_19348[(2)]);
var inst_19280 = (inst_19279__$1 == null);
var state_19348__$1 = (function (){var statearr_19354 = state_19348;
(statearr_19354[(8)] = inst_19279__$1);

return statearr_19354;
})();
if(cljs.core.truth_(inst_19280)){
var statearr_19355_19401 = state_19348__$1;
(statearr_19355_19401[(1)] = (5));

} else {
var statearr_19356_19402 = state_19348__$1;
(statearr_19356_19402[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19349 === (15))){
var inst_19321 = (state_19348[(2)]);
var state_19348__$1 = state_19348;
var statearr_19357_19403 = state_19348__$1;
(statearr_19357_19403[(2)] = inst_19321);

(statearr_19357_19403[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19349 === (21))){
var inst_19341 = (state_19348[(2)]);
var state_19348__$1 = (function (){var statearr_19358 = state_19348;
(statearr_19358[(9)] = inst_19341);

return statearr_19358;
})();
var statearr_19359_19404 = state_19348__$1;
(statearr_19359_19404[(2)] = null);

(statearr_19359_19404[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19349 === (13))){
var inst_19303 = (state_19348[(10)]);
var inst_19305 = cljs.core.chunked_seq_QMARK_.call(null,inst_19303);
var state_19348__$1 = state_19348;
if(inst_19305){
var statearr_19360_19405 = state_19348__$1;
(statearr_19360_19405[(1)] = (16));

} else {
var statearr_19361_19406 = state_19348__$1;
(statearr_19361_19406[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19349 === (22))){
var inst_19333 = (state_19348[(2)]);
var state_19348__$1 = state_19348;
if(cljs.core.truth_(inst_19333)){
var statearr_19362_19407 = state_19348__$1;
(statearr_19362_19407[(1)] = (23));

} else {
var statearr_19363_19408 = state_19348__$1;
(statearr_19363_19408[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19349 === (6))){
var inst_19329 = (state_19348[(11)]);
var inst_19279 = (state_19348[(8)]);
var inst_19327 = (state_19348[(7)]);
var inst_19327__$1 = topic_fn.call(null,inst_19279);
var inst_19328 = cljs.core.deref.call(null,mults);
var inst_19329__$1 = cljs.core.get.call(null,inst_19328,inst_19327__$1);
var state_19348__$1 = (function (){var statearr_19364 = state_19348;
(statearr_19364[(11)] = inst_19329__$1);

(statearr_19364[(7)] = inst_19327__$1);

return statearr_19364;
})();
if(cljs.core.truth_(inst_19329__$1)){
var statearr_19365_19409 = state_19348__$1;
(statearr_19365_19409[(1)] = (19));

} else {
var statearr_19366_19410 = state_19348__$1;
(statearr_19366_19410[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19349 === (25))){
var inst_19338 = (state_19348[(2)]);
var state_19348__$1 = state_19348;
var statearr_19367_19411 = state_19348__$1;
(statearr_19367_19411[(2)] = inst_19338);

(statearr_19367_19411[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19349 === (17))){
var inst_19303 = (state_19348[(10)]);
var inst_19312 = cljs.core.first.call(null,inst_19303);
var inst_19313 = cljs.core.async.muxch_STAR_.call(null,inst_19312);
var inst_19314 = cljs.core.async.close_BANG_.call(null,inst_19313);
var inst_19315 = cljs.core.next.call(null,inst_19303);
var inst_19289 = inst_19315;
var inst_19290 = null;
var inst_19291 = (0);
var inst_19292 = (0);
var state_19348__$1 = (function (){var statearr_19368 = state_19348;
(statearr_19368[(12)] = inst_19314);

(statearr_19368[(13)] = inst_19289);

(statearr_19368[(14)] = inst_19292);

(statearr_19368[(15)] = inst_19290);

(statearr_19368[(16)] = inst_19291);

return statearr_19368;
})();
var statearr_19369_19412 = state_19348__$1;
(statearr_19369_19412[(2)] = null);

(statearr_19369_19412[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19349 === (3))){
var inst_19346 = (state_19348[(2)]);
var state_19348__$1 = state_19348;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19348__$1,inst_19346);
} else {
if((state_val_19349 === (12))){
var inst_19323 = (state_19348[(2)]);
var state_19348__$1 = state_19348;
var statearr_19370_19413 = state_19348__$1;
(statearr_19370_19413[(2)] = inst_19323);

(statearr_19370_19413[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19349 === (2))){
var state_19348__$1 = state_19348;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19348__$1,(4),ch);
} else {
if((state_val_19349 === (23))){
var state_19348__$1 = state_19348;
var statearr_19371_19414 = state_19348__$1;
(statearr_19371_19414[(2)] = null);

(statearr_19371_19414[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19349 === (19))){
var inst_19329 = (state_19348[(11)]);
var inst_19279 = (state_19348[(8)]);
var inst_19331 = cljs.core.async.muxch_STAR_.call(null,inst_19329);
var state_19348__$1 = state_19348;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19348__$1,(22),inst_19331,inst_19279);
} else {
if((state_val_19349 === (11))){
var inst_19303 = (state_19348[(10)]);
var inst_19289 = (state_19348[(13)]);
var inst_19303__$1 = cljs.core.seq.call(null,inst_19289);
var state_19348__$1 = (function (){var statearr_19372 = state_19348;
(statearr_19372[(10)] = inst_19303__$1);

return statearr_19372;
})();
if(inst_19303__$1){
var statearr_19373_19415 = state_19348__$1;
(statearr_19373_19415[(1)] = (13));

} else {
var statearr_19374_19416 = state_19348__$1;
(statearr_19374_19416[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19349 === (9))){
var inst_19325 = (state_19348[(2)]);
var state_19348__$1 = state_19348;
var statearr_19375_19417 = state_19348__$1;
(statearr_19375_19417[(2)] = inst_19325);

(statearr_19375_19417[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19349 === (5))){
var inst_19286 = cljs.core.deref.call(null,mults);
var inst_19287 = cljs.core.vals.call(null,inst_19286);
var inst_19288 = cljs.core.seq.call(null,inst_19287);
var inst_19289 = inst_19288;
var inst_19290 = null;
var inst_19291 = (0);
var inst_19292 = (0);
var state_19348__$1 = (function (){var statearr_19376 = state_19348;
(statearr_19376[(13)] = inst_19289);

(statearr_19376[(14)] = inst_19292);

(statearr_19376[(15)] = inst_19290);

(statearr_19376[(16)] = inst_19291);

return statearr_19376;
})();
var statearr_19377_19418 = state_19348__$1;
(statearr_19377_19418[(2)] = null);

(statearr_19377_19418[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19349 === (14))){
var state_19348__$1 = state_19348;
var statearr_19381_19419 = state_19348__$1;
(statearr_19381_19419[(2)] = null);

(statearr_19381_19419[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19349 === (16))){
var inst_19303 = (state_19348[(10)]);
var inst_19307 = cljs.core.chunk_first.call(null,inst_19303);
var inst_19308 = cljs.core.chunk_rest.call(null,inst_19303);
var inst_19309 = cljs.core.count.call(null,inst_19307);
var inst_19289 = inst_19308;
var inst_19290 = inst_19307;
var inst_19291 = inst_19309;
var inst_19292 = (0);
var state_19348__$1 = (function (){var statearr_19382 = state_19348;
(statearr_19382[(13)] = inst_19289);

(statearr_19382[(14)] = inst_19292);

(statearr_19382[(15)] = inst_19290);

(statearr_19382[(16)] = inst_19291);

return statearr_19382;
})();
var statearr_19383_19420 = state_19348__$1;
(statearr_19383_19420[(2)] = null);

(statearr_19383_19420[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19349 === (10))){
var inst_19289 = (state_19348[(13)]);
var inst_19292 = (state_19348[(14)]);
var inst_19290 = (state_19348[(15)]);
var inst_19291 = (state_19348[(16)]);
var inst_19297 = cljs.core._nth.call(null,inst_19290,inst_19292);
var inst_19298 = cljs.core.async.muxch_STAR_.call(null,inst_19297);
var inst_19299 = cljs.core.async.close_BANG_.call(null,inst_19298);
var inst_19300 = (inst_19292 + (1));
var tmp19378 = inst_19289;
var tmp19379 = inst_19290;
var tmp19380 = inst_19291;
var inst_19289__$1 = tmp19378;
var inst_19290__$1 = tmp19379;
var inst_19291__$1 = tmp19380;
var inst_19292__$1 = inst_19300;
var state_19348__$1 = (function (){var statearr_19384 = state_19348;
(statearr_19384[(17)] = inst_19299);

(statearr_19384[(13)] = inst_19289__$1);

(statearr_19384[(14)] = inst_19292__$1);

(statearr_19384[(15)] = inst_19290__$1);

(statearr_19384[(16)] = inst_19291__$1);

return statearr_19384;
})();
var statearr_19385_19421 = state_19348__$1;
(statearr_19385_19421[(2)] = null);

(statearr_19385_19421[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19349 === (18))){
var inst_19318 = (state_19348[(2)]);
var state_19348__$1 = state_19348;
var statearr_19386_19422 = state_19348__$1;
(statearr_19386_19422[(2)] = inst_19318);

(statearr_19386_19422[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19349 === (8))){
var inst_19292 = (state_19348[(14)]);
var inst_19291 = (state_19348[(16)]);
var inst_19294 = (inst_19292 < inst_19291);
var inst_19295 = inst_19294;
var state_19348__$1 = state_19348;
if(cljs.core.truth_(inst_19295)){
var statearr_19387_19423 = state_19348__$1;
(statearr_19387_19423[(1)] = (10));

} else {
var statearr_19388_19424 = state_19348__$1;
(statearr_19388_19424[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__8227__auto___19396,mults,ensure_mult,p))
;
return ((function (switch__8171__auto__,c__8227__auto___19396,mults,ensure_mult,p){
return (function() {
var state_machine__8172__auto__ = null;
var state_machine__8172__auto____0 = (function (){
var statearr_19392 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19392[(0)] = state_machine__8172__auto__);

(statearr_19392[(1)] = (1));

return statearr_19392;
});
var state_machine__8172__auto____1 = (function (state_19348){
while(true){
var ret_value__8173__auto__ = (function (){try{while(true){
var result__8174__auto__ = switch__8171__auto__.call(null,state_19348);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8174__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8174__auto__;
}
break;
}
}catch (e19393){if((e19393 instanceof Object)){
var ex__8175__auto__ = e19393;
var statearr_19394_19425 = state_19348;
(statearr_19394_19425[(5)] = ex__8175__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19348);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19393;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8173__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19426 = state_19348;
state_19348 = G__19426;
continue;
} else {
return ret_value__8173__auto__;
}
break;
}
});
state_machine__8172__auto__ = function(state_19348){
switch(arguments.length){
case 0:
return state_machine__8172__auto____0.call(this);
case 1:
return state_machine__8172__auto____1.call(this,state_19348);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8172__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8172__auto____0;
state_machine__8172__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8172__auto____1;
return state_machine__8172__auto__;
})()
;})(switch__8171__auto__,c__8227__auto___19396,mults,ensure_mult,p))
})();
var state__8229__auto__ = (function (){var statearr_19395 = f__8228__auto__.call(null);
(statearr_19395[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8227__auto___19396);

return statearr_19395;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8229__auto__);
});})(c__8227__auto___19396,mults,ensure_mult,p))
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
var sub__3 = (function (p,topic,ch){
return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
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
cljs.core.async.unsub = (function unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
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
var map__2 = (function (f,chs){
return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__8227__auto___19563 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8227__auto___19563,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__8228__auto__ = (function (){var switch__8171__auto__ = ((function (c__8227__auto___19563,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_19533){
var state_val_19534 = (state_19533[(1)]);
if((state_val_19534 === (7))){
var state_19533__$1 = state_19533;
var statearr_19535_19564 = state_19533__$1;
(statearr_19535_19564[(2)] = null);

(statearr_19535_19564[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19534 === (1))){
var state_19533__$1 = state_19533;
var statearr_19536_19565 = state_19533__$1;
(statearr_19536_19565[(2)] = null);

(statearr_19536_19565[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19534 === (4))){
var inst_19497 = (state_19533[(7)]);
var inst_19499 = (inst_19497 < cnt);
var state_19533__$1 = state_19533;
if(cljs.core.truth_(inst_19499)){
var statearr_19537_19566 = state_19533__$1;
(statearr_19537_19566[(1)] = (6));

} else {
var statearr_19538_19567 = state_19533__$1;
(statearr_19538_19567[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19534 === (15))){
var inst_19529 = (state_19533[(2)]);
var state_19533__$1 = state_19533;
var statearr_19539_19568 = state_19533__$1;
(statearr_19539_19568[(2)] = inst_19529);

(statearr_19539_19568[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19534 === (13))){
var inst_19522 = cljs.core.async.close_BANG_.call(null,out);
var state_19533__$1 = state_19533;
var statearr_19540_19569 = state_19533__$1;
(statearr_19540_19569[(2)] = inst_19522);

(statearr_19540_19569[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19534 === (6))){
var state_19533__$1 = state_19533;
var statearr_19541_19570 = state_19533__$1;
(statearr_19541_19570[(2)] = null);

(statearr_19541_19570[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19534 === (3))){
var inst_19531 = (state_19533[(2)]);
var state_19533__$1 = state_19533;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19533__$1,inst_19531);
} else {
if((state_val_19534 === (12))){
var inst_19519 = (state_19533[(8)]);
var inst_19519__$1 = (state_19533[(2)]);
var inst_19520 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_19519__$1);
var state_19533__$1 = (function (){var statearr_19542 = state_19533;
(statearr_19542[(8)] = inst_19519__$1);

return statearr_19542;
})();
if(cljs.core.truth_(inst_19520)){
var statearr_19543_19571 = state_19533__$1;
(statearr_19543_19571[(1)] = (13));

} else {
var statearr_19544_19572 = state_19533__$1;
(statearr_19544_19572[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19534 === (2))){
var inst_19496 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_19497 = (0);
var state_19533__$1 = (function (){var statearr_19545 = state_19533;
(statearr_19545[(9)] = inst_19496);

(statearr_19545[(7)] = inst_19497);

return statearr_19545;
})();
var statearr_19546_19573 = state_19533__$1;
(statearr_19546_19573[(2)] = null);

(statearr_19546_19573[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19534 === (11))){
var inst_19497 = (state_19533[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_19533,(10),Object,null,(9));
var inst_19506 = chs__$1.call(null,inst_19497);
var inst_19507 = done.call(null,inst_19497);
var inst_19508 = cljs.core.async.take_BANG_.call(null,inst_19506,inst_19507);
var state_19533__$1 = state_19533;
var statearr_19547_19574 = state_19533__$1;
(statearr_19547_19574[(2)] = inst_19508);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19533__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19534 === (9))){
var inst_19497 = (state_19533[(7)]);
var inst_19510 = (state_19533[(2)]);
var inst_19511 = (inst_19497 + (1));
var inst_19497__$1 = inst_19511;
var state_19533__$1 = (function (){var statearr_19548 = state_19533;
(statearr_19548[(10)] = inst_19510);

(statearr_19548[(7)] = inst_19497__$1);

return statearr_19548;
})();
var statearr_19549_19575 = state_19533__$1;
(statearr_19549_19575[(2)] = null);

(statearr_19549_19575[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19534 === (5))){
var inst_19517 = (state_19533[(2)]);
var state_19533__$1 = (function (){var statearr_19550 = state_19533;
(statearr_19550[(11)] = inst_19517);

return statearr_19550;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19533__$1,(12),dchan);
} else {
if((state_val_19534 === (14))){
var inst_19519 = (state_19533[(8)]);
var inst_19524 = cljs.core.apply.call(null,f,inst_19519);
var state_19533__$1 = state_19533;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19533__$1,(16),out,inst_19524);
} else {
if((state_val_19534 === (16))){
var inst_19526 = (state_19533[(2)]);
var state_19533__$1 = (function (){var statearr_19551 = state_19533;
(statearr_19551[(12)] = inst_19526);

return statearr_19551;
})();
var statearr_19552_19576 = state_19533__$1;
(statearr_19552_19576[(2)] = null);

(statearr_19552_19576[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19534 === (10))){
var inst_19501 = (state_19533[(2)]);
var inst_19502 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_19533__$1 = (function (){var statearr_19553 = state_19533;
(statearr_19553[(13)] = inst_19501);

return statearr_19553;
})();
var statearr_19554_19577 = state_19533__$1;
(statearr_19554_19577[(2)] = inst_19502);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19533__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19534 === (8))){
var inst_19515 = (state_19533[(2)]);
var state_19533__$1 = state_19533;
var statearr_19555_19578 = state_19533__$1;
(statearr_19555_19578[(2)] = inst_19515);

(statearr_19555_19578[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__8227__auto___19563,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__8171__auto__,c__8227__auto___19563,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__8172__auto__ = null;
var state_machine__8172__auto____0 = (function (){
var statearr_19559 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19559[(0)] = state_machine__8172__auto__);

(statearr_19559[(1)] = (1));

return statearr_19559;
});
var state_machine__8172__auto____1 = (function (state_19533){
while(true){
var ret_value__8173__auto__ = (function (){try{while(true){
var result__8174__auto__ = switch__8171__auto__.call(null,state_19533);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8174__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8174__auto__;
}
break;
}
}catch (e19560){if((e19560 instanceof Object)){
var ex__8175__auto__ = e19560;
var statearr_19561_19579 = state_19533;
(statearr_19561_19579[(5)] = ex__8175__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19533);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19560;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8173__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19580 = state_19533;
state_19533 = G__19580;
continue;
} else {
return ret_value__8173__auto__;
}
break;
}
});
state_machine__8172__auto__ = function(state_19533){
switch(arguments.length){
case 0:
return state_machine__8172__auto____0.call(this);
case 1:
return state_machine__8172__auto____1.call(this,state_19533);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8172__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8172__auto____0;
state_machine__8172__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8172__auto____1;
return state_machine__8172__auto__;
})()
;})(switch__8171__auto__,c__8227__auto___19563,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__8229__auto__ = (function (){var statearr_19562 = f__8228__auto__.call(null);
(statearr_19562[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8227__auto___19563);

return statearr_19562;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8229__auto__);
});})(c__8227__auto___19563,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__1 = (function (chs){
return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__8227__auto___19688 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8227__auto___19688,out){
return (function (){
var f__8228__auto__ = (function (){var switch__8171__auto__ = ((function (c__8227__auto___19688,out){
return (function (state_19664){
var state_val_19665 = (state_19664[(1)]);
if((state_val_19665 === (7))){
var inst_19643 = (state_19664[(7)]);
var inst_19644 = (state_19664[(8)]);
var inst_19643__$1 = (state_19664[(2)]);
var inst_19644__$1 = cljs.core.nth.call(null,inst_19643__$1,(0),null);
var inst_19645 = cljs.core.nth.call(null,inst_19643__$1,(1),null);
var inst_19646 = (inst_19644__$1 == null);
var state_19664__$1 = (function (){var statearr_19666 = state_19664;
(statearr_19666[(7)] = inst_19643__$1);

(statearr_19666[(8)] = inst_19644__$1);

(statearr_19666[(9)] = inst_19645);

return statearr_19666;
})();
if(cljs.core.truth_(inst_19646)){
var statearr_19667_19689 = state_19664__$1;
(statearr_19667_19689[(1)] = (8));

} else {
var statearr_19668_19690 = state_19664__$1;
(statearr_19668_19690[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19665 === (1))){
var inst_19635 = cljs.core.vec.call(null,chs);
var inst_19636 = inst_19635;
var state_19664__$1 = (function (){var statearr_19669 = state_19664;
(statearr_19669[(10)] = inst_19636);

return statearr_19669;
})();
var statearr_19670_19691 = state_19664__$1;
(statearr_19670_19691[(2)] = null);

(statearr_19670_19691[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19665 === (4))){
var inst_19636 = (state_19664[(10)]);
var state_19664__$1 = state_19664;
return cljs.core.async.ioc_alts_BANG_.call(null,state_19664__$1,(7),inst_19636);
} else {
if((state_val_19665 === (6))){
var inst_19660 = (state_19664[(2)]);
var state_19664__$1 = state_19664;
var statearr_19671_19692 = state_19664__$1;
(statearr_19671_19692[(2)] = inst_19660);

(statearr_19671_19692[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19665 === (3))){
var inst_19662 = (state_19664[(2)]);
var state_19664__$1 = state_19664;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19664__$1,inst_19662);
} else {
if((state_val_19665 === (2))){
var inst_19636 = (state_19664[(10)]);
var inst_19638 = cljs.core.count.call(null,inst_19636);
var inst_19639 = (inst_19638 > (0));
var state_19664__$1 = state_19664;
if(cljs.core.truth_(inst_19639)){
var statearr_19673_19693 = state_19664__$1;
(statearr_19673_19693[(1)] = (4));

} else {
var statearr_19674_19694 = state_19664__$1;
(statearr_19674_19694[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19665 === (11))){
var inst_19636 = (state_19664[(10)]);
var inst_19653 = (state_19664[(2)]);
var tmp19672 = inst_19636;
var inst_19636__$1 = tmp19672;
var state_19664__$1 = (function (){var statearr_19675 = state_19664;
(statearr_19675[(11)] = inst_19653);

(statearr_19675[(10)] = inst_19636__$1);

return statearr_19675;
})();
var statearr_19676_19695 = state_19664__$1;
(statearr_19676_19695[(2)] = null);

(statearr_19676_19695[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19665 === (9))){
var inst_19644 = (state_19664[(8)]);
var state_19664__$1 = state_19664;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19664__$1,(11),out,inst_19644);
} else {
if((state_val_19665 === (5))){
var inst_19658 = cljs.core.async.close_BANG_.call(null,out);
var state_19664__$1 = state_19664;
var statearr_19677_19696 = state_19664__$1;
(statearr_19677_19696[(2)] = inst_19658);

(statearr_19677_19696[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19665 === (10))){
var inst_19656 = (state_19664[(2)]);
var state_19664__$1 = state_19664;
var statearr_19678_19697 = state_19664__$1;
(statearr_19678_19697[(2)] = inst_19656);

(statearr_19678_19697[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19665 === (8))){
var inst_19643 = (state_19664[(7)]);
var inst_19644 = (state_19664[(8)]);
var inst_19636 = (state_19664[(10)]);
var inst_19645 = (state_19664[(9)]);
var inst_19648 = (function (){var c = inst_19645;
var v = inst_19644;
var vec__19641 = inst_19643;
var cs = inst_19636;
return ((function (c,v,vec__19641,cs,inst_19643,inst_19644,inst_19636,inst_19645,state_val_19665,c__8227__auto___19688,out){
return (function (p1__19581_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__19581_SHARP_);
});
;})(c,v,vec__19641,cs,inst_19643,inst_19644,inst_19636,inst_19645,state_val_19665,c__8227__auto___19688,out))
})();
var inst_19649 = cljs.core.filterv.call(null,inst_19648,inst_19636);
var inst_19636__$1 = inst_19649;
var state_19664__$1 = (function (){var statearr_19679 = state_19664;
(statearr_19679[(10)] = inst_19636__$1);

return statearr_19679;
})();
var statearr_19680_19698 = state_19664__$1;
(statearr_19680_19698[(2)] = null);

(statearr_19680_19698[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__8227__auto___19688,out))
;
return ((function (switch__8171__auto__,c__8227__auto___19688,out){
return (function() {
var state_machine__8172__auto__ = null;
var state_machine__8172__auto____0 = (function (){
var statearr_19684 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19684[(0)] = state_machine__8172__auto__);

(statearr_19684[(1)] = (1));

return statearr_19684;
});
var state_machine__8172__auto____1 = (function (state_19664){
while(true){
var ret_value__8173__auto__ = (function (){try{while(true){
var result__8174__auto__ = switch__8171__auto__.call(null,state_19664);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8174__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8174__auto__;
}
break;
}
}catch (e19685){if((e19685 instanceof Object)){
var ex__8175__auto__ = e19685;
var statearr_19686_19699 = state_19664;
(statearr_19686_19699[(5)] = ex__8175__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19664);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19685;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8173__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19700 = state_19664;
state_19664 = G__19700;
continue;
} else {
return ret_value__8173__auto__;
}
break;
}
});
state_machine__8172__auto__ = function(state_19664){
switch(arguments.length){
case 0:
return state_machine__8172__auto____0.call(this);
case 1:
return state_machine__8172__auto____1.call(this,state_19664);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8172__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8172__auto____0;
state_machine__8172__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8172__auto____1;
return state_machine__8172__auto__;
})()
;})(switch__8171__auto__,c__8227__auto___19688,out))
})();
var state__8229__auto__ = (function (){var statearr_19687 = f__8228__auto__.call(null);
(statearr_19687[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8227__auto___19688);

return statearr_19687;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8229__auto__);
});})(c__8227__auto___19688,out))
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
cljs.core.async.into = (function into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 * The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){
return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__8227__auto___19793 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8227__auto___19793,out){
return (function (){
var f__8228__auto__ = (function (){var switch__8171__auto__ = ((function (c__8227__auto___19793,out){
return (function (state_19770){
var state_val_19771 = (state_19770[(1)]);
if((state_val_19771 === (7))){
var inst_19752 = (state_19770[(7)]);
var inst_19752__$1 = (state_19770[(2)]);
var inst_19753 = (inst_19752__$1 == null);
var inst_19754 = cljs.core.not.call(null,inst_19753);
var state_19770__$1 = (function (){var statearr_19772 = state_19770;
(statearr_19772[(7)] = inst_19752__$1);

return statearr_19772;
})();
if(inst_19754){
var statearr_19773_19794 = state_19770__$1;
(statearr_19773_19794[(1)] = (8));

} else {
var statearr_19774_19795 = state_19770__$1;
(statearr_19774_19795[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19771 === (1))){
var inst_19747 = (0);
var state_19770__$1 = (function (){var statearr_19775 = state_19770;
(statearr_19775[(8)] = inst_19747);

return statearr_19775;
})();
var statearr_19776_19796 = state_19770__$1;
(statearr_19776_19796[(2)] = null);

(statearr_19776_19796[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19771 === (4))){
var state_19770__$1 = state_19770;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19770__$1,(7),ch);
} else {
if((state_val_19771 === (6))){
var inst_19765 = (state_19770[(2)]);
var state_19770__$1 = state_19770;
var statearr_19777_19797 = state_19770__$1;
(statearr_19777_19797[(2)] = inst_19765);

(statearr_19777_19797[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19771 === (3))){
var inst_19767 = (state_19770[(2)]);
var inst_19768 = cljs.core.async.close_BANG_.call(null,out);
var state_19770__$1 = (function (){var statearr_19778 = state_19770;
(statearr_19778[(9)] = inst_19767);

return statearr_19778;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19770__$1,inst_19768);
} else {
if((state_val_19771 === (2))){
var inst_19747 = (state_19770[(8)]);
var inst_19749 = (inst_19747 < n);
var state_19770__$1 = state_19770;
if(cljs.core.truth_(inst_19749)){
var statearr_19779_19798 = state_19770__$1;
(statearr_19779_19798[(1)] = (4));

} else {
var statearr_19780_19799 = state_19770__$1;
(statearr_19780_19799[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19771 === (11))){
var inst_19747 = (state_19770[(8)]);
var inst_19757 = (state_19770[(2)]);
var inst_19758 = (inst_19747 + (1));
var inst_19747__$1 = inst_19758;
var state_19770__$1 = (function (){var statearr_19781 = state_19770;
(statearr_19781[(10)] = inst_19757);

(statearr_19781[(8)] = inst_19747__$1);

return statearr_19781;
})();
var statearr_19782_19800 = state_19770__$1;
(statearr_19782_19800[(2)] = null);

(statearr_19782_19800[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19771 === (9))){
var state_19770__$1 = state_19770;
var statearr_19783_19801 = state_19770__$1;
(statearr_19783_19801[(2)] = null);

(statearr_19783_19801[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19771 === (5))){
var state_19770__$1 = state_19770;
var statearr_19784_19802 = state_19770__$1;
(statearr_19784_19802[(2)] = null);

(statearr_19784_19802[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19771 === (10))){
var inst_19762 = (state_19770[(2)]);
var state_19770__$1 = state_19770;
var statearr_19785_19803 = state_19770__$1;
(statearr_19785_19803[(2)] = inst_19762);

(statearr_19785_19803[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19771 === (8))){
var inst_19752 = (state_19770[(7)]);
var state_19770__$1 = state_19770;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19770__$1,(11),out,inst_19752);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__8227__auto___19793,out))
;
return ((function (switch__8171__auto__,c__8227__auto___19793,out){
return (function() {
var state_machine__8172__auto__ = null;
var state_machine__8172__auto____0 = (function (){
var statearr_19789 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19789[(0)] = state_machine__8172__auto__);

(statearr_19789[(1)] = (1));

return statearr_19789;
});
var state_machine__8172__auto____1 = (function (state_19770){
while(true){
var ret_value__8173__auto__ = (function (){try{while(true){
var result__8174__auto__ = switch__8171__auto__.call(null,state_19770);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8174__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8174__auto__;
}
break;
}
}catch (e19790){if((e19790 instanceof Object)){
var ex__8175__auto__ = e19790;
var statearr_19791_19804 = state_19770;
(statearr_19791_19804[(5)] = ex__8175__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19770);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19790;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8173__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19805 = state_19770;
state_19770 = G__19805;
continue;
} else {
return ret_value__8173__auto__;
}
break;
}
});
state_machine__8172__auto__ = function(state_19770){
switch(arguments.length){
case 0:
return state_machine__8172__auto____0.call(this);
case 1:
return state_machine__8172__auto____1.call(this,state_19770);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8172__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8172__auto____0;
state_machine__8172__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8172__auto____1;
return state_machine__8172__auto__;
})()
;})(switch__8171__auto__,c__8227__auto___19793,out))
})();
var state__8229__auto__ = (function (){var statearr_19792 = f__8228__auto__.call(null);
(statearr_19792[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8227__auto___19793);

return statearr_19792;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8229__auto__);
});})(c__8227__auto___19793,out))
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){
if(typeof cljs.core.async.t19813 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t19813 = (function (ch,f,map_LT_,meta19814){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta19814 = meta19814;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19813.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t19813.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t19813.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t19813.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t19816 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t19816 = (function (fn1,_,meta19814,map_LT_,f,ch,meta19817){
this.fn1 = fn1;
this._ = _;
this.meta19814 = meta19814;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta19817 = meta19817;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19816.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t19816.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t19816.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__19806_SHARP_){
return f1.call(null,(((p1__19806_SHARP_ == null))?null:self__.f.call(null,p1__19806_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t19816.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_19818){
var self__ = this;
var _19818__$1 = this;
return self__.meta19817;
});})(___$1))
;

cljs.core.async.t19816.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_19818,meta19817__$1){
var self__ = this;
var _19818__$1 = this;
return (new cljs.core.async.t19816(self__.fn1,self__._,self__.meta19814,self__.map_LT_,self__.f,self__.ch,meta19817__$1));
});})(___$1))
;

cljs.core.async.t19816.cljs$lang$type = true;

cljs.core.async.t19816.cljs$lang$ctorStr = "cljs.core.async/t19816";

cljs.core.async.t19816.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__5784__auto__,writer__5785__auto__,opt__5786__auto__){
return cljs.core._write.call(null,writer__5785__auto__,"cljs.core.async/t19816");
});})(___$1))
;

cljs.core.async.__GT_t19816 = ((function (___$1){
return (function __GT_t19816(fn1__$1,___$2,meta19814__$1,map_LT___$1,f__$1,ch__$1,meta19817){
return (new cljs.core.async.t19816(fn1__$1,___$2,meta19814__$1,map_LT___$1,f__$1,ch__$1,meta19817));
});})(___$1))
;

}

return (new cljs.core.async.t19816(fn1,___$1,self__.meta19814,self__.map_LT_,self__.f,self__.ch,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__5185__auto__ = ret;
if(cljs.core.truth_(and__5185__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__5185__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t19813.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t19813.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t19813.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t19813.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19815){
var self__ = this;
var _19815__$1 = this;
return self__.meta19814;
});

cljs.core.async.t19813.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19815,meta19814__$1){
var self__ = this;
var _19815__$1 = this;
return (new cljs.core.async.t19813(self__.ch,self__.f,self__.map_LT_,meta19814__$1));
});

cljs.core.async.t19813.cljs$lang$type = true;

cljs.core.async.t19813.cljs$lang$ctorStr = "cljs.core.async/t19813";

cljs.core.async.t19813.cljs$lang$ctorPrWriter = (function (this__5784__auto__,writer__5785__auto__,opt__5786__auto__){
return cljs.core._write.call(null,writer__5785__auto__,"cljs.core.async/t19813");
});

cljs.core.async.__GT_t19813 = (function __GT_t19813(ch__$1,f__$1,map_LT___$1,meta19814){
return (new cljs.core.async.t19813(ch__$1,f__$1,map_LT___$1,meta19814));
});

}

return (new cljs.core.async.t19813(ch,f,map_LT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t19822 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t19822 = (function (ch,f,map_GT_,meta19823){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta19823 = meta19823;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19822.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t19822.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t19822.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t19822.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t19822.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t19822.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t19822.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19824){
var self__ = this;
var _19824__$1 = this;
return self__.meta19823;
});

cljs.core.async.t19822.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19824,meta19823__$1){
var self__ = this;
var _19824__$1 = this;
return (new cljs.core.async.t19822(self__.ch,self__.f,self__.map_GT_,meta19823__$1));
});

cljs.core.async.t19822.cljs$lang$type = true;

cljs.core.async.t19822.cljs$lang$ctorStr = "cljs.core.async/t19822";

cljs.core.async.t19822.cljs$lang$ctorPrWriter = (function (this__5784__auto__,writer__5785__auto__,opt__5786__auto__){
return cljs.core._write.call(null,writer__5785__auto__,"cljs.core.async/t19822");
});

cljs.core.async.__GT_t19822 = (function __GT_t19822(ch__$1,f__$1,map_GT___$1,meta19823){
return (new cljs.core.async.t19822(ch__$1,f__$1,map_GT___$1,meta19823));
});

}

return (new cljs.core.async.t19822(ch,f,map_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t19828 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t19828 = (function (ch,p,filter_GT_,meta19829){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta19829 = meta19829;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19828.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t19828.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t19828.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t19828.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t19828.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t19828.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t19828.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t19828.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19830){
var self__ = this;
var _19830__$1 = this;
return self__.meta19829;
});

cljs.core.async.t19828.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19830,meta19829__$1){
var self__ = this;
var _19830__$1 = this;
return (new cljs.core.async.t19828(self__.ch,self__.p,self__.filter_GT_,meta19829__$1));
});

cljs.core.async.t19828.cljs$lang$type = true;

cljs.core.async.t19828.cljs$lang$ctorStr = "cljs.core.async/t19828";

cljs.core.async.t19828.cljs$lang$ctorPrWriter = (function (this__5784__auto__,writer__5785__auto__,opt__5786__auto__){
return cljs.core._write.call(null,writer__5785__auto__,"cljs.core.async/t19828");
});

cljs.core.async.__GT_t19828 = (function __GT_t19828(ch__$1,p__$1,filter_GT___$1,meta19829){
return (new cljs.core.async.t19828(ch__$1,p__$1,filter_GT___$1,meta19829));
});

}

return (new cljs.core.async.t19828(ch,p,filter_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){
return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__8227__auto___19913 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8227__auto___19913,out){
return (function (){
var f__8228__auto__ = (function (){var switch__8171__auto__ = ((function (c__8227__auto___19913,out){
return (function (state_19892){
var state_val_19893 = (state_19892[(1)]);
if((state_val_19893 === (7))){
var inst_19888 = (state_19892[(2)]);
var state_19892__$1 = state_19892;
var statearr_19894_19914 = state_19892__$1;
(statearr_19894_19914[(2)] = inst_19888);

(statearr_19894_19914[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19893 === (1))){
var state_19892__$1 = state_19892;
var statearr_19895_19915 = state_19892__$1;
(statearr_19895_19915[(2)] = null);

(statearr_19895_19915[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19893 === (4))){
var inst_19874 = (state_19892[(7)]);
var inst_19874__$1 = (state_19892[(2)]);
var inst_19875 = (inst_19874__$1 == null);
var state_19892__$1 = (function (){var statearr_19896 = state_19892;
(statearr_19896[(7)] = inst_19874__$1);

return statearr_19896;
})();
if(cljs.core.truth_(inst_19875)){
var statearr_19897_19916 = state_19892__$1;
(statearr_19897_19916[(1)] = (5));

} else {
var statearr_19898_19917 = state_19892__$1;
(statearr_19898_19917[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19893 === (6))){
var inst_19874 = (state_19892[(7)]);
var inst_19879 = p.call(null,inst_19874);
var state_19892__$1 = state_19892;
if(cljs.core.truth_(inst_19879)){
var statearr_19899_19918 = state_19892__$1;
(statearr_19899_19918[(1)] = (8));

} else {
var statearr_19900_19919 = state_19892__$1;
(statearr_19900_19919[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19893 === (3))){
var inst_19890 = (state_19892[(2)]);
var state_19892__$1 = state_19892;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19892__$1,inst_19890);
} else {
if((state_val_19893 === (2))){
var state_19892__$1 = state_19892;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19892__$1,(4),ch);
} else {
if((state_val_19893 === (11))){
var inst_19882 = (state_19892[(2)]);
var state_19892__$1 = state_19892;
var statearr_19901_19920 = state_19892__$1;
(statearr_19901_19920[(2)] = inst_19882);

(statearr_19901_19920[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19893 === (9))){
var state_19892__$1 = state_19892;
var statearr_19902_19921 = state_19892__$1;
(statearr_19902_19921[(2)] = null);

(statearr_19902_19921[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19893 === (5))){
var inst_19877 = cljs.core.async.close_BANG_.call(null,out);
var state_19892__$1 = state_19892;
var statearr_19903_19922 = state_19892__$1;
(statearr_19903_19922[(2)] = inst_19877);

(statearr_19903_19922[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19893 === (10))){
var inst_19885 = (state_19892[(2)]);
var state_19892__$1 = (function (){var statearr_19904 = state_19892;
(statearr_19904[(8)] = inst_19885);

return statearr_19904;
})();
var statearr_19905_19923 = state_19892__$1;
(statearr_19905_19923[(2)] = null);

(statearr_19905_19923[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19893 === (8))){
var inst_19874 = (state_19892[(7)]);
var state_19892__$1 = state_19892;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19892__$1,(11),out,inst_19874);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__8227__auto___19913,out))
;
return ((function (switch__8171__auto__,c__8227__auto___19913,out){
return (function() {
var state_machine__8172__auto__ = null;
var state_machine__8172__auto____0 = (function (){
var statearr_19909 = [null,null,null,null,null,null,null,null,null];
(statearr_19909[(0)] = state_machine__8172__auto__);

(statearr_19909[(1)] = (1));

return statearr_19909;
});
var state_machine__8172__auto____1 = (function (state_19892){
while(true){
var ret_value__8173__auto__ = (function (){try{while(true){
var result__8174__auto__ = switch__8171__auto__.call(null,state_19892);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8174__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8174__auto__;
}
break;
}
}catch (e19910){if((e19910 instanceof Object)){
var ex__8175__auto__ = e19910;
var statearr_19911_19924 = state_19892;
(statearr_19911_19924[(5)] = ex__8175__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19892);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19910;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8173__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19925 = state_19892;
state_19892 = G__19925;
continue;
} else {
return ret_value__8173__auto__;
}
break;
}
});
state_machine__8172__auto__ = function(state_19892){
switch(arguments.length){
case 0:
return state_machine__8172__auto____0.call(this);
case 1:
return state_machine__8172__auto____1.call(this,state_19892);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8172__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8172__auto____0;
state_machine__8172__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8172__auto____1;
return state_machine__8172__auto__;
})()
;})(switch__8171__auto__,c__8227__auto___19913,out))
})();
var state__8229__auto__ = (function (){var statearr_19912 = f__8228__auto__.call(null);
(statearr_19912[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8227__auto___19913);

return statearr_19912;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8229__auto__);
});})(c__8227__auto___19913,out))
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
var remove_LT___2 = (function (p,ch){
return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){
var c__8227__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8227__auto__){
return (function (){
var f__8228__auto__ = (function (){var switch__8171__auto__ = ((function (c__8227__auto__){
return (function (state_20091){
var state_val_20092 = (state_20091[(1)]);
if((state_val_20092 === (7))){
var inst_20087 = (state_20091[(2)]);
var state_20091__$1 = state_20091;
var statearr_20093_20134 = state_20091__$1;
(statearr_20093_20134[(2)] = inst_20087);

(statearr_20093_20134[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20092 === (20))){
var inst_20057 = (state_20091[(7)]);
var inst_20068 = (state_20091[(2)]);
var inst_20069 = cljs.core.next.call(null,inst_20057);
var inst_20043 = inst_20069;
var inst_20044 = null;
var inst_20045 = (0);
var inst_20046 = (0);
var state_20091__$1 = (function (){var statearr_20094 = state_20091;
(statearr_20094[(8)] = inst_20044);

(statearr_20094[(9)] = inst_20068);

(statearr_20094[(10)] = inst_20046);

(statearr_20094[(11)] = inst_20045);

(statearr_20094[(12)] = inst_20043);

return statearr_20094;
})();
var statearr_20095_20135 = state_20091__$1;
(statearr_20095_20135[(2)] = null);

(statearr_20095_20135[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20092 === (1))){
var state_20091__$1 = state_20091;
var statearr_20096_20136 = state_20091__$1;
(statearr_20096_20136[(2)] = null);

(statearr_20096_20136[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20092 === (4))){
var inst_20032 = (state_20091[(13)]);
var inst_20032__$1 = (state_20091[(2)]);
var inst_20033 = (inst_20032__$1 == null);
var state_20091__$1 = (function (){var statearr_20097 = state_20091;
(statearr_20097[(13)] = inst_20032__$1);

return statearr_20097;
})();
if(cljs.core.truth_(inst_20033)){
var statearr_20098_20137 = state_20091__$1;
(statearr_20098_20137[(1)] = (5));

} else {
var statearr_20099_20138 = state_20091__$1;
(statearr_20099_20138[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20092 === (15))){
var state_20091__$1 = state_20091;
var statearr_20103_20139 = state_20091__$1;
(statearr_20103_20139[(2)] = null);

(statearr_20103_20139[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20092 === (21))){
var state_20091__$1 = state_20091;
var statearr_20104_20140 = state_20091__$1;
(statearr_20104_20140[(2)] = null);

(statearr_20104_20140[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20092 === (13))){
var inst_20044 = (state_20091[(8)]);
var inst_20046 = (state_20091[(10)]);
var inst_20045 = (state_20091[(11)]);
var inst_20043 = (state_20091[(12)]);
var inst_20053 = (state_20091[(2)]);
var inst_20054 = (inst_20046 + (1));
var tmp20100 = inst_20044;
var tmp20101 = inst_20045;
var tmp20102 = inst_20043;
var inst_20043__$1 = tmp20102;
var inst_20044__$1 = tmp20100;
var inst_20045__$1 = tmp20101;
var inst_20046__$1 = inst_20054;
var state_20091__$1 = (function (){var statearr_20105 = state_20091;
(statearr_20105[(8)] = inst_20044__$1);

(statearr_20105[(14)] = inst_20053);

(statearr_20105[(10)] = inst_20046__$1);

(statearr_20105[(11)] = inst_20045__$1);

(statearr_20105[(12)] = inst_20043__$1);

return statearr_20105;
})();
var statearr_20106_20141 = state_20091__$1;
(statearr_20106_20141[(2)] = null);

(statearr_20106_20141[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20092 === (22))){
var state_20091__$1 = state_20091;
var statearr_20107_20142 = state_20091__$1;
(statearr_20107_20142[(2)] = null);

(statearr_20107_20142[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20092 === (6))){
var inst_20032 = (state_20091[(13)]);
var inst_20041 = f.call(null,inst_20032);
var inst_20042 = cljs.core.seq.call(null,inst_20041);
var inst_20043 = inst_20042;
var inst_20044 = null;
var inst_20045 = (0);
var inst_20046 = (0);
var state_20091__$1 = (function (){var statearr_20108 = state_20091;
(statearr_20108[(8)] = inst_20044);

(statearr_20108[(10)] = inst_20046);

(statearr_20108[(11)] = inst_20045);

(statearr_20108[(12)] = inst_20043);

return statearr_20108;
})();
var statearr_20109_20143 = state_20091__$1;
(statearr_20109_20143[(2)] = null);

(statearr_20109_20143[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20092 === (17))){
var inst_20057 = (state_20091[(7)]);
var inst_20061 = cljs.core.chunk_first.call(null,inst_20057);
var inst_20062 = cljs.core.chunk_rest.call(null,inst_20057);
var inst_20063 = cljs.core.count.call(null,inst_20061);
var inst_20043 = inst_20062;
var inst_20044 = inst_20061;
var inst_20045 = inst_20063;
var inst_20046 = (0);
var state_20091__$1 = (function (){var statearr_20110 = state_20091;
(statearr_20110[(8)] = inst_20044);

(statearr_20110[(10)] = inst_20046);

(statearr_20110[(11)] = inst_20045);

(statearr_20110[(12)] = inst_20043);

return statearr_20110;
})();
var statearr_20111_20144 = state_20091__$1;
(statearr_20111_20144[(2)] = null);

(statearr_20111_20144[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20092 === (3))){
var inst_20089 = (state_20091[(2)]);
var state_20091__$1 = state_20091;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20091__$1,inst_20089);
} else {
if((state_val_20092 === (12))){
var inst_20077 = (state_20091[(2)]);
var state_20091__$1 = state_20091;
var statearr_20112_20145 = state_20091__$1;
(statearr_20112_20145[(2)] = inst_20077);

(statearr_20112_20145[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20092 === (2))){
var state_20091__$1 = state_20091;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20091__$1,(4),in$);
} else {
if((state_val_20092 === (23))){
var inst_20085 = (state_20091[(2)]);
var state_20091__$1 = state_20091;
var statearr_20113_20146 = state_20091__$1;
(statearr_20113_20146[(2)] = inst_20085);

(statearr_20113_20146[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20092 === (19))){
var inst_20072 = (state_20091[(2)]);
var state_20091__$1 = state_20091;
var statearr_20114_20147 = state_20091__$1;
(statearr_20114_20147[(2)] = inst_20072);

(statearr_20114_20147[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20092 === (11))){
var inst_20057 = (state_20091[(7)]);
var inst_20043 = (state_20091[(12)]);
var inst_20057__$1 = cljs.core.seq.call(null,inst_20043);
var state_20091__$1 = (function (){var statearr_20115 = state_20091;
(statearr_20115[(7)] = inst_20057__$1);

return statearr_20115;
})();
if(inst_20057__$1){
var statearr_20116_20148 = state_20091__$1;
(statearr_20116_20148[(1)] = (14));

} else {
var statearr_20117_20149 = state_20091__$1;
(statearr_20117_20149[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20092 === (9))){
var inst_20079 = (state_20091[(2)]);
var inst_20080 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_20091__$1 = (function (){var statearr_20118 = state_20091;
(statearr_20118[(15)] = inst_20079);

return statearr_20118;
})();
if(cljs.core.truth_(inst_20080)){
var statearr_20119_20150 = state_20091__$1;
(statearr_20119_20150[(1)] = (21));

} else {
var statearr_20120_20151 = state_20091__$1;
(statearr_20120_20151[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20092 === (5))){
var inst_20035 = cljs.core.async.close_BANG_.call(null,out);
var state_20091__$1 = state_20091;
var statearr_20121_20152 = state_20091__$1;
(statearr_20121_20152[(2)] = inst_20035);

(statearr_20121_20152[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20092 === (14))){
var inst_20057 = (state_20091[(7)]);
var inst_20059 = cljs.core.chunked_seq_QMARK_.call(null,inst_20057);
var state_20091__$1 = state_20091;
if(inst_20059){
var statearr_20122_20153 = state_20091__$1;
(statearr_20122_20153[(1)] = (17));

} else {
var statearr_20123_20154 = state_20091__$1;
(statearr_20123_20154[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20092 === (16))){
var inst_20075 = (state_20091[(2)]);
var state_20091__$1 = state_20091;
var statearr_20124_20155 = state_20091__$1;
(statearr_20124_20155[(2)] = inst_20075);

(statearr_20124_20155[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20092 === (10))){
var inst_20044 = (state_20091[(8)]);
var inst_20046 = (state_20091[(10)]);
var inst_20051 = cljs.core._nth.call(null,inst_20044,inst_20046);
var state_20091__$1 = state_20091;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20091__$1,(13),out,inst_20051);
} else {
if((state_val_20092 === (18))){
var inst_20057 = (state_20091[(7)]);
var inst_20066 = cljs.core.first.call(null,inst_20057);
var state_20091__$1 = state_20091;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20091__$1,(20),out,inst_20066);
} else {
if((state_val_20092 === (8))){
var inst_20046 = (state_20091[(10)]);
var inst_20045 = (state_20091[(11)]);
var inst_20048 = (inst_20046 < inst_20045);
var inst_20049 = inst_20048;
var state_20091__$1 = state_20091;
if(cljs.core.truth_(inst_20049)){
var statearr_20125_20156 = state_20091__$1;
(statearr_20125_20156[(1)] = (10));

} else {
var statearr_20126_20157 = state_20091__$1;
(statearr_20126_20157[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__8227__auto__))
;
return ((function (switch__8171__auto__,c__8227__auto__){
return (function() {
var state_machine__8172__auto__ = null;
var state_machine__8172__auto____0 = (function (){
var statearr_20130 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20130[(0)] = state_machine__8172__auto__);

(statearr_20130[(1)] = (1));

return statearr_20130;
});
var state_machine__8172__auto____1 = (function (state_20091){
while(true){
var ret_value__8173__auto__ = (function (){try{while(true){
var result__8174__auto__ = switch__8171__auto__.call(null,state_20091);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8174__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8174__auto__;
}
break;
}
}catch (e20131){if((e20131 instanceof Object)){
var ex__8175__auto__ = e20131;
var statearr_20132_20158 = state_20091;
(statearr_20132_20158[(5)] = ex__8175__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20091);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20131;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8173__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20159 = state_20091;
state_20091 = G__20159;
continue;
} else {
return ret_value__8173__auto__;
}
break;
}
});
state_machine__8172__auto__ = function(state_20091){
switch(arguments.length){
case 0:
return state_machine__8172__auto____0.call(this);
case 1:
return state_machine__8172__auto____1.call(this,state_20091);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8172__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8172__auto____0;
state_machine__8172__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8172__auto____1;
return state_machine__8172__auto__;
})()
;})(switch__8171__auto__,c__8227__auto__))
})();
var state__8229__auto__ = (function (){var statearr_20133 = f__8228__auto__.call(null);
(statearr_20133[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8227__auto__);

return statearr_20133;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8229__auto__);
});})(c__8227__auto__))
);

return c__8227__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){
return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

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
var mapcat_GT___2 = (function (f,out){
return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

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
var unique__1 = (function (ch){
return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__8227__auto___20256 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8227__auto___20256,out){
return (function (){
var f__8228__auto__ = (function (){var switch__8171__auto__ = ((function (c__8227__auto___20256,out){
return (function (state_20231){
var state_val_20232 = (state_20231[(1)]);
if((state_val_20232 === (7))){
var inst_20226 = (state_20231[(2)]);
var state_20231__$1 = state_20231;
var statearr_20233_20257 = state_20231__$1;
(statearr_20233_20257[(2)] = inst_20226);

(statearr_20233_20257[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20232 === (1))){
var inst_20208 = null;
var state_20231__$1 = (function (){var statearr_20234 = state_20231;
(statearr_20234[(7)] = inst_20208);

return statearr_20234;
})();
var statearr_20235_20258 = state_20231__$1;
(statearr_20235_20258[(2)] = null);

(statearr_20235_20258[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20232 === (4))){
var inst_20211 = (state_20231[(8)]);
var inst_20211__$1 = (state_20231[(2)]);
var inst_20212 = (inst_20211__$1 == null);
var inst_20213 = cljs.core.not.call(null,inst_20212);
var state_20231__$1 = (function (){var statearr_20236 = state_20231;
(statearr_20236[(8)] = inst_20211__$1);

return statearr_20236;
})();
if(inst_20213){
var statearr_20237_20259 = state_20231__$1;
(statearr_20237_20259[(1)] = (5));

} else {
var statearr_20238_20260 = state_20231__$1;
(statearr_20238_20260[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20232 === (6))){
var state_20231__$1 = state_20231;
var statearr_20239_20261 = state_20231__$1;
(statearr_20239_20261[(2)] = null);

(statearr_20239_20261[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20232 === (3))){
var inst_20228 = (state_20231[(2)]);
var inst_20229 = cljs.core.async.close_BANG_.call(null,out);
var state_20231__$1 = (function (){var statearr_20240 = state_20231;
(statearr_20240[(9)] = inst_20228);

return statearr_20240;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20231__$1,inst_20229);
} else {
if((state_val_20232 === (2))){
var state_20231__$1 = state_20231;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20231__$1,(4),ch);
} else {
if((state_val_20232 === (11))){
var inst_20211 = (state_20231[(8)]);
var inst_20220 = (state_20231[(2)]);
var inst_20208 = inst_20211;
var state_20231__$1 = (function (){var statearr_20241 = state_20231;
(statearr_20241[(10)] = inst_20220);

(statearr_20241[(7)] = inst_20208);

return statearr_20241;
})();
var statearr_20242_20262 = state_20231__$1;
(statearr_20242_20262[(2)] = null);

(statearr_20242_20262[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20232 === (9))){
var inst_20211 = (state_20231[(8)]);
var state_20231__$1 = state_20231;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20231__$1,(11),out,inst_20211);
} else {
if((state_val_20232 === (5))){
var inst_20208 = (state_20231[(7)]);
var inst_20211 = (state_20231[(8)]);
var inst_20215 = cljs.core._EQ_.call(null,inst_20211,inst_20208);
var state_20231__$1 = state_20231;
if(inst_20215){
var statearr_20244_20263 = state_20231__$1;
(statearr_20244_20263[(1)] = (8));

} else {
var statearr_20245_20264 = state_20231__$1;
(statearr_20245_20264[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20232 === (10))){
var inst_20223 = (state_20231[(2)]);
var state_20231__$1 = state_20231;
var statearr_20246_20265 = state_20231__$1;
(statearr_20246_20265[(2)] = inst_20223);

(statearr_20246_20265[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20232 === (8))){
var inst_20208 = (state_20231[(7)]);
var tmp20243 = inst_20208;
var inst_20208__$1 = tmp20243;
var state_20231__$1 = (function (){var statearr_20247 = state_20231;
(statearr_20247[(7)] = inst_20208__$1);

return statearr_20247;
})();
var statearr_20248_20266 = state_20231__$1;
(statearr_20248_20266[(2)] = null);

(statearr_20248_20266[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__8227__auto___20256,out))
;
return ((function (switch__8171__auto__,c__8227__auto___20256,out){
return (function() {
var state_machine__8172__auto__ = null;
var state_machine__8172__auto____0 = (function (){
var statearr_20252 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20252[(0)] = state_machine__8172__auto__);

(statearr_20252[(1)] = (1));

return statearr_20252;
});
var state_machine__8172__auto____1 = (function (state_20231){
while(true){
var ret_value__8173__auto__ = (function (){try{while(true){
var result__8174__auto__ = switch__8171__auto__.call(null,state_20231);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8174__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8174__auto__;
}
break;
}
}catch (e20253){if((e20253 instanceof Object)){
var ex__8175__auto__ = e20253;
var statearr_20254_20267 = state_20231;
(statearr_20254_20267[(5)] = ex__8175__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20231);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20253;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8173__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20268 = state_20231;
state_20231 = G__20268;
continue;
} else {
return ret_value__8173__auto__;
}
break;
}
});
state_machine__8172__auto__ = function(state_20231){
switch(arguments.length){
case 0:
return state_machine__8172__auto____0.call(this);
case 1:
return state_machine__8172__auto____1.call(this,state_20231);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8172__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8172__auto____0;
state_machine__8172__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8172__auto____1;
return state_machine__8172__auto__;
})()
;})(switch__8171__auto__,c__8227__auto___20256,out))
})();
var state__8229__auto__ = (function (){var statearr_20255 = f__8228__auto__.call(null);
(statearr_20255[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8227__auto___20256);

return statearr_20255;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8229__auto__);
});})(c__8227__auto___20256,out))
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
var partition__2 = (function (n,ch){
return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__8227__auto___20403 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8227__auto___20403,out){
return (function (){
var f__8228__auto__ = (function (){var switch__8171__auto__ = ((function (c__8227__auto___20403,out){
return (function (state_20373){
var state_val_20374 = (state_20373[(1)]);
if((state_val_20374 === (7))){
var inst_20369 = (state_20373[(2)]);
var state_20373__$1 = state_20373;
var statearr_20375_20404 = state_20373__$1;
(statearr_20375_20404[(2)] = inst_20369);

(statearr_20375_20404[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20374 === (1))){
var inst_20336 = (new Array(n));
var inst_20337 = inst_20336;
var inst_20338 = (0);
var state_20373__$1 = (function (){var statearr_20376 = state_20373;
(statearr_20376[(7)] = inst_20338);

(statearr_20376[(8)] = inst_20337);

return statearr_20376;
})();
var statearr_20377_20405 = state_20373__$1;
(statearr_20377_20405[(2)] = null);

(statearr_20377_20405[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20374 === (4))){
var inst_20341 = (state_20373[(9)]);
var inst_20341__$1 = (state_20373[(2)]);
var inst_20342 = (inst_20341__$1 == null);
var inst_20343 = cljs.core.not.call(null,inst_20342);
var state_20373__$1 = (function (){var statearr_20378 = state_20373;
(statearr_20378[(9)] = inst_20341__$1);

return statearr_20378;
})();
if(inst_20343){
var statearr_20379_20406 = state_20373__$1;
(statearr_20379_20406[(1)] = (5));

} else {
var statearr_20380_20407 = state_20373__$1;
(statearr_20380_20407[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20374 === (15))){
var inst_20363 = (state_20373[(2)]);
var state_20373__$1 = state_20373;
var statearr_20381_20408 = state_20373__$1;
(statearr_20381_20408[(2)] = inst_20363);

(statearr_20381_20408[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20374 === (13))){
var state_20373__$1 = state_20373;
var statearr_20382_20409 = state_20373__$1;
(statearr_20382_20409[(2)] = null);

(statearr_20382_20409[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20374 === (6))){
var inst_20338 = (state_20373[(7)]);
var inst_20359 = (inst_20338 > (0));
var state_20373__$1 = state_20373;
if(cljs.core.truth_(inst_20359)){
var statearr_20383_20410 = state_20373__$1;
(statearr_20383_20410[(1)] = (12));

} else {
var statearr_20384_20411 = state_20373__$1;
(statearr_20384_20411[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20374 === (3))){
var inst_20371 = (state_20373[(2)]);
var state_20373__$1 = state_20373;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20373__$1,inst_20371);
} else {
if((state_val_20374 === (12))){
var inst_20337 = (state_20373[(8)]);
var inst_20361 = cljs.core.vec.call(null,inst_20337);
var state_20373__$1 = state_20373;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20373__$1,(15),out,inst_20361);
} else {
if((state_val_20374 === (2))){
var state_20373__$1 = state_20373;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20373__$1,(4),ch);
} else {
if((state_val_20374 === (11))){
var inst_20353 = (state_20373[(2)]);
var inst_20354 = (new Array(n));
var inst_20337 = inst_20354;
var inst_20338 = (0);
var state_20373__$1 = (function (){var statearr_20385 = state_20373;
(statearr_20385[(7)] = inst_20338);

(statearr_20385[(10)] = inst_20353);

(statearr_20385[(8)] = inst_20337);

return statearr_20385;
})();
var statearr_20386_20412 = state_20373__$1;
(statearr_20386_20412[(2)] = null);

(statearr_20386_20412[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20374 === (9))){
var inst_20337 = (state_20373[(8)]);
var inst_20351 = cljs.core.vec.call(null,inst_20337);
var state_20373__$1 = state_20373;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20373__$1,(11),out,inst_20351);
} else {
if((state_val_20374 === (5))){
var inst_20338 = (state_20373[(7)]);
var inst_20341 = (state_20373[(9)]);
var inst_20346 = (state_20373[(11)]);
var inst_20337 = (state_20373[(8)]);
var inst_20345 = (inst_20337[inst_20338] = inst_20341);
var inst_20346__$1 = (inst_20338 + (1));
var inst_20347 = (inst_20346__$1 < n);
var state_20373__$1 = (function (){var statearr_20387 = state_20373;
(statearr_20387[(12)] = inst_20345);

(statearr_20387[(11)] = inst_20346__$1);

return statearr_20387;
})();
if(cljs.core.truth_(inst_20347)){
var statearr_20388_20413 = state_20373__$1;
(statearr_20388_20413[(1)] = (8));

} else {
var statearr_20389_20414 = state_20373__$1;
(statearr_20389_20414[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20374 === (14))){
var inst_20366 = (state_20373[(2)]);
var inst_20367 = cljs.core.async.close_BANG_.call(null,out);
var state_20373__$1 = (function (){var statearr_20391 = state_20373;
(statearr_20391[(13)] = inst_20366);

return statearr_20391;
})();
var statearr_20392_20415 = state_20373__$1;
(statearr_20392_20415[(2)] = inst_20367);

(statearr_20392_20415[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20374 === (10))){
var inst_20357 = (state_20373[(2)]);
var state_20373__$1 = state_20373;
var statearr_20393_20416 = state_20373__$1;
(statearr_20393_20416[(2)] = inst_20357);

(statearr_20393_20416[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20374 === (8))){
var inst_20346 = (state_20373[(11)]);
var inst_20337 = (state_20373[(8)]);
var tmp20390 = inst_20337;
var inst_20337__$1 = tmp20390;
var inst_20338 = inst_20346;
var state_20373__$1 = (function (){var statearr_20394 = state_20373;
(statearr_20394[(7)] = inst_20338);

(statearr_20394[(8)] = inst_20337__$1);

return statearr_20394;
})();
var statearr_20395_20417 = state_20373__$1;
(statearr_20395_20417[(2)] = null);

(statearr_20395_20417[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__8227__auto___20403,out))
;
return ((function (switch__8171__auto__,c__8227__auto___20403,out){
return (function() {
var state_machine__8172__auto__ = null;
var state_machine__8172__auto____0 = (function (){
var statearr_20399 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20399[(0)] = state_machine__8172__auto__);

(statearr_20399[(1)] = (1));

return statearr_20399;
});
var state_machine__8172__auto____1 = (function (state_20373){
while(true){
var ret_value__8173__auto__ = (function (){try{while(true){
var result__8174__auto__ = switch__8171__auto__.call(null,state_20373);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8174__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8174__auto__;
}
break;
}
}catch (e20400){if((e20400 instanceof Object)){
var ex__8175__auto__ = e20400;
var statearr_20401_20418 = state_20373;
(statearr_20401_20418[(5)] = ex__8175__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20373);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20400;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8173__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20419 = state_20373;
state_20373 = G__20419;
continue;
} else {
return ret_value__8173__auto__;
}
break;
}
});
state_machine__8172__auto__ = function(state_20373){
switch(arguments.length){
case 0:
return state_machine__8172__auto____0.call(this);
case 1:
return state_machine__8172__auto____1.call(this,state_20373);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8172__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8172__auto____0;
state_machine__8172__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8172__auto____1;
return state_machine__8172__auto__;
})()
;})(switch__8171__auto__,c__8227__auto___20403,out))
})();
var state__8229__auto__ = (function (){var statearr_20402 = f__8228__auto__.call(null);
(statearr_20402[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8227__auto___20403);

return statearr_20402;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8229__auto__);
});})(c__8227__auto___20403,out))
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
var partition_by__2 = (function (f,ch){
return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__8227__auto___20562 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8227__auto___20562,out){
return (function (){
var f__8228__auto__ = (function (){var switch__8171__auto__ = ((function (c__8227__auto___20562,out){
return (function (state_20532){
var state_val_20533 = (state_20532[(1)]);
if((state_val_20533 === (7))){
var inst_20528 = (state_20532[(2)]);
var state_20532__$1 = state_20532;
var statearr_20534_20563 = state_20532__$1;
(statearr_20534_20563[(2)] = inst_20528);

(statearr_20534_20563[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20533 === (1))){
var inst_20491 = [];
var inst_20492 = inst_20491;
var inst_20493 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_20532__$1 = (function (){var statearr_20535 = state_20532;
(statearr_20535[(7)] = inst_20492);

(statearr_20535[(8)] = inst_20493);

return statearr_20535;
})();
var statearr_20536_20564 = state_20532__$1;
(statearr_20536_20564[(2)] = null);

(statearr_20536_20564[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20533 === (4))){
var inst_20496 = (state_20532[(9)]);
var inst_20496__$1 = (state_20532[(2)]);
var inst_20497 = (inst_20496__$1 == null);
var inst_20498 = cljs.core.not.call(null,inst_20497);
var state_20532__$1 = (function (){var statearr_20537 = state_20532;
(statearr_20537[(9)] = inst_20496__$1);

return statearr_20537;
})();
if(inst_20498){
var statearr_20538_20565 = state_20532__$1;
(statearr_20538_20565[(1)] = (5));

} else {
var statearr_20539_20566 = state_20532__$1;
(statearr_20539_20566[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20533 === (15))){
var inst_20522 = (state_20532[(2)]);
var state_20532__$1 = state_20532;
var statearr_20540_20567 = state_20532__$1;
(statearr_20540_20567[(2)] = inst_20522);

(statearr_20540_20567[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20533 === (13))){
var state_20532__$1 = state_20532;
var statearr_20541_20568 = state_20532__$1;
(statearr_20541_20568[(2)] = null);

(statearr_20541_20568[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20533 === (6))){
var inst_20492 = (state_20532[(7)]);
var inst_20517 = inst_20492.length;
var inst_20518 = (inst_20517 > (0));
var state_20532__$1 = state_20532;
if(cljs.core.truth_(inst_20518)){
var statearr_20542_20569 = state_20532__$1;
(statearr_20542_20569[(1)] = (12));

} else {
var statearr_20543_20570 = state_20532__$1;
(statearr_20543_20570[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20533 === (3))){
var inst_20530 = (state_20532[(2)]);
var state_20532__$1 = state_20532;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20532__$1,inst_20530);
} else {
if((state_val_20533 === (12))){
var inst_20492 = (state_20532[(7)]);
var inst_20520 = cljs.core.vec.call(null,inst_20492);
var state_20532__$1 = state_20532;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20532__$1,(15),out,inst_20520);
} else {
if((state_val_20533 === (2))){
var state_20532__$1 = state_20532;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20532__$1,(4),ch);
} else {
if((state_val_20533 === (11))){
var inst_20496 = (state_20532[(9)]);
var inst_20500 = (state_20532[(10)]);
var inst_20510 = (state_20532[(2)]);
var inst_20511 = [];
var inst_20512 = inst_20511.push(inst_20496);
var inst_20492 = inst_20511;
var inst_20493 = inst_20500;
var state_20532__$1 = (function (){var statearr_20544 = state_20532;
(statearr_20544[(7)] = inst_20492);

(statearr_20544[(11)] = inst_20510);

(statearr_20544[(12)] = inst_20512);

(statearr_20544[(8)] = inst_20493);

return statearr_20544;
})();
var statearr_20545_20571 = state_20532__$1;
(statearr_20545_20571[(2)] = null);

(statearr_20545_20571[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20533 === (9))){
var inst_20492 = (state_20532[(7)]);
var inst_20508 = cljs.core.vec.call(null,inst_20492);
var state_20532__$1 = state_20532;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20532__$1,(11),out,inst_20508);
} else {
if((state_val_20533 === (5))){
var inst_20496 = (state_20532[(9)]);
var inst_20500 = (state_20532[(10)]);
var inst_20493 = (state_20532[(8)]);
var inst_20500__$1 = f.call(null,inst_20496);
var inst_20501 = cljs.core._EQ_.call(null,inst_20500__$1,inst_20493);
var inst_20502 = cljs.core.keyword_identical_QMARK_.call(null,inst_20493,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_20503 = (inst_20501) || (inst_20502);
var state_20532__$1 = (function (){var statearr_20546 = state_20532;
(statearr_20546[(10)] = inst_20500__$1);

return statearr_20546;
})();
if(cljs.core.truth_(inst_20503)){
var statearr_20547_20572 = state_20532__$1;
(statearr_20547_20572[(1)] = (8));

} else {
var statearr_20548_20573 = state_20532__$1;
(statearr_20548_20573[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20533 === (14))){
var inst_20525 = (state_20532[(2)]);
var inst_20526 = cljs.core.async.close_BANG_.call(null,out);
var state_20532__$1 = (function (){var statearr_20550 = state_20532;
(statearr_20550[(13)] = inst_20525);

return statearr_20550;
})();
var statearr_20551_20574 = state_20532__$1;
(statearr_20551_20574[(2)] = inst_20526);

(statearr_20551_20574[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20533 === (10))){
var inst_20515 = (state_20532[(2)]);
var state_20532__$1 = state_20532;
var statearr_20552_20575 = state_20532__$1;
(statearr_20552_20575[(2)] = inst_20515);

(statearr_20552_20575[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20533 === (8))){
var inst_20492 = (state_20532[(7)]);
var inst_20496 = (state_20532[(9)]);
var inst_20500 = (state_20532[(10)]);
var inst_20505 = inst_20492.push(inst_20496);
var tmp20549 = inst_20492;
var inst_20492__$1 = tmp20549;
var inst_20493 = inst_20500;
var state_20532__$1 = (function (){var statearr_20553 = state_20532;
(statearr_20553[(7)] = inst_20492__$1);

(statearr_20553[(14)] = inst_20505);

(statearr_20553[(8)] = inst_20493);

return statearr_20553;
})();
var statearr_20554_20576 = state_20532__$1;
(statearr_20554_20576[(2)] = null);

(statearr_20554_20576[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__8227__auto___20562,out))
;
return ((function (switch__8171__auto__,c__8227__auto___20562,out){
return (function() {
var state_machine__8172__auto__ = null;
var state_machine__8172__auto____0 = (function (){
var statearr_20558 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20558[(0)] = state_machine__8172__auto__);

(statearr_20558[(1)] = (1));

return statearr_20558;
});
var state_machine__8172__auto____1 = (function (state_20532){
while(true){
var ret_value__8173__auto__ = (function (){try{while(true){
var result__8174__auto__ = switch__8171__auto__.call(null,state_20532);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8174__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8174__auto__;
}
break;
}
}catch (e20559){if((e20559 instanceof Object)){
var ex__8175__auto__ = e20559;
var statearr_20560_20577 = state_20532;
(statearr_20560_20577[(5)] = ex__8175__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20532);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20559;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8173__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20578 = state_20532;
state_20532 = G__20578;
continue;
} else {
return ret_value__8173__auto__;
}
break;
}
});
state_machine__8172__auto__ = function(state_20532){
switch(arguments.length){
case 0:
return state_machine__8172__auto____0.call(this);
case 1:
return state_machine__8172__auto____1.call(this,state_20532);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8172__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8172__auto____0;
state_machine__8172__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8172__auto____1;
return state_machine__8172__auto__;
})()
;})(switch__8171__auto__,c__8227__auto___20562,out))
})();
var state__8229__auto__ = (function (){var statearr_20561 = f__8228__auto__.call(null);
(statearr_20561[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8227__auto___20562);

return statearr_20561;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8229__auto__);
});})(c__8227__auto___20562,out))
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