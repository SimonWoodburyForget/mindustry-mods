// Compiled by ClojureScript 1.10.597 {:static-fns true, :optimize-constants true}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('ajax.protocols');
goog.require('goog.string');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
var G__25673 = e.target.readyState;
var fexpr__25672 = new cljs.core.PersistentArrayMap(null, 6, [(0),cljs.core.cst$kw$not_DASH_initialized,(1),cljs.core.cst$kw$connection_DASH_established,(2),cljs.core.cst$kw$request_DASH_received,(3),cljs.core.cst$kw$processing_DASH_request,(4),cljs.core.cst$kw$response_DASH_ready,cljs.core.cst$kw$cljs$analyzer_SLASH_analyzed,true], null);
return (fexpr__25672.cljs$core$IFn$_invoke$arity$1 ? fexpr__25672.cljs$core$IFn$_invoke$arity$1(G__25673) : fexpr__25672.call(null,G__25673));
});
ajax.xml_http_request.append = (function ajax$xml_http_request$append(current,next){
if(cljs.core.truth_(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(next)].join('');
} else {
return next;
}
});
ajax.xml_http_request.process_headers = (function ajax$xml_http_request$process_headers(header_str){
if(cljs.core.truth_(header_str)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (headers,header_line){
if(goog.string.isEmptyOrWhitespace(header_line)){
return headers;
} else {
var key_value = goog.string.splitLimit(header_line,": ",(2));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(headers,(key_value[(0)]),ajax.xml_http_request.append,(key_value[(1)]));
}
}),cljs.core.PersistentArrayMap.EMPTY,header_str.split("\r\n"));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
ajax.xml_http_request.xmlhttprequest = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_target_STAR_,"nodejs"))?(function (){var xmlhttprequest = require("xmlhttprequest").XMLHttpRequest;
goog.object.set(global,"XMLHttpRequest",xmlhttprequest);

return xmlhttprequest;
})():XMLHttpRequest);
(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__25675,handler){
var map__25676 = p__25675;
var map__25676__$1 = (((((!((map__25676 == null))))?(((((map__25676.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25676.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25676):map__25676);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25676__$1,cljs.core.cst$kw$uri);
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25676__$1,cljs.core.cst$kw$method);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25676__$1,cljs.core.cst$kw$body);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25676__$1,cljs.core.cst$kw$headers);
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__25676__$1,cljs.core.cst$kw$timeout,(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__25676__$1,cljs.core.cst$kw$with_DASH_credentials,false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25676__$1,cljs.core.cst$kw$response_DASH_format);
var this$__$1 = this;
(this$__$1.withCredentials = with_credentials);

(this$__$1.onreadystatechange = (function (p1__25674_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$response_DASH_ready,ajax.xml_http_request.ready_state(p1__25674_SHARP_))){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(this$__$1) : handler.call(null,this$__$1));
} else {
return null;
}
}));

this$__$1.open(method,uri,true);

(this$__$1.timeout = timeout);

var temp__5735__auto___25694 = cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5735__auto___25694)){
var response_type_25695 = temp__5735__auto___25694;
(this$__$1.responseType = cljs.core.name(response_type_25695));
} else {
}

var seq__25678_25696 = cljs.core.seq(headers);
var chunk__25679_25697 = null;
var count__25680_25698 = (0);
var i__25681_25699 = (0);
while(true){
if((i__25681_25699 < count__25680_25698)){
var vec__25688_25700 = chunk__25679_25697.cljs$core$IIndexed$_nth$arity$2(null,i__25681_25699);
var k_25701 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25688_25700,(0),null);
var v_25702 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25688_25700,(1),null);
this$__$1.setRequestHeader(k_25701,v_25702);


var G__25703 = seq__25678_25696;
var G__25704 = chunk__25679_25697;
var G__25705 = count__25680_25698;
var G__25706 = (i__25681_25699 + (1));
seq__25678_25696 = G__25703;
chunk__25679_25697 = G__25704;
count__25680_25698 = G__25705;
i__25681_25699 = G__25706;
continue;
} else {
var temp__5735__auto___25707 = cljs.core.seq(seq__25678_25696);
if(temp__5735__auto___25707){
var seq__25678_25708__$1 = temp__5735__auto___25707;
if(cljs.core.chunked_seq_QMARK_(seq__25678_25708__$1)){
var c__4609__auto___25709 = cljs.core.chunk_first(seq__25678_25708__$1);
var G__25710 = cljs.core.chunk_rest(seq__25678_25708__$1);
var G__25711 = c__4609__auto___25709;
var G__25712 = cljs.core.count(c__4609__auto___25709);
var G__25713 = (0);
seq__25678_25696 = G__25710;
chunk__25679_25697 = G__25711;
count__25680_25698 = G__25712;
i__25681_25699 = G__25713;
continue;
} else {
var vec__25691_25714 = cljs.core.first(seq__25678_25708__$1);
var k_25715 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25691_25714,(0),null);
var v_25716 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25691_25714,(1),null);
this$__$1.setRequestHeader(k_25715,v_25716);


var G__25717 = cljs.core.next(seq__25678_25708__$1);
var G__25718 = null;
var G__25719 = (0);
var G__25720 = (0);
seq__25678_25696 = G__25717;
chunk__25679_25697 = G__25718;
count__25680_25698 = G__25719;
i__25681_25699 = G__25720;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__4185__auto__ = body;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "";
}
})());

return this$__$1;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_all_headers$arity$1 = (function (this$){
var this$__$1 = this;
return ajax.xml_http_request.process_headers(this$__$1.getAllResponseHeaders());
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),this$__$1.readyState);
}));
