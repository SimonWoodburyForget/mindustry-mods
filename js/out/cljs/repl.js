// Compiled by ClojureScript 1.10.597 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__31596){
var map__31597 = p__31596;
var map__31597__$1 = (((((!((map__31597 == null))))?(((((map__31597.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31597.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31597):map__31597);
var m = map__31597__$1;
var n = cljs.core.get.call(null,map__31597__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__31597__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4185__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__31599_31631 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31600_31632 = null;
var count__31601_31633 = (0);
var i__31602_31634 = (0);
while(true){
if((i__31602_31634 < count__31601_31633)){
var f_31635 = cljs.core._nth.call(null,chunk__31600_31632,i__31602_31634);
cljs.core.println.call(null,"  ",f_31635);


var G__31636 = seq__31599_31631;
var G__31637 = chunk__31600_31632;
var G__31638 = count__31601_31633;
var G__31639 = (i__31602_31634 + (1));
seq__31599_31631 = G__31636;
chunk__31600_31632 = G__31637;
count__31601_31633 = G__31638;
i__31602_31634 = G__31639;
continue;
} else {
var temp__5735__auto___31640 = cljs.core.seq.call(null,seq__31599_31631);
if(temp__5735__auto___31640){
var seq__31599_31641__$1 = temp__5735__auto___31640;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31599_31641__$1)){
var c__4609__auto___31642 = cljs.core.chunk_first.call(null,seq__31599_31641__$1);
var G__31643 = cljs.core.chunk_rest.call(null,seq__31599_31641__$1);
var G__31644 = c__4609__auto___31642;
var G__31645 = cljs.core.count.call(null,c__4609__auto___31642);
var G__31646 = (0);
seq__31599_31631 = G__31643;
chunk__31600_31632 = G__31644;
count__31601_31633 = G__31645;
i__31602_31634 = G__31646;
continue;
} else {
var f_31647 = cljs.core.first.call(null,seq__31599_31641__$1);
cljs.core.println.call(null,"  ",f_31647);


var G__31648 = cljs.core.next.call(null,seq__31599_31641__$1);
var G__31649 = null;
var G__31650 = (0);
var G__31651 = (0);
seq__31599_31631 = G__31648;
chunk__31600_31632 = G__31649;
count__31601_31633 = G__31650;
i__31602_31634 = G__31651;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_31652 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4185__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_31652);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_31652)))?cljs.core.second.call(null,arglists_31652):arglists_31652));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__31603_31653 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31604_31654 = null;
var count__31605_31655 = (0);
var i__31606_31656 = (0);
while(true){
if((i__31606_31656 < count__31605_31655)){
var vec__31617_31657 = cljs.core._nth.call(null,chunk__31604_31654,i__31606_31656);
var name_31658 = cljs.core.nth.call(null,vec__31617_31657,(0),null);
var map__31620_31659 = cljs.core.nth.call(null,vec__31617_31657,(1),null);
var map__31620_31660__$1 = (((((!((map__31620_31659 == null))))?(((((map__31620_31659.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31620_31659.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31620_31659):map__31620_31659);
var doc_31661 = cljs.core.get.call(null,map__31620_31660__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_31662 = cljs.core.get.call(null,map__31620_31660__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_31658);

cljs.core.println.call(null," ",arglists_31662);

if(cljs.core.truth_(doc_31661)){
cljs.core.println.call(null," ",doc_31661);
} else {
}


var G__31663 = seq__31603_31653;
var G__31664 = chunk__31604_31654;
var G__31665 = count__31605_31655;
var G__31666 = (i__31606_31656 + (1));
seq__31603_31653 = G__31663;
chunk__31604_31654 = G__31664;
count__31605_31655 = G__31665;
i__31606_31656 = G__31666;
continue;
} else {
var temp__5735__auto___31667 = cljs.core.seq.call(null,seq__31603_31653);
if(temp__5735__auto___31667){
var seq__31603_31668__$1 = temp__5735__auto___31667;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31603_31668__$1)){
var c__4609__auto___31669 = cljs.core.chunk_first.call(null,seq__31603_31668__$1);
var G__31670 = cljs.core.chunk_rest.call(null,seq__31603_31668__$1);
var G__31671 = c__4609__auto___31669;
var G__31672 = cljs.core.count.call(null,c__4609__auto___31669);
var G__31673 = (0);
seq__31603_31653 = G__31670;
chunk__31604_31654 = G__31671;
count__31605_31655 = G__31672;
i__31606_31656 = G__31673;
continue;
} else {
var vec__31622_31674 = cljs.core.first.call(null,seq__31603_31668__$1);
var name_31675 = cljs.core.nth.call(null,vec__31622_31674,(0),null);
var map__31625_31676 = cljs.core.nth.call(null,vec__31622_31674,(1),null);
var map__31625_31677__$1 = (((((!((map__31625_31676 == null))))?(((((map__31625_31676.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31625_31676.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31625_31676):map__31625_31676);
var doc_31678 = cljs.core.get.call(null,map__31625_31677__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_31679 = cljs.core.get.call(null,map__31625_31677__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_31675);

cljs.core.println.call(null," ",arglists_31679);

if(cljs.core.truth_(doc_31678)){
cljs.core.println.call(null," ",doc_31678);
} else {
}


var G__31680 = cljs.core.next.call(null,seq__31603_31668__$1);
var G__31681 = null;
var G__31682 = (0);
var G__31683 = (0);
seq__31603_31653 = G__31680;
chunk__31604_31654 = G__31681;
count__31605_31655 = G__31682;
i__31606_31656 = G__31683;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.call(null,"Spec");

var seq__31627 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__31628 = null;
var count__31629 = (0);
var i__31630 = (0);
while(true){
if((i__31630 < count__31629)){
var role = cljs.core._nth.call(null,chunk__31628,i__31630);
var temp__5735__auto___31684__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___31684__$1)){
var spec_31685 = temp__5735__auto___31684__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_31685));
} else {
}


var G__31686 = seq__31627;
var G__31687 = chunk__31628;
var G__31688 = count__31629;
var G__31689 = (i__31630 + (1));
seq__31627 = G__31686;
chunk__31628 = G__31687;
count__31629 = G__31688;
i__31630 = G__31689;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq.call(null,seq__31627);
if(temp__5735__auto____$1){
var seq__31627__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31627__$1)){
var c__4609__auto__ = cljs.core.chunk_first.call(null,seq__31627__$1);
var G__31690 = cljs.core.chunk_rest.call(null,seq__31627__$1);
var G__31691 = c__4609__auto__;
var G__31692 = cljs.core.count.call(null,c__4609__auto__);
var G__31693 = (0);
seq__31627 = G__31690;
chunk__31628 = G__31691;
count__31629 = G__31692;
i__31630 = G__31693;
continue;
} else {
var role = cljs.core.first.call(null,seq__31627__$1);
var temp__5735__auto___31694__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___31694__$2)){
var spec_31695 = temp__5735__auto___31694__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_31695));
} else {
}


var G__31696 = cljs.core.next.call(null,seq__31627__$1);
var G__31697 = null;
var G__31698 = (0);
var G__31699 = (0);
seq__31627 = G__31696;
chunk__31628 = G__31697;
count__31629 = G__31698;
i__31630 = G__31699;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.call(null,"js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__31700 = cljs.core.conj.call(null,via,t);
var G__31701 = cljs.core.ex_cause.call(null,t);
via = G__31700;
t = G__31701;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__31704 = datafied_throwable;
var map__31704__$1 = (((((!((map__31704 == null))))?(((((map__31704.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31704.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31704):map__31704);
var via = cljs.core.get.call(null,map__31704__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__31704__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__31704__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__31705 = cljs.core.last.call(null,via);
var map__31705__$1 = (((((!((map__31705 == null))))?(((((map__31705.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31705.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31705):map__31705);
var type = cljs.core.get.call(null,map__31705__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__31705__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__31705__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__31706 = data;
var map__31706__$1 = (((((!((map__31706 == null))))?(((((map__31706.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31706.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31706):map__31706);
var problems = cljs.core.get.call(null,map__31706__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__31706__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__31706__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__31707 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__31707__$1 = (((((!((map__31707 == null))))?(((((map__31707.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31707.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31707):map__31707);
var top_data = map__31707__$1;
var source = cljs.core.get.call(null,map__31707__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__31712 = phase;
var G__31712__$1 = (((G__31712 instanceof cljs.core.Keyword))?G__31712.fqn:null);
switch (G__31712__$1) {
case "read-source":
var map__31713 = data;
var map__31713__$1 = (((((!((map__31713 == null))))?(((((map__31713.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31713.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31713):map__31713);
var line = cljs.core.get.call(null,map__31713__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__31713__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__31715 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__31715__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__31715,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__31715);
var G__31715__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__31715__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__31715__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__31715__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__31715__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__31716 = top_data;
var G__31716__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__31716,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__31716);
var G__31716__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__31716__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__31716__$1);
var G__31716__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__31716__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__31716__$2);
var G__31716__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__31716__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__31716__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__31716__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__31716__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__31717 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__31717,(0),null);
var method = cljs.core.nth.call(null,vec__31717,(1),null);
var file = cljs.core.nth.call(null,vec__31717,(2),null);
var line = cljs.core.nth.call(null,vec__31717,(3),null);
var G__31720 = top_data;
var G__31720__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__31720,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__31720);
var G__31720__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__31720__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__31720__$1);
var G__31720__$3 = (cljs.core.truth_((function (){var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
})())?cljs.core.assoc.call(null,G__31720__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__31720__$2);
var G__31720__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__31720__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__31720__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__31720__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__31720__$4;
}

break;
case "execution":
var vec__31721 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__31721,(0),null);
var method = cljs.core.nth.call(null,vec__31721,(1),null);
var file = cljs.core.nth.call(null,vec__31721,(2),null);
var line = cljs.core.nth.call(null,vec__31721,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__31703_SHARP_){
var or__4185__auto__ = (p1__31703_SHARP_ == null);
if(or__4185__auto__){
return or__4185__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__31703_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4185__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return line;
}
})();
var G__31724 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__31724__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__31724,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__31724);
var G__31724__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__31724__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__31724__$1);
var G__31724__$3 = (cljs.core.truth_((function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
}
})())?cljs.core.assoc.call(null,G__31724__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__31724__$2);
var G__31724__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__31724__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__31724__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__31724__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__31724__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31712__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__31728){
var map__31729 = p__31728;
var map__31729__$1 = (((((!((map__31729 == null))))?(((((map__31729.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31729.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31729):map__31729);
var triage_data = map__31729__$1;
var phase = cljs.core.get.call(null,map__31729__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__31729__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__31729__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__31729__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__31729__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__31729__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__31729__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__31729__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4185__auto__ = source;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4185__auto__ = line;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__4185__auto__ = class$;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__31731 = phase;
var G__31731__$1 = (((G__31731 instanceof cljs.core.Keyword))?G__31731.fqn:null);
switch (G__31731__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__31732_31741 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__31733_31742 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__31734_31743 = true;
var _STAR_print_fn_STAR__temp_val__31735_31744 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__31734_31743);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__31735_31744);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__31726_SHARP_){
return cljs.core.dissoc.call(null,p1__31726_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__31733_31742);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__31732_31741);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__31736_31745 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__31737_31746 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__31738_31747 = true;
var _STAR_print_fn_STAR__temp_val__31739_31748 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__31738_31747);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__31739_31748);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__31727_SHARP_){
return cljs.core.dissoc.call(null,p1__31727_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__31737_31746);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__31736_31745);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31731__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map?rel=1574747417555
