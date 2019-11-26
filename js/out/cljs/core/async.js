// Compiled by ClojureScript 1.10.597 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__28010 = arguments.length;
switch (G__28010) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28011 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28011 = (function (f,blockable,meta28012){
this.f = f;
this.blockable = blockable;
this.meta28012 = meta28012;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28011.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28013,meta28012__$1){
var self__ = this;
var _28013__$1 = this;
return (new cljs.core.async.t_cljs$core$async28011(self__.f,self__.blockable,meta28012__$1));
}));

(cljs.core.async.t_cljs$core$async28011.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28013){
var self__ = this;
var _28013__$1 = this;
return self__.meta28012;
}));

(cljs.core.async.t_cljs$core$async28011.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28011.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async28011.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async28011.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async28011.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta28012","meta28012",1705671316,null)], null);
}));

(cljs.core.async.t_cljs$core$async28011.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28011.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28011");

(cljs.core.async.t_cljs$core$async28011.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.core.async/t_cljs$core$async28011");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28011.
 */
cljs.core.async.__GT_t_cljs$core$async28011 = (function cljs$core$async$__GT_t_cljs$core$async28011(f__$1,blockable__$1,meta28012){
return (new cljs.core.async.t_cljs$core$async28011(f__$1,blockable__$1,meta28012));
});

}

return (new cljs.core.async.t_cljs$core$async28011(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__28017 = arguments.length;
switch (G__28017) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__28020 = arguments.length;
switch (G__28020) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__28023 = arguments.length;
switch (G__28023) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_28025 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_28025);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,val_28025);
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__28027 = arguments.length;
switch (G__28027) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,ret);
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4666__auto___28030 = n;
var x_28031 = (0);
while(true){
if((x_28031 < n__4666__auto___28030)){
(a[x_28031] = (0));

var G__28032 = (x_28031 + (1));
x_28031 = G__28032;
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

var G__28033 = (i + (1));
i = G__28033;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28034 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28034 = (function (flag,meta28035){
this.flag = flag;
this.meta28035 = meta28035;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28034.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28036,meta28035__$1){
var self__ = this;
var _28036__$1 = this;
return (new cljs.core.async.t_cljs$core$async28034(self__.flag,meta28035__$1));
}));

(cljs.core.async.t_cljs$core$async28034.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28036){
var self__ = this;
var _28036__$1 = this;
return self__.meta28035;
}));

(cljs.core.async.t_cljs$core$async28034.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28034.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async28034.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async28034.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async28034.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta28035","meta28035",-555848871,null)], null);
}));

(cljs.core.async.t_cljs$core$async28034.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28034.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28034");

(cljs.core.async.t_cljs$core$async28034.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.core.async/t_cljs$core$async28034");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28034.
 */
cljs.core.async.__GT_t_cljs$core$async28034 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async28034(flag__$1,meta28035){
return (new cljs.core.async.t_cljs$core$async28034(flag__$1,meta28035));
});

}

return (new cljs.core.async.t_cljs$core$async28034(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28037 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28037 = (function (flag,cb,meta28038){
this.flag = flag;
this.cb = cb;
this.meta28038 = meta28038;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28037.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28039,meta28038__$1){
var self__ = this;
var _28039__$1 = this;
return (new cljs.core.async.t_cljs$core$async28037(self__.flag,self__.cb,meta28038__$1));
}));

(cljs.core.async.t_cljs$core$async28037.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28039){
var self__ = this;
var _28039__$1 = this;
return self__.meta28038;
}));

(cljs.core.async.t_cljs$core$async28037.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28037.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async28037.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async28037.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async28037.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta28038","meta28038",-1130692895,null)], null);
}));

(cljs.core.async.t_cljs$core$async28037.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28037.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28037");

(cljs.core.async.t_cljs$core$async28037.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.core.async/t_cljs$core$async28037");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28037.
 */
cljs.core.async.__GT_t_cljs$core$async28037 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async28037(flag__$1,cb__$1,meta28038){
return (new cljs.core.async.t_cljs$core$async28037(flag__$1,cb__$1,meta28038));
});

}

return (new cljs.core.async.t_cljs$core$async28037(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
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
return (function (p1__28040_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28040_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28041_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28041_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4185__auto__ = wport;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return port;
}
})()], null));
} else {
var G__28042 = (i + (1));
i = G__28042;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4185__auto__ = ret;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4174__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4174__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
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
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___28048 = arguments.length;
var i__4790__auto___28049 = (0);
while(true){
if((i__4790__auto___28049 < len__4789__auto___28048)){
args__4795__auto__.push((arguments[i__4790__auto___28049]));

var G__28050 = (i__4790__auto___28049 + (1));
i__4790__auto___28049 = G__28050;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__28045){
var map__28046 = p__28045;
var map__28046__$1 = (((((!((map__28046 == null))))?(((((map__28046.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28046.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28046):map__28046);
var opts = map__28046__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq28043){
var G__28044 = cljs.core.first.call(null,seq28043);
var seq28043__$1 = cljs.core.next.call(null,seq28043);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28044,seq28043__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__28052 = arguments.length;
switch (G__28052) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__27950__auto___28098 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27951__auto__ = (function (){var switch__27855__auto__ = (function (state_28076){
var state_val_28077 = (state_28076[(1)]);
if((state_val_28077 === (7))){
var inst_28072 = (state_28076[(2)]);
var state_28076__$1 = state_28076;
var statearr_28078_28099 = state_28076__$1;
(statearr_28078_28099[(2)] = inst_28072);

(statearr_28078_28099[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28077 === (1))){
var state_28076__$1 = state_28076;
var statearr_28079_28100 = state_28076__$1;
(statearr_28079_28100[(2)] = null);

(statearr_28079_28100[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28077 === (4))){
var inst_28055 = (state_28076[(7)]);
var inst_28055__$1 = (state_28076[(2)]);
var inst_28056 = (inst_28055__$1 == null);
var state_28076__$1 = (function (){var statearr_28080 = state_28076;
(statearr_28080[(7)] = inst_28055__$1);

return statearr_28080;
})();
if(cljs.core.truth_(inst_28056)){
var statearr_28081_28101 = state_28076__$1;
(statearr_28081_28101[(1)] = (5));

} else {
var statearr_28082_28102 = state_28076__$1;
(statearr_28082_28102[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28077 === (13))){
var state_28076__$1 = state_28076;
var statearr_28083_28103 = state_28076__$1;
(statearr_28083_28103[(2)] = null);

(statearr_28083_28103[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28077 === (6))){
var inst_28055 = (state_28076[(7)]);
var state_28076__$1 = state_28076;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28076__$1,(11),to,inst_28055);
} else {
if((state_val_28077 === (3))){
var inst_28074 = (state_28076[(2)]);
var state_28076__$1 = state_28076;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28076__$1,inst_28074);
} else {
if((state_val_28077 === (12))){
var state_28076__$1 = state_28076;
var statearr_28084_28104 = state_28076__$1;
(statearr_28084_28104[(2)] = null);

(statearr_28084_28104[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28077 === (2))){
var state_28076__$1 = state_28076;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28076__$1,(4),from);
} else {
if((state_val_28077 === (11))){
var inst_28065 = (state_28076[(2)]);
var state_28076__$1 = state_28076;
if(cljs.core.truth_(inst_28065)){
var statearr_28085_28105 = state_28076__$1;
(statearr_28085_28105[(1)] = (12));

} else {
var statearr_28086_28106 = state_28076__$1;
(statearr_28086_28106[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28077 === (9))){
var state_28076__$1 = state_28076;
var statearr_28087_28107 = state_28076__$1;
(statearr_28087_28107[(2)] = null);

(statearr_28087_28107[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28077 === (5))){
var state_28076__$1 = state_28076;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28088_28108 = state_28076__$1;
(statearr_28088_28108[(1)] = (8));

} else {
var statearr_28089_28109 = state_28076__$1;
(statearr_28089_28109[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28077 === (14))){
var inst_28070 = (state_28076[(2)]);
var state_28076__$1 = state_28076;
var statearr_28090_28110 = state_28076__$1;
(statearr_28090_28110[(2)] = inst_28070);

(statearr_28090_28110[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28077 === (10))){
var inst_28062 = (state_28076[(2)]);
var state_28076__$1 = state_28076;
var statearr_28091_28111 = state_28076__$1;
(statearr_28091_28111[(2)] = inst_28062);

(statearr_28091_28111[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28077 === (8))){
var inst_28059 = cljs.core.async.close_BANG_.call(null,to);
var state_28076__$1 = state_28076;
var statearr_28092_28112 = state_28076__$1;
(statearr_28092_28112[(2)] = inst_28059);

(statearr_28092_28112[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__27856__auto__ = null;
var cljs$core$async$state_machine__27856__auto____0 = (function (){
var statearr_28093 = [null,null,null,null,null,null,null,null];
(statearr_28093[(0)] = cljs$core$async$state_machine__27856__auto__);

(statearr_28093[(1)] = (1));

return statearr_28093;
});
var cljs$core$async$state_machine__27856__auto____1 = (function (state_28076){
while(true){
var ret_value__27857__auto__ = (function (){try{while(true){
var result__27858__auto__ = switch__27855__auto__.call(null,state_28076);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27858__auto__;
}
break;
}
}catch (e28094){if((e28094 instanceof Object)){
var ex__27859__auto__ = e28094;
var statearr_28095_28113 = state_28076;
(statearr_28095_28113[(5)] = ex__27859__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28076);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28094;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28114 = state_28076;
state_28076 = G__28114;
continue;
} else {
return ret_value__27857__auto__;
}
break;
}
});
cljs$core$async$state_machine__27856__auto__ = function(state_28076){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27856__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27856__auto____1.call(this,state_28076);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27856__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27856__auto____0;
cljs$core$async$state_machine__27856__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27856__auto____1;
return cljs$core$async$state_machine__27856__auto__;
})()
})();
var state__27952__auto__ = (function (){var statearr_28096 = f__27951__auto__.call(null);
(statearr_28096[(6)] = c__27950__auto___28098);

return statearr_28096;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27952__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = (function (p__28115){
var vec__28116 = p__28115;
var v = cljs.core.nth.call(null,vec__28116,(0),null);
var p = cljs.core.nth.call(null,vec__28116,(1),null);
var job = vec__28116;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__27950__auto___28287 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27951__auto__ = (function (){var switch__27855__auto__ = (function (state_28123){
var state_val_28124 = (state_28123[(1)]);
if((state_val_28124 === (1))){
var state_28123__$1 = state_28123;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28123__$1,(2),res,v);
} else {
if((state_val_28124 === (2))){
var inst_28120 = (state_28123[(2)]);
var inst_28121 = cljs.core.async.close_BANG_.call(null,res);
var state_28123__$1 = (function (){var statearr_28125 = state_28123;
(statearr_28125[(7)] = inst_28120);

return statearr_28125;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28123__$1,inst_28121);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27856__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27856__auto____0 = (function (){
var statearr_28126 = [null,null,null,null,null,null,null,null];
(statearr_28126[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27856__auto__);

(statearr_28126[(1)] = (1));

return statearr_28126;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27856__auto____1 = (function (state_28123){
while(true){
var ret_value__27857__auto__ = (function (){try{while(true){
var result__27858__auto__ = switch__27855__auto__.call(null,state_28123);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27858__auto__;
}
break;
}
}catch (e28127){if((e28127 instanceof Object)){
var ex__27859__auto__ = e28127;
var statearr_28128_28288 = state_28123;
(statearr_28128_28288[(5)] = ex__27859__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28123);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28127;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28289 = state_28123;
state_28123 = G__28289;
continue;
} else {
return ret_value__27857__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27856__auto__ = function(state_28123){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27856__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27856__auto____1.call(this,state_28123);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27856__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27856__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27856__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27856__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27856__auto__;
})()
})();
var state__27952__auto__ = (function (){var statearr_28129 = f__27951__auto__.call(null);
(statearr_28129[(6)] = c__27950__auto___28287);

return statearr_28129;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27952__auto__);
}));


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var async = (function (p__28130){
var vec__28131 = p__28130;
var v = cljs.core.nth.call(null,vec__28131,(0),null);
var p = cljs.core.nth.call(null,vec__28131,(1),null);
var job = vec__28131;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var n__4666__auto___28290 = n;
var __28291 = (0);
while(true){
if((__28291 < n__4666__auto___28290)){
var G__28134_28292 = type;
var G__28134_28293__$1 = (((G__28134_28292 instanceof cljs.core.Keyword))?G__28134_28292.fqn:null);
switch (G__28134_28293__$1) {
case "compute":
var c__27950__auto___28295 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__28291,c__27950__auto___28295,G__28134_28292,G__28134_28293__$1,n__4666__auto___28290,jobs,results,process,async){
return (function (){
var f__27951__auto__ = (function (){var switch__27855__auto__ = ((function (__28291,c__27950__auto___28295,G__28134_28292,G__28134_28293__$1,n__4666__auto___28290,jobs,results,process,async){
return (function (state_28147){
var state_val_28148 = (state_28147[(1)]);
if((state_val_28148 === (1))){
var state_28147__$1 = state_28147;
var statearr_28149_28296 = state_28147__$1;
(statearr_28149_28296[(2)] = null);

(statearr_28149_28296[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28148 === (2))){
var state_28147__$1 = state_28147;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28147__$1,(4),jobs);
} else {
if((state_val_28148 === (3))){
var inst_28145 = (state_28147[(2)]);
var state_28147__$1 = state_28147;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28147__$1,inst_28145);
} else {
if((state_val_28148 === (4))){
var inst_28137 = (state_28147[(2)]);
var inst_28138 = process.call(null,inst_28137);
var state_28147__$1 = state_28147;
if(cljs.core.truth_(inst_28138)){
var statearr_28150_28297 = state_28147__$1;
(statearr_28150_28297[(1)] = (5));

} else {
var statearr_28151_28298 = state_28147__$1;
(statearr_28151_28298[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28148 === (5))){
var state_28147__$1 = state_28147;
var statearr_28152_28299 = state_28147__$1;
(statearr_28152_28299[(2)] = null);

(statearr_28152_28299[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28148 === (6))){
var state_28147__$1 = state_28147;
var statearr_28153_28300 = state_28147__$1;
(statearr_28153_28300[(2)] = null);

(statearr_28153_28300[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28148 === (7))){
var inst_28143 = (state_28147[(2)]);
var state_28147__$1 = state_28147;
var statearr_28154_28301 = state_28147__$1;
(statearr_28154_28301[(2)] = inst_28143);

(statearr_28154_28301[(1)] = (3));


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
});})(__28291,c__27950__auto___28295,G__28134_28292,G__28134_28293__$1,n__4666__auto___28290,jobs,results,process,async))
;
return ((function (__28291,switch__27855__auto__,c__27950__auto___28295,G__28134_28292,G__28134_28293__$1,n__4666__auto___28290,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27856__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27856__auto____0 = (function (){
var statearr_28155 = [null,null,null,null,null,null,null];
(statearr_28155[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27856__auto__);

(statearr_28155[(1)] = (1));

return statearr_28155;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27856__auto____1 = (function (state_28147){
while(true){
var ret_value__27857__auto__ = (function (){try{while(true){
var result__27858__auto__ = switch__27855__auto__.call(null,state_28147);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27858__auto__;
}
break;
}
}catch (e28156){if((e28156 instanceof Object)){
var ex__27859__auto__ = e28156;
var statearr_28157_28302 = state_28147;
(statearr_28157_28302[(5)] = ex__27859__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28147);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28156;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28303 = state_28147;
state_28147 = G__28303;
continue;
} else {
return ret_value__27857__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27856__auto__ = function(state_28147){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27856__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27856__auto____1.call(this,state_28147);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27856__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27856__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27856__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27856__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27856__auto__;
})()
;})(__28291,switch__27855__auto__,c__27950__auto___28295,G__28134_28292,G__28134_28293__$1,n__4666__auto___28290,jobs,results,process,async))
})();
var state__27952__auto__ = (function (){var statearr_28158 = f__27951__auto__.call(null);
(statearr_28158[(6)] = c__27950__auto___28295);

return statearr_28158;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27952__auto__);
});})(__28291,c__27950__auto___28295,G__28134_28292,G__28134_28293__$1,n__4666__auto___28290,jobs,results,process,async))
);


break;
case "async":
var c__27950__auto___28304 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__28291,c__27950__auto___28304,G__28134_28292,G__28134_28293__$1,n__4666__auto___28290,jobs,results,process,async){
return (function (){
var f__27951__auto__ = (function (){var switch__27855__auto__ = ((function (__28291,c__27950__auto___28304,G__28134_28292,G__28134_28293__$1,n__4666__auto___28290,jobs,results,process,async){
return (function (state_28171){
var state_val_28172 = (state_28171[(1)]);
if((state_val_28172 === (1))){
var state_28171__$1 = state_28171;
var statearr_28173_28305 = state_28171__$1;
(statearr_28173_28305[(2)] = null);

(statearr_28173_28305[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28172 === (2))){
var state_28171__$1 = state_28171;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28171__$1,(4),jobs);
} else {
if((state_val_28172 === (3))){
var inst_28169 = (state_28171[(2)]);
var state_28171__$1 = state_28171;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28171__$1,inst_28169);
} else {
if((state_val_28172 === (4))){
var inst_28161 = (state_28171[(2)]);
var inst_28162 = async.call(null,inst_28161);
var state_28171__$1 = state_28171;
if(cljs.core.truth_(inst_28162)){
var statearr_28174_28306 = state_28171__$1;
(statearr_28174_28306[(1)] = (5));

} else {
var statearr_28175_28307 = state_28171__$1;
(statearr_28175_28307[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28172 === (5))){
var state_28171__$1 = state_28171;
var statearr_28176_28308 = state_28171__$1;
(statearr_28176_28308[(2)] = null);

(statearr_28176_28308[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28172 === (6))){
var state_28171__$1 = state_28171;
var statearr_28177_28309 = state_28171__$1;
(statearr_28177_28309[(2)] = null);

(statearr_28177_28309[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28172 === (7))){
var inst_28167 = (state_28171[(2)]);
var state_28171__$1 = state_28171;
var statearr_28178_28310 = state_28171__$1;
(statearr_28178_28310[(2)] = inst_28167);

(statearr_28178_28310[(1)] = (3));


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
});})(__28291,c__27950__auto___28304,G__28134_28292,G__28134_28293__$1,n__4666__auto___28290,jobs,results,process,async))
;
return ((function (__28291,switch__27855__auto__,c__27950__auto___28304,G__28134_28292,G__28134_28293__$1,n__4666__auto___28290,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27856__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27856__auto____0 = (function (){
var statearr_28179 = [null,null,null,null,null,null,null];
(statearr_28179[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27856__auto__);

(statearr_28179[(1)] = (1));

return statearr_28179;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27856__auto____1 = (function (state_28171){
while(true){
var ret_value__27857__auto__ = (function (){try{while(true){
var result__27858__auto__ = switch__27855__auto__.call(null,state_28171);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27858__auto__;
}
break;
}
}catch (e28180){if((e28180 instanceof Object)){
var ex__27859__auto__ = e28180;
var statearr_28181_28311 = state_28171;
(statearr_28181_28311[(5)] = ex__27859__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28171);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28180;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28312 = state_28171;
state_28171 = G__28312;
continue;
} else {
return ret_value__27857__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27856__auto__ = function(state_28171){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27856__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27856__auto____1.call(this,state_28171);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27856__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27856__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27856__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27856__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27856__auto__;
})()
;})(__28291,switch__27855__auto__,c__27950__auto___28304,G__28134_28292,G__28134_28293__$1,n__4666__auto___28290,jobs,results,process,async))
})();
var state__27952__auto__ = (function (){var statearr_28182 = f__27951__auto__.call(null);
(statearr_28182[(6)] = c__27950__auto___28304);

return statearr_28182;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27952__auto__);
});})(__28291,c__27950__auto___28304,G__28134_28292,G__28134_28293__$1,n__4666__auto___28290,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28134_28293__$1)].join('')));

}

var G__28313 = (__28291 + (1));
__28291 = G__28313;
continue;
} else {
}
break;
}

var c__27950__auto___28314 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27951__auto__ = (function (){var switch__27855__auto__ = (function (state_28204){
var state_val_28205 = (state_28204[(1)]);
if((state_val_28205 === (7))){
var inst_28200 = (state_28204[(2)]);
var state_28204__$1 = state_28204;
var statearr_28206_28315 = state_28204__$1;
(statearr_28206_28315[(2)] = inst_28200);

(statearr_28206_28315[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28205 === (1))){
var state_28204__$1 = state_28204;
var statearr_28207_28316 = state_28204__$1;
(statearr_28207_28316[(2)] = null);

(statearr_28207_28316[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28205 === (4))){
var inst_28185 = (state_28204[(7)]);
var inst_28185__$1 = (state_28204[(2)]);
var inst_28186 = (inst_28185__$1 == null);
var state_28204__$1 = (function (){var statearr_28208 = state_28204;
(statearr_28208[(7)] = inst_28185__$1);

return statearr_28208;
})();
if(cljs.core.truth_(inst_28186)){
var statearr_28209_28317 = state_28204__$1;
(statearr_28209_28317[(1)] = (5));

} else {
var statearr_28210_28318 = state_28204__$1;
(statearr_28210_28318[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28205 === (6))){
var inst_28185 = (state_28204[(7)]);
var inst_28190 = (state_28204[(8)]);
var inst_28190__$1 = cljs.core.async.chan.call(null,(1));
var inst_28191 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28192 = [inst_28185,inst_28190__$1];
var inst_28193 = (new cljs.core.PersistentVector(null,2,(5),inst_28191,inst_28192,null));
var state_28204__$1 = (function (){var statearr_28211 = state_28204;
(statearr_28211[(8)] = inst_28190__$1);

return statearr_28211;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28204__$1,(8),jobs,inst_28193);
} else {
if((state_val_28205 === (3))){
var inst_28202 = (state_28204[(2)]);
var state_28204__$1 = state_28204;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28204__$1,inst_28202);
} else {
if((state_val_28205 === (2))){
var state_28204__$1 = state_28204;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28204__$1,(4),from);
} else {
if((state_val_28205 === (9))){
var inst_28197 = (state_28204[(2)]);
var state_28204__$1 = (function (){var statearr_28212 = state_28204;
(statearr_28212[(9)] = inst_28197);

return statearr_28212;
})();
var statearr_28213_28319 = state_28204__$1;
(statearr_28213_28319[(2)] = null);

(statearr_28213_28319[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28205 === (5))){
var inst_28188 = cljs.core.async.close_BANG_.call(null,jobs);
var state_28204__$1 = state_28204;
var statearr_28214_28320 = state_28204__$1;
(statearr_28214_28320[(2)] = inst_28188);

(statearr_28214_28320[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28205 === (8))){
var inst_28190 = (state_28204[(8)]);
var inst_28195 = (state_28204[(2)]);
var state_28204__$1 = (function (){var statearr_28215 = state_28204;
(statearr_28215[(10)] = inst_28195);

return statearr_28215;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28204__$1,(9),results,inst_28190);
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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27856__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27856__auto____0 = (function (){
var statearr_28216 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28216[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27856__auto__);

(statearr_28216[(1)] = (1));

return statearr_28216;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27856__auto____1 = (function (state_28204){
while(true){
var ret_value__27857__auto__ = (function (){try{while(true){
var result__27858__auto__ = switch__27855__auto__.call(null,state_28204);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27858__auto__;
}
break;
}
}catch (e28217){if((e28217 instanceof Object)){
var ex__27859__auto__ = e28217;
var statearr_28218_28321 = state_28204;
(statearr_28218_28321[(5)] = ex__27859__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28204);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28217;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28322 = state_28204;
state_28204 = G__28322;
continue;
} else {
return ret_value__27857__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27856__auto__ = function(state_28204){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27856__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27856__auto____1.call(this,state_28204);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27856__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27856__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27856__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27856__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27856__auto__;
})()
})();
var state__27952__auto__ = (function (){var statearr_28219 = f__27951__auto__.call(null);
(statearr_28219[(6)] = c__27950__auto___28314);

return statearr_28219;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27952__auto__);
}));


var c__27950__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27951__auto__ = (function (){var switch__27855__auto__ = (function (state_28257){
var state_val_28258 = (state_28257[(1)]);
if((state_val_28258 === (7))){
var inst_28253 = (state_28257[(2)]);
var state_28257__$1 = state_28257;
var statearr_28259_28323 = state_28257__$1;
(statearr_28259_28323[(2)] = inst_28253);

(statearr_28259_28323[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28258 === (20))){
var state_28257__$1 = state_28257;
var statearr_28260_28324 = state_28257__$1;
(statearr_28260_28324[(2)] = null);

(statearr_28260_28324[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28258 === (1))){
var state_28257__$1 = state_28257;
var statearr_28261_28325 = state_28257__$1;
(statearr_28261_28325[(2)] = null);

(statearr_28261_28325[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28258 === (4))){
var inst_28222 = (state_28257[(7)]);
var inst_28222__$1 = (state_28257[(2)]);
var inst_28223 = (inst_28222__$1 == null);
var state_28257__$1 = (function (){var statearr_28262 = state_28257;
(statearr_28262[(7)] = inst_28222__$1);

return statearr_28262;
})();
if(cljs.core.truth_(inst_28223)){
var statearr_28263_28326 = state_28257__$1;
(statearr_28263_28326[(1)] = (5));

} else {
var statearr_28264_28327 = state_28257__$1;
(statearr_28264_28327[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28258 === (15))){
var inst_28235 = (state_28257[(8)]);
var state_28257__$1 = state_28257;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28257__$1,(18),to,inst_28235);
} else {
if((state_val_28258 === (21))){
var inst_28248 = (state_28257[(2)]);
var state_28257__$1 = state_28257;
var statearr_28265_28328 = state_28257__$1;
(statearr_28265_28328[(2)] = inst_28248);

(statearr_28265_28328[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28258 === (13))){
var inst_28250 = (state_28257[(2)]);
var state_28257__$1 = (function (){var statearr_28266 = state_28257;
(statearr_28266[(9)] = inst_28250);

return statearr_28266;
})();
var statearr_28267_28329 = state_28257__$1;
(statearr_28267_28329[(2)] = null);

(statearr_28267_28329[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28258 === (6))){
var inst_28222 = (state_28257[(7)]);
var state_28257__$1 = state_28257;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28257__$1,(11),inst_28222);
} else {
if((state_val_28258 === (17))){
var inst_28243 = (state_28257[(2)]);
var state_28257__$1 = state_28257;
if(cljs.core.truth_(inst_28243)){
var statearr_28268_28330 = state_28257__$1;
(statearr_28268_28330[(1)] = (19));

} else {
var statearr_28269_28331 = state_28257__$1;
(statearr_28269_28331[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28258 === (3))){
var inst_28255 = (state_28257[(2)]);
var state_28257__$1 = state_28257;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28257__$1,inst_28255);
} else {
if((state_val_28258 === (12))){
var inst_28232 = (state_28257[(10)]);
var state_28257__$1 = state_28257;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28257__$1,(14),inst_28232);
} else {
if((state_val_28258 === (2))){
var state_28257__$1 = state_28257;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28257__$1,(4),results);
} else {
if((state_val_28258 === (19))){
var state_28257__$1 = state_28257;
var statearr_28270_28332 = state_28257__$1;
(statearr_28270_28332[(2)] = null);

(statearr_28270_28332[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28258 === (11))){
var inst_28232 = (state_28257[(2)]);
var state_28257__$1 = (function (){var statearr_28271 = state_28257;
(statearr_28271[(10)] = inst_28232);

return statearr_28271;
})();
var statearr_28272_28333 = state_28257__$1;
(statearr_28272_28333[(2)] = null);

(statearr_28272_28333[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28258 === (9))){
var state_28257__$1 = state_28257;
var statearr_28273_28334 = state_28257__$1;
(statearr_28273_28334[(2)] = null);

(statearr_28273_28334[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28258 === (5))){
var state_28257__$1 = state_28257;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28274_28335 = state_28257__$1;
(statearr_28274_28335[(1)] = (8));

} else {
var statearr_28275_28336 = state_28257__$1;
(statearr_28275_28336[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28258 === (14))){
var inst_28235 = (state_28257[(8)]);
var inst_28235__$1 = (state_28257[(2)]);
var inst_28236 = (inst_28235__$1 == null);
var inst_28237 = cljs.core.not.call(null,inst_28236);
var state_28257__$1 = (function (){var statearr_28276 = state_28257;
(statearr_28276[(8)] = inst_28235__$1);

return statearr_28276;
})();
if(inst_28237){
var statearr_28277_28337 = state_28257__$1;
(statearr_28277_28337[(1)] = (15));

} else {
var statearr_28278_28338 = state_28257__$1;
(statearr_28278_28338[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28258 === (16))){
var state_28257__$1 = state_28257;
var statearr_28279_28339 = state_28257__$1;
(statearr_28279_28339[(2)] = false);

(statearr_28279_28339[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28258 === (10))){
var inst_28229 = (state_28257[(2)]);
var state_28257__$1 = state_28257;
var statearr_28280_28340 = state_28257__$1;
(statearr_28280_28340[(2)] = inst_28229);

(statearr_28280_28340[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28258 === (18))){
var inst_28240 = (state_28257[(2)]);
var state_28257__$1 = state_28257;
var statearr_28281_28341 = state_28257__$1;
(statearr_28281_28341[(2)] = inst_28240);

(statearr_28281_28341[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28258 === (8))){
var inst_28226 = cljs.core.async.close_BANG_.call(null,to);
var state_28257__$1 = state_28257;
var statearr_28282_28342 = state_28257__$1;
(statearr_28282_28342[(2)] = inst_28226);

(statearr_28282_28342[(1)] = (10));


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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27856__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27856__auto____0 = (function (){
var statearr_28283 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28283[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27856__auto__);

(statearr_28283[(1)] = (1));

return statearr_28283;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27856__auto____1 = (function (state_28257){
while(true){
var ret_value__27857__auto__ = (function (){try{while(true){
var result__27858__auto__ = switch__27855__auto__.call(null,state_28257);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27858__auto__;
}
break;
}
}catch (e28284){if((e28284 instanceof Object)){
var ex__27859__auto__ = e28284;
var statearr_28285_28343 = state_28257;
(statearr_28285_28343[(5)] = ex__27859__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28257);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28284;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28344 = state_28257;
state_28257 = G__28344;
continue;
} else {
return ret_value__27857__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27856__auto__ = function(state_28257){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27856__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27856__auto____1.call(this,state_28257);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27856__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27856__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27856__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27856__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27856__auto__;
})()
})();
var state__27952__auto__ = (function (){var statearr_28286 = f__27951__auto__.call(null);
(statearr_28286[(6)] = c__27950__auto__);

return statearr_28286;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27952__auto__);
}));

return c__27950__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__28346 = arguments.length;
switch (G__28346) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__28349 = arguments.length;
switch (G__28349) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__28352 = arguments.length;
switch (G__28352) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__27950__auto___28401 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27951__auto__ = (function (){var switch__27855__auto__ = (function (state_28378){
var state_val_28379 = (state_28378[(1)]);
if((state_val_28379 === (7))){
var inst_28374 = (state_28378[(2)]);
var state_28378__$1 = state_28378;
var statearr_28380_28402 = state_28378__$1;
(statearr_28380_28402[(2)] = inst_28374);

(statearr_28380_28402[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28379 === (1))){
var state_28378__$1 = state_28378;
var statearr_28381_28403 = state_28378__$1;
(statearr_28381_28403[(2)] = null);

(statearr_28381_28403[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28379 === (4))){
var inst_28355 = (state_28378[(7)]);
var inst_28355__$1 = (state_28378[(2)]);
var inst_28356 = (inst_28355__$1 == null);
var state_28378__$1 = (function (){var statearr_28382 = state_28378;
(statearr_28382[(7)] = inst_28355__$1);

return statearr_28382;
})();
if(cljs.core.truth_(inst_28356)){
var statearr_28383_28404 = state_28378__$1;
(statearr_28383_28404[(1)] = (5));

} else {
var statearr_28384_28405 = state_28378__$1;
(statearr_28384_28405[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28379 === (13))){
var state_28378__$1 = state_28378;
var statearr_28385_28406 = state_28378__$1;
(statearr_28385_28406[(2)] = null);

(statearr_28385_28406[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28379 === (6))){
var inst_28355 = (state_28378[(7)]);
var inst_28361 = p.call(null,inst_28355);
var state_28378__$1 = state_28378;
if(cljs.core.truth_(inst_28361)){
var statearr_28386_28407 = state_28378__$1;
(statearr_28386_28407[(1)] = (9));

} else {
var statearr_28387_28408 = state_28378__$1;
(statearr_28387_28408[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28379 === (3))){
var inst_28376 = (state_28378[(2)]);
var state_28378__$1 = state_28378;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28378__$1,inst_28376);
} else {
if((state_val_28379 === (12))){
var state_28378__$1 = state_28378;
var statearr_28388_28409 = state_28378__$1;
(statearr_28388_28409[(2)] = null);

(statearr_28388_28409[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28379 === (2))){
var state_28378__$1 = state_28378;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28378__$1,(4),ch);
} else {
if((state_val_28379 === (11))){
var inst_28355 = (state_28378[(7)]);
var inst_28365 = (state_28378[(2)]);
var state_28378__$1 = state_28378;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28378__$1,(8),inst_28365,inst_28355);
} else {
if((state_val_28379 === (9))){
var state_28378__$1 = state_28378;
var statearr_28389_28410 = state_28378__$1;
(statearr_28389_28410[(2)] = tc);

(statearr_28389_28410[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28379 === (5))){
var inst_28358 = cljs.core.async.close_BANG_.call(null,tc);
var inst_28359 = cljs.core.async.close_BANG_.call(null,fc);
var state_28378__$1 = (function (){var statearr_28390 = state_28378;
(statearr_28390[(8)] = inst_28358);

return statearr_28390;
})();
var statearr_28391_28411 = state_28378__$1;
(statearr_28391_28411[(2)] = inst_28359);

(statearr_28391_28411[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28379 === (14))){
var inst_28372 = (state_28378[(2)]);
var state_28378__$1 = state_28378;
var statearr_28392_28412 = state_28378__$1;
(statearr_28392_28412[(2)] = inst_28372);

(statearr_28392_28412[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28379 === (10))){
var state_28378__$1 = state_28378;
var statearr_28393_28413 = state_28378__$1;
(statearr_28393_28413[(2)] = fc);

(statearr_28393_28413[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28379 === (8))){
var inst_28367 = (state_28378[(2)]);
var state_28378__$1 = state_28378;
if(cljs.core.truth_(inst_28367)){
var statearr_28394_28414 = state_28378__$1;
(statearr_28394_28414[(1)] = (12));

} else {
var statearr_28395_28415 = state_28378__$1;
(statearr_28395_28415[(1)] = (13));

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
});
return (function() {
var cljs$core$async$state_machine__27856__auto__ = null;
var cljs$core$async$state_machine__27856__auto____0 = (function (){
var statearr_28396 = [null,null,null,null,null,null,null,null,null];
(statearr_28396[(0)] = cljs$core$async$state_machine__27856__auto__);

(statearr_28396[(1)] = (1));

return statearr_28396;
});
var cljs$core$async$state_machine__27856__auto____1 = (function (state_28378){
while(true){
var ret_value__27857__auto__ = (function (){try{while(true){
var result__27858__auto__ = switch__27855__auto__.call(null,state_28378);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27858__auto__;
}
break;
}
}catch (e28397){if((e28397 instanceof Object)){
var ex__27859__auto__ = e28397;
var statearr_28398_28416 = state_28378;
(statearr_28398_28416[(5)] = ex__27859__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28378);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28397;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28417 = state_28378;
state_28378 = G__28417;
continue;
} else {
return ret_value__27857__auto__;
}
break;
}
});
cljs$core$async$state_machine__27856__auto__ = function(state_28378){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27856__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27856__auto____1.call(this,state_28378);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27856__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27856__auto____0;
cljs$core$async$state_machine__27856__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27856__auto____1;
return cljs$core$async$state_machine__27856__auto__;
})()
})();
var state__27952__auto__ = (function (){var statearr_28399 = f__27951__auto__.call(null);
(statearr_28399[(6)] = c__27950__auto___28401);

return statearr_28399;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27952__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__27950__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27951__auto__ = (function (){var switch__27855__auto__ = (function (state_28438){
var state_val_28439 = (state_28438[(1)]);
if((state_val_28439 === (7))){
var inst_28434 = (state_28438[(2)]);
var state_28438__$1 = state_28438;
var statearr_28440_28458 = state_28438__$1;
(statearr_28440_28458[(2)] = inst_28434);

(statearr_28440_28458[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28439 === (1))){
var inst_28418 = init;
var state_28438__$1 = (function (){var statearr_28441 = state_28438;
(statearr_28441[(7)] = inst_28418);

return statearr_28441;
})();
var statearr_28442_28459 = state_28438__$1;
(statearr_28442_28459[(2)] = null);

(statearr_28442_28459[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28439 === (4))){
var inst_28421 = (state_28438[(8)]);
var inst_28421__$1 = (state_28438[(2)]);
var inst_28422 = (inst_28421__$1 == null);
var state_28438__$1 = (function (){var statearr_28443 = state_28438;
(statearr_28443[(8)] = inst_28421__$1);

return statearr_28443;
})();
if(cljs.core.truth_(inst_28422)){
var statearr_28444_28460 = state_28438__$1;
(statearr_28444_28460[(1)] = (5));

} else {
var statearr_28445_28461 = state_28438__$1;
(statearr_28445_28461[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28439 === (6))){
var inst_28425 = (state_28438[(9)]);
var inst_28418 = (state_28438[(7)]);
var inst_28421 = (state_28438[(8)]);
var inst_28425__$1 = f.call(null,inst_28418,inst_28421);
var inst_28426 = cljs.core.reduced_QMARK_.call(null,inst_28425__$1);
var state_28438__$1 = (function (){var statearr_28446 = state_28438;
(statearr_28446[(9)] = inst_28425__$1);

return statearr_28446;
})();
if(inst_28426){
var statearr_28447_28462 = state_28438__$1;
(statearr_28447_28462[(1)] = (8));

} else {
var statearr_28448_28463 = state_28438__$1;
(statearr_28448_28463[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28439 === (3))){
var inst_28436 = (state_28438[(2)]);
var state_28438__$1 = state_28438;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28438__$1,inst_28436);
} else {
if((state_val_28439 === (2))){
var state_28438__$1 = state_28438;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28438__$1,(4),ch);
} else {
if((state_val_28439 === (9))){
var inst_28425 = (state_28438[(9)]);
var inst_28418 = inst_28425;
var state_28438__$1 = (function (){var statearr_28449 = state_28438;
(statearr_28449[(7)] = inst_28418);

return statearr_28449;
})();
var statearr_28450_28464 = state_28438__$1;
(statearr_28450_28464[(2)] = null);

(statearr_28450_28464[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28439 === (5))){
var inst_28418 = (state_28438[(7)]);
var state_28438__$1 = state_28438;
var statearr_28451_28465 = state_28438__$1;
(statearr_28451_28465[(2)] = inst_28418);

(statearr_28451_28465[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28439 === (10))){
var inst_28432 = (state_28438[(2)]);
var state_28438__$1 = state_28438;
var statearr_28452_28466 = state_28438__$1;
(statearr_28452_28466[(2)] = inst_28432);

(statearr_28452_28466[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28439 === (8))){
var inst_28425 = (state_28438[(9)]);
var inst_28428 = cljs.core.deref.call(null,inst_28425);
var state_28438__$1 = state_28438;
var statearr_28453_28467 = state_28438__$1;
(statearr_28453_28467[(2)] = inst_28428);

(statearr_28453_28467[(1)] = (10));


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
});
return (function() {
var cljs$core$async$reduce_$_state_machine__27856__auto__ = null;
var cljs$core$async$reduce_$_state_machine__27856__auto____0 = (function (){
var statearr_28454 = [null,null,null,null,null,null,null,null,null,null];
(statearr_28454[(0)] = cljs$core$async$reduce_$_state_machine__27856__auto__);

(statearr_28454[(1)] = (1));

return statearr_28454;
});
var cljs$core$async$reduce_$_state_machine__27856__auto____1 = (function (state_28438){
while(true){
var ret_value__27857__auto__ = (function (){try{while(true){
var result__27858__auto__ = switch__27855__auto__.call(null,state_28438);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27858__auto__;
}
break;
}
}catch (e28455){if((e28455 instanceof Object)){
var ex__27859__auto__ = e28455;
var statearr_28456_28468 = state_28438;
(statearr_28456_28468[(5)] = ex__27859__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28438);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28455;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28469 = state_28438;
state_28438 = G__28469;
continue;
} else {
return ret_value__27857__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__27856__auto__ = function(state_28438){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__27856__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__27856__auto____1.call(this,state_28438);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__27856__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__27856__auto____0;
cljs$core$async$reduce_$_state_machine__27856__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__27856__auto____1;
return cljs$core$async$reduce_$_state_machine__27856__auto__;
})()
})();
var state__27952__auto__ = (function (){var statearr_28457 = f__27951__auto__.call(null);
(statearr_28457[(6)] = c__27950__auto__);

return statearr_28457;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27952__auto__);
}));

return c__27950__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__27950__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27951__auto__ = (function (){var switch__27855__auto__ = (function (state_28475){
var state_val_28476 = (state_28475[(1)]);
if((state_val_28476 === (1))){
var inst_28470 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_28475__$1 = state_28475;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28475__$1,(2),inst_28470);
} else {
if((state_val_28476 === (2))){
var inst_28472 = (state_28475[(2)]);
var inst_28473 = f__$1.call(null,inst_28472);
var state_28475__$1 = state_28475;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28475__$1,inst_28473);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__27856__auto__ = null;
var cljs$core$async$transduce_$_state_machine__27856__auto____0 = (function (){
var statearr_28477 = [null,null,null,null,null,null,null];
(statearr_28477[(0)] = cljs$core$async$transduce_$_state_machine__27856__auto__);

(statearr_28477[(1)] = (1));

return statearr_28477;
});
var cljs$core$async$transduce_$_state_machine__27856__auto____1 = (function (state_28475){
while(true){
var ret_value__27857__auto__ = (function (){try{while(true){
var result__27858__auto__ = switch__27855__auto__.call(null,state_28475);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27858__auto__;
}
break;
}
}catch (e28478){if((e28478 instanceof Object)){
var ex__27859__auto__ = e28478;
var statearr_28479_28481 = state_28475;
(statearr_28479_28481[(5)] = ex__27859__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28475);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28478;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28482 = state_28475;
state_28475 = G__28482;
continue;
} else {
return ret_value__27857__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__27856__auto__ = function(state_28475){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__27856__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__27856__auto____1.call(this,state_28475);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__27856__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__27856__auto____0;
cljs$core$async$transduce_$_state_machine__27856__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__27856__auto____1;
return cljs$core$async$transduce_$_state_machine__27856__auto__;
})()
})();
var state__27952__auto__ = (function (){var statearr_28480 = f__27951__auto__.call(null);
(statearr_28480[(6)] = c__27950__auto__);

return statearr_28480;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27952__auto__);
}));

return c__27950__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__28484 = arguments.length;
switch (G__28484) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__27950__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27951__auto__ = (function (){var switch__27855__auto__ = (function (state_28509){
var state_val_28510 = (state_28509[(1)]);
if((state_val_28510 === (7))){
var inst_28491 = (state_28509[(2)]);
var state_28509__$1 = state_28509;
var statearr_28511_28532 = state_28509__$1;
(statearr_28511_28532[(2)] = inst_28491);

(statearr_28511_28532[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28510 === (1))){
var inst_28485 = cljs.core.seq.call(null,coll);
var inst_28486 = inst_28485;
var state_28509__$1 = (function (){var statearr_28512 = state_28509;
(statearr_28512[(7)] = inst_28486);

return statearr_28512;
})();
var statearr_28513_28533 = state_28509__$1;
(statearr_28513_28533[(2)] = null);

(statearr_28513_28533[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28510 === (4))){
var inst_28486 = (state_28509[(7)]);
var inst_28489 = cljs.core.first.call(null,inst_28486);
var state_28509__$1 = state_28509;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28509__$1,(7),ch,inst_28489);
} else {
if((state_val_28510 === (13))){
var inst_28503 = (state_28509[(2)]);
var state_28509__$1 = state_28509;
var statearr_28514_28534 = state_28509__$1;
(statearr_28514_28534[(2)] = inst_28503);

(statearr_28514_28534[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28510 === (6))){
var inst_28494 = (state_28509[(2)]);
var state_28509__$1 = state_28509;
if(cljs.core.truth_(inst_28494)){
var statearr_28515_28535 = state_28509__$1;
(statearr_28515_28535[(1)] = (8));

} else {
var statearr_28516_28536 = state_28509__$1;
(statearr_28516_28536[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28510 === (3))){
var inst_28507 = (state_28509[(2)]);
var state_28509__$1 = state_28509;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28509__$1,inst_28507);
} else {
if((state_val_28510 === (12))){
var state_28509__$1 = state_28509;
var statearr_28517_28537 = state_28509__$1;
(statearr_28517_28537[(2)] = null);

(statearr_28517_28537[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28510 === (2))){
var inst_28486 = (state_28509[(7)]);
var state_28509__$1 = state_28509;
if(cljs.core.truth_(inst_28486)){
var statearr_28518_28538 = state_28509__$1;
(statearr_28518_28538[(1)] = (4));

} else {
var statearr_28519_28539 = state_28509__$1;
(statearr_28519_28539[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28510 === (11))){
var inst_28500 = cljs.core.async.close_BANG_.call(null,ch);
var state_28509__$1 = state_28509;
var statearr_28520_28540 = state_28509__$1;
(statearr_28520_28540[(2)] = inst_28500);

(statearr_28520_28540[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28510 === (9))){
var state_28509__$1 = state_28509;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28521_28541 = state_28509__$1;
(statearr_28521_28541[(1)] = (11));

} else {
var statearr_28522_28542 = state_28509__$1;
(statearr_28522_28542[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28510 === (5))){
var inst_28486 = (state_28509[(7)]);
var state_28509__$1 = state_28509;
var statearr_28523_28543 = state_28509__$1;
(statearr_28523_28543[(2)] = inst_28486);

(statearr_28523_28543[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28510 === (10))){
var inst_28505 = (state_28509[(2)]);
var state_28509__$1 = state_28509;
var statearr_28524_28544 = state_28509__$1;
(statearr_28524_28544[(2)] = inst_28505);

(statearr_28524_28544[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28510 === (8))){
var inst_28486 = (state_28509[(7)]);
var inst_28496 = cljs.core.next.call(null,inst_28486);
var inst_28486__$1 = inst_28496;
var state_28509__$1 = (function (){var statearr_28525 = state_28509;
(statearr_28525[(7)] = inst_28486__$1);

return statearr_28525;
})();
var statearr_28526_28545 = state_28509__$1;
(statearr_28526_28545[(2)] = null);

(statearr_28526_28545[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__27856__auto__ = null;
var cljs$core$async$state_machine__27856__auto____0 = (function (){
var statearr_28527 = [null,null,null,null,null,null,null,null];
(statearr_28527[(0)] = cljs$core$async$state_machine__27856__auto__);

(statearr_28527[(1)] = (1));

return statearr_28527;
});
var cljs$core$async$state_machine__27856__auto____1 = (function (state_28509){
while(true){
var ret_value__27857__auto__ = (function (){try{while(true){
var result__27858__auto__ = switch__27855__auto__.call(null,state_28509);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27858__auto__;
}
break;
}
}catch (e28528){if((e28528 instanceof Object)){
var ex__27859__auto__ = e28528;
var statearr_28529_28546 = state_28509;
(statearr_28529_28546[(5)] = ex__27859__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28509);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28528;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28547 = state_28509;
state_28509 = G__28547;
continue;
} else {
return ret_value__27857__auto__;
}
break;
}
});
cljs$core$async$state_machine__27856__auto__ = function(state_28509){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27856__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27856__auto____1.call(this,state_28509);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27856__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27856__auto____0;
cljs$core$async$state_machine__27856__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27856__auto____1;
return cljs$core$async$state_machine__27856__auto__;
})()
})();
var state__27952__auto__ = (function (){var statearr_28530 = f__27951__auto__.call(null);
(statearr_28530[(6)] = c__27950__auto__);

return statearr_28530;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27952__auto__);
}));

return c__27950__auto__;
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4487__auto__ = (((_ == null))?null:_);
var m__4488__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,_);
} else {
var m__4485__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4485__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,m,ch);
} else {
var m__4485__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,m);
} else {
var m__4485__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28548 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28548 = (function (ch,cs,meta28549){
this.ch = ch;
this.cs = cs;
this.meta28549 = meta28549;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28548.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28550,meta28549__$1){
var self__ = this;
var _28550__$1 = this;
return (new cljs.core.async.t_cljs$core$async28548(self__.ch,self__.cs,meta28549__$1));
}));

(cljs.core.async.t_cljs$core$async28548.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28550){
var self__ = this;
var _28550__$1 = this;
return self__.meta28549;
}));

(cljs.core.async.t_cljs$core$async28548.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28548.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async28548.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28548.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async28548.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async28548.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async28548.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta28549","meta28549",254861582,null)], null);
}));

(cljs.core.async.t_cljs$core$async28548.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28548.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28548");

(cljs.core.async.t_cljs$core$async28548.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.core.async/t_cljs$core$async28548");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28548.
 */
cljs.core.async.__GT_t_cljs$core$async28548 = (function cljs$core$async$mult_$___GT_t_cljs$core$async28548(ch__$1,cs__$1,meta28549){
return (new cljs.core.async.t_cljs$core$async28548(ch__$1,cs__$1,meta28549));
});

}

return (new cljs.core.async.t_cljs$core$async28548(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});
var c__27950__auto___28770 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27951__auto__ = (function (){var switch__27855__auto__ = (function (state_28685){
var state_val_28686 = (state_28685[(1)]);
if((state_val_28686 === (7))){
var inst_28681 = (state_28685[(2)]);
var state_28685__$1 = state_28685;
var statearr_28687_28771 = state_28685__$1;
(statearr_28687_28771[(2)] = inst_28681);

(statearr_28687_28771[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28686 === (20))){
var inst_28584 = (state_28685[(7)]);
var inst_28596 = cljs.core.first.call(null,inst_28584);
var inst_28597 = cljs.core.nth.call(null,inst_28596,(0),null);
var inst_28598 = cljs.core.nth.call(null,inst_28596,(1),null);
var state_28685__$1 = (function (){var statearr_28688 = state_28685;
(statearr_28688[(8)] = inst_28597);

return statearr_28688;
})();
if(cljs.core.truth_(inst_28598)){
var statearr_28689_28772 = state_28685__$1;
(statearr_28689_28772[(1)] = (22));

} else {
var statearr_28690_28773 = state_28685__$1;
(statearr_28690_28773[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28686 === (27))){
var inst_28628 = (state_28685[(9)]);
var inst_28626 = (state_28685[(10)]);
var inst_28633 = (state_28685[(11)]);
var inst_28553 = (state_28685[(12)]);
var inst_28633__$1 = cljs.core._nth.call(null,inst_28626,inst_28628);
var inst_28634 = cljs.core.async.put_BANG_.call(null,inst_28633__$1,inst_28553,done);
var state_28685__$1 = (function (){var statearr_28691 = state_28685;
(statearr_28691[(11)] = inst_28633__$1);

return statearr_28691;
})();
if(cljs.core.truth_(inst_28634)){
var statearr_28692_28774 = state_28685__$1;
(statearr_28692_28774[(1)] = (30));

} else {
var statearr_28693_28775 = state_28685__$1;
(statearr_28693_28775[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28686 === (1))){
var state_28685__$1 = state_28685;
var statearr_28694_28776 = state_28685__$1;
(statearr_28694_28776[(2)] = null);

(statearr_28694_28776[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28686 === (24))){
var inst_28584 = (state_28685[(7)]);
var inst_28603 = (state_28685[(2)]);
var inst_28604 = cljs.core.next.call(null,inst_28584);
var inst_28562 = inst_28604;
var inst_28563 = null;
var inst_28564 = (0);
var inst_28565 = (0);
var state_28685__$1 = (function (){var statearr_28695 = state_28685;
(statearr_28695[(13)] = inst_28603);

(statearr_28695[(14)] = inst_28563);

(statearr_28695[(15)] = inst_28564);

(statearr_28695[(16)] = inst_28565);

(statearr_28695[(17)] = inst_28562);

return statearr_28695;
})();
var statearr_28696_28777 = state_28685__$1;
(statearr_28696_28777[(2)] = null);

(statearr_28696_28777[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28686 === (39))){
var state_28685__$1 = state_28685;
var statearr_28700_28778 = state_28685__$1;
(statearr_28700_28778[(2)] = null);

(statearr_28700_28778[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28686 === (4))){
var inst_28553 = (state_28685[(12)]);
var inst_28553__$1 = (state_28685[(2)]);
var inst_28554 = (inst_28553__$1 == null);
var state_28685__$1 = (function (){var statearr_28701 = state_28685;
(statearr_28701[(12)] = inst_28553__$1);

return statearr_28701;
})();
if(cljs.core.truth_(inst_28554)){
var statearr_28702_28779 = state_28685__$1;
(statearr_28702_28779[(1)] = (5));

} else {
var statearr_28703_28780 = state_28685__$1;
(statearr_28703_28780[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28686 === (15))){
var inst_28563 = (state_28685[(14)]);
var inst_28564 = (state_28685[(15)]);
var inst_28565 = (state_28685[(16)]);
var inst_28562 = (state_28685[(17)]);
var inst_28580 = (state_28685[(2)]);
var inst_28581 = (inst_28565 + (1));
var tmp28697 = inst_28563;
var tmp28698 = inst_28564;
var tmp28699 = inst_28562;
var inst_28562__$1 = tmp28699;
var inst_28563__$1 = tmp28697;
var inst_28564__$1 = tmp28698;
var inst_28565__$1 = inst_28581;
var state_28685__$1 = (function (){var statearr_28704 = state_28685;
(statearr_28704[(14)] = inst_28563__$1);

(statearr_28704[(15)] = inst_28564__$1);

(statearr_28704[(16)] = inst_28565__$1);

(statearr_28704[(17)] = inst_28562__$1);

(statearr_28704[(18)] = inst_28580);

return statearr_28704;
})();
var statearr_28705_28781 = state_28685__$1;
(statearr_28705_28781[(2)] = null);

(statearr_28705_28781[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28686 === (21))){
var inst_28607 = (state_28685[(2)]);
var state_28685__$1 = state_28685;
var statearr_28709_28782 = state_28685__$1;
(statearr_28709_28782[(2)] = inst_28607);

(statearr_28709_28782[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28686 === (31))){
var inst_28633 = (state_28685[(11)]);
var inst_28637 = done.call(null,null);
var inst_28638 = cljs.core.async.untap_STAR_.call(null,m,inst_28633);
var state_28685__$1 = (function (){var statearr_28710 = state_28685;
(statearr_28710[(19)] = inst_28637);

return statearr_28710;
})();
var statearr_28711_28783 = state_28685__$1;
(statearr_28711_28783[(2)] = inst_28638);

(statearr_28711_28783[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28686 === (32))){
var inst_28628 = (state_28685[(9)]);
var inst_28626 = (state_28685[(10)]);
var inst_28625 = (state_28685[(20)]);
var inst_28627 = (state_28685[(21)]);
var inst_28640 = (state_28685[(2)]);
var inst_28641 = (inst_28628 + (1));
var tmp28706 = inst_28626;
var tmp28707 = inst_28625;
var tmp28708 = inst_28627;
var inst_28625__$1 = tmp28707;
var inst_28626__$1 = tmp28706;
var inst_28627__$1 = tmp28708;
var inst_28628__$1 = inst_28641;
var state_28685__$1 = (function (){var statearr_28712 = state_28685;
(statearr_28712[(22)] = inst_28640);

(statearr_28712[(9)] = inst_28628__$1);

(statearr_28712[(10)] = inst_28626__$1);

(statearr_28712[(20)] = inst_28625__$1);

(statearr_28712[(21)] = inst_28627__$1);

return statearr_28712;
})();
var statearr_28713_28784 = state_28685__$1;
(statearr_28713_28784[(2)] = null);

(statearr_28713_28784[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28686 === (40))){
var inst_28653 = (state_28685[(23)]);
var inst_28657 = done.call(null,null);
var inst_28658 = cljs.core.async.untap_STAR_.call(null,m,inst_28653);
var state_28685__$1 = (function (){var statearr_28714 = state_28685;
(statearr_28714[(24)] = inst_28657);

return statearr_28714;
})();
var statearr_28715_28785 = state_28685__$1;
(statearr_28715_28785[(2)] = inst_28658);

(statearr_28715_28785[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28686 === (33))){
var inst_28644 = (state_28685[(25)]);
var inst_28646 = cljs.core.chunked_seq_QMARK_.call(null,inst_28644);
var state_28685__$1 = state_28685;
if(inst_28646){
var statearr_28716_28786 = state_28685__$1;
(statearr_28716_28786[(1)] = (36));

} else {
var statearr_28717_28787 = state_28685__$1;
(statearr_28717_28787[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28686 === (13))){
var inst_28574 = (state_28685[(26)]);
var inst_28577 = cljs.core.async.close_BANG_.call(null,inst_28574);
var state_28685__$1 = state_28685;
var statearr_28718_28788 = state_28685__$1;
(statearr_28718_28788[(2)] = inst_28577);

(statearr_28718_28788[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28686 === (22))){
var inst_28597 = (state_28685[(8)]);
var inst_28600 = cljs.core.async.close_BANG_.call(null,inst_28597);
var state_28685__$1 = state_28685;
var statearr_28719_28789 = state_28685__$1;
(statearr_28719_28789[(2)] = inst_28600);

(statearr_28719_28789[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28686 === (36))){
var inst_28644 = (state_28685[(25)]);
var inst_28648 = cljs.core.chunk_first.call(null,inst_28644);
var inst_28649 = cljs.core.chunk_rest.call(null,inst_28644);
var inst_28650 = cljs.core.count.call(null,inst_28648);
var inst_28625 = inst_28649;
var inst_28626 = inst_28648;
var inst_28627 = inst_28650;
var inst_28628 = (0);
var state_28685__$1 = (function (){var statearr_28720 = state_28685;
(statearr_28720[(9)] = inst_28628);

(statearr_28720[(10)] = inst_28626);

(statearr_28720[(20)] = inst_28625);

(statearr_28720[(21)] = inst_28627);

return statearr_28720;
})();
var statearr_28721_28790 = state_28685__$1;
(statearr_28721_28790[(2)] = null);

(statearr_28721_28790[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28686 === (41))){
var inst_28644 = (state_28685[(25)]);
var inst_28660 = (state_28685[(2)]);
var inst_28661 = cljs.core.next.call(null,inst_28644);
var inst_28625 = inst_28661;
var inst_28626 = null;
var inst_28627 = (0);
var inst_28628 = (0);
var state_28685__$1 = (function (){var statearr_28722 = state_28685;
(statearr_28722[(9)] = inst_28628);

(statearr_28722[(10)] = inst_28626);

(statearr_28722[(20)] = inst_28625);

(statearr_28722[(21)] = inst_28627);

(statearr_28722[(27)] = inst_28660);

return statearr_28722;
})();
var statearr_28723_28791 = state_28685__$1;
(statearr_28723_28791[(2)] = null);

(statearr_28723_28791[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28686 === (43))){
var state_28685__$1 = state_28685;
var statearr_28724_28792 = state_28685__$1;
(statearr_28724_28792[(2)] = null);

(statearr_28724_28792[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28686 === (29))){
var inst_28669 = (state_28685[(2)]);
var state_28685__$1 = state_28685;
var statearr_28725_28793 = state_28685__$1;
(statearr_28725_28793[(2)] = inst_28669);

(statearr_28725_28793[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28686 === (44))){
var inst_28678 = (state_28685[(2)]);
var state_28685__$1 = (function (){var statearr_28726 = state_28685;
(statearr_28726[(28)] = inst_28678);

return statearr_28726;
})();
var statearr_28727_28794 = state_28685__$1;
(statearr_28727_28794[(2)] = null);

(statearr_28727_28794[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28686 === (6))){
var inst_28617 = (state_28685[(29)]);
var inst_28616 = cljs.core.deref.call(null,cs);
var inst_28617__$1 = cljs.core.keys.call(null,inst_28616);
var inst_28618 = cljs.core.count.call(null,inst_28617__$1);
var inst_28619 = cljs.core.reset_BANG_.call(null,dctr,inst_28618);
var inst_28624 = cljs.core.seq.call(null,inst_28617__$1);
var inst_28625 = inst_28624;
var inst_28626 = null;
var inst_28627 = (0);
var inst_28628 = (0);
var state_28685__$1 = (function (){var statearr_28728 = state_28685;
(statearr_28728[(9)] = inst_28628);

(statearr_28728[(10)] = inst_28626);

(statearr_28728[(20)] = inst_28625);

(statearr_28728[(29)] = inst_28617__$1);

(statearr_28728[(21)] = inst_28627);

(statearr_28728[(30)] = inst_28619);

return statearr_28728;
})();
var statearr_28729_28795 = state_28685__$1;
(statearr_28729_28795[(2)] = null);

(statearr_28729_28795[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28686 === (28))){
var inst_28625 = (state_28685[(20)]);
var inst_28644 = (state_28685[(25)]);
var inst_28644__$1 = cljs.core.seq.call(null,inst_28625);
var state_28685__$1 = (function (){var statearr_28730 = state_28685;
(statearr_28730[(25)] = inst_28644__$1);

return statearr_28730;
})();
if(inst_28644__$1){
var statearr_28731_28796 = state_28685__$1;
(statearr_28731_28796[(1)] = (33));

} else {
var statearr_28732_28797 = state_28685__$1;
(statearr_28732_28797[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28686 === (25))){
var inst_28628 = (state_28685[(9)]);
var inst_28627 = (state_28685[(21)]);
var inst_28630 = (inst_28628 < inst_28627);
var inst_28631 = inst_28630;
var state_28685__$1 = state_28685;
if(cljs.core.truth_(inst_28631)){
var statearr_28733_28798 = state_28685__$1;
(statearr_28733_28798[(1)] = (27));

} else {
var statearr_28734_28799 = state_28685__$1;
(statearr_28734_28799[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28686 === (34))){
var state_28685__$1 = state_28685;
var statearr_28735_28800 = state_28685__$1;
(statearr_28735_28800[(2)] = null);

(statearr_28735_28800[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28686 === (17))){
var state_28685__$1 = state_28685;
var statearr_28736_28801 = state_28685__$1;
(statearr_28736_28801[(2)] = null);

(statearr_28736_28801[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28686 === (3))){
var inst_28683 = (state_28685[(2)]);
var state_28685__$1 = state_28685;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28685__$1,inst_28683);
} else {
if((state_val_28686 === (12))){
var inst_28612 = (state_28685[(2)]);
var state_28685__$1 = state_28685;
var statearr_28737_28802 = state_28685__$1;
(statearr_28737_28802[(2)] = inst_28612);

(statearr_28737_28802[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28686 === (2))){
var state_28685__$1 = state_28685;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28685__$1,(4),ch);
} else {
if((state_val_28686 === (23))){
var state_28685__$1 = state_28685;
var statearr_28738_28803 = state_28685__$1;
(statearr_28738_28803[(2)] = null);

(statearr_28738_28803[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28686 === (35))){
var inst_28667 = (state_28685[(2)]);
var state_28685__$1 = state_28685;
var statearr_28739_28804 = state_28685__$1;
(statearr_28739_28804[(2)] = inst_28667);

(statearr_28739_28804[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28686 === (19))){
var inst_28584 = (state_28685[(7)]);
var inst_28588 = cljs.core.chunk_first.call(null,inst_28584);
var inst_28589 = cljs.core.chunk_rest.call(null,inst_28584);
var inst_28590 = cljs.core.count.call(null,inst_28588);
var inst_28562 = inst_28589;
var inst_28563 = inst_28588;
var inst_28564 = inst_28590;
var inst_28565 = (0);
var state_28685__$1 = (function (){var statearr_28740 = state_28685;
(statearr_28740[(14)] = inst_28563);

(statearr_28740[(15)] = inst_28564);

(statearr_28740[(16)] = inst_28565);

(statearr_28740[(17)] = inst_28562);

return statearr_28740;
})();
var statearr_28741_28805 = state_28685__$1;
(statearr_28741_28805[(2)] = null);

(statearr_28741_28805[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28686 === (11))){
var inst_28584 = (state_28685[(7)]);
var inst_28562 = (state_28685[(17)]);
var inst_28584__$1 = cljs.core.seq.call(null,inst_28562);
var state_28685__$1 = (function (){var statearr_28742 = state_28685;
(statearr_28742[(7)] = inst_28584__$1);

return statearr_28742;
})();
if(inst_28584__$1){
var statearr_28743_28806 = state_28685__$1;
(statearr_28743_28806[(1)] = (16));

} else {
var statearr_28744_28807 = state_28685__$1;
(statearr_28744_28807[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28686 === (9))){
var inst_28614 = (state_28685[(2)]);
var state_28685__$1 = state_28685;
var statearr_28745_28808 = state_28685__$1;
(statearr_28745_28808[(2)] = inst_28614);

(statearr_28745_28808[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28686 === (5))){
var inst_28560 = cljs.core.deref.call(null,cs);
var inst_28561 = cljs.core.seq.call(null,inst_28560);
var inst_28562 = inst_28561;
var inst_28563 = null;
var inst_28564 = (0);
var inst_28565 = (0);
var state_28685__$1 = (function (){var statearr_28746 = state_28685;
(statearr_28746[(14)] = inst_28563);

(statearr_28746[(15)] = inst_28564);

(statearr_28746[(16)] = inst_28565);

(statearr_28746[(17)] = inst_28562);

return statearr_28746;
})();
var statearr_28747_28809 = state_28685__$1;
(statearr_28747_28809[(2)] = null);

(statearr_28747_28809[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28686 === (14))){
var state_28685__$1 = state_28685;
var statearr_28748_28810 = state_28685__$1;
(statearr_28748_28810[(2)] = null);

(statearr_28748_28810[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28686 === (45))){
var inst_28675 = (state_28685[(2)]);
var state_28685__$1 = state_28685;
var statearr_28749_28811 = state_28685__$1;
(statearr_28749_28811[(2)] = inst_28675);

(statearr_28749_28811[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28686 === (26))){
var inst_28617 = (state_28685[(29)]);
var inst_28671 = (state_28685[(2)]);
var inst_28672 = cljs.core.seq.call(null,inst_28617);
var state_28685__$1 = (function (){var statearr_28750 = state_28685;
(statearr_28750[(31)] = inst_28671);

return statearr_28750;
})();
if(inst_28672){
var statearr_28751_28812 = state_28685__$1;
(statearr_28751_28812[(1)] = (42));

} else {
var statearr_28752_28813 = state_28685__$1;
(statearr_28752_28813[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28686 === (16))){
var inst_28584 = (state_28685[(7)]);
var inst_28586 = cljs.core.chunked_seq_QMARK_.call(null,inst_28584);
var state_28685__$1 = state_28685;
if(inst_28586){
var statearr_28753_28814 = state_28685__$1;
(statearr_28753_28814[(1)] = (19));

} else {
var statearr_28754_28815 = state_28685__$1;
(statearr_28754_28815[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28686 === (38))){
var inst_28664 = (state_28685[(2)]);
var state_28685__$1 = state_28685;
var statearr_28755_28816 = state_28685__$1;
(statearr_28755_28816[(2)] = inst_28664);

(statearr_28755_28816[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28686 === (30))){
var state_28685__$1 = state_28685;
var statearr_28756_28817 = state_28685__$1;
(statearr_28756_28817[(2)] = null);

(statearr_28756_28817[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28686 === (10))){
var inst_28563 = (state_28685[(14)]);
var inst_28565 = (state_28685[(16)]);
var inst_28573 = cljs.core._nth.call(null,inst_28563,inst_28565);
var inst_28574 = cljs.core.nth.call(null,inst_28573,(0),null);
var inst_28575 = cljs.core.nth.call(null,inst_28573,(1),null);
var state_28685__$1 = (function (){var statearr_28757 = state_28685;
(statearr_28757[(26)] = inst_28574);

return statearr_28757;
})();
if(cljs.core.truth_(inst_28575)){
var statearr_28758_28818 = state_28685__$1;
(statearr_28758_28818[(1)] = (13));

} else {
var statearr_28759_28819 = state_28685__$1;
(statearr_28759_28819[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28686 === (18))){
var inst_28610 = (state_28685[(2)]);
var state_28685__$1 = state_28685;
var statearr_28760_28820 = state_28685__$1;
(statearr_28760_28820[(2)] = inst_28610);

(statearr_28760_28820[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28686 === (42))){
var state_28685__$1 = state_28685;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28685__$1,(45),dchan);
} else {
if((state_val_28686 === (37))){
var inst_28653 = (state_28685[(23)]);
var inst_28553 = (state_28685[(12)]);
var inst_28644 = (state_28685[(25)]);
var inst_28653__$1 = cljs.core.first.call(null,inst_28644);
var inst_28654 = cljs.core.async.put_BANG_.call(null,inst_28653__$1,inst_28553,done);
var state_28685__$1 = (function (){var statearr_28761 = state_28685;
(statearr_28761[(23)] = inst_28653__$1);

return statearr_28761;
})();
if(cljs.core.truth_(inst_28654)){
var statearr_28762_28821 = state_28685__$1;
(statearr_28762_28821[(1)] = (39));

} else {
var statearr_28763_28822 = state_28685__$1;
(statearr_28763_28822[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28686 === (8))){
var inst_28564 = (state_28685[(15)]);
var inst_28565 = (state_28685[(16)]);
var inst_28567 = (inst_28565 < inst_28564);
var inst_28568 = inst_28567;
var state_28685__$1 = state_28685;
if(cljs.core.truth_(inst_28568)){
var statearr_28764_28823 = state_28685__$1;
(statearr_28764_28823[(1)] = (10));

} else {
var statearr_28765_28824 = state_28685__$1;
(statearr_28765_28824[(1)] = (11));

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
});
return (function() {
var cljs$core$async$mult_$_state_machine__27856__auto__ = null;
var cljs$core$async$mult_$_state_machine__27856__auto____0 = (function (){
var statearr_28766 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28766[(0)] = cljs$core$async$mult_$_state_machine__27856__auto__);

(statearr_28766[(1)] = (1));

return statearr_28766;
});
var cljs$core$async$mult_$_state_machine__27856__auto____1 = (function (state_28685){
while(true){
var ret_value__27857__auto__ = (function (){try{while(true){
var result__27858__auto__ = switch__27855__auto__.call(null,state_28685);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27858__auto__;
}
break;
}
}catch (e28767){if((e28767 instanceof Object)){
var ex__27859__auto__ = e28767;
var statearr_28768_28825 = state_28685;
(statearr_28768_28825[(5)] = ex__27859__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28685);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28767;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28826 = state_28685;
state_28685 = G__28826;
continue;
} else {
return ret_value__27857__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__27856__auto__ = function(state_28685){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__27856__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__27856__auto____1.call(this,state_28685);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__27856__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__27856__auto____0;
cljs$core$async$mult_$_state_machine__27856__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__27856__auto____1;
return cljs$core$async$mult_$_state_machine__27856__auto__;
})()
})();
var state__27952__auto__ = (function (){var statearr_28769 = f__27951__auto__.call(null);
(statearr_28769[(6)] = c__27950__auto___28770);

return statearr_28769;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27952__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__28828 = arguments.length;
switch (G__28828) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,m,ch);
} else {
var m__4485__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,m,ch);
} else {
var m__4485__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,m);
} else {
var m__4485__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,m,state_map);
} else {
var m__4485__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,m,mode);
} else {
var m__4485__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___28840 = arguments.length;
var i__4790__auto___28841 = (0);
while(true){
if((i__4790__auto___28841 < len__4789__auto___28840)){
args__4795__auto__.push((arguments[i__4790__auto___28841]));

var G__28842 = (i__4790__auto___28841 + (1));
i__4790__auto___28841 = G__28842;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__28834){
var map__28835 = p__28834;
var map__28835__$1 = (((((!((map__28835 == null))))?(((((map__28835.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28835.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28835):map__28835);
var opts = map__28835__$1;
var statearr_28837_28843 = state;
(statearr_28837_28843[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts.call(null,(function (val){
var statearr_28838_28844 = state;
(statearr_28838_28844[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_28839_28845 = state;
(statearr_28839_28845[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq28830){
var G__28831 = cljs.core.first.call(null,seq28830);
var seq28830__$1 = cljs.core.next.call(null,seq28830);
var G__28832 = cljs.core.first.call(null,seq28830__$1);
var seq28830__$2 = cljs.core.next.call(null,seq28830__$1);
var G__28833 = cljs.core.first.call(null,seq28830__$2);
var seq28830__$3 = cljs.core.next.call(null,seq28830__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28831,G__28832,G__28833,seq28830__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv.call(null,(function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_.call(null,solos))))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28846 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28846 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta28847){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta28847 = meta28847;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28846.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28848,meta28847__$1){
var self__ = this;
var _28848__$1 = this;
return (new cljs.core.async.t_cljs$core$async28846(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta28847__$1));
}));

(cljs.core.async.t_cljs$core$async28846.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28848){
var self__ = this;
var _28848__$1 = this;
return self__.meta28847;
}));

(cljs.core.async.t_cljs$core$async28846.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28846.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async28846.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28846.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async28846.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async28846.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async28846.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async28846.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async28846.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta28847","meta28847",-962709615,null)], null);
}));

(cljs.core.async.t_cljs$core$async28846.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28846.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28846");

(cljs.core.async.t_cljs$core$async28846.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.core.async/t_cljs$core$async28846");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28846.
 */
cljs.core.async.__GT_t_cljs$core$async28846 = (function cljs$core$async$mix_$___GT_t_cljs$core$async28846(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta28847){
return (new cljs.core.async.t_cljs$core$async28846(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta28847));
});

}

return (new cljs.core.async.t_cljs$core$async28846(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27950__auto___29010 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27951__auto__ = (function (){var switch__27855__auto__ = (function (state_28950){
var state_val_28951 = (state_28950[(1)]);
if((state_val_28951 === (7))){
var inst_28865 = (state_28950[(2)]);
var state_28950__$1 = state_28950;
var statearr_28952_29011 = state_28950__$1;
(statearr_28952_29011[(2)] = inst_28865);

(statearr_28952_29011[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28951 === (20))){
var inst_28877 = (state_28950[(7)]);
var state_28950__$1 = state_28950;
var statearr_28953_29012 = state_28950__$1;
(statearr_28953_29012[(2)] = inst_28877);

(statearr_28953_29012[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28951 === (27))){
var state_28950__$1 = state_28950;
var statearr_28954_29013 = state_28950__$1;
(statearr_28954_29013[(2)] = null);

(statearr_28954_29013[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28951 === (1))){
var inst_28852 = (state_28950[(8)]);
var inst_28852__$1 = calc_state.call(null);
var inst_28854 = (inst_28852__$1 == null);
var inst_28855 = cljs.core.not.call(null,inst_28854);
var state_28950__$1 = (function (){var statearr_28955 = state_28950;
(statearr_28955[(8)] = inst_28852__$1);

return statearr_28955;
})();
if(inst_28855){
var statearr_28956_29014 = state_28950__$1;
(statearr_28956_29014[(1)] = (2));

} else {
var statearr_28957_29015 = state_28950__$1;
(statearr_28957_29015[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28951 === (24))){
var inst_28924 = (state_28950[(9)]);
var inst_28910 = (state_28950[(10)]);
var inst_28901 = (state_28950[(11)]);
var inst_28924__$1 = inst_28901.call(null,inst_28910);
var state_28950__$1 = (function (){var statearr_28958 = state_28950;
(statearr_28958[(9)] = inst_28924__$1);

return statearr_28958;
})();
if(cljs.core.truth_(inst_28924__$1)){
var statearr_28959_29016 = state_28950__$1;
(statearr_28959_29016[(1)] = (29));

} else {
var statearr_28960_29017 = state_28950__$1;
(statearr_28960_29017[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28951 === (4))){
var inst_28868 = (state_28950[(2)]);
var state_28950__$1 = state_28950;
if(cljs.core.truth_(inst_28868)){
var statearr_28961_29018 = state_28950__$1;
(statearr_28961_29018[(1)] = (8));

} else {
var statearr_28962_29019 = state_28950__$1;
(statearr_28962_29019[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28951 === (15))){
var inst_28895 = (state_28950[(2)]);
var state_28950__$1 = state_28950;
if(cljs.core.truth_(inst_28895)){
var statearr_28963_29020 = state_28950__$1;
(statearr_28963_29020[(1)] = (19));

} else {
var statearr_28964_29021 = state_28950__$1;
(statearr_28964_29021[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28951 === (21))){
var inst_28900 = (state_28950[(12)]);
var inst_28900__$1 = (state_28950[(2)]);
var inst_28901 = cljs.core.get.call(null,inst_28900__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28902 = cljs.core.get.call(null,inst_28900__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28903 = cljs.core.get.call(null,inst_28900__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_28950__$1 = (function (){var statearr_28965 = state_28950;
(statearr_28965[(12)] = inst_28900__$1);

(statearr_28965[(13)] = inst_28902);

(statearr_28965[(11)] = inst_28901);

return statearr_28965;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_28950__$1,(22),inst_28903);
} else {
if((state_val_28951 === (31))){
var inst_28932 = (state_28950[(2)]);
var state_28950__$1 = state_28950;
if(cljs.core.truth_(inst_28932)){
var statearr_28966_29022 = state_28950__$1;
(statearr_28966_29022[(1)] = (32));

} else {
var statearr_28967_29023 = state_28950__$1;
(statearr_28967_29023[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28951 === (32))){
var inst_28909 = (state_28950[(14)]);
var state_28950__$1 = state_28950;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28950__$1,(35),out,inst_28909);
} else {
if((state_val_28951 === (33))){
var inst_28900 = (state_28950[(12)]);
var inst_28877 = inst_28900;
var state_28950__$1 = (function (){var statearr_28968 = state_28950;
(statearr_28968[(7)] = inst_28877);

return statearr_28968;
})();
var statearr_28969_29024 = state_28950__$1;
(statearr_28969_29024[(2)] = null);

(statearr_28969_29024[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28951 === (13))){
var inst_28877 = (state_28950[(7)]);
var inst_28884 = inst_28877.cljs$lang$protocol_mask$partition0$;
var inst_28885 = (inst_28884 & (64));
var inst_28886 = inst_28877.cljs$core$ISeq$;
var inst_28887 = (cljs.core.PROTOCOL_SENTINEL === inst_28886);
var inst_28888 = ((inst_28885) || (inst_28887));
var state_28950__$1 = state_28950;
if(cljs.core.truth_(inst_28888)){
var statearr_28970_29025 = state_28950__$1;
(statearr_28970_29025[(1)] = (16));

} else {
var statearr_28971_29026 = state_28950__$1;
(statearr_28971_29026[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28951 === (22))){
var inst_28910 = (state_28950[(10)]);
var inst_28909 = (state_28950[(14)]);
var inst_28908 = (state_28950[(2)]);
var inst_28909__$1 = cljs.core.nth.call(null,inst_28908,(0),null);
var inst_28910__$1 = cljs.core.nth.call(null,inst_28908,(1),null);
var inst_28911 = (inst_28909__$1 == null);
var inst_28912 = cljs.core._EQ_.call(null,inst_28910__$1,change);
var inst_28913 = ((inst_28911) || (inst_28912));
var state_28950__$1 = (function (){var statearr_28972 = state_28950;
(statearr_28972[(10)] = inst_28910__$1);

(statearr_28972[(14)] = inst_28909__$1);

return statearr_28972;
})();
if(cljs.core.truth_(inst_28913)){
var statearr_28973_29027 = state_28950__$1;
(statearr_28973_29027[(1)] = (23));

} else {
var statearr_28974_29028 = state_28950__$1;
(statearr_28974_29028[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28951 === (36))){
var inst_28900 = (state_28950[(12)]);
var inst_28877 = inst_28900;
var state_28950__$1 = (function (){var statearr_28975 = state_28950;
(statearr_28975[(7)] = inst_28877);

return statearr_28975;
})();
var statearr_28976_29029 = state_28950__$1;
(statearr_28976_29029[(2)] = null);

(statearr_28976_29029[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28951 === (29))){
var inst_28924 = (state_28950[(9)]);
var state_28950__$1 = state_28950;
var statearr_28977_29030 = state_28950__$1;
(statearr_28977_29030[(2)] = inst_28924);

(statearr_28977_29030[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28951 === (6))){
var state_28950__$1 = state_28950;
var statearr_28978_29031 = state_28950__$1;
(statearr_28978_29031[(2)] = false);

(statearr_28978_29031[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28951 === (28))){
var inst_28920 = (state_28950[(2)]);
var inst_28921 = calc_state.call(null);
var inst_28877 = inst_28921;
var state_28950__$1 = (function (){var statearr_28979 = state_28950;
(statearr_28979[(15)] = inst_28920);

(statearr_28979[(7)] = inst_28877);

return statearr_28979;
})();
var statearr_28980_29032 = state_28950__$1;
(statearr_28980_29032[(2)] = null);

(statearr_28980_29032[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28951 === (25))){
var inst_28946 = (state_28950[(2)]);
var state_28950__$1 = state_28950;
var statearr_28981_29033 = state_28950__$1;
(statearr_28981_29033[(2)] = inst_28946);

(statearr_28981_29033[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28951 === (34))){
var inst_28944 = (state_28950[(2)]);
var state_28950__$1 = state_28950;
var statearr_28982_29034 = state_28950__$1;
(statearr_28982_29034[(2)] = inst_28944);

(statearr_28982_29034[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28951 === (17))){
var state_28950__$1 = state_28950;
var statearr_28983_29035 = state_28950__$1;
(statearr_28983_29035[(2)] = false);

(statearr_28983_29035[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28951 === (3))){
var state_28950__$1 = state_28950;
var statearr_28984_29036 = state_28950__$1;
(statearr_28984_29036[(2)] = false);

(statearr_28984_29036[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28951 === (12))){
var inst_28948 = (state_28950[(2)]);
var state_28950__$1 = state_28950;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28950__$1,inst_28948);
} else {
if((state_val_28951 === (2))){
var inst_28852 = (state_28950[(8)]);
var inst_28857 = inst_28852.cljs$lang$protocol_mask$partition0$;
var inst_28858 = (inst_28857 & (64));
var inst_28859 = inst_28852.cljs$core$ISeq$;
var inst_28860 = (cljs.core.PROTOCOL_SENTINEL === inst_28859);
var inst_28861 = ((inst_28858) || (inst_28860));
var state_28950__$1 = state_28950;
if(cljs.core.truth_(inst_28861)){
var statearr_28985_29037 = state_28950__$1;
(statearr_28985_29037[(1)] = (5));

} else {
var statearr_28986_29038 = state_28950__$1;
(statearr_28986_29038[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28951 === (23))){
var inst_28909 = (state_28950[(14)]);
var inst_28915 = (inst_28909 == null);
var state_28950__$1 = state_28950;
if(cljs.core.truth_(inst_28915)){
var statearr_28987_29039 = state_28950__$1;
(statearr_28987_29039[(1)] = (26));

} else {
var statearr_28988_29040 = state_28950__$1;
(statearr_28988_29040[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28951 === (35))){
var inst_28935 = (state_28950[(2)]);
var state_28950__$1 = state_28950;
if(cljs.core.truth_(inst_28935)){
var statearr_28989_29041 = state_28950__$1;
(statearr_28989_29041[(1)] = (36));

} else {
var statearr_28990_29042 = state_28950__$1;
(statearr_28990_29042[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28951 === (19))){
var inst_28877 = (state_28950[(7)]);
var inst_28897 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28877);
var state_28950__$1 = state_28950;
var statearr_28991_29043 = state_28950__$1;
(statearr_28991_29043[(2)] = inst_28897);

(statearr_28991_29043[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28951 === (11))){
var inst_28877 = (state_28950[(7)]);
var inst_28881 = (inst_28877 == null);
var inst_28882 = cljs.core.not.call(null,inst_28881);
var state_28950__$1 = state_28950;
if(inst_28882){
var statearr_28992_29044 = state_28950__$1;
(statearr_28992_29044[(1)] = (13));

} else {
var statearr_28993_29045 = state_28950__$1;
(statearr_28993_29045[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28951 === (9))){
var inst_28852 = (state_28950[(8)]);
var state_28950__$1 = state_28950;
var statearr_28994_29046 = state_28950__$1;
(statearr_28994_29046[(2)] = inst_28852);

(statearr_28994_29046[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28951 === (5))){
var state_28950__$1 = state_28950;
var statearr_28995_29047 = state_28950__$1;
(statearr_28995_29047[(2)] = true);

(statearr_28995_29047[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28951 === (14))){
var state_28950__$1 = state_28950;
var statearr_28996_29048 = state_28950__$1;
(statearr_28996_29048[(2)] = false);

(statearr_28996_29048[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28951 === (26))){
var inst_28910 = (state_28950[(10)]);
var inst_28917 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_28910);
var state_28950__$1 = state_28950;
var statearr_28997_29049 = state_28950__$1;
(statearr_28997_29049[(2)] = inst_28917);

(statearr_28997_29049[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28951 === (16))){
var state_28950__$1 = state_28950;
var statearr_28998_29050 = state_28950__$1;
(statearr_28998_29050[(2)] = true);

(statearr_28998_29050[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28951 === (38))){
var inst_28940 = (state_28950[(2)]);
var state_28950__$1 = state_28950;
var statearr_28999_29051 = state_28950__$1;
(statearr_28999_29051[(2)] = inst_28940);

(statearr_28999_29051[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28951 === (30))){
var inst_28902 = (state_28950[(13)]);
var inst_28910 = (state_28950[(10)]);
var inst_28901 = (state_28950[(11)]);
var inst_28927 = cljs.core.empty_QMARK_.call(null,inst_28901);
var inst_28928 = inst_28902.call(null,inst_28910);
var inst_28929 = cljs.core.not.call(null,inst_28928);
var inst_28930 = ((inst_28927) && (inst_28929));
var state_28950__$1 = state_28950;
var statearr_29000_29052 = state_28950__$1;
(statearr_29000_29052[(2)] = inst_28930);

(statearr_29000_29052[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28951 === (10))){
var inst_28852 = (state_28950[(8)]);
var inst_28873 = (state_28950[(2)]);
var inst_28874 = cljs.core.get.call(null,inst_28873,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28875 = cljs.core.get.call(null,inst_28873,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28876 = cljs.core.get.call(null,inst_28873,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_28877 = inst_28852;
var state_28950__$1 = (function (){var statearr_29001 = state_28950;
(statearr_29001[(7)] = inst_28877);

(statearr_29001[(16)] = inst_28874);

(statearr_29001[(17)] = inst_28876);

(statearr_29001[(18)] = inst_28875);

return statearr_29001;
})();
var statearr_29002_29053 = state_28950__$1;
(statearr_29002_29053[(2)] = null);

(statearr_29002_29053[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28951 === (18))){
var inst_28892 = (state_28950[(2)]);
var state_28950__$1 = state_28950;
var statearr_29003_29054 = state_28950__$1;
(statearr_29003_29054[(2)] = inst_28892);

(statearr_29003_29054[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28951 === (37))){
var state_28950__$1 = state_28950;
var statearr_29004_29055 = state_28950__$1;
(statearr_29004_29055[(2)] = null);

(statearr_29004_29055[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28951 === (8))){
var inst_28852 = (state_28950[(8)]);
var inst_28870 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28852);
var state_28950__$1 = state_28950;
var statearr_29005_29056 = state_28950__$1;
(statearr_29005_29056[(2)] = inst_28870);

(statearr_29005_29056[(1)] = (10));


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
});
return (function() {
var cljs$core$async$mix_$_state_machine__27856__auto__ = null;
var cljs$core$async$mix_$_state_machine__27856__auto____0 = (function (){
var statearr_29006 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29006[(0)] = cljs$core$async$mix_$_state_machine__27856__auto__);

(statearr_29006[(1)] = (1));

return statearr_29006;
});
var cljs$core$async$mix_$_state_machine__27856__auto____1 = (function (state_28950){
while(true){
var ret_value__27857__auto__ = (function (){try{while(true){
var result__27858__auto__ = switch__27855__auto__.call(null,state_28950);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27858__auto__;
}
break;
}
}catch (e29007){if((e29007 instanceof Object)){
var ex__27859__auto__ = e29007;
var statearr_29008_29057 = state_28950;
(statearr_29008_29057[(5)] = ex__27859__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28950);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29007;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29058 = state_28950;
state_28950 = G__29058;
continue;
} else {
return ret_value__27857__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__27856__auto__ = function(state_28950){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__27856__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__27856__auto____1.call(this,state_28950);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__27856__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__27856__auto____0;
cljs$core$async$mix_$_state_machine__27856__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__27856__auto____1;
return cljs$core$async$mix_$_state_machine__27856__auto__;
})()
})();
var state__27952__auto__ = (function (){var statearr_29009 = f__27951__auto__.call(null);
(statearr_29009[(6)] = c__27950__auto___29010);

return statearr_29009;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27952__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4485__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,p,v,ch);
} else {
var m__4485__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__29060 = arguments.length;
switch (G__29060) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,p);
} else {
var m__4485__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,p,v);
} else {
var m__4485__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__29064 = arguments.length;
switch (G__29064) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4185__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,(function (p1__29062_SHARP_){
if(cljs.core.truth_(p1__29062_SHARP_.call(null,topic))){
return p1__29062_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__29062_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29065 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29065 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta29066){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta29066 = meta29066;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29065.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29067,meta29066__$1){
var self__ = this;
var _29067__$1 = this;
return (new cljs.core.async.t_cljs$core$async29065(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta29066__$1));
}));

(cljs.core.async.t_cljs$core$async29065.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29067){
var self__ = this;
var _29067__$1 = this;
return self__.meta29066;
}));

(cljs.core.async.t_cljs$core$async29065.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29065.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async29065.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29065.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async29065.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async29065.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async29065.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async29065.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta29066","meta29066",-1041163106,null)], null);
}));

(cljs.core.async.t_cljs$core$async29065.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29065.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29065");

(cljs.core.async.t_cljs$core$async29065.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.core.async/t_cljs$core$async29065");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29065.
 */
cljs.core.async.__GT_t_cljs$core$async29065 = (function cljs$core$async$__GT_t_cljs$core$async29065(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta29066){
return (new cljs.core.async.t_cljs$core$async29065(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta29066));
});

}

return (new cljs.core.async.t_cljs$core$async29065(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27950__auto___29185 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27951__auto__ = (function (){var switch__27855__auto__ = (function (state_29139){
var state_val_29140 = (state_29139[(1)]);
if((state_val_29140 === (7))){
var inst_29135 = (state_29139[(2)]);
var state_29139__$1 = state_29139;
var statearr_29141_29186 = state_29139__$1;
(statearr_29141_29186[(2)] = inst_29135);

(statearr_29141_29186[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29140 === (20))){
var state_29139__$1 = state_29139;
var statearr_29142_29187 = state_29139__$1;
(statearr_29142_29187[(2)] = null);

(statearr_29142_29187[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29140 === (1))){
var state_29139__$1 = state_29139;
var statearr_29143_29188 = state_29139__$1;
(statearr_29143_29188[(2)] = null);

(statearr_29143_29188[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29140 === (24))){
var inst_29118 = (state_29139[(7)]);
var inst_29127 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_29118);
var state_29139__$1 = state_29139;
var statearr_29144_29189 = state_29139__$1;
(statearr_29144_29189[(2)] = inst_29127);

(statearr_29144_29189[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29140 === (4))){
var inst_29070 = (state_29139[(8)]);
var inst_29070__$1 = (state_29139[(2)]);
var inst_29071 = (inst_29070__$1 == null);
var state_29139__$1 = (function (){var statearr_29145 = state_29139;
(statearr_29145[(8)] = inst_29070__$1);

return statearr_29145;
})();
if(cljs.core.truth_(inst_29071)){
var statearr_29146_29190 = state_29139__$1;
(statearr_29146_29190[(1)] = (5));

} else {
var statearr_29147_29191 = state_29139__$1;
(statearr_29147_29191[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29140 === (15))){
var inst_29112 = (state_29139[(2)]);
var state_29139__$1 = state_29139;
var statearr_29148_29192 = state_29139__$1;
(statearr_29148_29192[(2)] = inst_29112);

(statearr_29148_29192[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29140 === (21))){
var inst_29132 = (state_29139[(2)]);
var state_29139__$1 = (function (){var statearr_29149 = state_29139;
(statearr_29149[(9)] = inst_29132);

return statearr_29149;
})();
var statearr_29150_29193 = state_29139__$1;
(statearr_29150_29193[(2)] = null);

(statearr_29150_29193[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29140 === (13))){
var inst_29094 = (state_29139[(10)]);
var inst_29096 = cljs.core.chunked_seq_QMARK_.call(null,inst_29094);
var state_29139__$1 = state_29139;
if(inst_29096){
var statearr_29151_29194 = state_29139__$1;
(statearr_29151_29194[(1)] = (16));

} else {
var statearr_29152_29195 = state_29139__$1;
(statearr_29152_29195[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29140 === (22))){
var inst_29124 = (state_29139[(2)]);
var state_29139__$1 = state_29139;
if(cljs.core.truth_(inst_29124)){
var statearr_29153_29196 = state_29139__$1;
(statearr_29153_29196[(1)] = (23));

} else {
var statearr_29154_29197 = state_29139__$1;
(statearr_29154_29197[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29140 === (6))){
var inst_29118 = (state_29139[(7)]);
var inst_29070 = (state_29139[(8)]);
var inst_29120 = (state_29139[(11)]);
var inst_29118__$1 = topic_fn.call(null,inst_29070);
var inst_29119 = cljs.core.deref.call(null,mults);
var inst_29120__$1 = cljs.core.get.call(null,inst_29119,inst_29118__$1);
var state_29139__$1 = (function (){var statearr_29155 = state_29139;
(statearr_29155[(7)] = inst_29118__$1);

(statearr_29155[(11)] = inst_29120__$1);

return statearr_29155;
})();
if(cljs.core.truth_(inst_29120__$1)){
var statearr_29156_29198 = state_29139__$1;
(statearr_29156_29198[(1)] = (19));

} else {
var statearr_29157_29199 = state_29139__$1;
(statearr_29157_29199[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29140 === (25))){
var inst_29129 = (state_29139[(2)]);
var state_29139__$1 = state_29139;
var statearr_29158_29200 = state_29139__$1;
(statearr_29158_29200[(2)] = inst_29129);

(statearr_29158_29200[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29140 === (17))){
var inst_29094 = (state_29139[(10)]);
var inst_29103 = cljs.core.first.call(null,inst_29094);
var inst_29104 = cljs.core.async.muxch_STAR_.call(null,inst_29103);
var inst_29105 = cljs.core.async.close_BANG_.call(null,inst_29104);
var inst_29106 = cljs.core.next.call(null,inst_29094);
var inst_29080 = inst_29106;
var inst_29081 = null;
var inst_29082 = (0);
var inst_29083 = (0);
var state_29139__$1 = (function (){var statearr_29159 = state_29139;
(statearr_29159[(12)] = inst_29105);

(statearr_29159[(13)] = inst_29083);

(statearr_29159[(14)] = inst_29082);

(statearr_29159[(15)] = inst_29080);

(statearr_29159[(16)] = inst_29081);

return statearr_29159;
})();
var statearr_29160_29201 = state_29139__$1;
(statearr_29160_29201[(2)] = null);

(statearr_29160_29201[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29140 === (3))){
var inst_29137 = (state_29139[(2)]);
var state_29139__$1 = state_29139;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29139__$1,inst_29137);
} else {
if((state_val_29140 === (12))){
var inst_29114 = (state_29139[(2)]);
var state_29139__$1 = state_29139;
var statearr_29161_29202 = state_29139__$1;
(statearr_29161_29202[(2)] = inst_29114);

(statearr_29161_29202[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29140 === (2))){
var state_29139__$1 = state_29139;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29139__$1,(4),ch);
} else {
if((state_val_29140 === (23))){
var state_29139__$1 = state_29139;
var statearr_29162_29203 = state_29139__$1;
(statearr_29162_29203[(2)] = null);

(statearr_29162_29203[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29140 === (19))){
var inst_29070 = (state_29139[(8)]);
var inst_29120 = (state_29139[(11)]);
var inst_29122 = cljs.core.async.muxch_STAR_.call(null,inst_29120);
var state_29139__$1 = state_29139;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29139__$1,(22),inst_29122,inst_29070);
} else {
if((state_val_29140 === (11))){
var inst_29094 = (state_29139[(10)]);
var inst_29080 = (state_29139[(15)]);
var inst_29094__$1 = cljs.core.seq.call(null,inst_29080);
var state_29139__$1 = (function (){var statearr_29163 = state_29139;
(statearr_29163[(10)] = inst_29094__$1);

return statearr_29163;
})();
if(inst_29094__$1){
var statearr_29164_29204 = state_29139__$1;
(statearr_29164_29204[(1)] = (13));

} else {
var statearr_29165_29205 = state_29139__$1;
(statearr_29165_29205[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29140 === (9))){
var inst_29116 = (state_29139[(2)]);
var state_29139__$1 = state_29139;
var statearr_29166_29206 = state_29139__$1;
(statearr_29166_29206[(2)] = inst_29116);

(statearr_29166_29206[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29140 === (5))){
var inst_29077 = cljs.core.deref.call(null,mults);
var inst_29078 = cljs.core.vals.call(null,inst_29077);
var inst_29079 = cljs.core.seq.call(null,inst_29078);
var inst_29080 = inst_29079;
var inst_29081 = null;
var inst_29082 = (0);
var inst_29083 = (0);
var state_29139__$1 = (function (){var statearr_29167 = state_29139;
(statearr_29167[(13)] = inst_29083);

(statearr_29167[(14)] = inst_29082);

(statearr_29167[(15)] = inst_29080);

(statearr_29167[(16)] = inst_29081);

return statearr_29167;
})();
var statearr_29168_29207 = state_29139__$1;
(statearr_29168_29207[(2)] = null);

(statearr_29168_29207[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29140 === (14))){
var state_29139__$1 = state_29139;
var statearr_29172_29208 = state_29139__$1;
(statearr_29172_29208[(2)] = null);

(statearr_29172_29208[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29140 === (16))){
var inst_29094 = (state_29139[(10)]);
var inst_29098 = cljs.core.chunk_first.call(null,inst_29094);
var inst_29099 = cljs.core.chunk_rest.call(null,inst_29094);
var inst_29100 = cljs.core.count.call(null,inst_29098);
var inst_29080 = inst_29099;
var inst_29081 = inst_29098;
var inst_29082 = inst_29100;
var inst_29083 = (0);
var state_29139__$1 = (function (){var statearr_29173 = state_29139;
(statearr_29173[(13)] = inst_29083);

(statearr_29173[(14)] = inst_29082);

(statearr_29173[(15)] = inst_29080);

(statearr_29173[(16)] = inst_29081);

return statearr_29173;
})();
var statearr_29174_29209 = state_29139__$1;
(statearr_29174_29209[(2)] = null);

(statearr_29174_29209[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29140 === (10))){
var inst_29083 = (state_29139[(13)]);
var inst_29082 = (state_29139[(14)]);
var inst_29080 = (state_29139[(15)]);
var inst_29081 = (state_29139[(16)]);
var inst_29088 = cljs.core._nth.call(null,inst_29081,inst_29083);
var inst_29089 = cljs.core.async.muxch_STAR_.call(null,inst_29088);
var inst_29090 = cljs.core.async.close_BANG_.call(null,inst_29089);
var inst_29091 = (inst_29083 + (1));
var tmp29169 = inst_29082;
var tmp29170 = inst_29080;
var tmp29171 = inst_29081;
var inst_29080__$1 = tmp29170;
var inst_29081__$1 = tmp29171;
var inst_29082__$1 = tmp29169;
var inst_29083__$1 = inst_29091;
var state_29139__$1 = (function (){var statearr_29175 = state_29139;
(statearr_29175[(13)] = inst_29083__$1);

(statearr_29175[(14)] = inst_29082__$1);

(statearr_29175[(15)] = inst_29080__$1);

(statearr_29175[(16)] = inst_29081__$1);

(statearr_29175[(17)] = inst_29090);

return statearr_29175;
})();
var statearr_29176_29210 = state_29139__$1;
(statearr_29176_29210[(2)] = null);

(statearr_29176_29210[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29140 === (18))){
var inst_29109 = (state_29139[(2)]);
var state_29139__$1 = state_29139;
var statearr_29177_29211 = state_29139__$1;
(statearr_29177_29211[(2)] = inst_29109);

(statearr_29177_29211[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29140 === (8))){
var inst_29083 = (state_29139[(13)]);
var inst_29082 = (state_29139[(14)]);
var inst_29085 = (inst_29083 < inst_29082);
var inst_29086 = inst_29085;
var state_29139__$1 = state_29139;
if(cljs.core.truth_(inst_29086)){
var statearr_29178_29212 = state_29139__$1;
(statearr_29178_29212[(1)] = (10));

} else {
var statearr_29179_29213 = state_29139__$1;
(statearr_29179_29213[(1)] = (11));

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
});
return (function() {
var cljs$core$async$state_machine__27856__auto__ = null;
var cljs$core$async$state_machine__27856__auto____0 = (function (){
var statearr_29180 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29180[(0)] = cljs$core$async$state_machine__27856__auto__);

(statearr_29180[(1)] = (1));

return statearr_29180;
});
var cljs$core$async$state_machine__27856__auto____1 = (function (state_29139){
while(true){
var ret_value__27857__auto__ = (function (){try{while(true){
var result__27858__auto__ = switch__27855__auto__.call(null,state_29139);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27858__auto__;
}
break;
}
}catch (e29181){if((e29181 instanceof Object)){
var ex__27859__auto__ = e29181;
var statearr_29182_29214 = state_29139;
(statearr_29182_29214[(5)] = ex__27859__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29139);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29181;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29215 = state_29139;
state_29139 = G__29215;
continue;
} else {
return ret_value__27857__auto__;
}
break;
}
});
cljs$core$async$state_machine__27856__auto__ = function(state_29139){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27856__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27856__auto____1.call(this,state_29139);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27856__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27856__auto____0;
cljs$core$async$state_machine__27856__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27856__auto____1;
return cljs$core$async$state_machine__27856__auto__;
})()
})();
var state__27952__auto__ = (function (){var statearr_29183 = f__27951__auto__.call(null);
(statearr_29183[(6)] = c__27950__auto___29185);

return statearr_29183;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27952__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__29217 = arguments.length;
switch (G__29217) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__29220 = arguments.length;
switch (G__29220) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__29223 = arguments.length;
switch (G__29223) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,(function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.call(null,cnt));
var c__27950__auto___29290 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27951__auto__ = (function (){var switch__27855__auto__ = (function (state_29262){
var state_val_29263 = (state_29262[(1)]);
if((state_val_29263 === (7))){
var state_29262__$1 = state_29262;
var statearr_29264_29291 = state_29262__$1;
(statearr_29264_29291[(2)] = null);

(statearr_29264_29291[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29263 === (1))){
var state_29262__$1 = state_29262;
var statearr_29265_29292 = state_29262__$1;
(statearr_29265_29292[(2)] = null);

(statearr_29265_29292[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29263 === (4))){
var inst_29226 = (state_29262[(7)]);
var inst_29228 = (inst_29226 < cnt);
var state_29262__$1 = state_29262;
if(cljs.core.truth_(inst_29228)){
var statearr_29266_29293 = state_29262__$1;
(statearr_29266_29293[(1)] = (6));

} else {
var statearr_29267_29294 = state_29262__$1;
(statearr_29267_29294[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29263 === (15))){
var inst_29258 = (state_29262[(2)]);
var state_29262__$1 = state_29262;
var statearr_29268_29295 = state_29262__$1;
(statearr_29268_29295[(2)] = inst_29258);

(statearr_29268_29295[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29263 === (13))){
var inst_29251 = cljs.core.async.close_BANG_.call(null,out);
var state_29262__$1 = state_29262;
var statearr_29269_29296 = state_29262__$1;
(statearr_29269_29296[(2)] = inst_29251);

(statearr_29269_29296[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29263 === (6))){
var state_29262__$1 = state_29262;
var statearr_29270_29297 = state_29262__$1;
(statearr_29270_29297[(2)] = null);

(statearr_29270_29297[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29263 === (3))){
var inst_29260 = (state_29262[(2)]);
var state_29262__$1 = state_29262;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29262__$1,inst_29260);
} else {
if((state_val_29263 === (12))){
var inst_29248 = (state_29262[(8)]);
var inst_29248__$1 = (state_29262[(2)]);
var inst_29249 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_29248__$1);
var state_29262__$1 = (function (){var statearr_29271 = state_29262;
(statearr_29271[(8)] = inst_29248__$1);

return statearr_29271;
})();
if(cljs.core.truth_(inst_29249)){
var statearr_29272_29298 = state_29262__$1;
(statearr_29272_29298[(1)] = (13));

} else {
var statearr_29273_29299 = state_29262__$1;
(statearr_29273_29299[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29263 === (2))){
var inst_29225 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_29226 = (0);
var state_29262__$1 = (function (){var statearr_29274 = state_29262;
(statearr_29274[(7)] = inst_29226);

(statearr_29274[(9)] = inst_29225);

return statearr_29274;
})();
var statearr_29275_29300 = state_29262__$1;
(statearr_29275_29300[(2)] = null);

(statearr_29275_29300[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29263 === (11))){
var inst_29226 = (state_29262[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29262,(10),Object,null,(9));
var inst_29235 = chs__$1.call(null,inst_29226);
var inst_29236 = done.call(null,inst_29226);
var inst_29237 = cljs.core.async.take_BANG_.call(null,inst_29235,inst_29236);
var state_29262__$1 = state_29262;
var statearr_29276_29301 = state_29262__$1;
(statearr_29276_29301[(2)] = inst_29237);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29262__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29263 === (9))){
var inst_29226 = (state_29262[(7)]);
var inst_29239 = (state_29262[(2)]);
var inst_29240 = (inst_29226 + (1));
var inst_29226__$1 = inst_29240;
var state_29262__$1 = (function (){var statearr_29277 = state_29262;
(statearr_29277[(10)] = inst_29239);

(statearr_29277[(7)] = inst_29226__$1);

return statearr_29277;
})();
var statearr_29278_29302 = state_29262__$1;
(statearr_29278_29302[(2)] = null);

(statearr_29278_29302[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29263 === (5))){
var inst_29246 = (state_29262[(2)]);
var state_29262__$1 = (function (){var statearr_29279 = state_29262;
(statearr_29279[(11)] = inst_29246);

return statearr_29279;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29262__$1,(12),dchan);
} else {
if((state_val_29263 === (14))){
var inst_29248 = (state_29262[(8)]);
var inst_29253 = cljs.core.apply.call(null,f,inst_29248);
var state_29262__$1 = state_29262;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29262__$1,(16),out,inst_29253);
} else {
if((state_val_29263 === (16))){
var inst_29255 = (state_29262[(2)]);
var state_29262__$1 = (function (){var statearr_29280 = state_29262;
(statearr_29280[(12)] = inst_29255);

return statearr_29280;
})();
var statearr_29281_29303 = state_29262__$1;
(statearr_29281_29303[(2)] = null);

(statearr_29281_29303[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29263 === (10))){
var inst_29230 = (state_29262[(2)]);
var inst_29231 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_29262__$1 = (function (){var statearr_29282 = state_29262;
(statearr_29282[(13)] = inst_29230);

return statearr_29282;
})();
var statearr_29283_29304 = state_29262__$1;
(statearr_29283_29304[(2)] = inst_29231);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29262__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29263 === (8))){
var inst_29244 = (state_29262[(2)]);
var state_29262__$1 = state_29262;
var statearr_29284_29305 = state_29262__$1;
(statearr_29284_29305[(2)] = inst_29244);

(statearr_29284_29305[(1)] = (5));


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
});
return (function() {
var cljs$core$async$state_machine__27856__auto__ = null;
var cljs$core$async$state_machine__27856__auto____0 = (function (){
var statearr_29285 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29285[(0)] = cljs$core$async$state_machine__27856__auto__);

(statearr_29285[(1)] = (1));

return statearr_29285;
});
var cljs$core$async$state_machine__27856__auto____1 = (function (state_29262){
while(true){
var ret_value__27857__auto__ = (function (){try{while(true){
var result__27858__auto__ = switch__27855__auto__.call(null,state_29262);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27858__auto__;
}
break;
}
}catch (e29286){if((e29286 instanceof Object)){
var ex__27859__auto__ = e29286;
var statearr_29287_29306 = state_29262;
(statearr_29287_29306[(5)] = ex__27859__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29262);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29286;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29307 = state_29262;
state_29262 = G__29307;
continue;
} else {
return ret_value__27857__auto__;
}
break;
}
});
cljs$core$async$state_machine__27856__auto__ = function(state_29262){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27856__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27856__auto____1.call(this,state_29262);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27856__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27856__auto____0;
cljs$core$async$state_machine__27856__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27856__auto____1;
return cljs$core$async$state_machine__27856__auto__;
})()
})();
var state__27952__auto__ = (function (){var statearr_29288 = f__27951__auto__.call(null);
(statearr_29288[(6)] = c__27950__auto___29290);

return statearr_29288;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27952__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__29310 = arguments.length;
switch (G__29310) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27950__auto___29364 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27951__auto__ = (function (){var switch__27855__auto__ = (function (state_29342){
var state_val_29343 = (state_29342[(1)]);
if((state_val_29343 === (7))){
var inst_29321 = (state_29342[(7)]);
var inst_29322 = (state_29342[(8)]);
var inst_29321__$1 = (state_29342[(2)]);
var inst_29322__$1 = cljs.core.nth.call(null,inst_29321__$1,(0),null);
var inst_29323 = cljs.core.nth.call(null,inst_29321__$1,(1),null);
var inst_29324 = (inst_29322__$1 == null);
var state_29342__$1 = (function (){var statearr_29344 = state_29342;
(statearr_29344[(7)] = inst_29321__$1);

(statearr_29344[(9)] = inst_29323);

(statearr_29344[(8)] = inst_29322__$1);

return statearr_29344;
})();
if(cljs.core.truth_(inst_29324)){
var statearr_29345_29365 = state_29342__$1;
(statearr_29345_29365[(1)] = (8));

} else {
var statearr_29346_29366 = state_29342__$1;
(statearr_29346_29366[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29343 === (1))){
var inst_29311 = cljs.core.vec.call(null,chs);
var inst_29312 = inst_29311;
var state_29342__$1 = (function (){var statearr_29347 = state_29342;
(statearr_29347[(10)] = inst_29312);

return statearr_29347;
})();
var statearr_29348_29367 = state_29342__$1;
(statearr_29348_29367[(2)] = null);

(statearr_29348_29367[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29343 === (4))){
var inst_29312 = (state_29342[(10)]);
var state_29342__$1 = state_29342;
return cljs.core.async.ioc_alts_BANG_.call(null,state_29342__$1,(7),inst_29312);
} else {
if((state_val_29343 === (6))){
var inst_29338 = (state_29342[(2)]);
var state_29342__$1 = state_29342;
var statearr_29349_29368 = state_29342__$1;
(statearr_29349_29368[(2)] = inst_29338);

(statearr_29349_29368[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29343 === (3))){
var inst_29340 = (state_29342[(2)]);
var state_29342__$1 = state_29342;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29342__$1,inst_29340);
} else {
if((state_val_29343 === (2))){
var inst_29312 = (state_29342[(10)]);
var inst_29314 = cljs.core.count.call(null,inst_29312);
var inst_29315 = (inst_29314 > (0));
var state_29342__$1 = state_29342;
if(cljs.core.truth_(inst_29315)){
var statearr_29351_29369 = state_29342__$1;
(statearr_29351_29369[(1)] = (4));

} else {
var statearr_29352_29370 = state_29342__$1;
(statearr_29352_29370[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29343 === (11))){
var inst_29312 = (state_29342[(10)]);
var inst_29331 = (state_29342[(2)]);
var tmp29350 = inst_29312;
var inst_29312__$1 = tmp29350;
var state_29342__$1 = (function (){var statearr_29353 = state_29342;
(statearr_29353[(11)] = inst_29331);

(statearr_29353[(10)] = inst_29312__$1);

return statearr_29353;
})();
var statearr_29354_29371 = state_29342__$1;
(statearr_29354_29371[(2)] = null);

(statearr_29354_29371[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29343 === (9))){
var inst_29322 = (state_29342[(8)]);
var state_29342__$1 = state_29342;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29342__$1,(11),out,inst_29322);
} else {
if((state_val_29343 === (5))){
var inst_29336 = cljs.core.async.close_BANG_.call(null,out);
var state_29342__$1 = state_29342;
var statearr_29355_29372 = state_29342__$1;
(statearr_29355_29372[(2)] = inst_29336);

(statearr_29355_29372[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29343 === (10))){
var inst_29334 = (state_29342[(2)]);
var state_29342__$1 = state_29342;
var statearr_29356_29373 = state_29342__$1;
(statearr_29356_29373[(2)] = inst_29334);

(statearr_29356_29373[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29343 === (8))){
var inst_29321 = (state_29342[(7)]);
var inst_29323 = (state_29342[(9)]);
var inst_29322 = (state_29342[(8)]);
var inst_29312 = (state_29342[(10)]);
var inst_29326 = (function (){var cs = inst_29312;
var vec__29317 = inst_29321;
var v = inst_29322;
var c = inst_29323;
return (function (p1__29308_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__29308_SHARP_);
});
})();
var inst_29327 = cljs.core.filterv.call(null,inst_29326,inst_29312);
var inst_29312__$1 = inst_29327;
var state_29342__$1 = (function (){var statearr_29357 = state_29342;
(statearr_29357[(10)] = inst_29312__$1);

return statearr_29357;
})();
var statearr_29358_29374 = state_29342__$1;
(statearr_29358_29374[(2)] = null);

(statearr_29358_29374[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__27856__auto__ = null;
var cljs$core$async$state_machine__27856__auto____0 = (function (){
var statearr_29359 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29359[(0)] = cljs$core$async$state_machine__27856__auto__);

(statearr_29359[(1)] = (1));

return statearr_29359;
});
var cljs$core$async$state_machine__27856__auto____1 = (function (state_29342){
while(true){
var ret_value__27857__auto__ = (function (){try{while(true){
var result__27858__auto__ = switch__27855__auto__.call(null,state_29342);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27858__auto__;
}
break;
}
}catch (e29360){if((e29360 instanceof Object)){
var ex__27859__auto__ = e29360;
var statearr_29361_29375 = state_29342;
(statearr_29361_29375[(5)] = ex__27859__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29342);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29360;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29376 = state_29342;
state_29342 = G__29376;
continue;
} else {
return ret_value__27857__auto__;
}
break;
}
});
cljs$core$async$state_machine__27856__auto__ = function(state_29342){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27856__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27856__auto____1.call(this,state_29342);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27856__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27856__auto____0;
cljs$core$async$state_machine__27856__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27856__auto____1;
return cljs$core$async$state_machine__27856__auto__;
})()
})();
var state__27952__auto__ = (function (){var statearr_29362 = f__27951__auto__.call(null);
(statearr_29362[(6)] = c__27950__auto___29364);

return statearr_29362;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27952__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__29378 = arguments.length;
switch (G__29378) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27950__auto___29423 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27951__auto__ = (function (){var switch__27855__auto__ = (function (state_29402){
var state_val_29403 = (state_29402[(1)]);
if((state_val_29403 === (7))){
var inst_29384 = (state_29402[(7)]);
var inst_29384__$1 = (state_29402[(2)]);
var inst_29385 = (inst_29384__$1 == null);
var inst_29386 = cljs.core.not.call(null,inst_29385);
var state_29402__$1 = (function (){var statearr_29404 = state_29402;
(statearr_29404[(7)] = inst_29384__$1);

return statearr_29404;
})();
if(inst_29386){
var statearr_29405_29424 = state_29402__$1;
(statearr_29405_29424[(1)] = (8));

} else {
var statearr_29406_29425 = state_29402__$1;
(statearr_29406_29425[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29403 === (1))){
var inst_29379 = (0);
var state_29402__$1 = (function (){var statearr_29407 = state_29402;
(statearr_29407[(8)] = inst_29379);

return statearr_29407;
})();
var statearr_29408_29426 = state_29402__$1;
(statearr_29408_29426[(2)] = null);

(statearr_29408_29426[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29403 === (4))){
var state_29402__$1 = state_29402;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29402__$1,(7),ch);
} else {
if((state_val_29403 === (6))){
var inst_29397 = (state_29402[(2)]);
var state_29402__$1 = state_29402;
var statearr_29409_29427 = state_29402__$1;
(statearr_29409_29427[(2)] = inst_29397);

(statearr_29409_29427[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29403 === (3))){
var inst_29399 = (state_29402[(2)]);
var inst_29400 = cljs.core.async.close_BANG_.call(null,out);
var state_29402__$1 = (function (){var statearr_29410 = state_29402;
(statearr_29410[(9)] = inst_29399);

return statearr_29410;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29402__$1,inst_29400);
} else {
if((state_val_29403 === (2))){
var inst_29379 = (state_29402[(8)]);
var inst_29381 = (inst_29379 < n);
var state_29402__$1 = state_29402;
if(cljs.core.truth_(inst_29381)){
var statearr_29411_29428 = state_29402__$1;
(statearr_29411_29428[(1)] = (4));

} else {
var statearr_29412_29429 = state_29402__$1;
(statearr_29412_29429[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29403 === (11))){
var inst_29379 = (state_29402[(8)]);
var inst_29389 = (state_29402[(2)]);
var inst_29390 = (inst_29379 + (1));
var inst_29379__$1 = inst_29390;
var state_29402__$1 = (function (){var statearr_29413 = state_29402;
(statearr_29413[(8)] = inst_29379__$1);

(statearr_29413[(10)] = inst_29389);

return statearr_29413;
})();
var statearr_29414_29430 = state_29402__$1;
(statearr_29414_29430[(2)] = null);

(statearr_29414_29430[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29403 === (9))){
var state_29402__$1 = state_29402;
var statearr_29415_29431 = state_29402__$1;
(statearr_29415_29431[(2)] = null);

(statearr_29415_29431[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29403 === (5))){
var state_29402__$1 = state_29402;
var statearr_29416_29432 = state_29402__$1;
(statearr_29416_29432[(2)] = null);

(statearr_29416_29432[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29403 === (10))){
var inst_29394 = (state_29402[(2)]);
var state_29402__$1 = state_29402;
var statearr_29417_29433 = state_29402__$1;
(statearr_29417_29433[(2)] = inst_29394);

(statearr_29417_29433[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29403 === (8))){
var inst_29384 = (state_29402[(7)]);
var state_29402__$1 = state_29402;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29402__$1,(11),out,inst_29384);
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
});
return (function() {
var cljs$core$async$state_machine__27856__auto__ = null;
var cljs$core$async$state_machine__27856__auto____0 = (function (){
var statearr_29418 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29418[(0)] = cljs$core$async$state_machine__27856__auto__);

(statearr_29418[(1)] = (1));

return statearr_29418;
});
var cljs$core$async$state_machine__27856__auto____1 = (function (state_29402){
while(true){
var ret_value__27857__auto__ = (function (){try{while(true){
var result__27858__auto__ = switch__27855__auto__.call(null,state_29402);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27858__auto__;
}
break;
}
}catch (e29419){if((e29419 instanceof Object)){
var ex__27859__auto__ = e29419;
var statearr_29420_29434 = state_29402;
(statearr_29420_29434[(5)] = ex__27859__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29402);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29419;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29435 = state_29402;
state_29402 = G__29435;
continue;
} else {
return ret_value__27857__auto__;
}
break;
}
});
cljs$core$async$state_machine__27856__auto__ = function(state_29402){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27856__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27856__auto____1.call(this,state_29402);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27856__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27856__auto____0;
cljs$core$async$state_machine__27856__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27856__auto____1;
return cljs$core$async$state_machine__27856__auto__;
})()
})();
var state__27952__auto__ = (function (){var statearr_29421 = f__27951__auto__.call(null);
(statearr_29421[(6)] = c__27950__auto___29423);

return statearr_29421;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27952__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29437 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29437 = (function (f,ch,meta29438){
this.f = f;
this.ch = ch;
this.meta29438 = meta29438;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29437.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29439,meta29438__$1){
var self__ = this;
var _29439__$1 = this;
return (new cljs.core.async.t_cljs$core$async29437(self__.f,self__.ch,meta29438__$1));
}));

(cljs.core.async.t_cljs$core$async29437.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29439){
var self__ = this;
var _29439__$1 = this;
return self__.meta29438;
}));

(cljs.core.async.t_cljs$core$async29437.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29437.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async29437.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async29437.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29437.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29440 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29440 = (function (f,ch,meta29438,_,fn1,meta29441){
this.f = f;
this.ch = ch;
this.meta29438 = meta29438;
this._ = _;
this.fn1 = fn1;
this.meta29441 = meta29441;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29440.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29442,meta29441__$1){
var self__ = this;
var _29442__$1 = this;
return (new cljs.core.async.t_cljs$core$async29440(self__.f,self__.ch,self__.meta29438,self__._,self__.fn1,meta29441__$1));
}));

(cljs.core.async.t_cljs$core$async29440.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29442){
var self__ = this;
var _29442__$1 = this;
return self__.meta29441;
}));

(cljs.core.async.t_cljs$core$async29440.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29440.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
}));

(cljs.core.async.t_cljs$core$async29440.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29440.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return (function (p1__29436_SHARP_){
return f1.call(null,(((p1__29436_SHARP_ == null))?null:self__.f.call(null,p1__29436_SHARP_)));
});
}));

(cljs.core.async.t_cljs$core$async29440.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29438","meta29438",-1580913136,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async29437","cljs.core.async/t_cljs$core$async29437",-478803750,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta29441","meta29441",-1898836246,null)], null);
}));

(cljs.core.async.t_cljs$core$async29440.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29440.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29440");

(cljs.core.async.t_cljs$core$async29440.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.core.async/t_cljs$core$async29440");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29440.
 */
cljs.core.async.__GT_t_cljs$core$async29440 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29440(f__$1,ch__$1,meta29438__$1,___$2,fn1__$1,meta29441){
return (new cljs.core.async.t_cljs$core$async29440(f__$1,ch__$1,meta29438__$1,___$2,fn1__$1,meta29441));
});

}

return (new cljs.core.async.t_cljs$core$async29440(self__.f,self__.ch,self__.meta29438,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4174__auto__ = ret;
if(cljs.core.truth_(and__4174__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__4174__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async29437.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29437.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async29437.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29438","meta29438",-1580913136,null)], null);
}));

(cljs.core.async.t_cljs$core$async29437.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29437.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29437");

(cljs.core.async.t_cljs$core$async29437.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.core.async/t_cljs$core$async29437");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29437.
 */
cljs.core.async.__GT_t_cljs$core$async29437 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29437(f__$1,ch__$1,meta29438){
return (new cljs.core.async.t_cljs$core$async29437(f__$1,ch__$1,meta29438));
});

}

return (new cljs.core.async.t_cljs$core$async29437(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29443 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29443 = (function (f,ch,meta29444){
this.f = f;
this.ch = ch;
this.meta29444 = meta29444;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29443.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29445,meta29444__$1){
var self__ = this;
var _29445__$1 = this;
return (new cljs.core.async.t_cljs$core$async29443(self__.f,self__.ch,meta29444__$1));
}));

(cljs.core.async.t_cljs$core$async29443.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29445){
var self__ = this;
var _29445__$1 = this;
return self__.meta29444;
}));

(cljs.core.async.t_cljs$core$async29443.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29443.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async29443.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29443.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async29443.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29443.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
}));

(cljs.core.async.t_cljs$core$async29443.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29444","meta29444",1607527155,null)], null);
}));

(cljs.core.async.t_cljs$core$async29443.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29443.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29443");

(cljs.core.async.t_cljs$core$async29443.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.core.async/t_cljs$core$async29443");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29443.
 */
cljs.core.async.__GT_t_cljs$core$async29443 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async29443(f__$1,ch__$1,meta29444){
return (new cljs.core.async.t_cljs$core$async29443(f__$1,ch__$1,meta29444));
});

}

return (new cljs.core.async.t_cljs$core$async29443(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29446 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29446 = (function (p,ch,meta29447){
this.p = p;
this.ch = ch;
this.meta29447 = meta29447;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29446.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29448,meta29447__$1){
var self__ = this;
var _29448__$1 = this;
return (new cljs.core.async.t_cljs$core$async29446(self__.p,self__.ch,meta29447__$1));
}));

(cljs.core.async.t_cljs$core$async29446.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29448){
var self__ = this;
var _29448__$1 = this;
return self__.meta29447;
}));

(cljs.core.async.t_cljs$core$async29446.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29446.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async29446.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async29446.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29446.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async29446.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29446.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async29446.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29447","meta29447",-1063470986,null)], null);
}));

(cljs.core.async.t_cljs$core$async29446.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29446.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29446");

(cljs.core.async.t_cljs$core$async29446.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.core.async/t_cljs$core$async29446");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29446.
 */
cljs.core.async.__GT_t_cljs$core$async29446 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async29446(p__$1,ch__$1,meta29447){
return (new cljs.core.async.t_cljs$core$async29446(p__$1,ch__$1,meta29447));
});

}

return (new cljs.core.async.t_cljs$core$async29446(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__29450 = arguments.length;
switch (G__29450) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27950__auto___29490 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27951__auto__ = (function (){var switch__27855__auto__ = (function (state_29471){
var state_val_29472 = (state_29471[(1)]);
if((state_val_29472 === (7))){
var inst_29467 = (state_29471[(2)]);
var state_29471__$1 = state_29471;
var statearr_29473_29491 = state_29471__$1;
(statearr_29473_29491[(2)] = inst_29467);

(statearr_29473_29491[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29472 === (1))){
var state_29471__$1 = state_29471;
var statearr_29474_29492 = state_29471__$1;
(statearr_29474_29492[(2)] = null);

(statearr_29474_29492[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29472 === (4))){
var inst_29453 = (state_29471[(7)]);
var inst_29453__$1 = (state_29471[(2)]);
var inst_29454 = (inst_29453__$1 == null);
var state_29471__$1 = (function (){var statearr_29475 = state_29471;
(statearr_29475[(7)] = inst_29453__$1);

return statearr_29475;
})();
if(cljs.core.truth_(inst_29454)){
var statearr_29476_29493 = state_29471__$1;
(statearr_29476_29493[(1)] = (5));

} else {
var statearr_29477_29494 = state_29471__$1;
(statearr_29477_29494[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29472 === (6))){
var inst_29453 = (state_29471[(7)]);
var inst_29458 = p.call(null,inst_29453);
var state_29471__$1 = state_29471;
if(cljs.core.truth_(inst_29458)){
var statearr_29478_29495 = state_29471__$1;
(statearr_29478_29495[(1)] = (8));

} else {
var statearr_29479_29496 = state_29471__$1;
(statearr_29479_29496[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29472 === (3))){
var inst_29469 = (state_29471[(2)]);
var state_29471__$1 = state_29471;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29471__$1,inst_29469);
} else {
if((state_val_29472 === (2))){
var state_29471__$1 = state_29471;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29471__$1,(4),ch);
} else {
if((state_val_29472 === (11))){
var inst_29461 = (state_29471[(2)]);
var state_29471__$1 = state_29471;
var statearr_29480_29497 = state_29471__$1;
(statearr_29480_29497[(2)] = inst_29461);

(statearr_29480_29497[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29472 === (9))){
var state_29471__$1 = state_29471;
var statearr_29481_29498 = state_29471__$1;
(statearr_29481_29498[(2)] = null);

(statearr_29481_29498[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29472 === (5))){
var inst_29456 = cljs.core.async.close_BANG_.call(null,out);
var state_29471__$1 = state_29471;
var statearr_29482_29499 = state_29471__$1;
(statearr_29482_29499[(2)] = inst_29456);

(statearr_29482_29499[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29472 === (10))){
var inst_29464 = (state_29471[(2)]);
var state_29471__$1 = (function (){var statearr_29483 = state_29471;
(statearr_29483[(8)] = inst_29464);

return statearr_29483;
})();
var statearr_29484_29500 = state_29471__$1;
(statearr_29484_29500[(2)] = null);

(statearr_29484_29500[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29472 === (8))){
var inst_29453 = (state_29471[(7)]);
var state_29471__$1 = state_29471;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29471__$1,(11),out,inst_29453);
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
});
return (function() {
var cljs$core$async$state_machine__27856__auto__ = null;
var cljs$core$async$state_machine__27856__auto____0 = (function (){
var statearr_29485 = [null,null,null,null,null,null,null,null,null];
(statearr_29485[(0)] = cljs$core$async$state_machine__27856__auto__);

(statearr_29485[(1)] = (1));

return statearr_29485;
});
var cljs$core$async$state_machine__27856__auto____1 = (function (state_29471){
while(true){
var ret_value__27857__auto__ = (function (){try{while(true){
var result__27858__auto__ = switch__27855__auto__.call(null,state_29471);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27858__auto__;
}
break;
}
}catch (e29486){if((e29486 instanceof Object)){
var ex__27859__auto__ = e29486;
var statearr_29487_29501 = state_29471;
(statearr_29487_29501[(5)] = ex__27859__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29471);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29486;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29502 = state_29471;
state_29471 = G__29502;
continue;
} else {
return ret_value__27857__auto__;
}
break;
}
});
cljs$core$async$state_machine__27856__auto__ = function(state_29471){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27856__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27856__auto____1.call(this,state_29471);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27856__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27856__auto____0;
cljs$core$async$state_machine__27856__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27856__auto____1;
return cljs$core$async$state_machine__27856__auto__;
})()
})();
var state__27952__auto__ = (function (){var statearr_29488 = f__27951__auto__.call(null);
(statearr_29488[(6)] = c__27950__auto___29490);

return statearr_29488;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27952__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__29504 = arguments.length;
switch (G__29504) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__27950__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27951__auto__ = (function (){var switch__27855__auto__ = (function (state_29567){
var state_val_29568 = (state_29567[(1)]);
if((state_val_29568 === (7))){
var inst_29563 = (state_29567[(2)]);
var state_29567__$1 = state_29567;
var statearr_29569_29607 = state_29567__$1;
(statearr_29569_29607[(2)] = inst_29563);

(statearr_29569_29607[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29568 === (20))){
var inst_29533 = (state_29567[(7)]);
var inst_29544 = (state_29567[(2)]);
var inst_29545 = cljs.core.next.call(null,inst_29533);
var inst_29519 = inst_29545;
var inst_29520 = null;
var inst_29521 = (0);
var inst_29522 = (0);
var state_29567__$1 = (function (){var statearr_29570 = state_29567;
(statearr_29570[(8)] = inst_29521);

(statearr_29570[(9)] = inst_29544);

(statearr_29570[(10)] = inst_29522);

(statearr_29570[(11)] = inst_29519);

(statearr_29570[(12)] = inst_29520);

return statearr_29570;
})();
var statearr_29571_29608 = state_29567__$1;
(statearr_29571_29608[(2)] = null);

(statearr_29571_29608[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29568 === (1))){
var state_29567__$1 = state_29567;
var statearr_29572_29609 = state_29567__$1;
(statearr_29572_29609[(2)] = null);

(statearr_29572_29609[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29568 === (4))){
var inst_29508 = (state_29567[(13)]);
var inst_29508__$1 = (state_29567[(2)]);
var inst_29509 = (inst_29508__$1 == null);
var state_29567__$1 = (function (){var statearr_29573 = state_29567;
(statearr_29573[(13)] = inst_29508__$1);

return statearr_29573;
})();
if(cljs.core.truth_(inst_29509)){
var statearr_29574_29610 = state_29567__$1;
(statearr_29574_29610[(1)] = (5));

} else {
var statearr_29575_29611 = state_29567__$1;
(statearr_29575_29611[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29568 === (15))){
var state_29567__$1 = state_29567;
var statearr_29579_29612 = state_29567__$1;
(statearr_29579_29612[(2)] = null);

(statearr_29579_29612[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29568 === (21))){
var state_29567__$1 = state_29567;
var statearr_29580_29613 = state_29567__$1;
(statearr_29580_29613[(2)] = null);

(statearr_29580_29613[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29568 === (13))){
var inst_29521 = (state_29567[(8)]);
var inst_29522 = (state_29567[(10)]);
var inst_29519 = (state_29567[(11)]);
var inst_29520 = (state_29567[(12)]);
var inst_29529 = (state_29567[(2)]);
var inst_29530 = (inst_29522 + (1));
var tmp29576 = inst_29521;
var tmp29577 = inst_29519;
var tmp29578 = inst_29520;
var inst_29519__$1 = tmp29577;
var inst_29520__$1 = tmp29578;
var inst_29521__$1 = tmp29576;
var inst_29522__$1 = inst_29530;
var state_29567__$1 = (function (){var statearr_29581 = state_29567;
(statearr_29581[(8)] = inst_29521__$1);

(statearr_29581[(14)] = inst_29529);

(statearr_29581[(10)] = inst_29522__$1);

(statearr_29581[(11)] = inst_29519__$1);

(statearr_29581[(12)] = inst_29520__$1);

return statearr_29581;
})();
var statearr_29582_29614 = state_29567__$1;
(statearr_29582_29614[(2)] = null);

(statearr_29582_29614[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29568 === (22))){
var state_29567__$1 = state_29567;
var statearr_29583_29615 = state_29567__$1;
(statearr_29583_29615[(2)] = null);

(statearr_29583_29615[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29568 === (6))){
var inst_29508 = (state_29567[(13)]);
var inst_29517 = f.call(null,inst_29508);
var inst_29518 = cljs.core.seq.call(null,inst_29517);
var inst_29519 = inst_29518;
var inst_29520 = null;
var inst_29521 = (0);
var inst_29522 = (0);
var state_29567__$1 = (function (){var statearr_29584 = state_29567;
(statearr_29584[(8)] = inst_29521);

(statearr_29584[(10)] = inst_29522);

(statearr_29584[(11)] = inst_29519);

(statearr_29584[(12)] = inst_29520);

return statearr_29584;
})();
var statearr_29585_29616 = state_29567__$1;
(statearr_29585_29616[(2)] = null);

(statearr_29585_29616[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29568 === (17))){
var inst_29533 = (state_29567[(7)]);
var inst_29537 = cljs.core.chunk_first.call(null,inst_29533);
var inst_29538 = cljs.core.chunk_rest.call(null,inst_29533);
var inst_29539 = cljs.core.count.call(null,inst_29537);
var inst_29519 = inst_29538;
var inst_29520 = inst_29537;
var inst_29521 = inst_29539;
var inst_29522 = (0);
var state_29567__$1 = (function (){var statearr_29586 = state_29567;
(statearr_29586[(8)] = inst_29521);

(statearr_29586[(10)] = inst_29522);

(statearr_29586[(11)] = inst_29519);

(statearr_29586[(12)] = inst_29520);

return statearr_29586;
})();
var statearr_29587_29617 = state_29567__$1;
(statearr_29587_29617[(2)] = null);

(statearr_29587_29617[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29568 === (3))){
var inst_29565 = (state_29567[(2)]);
var state_29567__$1 = state_29567;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29567__$1,inst_29565);
} else {
if((state_val_29568 === (12))){
var inst_29553 = (state_29567[(2)]);
var state_29567__$1 = state_29567;
var statearr_29588_29618 = state_29567__$1;
(statearr_29588_29618[(2)] = inst_29553);

(statearr_29588_29618[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29568 === (2))){
var state_29567__$1 = state_29567;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29567__$1,(4),in$);
} else {
if((state_val_29568 === (23))){
var inst_29561 = (state_29567[(2)]);
var state_29567__$1 = state_29567;
var statearr_29589_29619 = state_29567__$1;
(statearr_29589_29619[(2)] = inst_29561);

(statearr_29589_29619[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29568 === (19))){
var inst_29548 = (state_29567[(2)]);
var state_29567__$1 = state_29567;
var statearr_29590_29620 = state_29567__$1;
(statearr_29590_29620[(2)] = inst_29548);

(statearr_29590_29620[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29568 === (11))){
var inst_29519 = (state_29567[(11)]);
var inst_29533 = (state_29567[(7)]);
var inst_29533__$1 = cljs.core.seq.call(null,inst_29519);
var state_29567__$1 = (function (){var statearr_29591 = state_29567;
(statearr_29591[(7)] = inst_29533__$1);

return statearr_29591;
})();
if(inst_29533__$1){
var statearr_29592_29621 = state_29567__$1;
(statearr_29592_29621[(1)] = (14));

} else {
var statearr_29593_29622 = state_29567__$1;
(statearr_29593_29622[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29568 === (9))){
var inst_29555 = (state_29567[(2)]);
var inst_29556 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_29567__$1 = (function (){var statearr_29594 = state_29567;
(statearr_29594[(15)] = inst_29555);

return statearr_29594;
})();
if(cljs.core.truth_(inst_29556)){
var statearr_29595_29623 = state_29567__$1;
(statearr_29595_29623[(1)] = (21));

} else {
var statearr_29596_29624 = state_29567__$1;
(statearr_29596_29624[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29568 === (5))){
var inst_29511 = cljs.core.async.close_BANG_.call(null,out);
var state_29567__$1 = state_29567;
var statearr_29597_29625 = state_29567__$1;
(statearr_29597_29625[(2)] = inst_29511);

(statearr_29597_29625[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29568 === (14))){
var inst_29533 = (state_29567[(7)]);
var inst_29535 = cljs.core.chunked_seq_QMARK_.call(null,inst_29533);
var state_29567__$1 = state_29567;
if(inst_29535){
var statearr_29598_29626 = state_29567__$1;
(statearr_29598_29626[(1)] = (17));

} else {
var statearr_29599_29627 = state_29567__$1;
(statearr_29599_29627[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29568 === (16))){
var inst_29551 = (state_29567[(2)]);
var state_29567__$1 = state_29567;
var statearr_29600_29628 = state_29567__$1;
(statearr_29600_29628[(2)] = inst_29551);

(statearr_29600_29628[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29568 === (10))){
var inst_29522 = (state_29567[(10)]);
var inst_29520 = (state_29567[(12)]);
var inst_29527 = cljs.core._nth.call(null,inst_29520,inst_29522);
var state_29567__$1 = state_29567;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29567__$1,(13),out,inst_29527);
} else {
if((state_val_29568 === (18))){
var inst_29533 = (state_29567[(7)]);
var inst_29542 = cljs.core.first.call(null,inst_29533);
var state_29567__$1 = state_29567;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29567__$1,(20),out,inst_29542);
} else {
if((state_val_29568 === (8))){
var inst_29521 = (state_29567[(8)]);
var inst_29522 = (state_29567[(10)]);
var inst_29524 = (inst_29522 < inst_29521);
var inst_29525 = inst_29524;
var state_29567__$1 = state_29567;
if(cljs.core.truth_(inst_29525)){
var statearr_29601_29629 = state_29567__$1;
(statearr_29601_29629[(1)] = (10));

} else {
var statearr_29602_29630 = state_29567__$1;
(statearr_29602_29630[(1)] = (11));

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
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__27856__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__27856__auto____0 = (function (){
var statearr_29603 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29603[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__27856__auto__);

(statearr_29603[(1)] = (1));

return statearr_29603;
});
var cljs$core$async$mapcat_STAR__$_state_machine__27856__auto____1 = (function (state_29567){
while(true){
var ret_value__27857__auto__ = (function (){try{while(true){
var result__27858__auto__ = switch__27855__auto__.call(null,state_29567);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27858__auto__;
}
break;
}
}catch (e29604){if((e29604 instanceof Object)){
var ex__27859__auto__ = e29604;
var statearr_29605_29631 = state_29567;
(statearr_29605_29631[(5)] = ex__27859__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29567);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29604;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29632 = state_29567;
state_29567 = G__29632;
continue;
} else {
return ret_value__27857__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__27856__auto__ = function(state_29567){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__27856__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__27856__auto____1.call(this,state_29567);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__27856__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__27856__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__27856__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__27856__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__27856__auto__;
})()
})();
var state__27952__auto__ = (function (){var statearr_29606 = f__27951__auto__.call(null);
(statearr_29606[(6)] = c__27950__auto__);

return statearr_29606;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27952__auto__);
}));

return c__27950__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__29634 = arguments.length;
switch (G__29634) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__29637 = arguments.length;
switch (G__29637) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__29640 = arguments.length;
switch (G__29640) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27950__auto___29687 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27951__auto__ = (function (){var switch__27855__auto__ = (function (state_29664){
var state_val_29665 = (state_29664[(1)]);
if((state_val_29665 === (7))){
var inst_29659 = (state_29664[(2)]);
var state_29664__$1 = state_29664;
var statearr_29666_29688 = state_29664__$1;
(statearr_29666_29688[(2)] = inst_29659);

(statearr_29666_29688[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29665 === (1))){
var inst_29641 = null;
var state_29664__$1 = (function (){var statearr_29667 = state_29664;
(statearr_29667[(7)] = inst_29641);

return statearr_29667;
})();
var statearr_29668_29689 = state_29664__$1;
(statearr_29668_29689[(2)] = null);

(statearr_29668_29689[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29665 === (4))){
var inst_29644 = (state_29664[(8)]);
var inst_29644__$1 = (state_29664[(2)]);
var inst_29645 = (inst_29644__$1 == null);
var inst_29646 = cljs.core.not.call(null,inst_29645);
var state_29664__$1 = (function (){var statearr_29669 = state_29664;
(statearr_29669[(8)] = inst_29644__$1);

return statearr_29669;
})();
if(inst_29646){
var statearr_29670_29690 = state_29664__$1;
(statearr_29670_29690[(1)] = (5));

} else {
var statearr_29671_29691 = state_29664__$1;
(statearr_29671_29691[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29665 === (6))){
var state_29664__$1 = state_29664;
var statearr_29672_29692 = state_29664__$1;
(statearr_29672_29692[(2)] = null);

(statearr_29672_29692[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29665 === (3))){
var inst_29661 = (state_29664[(2)]);
var inst_29662 = cljs.core.async.close_BANG_.call(null,out);
var state_29664__$1 = (function (){var statearr_29673 = state_29664;
(statearr_29673[(9)] = inst_29661);

return statearr_29673;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29664__$1,inst_29662);
} else {
if((state_val_29665 === (2))){
var state_29664__$1 = state_29664;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29664__$1,(4),ch);
} else {
if((state_val_29665 === (11))){
var inst_29644 = (state_29664[(8)]);
var inst_29653 = (state_29664[(2)]);
var inst_29641 = inst_29644;
var state_29664__$1 = (function (){var statearr_29674 = state_29664;
(statearr_29674[(10)] = inst_29653);

(statearr_29674[(7)] = inst_29641);

return statearr_29674;
})();
var statearr_29675_29693 = state_29664__$1;
(statearr_29675_29693[(2)] = null);

(statearr_29675_29693[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29665 === (9))){
var inst_29644 = (state_29664[(8)]);
var state_29664__$1 = state_29664;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29664__$1,(11),out,inst_29644);
} else {
if((state_val_29665 === (5))){
var inst_29641 = (state_29664[(7)]);
var inst_29644 = (state_29664[(8)]);
var inst_29648 = cljs.core._EQ_.call(null,inst_29644,inst_29641);
var state_29664__$1 = state_29664;
if(inst_29648){
var statearr_29677_29694 = state_29664__$1;
(statearr_29677_29694[(1)] = (8));

} else {
var statearr_29678_29695 = state_29664__$1;
(statearr_29678_29695[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29665 === (10))){
var inst_29656 = (state_29664[(2)]);
var state_29664__$1 = state_29664;
var statearr_29679_29696 = state_29664__$1;
(statearr_29679_29696[(2)] = inst_29656);

(statearr_29679_29696[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29665 === (8))){
var inst_29641 = (state_29664[(7)]);
var tmp29676 = inst_29641;
var inst_29641__$1 = tmp29676;
var state_29664__$1 = (function (){var statearr_29680 = state_29664;
(statearr_29680[(7)] = inst_29641__$1);

return statearr_29680;
})();
var statearr_29681_29697 = state_29664__$1;
(statearr_29681_29697[(2)] = null);

(statearr_29681_29697[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__27856__auto__ = null;
var cljs$core$async$state_machine__27856__auto____0 = (function (){
var statearr_29682 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29682[(0)] = cljs$core$async$state_machine__27856__auto__);

(statearr_29682[(1)] = (1));

return statearr_29682;
});
var cljs$core$async$state_machine__27856__auto____1 = (function (state_29664){
while(true){
var ret_value__27857__auto__ = (function (){try{while(true){
var result__27858__auto__ = switch__27855__auto__.call(null,state_29664);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27858__auto__;
}
break;
}
}catch (e29683){if((e29683 instanceof Object)){
var ex__27859__auto__ = e29683;
var statearr_29684_29698 = state_29664;
(statearr_29684_29698[(5)] = ex__27859__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29664);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29683;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29699 = state_29664;
state_29664 = G__29699;
continue;
} else {
return ret_value__27857__auto__;
}
break;
}
});
cljs$core$async$state_machine__27856__auto__ = function(state_29664){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27856__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27856__auto____1.call(this,state_29664);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27856__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27856__auto____0;
cljs$core$async$state_machine__27856__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27856__auto____1;
return cljs$core$async$state_machine__27856__auto__;
})()
})();
var state__27952__auto__ = (function (){var statearr_29685 = f__27951__auto__.call(null);
(statearr_29685[(6)] = c__27950__auto___29687);

return statearr_29685;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27952__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__29701 = arguments.length;
switch (G__29701) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27950__auto___29767 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27951__auto__ = (function (){var switch__27855__auto__ = (function (state_29739){
var state_val_29740 = (state_29739[(1)]);
if((state_val_29740 === (7))){
var inst_29735 = (state_29739[(2)]);
var state_29739__$1 = state_29739;
var statearr_29741_29768 = state_29739__$1;
(statearr_29741_29768[(2)] = inst_29735);

(statearr_29741_29768[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29740 === (1))){
var inst_29702 = (new Array(n));
var inst_29703 = inst_29702;
var inst_29704 = (0);
var state_29739__$1 = (function (){var statearr_29742 = state_29739;
(statearr_29742[(7)] = inst_29703);

(statearr_29742[(8)] = inst_29704);

return statearr_29742;
})();
var statearr_29743_29769 = state_29739__$1;
(statearr_29743_29769[(2)] = null);

(statearr_29743_29769[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29740 === (4))){
var inst_29707 = (state_29739[(9)]);
var inst_29707__$1 = (state_29739[(2)]);
var inst_29708 = (inst_29707__$1 == null);
var inst_29709 = cljs.core.not.call(null,inst_29708);
var state_29739__$1 = (function (){var statearr_29744 = state_29739;
(statearr_29744[(9)] = inst_29707__$1);

return statearr_29744;
})();
if(inst_29709){
var statearr_29745_29770 = state_29739__$1;
(statearr_29745_29770[(1)] = (5));

} else {
var statearr_29746_29771 = state_29739__$1;
(statearr_29746_29771[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29740 === (15))){
var inst_29729 = (state_29739[(2)]);
var state_29739__$1 = state_29739;
var statearr_29747_29772 = state_29739__$1;
(statearr_29747_29772[(2)] = inst_29729);

(statearr_29747_29772[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29740 === (13))){
var state_29739__$1 = state_29739;
var statearr_29748_29773 = state_29739__$1;
(statearr_29748_29773[(2)] = null);

(statearr_29748_29773[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29740 === (6))){
var inst_29704 = (state_29739[(8)]);
var inst_29725 = (inst_29704 > (0));
var state_29739__$1 = state_29739;
if(cljs.core.truth_(inst_29725)){
var statearr_29749_29774 = state_29739__$1;
(statearr_29749_29774[(1)] = (12));

} else {
var statearr_29750_29775 = state_29739__$1;
(statearr_29750_29775[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29740 === (3))){
var inst_29737 = (state_29739[(2)]);
var state_29739__$1 = state_29739;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29739__$1,inst_29737);
} else {
if((state_val_29740 === (12))){
var inst_29703 = (state_29739[(7)]);
var inst_29727 = cljs.core.vec.call(null,inst_29703);
var state_29739__$1 = state_29739;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29739__$1,(15),out,inst_29727);
} else {
if((state_val_29740 === (2))){
var state_29739__$1 = state_29739;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29739__$1,(4),ch);
} else {
if((state_val_29740 === (11))){
var inst_29719 = (state_29739[(2)]);
var inst_29720 = (new Array(n));
var inst_29703 = inst_29720;
var inst_29704 = (0);
var state_29739__$1 = (function (){var statearr_29751 = state_29739;
(statearr_29751[(10)] = inst_29719);

(statearr_29751[(7)] = inst_29703);

(statearr_29751[(8)] = inst_29704);

return statearr_29751;
})();
var statearr_29752_29776 = state_29739__$1;
(statearr_29752_29776[(2)] = null);

(statearr_29752_29776[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29740 === (9))){
var inst_29703 = (state_29739[(7)]);
var inst_29717 = cljs.core.vec.call(null,inst_29703);
var state_29739__$1 = state_29739;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29739__$1,(11),out,inst_29717);
} else {
if((state_val_29740 === (5))){
var inst_29703 = (state_29739[(7)]);
var inst_29712 = (state_29739[(11)]);
var inst_29704 = (state_29739[(8)]);
var inst_29707 = (state_29739[(9)]);
var inst_29711 = (inst_29703[inst_29704] = inst_29707);
var inst_29712__$1 = (inst_29704 + (1));
var inst_29713 = (inst_29712__$1 < n);
var state_29739__$1 = (function (){var statearr_29753 = state_29739;
(statearr_29753[(11)] = inst_29712__$1);

(statearr_29753[(12)] = inst_29711);

return statearr_29753;
})();
if(cljs.core.truth_(inst_29713)){
var statearr_29754_29777 = state_29739__$1;
(statearr_29754_29777[(1)] = (8));

} else {
var statearr_29755_29778 = state_29739__$1;
(statearr_29755_29778[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29740 === (14))){
var inst_29732 = (state_29739[(2)]);
var inst_29733 = cljs.core.async.close_BANG_.call(null,out);
var state_29739__$1 = (function (){var statearr_29757 = state_29739;
(statearr_29757[(13)] = inst_29732);

return statearr_29757;
})();
var statearr_29758_29779 = state_29739__$1;
(statearr_29758_29779[(2)] = inst_29733);

(statearr_29758_29779[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29740 === (10))){
var inst_29723 = (state_29739[(2)]);
var state_29739__$1 = state_29739;
var statearr_29759_29780 = state_29739__$1;
(statearr_29759_29780[(2)] = inst_29723);

(statearr_29759_29780[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29740 === (8))){
var inst_29703 = (state_29739[(7)]);
var inst_29712 = (state_29739[(11)]);
var tmp29756 = inst_29703;
var inst_29703__$1 = tmp29756;
var inst_29704 = inst_29712;
var state_29739__$1 = (function (){var statearr_29760 = state_29739;
(statearr_29760[(7)] = inst_29703__$1);

(statearr_29760[(8)] = inst_29704);

return statearr_29760;
})();
var statearr_29761_29781 = state_29739__$1;
(statearr_29761_29781[(2)] = null);

(statearr_29761_29781[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__27856__auto__ = null;
var cljs$core$async$state_machine__27856__auto____0 = (function (){
var statearr_29762 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29762[(0)] = cljs$core$async$state_machine__27856__auto__);

(statearr_29762[(1)] = (1));

return statearr_29762;
});
var cljs$core$async$state_machine__27856__auto____1 = (function (state_29739){
while(true){
var ret_value__27857__auto__ = (function (){try{while(true){
var result__27858__auto__ = switch__27855__auto__.call(null,state_29739);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27858__auto__;
}
break;
}
}catch (e29763){if((e29763 instanceof Object)){
var ex__27859__auto__ = e29763;
var statearr_29764_29782 = state_29739;
(statearr_29764_29782[(5)] = ex__27859__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29739);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29763;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29783 = state_29739;
state_29739 = G__29783;
continue;
} else {
return ret_value__27857__auto__;
}
break;
}
});
cljs$core$async$state_machine__27856__auto__ = function(state_29739){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27856__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27856__auto____1.call(this,state_29739);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27856__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27856__auto____0;
cljs$core$async$state_machine__27856__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27856__auto____1;
return cljs$core$async$state_machine__27856__auto__;
})()
})();
var state__27952__auto__ = (function (){var statearr_29765 = f__27951__auto__.call(null);
(statearr_29765[(6)] = c__27950__auto___29767);

return statearr_29765;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27952__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__29785 = arguments.length;
switch (G__29785) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27950__auto___29855 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27951__auto__ = (function (){var switch__27855__auto__ = (function (state_29827){
var state_val_29828 = (state_29827[(1)]);
if((state_val_29828 === (7))){
var inst_29823 = (state_29827[(2)]);
var state_29827__$1 = state_29827;
var statearr_29829_29856 = state_29827__$1;
(statearr_29829_29856[(2)] = inst_29823);

(statearr_29829_29856[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29828 === (1))){
var inst_29786 = [];
var inst_29787 = inst_29786;
var inst_29788 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_29827__$1 = (function (){var statearr_29830 = state_29827;
(statearr_29830[(7)] = inst_29788);

(statearr_29830[(8)] = inst_29787);

return statearr_29830;
})();
var statearr_29831_29857 = state_29827__$1;
(statearr_29831_29857[(2)] = null);

(statearr_29831_29857[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29828 === (4))){
var inst_29791 = (state_29827[(9)]);
var inst_29791__$1 = (state_29827[(2)]);
var inst_29792 = (inst_29791__$1 == null);
var inst_29793 = cljs.core.not.call(null,inst_29792);
var state_29827__$1 = (function (){var statearr_29832 = state_29827;
(statearr_29832[(9)] = inst_29791__$1);

return statearr_29832;
})();
if(inst_29793){
var statearr_29833_29858 = state_29827__$1;
(statearr_29833_29858[(1)] = (5));

} else {
var statearr_29834_29859 = state_29827__$1;
(statearr_29834_29859[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29828 === (15))){
var inst_29817 = (state_29827[(2)]);
var state_29827__$1 = state_29827;
var statearr_29835_29860 = state_29827__$1;
(statearr_29835_29860[(2)] = inst_29817);

(statearr_29835_29860[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29828 === (13))){
var state_29827__$1 = state_29827;
var statearr_29836_29861 = state_29827__$1;
(statearr_29836_29861[(2)] = null);

(statearr_29836_29861[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29828 === (6))){
var inst_29787 = (state_29827[(8)]);
var inst_29812 = inst_29787.length;
var inst_29813 = (inst_29812 > (0));
var state_29827__$1 = state_29827;
if(cljs.core.truth_(inst_29813)){
var statearr_29837_29862 = state_29827__$1;
(statearr_29837_29862[(1)] = (12));

} else {
var statearr_29838_29863 = state_29827__$1;
(statearr_29838_29863[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29828 === (3))){
var inst_29825 = (state_29827[(2)]);
var state_29827__$1 = state_29827;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29827__$1,inst_29825);
} else {
if((state_val_29828 === (12))){
var inst_29787 = (state_29827[(8)]);
var inst_29815 = cljs.core.vec.call(null,inst_29787);
var state_29827__$1 = state_29827;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29827__$1,(15),out,inst_29815);
} else {
if((state_val_29828 === (2))){
var state_29827__$1 = state_29827;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29827__$1,(4),ch);
} else {
if((state_val_29828 === (11))){
var inst_29791 = (state_29827[(9)]);
var inst_29795 = (state_29827[(10)]);
var inst_29805 = (state_29827[(2)]);
var inst_29806 = [];
var inst_29807 = inst_29806.push(inst_29791);
var inst_29787 = inst_29806;
var inst_29788 = inst_29795;
var state_29827__$1 = (function (){var statearr_29839 = state_29827;
(statearr_29839[(11)] = inst_29805);

(statearr_29839[(12)] = inst_29807);

(statearr_29839[(7)] = inst_29788);

(statearr_29839[(8)] = inst_29787);

return statearr_29839;
})();
var statearr_29840_29864 = state_29827__$1;
(statearr_29840_29864[(2)] = null);

(statearr_29840_29864[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29828 === (9))){
var inst_29787 = (state_29827[(8)]);
var inst_29803 = cljs.core.vec.call(null,inst_29787);
var state_29827__$1 = state_29827;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29827__$1,(11),out,inst_29803);
} else {
if((state_val_29828 === (5))){
var inst_29788 = (state_29827[(7)]);
var inst_29791 = (state_29827[(9)]);
var inst_29795 = (state_29827[(10)]);
var inst_29795__$1 = f.call(null,inst_29791);
var inst_29796 = cljs.core._EQ_.call(null,inst_29795__$1,inst_29788);
var inst_29797 = cljs.core.keyword_identical_QMARK_.call(null,inst_29788,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_29798 = ((inst_29796) || (inst_29797));
var state_29827__$1 = (function (){var statearr_29841 = state_29827;
(statearr_29841[(10)] = inst_29795__$1);

return statearr_29841;
})();
if(cljs.core.truth_(inst_29798)){
var statearr_29842_29865 = state_29827__$1;
(statearr_29842_29865[(1)] = (8));

} else {
var statearr_29843_29866 = state_29827__$1;
(statearr_29843_29866[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29828 === (14))){
var inst_29820 = (state_29827[(2)]);
var inst_29821 = cljs.core.async.close_BANG_.call(null,out);
var state_29827__$1 = (function (){var statearr_29845 = state_29827;
(statearr_29845[(13)] = inst_29820);

return statearr_29845;
})();
var statearr_29846_29867 = state_29827__$1;
(statearr_29846_29867[(2)] = inst_29821);

(statearr_29846_29867[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29828 === (10))){
var inst_29810 = (state_29827[(2)]);
var state_29827__$1 = state_29827;
var statearr_29847_29868 = state_29827__$1;
(statearr_29847_29868[(2)] = inst_29810);

(statearr_29847_29868[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29828 === (8))){
var inst_29791 = (state_29827[(9)]);
var inst_29795 = (state_29827[(10)]);
var inst_29787 = (state_29827[(8)]);
var inst_29800 = inst_29787.push(inst_29791);
var tmp29844 = inst_29787;
var inst_29787__$1 = tmp29844;
var inst_29788 = inst_29795;
var state_29827__$1 = (function (){var statearr_29848 = state_29827;
(statearr_29848[(7)] = inst_29788);

(statearr_29848[(14)] = inst_29800);

(statearr_29848[(8)] = inst_29787__$1);

return statearr_29848;
})();
var statearr_29849_29869 = state_29827__$1;
(statearr_29849_29869[(2)] = null);

(statearr_29849_29869[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__27856__auto__ = null;
var cljs$core$async$state_machine__27856__auto____0 = (function (){
var statearr_29850 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29850[(0)] = cljs$core$async$state_machine__27856__auto__);

(statearr_29850[(1)] = (1));

return statearr_29850;
});
var cljs$core$async$state_machine__27856__auto____1 = (function (state_29827){
while(true){
var ret_value__27857__auto__ = (function (){try{while(true){
var result__27858__auto__ = switch__27855__auto__.call(null,state_29827);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27858__auto__;
}
break;
}
}catch (e29851){if((e29851 instanceof Object)){
var ex__27859__auto__ = e29851;
var statearr_29852_29870 = state_29827;
(statearr_29852_29870[(5)] = ex__27859__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29827);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29851;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29871 = state_29827;
state_29827 = G__29871;
continue;
} else {
return ret_value__27857__auto__;
}
break;
}
});
cljs$core$async$state_machine__27856__auto__ = function(state_29827){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27856__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27856__auto____1.call(this,state_29827);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27856__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27856__auto____0;
cljs$core$async$state_machine__27856__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27856__auto____1;
return cljs$core$async$state_machine__27856__auto__;
})()
})();
var state__27952__auto__ = (function (){var statearr_29853 = f__27951__auto__.call(null);
(statearr_29853[(6)] = c__27950__auto___29855);

return statearr_29853;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27952__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=async.js.map?rel=1574747415467
