// Compiled by ClojureScript 1.10.597 {}
goog.provide('clodustry.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('ajax.core');
clodustry.core.home = "/mindustry-mods";
clodustry.core.m = clojure.string.join.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clodustry.core.home,"/m"], null));
clodustry.core.test_home = "/mindustry-mods/test.html";
clodustry.core.data = cljs.core.js__GT_clj.call(null,rawData,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),false);
clodustry.core.map_tag = (function clodustry$core$map_tag(tag,xs){
return cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,x], null);
}),xs);
});
clodustry.core.home_page = (function clodustry$core$home_page(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Welcome to Reagent"], null)], null);
});
clodustry.core.header = (function clodustry$core$header(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),clodustry.core.home], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Mindustry Mods"], null)], null)], null);
});
clodustry.core.footer = (function clodustry$core$footer(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"footer","footer",1606445390),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"https://github.com/SimonWoodburyForget/mindustry-mods/blob/master/CONTRIBUTING.md#adding-mods-to-the-listing"], null),"Adding mods to this list."], null)], null);
});
clodustry.core.icon = (function clodustry$core$icon(m){

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),((clojure.string.blank_QMARK_.call(null,m.call(null,"icon")))?cljs.core.PersistentArrayMap.EMPTY:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),m.call(null,"icon_url")], null))], null)], null);
});
clodustry.core.description = (function clodustry$core$description(m){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.description","p.description",819227031),m.call(null,"desc")], null);
});
clodustry.core.endpoint = (function clodustry$core$endpoint(m){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),clojure.string.join.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [clodustry.core.home,"/",m.call(null,"endpoint")], null))], null),m.call(null,"name")], null);
});
clodustry.core.version = (function clodustry$core$version(m){
if(clojure.string.blank_QMARK_.call(null,m.call(null,"version"))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.version","span.version",937544592)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.version","span.version",937544592),"v",m.call(null,"version")], null);
}
});
clodustry.core.repository_link = (function clodustry$core$repository_link(m){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),m.call(null,"link")], null),"repository"], null);
});
clodustry.core.archive_link = (function clodustry$core$archive_link(m){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),m.call(null,"archive_link")], null),"zip"], null);
});
clodustry.core.delta_ago = (function clodustry$core$delta_ago(m){
return m.call(null,"delta_ago");
});
clodustry.core.stars_fmt = (function clodustry$core$stars_fmt(m){
return m.call(null,"stars_fmt");
});
clodustry.core.make_rows = (function clodustry$core$make_rows(mods){
var iter__4582__auto__ = (function clodustry$core$make_rows_$_iter__28850(s__28851){
return (new cljs.core.LazySeq(null,(function (){
var s__28851__$1 = s__28851;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__28851__$1);
if(temp__5735__auto__){
var s__28851__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28851__$2)){
var c__4580__auto__ = cljs.core.chunk_first.call(null,s__28851__$2);
var size__4581__auto__ = cljs.core.count.call(null,c__4580__auto__);
var b__28853 = cljs.core.chunk_buffer.call(null,size__4581__auto__);
if((function (){var i__28852 = (0);
while(true){
if((i__28852 < size__4581__auto__)){
var m = cljs.core._nth.call(null,c__4580__auto__,i__28852);
cljs.core.chunk_append.call(null,b__28853,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.metadata","td.metadata",1399189386),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),clodustry.core.icon.call(null,m)," ",clodustry.core.endpoint.call(null,m)," by ",m.call(null,"author")," ",clodustry.core.version.call(null,m)], null),clodustry.core.description.call(null,m),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),clodustry.core.repository_link.call(null,m)," ",clodustry.core.archive_link.call(null,m)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.delta","td.delta",-2062419773),clodustry.core.delta_ago.call(null,m)," ago"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.stars","td.stars",1953212759),clodustry.core.stars_fmt.call(null,m)], null)], null));

var G__28854 = (i__28852 + (1));
i__28852 = G__28854;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28853),clodustry$core$make_rows_$_iter__28850.call(null,cljs.core.chunk_rest.call(null,s__28851__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28853),null);
}
} else {
var m = cljs.core.first.call(null,s__28851__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.metadata","td.metadata",1399189386),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),clodustry.core.icon.call(null,m)," ",clodustry.core.endpoint.call(null,m)," by ",m.call(null,"author")," ",clodustry.core.version.call(null,m)], null),clodustry.core.description.call(null,m),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),clodustry.core.repository_link.call(null,m)," ",clodustry.core.archive_link.call(null,m)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.delta","td.delta",-2062419773),clodustry.core.delta_ago.call(null,m)," ago"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.stars","td.stars",1953212759),clodustry.core.stars_fmt.call(null,m)], null)], null),clodustry$core$make_rows_$_iter__28850.call(null,cljs.core.rest.call(null,s__28851__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__.call(null,mods);
});
clodustry.core.sorting = reagent.core.atom.call(null,clodustry.core.data);
clodustry.core.table = (function clodustry$core$table(data){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"metadata"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"last-commit",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_.call(null,clodustry.core.sorting,data);
})], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"stars",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_.call(null,clodustry.core.sorting,cljs.core.sort_by.call(null,(function (m){
return m.call(null,"stars");
}),cljs.core._GT_,data));
})], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),clodustry.core.make_rows.call(null,cljs.core.deref.call(null,clodustry.core.sorting))], null)], null);
});
clodustry.core.listing = (function clodustry$core$listing(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"This is a currated list of Mindustry mods found on GitHub with authors, descriptions, commit date and stars automatically pulled from the repositories. You can report broken mods, suggest better icons, or add missing mods ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"https://github.com/SimonWoodburyForget/mindustry-mods/blob/master/CONTRIBUTING.md#adding-mods-to-the-listing"], null),"here"], null),"."], null),clodustry.core.table.call(null,clodustry.core.data)], null);
});
clodustry.core.mount_root = (function clodustry$core$mount_root(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clodustry.core.listing], null),document.getElementById("app"));
});
clodustry.core.init_BANG_ = (function clodustry$core$init_BANG_(){
return clodustry.core.mount_root.call(null);
});

//# sourceMappingURL=core.js.map?rel=1574753039672
