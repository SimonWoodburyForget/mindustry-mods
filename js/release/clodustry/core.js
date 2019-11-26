// Compiled by ClojureScript 1.10.597 {:static-fns true, :optimize-constants true}
goog.provide('clodustry.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('ajax.core');
clodustry.core.home = "/mindustry-mods";
clodustry.core.m = clojure.string.join.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clodustry.core.home,"/m"], null));
clodustry.core.test_home = "/mindustry-mods/test.html";
clodustry.core.data = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(rawData,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$keywordize_DASH_keys,false], 0));
clodustry.core.map_tag = (function clodustry$core$map_tag(tag,xs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,x], null);
}),xs);
});
clodustry.core.home_page = (function clodustry$core$home_page(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2,"Welcome to Reagent"], null)], null);
});
clodustry.core.header = (function clodustry$core$header(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$header,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,clodustry.core.home], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1,"Mindustry Mods"], null)], null)], null);
});
clodustry.core.footer = (function clodustry$core$footer(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$footer,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"https://github.com/SimonWoodburyForget/mindustry-mods/blob/master/CONTRIBUTING.md#adding-mods-to-the-listing"], null),"Adding mods to this list."], null)], null);
});
clodustry.core.icon = (function clodustry$core$icon(m){

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$icon,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,((clojure.string.blank_QMARK_((m.cljs$core$IFn$_invoke$arity$1 ? m.cljs$core$IFn$_invoke$arity$1("icon") : m.call(null,"icon"))))?cljs.core.PersistentArrayMap.EMPTY:new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$src,(m.cljs$core$IFn$_invoke$arity$1 ? m.cljs$core$IFn$_invoke$arity$1("icon_url") : m.call(null,"icon_url"))], null))], null)], null);
});
clodustry.core.description = (function clodustry$core$description(m){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p$description,(m.cljs$core$IFn$_invoke$arity$1 ? m.cljs$core$IFn$_invoke$arity$1("desc") : m.call(null,"desc"))], null);
});
clodustry.core.endpoint = (function clodustry$core$endpoint(m){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,clojure.string.join.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [clodustry.core.home,"/",(m.cljs$core$IFn$_invoke$arity$1 ? m.cljs$core$IFn$_invoke$arity$1("endpoint") : m.call(null,"endpoint"))], null))], null),(m.cljs$core$IFn$_invoke$arity$1 ? m.cljs$core$IFn$_invoke$arity$1("name") : m.call(null,"name"))], null);
});
clodustry.core.version = (function clodustry$core$version(m){
if(clojure.string.blank_QMARK_((m.cljs$core$IFn$_invoke$arity$1 ? m.cljs$core$IFn$_invoke$arity$1("version") : m.call(null,"version")))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$version], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$version,"v",(m.cljs$core$IFn$_invoke$arity$1 ? m.cljs$core$IFn$_invoke$arity$1("version") : m.call(null,"version"))], null);
}
});
clodustry.core.repository_link = (function clodustry$core$repository_link(m){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,(m.cljs$core$IFn$_invoke$arity$1 ? m.cljs$core$IFn$_invoke$arity$1("link") : m.call(null,"link"))], null),"repository"], null);
});
clodustry.core.archive_link = (function clodustry$core$archive_link(m){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,(m.cljs$core$IFn$_invoke$arity$1 ? m.cljs$core$IFn$_invoke$arity$1("archive_link") : m.call(null,"archive_link"))], null),"zip"], null);
});
clodustry.core.delta_ago = (function clodustry$core$delta_ago(m){
return (m.cljs$core$IFn$_invoke$arity$1 ? m.cljs$core$IFn$_invoke$arity$1("delta_ago") : m.call(null,"delta_ago"));
});
clodustry.core.stars_fmt = (function clodustry$core$stars_fmt(m){
return (m.cljs$core$IFn$_invoke$arity$1 ? m.cljs$core$IFn$_invoke$arity$1("stars_fmt") : m.call(null,"stars_fmt"));
});
clodustry.core.make_rows = (function clodustry$core$make_rows(mods){
var iter__4582__auto__ = (function clodustry$core$make_rows_$_iter__26636(s__26637){
return (new cljs.core.LazySeq(null,(function (){
var s__26637__$1 = s__26637;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__26637__$1);
if(temp__5735__auto__){
var s__26637__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__26637__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__26637__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__26639 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__26638 = (0);
while(true){
if((i__26638 < size__4581__auto__)){
var m = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__26638);
cljs.core.chunk_append(b__26639,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td$metadata,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,clodustry.core.icon(m)," ",clodustry.core.endpoint(m)," by ",(m.cljs$core$IFn$_invoke$arity$1 ? m.cljs$core$IFn$_invoke$arity$1("author") : m.call(null,"author"))," ",clodustry.core.version(m)], null),clodustry.core.description(m),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,clodustry.core.repository_link(m)," ",clodustry.core.archive_link(m)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td$delta,clodustry.core.delta_ago(m)," ago"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td$stars,clodustry.core.stars_fmt(m)], null)], null));

var G__26640 = (i__26638 + (1));
i__26638 = G__26640;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26639),clodustry$core$make_rows_$_iter__26636(cljs.core.chunk_rest(s__26637__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26639),null);
}
} else {
var m = cljs.core.first(s__26637__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td$metadata,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,clodustry.core.icon(m)," ",clodustry.core.endpoint(m)," by ",(m.cljs$core$IFn$_invoke$arity$1 ? m.cljs$core$IFn$_invoke$arity$1("author") : m.call(null,"author"))," ",clodustry.core.version(m)], null),clodustry.core.description(m),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,clodustry.core.repository_link(m)," ",clodustry.core.archive_link(m)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td$delta,clodustry.core.delta_ago(m)," ago"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td$stars,clodustry.core.stars_fmt(m)], null)], null),clodustry$core$make_rows_$_iter__26636(cljs.core.rest(s__26637__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(mods);
});
clodustry.core.sorting = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(clodustry.core.data);
clodustry.core.table = (function clodustry$core$table(data){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$table,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$thead,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$th,"metadata"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$th,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"button",cljs.core.cst$kw$value,"last-commit",cljs.core.cst$kw$on_DASH_click,(function (){
return cljs.core.reset_BANG_(clodustry.core.sorting,data);
})], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$th,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"button",cljs.core.cst$kw$value,"stars",cljs.core.cst$kw$on_DASH_click,(function (){
return cljs.core.reset_BANG_(clodustry.core.sorting,cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3((function (m){
return (m.cljs$core$IFn$_invoke$arity$1 ? m.cljs$core$IFn$_invoke$arity$1("stars") : m.call(null,"stars"));
}),cljs.core._GT_,data));
})], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tbody,clodustry.core.make_rows(cljs.core.deref(clodustry.core.sorting))], null)], null);
});
clodustry.core.listing = (function clodustry$core$listing(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"This is a currated list of Mindustry mods found on GitHub with authors, descriptions, commit date and stars automatically pulled from the repositories. You can report broken mods, suggest better icons, or add missing mods ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"https://github.com/SimonWoodburyForget/mindustry-mods/blob/master/CONTRIBUTING.md#adding-mods-to-the-listing"], null),"here"], null),"."], null),clodustry.core.table(clodustry.core.data)], null);
});
clodustry.core.mount_root = (function clodustry$core$mount_root(){
return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clodustry.core.listing], null),document.getElementById("app"));
});
clodustry.core.init_BANG_ = (function clodustry$core$init_BANG_(){
return clodustry.core.mount_root();
});
