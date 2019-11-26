// Compiled by ClojureScript 1.10.597 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__25089__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__25089 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25090__i = 0, G__25090__a = new Array(arguments.length -  0);
while (G__25090__i < G__25090__a.length) {G__25090__a[G__25090__i] = arguments[G__25090__i + 0]; ++G__25090__i;}
  args = new cljs.core.IndexedSeq(G__25090__a,0,null);
} 
return G__25089__delegate.call(this,args);};
G__25089.cljs$lang$maxFixedArity = 0;
G__25089.cljs$lang$applyTo = (function (arglist__25091){
var args = cljs.core.seq(arglist__25091);
return G__25089__delegate(args);
});
G__25089.cljs$core$IFn$_invoke$arity$variadic = G__25089__delegate;
return G__25089;
})()
);

(o.error = (function() { 
var G__25092__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__25092 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25093__i = 0, G__25093__a = new Array(arguments.length -  0);
while (G__25093__i < G__25093__a.length) {G__25093__a[G__25093__i] = arguments[G__25093__i + 0]; ++G__25093__i;}
  args = new cljs.core.IndexedSeq(G__25093__a,0,null);
} 
return G__25092__delegate.call(this,args);};
G__25092.cljs$lang$maxFixedArity = 0;
G__25092.cljs$lang$applyTo = (function (arglist__25094){
var args = cljs.core.seq(arglist__25094);
return G__25092__delegate(args);
});
G__25092.cljs$core$IFn$_invoke$arity$variadic = G__25092__delegate;
return G__25092;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1574747410722
