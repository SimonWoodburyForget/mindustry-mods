// Compiled by ClojureScript 1.10.597 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
goog.require('goog.string');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
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
return cljs.core.reduce.call(null,(function (headers,header_line){
if(goog.string.isEmptyOrWhitespace(header_line)){
return headers;
} else {
var key_value = goog.string.splitLimit(header_line,": ",(2));
return cljs.core.update.call(null,headers,(key_value[(0)]),ajax.xml_http_request.append,(key_value[(1)]));
}
}),cljs.core.PersistentArrayMap.EMPTY,header_str.split("\r\n"));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
ajax.xml_http_request.xmlhttprequest = ((cljs.core._EQ_.call(null,cljs.core._STAR_target_STAR_,"nodejs"))?(function (){var xmlhttprequest = require("xmlhttprequest").XMLHttpRequest;
goog.object.set(global,"XMLHttpRequest",xmlhttprequest);

return xmlhttprequest;
})():XMLHttpRequest);
(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__25401,handler){
var map__25402 = p__25401;
var map__25402__$1 = (((((!((map__25402 == null))))?(((((map__25402.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25402.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25402):map__25402);
var uri = cljs.core.get.call(null,map__25402__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__25402__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__25402__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__25402__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__25402__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__25402__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__25402__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
(this$__$1.withCredentials = with_credentials);

(this$__$1.onreadystatechange = (function (p1__25400_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__25400_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
}));

this$__$1.open(method,uri,true);

(this$__$1.timeout = timeout);

var temp__5735__auto___25420 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5735__auto___25420)){
var response_type_25421 = temp__5735__auto___25420;
(this$__$1.responseType = cljs.core.name.call(null,response_type_25421));
} else {
}

var seq__25404_25422 = cljs.core.seq.call(null,headers);
var chunk__25405_25423 = null;
var count__25406_25424 = (0);
var i__25407_25425 = (0);
while(true){
if((i__25407_25425 < count__25406_25424)){
var vec__25414_25426 = cljs.core._nth.call(null,chunk__25405_25423,i__25407_25425);
var k_25427 = cljs.core.nth.call(null,vec__25414_25426,(0),null);
var v_25428 = cljs.core.nth.call(null,vec__25414_25426,(1),null);
this$__$1.setRequestHeader(k_25427,v_25428);


var G__25429 = seq__25404_25422;
var G__25430 = chunk__25405_25423;
var G__25431 = count__25406_25424;
var G__25432 = (i__25407_25425 + (1));
seq__25404_25422 = G__25429;
chunk__25405_25423 = G__25430;
count__25406_25424 = G__25431;
i__25407_25425 = G__25432;
continue;
} else {
var temp__5735__auto___25433 = cljs.core.seq.call(null,seq__25404_25422);
if(temp__5735__auto___25433){
var seq__25404_25434__$1 = temp__5735__auto___25433;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25404_25434__$1)){
var c__4609__auto___25435 = cljs.core.chunk_first.call(null,seq__25404_25434__$1);
var G__25436 = cljs.core.chunk_rest.call(null,seq__25404_25434__$1);
var G__25437 = c__4609__auto___25435;
var G__25438 = cljs.core.count.call(null,c__4609__auto___25435);
var G__25439 = (0);
seq__25404_25422 = G__25436;
chunk__25405_25423 = G__25437;
count__25406_25424 = G__25438;
i__25407_25425 = G__25439;
continue;
} else {
var vec__25417_25440 = cljs.core.first.call(null,seq__25404_25434__$1);
var k_25441 = cljs.core.nth.call(null,vec__25417_25440,(0),null);
var v_25442 = cljs.core.nth.call(null,vec__25417_25440,(1),null);
this$__$1.setRequestHeader(k_25441,v_25442);


var G__25443 = cljs.core.next.call(null,seq__25404_25434__$1);
var G__25444 = null;
var G__25445 = (0);
var G__25446 = (0);
seq__25404_25422 = G__25443;
chunk__25405_25423 = G__25444;
count__25406_25424 = G__25445;
i__25407_25425 = G__25446;
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
return ajax.xml_http_request.process_headers.call(null,this$__$1.getAllResponseHeaders());
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.call(null,(0),this$__$1.readyState);
}));

//# sourceMappingURL=xml_http_request.js.map?rel=1574747411393
