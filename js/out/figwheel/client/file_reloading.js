// Compiled by ClojureScript 1.10.597 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined')){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__4185__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__4185__auto__){
return or__4185__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__4185__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return ((goog.string.startsWith("clojure.",name)) || (goog.string.startsWith("goog.",name)));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__30066_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__30066_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependency_data !== 'undefined')){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,(function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
}));
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,(function (v,k,_){
return goog.object.forEach(v,(function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__30067 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__30068 = null;
var count__30069 = (0);
var i__30070 = (0);
while(true){
if((i__30070 < count__30069)){
var n = cljs.core._nth.call(null,chunk__30068,i__30070);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__30071 = seq__30067;
var G__30072 = chunk__30068;
var G__30073 = count__30069;
var G__30074 = (i__30070 + (1));
seq__30067 = G__30071;
chunk__30068 = G__30072;
count__30069 = G__30073;
i__30070 = G__30074;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__30067);
if(temp__5735__auto__){
var seq__30067__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30067__$1)){
var c__4609__auto__ = cljs.core.chunk_first.call(null,seq__30067__$1);
var G__30075 = cljs.core.chunk_rest.call(null,seq__30067__$1);
var G__30076 = c__4609__auto__;
var G__30077 = cljs.core.count.call(null,c__4609__auto__);
var G__30078 = (0);
seq__30067 = G__30075;
chunk__30068 = G__30076;
count__30069 = G__30077;
i__30070 = G__30078;
continue;
} else {
var n = cljs.core.first.call(null,seq__30067__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__30079 = cljs.core.next.call(null,seq__30067__$1);
var G__30080 = null;
var G__30081 = (0);
var G__30082 = (0);
seq__30067 = G__30079;
chunk__30068 = G__30080;
count__30069 = G__30081;
i__30070 = G__30082;
continue;
}
} else {
return null;
}
}
break;
}
}));
}));
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__30083){
var vec__30084 = p__30083;
var _ = cljs.core.nth.call(null,vec__30084,(0),null);
var v = cljs.core.nth.call(null,vec__30084,(1),null);
var and__4174__auto__ = v;
if(cljs.core.truth_(and__4174__auto__)){
return v.call(null,dep);
} else {
return and__4174__auto__;
}
}),cljs.core.filter.call(null,(function (p__30087){
var vec__30088 = p__30087;
var k = cljs.core.nth.call(null,vec__30088,(0),null);
var v = cljs.core.nth.call(null,vec__30088,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});
var topo_sort_STAR_ = (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__30100_30108 = cljs.core.seq.call(null,deps);
var chunk__30101_30109 = null;
var count__30102_30110 = (0);
var i__30103_30111 = (0);
while(true){
if((i__30103_30111 < count__30102_30110)){
var dep_30112 = cljs.core._nth.call(null,chunk__30101_30109,i__30103_30111);
if(cljs.core.truth_((function (){var and__4174__auto__ = dep_30112;
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_30112));
} else {
return and__4174__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_30112,(depth + (1)),state);
} else {
}


var G__30113 = seq__30100_30108;
var G__30114 = chunk__30101_30109;
var G__30115 = count__30102_30110;
var G__30116 = (i__30103_30111 + (1));
seq__30100_30108 = G__30113;
chunk__30101_30109 = G__30114;
count__30102_30110 = G__30115;
i__30103_30111 = G__30116;
continue;
} else {
var temp__5735__auto___30117 = cljs.core.seq.call(null,seq__30100_30108);
if(temp__5735__auto___30117){
var seq__30100_30118__$1 = temp__5735__auto___30117;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30100_30118__$1)){
var c__4609__auto___30119 = cljs.core.chunk_first.call(null,seq__30100_30118__$1);
var G__30120 = cljs.core.chunk_rest.call(null,seq__30100_30118__$1);
var G__30121 = c__4609__auto___30119;
var G__30122 = cljs.core.count.call(null,c__4609__auto___30119);
var G__30123 = (0);
seq__30100_30108 = G__30120;
chunk__30101_30109 = G__30121;
count__30102_30110 = G__30122;
i__30103_30111 = G__30123;
continue;
} else {
var dep_30124 = cljs.core.first.call(null,seq__30100_30118__$1);
if(cljs.core.truth_((function (){var and__4174__auto__ = dep_30124;
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_30124));
} else {
return and__4174__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_30124,(depth + (1)),state);
} else {
}


var G__30125 = cljs.core.next.call(null,seq__30100_30118__$1);
var G__30126 = null;
var G__30127 = (0);
var G__30128 = (0);
seq__30100_30108 = G__30125;
chunk__30101_30109 = G__30126;
count__30102_30110 = G__30127;
i__30103_30111 = G__30128;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;
var elim_dups_STAR_ = (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__30104){
var vec__30105 = p__30104;
var seq__30106 = cljs.core.seq.call(null,vec__30105);
var first__30107 = cljs.core.first.call(null,seq__30106);
var seq__30106__$1 = cljs.core.next.call(null,seq__30106);
var x = first__30107;
var xs = seq__30106__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,(function (p1__30091_SHARP_){
return clojure.set.difference.call(null,p1__30091_SHARP_,x);
}),xs)));
}
});
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__30129 = cljs.core.seq.call(null,provides);
var chunk__30130 = null;
var count__30131 = (0);
var i__30132 = (0);
while(true){
if((i__30132 < count__30131)){
var prov = cljs.core._nth.call(null,chunk__30130,i__30132);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__30141_30149 = cljs.core.seq.call(null,requires);
var chunk__30142_30150 = null;
var count__30143_30151 = (0);
var i__30144_30152 = (0);
while(true){
if((i__30144_30152 < count__30143_30151)){
var req_30153 = cljs.core._nth.call(null,chunk__30142_30150,i__30144_30152);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30153,prov);


var G__30154 = seq__30141_30149;
var G__30155 = chunk__30142_30150;
var G__30156 = count__30143_30151;
var G__30157 = (i__30144_30152 + (1));
seq__30141_30149 = G__30154;
chunk__30142_30150 = G__30155;
count__30143_30151 = G__30156;
i__30144_30152 = G__30157;
continue;
} else {
var temp__5735__auto___30158 = cljs.core.seq.call(null,seq__30141_30149);
if(temp__5735__auto___30158){
var seq__30141_30159__$1 = temp__5735__auto___30158;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30141_30159__$1)){
var c__4609__auto___30160 = cljs.core.chunk_first.call(null,seq__30141_30159__$1);
var G__30161 = cljs.core.chunk_rest.call(null,seq__30141_30159__$1);
var G__30162 = c__4609__auto___30160;
var G__30163 = cljs.core.count.call(null,c__4609__auto___30160);
var G__30164 = (0);
seq__30141_30149 = G__30161;
chunk__30142_30150 = G__30162;
count__30143_30151 = G__30163;
i__30144_30152 = G__30164;
continue;
} else {
var req_30165 = cljs.core.first.call(null,seq__30141_30159__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30165,prov);


var G__30166 = cljs.core.next.call(null,seq__30141_30159__$1);
var G__30167 = null;
var G__30168 = (0);
var G__30169 = (0);
seq__30141_30149 = G__30166;
chunk__30142_30150 = G__30167;
count__30143_30151 = G__30168;
i__30144_30152 = G__30169;
continue;
}
} else {
}
}
break;
}


var G__30170 = seq__30129;
var G__30171 = chunk__30130;
var G__30172 = count__30131;
var G__30173 = (i__30132 + (1));
seq__30129 = G__30170;
chunk__30130 = G__30171;
count__30131 = G__30172;
i__30132 = G__30173;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__30129);
if(temp__5735__auto__){
var seq__30129__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30129__$1)){
var c__4609__auto__ = cljs.core.chunk_first.call(null,seq__30129__$1);
var G__30174 = cljs.core.chunk_rest.call(null,seq__30129__$1);
var G__30175 = c__4609__auto__;
var G__30176 = cljs.core.count.call(null,c__4609__auto__);
var G__30177 = (0);
seq__30129 = G__30174;
chunk__30130 = G__30175;
count__30131 = G__30176;
i__30132 = G__30177;
continue;
} else {
var prov = cljs.core.first.call(null,seq__30129__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__30145_30178 = cljs.core.seq.call(null,requires);
var chunk__30146_30179 = null;
var count__30147_30180 = (0);
var i__30148_30181 = (0);
while(true){
if((i__30148_30181 < count__30147_30180)){
var req_30182 = cljs.core._nth.call(null,chunk__30146_30179,i__30148_30181);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30182,prov);


var G__30183 = seq__30145_30178;
var G__30184 = chunk__30146_30179;
var G__30185 = count__30147_30180;
var G__30186 = (i__30148_30181 + (1));
seq__30145_30178 = G__30183;
chunk__30146_30179 = G__30184;
count__30147_30180 = G__30185;
i__30148_30181 = G__30186;
continue;
} else {
var temp__5735__auto___30187__$1 = cljs.core.seq.call(null,seq__30145_30178);
if(temp__5735__auto___30187__$1){
var seq__30145_30188__$1 = temp__5735__auto___30187__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30145_30188__$1)){
var c__4609__auto___30189 = cljs.core.chunk_first.call(null,seq__30145_30188__$1);
var G__30190 = cljs.core.chunk_rest.call(null,seq__30145_30188__$1);
var G__30191 = c__4609__auto___30189;
var G__30192 = cljs.core.count.call(null,c__4609__auto___30189);
var G__30193 = (0);
seq__30145_30178 = G__30190;
chunk__30146_30179 = G__30191;
count__30147_30180 = G__30192;
i__30148_30181 = G__30193;
continue;
} else {
var req_30194 = cljs.core.first.call(null,seq__30145_30188__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30194,prov);


var G__30195 = cljs.core.next.call(null,seq__30145_30188__$1);
var G__30196 = null;
var G__30197 = (0);
var G__30198 = (0);
seq__30145_30178 = G__30195;
chunk__30146_30179 = G__30196;
count__30147_30180 = G__30197;
i__30148_30181 = G__30198;
continue;
}
} else {
}
}
break;
}


var G__30199 = cljs.core.next.call(null,seq__30129__$1);
var G__30200 = null;
var G__30201 = (0);
var G__30202 = (0);
seq__30129 = G__30199;
chunk__30130 = G__30200;
count__30131 = G__30201;
i__30132 = G__30202;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
(goog.require = figwheel.client.file_reloading.figwheel_require);

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__30203_30207 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__30204_30208 = null;
var count__30205_30209 = (0);
var i__30206_30210 = (0);
while(true){
if((i__30206_30210 < count__30205_30209)){
var ns_30211 = cljs.core._nth.call(null,chunk__30204_30208,i__30206_30210);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_30211);


var G__30212 = seq__30203_30207;
var G__30213 = chunk__30204_30208;
var G__30214 = count__30205_30209;
var G__30215 = (i__30206_30210 + (1));
seq__30203_30207 = G__30212;
chunk__30204_30208 = G__30213;
count__30205_30209 = G__30214;
i__30206_30210 = G__30215;
continue;
} else {
var temp__5735__auto___30216 = cljs.core.seq.call(null,seq__30203_30207);
if(temp__5735__auto___30216){
var seq__30203_30217__$1 = temp__5735__auto___30216;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30203_30217__$1)){
var c__4609__auto___30218 = cljs.core.chunk_first.call(null,seq__30203_30217__$1);
var G__30219 = cljs.core.chunk_rest.call(null,seq__30203_30217__$1);
var G__30220 = c__4609__auto___30218;
var G__30221 = cljs.core.count.call(null,c__4609__auto___30218);
var G__30222 = (0);
seq__30203_30207 = G__30219;
chunk__30204_30208 = G__30220;
count__30205_30209 = G__30221;
i__30206_30210 = G__30222;
continue;
} else {
var ns_30223 = cljs.core.first.call(null,seq__30203_30217__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_30223);


var G__30224 = cljs.core.next.call(null,seq__30203_30217__$1);
var G__30225 = null;
var G__30226 = (0);
var G__30227 = (0);
seq__30203_30207 = G__30224;
chunk__30204_30208 = G__30225;
count__30205_30209 = G__30226;
i__30206_30210 = G__30227;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
(goog.require_figwheel_backup_ = (function (){var or__4185__auto__ = goog.require__;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return goog.require;
}
})());

(goog.isProvided_ = (function (name){
return false;
}));

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

(goog.addDependency_figwheel_backup_ = goog.addDependency);

(goog.addDependency = (function() { 
var G__30228__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__30228 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30229__i = 0, G__30229__a = new Array(arguments.length -  0);
while (G__30229__i < G__30229__a.length) {G__30229__a[G__30229__i] = arguments[G__30229__i + 0]; ++G__30229__i;}
  args = new cljs.core.IndexedSeq(G__30229__a,0,null);
} 
return G__30228__delegate.call(this,args);};
G__30228.cljs$lang$maxFixedArity = 0;
G__30228.cljs$lang$applyTo = (function (arglist__30230){
var args = cljs.core.seq(arglist__30230);
return G__30228__delegate(args);
});
G__30228.cljs$core$IFn$_invoke$arity$variadic = G__30228__delegate;
return G__30228;
})()
);

goog.constructNamespace_("cljs.user");

(goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload);

return (goog.require = figwheel.client.file_reloading.figwheel_require);
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined')){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__30231_SHARP_,p2__30232_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__30231_SHARP_)),p2__30232_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__30233_SHARP_,p2__30234_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__30233_SHARP_),p2__30234_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__30235 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__30235.addCallback((function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
}));

G__30235.addErrback((function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
}));

return G__30235;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e30236){if((e30236 instanceof Error)){
var e = e30236;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e30236;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,(function (v,k,o){
return goog.string.endsWith(k,util_pattern);
}));
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e30237){if((e30237 instanceof Error)){
var e = e30237;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e30237;

}
}})());
});
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__30238 = cljs.core._EQ_;
var expr__30239 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__30238.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__30239))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__30238.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__30239))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__30238.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__30239))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return (function (a,b){
throw "Reload not defined for this platform";
});
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__30241,callback){
var map__30242 = p__30241;
var map__30242__$1 = (((((!((map__30242 == null))))?(((((map__30242.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30242.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30242):map__30242);
var file_msg = map__30242__$1;
var request_url = cljs.core.get.call(null,map__30242__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__4185__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,(function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
}));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_chan !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined')){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined')){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),(function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
}));

return out;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reloader_loop !== 'undefined')){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__27950__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27951__auto__ = (function (){var switch__27855__auto__ = (function (state_30280){
var state_val_30281 = (state_30280[(1)]);
if((state_val_30281 === (7))){
var inst_30276 = (state_30280[(2)]);
var state_30280__$1 = state_30280;
var statearr_30282_30308 = state_30280__$1;
(statearr_30282_30308[(2)] = inst_30276);

(statearr_30282_30308[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30281 === (1))){
var state_30280__$1 = state_30280;
var statearr_30283_30309 = state_30280__$1;
(statearr_30283_30309[(2)] = null);

(statearr_30283_30309[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30281 === (4))){
var inst_30246 = (state_30280[(7)]);
var inst_30246__$1 = (state_30280[(2)]);
var state_30280__$1 = (function (){var statearr_30284 = state_30280;
(statearr_30284[(7)] = inst_30246__$1);

return statearr_30284;
})();
if(cljs.core.truth_(inst_30246__$1)){
var statearr_30285_30310 = state_30280__$1;
(statearr_30285_30310[(1)] = (5));

} else {
var statearr_30286_30311 = state_30280__$1;
(statearr_30286_30311[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30281 === (15))){
var inst_30259 = (state_30280[(8)]);
var inst_30261 = (state_30280[(9)]);
var inst_30263 = inst_30261.call(null,inst_30259);
var state_30280__$1 = state_30280;
var statearr_30287_30312 = state_30280__$1;
(statearr_30287_30312[(2)] = inst_30263);

(statearr_30287_30312[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30281 === (13))){
var inst_30270 = (state_30280[(2)]);
var state_30280__$1 = state_30280;
var statearr_30288_30313 = state_30280__$1;
(statearr_30288_30313[(2)] = inst_30270);

(statearr_30288_30313[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30281 === (6))){
var state_30280__$1 = state_30280;
var statearr_30289_30314 = state_30280__$1;
(statearr_30289_30314[(2)] = null);

(statearr_30289_30314[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30281 === (17))){
var inst_30267 = (state_30280[(2)]);
var state_30280__$1 = state_30280;
var statearr_30290_30315 = state_30280__$1;
(statearr_30290_30315[(2)] = inst_30267);

(statearr_30290_30315[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30281 === (3))){
var inst_30278 = (state_30280[(2)]);
var state_30280__$1 = state_30280;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30280__$1,inst_30278);
} else {
if((state_val_30281 === (12))){
var state_30280__$1 = state_30280;
var statearr_30291_30316 = state_30280__$1;
(statearr_30291_30316[(2)] = null);

(statearr_30291_30316[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30281 === (2))){
var state_30280__$1 = state_30280;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30280__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_30281 === (11))){
var inst_30251 = (state_30280[(10)]);
var inst_30257 = figwheel.client.file_reloading.blocking_load.call(null,inst_30251);
var state_30280__$1 = state_30280;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30280__$1,(14),inst_30257);
} else {
if((state_val_30281 === (9))){
var inst_30251 = (state_30280[(10)]);
var state_30280__$1 = state_30280;
if(cljs.core.truth_(inst_30251)){
var statearr_30292_30317 = state_30280__$1;
(statearr_30292_30317[(1)] = (11));

} else {
var statearr_30293_30318 = state_30280__$1;
(statearr_30293_30318[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30281 === (5))){
var inst_30252 = (state_30280[(11)]);
var inst_30246 = (state_30280[(7)]);
var inst_30251 = cljs.core.nth.call(null,inst_30246,(0),null);
var inst_30252__$1 = cljs.core.nth.call(null,inst_30246,(1),null);
var state_30280__$1 = (function (){var statearr_30294 = state_30280;
(statearr_30294[(10)] = inst_30251);

(statearr_30294[(11)] = inst_30252__$1);

return statearr_30294;
})();
if(cljs.core.truth_(inst_30252__$1)){
var statearr_30295_30319 = state_30280__$1;
(statearr_30295_30319[(1)] = (8));

} else {
var statearr_30296_30320 = state_30280__$1;
(statearr_30296_30320[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30281 === (14))){
var inst_30251 = (state_30280[(10)]);
var inst_30261 = (state_30280[(9)]);
var inst_30259 = (state_30280[(2)]);
var inst_30260 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_30261__$1 = cljs.core.get.call(null,inst_30260,inst_30251);
var state_30280__$1 = (function (){var statearr_30297 = state_30280;
(statearr_30297[(8)] = inst_30259);

(statearr_30297[(9)] = inst_30261__$1);

return statearr_30297;
})();
if(cljs.core.truth_(inst_30261__$1)){
var statearr_30298_30321 = state_30280__$1;
(statearr_30298_30321[(1)] = (15));

} else {
var statearr_30299_30322 = state_30280__$1;
(statearr_30299_30322[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30281 === (16))){
var inst_30259 = (state_30280[(8)]);
var inst_30265 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_30259);
var state_30280__$1 = state_30280;
var statearr_30300_30323 = state_30280__$1;
(statearr_30300_30323[(2)] = inst_30265);

(statearr_30300_30323[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30281 === (10))){
var inst_30272 = (state_30280[(2)]);
var state_30280__$1 = (function (){var statearr_30301 = state_30280;
(statearr_30301[(12)] = inst_30272);

return statearr_30301;
})();
var statearr_30302_30324 = state_30280__$1;
(statearr_30302_30324[(2)] = null);

(statearr_30302_30324[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30281 === (8))){
var inst_30252 = (state_30280[(11)]);
var inst_30254 = eval(inst_30252);
var state_30280__$1 = state_30280;
var statearr_30303_30325 = state_30280__$1;
(statearr_30303_30325[(2)] = inst_30254);

(statearr_30303_30325[(1)] = (10));


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
var figwheel$client$file_reloading$state_machine__27856__auto__ = null;
var figwheel$client$file_reloading$state_machine__27856__auto____0 = (function (){
var statearr_30304 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30304[(0)] = figwheel$client$file_reloading$state_machine__27856__auto__);

(statearr_30304[(1)] = (1));

return statearr_30304;
});
var figwheel$client$file_reloading$state_machine__27856__auto____1 = (function (state_30280){
while(true){
var ret_value__27857__auto__ = (function (){try{while(true){
var result__27858__auto__ = switch__27855__auto__.call(null,state_30280);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27858__auto__;
}
break;
}
}catch (e30305){if((e30305 instanceof Object)){
var ex__27859__auto__ = e30305;
var statearr_30306_30326 = state_30280;
(statearr_30306_30326[(5)] = ex__27859__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30280);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30305;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30327 = state_30280;
state_30280 = G__30327;
continue;
} else {
return ret_value__27857__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__27856__auto__ = function(state_30280){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__27856__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__27856__auto____1.call(this,state_30280);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__27856__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__27856__auto____0;
figwheel$client$file_reloading$state_machine__27856__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__27856__auto____1;
return figwheel$client$file_reloading$state_machine__27856__auto__;
})()
})();
var state__27952__auto__ = (function (){var statearr_30307 = f__27951__auto__.call(null);
(statearr_30307[(6)] = c__27950__auto__);

return statearr_30307;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27952__auto__);
}));

return c__27950__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__30329 = arguments.length;
switch (G__30329) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
}));

(figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
}));

(figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2);

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__30331,callback){
var map__30332 = p__30331;
var map__30332__$1 = (((((!((map__30332 == null))))?(((((map__30332.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30332.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30332):map__30332);
var file_msg = map__30332__$1;
var namespace = cljs.core.get.call(null,map__30332__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,(function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
}));

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__30334){
var map__30335 = p__30334;
var map__30335__$1 = (((((!((map__30335 == null))))?(((((map__30335.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30335.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30335):map__30335);
var file_msg = map__30335__$1;
var namespace = cljs.core.get.call(null,map__30335__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__30337){
var map__30338 = p__30337;
var map__30338__$1 = (((((!((map__30338 == null))))?(((((map__30338.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30338.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30338):map__30338);
var file_msg = map__30338__$1;
var namespace = cljs.core.get.call(null,map__30338__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if(cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg))){
var or__4185__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var or__4185__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4185__auto____$1)){
return or__4185__auto____$1;
} else {
var or__4185__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__4185__auto____$2)){
return or__4185__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return false;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__30340,callback){
var map__30341 = p__30340;
var map__30341__$1 = (((((!((map__30341 == null))))?(((((map__30341.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30341.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30341):map__30341);
var file_msg = map__30341__$1;
var request_url = cljs.core.get.call(null,map__30341__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__30341__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,(function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
}));

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__27950__auto___30391 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27951__auto__ = (function (){var switch__27855__auto__ = (function (state_30376){
var state_val_30377 = (state_30376[(1)]);
if((state_val_30377 === (1))){
var inst_30350 = cljs.core.seq.call(null,files);
var inst_30351 = cljs.core.first.call(null,inst_30350);
var inst_30352 = cljs.core.next.call(null,inst_30350);
var inst_30353 = files;
var state_30376__$1 = (function (){var statearr_30378 = state_30376;
(statearr_30378[(7)] = inst_30351);

(statearr_30378[(8)] = inst_30353);

(statearr_30378[(9)] = inst_30352);

return statearr_30378;
})();
var statearr_30379_30392 = state_30376__$1;
(statearr_30379_30392[(2)] = null);

(statearr_30379_30392[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30377 === (2))){
var inst_30353 = (state_30376[(8)]);
var inst_30359 = (state_30376[(10)]);
var inst_30358 = cljs.core.seq.call(null,inst_30353);
var inst_30359__$1 = cljs.core.first.call(null,inst_30358);
var inst_30360 = cljs.core.next.call(null,inst_30358);
var inst_30361 = (inst_30359__$1 == null);
var inst_30362 = cljs.core.not.call(null,inst_30361);
var state_30376__$1 = (function (){var statearr_30380 = state_30376;
(statearr_30380[(10)] = inst_30359__$1);

(statearr_30380[(11)] = inst_30360);

return statearr_30380;
})();
if(inst_30362){
var statearr_30381_30393 = state_30376__$1;
(statearr_30381_30393[(1)] = (4));

} else {
var statearr_30382_30394 = state_30376__$1;
(statearr_30382_30394[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30377 === (3))){
var inst_30374 = (state_30376[(2)]);
var state_30376__$1 = state_30376;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30376__$1,inst_30374);
} else {
if((state_val_30377 === (4))){
var inst_30359 = (state_30376[(10)]);
var inst_30364 = figwheel.client.file_reloading.reload_js_file.call(null,inst_30359);
var state_30376__$1 = state_30376;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30376__$1,(7),inst_30364);
} else {
if((state_val_30377 === (5))){
var inst_30370 = cljs.core.async.close_BANG_.call(null,out);
var state_30376__$1 = state_30376;
var statearr_30383_30395 = state_30376__$1;
(statearr_30383_30395[(2)] = inst_30370);

(statearr_30383_30395[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30377 === (6))){
var inst_30372 = (state_30376[(2)]);
var state_30376__$1 = state_30376;
var statearr_30384_30396 = state_30376__$1;
(statearr_30384_30396[(2)] = inst_30372);

(statearr_30384_30396[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30377 === (7))){
var inst_30360 = (state_30376[(11)]);
var inst_30366 = (state_30376[(2)]);
var inst_30367 = cljs.core.async.put_BANG_.call(null,out,inst_30366);
var inst_30353 = inst_30360;
var state_30376__$1 = (function (){var statearr_30385 = state_30376;
(statearr_30385[(8)] = inst_30353);

(statearr_30385[(12)] = inst_30367);

return statearr_30385;
})();
var statearr_30386_30397 = state_30376__$1;
(statearr_30386_30397[(2)] = null);

(statearr_30386_30397[(1)] = (2));


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
});
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27856__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27856__auto____0 = (function (){
var statearr_30387 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30387[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27856__auto__);

(statearr_30387[(1)] = (1));

return statearr_30387;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27856__auto____1 = (function (state_30376){
while(true){
var ret_value__27857__auto__ = (function (){try{while(true){
var result__27858__auto__ = switch__27855__auto__.call(null,state_30376);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27858__auto__;
}
break;
}
}catch (e30388){if((e30388 instanceof Object)){
var ex__27859__auto__ = e30388;
var statearr_30389_30398 = state_30376;
(statearr_30389_30398[(5)] = ex__27859__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30376);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30388;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30399 = state_30376;
state_30376 = G__30399;
continue;
} else {
return ret_value__27857__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27856__auto__ = function(state_30376){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27856__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27856__auto____1.call(this,state_30376);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27856__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27856__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27856__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27856__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27856__auto__;
})()
})();
var state__27952__auto__ = (function (){var statearr_30390 = f__27951__auto__.call(null);
(statearr_30390[(6)] = c__27950__auto___30391);

return statearr_30390;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27952__auto__);
}));


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__30400,opts){
var map__30401 = p__30400;
var map__30401__$1 = (((((!((map__30401 == null))))?(((((map__30401.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30401.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30401):map__30401);
var eval_body = cljs.core.get.call(null,map__30401__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__30401__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__4174__auto__ = eval_body;
if(cljs.core.truth_(and__4174__auto__)){
return typeof eval_body === 'string';
} else {
return and__4174__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e30403){var e = e30403;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,(function (n){
var temp__5733__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__30404_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__30404_SHARP_),n);
}),files));
if(cljs.core.truth_(temp__5733__auto__)){
var file_msg = temp__5733__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
}),deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__30405){
var vec__30406 = p__30405;
var k = cljs.core.nth.call(null,vec__30406,(0),null);
var v = cljs.core.nth.call(null,vec__30406,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__30409){
var vec__30410 = p__30409;
var k = cljs.core.nth.call(null,vec__30410,(0),null);
var v = cljs.core.nth.call(null,vec__30410,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__30416,p__30417){
var map__30418 = p__30416;
var map__30418__$1 = (((((!((map__30418 == null))))?(((((map__30418.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30418.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30418):map__30418);
var opts = map__30418__$1;
var before_jsload = cljs.core.get.call(null,map__30418__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__30418__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__30418__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__30419 = p__30417;
var map__30419__$1 = (((((!((map__30419 == null))))?(((((map__30419.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30419.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30419):map__30419);
var msg = map__30419__$1;
var files = cljs.core.get.call(null,map__30419__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__30419__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__30419__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__27950__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27951__auto__ = (function (){var switch__27855__auto__ = (function (state_30573){
var state_val_30574 = (state_30573[(1)]);
if((state_val_30574 === (7))){
var inst_30435 = (state_30573[(7)]);
var inst_30436 = (state_30573[(8)]);
var inst_30434 = (state_30573[(9)]);
var inst_30433 = (state_30573[(10)]);
var inst_30441 = cljs.core._nth.call(null,inst_30434,inst_30436);
var inst_30442 = figwheel.client.file_reloading.eval_body.call(null,inst_30441,opts);
var inst_30443 = (inst_30436 + (1));
var tmp30575 = inst_30435;
var tmp30576 = inst_30434;
var tmp30577 = inst_30433;
var inst_30433__$1 = tmp30577;
var inst_30434__$1 = tmp30576;
var inst_30435__$1 = tmp30575;
var inst_30436__$1 = inst_30443;
var state_30573__$1 = (function (){var statearr_30578 = state_30573;
(statearr_30578[(7)] = inst_30435__$1);

(statearr_30578[(8)] = inst_30436__$1);

(statearr_30578[(9)] = inst_30434__$1);

(statearr_30578[(11)] = inst_30442);

(statearr_30578[(10)] = inst_30433__$1);

return statearr_30578;
})();
var statearr_30579_30662 = state_30573__$1;
(statearr_30579_30662[(2)] = null);

(statearr_30579_30662[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30574 === (20))){
var inst_30476 = (state_30573[(12)]);
var inst_30484 = figwheel.client.file_reloading.sort_files.call(null,inst_30476);
var state_30573__$1 = state_30573;
var statearr_30580_30663 = state_30573__$1;
(statearr_30580_30663[(2)] = inst_30484);

(statearr_30580_30663[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30574 === (27))){
var state_30573__$1 = state_30573;
var statearr_30581_30664 = state_30573__$1;
(statearr_30581_30664[(2)] = null);

(statearr_30581_30664[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30574 === (1))){
var inst_30425 = (state_30573[(13)]);
var inst_30422 = before_jsload.call(null,files);
var inst_30423 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_30424 = (function (){return (function (p1__30413_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__30413_SHARP_);
});
})();
var inst_30425__$1 = cljs.core.filter.call(null,inst_30424,files);
var inst_30426 = cljs.core.not_empty.call(null,inst_30425__$1);
var state_30573__$1 = (function (){var statearr_30582 = state_30573;
(statearr_30582[(14)] = inst_30423);

(statearr_30582[(15)] = inst_30422);

(statearr_30582[(13)] = inst_30425__$1);

return statearr_30582;
})();
if(cljs.core.truth_(inst_30426)){
var statearr_30583_30665 = state_30573__$1;
(statearr_30583_30665[(1)] = (2));

} else {
var statearr_30584_30666 = state_30573__$1;
(statearr_30584_30666[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30574 === (24))){
var state_30573__$1 = state_30573;
var statearr_30585_30667 = state_30573__$1;
(statearr_30585_30667[(2)] = null);

(statearr_30585_30667[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30574 === (39))){
var inst_30526 = (state_30573[(16)]);
var state_30573__$1 = state_30573;
var statearr_30586_30668 = state_30573__$1;
(statearr_30586_30668[(2)] = inst_30526);

(statearr_30586_30668[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30574 === (46))){
var inst_30568 = (state_30573[(2)]);
var state_30573__$1 = state_30573;
var statearr_30587_30669 = state_30573__$1;
(statearr_30587_30669[(2)] = inst_30568);

(statearr_30587_30669[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30574 === (4))){
var inst_30470 = (state_30573[(2)]);
var inst_30471 = cljs.core.List.EMPTY;
var inst_30472 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_30471);
var inst_30473 = (function (){return (function (p1__30414_SHARP_){
var and__4174__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__30414_SHARP_);
if(cljs.core.truth_(and__4174__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__30414_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__30414_SHARP_))));
} else {
return and__4174__auto__;
}
});
})();
var inst_30474 = cljs.core.filter.call(null,inst_30473,files);
var inst_30475 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_30476 = cljs.core.concat.call(null,inst_30474,inst_30475);
var state_30573__$1 = (function (){var statearr_30588 = state_30573;
(statearr_30588[(12)] = inst_30476);

(statearr_30588[(17)] = inst_30472);

(statearr_30588[(18)] = inst_30470);

return statearr_30588;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_30589_30670 = state_30573__$1;
(statearr_30589_30670[(1)] = (16));

} else {
var statearr_30590_30671 = state_30573__$1;
(statearr_30590_30671[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30574 === (15))){
var inst_30460 = (state_30573[(2)]);
var state_30573__$1 = state_30573;
var statearr_30591_30672 = state_30573__$1;
(statearr_30591_30672[(2)] = inst_30460);

(statearr_30591_30672[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30574 === (21))){
var inst_30486 = (state_30573[(19)]);
var inst_30486__$1 = (state_30573[(2)]);
var inst_30487 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_30486__$1);
var state_30573__$1 = (function (){var statearr_30592 = state_30573;
(statearr_30592[(19)] = inst_30486__$1);

return statearr_30592;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30573__$1,(22),inst_30487);
} else {
if((state_val_30574 === (31))){
var inst_30571 = (state_30573[(2)]);
var state_30573__$1 = state_30573;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30573__$1,inst_30571);
} else {
if((state_val_30574 === (32))){
var inst_30526 = (state_30573[(16)]);
var inst_30531 = inst_30526.cljs$lang$protocol_mask$partition0$;
var inst_30532 = (inst_30531 & (64));
var inst_30533 = inst_30526.cljs$core$ISeq$;
var inst_30534 = (cljs.core.PROTOCOL_SENTINEL === inst_30533);
var inst_30535 = ((inst_30532) || (inst_30534));
var state_30573__$1 = state_30573;
if(cljs.core.truth_(inst_30535)){
var statearr_30593_30673 = state_30573__$1;
(statearr_30593_30673[(1)] = (35));

} else {
var statearr_30594_30674 = state_30573__$1;
(statearr_30594_30674[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30574 === (40))){
var inst_30548 = (state_30573[(20)]);
var inst_30547 = (state_30573[(2)]);
var inst_30548__$1 = cljs.core.get.call(null,inst_30547,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_30549 = cljs.core.get.call(null,inst_30547,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_30550 = cljs.core.not_empty.call(null,inst_30548__$1);
var state_30573__$1 = (function (){var statearr_30595 = state_30573;
(statearr_30595[(20)] = inst_30548__$1);

(statearr_30595[(21)] = inst_30549);

return statearr_30595;
})();
if(cljs.core.truth_(inst_30550)){
var statearr_30596_30675 = state_30573__$1;
(statearr_30596_30675[(1)] = (41));

} else {
var statearr_30597_30676 = state_30573__$1;
(statearr_30597_30676[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30574 === (33))){
var state_30573__$1 = state_30573;
var statearr_30598_30677 = state_30573__$1;
(statearr_30598_30677[(2)] = false);

(statearr_30598_30677[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30574 === (13))){
var inst_30446 = (state_30573[(22)]);
var inst_30450 = cljs.core.chunk_first.call(null,inst_30446);
var inst_30451 = cljs.core.chunk_rest.call(null,inst_30446);
var inst_30452 = cljs.core.count.call(null,inst_30450);
var inst_30433 = inst_30451;
var inst_30434 = inst_30450;
var inst_30435 = inst_30452;
var inst_30436 = (0);
var state_30573__$1 = (function (){var statearr_30599 = state_30573;
(statearr_30599[(7)] = inst_30435);

(statearr_30599[(8)] = inst_30436);

(statearr_30599[(9)] = inst_30434);

(statearr_30599[(10)] = inst_30433);

return statearr_30599;
})();
var statearr_30600_30678 = state_30573__$1;
(statearr_30600_30678[(2)] = null);

(statearr_30600_30678[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30574 === (22))){
var inst_30489 = (state_30573[(23)]);
var inst_30494 = (state_30573[(24)]);
var inst_30490 = (state_30573[(25)]);
var inst_30486 = (state_30573[(19)]);
var inst_30489__$1 = (state_30573[(2)]);
var inst_30490__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_30489__$1);
var inst_30491 = (function (){var all_files = inst_30486;
var res_SINGLEQUOTE_ = inst_30489__$1;
var res = inst_30490__$1;
return (function (p1__30415_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__30415_SHARP_));
});
})();
var inst_30492 = cljs.core.filter.call(null,inst_30491,inst_30489__$1);
var inst_30493 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_30494__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_30493);
var inst_30495 = cljs.core.not_empty.call(null,inst_30494__$1);
var state_30573__$1 = (function (){var statearr_30601 = state_30573;
(statearr_30601[(23)] = inst_30489__$1);

(statearr_30601[(26)] = inst_30492);

(statearr_30601[(24)] = inst_30494__$1);

(statearr_30601[(25)] = inst_30490__$1);

return statearr_30601;
})();
if(cljs.core.truth_(inst_30495)){
var statearr_30602_30679 = state_30573__$1;
(statearr_30602_30679[(1)] = (23));

} else {
var statearr_30603_30680 = state_30573__$1;
(statearr_30603_30680[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30574 === (36))){
var state_30573__$1 = state_30573;
var statearr_30604_30681 = state_30573__$1;
(statearr_30604_30681[(2)] = false);

(statearr_30604_30681[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30574 === (41))){
var inst_30548 = (state_30573[(20)]);
var inst_30552 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_30553 = cljs.core.map.call(null,inst_30552,inst_30548);
var inst_30554 = cljs.core.pr_str.call(null,inst_30553);
var inst_30555 = ["figwheel-no-load meta-data: ",inst_30554].join('');
var inst_30556 = figwheel.client.utils.log.call(null,inst_30555);
var state_30573__$1 = state_30573;
var statearr_30605_30682 = state_30573__$1;
(statearr_30605_30682[(2)] = inst_30556);

(statearr_30605_30682[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30574 === (43))){
var inst_30549 = (state_30573[(21)]);
var inst_30559 = (state_30573[(2)]);
var inst_30560 = cljs.core.not_empty.call(null,inst_30549);
var state_30573__$1 = (function (){var statearr_30606 = state_30573;
(statearr_30606[(27)] = inst_30559);

return statearr_30606;
})();
if(cljs.core.truth_(inst_30560)){
var statearr_30607_30683 = state_30573__$1;
(statearr_30607_30683[(1)] = (44));

} else {
var statearr_30608_30684 = state_30573__$1;
(statearr_30608_30684[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30574 === (29))){
var inst_30489 = (state_30573[(23)]);
var inst_30492 = (state_30573[(26)]);
var inst_30494 = (state_30573[(24)]);
var inst_30490 = (state_30573[(25)]);
var inst_30526 = (state_30573[(16)]);
var inst_30486 = (state_30573[(19)]);
var inst_30522 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_30525 = (function (){var all_files = inst_30486;
var res_SINGLEQUOTE_ = inst_30489;
var res = inst_30490;
var files_not_loaded = inst_30492;
var dependencies_that_loaded = inst_30494;
return (function (p__30524){
var map__30609 = p__30524;
var map__30609__$1 = (((((!((map__30609 == null))))?(((((map__30609.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30609.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30609):map__30609);
var namespace = cljs.core.get.call(null,map__30609__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
})();
var inst_30526__$1 = cljs.core.group_by.call(null,inst_30525,inst_30492);
var inst_30528 = (inst_30526__$1 == null);
var inst_30529 = cljs.core.not.call(null,inst_30528);
var state_30573__$1 = (function (){var statearr_30611 = state_30573;
(statearr_30611[(28)] = inst_30522);

(statearr_30611[(16)] = inst_30526__$1);

return statearr_30611;
})();
if(inst_30529){
var statearr_30612_30685 = state_30573__$1;
(statearr_30612_30685[(1)] = (32));

} else {
var statearr_30613_30686 = state_30573__$1;
(statearr_30613_30686[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30574 === (44))){
var inst_30549 = (state_30573[(21)]);
var inst_30562 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_30549);
var inst_30563 = cljs.core.pr_str.call(null,inst_30562);
var inst_30564 = ["not required: ",inst_30563].join('');
var inst_30565 = figwheel.client.utils.log.call(null,inst_30564);
var state_30573__$1 = state_30573;
var statearr_30614_30687 = state_30573__$1;
(statearr_30614_30687[(2)] = inst_30565);

(statearr_30614_30687[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30574 === (6))){
var inst_30467 = (state_30573[(2)]);
var state_30573__$1 = state_30573;
var statearr_30615_30688 = state_30573__$1;
(statearr_30615_30688[(2)] = inst_30467);

(statearr_30615_30688[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30574 === (28))){
var inst_30492 = (state_30573[(26)]);
var inst_30519 = (state_30573[(2)]);
var inst_30520 = cljs.core.not_empty.call(null,inst_30492);
var state_30573__$1 = (function (){var statearr_30616 = state_30573;
(statearr_30616[(29)] = inst_30519);

return statearr_30616;
})();
if(cljs.core.truth_(inst_30520)){
var statearr_30617_30689 = state_30573__$1;
(statearr_30617_30689[(1)] = (29));

} else {
var statearr_30618_30690 = state_30573__$1;
(statearr_30618_30690[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30574 === (25))){
var inst_30490 = (state_30573[(25)]);
var inst_30506 = (state_30573[(2)]);
var inst_30507 = cljs.core.not_empty.call(null,inst_30490);
var state_30573__$1 = (function (){var statearr_30619 = state_30573;
(statearr_30619[(30)] = inst_30506);

return statearr_30619;
})();
if(cljs.core.truth_(inst_30507)){
var statearr_30620_30691 = state_30573__$1;
(statearr_30620_30691[(1)] = (26));

} else {
var statearr_30621_30692 = state_30573__$1;
(statearr_30621_30692[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30574 === (34))){
var inst_30542 = (state_30573[(2)]);
var state_30573__$1 = state_30573;
if(cljs.core.truth_(inst_30542)){
var statearr_30622_30693 = state_30573__$1;
(statearr_30622_30693[(1)] = (38));

} else {
var statearr_30623_30694 = state_30573__$1;
(statearr_30623_30694[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30574 === (17))){
var state_30573__$1 = state_30573;
var statearr_30624_30695 = state_30573__$1;
(statearr_30624_30695[(2)] = recompile_dependents);

(statearr_30624_30695[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30574 === (3))){
var state_30573__$1 = state_30573;
var statearr_30625_30696 = state_30573__$1;
(statearr_30625_30696[(2)] = null);

(statearr_30625_30696[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30574 === (12))){
var inst_30463 = (state_30573[(2)]);
var state_30573__$1 = state_30573;
var statearr_30626_30697 = state_30573__$1;
(statearr_30626_30697[(2)] = inst_30463);

(statearr_30626_30697[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30574 === (2))){
var inst_30425 = (state_30573[(13)]);
var inst_30432 = cljs.core.seq.call(null,inst_30425);
var inst_30433 = inst_30432;
var inst_30434 = null;
var inst_30435 = (0);
var inst_30436 = (0);
var state_30573__$1 = (function (){var statearr_30627 = state_30573;
(statearr_30627[(7)] = inst_30435);

(statearr_30627[(8)] = inst_30436);

(statearr_30627[(9)] = inst_30434);

(statearr_30627[(10)] = inst_30433);

return statearr_30627;
})();
var statearr_30628_30698 = state_30573__$1;
(statearr_30628_30698[(2)] = null);

(statearr_30628_30698[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30574 === (23))){
var inst_30489 = (state_30573[(23)]);
var inst_30492 = (state_30573[(26)]);
var inst_30494 = (state_30573[(24)]);
var inst_30490 = (state_30573[(25)]);
var inst_30486 = (state_30573[(19)]);
var inst_30497 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_30499 = (function (){var all_files = inst_30486;
var res_SINGLEQUOTE_ = inst_30489;
var res = inst_30490;
var files_not_loaded = inst_30492;
var dependencies_that_loaded = inst_30494;
return (function (p__30498){
var map__30629 = p__30498;
var map__30629__$1 = (((((!((map__30629 == null))))?(((((map__30629.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30629.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30629):map__30629);
var request_url = cljs.core.get.call(null,map__30629__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
})();
var inst_30500 = cljs.core.reverse.call(null,inst_30494);
var inst_30501 = cljs.core.map.call(null,inst_30499,inst_30500);
var inst_30502 = cljs.core.pr_str.call(null,inst_30501);
var inst_30503 = figwheel.client.utils.log.call(null,inst_30502);
var state_30573__$1 = (function (){var statearr_30631 = state_30573;
(statearr_30631[(31)] = inst_30497);

return statearr_30631;
})();
var statearr_30632_30699 = state_30573__$1;
(statearr_30632_30699[(2)] = inst_30503);

(statearr_30632_30699[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30574 === (35))){
var state_30573__$1 = state_30573;
var statearr_30633_30700 = state_30573__$1;
(statearr_30633_30700[(2)] = true);

(statearr_30633_30700[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30574 === (19))){
var inst_30476 = (state_30573[(12)]);
var inst_30482 = figwheel.client.file_reloading.expand_files.call(null,inst_30476);
var state_30573__$1 = state_30573;
var statearr_30634_30701 = state_30573__$1;
(statearr_30634_30701[(2)] = inst_30482);

(statearr_30634_30701[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30574 === (11))){
var state_30573__$1 = state_30573;
var statearr_30635_30702 = state_30573__$1;
(statearr_30635_30702[(2)] = null);

(statearr_30635_30702[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30574 === (9))){
var inst_30465 = (state_30573[(2)]);
var state_30573__$1 = state_30573;
var statearr_30636_30703 = state_30573__$1;
(statearr_30636_30703[(2)] = inst_30465);

(statearr_30636_30703[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30574 === (5))){
var inst_30435 = (state_30573[(7)]);
var inst_30436 = (state_30573[(8)]);
var inst_30438 = (inst_30436 < inst_30435);
var inst_30439 = inst_30438;
var state_30573__$1 = state_30573;
if(cljs.core.truth_(inst_30439)){
var statearr_30637_30704 = state_30573__$1;
(statearr_30637_30704[(1)] = (7));

} else {
var statearr_30638_30705 = state_30573__$1;
(statearr_30638_30705[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30574 === (14))){
var inst_30446 = (state_30573[(22)]);
var inst_30455 = cljs.core.first.call(null,inst_30446);
var inst_30456 = figwheel.client.file_reloading.eval_body.call(null,inst_30455,opts);
var inst_30457 = cljs.core.next.call(null,inst_30446);
var inst_30433 = inst_30457;
var inst_30434 = null;
var inst_30435 = (0);
var inst_30436 = (0);
var state_30573__$1 = (function (){var statearr_30639 = state_30573;
(statearr_30639[(7)] = inst_30435);

(statearr_30639[(8)] = inst_30436);

(statearr_30639[(9)] = inst_30434);

(statearr_30639[(32)] = inst_30456);

(statearr_30639[(10)] = inst_30433);

return statearr_30639;
})();
var statearr_30640_30706 = state_30573__$1;
(statearr_30640_30706[(2)] = null);

(statearr_30640_30706[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30574 === (45))){
var state_30573__$1 = state_30573;
var statearr_30641_30707 = state_30573__$1;
(statearr_30641_30707[(2)] = null);

(statearr_30641_30707[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30574 === (26))){
var inst_30489 = (state_30573[(23)]);
var inst_30492 = (state_30573[(26)]);
var inst_30494 = (state_30573[(24)]);
var inst_30490 = (state_30573[(25)]);
var inst_30486 = (state_30573[(19)]);
var inst_30509 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_30511 = (function (){var all_files = inst_30486;
var res_SINGLEQUOTE_ = inst_30489;
var res = inst_30490;
var files_not_loaded = inst_30492;
var dependencies_that_loaded = inst_30494;
return (function (p__30510){
var map__30642 = p__30510;
var map__30642__$1 = (((((!((map__30642 == null))))?(((((map__30642.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30642.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30642):map__30642);
var namespace = cljs.core.get.call(null,map__30642__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__30642__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
})();
var inst_30512 = cljs.core.map.call(null,inst_30511,inst_30490);
var inst_30513 = cljs.core.pr_str.call(null,inst_30512);
var inst_30514 = figwheel.client.utils.log.call(null,inst_30513);
var inst_30515 = (function (){var all_files = inst_30486;
var res_SINGLEQUOTE_ = inst_30489;
var res = inst_30490;
var files_not_loaded = inst_30492;
var dependencies_that_loaded = inst_30494;
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
})();
var inst_30516 = setTimeout(inst_30515,(10));
var state_30573__$1 = (function (){var statearr_30644 = state_30573;
(statearr_30644[(33)] = inst_30514);

(statearr_30644[(34)] = inst_30509);

return statearr_30644;
})();
var statearr_30645_30708 = state_30573__$1;
(statearr_30645_30708[(2)] = inst_30516);

(statearr_30645_30708[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30574 === (16))){
var state_30573__$1 = state_30573;
var statearr_30646_30709 = state_30573__$1;
(statearr_30646_30709[(2)] = reload_dependents);

(statearr_30646_30709[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30574 === (38))){
var inst_30526 = (state_30573[(16)]);
var inst_30544 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30526);
var state_30573__$1 = state_30573;
var statearr_30647_30710 = state_30573__$1;
(statearr_30647_30710[(2)] = inst_30544);

(statearr_30647_30710[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30574 === (30))){
var state_30573__$1 = state_30573;
var statearr_30648_30711 = state_30573__$1;
(statearr_30648_30711[(2)] = null);

(statearr_30648_30711[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30574 === (10))){
var inst_30446 = (state_30573[(22)]);
var inst_30448 = cljs.core.chunked_seq_QMARK_.call(null,inst_30446);
var state_30573__$1 = state_30573;
if(inst_30448){
var statearr_30649_30712 = state_30573__$1;
(statearr_30649_30712[(1)] = (13));

} else {
var statearr_30650_30713 = state_30573__$1;
(statearr_30650_30713[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30574 === (18))){
var inst_30480 = (state_30573[(2)]);
var state_30573__$1 = state_30573;
if(cljs.core.truth_(inst_30480)){
var statearr_30651_30714 = state_30573__$1;
(statearr_30651_30714[(1)] = (19));

} else {
var statearr_30652_30715 = state_30573__$1;
(statearr_30652_30715[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30574 === (42))){
var state_30573__$1 = state_30573;
var statearr_30653_30716 = state_30573__$1;
(statearr_30653_30716[(2)] = null);

(statearr_30653_30716[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30574 === (37))){
var inst_30539 = (state_30573[(2)]);
var state_30573__$1 = state_30573;
var statearr_30654_30717 = state_30573__$1;
(statearr_30654_30717[(2)] = inst_30539);

(statearr_30654_30717[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30574 === (8))){
var inst_30446 = (state_30573[(22)]);
var inst_30433 = (state_30573[(10)]);
var inst_30446__$1 = cljs.core.seq.call(null,inst_30433);
var state_30573__$1 = (function (){var statearr_30655 = state_30573;
(statearr_30655[(22)] = inst_30446__$1);

return statearr_30655;
})();
if(inst_30446__$1){
var statearr_30656_30718 = state_30573__$1;
(statearr_30656_30718[(1)] = (10));

} else {
var statearr_30657_30719 = state_30573__$1;
(statearr_30657_30719[(1)] = (11));

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
}
});
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27856__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27856__auto____0 = (function (){
var statearr_30658 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30658[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__27856__auto__);

(statearr_30658[(1)] = (1));

return statearr_30658;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27856__auto____1 = (function (state_30573){
while(true){
var ret_value__27857__auto__ = (function (){try{while(true){
var result__27858__auto__ = switch__27855__auto__.call(null,state_30573);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27858__auto__;
}
break;
}
}catch (e30659){if((e30659 instanceof Object)){
var ex__27859__auto__ = e30659;
var statearr_30660_30720 = state_30573;
(statearr_30660_30720[(5)] = ex__27859__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30573);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30659;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30721 = state_30573;
state_30573 = G__30721;
continue;
} else {
return ret_value__27857__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__27856__auto__ = function(state_30573){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27856__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27856__auto____1.call(this,state_30573);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__27856__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__27856__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__27856__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__27856__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27856__auto__;
})()
})();
var state__27952__auto__ = (function (){var statearr_30661 = f__27951__auto__.call(null);
(statearr_30661[(6)] = c__27950__auto__);

return statearr_30661;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27952__auto__);
}));

return c__27950__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__30724,link){
var map__30725 = p__30724;
var map__30725__$1 = (((((!((map__30725 == null))))?(((((map__30725.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30725.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30725):map__30725);
var file = cljs.core.get.call(null,map__30725__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5735__auto__ = link.href;
if(cljs.core.truth_(temp__5735__auto__)){
var link_href = temp__5735__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,(function (p1__30722_SHARP_,p2__30723_SHARP_){
if(cljs.core._EQ_.call(null,p1__30722_SHARP_,p2__30723_SHARP_)){
return p1__30722_SHARP_;
} else {
return false;
}
}),cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = ((match).length);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),((figwheel.client.file_reloading.truncate_url.call(null,link_href)).length)], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5735__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__30728){
var map__30729 = p__30728;
var map__30729__$1 = (((((!((map__30729 == null))))?(((((map__30729.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30729.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30729):map__30729);
var match_length = cljs.core.get.call(null,map__30729__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__30729__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__30727_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__30727_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5735__auto__)){
var res = temp__5735__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
(clone.rel = "stylesheet");

(clone.media = link.media);

(clone.disabled = link.disabled);

(clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url));

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
(link.rel = "stylesheet");

(link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url));

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__30731_SHARP_,p2__30732_SHARP_){
return cljs.core.assoc.call(null,p1__30731_SHARP_,cljs.core.get.call(null,p2__30732_SHARP_,key),p2__30732_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout((function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
}),(300));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5733__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5733__auto__)){
var link = temp__5733__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),(function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
}));
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_30733 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_30733);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_30733);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__30734,p__30735){
var map__30736 = p__30734;
var map__30736__$1 = (((((!((map__30736 == null))))?(((((map__30736.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30736.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30736):map__30736);
var on_cssload = cljs.core.get.call(null,map__30736__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__30737 = p__30735;
var map__30737__$1 = (((((!((map__30737 == null))))?(((((map__30737.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30737.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30737):map__30737);
var files_msg = map__30737__$1;
var files = cljs.core.get.call(null,map__30737__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(figwheel.client.utils.html_env_QMARK_.call(null)){
var temp__5735__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5735__auto__)){
var f_datas = temp__5735__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1574747416183
