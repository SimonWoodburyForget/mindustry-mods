// Compiled by ClojureScript 1.10.597 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.19";
figwheel.client.js_stringify = (((((typeof JSON !== 'undefined')) && ((!((JSON.stringify == null))))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return cljs.core.str.cljs$core$IFn$_invoke$arity$1(x);
}catch (e31943){if((e31943 instanceof Error)){
var e = e31943;
return "Error: Unable to stringify";
} else {
throw e31943;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__31946 = arguments.length;
switch (G__31946) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__31944_SHARP_){
if(typeof p1__31944_SHARP_ === 'string'){
return p1__31944_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__31944_SHARP_);
}
}),args)], null)], null));

return null;
}));

(figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
}));

(figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2);

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4795__auto__ = [];
var len__4789__auto___31949 = arguments.length;
var i__4790__auto___31950 = (0);
while(true){
if((i__4790__auto___31950 < len__4789__auto___31949)){
args__4795__auto__.push((arguments[i__4790__auto___31950]));

var G__31951 = (i__4790__auto___31950 + (1));
i__4790__auto___31950 = G__31951;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
}));

(figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq31948){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31948));
}));

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4795__auto__ = [];
var len__4789__auto___31953 = arguments.length;
var i__4790__auto___31954 = (0);
while(true){
if((i__4790__auto___31954 < len__4789__auto___31953)){
args__4795__auto__.push((arguments[i__4790__auto___31954]));

var G__31955 = (i__4790__auto___31954 + (1));
i__4790__auto___31954 = G__31955;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
}));

(figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq31952){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31952));
}));

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
(cljs.core._STAR_print_newline_STAR_ = false);

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),"Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",(cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF")].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__31956){
var map__31957 = p__31956;
var map__31957__$1 = (((((!((map__31957 == null))))?(((((map__31957.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31957.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31957):map__31957);
var message = cljs.core.get.call(null,map__31957__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__31957__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__4185__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return false;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__27950__auto___32036 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27951__auto__ = (function (){var switch__27855__auto__ = (function (state_32008){
var state_val_32009 = (state_32008[(1)]);
if((state_val_32009 === (7))){
var inst_32004 = (state_32008[(2)]);
var state_32008__$1 = state_32008;
var statearr_32010_32037 = state_32008__$1;
(statearr_32010_32037[(2)] = inst_32004);

(statearr_32010_32037[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32009 === (1))){
var state_32008__$1 = state_32008;
var statearr_32011_32038 = state_32008__$1;
(statearr_32011_32038[(2)] = null);

(statearr_32011_32038[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32009 === (4))){
var inst_31961 = (state_32008[(7)]);
var inst_31961__$1 = (state_32008[(2)]);
var state_32008__$1 = (function (){var statearr_32012 = state_32008;
(statearr_32012[(7)] = inst_31961__$1);

return statearr_32012;
})();
if(cljs.core.truth_(inst_31961__$1)){
var statearr_32013_32039 = state_32008__$1;
(statearr_32013_32039[(1)] = (5));

} else {
var statearr_32014_32040 = state_32008__$1;
(statearr_32014_32040[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32009 === (15))){
var inst_31968 = (state_32008[(8)]);
var inst_31983 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_31968);
var inst_31984 = cljs.core.first.call(null,inst_31983);
var inst_31985 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_31984);
var inst_31986 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_31985)].join('');
var inst_31987 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_31986);
var state_32008__$1 = state_32008;
var statearr_32015_32041 = state_32008__$1;
(statearr_32015_32041[(2)] = inst_31987);

(statearr_32015_32041[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32009 === (13))){
var inst_31992 = (state_32008[(2)]);
var state_32008__$1 = state_32008;
var statearr_32016_32042 = state_32008__$1;
(statearr_32016_32042[(2)] = inst_31992);

(statearr_32016_32042[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32009 === (6))){
var state_32008__$1 = state_32008;
var statearr_32017_32043 = state_32008__$1;
(statearr_32017_32043[(2)] = null);

(statearr_32017_32043[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32009 === (17))){
var inst_31990 = (state_32008[(2)]);
var state_32008__$1 = state_32008;
var statearr_32018_32044 = state_32008__$1;
(statearr_32018_32044[(2)] = inst_31990);

(statearr_32018_32044[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32009 === (3))){
var inst_32006 = (state_32008[(2)]);
var state_32008__$1 = state_32008;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32008__$1,inst_32006);
} else {
if((state_val_32009 === (12))){
var inst_31967 = (state_32008[(9)]);
var inst_31981 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_31967,opts);
var state_32008__$1 = state_32008;
if(inst_31981){
var statearr_32019_32045 = state_32008__$1;
(statearr_32019_32045[(1)] = (15));

} else {
var statearr_32020_32046 = state_32008__$1;
(statearr_32020_32046[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32009 === (2))){
var state_32008__$1 = state_32008;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32008__$1,(4),ch);
} else {
if((state_val_32009 === (11))){
var inst_31968 = (state_32008[(8)]);
var inst_31973 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31974 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_31968);
var inst_31975 = cljs.core.async.timeout.call(null,(1000));
var inst_31976 = [inst_31974,inst_31975];
var inst_31977 = (new cljs.core.PersistentVector(null,2,(5),inst_31973,inst_31976,null));
var state_32008__$1 = state_32008;
return cljs.core.async.ioc_alts_BANG_.call(null,state_32008__$1,(14),inst_31977);
} else {
if((state_val_32009 === (9))){
var inst_31968 = (state_32008[(8)]);
var inst_31994 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_31995 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_31968);
var inst_31996 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_31995);
var inst_31997 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_31996)].join('');
var inst_31998 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_31997);
var state_32008__$1 = (function (){var statearr_32021 = state_32008;
(statearr_32021[(10)] = inst_31994);

return statearr_32021;
})();
var statearr_32022_32047 = state_32008__$1;
(statearr_32022_32047[(2)] = inst_31998);

(statearr_32022_32047[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32009 === (5))){
var inst_31961 = (state_32008[(7)]);
var inst_31963 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_31964 = (new cljs.core.PersistentArrayMap(null,2,inst_31963,null));
var inst_31965 = (new cljs.core.PersistentHashSet(null,inst_31964,null));
var inst_31966 = figwheel.client.focus_msgs.call(null,inst_31965,inst_31961);
var inst_31967 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_31966);
var inst_31968 = cljs.core.first.call(null,inst_31966);
var inst_31969 = figwheel.client.autoload_QMARK_.call(null);
var state_32008__$1 = (function (){var statearr_32023 = state_32008;
(statearr_32023[(9)] = inst_31967);

(statearr_32023[(8)] = inst_31968);

return statearr_32023;
})();
if(cljs.core.truth_(inst_31969)){
var statearr_32024_32048 = state_32008__$1;
(statearr_32024_32048[(1)] = (8));

} else {
var statearr_32025_32049 = state_32008__$1;
(statearr_32025_32049[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32009 === (14))){
var inst_31979 = (state_32008[(2)]);
var state_32008__$1 = state_32008;
var statearr_32026_32050 = state_32008__$1;
(statearr_32026_32050[(2)] = inst_31979);

(statearr_32026_32050[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32009 === (16))){
var state_32008__$1 = state_32008;
var statearr_32027_32051 = state_32008__$1;
(statearr_32027_32051[(2)] = null);

(statearr_32027_32051[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32009 === (10))){
var inst_32000 = (state_32008[(2)]);
var state_32008__$1 = (function (){var statearr_32028 = state_32008;
(statearr_32028[(11)] = inst_32000);

return statearr_32028;
})();
var statearr_32029_32052 = state_32008__$1;
(statearr_32029_32052[(2)] = null);

(statearr_32029_32052[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32009 === (8))){
var inst_31967 = (state_32008[(9)]);
var inst_31971 = figwheel.client.reload_file_state_QMARK_.call(null,inst_31967,opts);
var state_32008__$1 = state_32008;
if(cljs.core.truth_(inst_31971)){
var statearr_32030_32053 = state_32008__$1;
(statearr_32030_32053[(1)] = (11));

} else {
var statearr_32031_32054 = state_32008__$1;
(statearr_32031_32054[(1)] = (12));

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
});
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__27856__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__27856__auto____0 = (function (){
var statearr_32032 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32032[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__27856__auto__);

(statearr_32032[(1)] = (1));

return statearr_32032;
});
var figwheel$client$file_reloader_plugin_$_state_machine__27856__auto____1 = (function (state_32008){
while(true){
var ret_value__27857__auto__ = (function (){try{while(true){
var result__27858__auto__ = switch__27855__auto__.call(null,state_32008);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27858__auto__;
}
break;
}
}catch (e32033){if((e32033 instanceof Object)){
var ex__27859__auto__ = e32033;
var statearr_32034_32055 = state_32008;
(statearr_32034_32055[(5)] = ex__27859__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32008);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32033;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32056 = state_32008;
state_32008 = G__32056;
continue;
} else {
return ret_value__27857__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__27856__auto__ = function(state_32008){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__27856__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__27856__auto____1.call(this,state_32008);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__27856__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__27856__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__27856__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__27856__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__27856__auto__;
})()
})();
var state__27952__auto__ = (function (){var statearr_32035 = f__27951__auto__.call(null);
(statearr_32035[(6)] = c__27950__auto___32036);

return statearr_32035;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27952__auto__);
}));


return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__32057_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__32057_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(figwheel.client.utils.node_env_QMARK_.call(null)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(goog.userAgent.product.SAFARI){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(goog.userAgent.product.CHROME){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(goog.userAgent.product.FIREFOX){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(goog.userAgent.product.IE){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_32063 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__32059 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__32060 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__32061 = true;
var _STAR_print_fn_STAR__temp_val__32062 = (function (x){
return sb.append(x);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__32061);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__32062);

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
var result_value__$1 = (((!(typeof result_value === 'string')))?cljs.core.pr_str.call(null,result_value):result_value);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__32060);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__32059);
}}catch (e32058){if((e32058 instanceof Error)){
var e = e32058;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_32063], null));
} else {
var e = e32058;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return (cljs.user = ({}));
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__32064){
var map__32065 = p__32064;
var map__32065__$1 = (((((!((map__32065 == null))))?(((((map__32065.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32065.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32065):map__32065);
var opts = map__32065__$1;
var build_id = cljs.core.get.call(null,map__32065__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return (function (p__32067){
var vec__32068 = p__32067;
var seq__32069 = cljs.core.seq.call(null,vec__32068);
var first__32070 = cljs.core.first.call(null,seq__32069);
var seq__32069__$1 = cljs.core.next.call(null,seq__32069);
var map__32071 = first__32070;
var map__32071__$1 = (((((!((map__32071 == null))))?(((((map__32071.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32071.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32071):map__32071);
var msg = map__32071__$1;
var msg_name = cljs.core.get.call(null,map__32071__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__32069__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,(function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
}));
} else {
return null;
}
});
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__32073){
var vec__32074 = p__32073;
var seq__32075 = cljs.core.seq.call(null,vec__32074);
var first__32076 = cljs.core.first.call(null,seq__32075);
var seq__32075__$1 = cljs.core.next.call(null,seq__32075);
var map__32077 = first__32076;
var map__32077__$1 = (((((!((map__32077 == null))))?(((((map__32077.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32077.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32077):map__32077);
var msg = map__32077__$1;
var msg_name = cljs.core.get.call(null,map__32077__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__32075__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__32079){
var map__32080 = p__32079;
var map__32080__$1 = (((((!((map__32080 == null))))?(((((map__32080.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32080.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32080):map__32080);
var on_compile_warning = cljs.core.get.call(null,map__32080__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__32080__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return (function (p__32082){
var vec__32083 = p__32082;
var seq__32084 = cljs.core.seq.call(null,vec__32083);
var first__32085 = cljs.core.first.call(null,seq__32084);
var seq__32084__$1 = cljs.core.next.call(null,seq__32084);
var map__32086 = first__32085;
var map__32086__$1 = (((((!((map__32086 == null))))?(((((map__32086.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32086.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32086):map__32086);
var msg = map__32086__$1;
var msg_name = cljs.core.get.call(null,map__32086__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__32084__$1;
var pred__32088 = cljs.core._EQ_;
var expr__32089 = msg_name;
if(cljs.core.truth_(pred__32088.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__32089))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__32088.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__32089))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__27950__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27951__auto__ = (function (){var switch__27855__auto__ = (function (state_32178){
var state_val_32179 = (state_32178[(1)]);
if((state_val_32179 === (7))){
var inst_32098 = (state_32178[(2)]);
var state_32178__$1 = state_32178;
if(cljs.core.truth_(inst_32098)){
var statearr_32180_32227 = state_32178__$1;
(statearr_32180_32227[(1)] = (8));

} else {
var statearr_32181_32228 = state_32178__$1;
(statearr_32181_32228[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32179 === (20))){
var inst_32172 = (state_32178[(2)]);
var state_32178__$1 = state_32178;
var statearr_32182_32229 = state_32178__$1;
(statearr_32182_32229[(2)] = inst_32172);

(statearr_32182_32229[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32179 === (27))){
var inst_32168 = (state_32178[(2)]);
var state_32178__$1 = state_32178;
var statearr_32183_32230 = state_32178__$1;
(statearr_32183_32230[(2)] = inst_32168);

(statearr_32183_32230[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32179 === (1))){
var inst_32091 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_32178__$1 = state_32178;
if(cljs.core.truth_(inst_32091)){
var statearr_32184_32231 = state_32178__$1;
(statearr_32184_32231[(1)] = (2));

} else {
var statearr_32185_32232 = state_32178__$1;
(statearr_32185_32232[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32179 === (24))){
var inst_32170 = (state_32178[(2)]);
var state_32178__$1 = state_32178;
var statearr_32186_32233 = state_32178__$1;
(statearr_32186_32233[(2)] = inst_32170);

(statearr_32186_32233[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32179 === (4))){
var inst_32176 = (state_32178[(2)]);
var state_32178__$1 = state_32178;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32178__$1,inst_32176);
} else {
if((state_val_32179 === (15))){
var inst_32174 = (state_32178[(2)]);
var state_32178__$1 = state_32178;
var statearr_32187_32234 = state_32178__$1;
(statearr_32187_32234[(2)] = inst_32174);

(statearr_32187_32234[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32179 === (21))){
var inst_32127 = (state_32178[(2)]);
var inst_32128 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32129 = figwheel.client.auto_jump_to_error.call(null,opts,inst_32128);
var state_32178__$1 = (function (){var statearr_32188 = state_32178;
(statearr_32188[(7)] = inst_32127);

return statearr_32188;
})();
var statearr_32189_32235 = state_32178__$1;
(statearr_32189_32235[(2)] = inst_32129);

(statearr_32189_32235[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32179 === (31))){
var inst_32157 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_32178__$1 = state_32178;
if(inst_32157){
var statearr_32190_32236 = state_32178__$1;
(statearr_32190_32236[(1)] = (34));

} else {
var statearr_32191_32237 = state_32178__$1;
(statearr_32191_32237[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32179 === (32))){
var inst_32166 = (state_32178[(2)]);
var state_32178__$1 = state_32178;
var statearr_32192_32238 = state_32178__$1;
(statearr_32192_32238[(2)] = inst_32166);

(statearr_32192_32238[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32179 === (33))){
var inst_32153 = (state_32178[(2)]);
var inst_32154 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32155 = figwheel.client.auto_jump_to_error.call(null,opts,inst_32154);
var state_32178__$1 = (function (){var statearr_32193 = state_32178;
(statearr_32193[(8)] = inst_32153);

return statearr_32193;
})();
var statearr_32194_32239 = state_32178__$1;
(statearr_32194_32239[(2)] = inst_32155);

(statearr_32194_32239[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32179 === (13))){
var inst_32112 = figwheel.client.heads_up.clear.call(null);
var state_32178__$1 = state_32178;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32178__$1,(16),inst_32112);
} else {
if((state_val_32179 === (22))){
var inst_32133 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32134 = figwheel.client.heads_up.append_warning_message.call(null,inst_32133);
var state_32178__$1 = state_32178;
var statearr_32195_32240 = state_32178__$1;
(statearr_32195_32240[(2)] = inst_32134);

(statearr_32195_32240[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32179 === (36))){
var inst_32164 = (state_32178[(2)]);
var state_32178__$1 = state_32178;
var statearr_32196_32241 = state_32178__$1;
(statearr_32196_32241[(2)] = inst_32164);

(statearr_32196_32241[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32179 === (29))){
var inst_32144 = (state_32178[(2)]);
var inst_32145 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32146 = figwheel.client.auto_jump_to_error.call(null,opts,inst_32145);
var state_32178__$1 = (function (){var statearr_32197 = state_32178;
(statearr_32197[(9)] = inst_32144);

return statearr_32197;
})();
var statearr_32198_32242 = state_32178__$1;
(statearr_32198_32242[(2)] = inst_32146);

(statearr_32198_32242[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32179 === (6))){
var inst_32093 = (state_32178[(10)]);
var state_32178__$1 = state_32178;
var statearr_32199_32243 = state_32178__$1;
(statearr_32199_32243[(2)] = inst_32093);

(statearr_32199_32243[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32179 === (28))){
var inst_32140 = (state_32178[(2)]);
var inst_32141 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32142 = figwheel.client.heads_up.display_warning.call(null,inst_32141);
var state_32178__$1 = (function (){var statearr_32200 = state_32178;
(statearr_32200[(11)] = inst_32140);

return statearr_32200;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32178__$1,(29),inst_32142);
} else {
if((state_val_32179 === (25))){
var inst_32138 = figwheel.client.heads_up.clear.call(null);
var state_32178__$1 = state_32178;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32178__$1,(28),inst_32138);
} else {
if((state_val_32179 === (34))){
var inst_32159 = figwheel.client.heads_up.flash_loaded.call(null);
var state_32178__$1 = state_32178;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32178__$1,(37),inst_32159);
} else {
if((state_val_32179 === (17))){
var inst_32118 = (state_32178[(2)]);
var inst_32119 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32120 = figwheel.client.auto_jump_to_error.call(null,opts,inst_32119);
var state_32178__$1 = (function (){var statearr_32201 = state_32178;
(statearr_32201[(12)] = inst_32118);

return statearr_32201;
})();
var statearr_32202_32244 = state_32178__$1;
(statearr_32202_32244[(2)] = inst_32120);

(statearr_32202_32244[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32179 === (3))){
var inst_32110 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_32178__$1 = state_32178;
if(inst_32110){
var statearr_32203_32245 = state_32178__$1;
(statearr_32203_32245[(1)] = (13));

} else {
var statearr_32204_32246 = state_32178__$1;
(statearr_32204_32246[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32179 === (12))){
var inst_32106 = (state_32178[(2)]);
var state_32178__$1 = state_32178;
var statearr_32205_32247 = state_32178__$1;
(statearr_32205_32247[(2)] = inst_32106);

(statearr_32205_32247[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32179 === (2))){
var inst_32093 = (state_32178[(10)]);
var inst_32093__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_32178__$1 = (function (){var statearr_32206 = state_32178;
(statearr_32206[(10)] = inst_32093__$1);

return statearr_32206;
})();
if(cljs.core.truth_(inst_32093__$1)){
var statearr_32207_32248 = state_32178__$1;
(statearr_32207_32248[(1)] = (5));

} else {
var statearr_32208_32249 = state_32178__$1;
(statearr_32208_32249[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32179 === (23))){
var inst_32136 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_32178__$1 = state_32178;
if(inst_32136){
var statearr_32209_32250 = state_32178__$1;
(statearr_32209_32250[(1)] = (25));

} else {
var statearr_32210_32251 = state_32178__$1;
(statearr_32210_32251[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32179 === (35))){
var state_32178__$1 = state_32178;
var statearr_32211_32252 = state_32178__$1;
(statearr_32211_32252[(2)] = null);

(statearr_32211_32252[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32179 === (19))){
var inst_32131 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_32178__$1 = state_32178;
if(inst_32131){
var statearr_32212_32253 = state_32178__$1;
(statearr_32212_32253[(1)] = (22));

} else {
var statearr_32213_32254 = state_32178__$1;
(statearr_32213_32254[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32179 === (11))){
var inst_32102 = (state_32178[(2)]);
var state_32178__$1 = state_32178;
var statearr_32214_32255 = state_32178__$1;
(statearr_32214_32255[(2)] = inst_32102);

(statearr_32214_32255[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32179 === (9))){
var inst_32104 = figwheel.client.heads_up.clear.call(null);
var state_32178__$1 = state_32178;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32178__$1,(12),inst_32104);
} else {
if((state_val_32179 === (5))){
var inst_32095 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_32178__$1 = state_32178;
var statearr_32215_32256 = state_32178__$1;
(statearr_32215_32256[(2)] = inst_32095);

(statearr_32215_32256[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32179 === (14))){
var inst_32122 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_32178__$1 = state_32178;
if(inst_32122){
var statearr_32216_32257 = state_32178__$1;
(statearr_32216_32257[(1)] = (18));

} else {
var statearr_32217_32258 = state_32178__$1;
(statearr_32217_32258[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32179 === (26))){
var inst_32148 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_32178__$1 = state_32178;
if(inst_32148){
var statearr_32218_32259 = state_32178__$1;
(statearr_32218_32259[(1)] = (30));

} else {
var statearr_32219_32260 = state_32178__$1;
(statearr_32219_32260[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32179 === (16))){
var inst_32114 = (state_32178[(2)]);
var inst_32115 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32116 = figwheel.client.heads_up.display_exception.call(null,inst_32115);
var state_32178__$1 = (function (){var statearr_32220 = state_32178;
(statearr_32220[(13)] = inst_32114);

return statearr_32220;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32178__$1,(17),inst_32116);
} else {
if((state_val_32179 === (30))){
var inst_32150 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32151 = figwheel.client.heads_up.display_warning.call(null,inst_32150);
var state_32178__$1 = state_32178;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32178__$1,(33),inst_32151);
} else {
if((state_val_32179 === (10))){
var inst_32108 = (state_32178[(2)]);
var state_32178__$1 = state_32178;
var statearr_32221_32261 = state_32178__$1;
(statearr_32221_32261[(2)] = inst_32108);

(statearr_32221_32261[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32179 === (18))){
var inst_32124 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32125 = figwheel.client.heads_up.display_exception.call(null,inst_32124);
var state_32178__$1 = state_32178;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32178__$1,(21),inst_32125);
} else {
if((state_val_32179 === (37))){
var inst_32161 = (state_32178[(2)]);
var state_32178__$1 = state_32178;
var statearr_32222_32262 = state_32178__$1;
(statearr_32222_32262[(2)] = inst_32161);

(statearr_32222_32262[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32179 === (8))){
var inst_32100 = figwheel.client.heads_up.flash_loaded.call(null);
var state_32178__$1 = state_32178;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32178__$1,(11),inst_32100);
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
});
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27856__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27856__auto____0 = (function (){
var statearr_32223 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32223[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27856__auto__);

(statearr_32223[(1)] = (1));

return statearr_32223;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27856__auto____1 = (function (state_32178){
while(true){
var ret_value__27857__auto__ = (function (){try{while(true){
var result__27858__auto__ = switch__27855__auto__.call(null,state_32178);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27858__auto__;
}
break;
}
}catch (e32224){if((e32224 instanceof Object)){
var ex__27859__auto__ = e32224;
var statearr_32225_32263 = state_32178;
(statearr_32225_32263[(5)] = ex__27859__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32178);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32224;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32264 = state_32178;
state_32178 = G__32264;
continue;
} else {
return ret_value__27857__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27856__auto__ = function(state_32178){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27856__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27856__auto____1.call(this,state_32178);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27856__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27856__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27856__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27856__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27856__auto__;
})()
})();
var state__27952__auto__ = (function (){var statearr_32226 = f__27951__auto__.call(null);
(statearr_32226[(6)] = c__27950__auto__);

return statearr_32226;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27952__auto__);
}));

return c__27950__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__27950__auto___32293 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27951__auto__ = (function (){var switch__27855__auto__ = (function (state_32279){
var state_val_32280 = (state_32279[(1)]);
if((state_val_32280 === (1))){
var state_32279__$1 = state_32279;
var statearr_32281_32294 = state_32279__$1;
(statearr_32281_32294[(2)] = null);

(statearr_32281_32294[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32280 === (2))){
var state_32279__$1 = state_32279;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32279__$1,(4),ch);
} else {
if((state_val_32280 === (3))){
var inst_32277 = (state_32279[(2)]);
var state_32279__$1 = state_32279;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32279__$1,inst_32277);
} else {
if((state_val_32280 === (4))){
var inst_32267 = (state_32279[(7)]);
var inst_32267__$1 = (state_32279[(2)]);
var state_32279__$1 = (function (){var statearr_32282 = state_32279;
(statearr_32282[(7)] = inst_32267__$1);

return statearr_32282;
})();
if(cljs.core.truth_(inst_32267__$1)){
var statearr_32283_32295 = state_32279__$1;
(statearr_32283_32295[(1)] = (5));

} else {
var statearr_32284_32296 = state_32279__$1;
(statearr_32284_32296[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32280 === (5))){
var inst_32267 = (state_32279[(7)]);
var inst_32269 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_32267);
var state_32279__$1 = state_32279;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32279__$1,(8),inst_32269);
} else {
if((state_val_32280 === (6))){
var state_32279__$1 = state_32279;
var statearr_32285_32297 = state_32279__$1;
(statearr_32285_32297[(2)] = null);

(statearr_32285_32297[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32280 === (7))){
var inst_32275 = (state_32279[(2)]);
var state_32279__$1 = state_32279;
var statearr_32286_32298 = state_32279__$1;
(statearr_32286_32298[(2)] = inst_32275);

(statearr_32286_32298[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32280 === (8))){
var inst_32271 = (state_32279[(2)]);
var state_32279__$1 = (function (){var statearr_32287 = state_32279;
(statearr_32287[(8)] = inst_32271);

return statearr_32287;
})();
var statearr_32288_32299 = state_32279__$1;
(statearr_32288_32299[(2)] = null);

(statearr_32288_32299[(1)] = (2));


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
});
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__27856__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__27856__auto____0 = (function (){
var statearr_32289 = [null,null,null,null,null,null,null,null,null];
(statearr_32289[(0)] = figwheel$client$heads_up_plugin_$_state_machine__27856__auto__);

(statearr_32289[(1)] = (1));

return statearr_32289;
});
var figwheel$client$heads_up_plugin_$_state_machine__27856__auto____1 = (function (state_32279){
while(true){
var ret_value__27857__auto__ = (function (){try{while(true){
var result__27858__auto__ = switch__27855__auto__.call(null,state_32279);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27858__auto__;
}
break;
}
}catch (e32290){if((e32290 instanceof Object)){
var ex__27859__auto__ = e32290;
var statearr_32291_32300 = state_32279;
(statearr_32291_32300[(5)] = ex__27859__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32279);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32290;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32301 = state_32279;
state_32279 = G__32301;
continue;
} else {
return ret_value__27857__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__27856__auto__ = function(state_32279){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__27856__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__27856__auto____1.call(this,state_32279);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__27856__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__27856__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__27856__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__27856__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__27856__auto__;
})()
})();
var state__27952__auto__ = (function (){var statearr_32292 = f__27951__auto__.call(null);
(statearr_32292[(6)] = c__27950__auto___32293);

return statearr_32292;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27952__auto__);
}));


figwheel.client.heads_up.ensure_container.call(null);

return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__27950__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27951__auto__ = (function (){var switch__27855__auto__ = (function (state_32307){
var state_val_32308 = (state_32307[(1)]);
if((state_val_32308 === (1))){
var inst_32302 = cljs.core.async.timeout.call(null,(3000));
var state_32307__$1 = state_32307;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32307__$1,(2),inst_32302);
} else {
if((state_val_32308 === (2))){
var inst_32304 = (state_32307[(2)]);
var inst_32305 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_32307__$1 = (function (){var statearr_32309 = state_32307;
(statearr_32309[(7)] = inst_32304);

return statearr_32309;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32307__$1,inst_32305);
} else {
return null;
}
}
});
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__27856__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__27856__auto____0 = (function (){
var statearr_32310 = [null,null,null,null,null,null,null,null];
(statearr_32310[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__27856__auto__);

(statearr_32310[(1)] = (1));

return statearr_32310;
});
var figwheel$client$enforce_project_plugin_$_state_machine__27856__auto____1 = (function (state_32307){
while(true){
var ret_value__27857__auto__ = (function (){try{while(true){
var result__27858__auto__ = switch__27855__auto__.call(null,state_32307);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27858__auto__;
}
break;
}
}catch (e32311){if((e32311 instanceof Object)){
var ex__27859__auto__ = e32311;
var statearr_32312_32314 = state_32307;
(statearr_32312_32314[(5)] = ex__27859__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32307);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32311;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32315 = state_32307;
state_32307 = G__32315;
continue;
} else {
return ret_value__27857__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__27856__auto__ = function(state_32307){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__27856__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__27856__auto____1.call(this,state_32307);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__27856__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__27856__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__27856__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__27856__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__27856__auto__;
})()
})();
var state__27952__auto__ = (function (){var statearr_32313 = f__27951__auto__.call(null);
(statearr_32313[(6)] = c__27950__auto__);

return statearr_32313;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27952__auto__);
}));

return c__27950__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5735__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5735__auto__)){
var figwheel_version = temp__5735__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__27950__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27951__auto__ = (function (){var switch__27855__auto__ = (function (state_32322){
var state_val_32323 = (state_32322[(1)]);
if((state_val_32323 === (1))){
var inst_32316 = cljs.core.async.timeout.call(null,(2000));
var state_32322__$1 = state_32322;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32322__$1,(2),inst_32316);
} else {
if((state_val_32323 === (2))){
var inst_32318 = (state_32322[(2)]);
var inst_32319 = ["Figwheel Client Version <strong>",figwheel.client._figwheel_version_,"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_32320 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_32319);
var state_32322__$1 = (function (){var statearr_32324 = state_32322;
(statearr_32324[(7)] = inst_32318);

return statearr_32324;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32322__$1,inst_32320);
} else {
return null;
}
}
});
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27856__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27856__auto____0 = (function (){
var statearr_32325 = [null,null,null,null,null,null,null,null];
(statearr_32325[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27856__auto__);

(statearr_32325[(1)] = (1));

return statearr_32325;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27856__auto____1 = (function (state_32322){
while(true){
var ret_value__27857__auto__ = (function (){try{while(true){
var result__27858__auto__ = switch__27855__auto__.call(null,state_32322);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27858__auto__;
}
break;
}
}catch (e32326){if((e32326 instanceof Object)){
var ex__27859__auto__ = e32326;
var statearr_32327_32329 = state_32322;
(statearr_32327_32329[(5)] = ex__27859__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32322);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32326;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32330 = state_32322;
state_32322 = G__32330;
continue;
} else {
return ret_value__27857__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27856__auto__ = function(state_32322){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27856__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27856__auto____1.call(this,state_32322);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27856__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27856__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27856__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27856__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27856__auto__;
})()
})();
var state__27952__auto__ = (function (){var statearr_32328 = f__27951__auto__.call(null);
(statearr_32328[(6)] = c__27950__auto__);

return statearr_32328;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27952__auto__);
}));

return c__27950__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__32331){
var map__32332 = p__32331;
var map__32332__$1 = (((((!((map__32332 == null))))?(((((map__32332.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32332.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32332):map__32332);
var file = cljs.core.get.call(null,map__32332__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__32332__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__32332__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__32334 = "";
var G__32334__$1 = (cljs.core.truth_(file)?[G__32334,"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__32334);
var G__32334__$2 = (cljs.core.truth_(line)?[G__32334__$1," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__32334__$1);
if(cljs.core.truth_((function (){var and__4174__auto__ = line;
if(cljs.core.truth_(and__4174__auto__)){
return column;
} else {
return and__4174__auto__;
}
})())){
return [G__32334__$2,", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__32334__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__32335){
var map__32336 = p__32335;
var map__32336__$1 = (((((!((map__32336 == null))))?(((((map__32336.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32336.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32336):map__32336);
var ed = map__32336__$1;
var exception_data = cljs.core.get.call(null,map__32336__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__32336__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var message_32339 = (function (){var G__32338 = cljs.core.apply.call(null,cljs.core.str,"Figwheel: Compile Exception ",figwheel.client.format_messages.call(null,exception_data));
if(cljs.core.truth_(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(exception_data))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32338)," Error on ",figwheel.client.file_line_column.call(null,exception_data)].join('');
} else {
return G__32338;
}
})();
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),message_32339);

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__32340){
var map__32341 = p__32340;
var map__32341__$1 = (((((!((map__32341 == null))))?(((((map__32341.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32341.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32341):map__32341);
var w = map__32341__$1;
var message = cljs.core.get.call(null,map__32341__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",figwheel.client.file_line_column.call(null,message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.config_defaults !== 'undefined')){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"js/out/figwheel/client.cljs",33,1,362,362,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"js/out/figwheel/client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(figwheel.client.utils.html_env_QMARK_.call(null)){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = (((!(figwheel.client.utils.html_env_QMARK_.call(null))))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__4174__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__4174__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__4174__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__32343 = cljs.core.seq.call(null,plugins);
var chunk__32344 = null;
var count__32345 = (0);
var i__32346 = (0);
while(true){
if((i__32346 < count__32345)){
var vec__32353 = cljs.core._nth.call(null,chunk__32344,i__32346);
var k = cljs.core.nth.call(null,vec__32353,(0),null);
var plugin = cljs.core.nth.call(null,vec__32353,(1),null);
if(cljs.core.truth_(plugin)){
var pl_32359 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__32343,chunk__32344,count__32345,i__32346,pl_32359,vec__32353,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_32359.call(null,msg_hist);
});})(seq__32343,chunk__32344,count__32345,i__32346,pl_32359,vec__32353,k,plugin))
);
} else {
}


var G__32360 = seq__32343;
var G__32361 = chunk__32344;
var G__32362 = count__32345;
var G__32363 = (i__32346 + (1));
seq__32343 = G__32360;
chunk__32344 = G__32361;
count__32345 = G__32362;
i__32346 = G__32363;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__32343);
if(temp__5735__auto__){
var seq__32343__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32343__$1)){
var c__4609__auto__ = cljs.core.chunk_first.call(null,seq__32343__$1);
var G__32364 = cljs.core.chunk_rest.call(null,seq__32343__$1);
var G__32365 = c__4609__auto__;
var G__32366 = cljs.core.count.call(null,c__4609__auto__);
var G__32367 = (0);
seq__32343 = G__32364;
chunk__32344 = G__32365;
count__32345 = G__32366;
i__32346 = G__32367;
continue;
} else {
var vec__32356 = cljs.core.first.call(null,seq__32343__$1);
var k = cljs.core.nth.call(null,vec__32356,(0),null);
var plugin = cljs.core.nth.call(null,vec__32356,(1),null);
if(cljs.core.truth_(plugin)){
var pl_32368 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__32343,chunk__32344,count__32345,i__32346,pl_32368,vec__32356,k,plugin,seq__32343__$1,temp__5735__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_32368.call(null,msg_hist);
});})(seq__32343,chunk__32344,count__32345,i__32346,pl_32368,vec__32356,k,plugin,seq__32343__$1,temp__5735__auto__))
);
} else {
}


var G__32369 = cljs.core.next.call(null,seq__32343__$1);
var G__32370 = null;
var G__32371 = (0);
var G__32372 = (0);
seq__32343 = G__32369;
chunk__32344 = G__32370;
count__32345 = G__32371;
i__32346 = G__32372;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__32374 = arguments.length;
switch (G__32374) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.__figwheel_start_once__ !== 'undefined')){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
(figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts));

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__32375_32380 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__32376_32381 = null;
var count__32377_32382 = (0);
var i__32378_32383 = (0);
while(true){
if((i__32378_32383 < count__32377_32382)){
var msg_32384 = cljs.core._nth.call(null,chunk__32376_32381,i__32378_32383);
figwheel.client.socket.handle_incoming_message.call(null,msg_32384);


var G__32385 = seq__32375_32380;
var G__32386 = chunk__32376_32381;
var G__32387 = count__32377_32382;
var G__32388 = (i__32378_32383 + (1));
seq__32375_32380 = G__32385;
chunk__32376_32381 = G__32386;
count__32377_32382 = G__32387;
i__32378_32383 = G__32388;
continue;
} else {
var temp__5735__auto___32389 = cljs.core.seq.call(null,seq__32375_32380);
if(temp__5735__auto___32389){
var seq__32375_32390__$1 = temp__5735__auto___32389;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32375_32390__$1)){
var c__4609__auto___32391 = cljs.core.chunk_first.call(null,seq__32375_32390__$1);
var G__32392 = cljs.core.chunk_rest.call(null,seq__32375_32390__$1);
var G__32393 = c__4609__auto___32391;
var G__32394 = cljs.core.count.call(null,c__4609__auto___32391);
var G__32395 = (0);
seq__32375_32380 = G__32392;
chunk__32376_32381 = G__32393;
count__32377_32382 = G__32394;
i__32378_32383 = G__32395;
continue;
} else {
var msg_32396 = cljs.core.first.call(null,seq__32375_32390__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_32396);


var G__32397 = cljs.core.next.call(null,seq__32375_32390__$1);
var G__32398 = null;
var G__32399 = (0);
var G__32400 = (0);
seq__32375_32380 = G__32397;
chunk__32376_32381 = G__32398;
count__32377_32382 = G__32399;
i__32378_32383 = G__32400;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
}));

(figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
}));

(figwheel.client.start.cljs$lang$maxFixedArity = 1);

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4795__auto__ = [];
var len__4789__auto___32405 = arguments.length;
var i__4790__auto___32406 = (0);
while(true){
if((i__4790__auto___32406 < len__4789__auto___32405)){
args__4795__auto__.push((arguments[i__4790__auto___32406]));

var G__32407 = (i__4790__auto___32406 + (1));
i__4790__auto___32406 = G__32407;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__32402){
var map__32403 = p__32402;
var map__32403__$1 = (((((!((map__32403 == null))))?(((((map__32403.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32403.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32403):map__32403);
var opts = map__32403__$1;
return figwheel.client.start.call(null,opts);
}));

(figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq32401){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32401));
}));

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e32408){if((e32408 instanceof Error)){
var e = e32408;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e32408;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
(goog.dependencies_ = true);
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),(function (p__32409){
var map__32410 = p__32409;
var map__32410__$1 = (((((!((map__32410 == null))))?(((((map__32410.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32410.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32410):map__32410);
var msg_name = cljs.core.get.call(null,map__32410__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return (location.href = location.href);
} else {
return null;
}
}));
});

//# sourceMappingURL=client.js.map?rel=1574747418097
