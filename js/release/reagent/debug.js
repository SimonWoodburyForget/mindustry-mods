// Compiled by ClojureScript 1.10.597 {:static-fns true, :optimize-constants true}
goog.provide('reagent.debug');
goog.require('cljs.core');
goog.require('cljs.core.constants');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__26105__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$warn], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__26105 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26106__i = 0, G__26106__a = new Array(arguments.length -  0);
while (G__26106__i < G__26106__a.length) {G__26106__a[G__26106__i] = arguments[G__26106__i + 0]; ++G__26106__i;}
  args = new cljs.core.IndexedSeq(G__26106__a,0,null);
} 
return G__26105__delegate.call(this,args);};
G__26105.cljs$lang$maxFixedArity = 0;
G__26105.cljs$lang$applyTo = (function (arglist__26107){
var args = cljs.core.seq(arglist__26107);
return G__26105__delegate(args);
});
G__26105.cljs$core$IFn$_invoke$arity$variadic = G__26105__delegate;
return G__26105;
})()
);

(o.error = (function() { 
var G__26108__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__26108 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26109__i = 0, G__26109__a = new Array(arguments.length -  0);
while (G__26109__i < G__26109__a.length) {G__26109__a[G__26109__i] = arguments[G__26109__i + 0]; ++G__26109__i;}
  args = new cljs.core.IndexedSeq(G__26109__a,0,null);
} 
return G__26108__delegate.call(this,args);};
G__26108.cljs$lang$maxFixedArity = 0;
G__26108.cljs$lang$applyTo = (function (arglist__26110){
var args = cljs.core.seq(arglist__26110);
return G__26108__delegate(args);
});
G__26108.cljs$core$IFn$_invoke$arity$variadic = G__26108__delegate;
return G__26108;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});
