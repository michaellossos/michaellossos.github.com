

/* lib/jquery/leocs/js/jquery-1.3.1.min.js */

/*
 * jQuery JavaScript Library v1.3.1
 * http://jquery.com/
 *
 * Copyright (c) 2009 John Resig
 * Dual licensed under the MIT and GPL licenses.
 * http://docs.jquery.com/License
 *
 * Date: 2009-01-21 20:42:16 -0500 (Wed, 21 Jan 2009)
 * Revision: 6158
 */
(function(){var l=this,g,y=l.jQuery,p=l.$,o=l.jQuery=l.$=function(E,F){return new o.fn.init(E,F)},D=/^[^<]*(<(.|\s)+>)[^>]*$|^#([\w-]+)$/,f=/^.[^:#\[\.,]*$/;o.fn=o.prototype={init:function(E,H){E=E||document;if(E.nodeType){this[0]=E;this.length=1;this.context=E;return this}if(typeof E==="string"){var G=D.exec(E);if(G&&(G[1]||!H)){if(G[1]){E=o.clean([G[1]],H)}else{var I=document.getElementById(G[3]);if(I&&I.id!=G[3]){return o().find(E)}var F=o(I||[]);F.context=document;F.selector=E;return F}}else{return o(H).find(E)}}else{if(o.isFunction(E)){return o(document).ready(E)}}if(E.selector&&E.context){this.selector=E.selector;this.context=E.context}return this.setArray(o.makeArray(E))},selector:"",jquery:"1.3.1",size:function(){return this.length},get:function(E){return E===g?o.makeArray(this):this[E]},pushStack:function(F,H,E){var G=o(F);G.prevObject=this;G.context=this.context;if(H==="find"){G.selector=this.selector+(this.selector?" ":"")+E}else{if(H){G.selector=this.selector+"."+H+"("+E+")"}}return G},setArray:function(E){this.length=0;Array.prototype.push.apply(this,E);return this},each:function(F,E){return o.each(this,F,E)},index:function(E){return o.inArray(E&&E.jquery?E[0]:E,this)},attr:function(F,H,G){var E=F;if(typeof F==="string"){if(H===g){return this[0]&&o[G||"attr"](this[0],F)}else{E={};E[F]=H}}return this.each(function(I){for(F in E){o.attr(G?this.style:this,F,o.prop(this,E[F],G,I,F))}})},css:function(E,F){if((E=="width"||E=="height")&&parseFloat(F)<0){F=g}return this.attr(E,F,"curCSS")},text:function(F){if(typeof F!=="object"&&F!=null){return this.empty().append((this[0]&&this[0].ownerDocument||document).createTextNode(F))}var E="";o.each(F||this,function(){o.each(this.childNodes,function(){if(this.nodeType!=8){E+=this.nodeType!=1?this.nodeValue:o.fn.text([this])}})});return E},wrapAll:function(E){if(this[0]){var F=o(E,this[0].ownerDocument).clone();if(this[0].parentNode){F.insertBefore(this[0])}F.map(function(){var G=this;while(G.firstChild){G=G.firstChild}return G}).append(this)}return this},wrapInner:function(E){return this.each(function(){o(this).contents().wrapAll(E)})},wrap:function(E){return this.each(function(){o(this).wrapAll(E)})},append:function(){return this.domManip(arguments,true,function(E){if(this.nodeType==1){this.appendChild(E)}})},prepend:function(){return this.domManip(arguments,true,function(E){if(this.nodeType==1){this.insertBefore(E,this.firstChild)}})},before:function(){return this.domManip(arguments,false,function(E){this.parentNode.insertBefore(E,this)})},after:function(){return this.domManip(arguments,false,function(E){this.parentNode.insertBefore(E,this.nextSibling)})},end:function(){return this.prevObject||o([])},push:[].push,find:function(E){if(this.length===1&&!/,/.test(E)){var G=this.pushStack([],"find",E);G.length=0;o.find(E,this[0],G);return G}else{var F=o.map(this,function(H){return o.find(E,H)});return this.pushStack(/[^+>] [^+>]/.test(E)?o.unique(F):F,"find",E)}},clone:function(F){var E=this.map(function(){if(!o.support.noCloneEvent&&!o.isXMLDoc(this)){var I=this.cloneNode(true),H=document.createElement("div");H.appendChild(I);return o.clean([H.innerHTML])[0]}else{return this.cloneNode(true)}});var G=E.find("*").andSelf().each(function(){if(this[h]!==g){this[h]=null}});if(F===true){this.find("*").andSelf().each(function(I){if(this.nodeType==3){return}var H=o.data(this,"events");for(var K in H){for(var J in H[K]){o.event.add(G[I],K,H[K][J],H[K][J].data)}}})}return E},filter:function(E){return this.pushStack(o.isFunction(E)&&o.grep(this,function(G,F){return E.call(G,F)})||o.multiFilter(E,o.grep(this,function(F){return F.nodeType===1})),"filter",E)},closest:function(E){var F=o.expr.match.POS.test(E)?o(E):null;return this.map(function(){var G=this;while(G&&G.ownerDocument){if(F?F.index(G)>-1:o(G).is(E)){return G}G=G.parentNode}})},not:function(E){if(typeof E==="string"){if(f.test(E)){return this.pushStack(o.multiFilter(E,this,true),"not",E)}else{E=o.multiFilter(E,this)}}var F=E.length&&E[E.length-1]!==g&&!E.nodeType;return this.filter(function(){return F?o.inArray(this,E)<0:this!=E})},add:function(E){return this.pushStack(o.unique(o.merge(this.get(),typeof E==="string"?o(E):o.makeArray(E))))},is:function(E){return !!E&&o.multiFilter(E,this).length>0},hasClass:function(E){return !!E&&this.is("."+E)},val:function(K){if(K===g){var E=this[0];if(E){if(o.nodeName(E,"option")){return(E.attributes.value||{}).specified?E.value:E.text}if(o.nodeName(E,"select")){var I=E.selectedIndex,L=[],M=E.options,H=E.type=="select-one";if(I<0){return null}for(var F=H?I:0,J=H?I+1:M.length;F<J;F++){var G=M[F];if(G.selected){K=o(G).val();if(H){return K}L.push(K)}}return L}return(E.value||"").replace(/\r/g,"")}return g}if(typeof K==="number"){K+=""}return this.each(function(){if(this.nodeType!=1){return}if(o.isArray(K)&&/radio|checkbox/.test(this.type)){this.checked=(o.inArray(this.value,K)>=0||o.inArray(this.name,K)>=0)}else{if(o.nodeName(this,"select")){var N=o.makeArray(K);o("option",this).each(function(){this.selected=(o.inArray(this.value,N)>=0||o.inArray(this.text,N)>=0)});if(!N.length){this.selectedIndex=-1}}else{this.value=K}}})},html:function(E){return E===g?(this[0]?this[0].innerHTML:null):this.empty().append(E)},replaceWith:function(E){return this.after(E).remove()},eq:function(E){return this.slice(E,+E+1)},slice:function(){return this.pushStack(Array.prototype.slice.apply(this,arguments),"slice",Array.prototype.slice.call(arguments).join(","))},map:function(E){return this.pushStack(o.map(this,function(G,F){return E.call(G,F,G)}))},andSelf:function(){return this.add(this.prevObject)},domManip:function(K,N,M){if(this[0]){var J=(this[0].ownerDocument||this[0]).createDocumentFragment(),G=o.clean(K,(this[0].ownerDocument||this[0]),J),I=J.firstChild,E=this.length>1?J.cloneNode(true):J;if(I){for(var H=0,F=this.length;H<F;H++){M.call(L(this[H],I),H>0?E.cloneNode(true):J)}}if(G){o.each(G,z)}}return this;function L(O,P){return N&&o.nodeName(O,"table")&&o.nodeName(P,"tr")?(O.getElementsByTagName("tbody")[0]||O.appendChild(O.ownerDocument.createElement("tbody"))):O}}};o.fn.init.prototype=o.fn;function z(E,F){if(F.src){o.ajax({url:F.src,async:false,dataType:"script"})}else{o.globalEval(F.text||F.textContent||F.innerHTML||"")}if(F.parentNode){F.parentNode.removeChild(F)}}function e(){return +new Date}o.extend=o.fn.extend=function(){var J=arguments[0]||{},H=1,I=arguments.length,E=false,G;if(typeof J==="boolean"){E=J;J=arguments[1]||{};H=2}if(typeof J!=="object"&&!o.isFunction(J)){J={}}if(I==H){J=this;--H}for(;H<I;H++){if((G=arguments[H])!=null){for(var F in G){var K=J[F],L=G[F];if(J===L){continue}if(E&&L&&typeof L==="object"&&!L.nodeType){J[F]=o.extend(E,K||(L.length!=null?[]:{}),L)}else{if(L!==g){J[F]=L}}}}}return J};var b=/z-?index|font-?weight|opacity|zoom|line-?height/i,q=document.defaultView||{},s=Object.prototype.toString;o.extend({noConflict:function(E){l.$=p;if(E){l.jQuery=y}return o},isFunction:function(E){return s.call(E)==="[object Function]"},isArray:function(E){return s.call(E)==="[object Array]"},isXMLDoc:function(E){return E.nodeType===9&&E.documentElement.nodeName!=="HTML"||!!E.ownerDocument&&o.isXMLDoc(E.ownerDocument)},globalEval:function(G){G=o.trim(G);if(G){var F=document.getElementsByTagName("head")[0]||document.documentElement,E=document.createElement("script");E.type="text/javascript";if(o.support.scriptEval){E.appendChild(document.createTextNode(G))}else{E.text=G}F.insertBefore(E,F.firstChild);F.removeChild(E)}},nodeName:function(F,E){return F.nodeName&&F.nodeName.toUpperCase()==E.toUpperCase()},each:function(G,K,F){var E,H=0,I=G.length;if(F){if(I===g){for(E in G){if(K.apply(G[E],F)===false){break}}}else{for(;H<I;){if(K.apply(G[H++],F)===false){break}}}}else{if(I===g){for(E in G){if(K.call(G[E],E,G[E])===false){break}}}else{for(var J=G[0];H<I&&K.call(J,H,J)!==false;J=G[++H]){}}}return G},prop:function(H,I,G,F,E){if(o.isFunction(I)){I=I.call(H,F)}return typeof I==="number"&&G=="curCSS"&&!b.test(E)?I+"px":I},className:{add:function(E,F){o.each((F||"").split(/\s+/),function(G,H){if(E.nodeType==1&&!o.className.has(E.className,H)){E.className+=(E.className?" ":"")+H}})},remove:function(E,F){if(E.nodeType==1){E.className=F!==g?o.grep(E.className.split(/\s+/),function(G){return !o.className.has(F,G)}).join(" "):""}},has:function(F,E){return F&&o.inArray(E,(F.className||F).toString().split(/\s+/))>-1}},swap:function(H,G,I){var E={};for(var F in G){E[F]=H.style[F];H.style[F]=G[F]}I.call(H);for(var F in G){H.style[F]=E[F]}},css:function(G,E,I){if(E=="width"||E=="height"){var K,F={position:"absolute",visibility:"hidden",display:"block"},J=E=="width"?["Left","Right"]:["Top","Bottom"];function H(){K=E=="width"?G.offsetWidth:G.offsetHeight;var M=0,L=0;o.each(J,function(){M+=parseFloat(o.curCSS(G,"padding"+this,true))||0;L+=parseFloat(o.curCSS(G,"border"+this+"Width",true))||0});K-=Math.round(M+L)}if(o(G).is(":visible")){H()}else{o.swap(G,F,H)}return Math.max(0,K)}return o.curCSS(G,E,I)},curCSS:function(I,F,G){var L,E=I.style;if(F=="opacity"&&!o.support.opacity){L=o.attr(E,"opacity");return L==""?"1":L}if(F.match(/float/i)){F=w}if(!G&&E&&E[F]){L=E[F]}else{if(q.getComputedStyle){if(F.match(/float/i)){F="float"}F=F.replace(/([A-Z])/g,"-$1").toLowerCase();var M=q.getComputedStyle(I,null);if(M){L=M.getPropertyValue(F)}if(F=="opacity"&&L==""){L="1"}}else{if(I.currentStyle){var J=F.replace(/\-(\w)/g,function(N,O){return O.toUpperCase()});L=I.currentStyle[F]||I.currentStyle[J];if(!/^\d+(px)?$/i.test(L)&&/^\d/.test(L)){var H=E.left,K=I.runtimeStyle.left;I.runtimeStyle.left=I.currentStyle.left;E.left=L||0;L=E.pixelLeft+"px";E.left=H;I.runtimeStyle.left=K}}}}return L},clean:function(F,K,I){K=K||document;if(typeof K.createElement==="undefined"){K=K.ownerDocument||K[0]&&K[0].ownerDocument||document}if(!I&&F.length===1&&typeof F[0]==="string"){var H=/^<(\w+)\s*\/?>$/.exec(F[0]);if(H){return[K.createElement(H[1])]}}var G=[],E=[],L=K.createElement("div");o.each(F,function(P,R){if(typeof R==="number"){R+=""}if(!R){return}if(typeof R==="string"){R=R.replace(/(<(\w+)[^>]*?)\/>/g,function(T,U,S){return S.match(/^(abbr|br|col|img|input|link|meta|param|hr|area|embed)$/i)?T:U+"></"+S+">"});var O=o.trim(R).toLowerCase();var Q=!O.indexOf("<opt")&&[1,"<select multiple='multiple'>","</select>"]||!O.indexOf("<leg")&&[1,"<fieldset>","</fieldset>"]||O.match(/^<(thead|tbody|tfoot|colg|cap)/)&&[1,"<table>","</table>"]||!O.indexOf("<tr")&&[2,"<table><tbody>","</tbody></table>"]||(!O.indexOf("<td")||!O.indexOf("<th"))&&[3,"<table><tbody><tr>","</tr></tbody></table>"]||!O.indexOf("<col")&&[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"]||!o.support.htmlSerialize&&[1,"div<div>","</div>"]||[0,"",""];L.innerHTML=Q[1]+R+Q[2];while(Q[0]--){L=L.lastChild}if(!o.support.tbody){var N=!O.indexOf("<table")&&O.indexOf("<tbody")<0?L.firstChild&&L.firstChild.childNodes:Q[1]=="<table>"&&O.indexOf("<tbody")<0?L.childNodes:[];for(var M=N.length-1;M>=0;--M){if(o.nodeName(N[M],"tbody")&&!N[M].childNodes.length){N[M].parentNode.removeChild(N[M])}}}if(!o.support.leadingWhitespace&&/^\s/.test(R)){L.insertBefore(K.createTextNode(R.match(/^\s*/)[0]),L.firstChild)}R=o.makeArray(L.childNodes)}if(R.nodeType){G.push(R)}else{G=o.merge(G,R)}});if(I){for(var J=0;G[J];J++){if(o.nodeName(G[J],"script")&&(!G[J].type||G[J].type.toLowerCase()==="text/javascript")){E.push(G[J].parentNode?G[J].parentNode.removeChild(G[J]):G[J])}else{if(G[J].nodeType===1){G.splice.apply(G,[J+1,0].concat(o.makeArray(G[J].getElementsByTagName("script"))))}I.appendChild(G[J])}}return E}return G},attr:function(J,G,K){if(!J||J.nodeType==3||J.nodeType==8){return g}var H=!o.isXMLDoc(J),L=K!==g;G=H&&o.props[G]||G;if(J.tagName){var F=/href|src|style/.test(G);if(G=="selected"&&J.parentNode){J.parentNode.selectedIndex}if(G in J&&H&&!F){if(L){if(G=="type"&&o.nodeName(J,"input")&&J.parentNode){throw"type property can't be changed"}J[G]=K}if(o.nodeName(J,"form")&&J.getAttributeNode(G)){return J.getAttributeNode(G).nodeValue}if(G=="tabIndex"){var I=J.getAttributeNode("tabIndex");return I&&I.specified?I.value:J.nodeName.match(/(button|input|object|select|textarea)/i)?0:J.nodeName.match(/^(a|area)$/i)&&J.href?0:g}return J[G]}if(!o.support.style&&H&&G=="style"){return o.attr(J.style,"cssText",K)}if(L){J.setAttribute(G,""+K)}var E=!o.support.hrefNormalized&&H&&F?J.getAttribute(G,2):J.getAttribute(G);return E===null?g:E}if(!o.support.opacity&&G=="opacity"){if(L){J.zoom=1;J.filter=(J.filter||"").replace(/alpha\([^)]*\)/,"")+(parseInt(K)+""=="NaN"?"":"alpha(opacity="+K*100+")")}return J.filter&&J.filter.indexOf("opacity=")>=0?(parseFloat(J.filter.match(/opacity=([^)]*)/)[1])/100)+"":""}G=G.replace(/-([a-z])/ig,function(M,N){return N.toUpperCase()});if(L){J[G]=K}return J[G]},trim:function(E){return(E||"").replace(/^\s+|\s+$/g,"")},makeArray:function(G){var E=[];if(G!=null){var F=G.length;if(F==null||typeof G==="string"||o.isFunction(G)||G.setInterval){E[0]=G}else{while(F){E[--F]=G[F]}}}return E},inArray:function(G,H){for(var E=0,F=H.length;E<F;E++){if(H[E]===G){return E}}return -1},merge:function(H,E){var F=0,G,I=H.length;if(!o.support.getAll){while((G=E[F++])!=null){if(G.nodeType!=8){H[I++]=G}}}else{while((G=E[F++])!=null){H[I++]=G}}return H},unique:function(K){var F=[],E={};try{for(var G=0,H=K.length;G<H;G++){var J=o.data(K[G]);if(!E[J]){E[J]=true;F.push(K[G])}}}catch(I){F=K}return F},grep:function(F,J,E){var G=[];for(var H=0,I=F.length;H<I;H++){if(!E!=!J(F[H],H)){G.push(F[H])}}return G},map:function(E,J){var F=[];for(var G=0,H=E.length;G<H;G++){var I=J(E[G],G);if(I!=null){F[F.length]=I}}return F.concat.apply([],F)}});var C=navigator.userAgent.toLowerCase();o.browser={version:(C.match(/.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/)||[0,"0"])[1],safari:/webkit/.test(C),opera:/opera/.test(C),msie:/msie/.test(C)&&!/opera/.test(C),mozilla:/mozilla/.test(C)&&!/(compatible|webkit)/.test(C)};o.each({parent:function(E){return E.parentNode},parents:function(E){return o.dir(E,"parentNode")},next:function(E){return o.nth(E,2,"nextSibling")},prev:function(E){return o.nth(E,2,"previousSibling")},nextAll:function(E){return o.dir(E,"nextSibling")},prevAll:function(E){return o.dir(E,"previousSibling")},siblings:function(E){return o.sibling(E.parentNode.firstChild,E)},children:function(E){return o.sibling(E.firstChild)},contents:function(E){return o.nodeName(E,"iframe")?E.contentDocument||E.contentWindow.document:o.makeArray(E.childNodes)}},function(E,F){o.fn[E]=function(G){var H=o.map(this,F);if(G&&typeof G=="string"){H=o.multiFilter(G,H)}return this.pushStack(o.unique(H),E,G)}});o.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(E,F){o.fn[E]=function(){var G=arguments;return this.each(function(){for(var H=0,I=G.length;H<I;H++){o(G[H])[F](this)}})}});o.each({removeAttr:function(E){o.attr(this,E,"");if(this.nodeType==1){this.removeAttribute(E)}},addClass:function(E){o.className.add(this,E)},removeClass:function(E){o.className.remove(this,E)},toggleClass:function(F,E){if(typeof E!=="boolean"){E=!o.className.has(this,F)}o.className[E?"add":"remove"](this,F)},remove:function(E){if(!E||o.filter(E,[this]).length){o("*",this).add([this]).each(function(){o.event.remove(this);o.removeData(this)});if(this.parentNode){this.parentNode.removeChild(this)}}},empty:function(){o(">*",this).remove();while(this.firstChild){this.removeChild(this.firstChild)}}},function(E,F){o.fn[E]=function(){return this.each(F,arguments)}});function j(E,F){return E[0]&&parseInt(o.curCSS(E[0],F,true),10)||0}var h="jQuery"+e(),v=0,A={};o.extend({cache:{},data:function(F,E,G){F=F==l?A:F;var H=F[h];if(!H){H=F[h]=++v}if(E&&!o.cache[H]){o.cache[H]={}}if(G!==g){o.cache[H][E]=G}return E?o.cache[H][E]:H},removeData:function(F,E){F=F==l?A:F;var H=F[h];if(E){if(o.cache[H]){delete o.cache[H][E];E="";for(E in o.cache[H]){break}if(!E){o.removeData(F)}}}else{try{delete F[h]}catch(G){if(F.removeAttribute){F.removeAttribute(h)}}delete o.cache[H]}},queue:function(F,E,H){if(F){E=(E||"fx")+"queue";var G=o.data(F,E);if(!G||o.isArray(H)){G=o.data(F,E,o.makeArray(H))}else{if(H){G.push(H)}}}return G},dequeue:function(H,G){var E=o.queue(H,G),F=E.shift();if(!G||G==="fx"){F=E[0]}if(F!==g){F.call(H)}}});o.fn.extend({data:function(E,G){var H=E.split(".");H[1]=H[1]?"."+H[1]:"";if(G===g){var F=this.triggerHandler("getData"+H[1]+"!",[H[0]]);if(F===g&&this.length){F=o.data(this[0],E)}return F===g&&H[1]?this.data(H[0]):F}else{return this.trigger("setData"+H[1]+"!",[H[0],G]).each(function(){o.data(this,E,G)})}},removeData:function(E){return this.each(function(){o.removeData(this,E)})},queue:function(E,F){if(typeof E!=="string"){F=E;E="fx"}if(F===g){return o.queue(this[0],E)}return this.each(function(){var G=o.queue(this,E,F);if(E=="fx"&&G.length==1){G[0].call(this)}})},dequeue:function(E){return this.each(function(){o.dequeue(this,E)})}});
/*
 * Sizzle CSS Selector Engine - v0.9.3
 *  Copyright 2009, The Dojo Foundation
 *  Released under the MIT, BSD, and GPL Licenses.
 *  More information: http://sizzlejs.com/
 */
(function(){var Q=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^[\]]*\]|['"][^'"]+['"]|[^[\]'"]+)+\]|\\.|[^ >+~,(\[]+)+|[>+~])(\s*,\s*)?/g,K=0,G=Object.prototype.toString;var F=function(X,T,aa,ab){aa=aa||[];T=T||document;if(T.nodeType!==1&&T.nodeType!==9){return[]}if(!X||typeof X!=="string"){return aa}var Y=[],V,ae,ah,S,ac,U,W=true;Q.lastIndex=0;while((V=Q.exec(X))!==null){Y.push(V[1]);if(V[2]){U=RegExp.rightContext;break}}if(Y.length>1&&L.exec(X)){if(Y.length===2&&H.relative[Y[0]]){ae=I(Y[0]+Y[1],T)}else{ae=H.relative[Y[0]]?[T]:F(Y.shift(),T);while(Y.length){X=Y.shift();if(H.relative[X]){X+=Y.shift()}ae=I(X,ae)}}}else{var ad=ab?{expr:Y.pop(),set:E(ab)}:F.find(Y.pop(),Y.length===1&&T.parentNode?T.parentNode:T,P(T));ae=F.filter(ad.expr,ad.set);if(Y.length>0){ah=E(ae)}else{W=false}while(Y.length){var ag=Y.pop(),af=ag;if(!H.relative[ag]){ag=""}else{af=Y.pop()}if(af==null){af=T}H.relative[ag](ah,af,P(T))}}if(!ah){ah=ae}if(!ah){throw"Syntax error, unrecognized expression: "+(ag||X)}if(G.call(ah)==="[object Array]"){if(!W){aa.push.apply(aa,ah)}else{if(T.nodeType===1){for(var Z=0;ah[Z]!=null;Z++){if(ah[Z]&&(ah[Z]===true||ah[Z].nodeType===1&&J(T,ah[Z]))){aa.push(ae[Z])}}}else{for(var Z=0;ah[Z]!=null;Z++){if(ah[Z]&&ah[Z].nodeType===1){aa.push(ae[Z])}}}}}else{E(ah,aa)}if(U){F(U,T,aa,ab)}return aa};F.matches=function(S,T){return F(S,null,null,T)};F.find=function(Z,S,aa){var Y,W;if(!Z){return[]}for(var V=0,U=H.order.length;V<U;V++){var X=H.order[V],W;if((W=H.match[X].exec(Z))){var T=RegExp.leftContext;if(T.substr(T.length-1)!=="\\"){W[1]=(W[1]||"").replace(/\\/g,"");Y=H.find[X](W,S,aa);if(Y!=null){Z=Z.replace(H.match[X],"");break}}}}if(!Y){Y=S.getElementsByTagName("*")}return{set:Y,expr:Z}};F.filter=function(ab,aa,ae,V){var U=ab,ag=[],Y=aa,X,S;while(ab&&aa.length){for(var Z in H.filter){if((X=H.match[Z].exec(ab))!=null){var T=H.filter[Z],af,ad;S=false;if(Y==ag){ag=[]}if(H.preFilter[Z]){X=H.preFilter[Z](X,Y,ae,ag,V);if(!X){S=af=true}else{if(X===true){continue}}}if(X){for(var W=0;(ad=Y[W])!=null;W++){if(ad){af=T(ad,X,W,Y);var ac=V^!!af;if(ae&&af!=null){if(ac){S=true}else{Y[W]=false}}else{if(ac){ag.push(ad);S=true}}}}}if(af!==g){if(!ae){Y=ag}ab=ab.replace(H.match[Z],"");if(!S){return[]}break}}}ab=ab.replace(/\s*,\s*/,"");if(ab==U){if(S==null){throw"Syntax error, unrecognized expression: "+ab}else{break}}U=ab}return Y};var H=F.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF_-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF_-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF_-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF_-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*_-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\((even|odd|[\dn+-]*)\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF_-]|\\.)+)(?:\((['"]*)((?:\([^\)]+\)|[^\2\(\)]*)+)\2\))?/},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(S){return S.getAttribute("href")}},relative:{"+":function(W,T){for(var U=0,S=W.length;U<S;U++){var V=W[U];if(V){var X=V.previousSibling;while(X&&X.nodeType!==1){X=X.previousSibling}W[U]=typeof T==="string"?X||false:X===T}}if(typeof T==="string"){F.filter(T,W,true)}},">":function(X,T,Y){if(typeof T==="string"&&!/\W/.test(T)){T=Y?T:T.toUpperCase();for(var U=0,S=X.length;U<S;U++){var W=X[U];if(W){var V=W.parentNode;X[U]=V.nodeName===T?V:false}}}else{for(var U=0,S=X.length;U<S;U++){var W=X[U];if(W){X[U]=typeof T==="string"?W.parentNode:W.parentNode===T}}if(typeof T==="string"){F.filter(T,X,true)}}},"":function(V,T,X){var U="done"+(K++),S=R;if(!T.match(/\W/)){var W=T=X?T:T.toUpperCase();S=O}S("parentNode",T,U,V,W,X)},"~":function(V,T,X){var U="done"+(K++),S=R;if(typeof T==="string"&&!T.match(/\W/)){var W=T=X?T:T.toUpperCase();S=O}S("previousSibling",T,U,V,W,X)}},find:{ID:function(T,U,V){if(typeof U.getElementById!=="undefined"&&!V){var S=U.getElementById(T[1]);return S?[S]:[]}},NAME:function(S,T,U){if(typeof T.getElementsByName!=="undefined"&&!U){return T.getElementsByName(S[1])}},TAG:function(S,T){return T.getElementsByTagName(S[1])}},preFilter:{CLASS:function(V,T,U,S,Y){V=" "+V[1].replace(/\\/g,"")+" ";var X;for(var W=0;(X=T[W])!=null;W++){if(X){if(Y^(" "+X.className+" ").indexOf(V)>=0){if(!U){S.push(X)}}else{if(U){T[W]=false}}}}return false},ID:function(S){return S[1].replace(/\\/g,"")},TAG:function(T,S){for(var U=0;S[U]===false;U++){}return S[U]&&P(S[U])?T[1]:T[1].toUpperCase()},CHILD:function(S){if(S[1]=="nth"){var T=/(-?)(\d*)n((?:\+|-)?\d*)/.exec(S[2]=="even"&&"2n"||S[2]=="odd"&&"2n+1"||!/\D/.test(S[2])&&"0n+"+S[2]||S[2]);S[2]=(T[1]+(T[2]||1))-0;S[3]=T[3]-0}S[0]="done"+(K++);return S},ATTR:function(T){var S=T[1].replace(/\\/g,"");if(H.attrMap[S]){T[1]=H.attrMap[S]}if(T[2]==="~="){T[4]=" "+T[4]+" "}return T},PSEUDO:function(W,T,U,S,X){if(W[1]==="not"){if(W[3].match(Q).length>1){W[3]=F(W[3],null,null,T)}else{var V=F.filter(W[3],T,U,true^X);if(!U){S.push.apply(S,V)}return false}}else{if(H.match.POS.test(W[0])){return true}}return W},POS:function(S){S.unshift(true);return S}},filters:{enabled:function(S){return S.disabled===false&&S.type!=="hidden"},disabled:function(S){return S.disabled===true},checked:function(S){return S.checked===true},selected:function(S){S.parentNode.selectedIndex;return S.selected===true},parent:function(S){return !!S.firstChild},empty:function(S){return !S.firstChild},has:function(U,T,S){return !!F(S[3],U).length},header:function(S){return/h\d/i.test(S.nodeName)},text:function(S){return"text"===S.type},radio:function(S){return"radio"===S.type},checkbox:function(S){return"checkbox"===S.type},file:function(S){return"file"===S.type},password:function(S){return"password"===S.type},submit:function(S){return"submit"===S.type},image:function(S){return"image"===S.type},reset:function(S){return"reset"===S.type},button:function(S){return"button"===S.type||S.nodeName.toUpperCase()==="BUTTON"},input:function(S){return/input|select|textarea|button/i.test(S.nodeName)}},setFilters:{first:function(T,S){return S===0},last:function(U,T,S,V){return T===V.length-1},even:function(T,S){return S%2===0},odd:function(T,S){return S%2===1},lt:function(U,T,S){return T<S[3]-0},gt:function(U,T,S){return T>S[3]-0},nth:function(U,T,S){return S[3]-0==T},eq:function(U,T,S){return S[3]-0==T}},filter:{CHILD:function(S,V){var Y=V[1],Z=S.parentNode;var X=V[0];if(Z&&(!Z[X]||!S.nodeIndex)){var W=1;for(var T=Z.firstChild;T;T=T.nextSibling){if(T.nodeType==1){T.nodeIndex=W++}}Z[X]=W-1}if(Y=="first"){return S.nodeIndex==1}else{if(Y=="last"){return S.nodeIndex==Z[X]}else{if(Y=="only"){return Z[X]==1}else{if(Y=="nth"){var ab=false,U=V[2],aa=V[3];if(U==1&&aa==0){return true}if(U==0){if(S.nodeIndex==aa){ab=true}}else{if((S.nodeIndex-aa)%U==0&&(S.nodeIndex-aa)/U>=0){ab=true}}return ab}}}}},PSEUDO:function(Y,U,V,Z){var T=U[1],W=H.filters[T];if(W){return W(Y,V,U,Z)}else{if(T==="contains"){return(Y.textContent||Y.innerText||"").indexOf(U[3])>=0}else{if(T==="not"){var X=U[3];for(var V=0,S=X.length;V<S;V++){if(X[V]===Y){return false}}return true}}}},ID:function(T,S){return T.nodeType===1&&T.getAttribute("id")===S},TAG:function(T,S){return(S==="*"&&T.nodeType===1)||T.nodeName===S},CLASS:function(T,S){return S.test(T.className)},ATTR:function(W,U){var S=H.attrHandle[U[1]]?H.attrHandle[U[1]](W):W[U[1]]||W.getAttribute(U[1]),X=S+"",V=U[2],T=U[4];return S==null?V==="!=":V==="="?X===T:V==="*="?X.indexOf(T)>=0:V==="~="?(" "+X+" ").indexOf(T)>=0:!U[4]?S:V==="!="?X!=T:V==="^="?X.indexOf(T)===0:V==="$="?X.substr(X.length-T.length)===T:V==="|="?X===T||X.substr(0,T.length+1)===T+"-":false},POS:function(W,T,U,X){var S=T[2],V=H.setFilters[S];if(V){return V(W,U,T,X)}}}};var L=H.match.POS;for(var N in H.match){H.match[N]=RegExp(H.match[N].source+/(?![^\[]*\])(?![^\(]*\))/.source)}var E=function(T,S){T=Array.prototype.slice.call(T);if(S){S.push.apply(S,T);return S}return T};try{Array.prototype.slice.call(document.documentElement.childNodes)}catch(M){E=function(W,V){var T=V||[];if(G.call(W)==="[object Array]"){Array.prototype.push.apply(T,W)}else{if(typeof W.length==="number"){for(var U=0,S=W.length;U<S;U++){T.push(W[U])}}else{for(var U=0;W[U];U++){T.push(W[U])}}}return T}}(function(){var T=document.createElement("form"),U="script"+(new Date).getTime();T.innerHTML="<input name='"+U+"'/>";var S=document.documentElement;S.insertBefore(T,S.firstChild);if(!!document.getElementById(U)){H.find.ID=function(W,X,Y){if(typeof X.getElementById!=="undefined"&&!Y){var V=X.getElementById(W[1]);return V?V.id===W[1]||typeof V.getAttributeNode!=="undefined"&&V.getAttributeNode("id").nodeValue===W[1]?[V]:g:[]}};H.filter.ID=function(X,V){var W=typeof X.getAttributeNode!=="undefined"&&X.getAttributeNode("id");return X.nodeType===1&&W&&W.nodeValue===V}}S.removeChild(T)})();(function(){var S=document.createElement("div");S.appendChild(document.createComment(""));if(S.getElementsByTagName("*").length>0){H.find.TAG=function(T,X){var W=X.getElementsByTagName(T[1]);if(T[1]==="*"){var V=[];for(var U=0;W[U];U++){if(W[U].nodeType===1){V.push(W[U])}}W=V}return W}}S.innerHTML="<a href='#'></a>";if(S.firstChild&&S.firstChild.getAttribute("href")!=="#"){H.attrHandle.href=function(T){return T.getAttribute("href",2)}}})();if(document.querySelectorAll){(function(){var S=F,T=document.createElement("div");T.innerHTML="<p class='TEST'></p>";if(T.querySelectorAll&&T.querySelectorAll(".TEST").length===0){return}F=function(X,W,U,V){W=W||document;if(!V&&W.nodeType===9&&!P(W)){try{return E(W.querySelectorAll(X),U)}catch(Y){}}return S(X,W,U,V)};F.find=S.find;F.filter=S.filter;F.selectors=S.selectors;F.matches=S.matches})()}if(document.getElementsByClassName&&document.documentElement.getElementsByClassName){H.order.splice(1,0,"CLASS");H.find.CLASS=function(S,T){return T.getElementsByClassName(S[1])}}function O(T,Z,Y,ac,aa,ab){for(var W=0,U=ac.length;W<U;W++){var S=ac[W];if(S){S=S[T];var X=false;while(S&&S.nodeType){var V=S[Y];if(V){X=ac[V];break}if(S.nodeType===1&&!ab){S[Y]=W}if(S.nodeName===Z){X=S;break}S=S[T]}ac[W]=X}}}function R(T,Y,X,ab,Z,aa){for(var V=0,U=ab.length;V<U;V++){var S=ab[V];if(S){S=S[T];var W=false;while(S&&S.nodeType){if(S[X]){W=ab[S[X]];break}if(S.nodeType===1){if(!aa){S[X]=V}if(typeof Y!=="string"){if(S===Y){W=true;break}}else{if(F.filter(Y,[S]).length>0){W=S;break}}}S=S[T]}ab[V]=W}}}var J=document.compareDocumentPosition?function(T,S){return T.compareDocumentPosition(S)&16}:function(T,S){return T!==S&&(T.contains?T.contains(S):true)};var P=function(S){return S.nodeType===9&&S.documentElement.nodeName!=="HTML"||!!S.ownerDocument&&P(S.ownerDocument)};var I=function(S,Z){var V=[],W="",X,U=Z.nodeType?[Z]:Z;while((X=H.match.PSEUDO.exec(S))){W+=X[0];S=S.replace(H.match.PSEUDO,"")}S=H.relative[S]?S+"*":S;for(var Y=0,T=U.length;Y<T;Y++){F(S,U[Y],V)}return F.filter(W,V)};o.find=F;o.filter=F.filter;o.expr=F.selectors;o.expr[":"]=o.expr.filters;F.selectors.filters.hidden=function(S){return"hidden"===S.type||o.css(S,"display")==="none"||o.css(S,"visibility")==="hidden"};F.selectors.filters.visible=function(S){return"hidden"!==S.type&&o.css(S,"display")!=="none"&&o.css(S,"visibility")!=="hidden"};F.selectors.filters.animated=function(S){return o.grep(o.timers,function(T){return S===T.elem}).length};o.multiFilter=function(U,S,T){if(T){U=":not("+U+")"}return F.matches(U,S)};o.dir=function(U,T){var S=[],V=U[T];while(V&&V!=document){if(V.nodeType==1){S.push(V)}V=V[T]}return S};o.nth=function(W,S,U,V){S=S||1;var T=0;for(;W;W=W[U]){if(W.nodeType==1&&++T==S){break}}return W};o.sibling=function(U,T){var S=[];for(;U;U=U.nextSibling){if(U.nodeType==1&&U!=T){S.push(U)}}return S};return;l.Sizzle=F})();o.event={add:function(I,F,H,K){if(I.nodeType==3||I.nodeType==8){return}if(I.setInterval&&I!=l){I=l}if(!H.guid){H.guid=this.guid++}if(K!==g){var G=H;H=this.proxy(G);H.data=K}var E=o.data(I,"events")||o.data(I,"events",{}),J=o.data(I,"handle")||o.data(I,"handle",function(){return typeof o!=="undefined"&&!o.event.triggered?o.event.handle.apply(arguments.callee.elem,arguments):g});J.elem=I;o.each(F.split(/\s+/),function(M,N){var O=N.split(".");N=O.shift();H.type=O.slice().sort().join(".");var L=E[N];if(o.event.specialAll[N]){o.event.specialAll[N].setup.call(I,K,O)}if(!L){L=E[N]={};if(!o.event.special[N]||o.event.special[N].setup.call(I,K,O)===false){if(I.addEventListener){I.addEventListener(N,J,false)}else{if(I.attachEvent){I.attachEvent("on"+N,J)}}}}L[H.guid]=H;o.event.global[N]=true});I=null},guid:1,global:{},remove:function(K,H,J){if(K.nodeType==3||K.nodeType==8){return}var G=o.data(K,"events"),F,E;if(G){if(H===g||(typeof H==="string"&&H.charAt(0)==".")){for(var I in G){this.remove(K,I+(H||""))}}else{if(H.type){J=H.handler;H=H.type}o.each(H.split(/\s+/),function(M,O){var Q=O.split(".");O=Q.shift();var N=RegExp("(^|\\.)"+Q.slice().sort().join(".*\\.")+"(\\.|$)");if(G[O]){if(J){delete G[O][J.guid]}else{for(var P in G[O]){if(N.test(G[O][P].type)){delete G[O][P]}}}if(o.event.specialAll[O]){o.event.specialAll[O].teardown.call(K,Q)}for(F in G[O]){break}if(!F){if(!o.event.special[O]||o.event.special[O].teardown.call(K,Q)===false){if(K.removeEventListener){K.removeEventListener(O,o.data(K,"handle"),false)}else{if(K.detachEvent){K.detachEvent("on"+O,o.data(K,"handle"))}}}F=null;delete G[O]}}})}for(F in G){break}if(!F){var L=o.data(K,"handle");if(L){L.elem=null}o.removeData(K,"events");o.removeData(K,"handle")}}},trigger:function(I,K,H,E){var G=I.type||I;if(!E){I=typeof I==="object"?I[h]?I:o.extend(o.Event(G),I):o.Event(G);if(G.indexOf("!")>=0){I.type=G=G.slice(0,-1);I.exclusive=true}if(!H){I.stopPropagation();if(this.global[G]){o.each(o.cache,function(){if(this.events&&this.events[G]){o.event.trigger(I,K,this.handle.elem)}})}}if(!H||H.nodeType==3||H.nodeType==8){return g}I.result=g;I.target=H;K=o.makeArray(K);K.unshift(I)}I.currentTarget=H;var J=o.data(H,"handle");if(J){J.apply(H,K)}if((!H[G]||(o.nodeName(H,"a")&&G=="click"))&&H["on"+G]&&H["on"+G].apply(H,K)===false){I.result=false}if(!E&&H[G]&&!I.isDefaultPrevented()&&!(o.nodeName(H,"a")&&G=="click")){this.triggered=true;try{H[G]()}catch(L){}}this.triggered=false;if(!I.isPropagationStopped()){var F=H.parentNode||H.ownerDocument;if(F){o.event.trigger(I,K,F,true)}}},handle:function(K){var J,E;K=arguments[0]=o.event.fix(K||l.event);var L=K.type.split(".");K.type=L.shift();J=!L.length&&!K.exclusive;var I=RegExp("(^|\\.)"+L.slice().sort().join(".*\\.")+"(\\.|$)");E=(o.data(this,"events")||{})[K.type];for(var G in E){var H=E[G];if(J||I.test(H.type)){K.handler=H;K.data=H.data;var F=H.apply(this,arguments);if(F!==g){K.result=F;if(F===false){K.preventDefault();K.stopPropagation()}}if(K.isImmediatePropagationStopped()){break}}}},props:"altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode metaKey newValue originalTarget pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),fix:function(H){if(H[h]){return H}var F=H;H=o.Event(F);for(var G=this.props.length,J;G;){J=this.props[--G];H[J]=F[J]}if(!H.target){H.target=H.srcElement||document}if(H.target.nodeType==3){H.target=H.target.parentNode}if(!H.relatedTarget&&H.fromElement){H.relatedTarget=H.fromElement==H.target?H.toElement:H.fromElement}if(H.pageX==null&&H.clientX!=null){var I=document.documentElement,E=document.body;H.pageX=H.clientX+(I&&I.scrollLeft||E&&E.scrollLeft||0)-(I.clientLeft||0);H.pageY=H.clientY+(I&&I.scrollTop||E&&E.scrollTop||0)-(I.clientTop||0)}if(!H.which&&((H.charCode||H.charCode===0)?H.charCode:H.keyCode)){H.which=H.charCode||H.keyCode}if(!H.metaKey&&H.ctrlKey){H.metaKey=H.ctrlKey}if(!H.which&&H.button){H.which=(H.button&1?1:(H.button&2?3:(H.button&4?2:0)))}return H},proxy:function(F,E){E=E||function(){return F.apply(this,arguments)};E.guid=F.guid=F.guid||E.guid||this.guid++;return E},special:{ready:{setup:B,teardown:function(){}}},specialAll:{live:{setup:function(E,F){o.event.add(this,F[0],c)},teardown:function(G){if(G.length){var E=0,F=RegExp("(^|\\.)"+G[0]+"(\\.|$)");o.each((o.data(this,"events").live||{}),function(){if(F.test(this.type)){E++}});if(E<1){o.event.remove(this,G[0],c)}}}}}};o.Event=function(E){if(!this.preventDefault){return new o.Event(E)}if(E&&E.type){this.originalEvent=E;this.type=E.type}else{this.type=E}this.timeStamp=e();this[h]=true};function k(){return false}function u(){return true}o.Event.prototype={preventDefault:function(){this.isDefaultPrevented=u;var E=this.originalEvent;if(!E){return}if(E.preventDefault){E.preventDefault()}E.returnValue=false},stopPropagation:function(){this.isPropagationStopped=u;var E=this.originalEvent;if(!E){return}if(E.stopPropagation){E.stopPropagation()}E.cancelBubble=true},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=u;this.stopPropagation()},isDefaultPrevented:k,isPropagationStopped:k,isImmediatePropagationStopped:k};var a=function(F){var E=F.relatedTarget;while(E&&E!=this){try{E=E.parentNode}catch(G){E=this}}if(E!=this){F.type=F.data;o.event.handle.apply(this,arguments)}};o.each({mouseover:"mouseenter",mouseout:"mouseleave"},function(F,E){o.event.special[E]={setup:function(){o.event.add(this,F,a,E)},teardown:function(){o.event.remove(this,F,a)}}});o.fn.extend({bind:function(F,G,E){return F=="unload"?this.one(F,G,E):this.each(function(){o.event.add(this,F,E||G,E&&G)})},one:function(G,H,F){var E=o.event.proxy(F||H,function(I){o(this).unbind(I,E);return(F||H).apply(this,arguments)});return this.each(function(){o.event.add(this,G,E,F&&H)})},unbind:function(F,E){return this.each(function(){o.event.remove(this,F,E)})},trigger:function(E,F){return this.each(function(){o.event.trigger(E,F,this)})},triggerHandler:function(E,G){if(this[0]){var F=o.Event(E);F.preventDefault();F.stopPropagation();o.event.trigger(F,G,this[0]);return F.result}},toggle:function(G){var E=arguments,F=1;while(F<E.length){o.event.proxy(G,E[F++])}return this.click(o.event.proxy(G,function(H){this.lastToggle=(this.lastToggle||0)%F;H.preventDefault();return E[this.lastToggle++].apply(this,arguments)||false}))},hover:function(E,F){return this.mouseenter(E).mouseleave(F)},ready:function(E){B();if(o.isReady){E.call(document,o)}else{o.readyList.push(E)}return this},live:function(G,F){var E=o.event.proxy(F);E.guid+=this.selector+G;o(document).bind(i(G,this.selector),this.selector,E);return this},die:function(F,E){o(document).unbind(i(F,this.selector),E?{guid:E.guid+this.selector+F}:null);return this}});function c(H){var E=RegExp("(^|\\.)"+H.type+"(\\.|$)"),G=true,F=[];o.each(o.data(this,"events").live||[],function(I,J){if(E.test(J.type)){var K=o(H.target).closest(J.data)[0];if(K){F.push({elem:K,fn:J})}}});o.each(F,function(){if(this.fn.call(this.elem,H,this.fn.data)===false){G=false}});return G}function i(F,E){return["live",F,E.replace(/\./g,"`").replace(/ /g,"|")].join(".")}o.extend({isReady:false,readyList:[],ready:function(){if(!o.isReady){o.isReady=true;if(o.readyList){o.each(o.readyList,function(){this.call(document,o)});o.readyList=null}o(document).triggerHandler("ready")}}});var x=false;function B(){if(x){return}x=true;if(document.addEventListener){document.addEventListener("DOMContentLoaded",function(){document.removeEventListener("DOMContentLoaded",arguments.callee,false);o.ready()},false)}else{if(document.attachEvent){document.attachEvent("onreadystatechange",function(){if(document.readyState==="complete"){document.detachEvent("onreadystatechange",arguments.callee);o.ready()}});if(document.documentElement.doScroll&&typeof l.frameElement==="undefined"){(function(){if(o.isReady){return}try{document.documentElement.doScroll("left")}catch(E){setTimeout(arguments.callee,0);return}o.ready()})()}}}o.event.add(l,"load",o.ready)}o.each(("blur,focus,load,resize,scroll,unload,click,dblclick,mousedown,mouseup,mousemove,mouseover,mouseout,mouseenter,mouseleave,change,select,submit,keydown,keypress,keyup,error").split(","),function(F,E){o.fn[E]=function(G){return G?this.bind(E,G):this.trigger(E)}});o(l).bind("unload",function(){for(var E in o.cache){if(E!=1&&o.cache[E].handle){o.event.remove(o.cache[E].handle.elem)}}});(function(){o.support={};var F=document.documentElement,G=document.createElement("script"),K=document.createElement("div"),J="script"+(new Date).getTime();K.style.display="none";K.innerHTML='   <link/><table></table><a href="/a" style="color:red;float:left;opacity:.5;">a</a><select><option>text</option></select><object><param/></object>';var H=K.getElementsByTagName("*"),E=K.getElementsByTagName("a")[0];if(!H||!H.length||!E){return}o.support={leadingWhitespace:K.firstChild.nodeType==3,tbody:!K.getElementsByTagName("tbody").length,objectAll:!!K.getElementsByTagName("object")[0].getElementsByTagName("*").length,htmlSerialize:!!K.getElementsByTagName("link").length,style:/red/.test(E.getAttribute("style")),hrefNormalized:E.getAttribute("href")==="/a",opacity:E.style.opacity==="0.5",cssFloat:!!E.style.cssFloat,scriptEval:false,noCloneEvent:true,boxModel:null};G.type="text/javascript";try{G.appendChild(document.createTextNode("window."+J+"=1;"))}catch(I){}F.insertBefore(G,F.firstChild);if(l[J]){o.support.scriptEval=true;delete l[J]}F.removeChild(G);if(K.attachEvent&&K.fireEvent){K.attachEvent("onclick",function(){o.support.noCloneEvent=false;K.detachEvent("onclick",arguments.callee)});K.cloneNode(true).fireEvent("onclick")}o(function(){var L=document.createElement("div");L.style.width="1px";L.style.paddingLeft="1px";document.body.appendChild(L);o.boxModel=o.support.boxModel=L.offsetWidth===2;document.body.removeChild(L)})})();var w=o.support.cssFloat?"cssFloat":"styleFloat";o.props={"for":"htmlFor","class":"className","float":w,cssFloat:w,styleFloat:w,readonly:"readOnly",maxlength:"maxLength",cellspacing:"cellSpacing",rowspan:"rowSpan",tabindex:"tabIndex"};o.fn.extend({_load:o.fn.load,load:function(G,J,K){if(typeof G!=="string"){return this._load(G)}var I=G.indexOf(" ");if(I>=0){var E=G.slice(I,G.length);G=G.slice(0,I)}var H="GET";if(J){if(o.isFunction(J)){K=J;J=null}else{if(typeof J==="object"){J=o.param(J);H="POST"}}}var F=this;o.ajax({url:G,type:H,dataType:"html",data:J,complete:function(M,L){if(L=="success"||L=="notmodified"){F.html(E?o("<div/>").append(M.responseText.replace(/<script(.|\s)*?\/script>/g,"")).find(E):M.responseText)}if(K){F.each(K,[M.responseText,L,M])}}});return this},serialize:function(){return o.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?o.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||/select|textarea/i.test(this.nodeName)||/text|hidden|password/i.test(this.type))}).map(function(E,F){var G=o(this).val();return G==null?null:o.isArray(G)?o.map(G,function(I,H){return{name:F.name,value:I}}):{name:F.name,value:G}}).get()}});o.each("ajaxStart,ajaxStop,ajaxComplete,ajaxError,ajaxSuccess,ajaxSend".split(","),function(E,F){o.fn[F]=function(G){return this.bind(F,G)}});var r=e();o.extend({get:function(E,G,H,F){if(o.isFunction(G)){H=G;G=null}return o.ajax({type:"GET",url:E,data:G,success:H,dataType:F})},getScript:function(E,F){return o.get(E,null,F,"script")},getJSON:function(E,F,G){return o.get(E,F,G,"json")},post:function(E,G,H,F){if(o.isFunction(G)){H=G;G={}}return o.ajax({type:"POST",url:E,data:G,success:H,dataType:F})},ajaxSetup:function(E){o.extend(o.ajaxSettings,E)},ajaxSettings:{url:location.href,global:true,type:"GET",contentType:"application/x-www-form-urlencoded",processData:true,async:true,xhr:function(){return l.ActiveXObject?new ActiveXObject("Microsoft.XMLHTTP"):new XMLHttpRequest()},accepts:{xml:"application/xml, text/xml",html:"text/html",script:"text/javascript, application/javascript",json:"application/json, text/javascript",text:"text/plain",_default:"*/*"}},lastModified:{},ajax:function(M){M=o.extend(true,M,o.extend(true,{},o.ajaxSettings,M));var W,F=/=\?(&|$)/g,R,V,G=M.type.toUpperCase();if(M.data&&M.processData&&typeof M.data!=="string"){M.data=o.param(M.data)}if(M.dataType=="jsonp"){if(G=="GET"){if(!M.url.match(F)){M.url+=(M.url.match(/\?/)?"&":"?")+(M.jsonp||"callback")+"=?"}}else{if(!M.data||!M.data.match(F)){M.data=(M.data?M.data+"&":"")+(M.jsonp||"callback")+"=?"}}M.dataType="json"}if(M.dataType=="json"&&(M.data&&M.data.match(F)||M.url.match(F))){W="jsonp"+r++;if(M.data){M.data=(M.data+"").replace(F,"="+W+"$1")}M.url=M.url.replace(F,"="+W+"$1");M.dataType="script";l[W]=function(X){V=X;I();L();l[W]=g;try{delete l[W]}catch(Y){}if(H){H.removeChild(T)}}}if(M.dataType=="script"&&M.cache==null){M.cache=false}if(M.cache===false&&G=="GET"){var E=e();var U=M.url.replace(/(\?|&)_=.*?(&|$)/,"$1_="+E+"$2");M.url=U+((U==M.url)?(M.url.match(/\?/)?"&":"?")+"_="+E:"")}if(M.data&&G=="GET"){M.url+=(M.url.match(/\?/)?"&":"?")+M.data;M.data=null}if(M.global&&!o.active++){o.event.trigger("ajaxStart")}var Q=/^(\w+:)?\/\/([^\/?#]+)/.exec(M.url);if(M.dataType=="script"&&G=="GET"&&Q&&(Q[1]&&Q[1]!=location.protocol||Q[2]!=location.host)){var H=document.getElementsByTagName("head")[0];var T=document.createElement("script");T.src=M.url;if(M.scriptCharset){T.charset=M.scriptCharset}if(!W){var O=false;T.onload=T.onreadystatechange=function(){if(!O&&(!this.readyState||this.readyState=="loaded"||this.readyState=="complete")){O=true;I();L();H.removeChild(T)}}}H.appendChild(T);return g}var K=false;var J=M.xhr();if(M.username){J.open(G,M.url,M.async,M.username,M.password)}else{J.open(G,M.url,M.async)}try{if(M.data){J.setRequestHeader("Content-Type",M.contentType)}if(M.ifModified){J.setRequestHeader("If-Modified-Since",o.lastModified[M.url]||"Thu, 01 Jan 1970 00:00:00 GMT")}J.setRequestHeader("X-Requested-With","XMLHttpRequest");J.setRequestHeader("Accept",M.dataType&&M.accepts[M.dataType]?M.accepts[M.dataType]+", */*":M.accepts._default)}catch(S){}if(M.beforeSend&&M.beforeSend(J,M)===false){if(M.global&&!--o.active){o.event.trigger("ajaxStop")}J.abort();return false}if(M.global){o.event.trigger("ajaxSend",[J,M])}var N=function(X){if(J.readyState==0){if(P){clearInterval(P);P=null;if(M.global&&!--o.active){o.event.trigger("ajaxStop")}}}else{if(!K&&J&&(J.readyState==4||X=="timeout")){K=true;if(P){clearInterval(P);P=null}R=X=="timeout"?"timeout":!o.httpSuccess(J)?"error":M.ifModified&&o.httpNotModified(J,M.url)?"notmodified":"success";if(R=="success"){try{V=o.httpData(J,M.dataType,M)}catch(Z){R="parsererror"}}if(R=="success"){var Y;try{Y=J.getResponseHeader("Last-Modified")}catch(Z){}if(M.ifModified&&Y){o.lastModified[M.url]=Y}if(!W){I()}}else{o.handleError(M,J,R)}L();if(X){J.abort()}if(M.async){J=null}}}};if(M.async){var P=setInterval(N,13);if(M.timeout>0){setTimeout(function(){if(J&&!K){N("timeout")}},M.timeout)}}try{J.send(M.data)}catch(S){o.handleError(M,J,null,S)}if(!M.async){N()}function I(){if(M.success){M.success(V,R)}if(M.global){o.event.trigger("ajaxSuccess",[J,M])}}function L(){if(M.complete){M.complete(J,R)}if(M.global){o.event.trigger("ajaxComplete",[J,M])}if(M.global&&!--o.active){o.event.trigger("ajaxStop")}}return J},handleError:function(F,H,E,G){if(F.error){F.error(H,E,G)}if(F.global){o.event.trigger("ajaxError",[H,F,G])}},active:0,httpSuccess:function(F){try{return !F.status&&location.protocol=="file:"||(F.status>=200&&F.status<300)||F.status==304||F.status==1223}catch(E){}return false},httpNotModified:function(G,E){try{var H=G.getResponseHeader("Last-Modified");return G.status==304||H==o.lastModified[E]}catch(F){}return false},httpData:function(J,H,G){var F=J.getResponseHeader("content-type"),E=H=="xml"||!H&&F&&F.indexOf("xml")>=0,I=E?J.responseXML:J.responseText;if(E&&I.documentElement.tagName=="parsererror"){throw"parsererror"}if(G&&G.dataFilter){I=G.dataFilter(I,H)}if(typeof I==="string"){if(H=="script"){o.globalEval(I)}if(H=="json"){I=l["eval"]("("+I+")")}}return I},param:function(E){var G=[];function H(I,J){G[G.length]=encodeURIComponent(I)+"="+encodeURIComponent(J)}if(o.isArray(E)||E.jquery){o.each(E,function(){H(this.name,this.value)})}else{for(var F in E){if(o.isArray(E[F])){o.each(E[F],function(){H(F,this)})}else{H(F,o.isFunction(E[F])?E[F]():E[F])}}}return G.join("&").replace(/%20/g,"+")}});var m={},n,d=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]];function t(F,E){var G={};o.each(d.concat.apply([],d.slice(0,E)),function(){G[this]=F});return G}o.fn.extend({show:function(J,L){if(J){return this.animate(t("show",3),J,L)}else{for(var H=0,F=this.length;H<F;H++){var E=o.data(this[H],"olddisplay");this[H].style.display=E||"";if(o.css(this[H],"display")==="none"){var G=this[H].tagName,K;if(m[G]){K=m[G]}else{var I=o("<"+G+" />").appendTo("body");K=I.css("display");if(K==="none"){K="block"}I.remove();m[G]=K}this[H].style.display=o.data(this[H],"olddisplay",K)}}return this}},hide:function(H,I){if(H){return this.animate(t("hide",3),H,I)}else{for(var G=0,F=this.length;G<F;G++){var E=o.data(this[G],"olddisplay");if(!E&&E!=="none"){o.data(this[G],"olddisplay",o.css(this[G],"display"))}this[G].style.display="none"}return this}},_toggle:o.fn.toggle,toggle:function(G,F){var E=typeof G==="boolean";return o.isFunction(G)&&o.isFunction(F)?this._toggle.apply(this,arguments):G==null||E?this.each(function(){var H=E?G:o(this).is(":hidden");o(this)[H?"show":"hide"]()}):this.animate(t("toggle",3),G,F)},fadeTo:function(E,G,F){return this.animate({opacity:G},E,F)},animate:function(I,F,H,G){var E=o.speed(F,H,G);return this[E.queue===false?"each":"queue"](function(){var K=o.extend({},E),M,L=this.nodeType==1&&o(this).is(":hidden"),J=this;for(M in I){if(I[M]=="hide"&&L||I[M]=="show"&&!L){return K.complete.call(this)}if((M=="height"||M=="width")&&this.style){K.display=o.css(this,"display");K.overflow=this.style.overflow}}if(K.overflow!=null){this.style.overflow="hidden"}K.curAnim=o.extend({},I);o.each(I,function(O,S){var R=new o.fx(J,K,O);if(/toggle|show|hide/.test(S)){R[S=="toggle"?L?"show":"hide":S](I)}else{var Q=S.toString().match(/^([+-]=)?([\d+-.]+)(.*)$/),T=R.cur(true)||0;if(Q){var N=parseFloat(Q[2]),P=Q[3]||"px";if(P!="px"){J.style[O]=(N||1)+P;T=((N||1)/R.cur(true))*T;J.style[O]=T+P}if(Q[1]){N=((Q[1]=="-="?-1:1)*N)+T}R.custom(T,N,P)}else{R.custom(T,S,"")}}});return true})},stop:function(F,E){var G=o.timers;if(F){this.queue([])}this.each(function(){for(var H=G.length-1;H>=0;H--){if(G[H].elem==this){if(E){G[H](true)}G.splice(H,1)}}});if(!E){this.dequeue()}return this}});o.each({slideDown:t("show",1),slideUp:t("hide",1),slideToggle:t("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"}},function(E,F){o.fn[E]=function(G,H){return this.animate(F,G,H)}});o.extend({speed:function(G,H,F){var E=typeof G==="object"?G:{complete:F||!F&&H||o.isFunction(G)&&G,duration:G,easing:F&&H||H&&!o.isFunction(H)&&H};E.duration=o.fx.off?0:typeof E.duration==="number"?E.duration:o.fx.speeds[E.duration]||o.fx.speeds._default;E.old=E.complete;E.complete=function(){if(E.queue!==false){o(this).dequeue()}if(o.isFunction(E.old)){E.old.call(this)}};return E},easing:{linear:function(G,H,E,F){return E+F*G},swing:function(G,H,E,F){return((-Math.cos(G*Math.PI)/2)+0.5)*F+E}},timers:[],fx:function(F,E,G){this.options=E;this.elem=F;this.prop=G;if(!E.orig){E.orig={}}}});o.fx.prototype={update:function(){if(this.options.step){this.options.step.call(this.elem,this.now,this)}(o.fx.step[this.prop]||o.fx.step._default)(this);if((this.prop=="height"||this.prop=="width")&&this.elem.style){this.elem.style.display="block"}},cur:function(F){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null)){return this.elem[this.prop]}var E=parseFloat(o.css(this.elem,this.prop,F));return E&&E>-10000?E:parseFloat(o.curCSS(this.elem,this.prop))||0},custom:function(I,H,G){this.startTime=e();this.start=I;this.end=H;this.unit=G||this.unit||"px";this.now=this.start;this.pos=this.state=0;var E=this;function F(J){return E.step(J)}F.elem=this.elem;if(F()&&o.timers.push(F)==1){n=setInterval(function(){var K=o.timers;for(var J=0;J<K.length;J++){if(!K[J]()){K.splice(J--,1)}}if(!K.length){clearInterval(n)}},13)}},show:function(){this.options.orig[this.prop]=o.attr(this.elem.style,this.prop);this.options.show=true;this.custom(this.prop=="width"||this.prop=="height"?1:0,this.cur());o(this.elem).show()},hide:function(){this.options.orig[this.prop]=o.attr(this.elem.style,this.prop);this.options.hide=true;this.custom(this.cur(),0)},step:function(H){var G=e();if(H||G>=this.options.duration+this.startTime){this.now=this.end;this.pos=this.state=1;this.update();this.options.curAnim[this.prop]=true;var E=true;for(var F in this.options.curAnim){if(this.options.curAnim[F]!==true){E=false}}if(E){if(this.options.display!=null){this.elem.style.overflow=this.options.overflow;this.elem.style.display=this.options.display;if(o.css(this.elem,"display")=="none"){this.elem.style.display="block"}}if(this.options.hide){o(this.elem).hide()}if(this.options.hide||this.options.show){for(var I in this.options.curAnim){o.attr(this.elem.style,I,this.options.orig[I])}}this.options.complete.call(this.elem)}return false}else{var J=G-this.startTime;this.state=J/this.options.duration;this.pos=o.easing[this.options.easing||(o.easing.swing?"swing":"linear")](this.state,J,0,1,this.options.duration);this.now=this.start+((this.end-this.start)*this.pos);this.update()}return true}};o.extend(o.fx,{speeds:{slow:600,fast:200,_default:400},step:{opacity:function(E){o.attr(E.elem.style,"opacity",E.now)},_default:function(E){if(E.elem.style&&E.elem.style[E.prop]!=null){E.elem.style[E.prop]=E.now+E.unit}else{E.elem[E.prop]=E.now}}}});if(document.documentElement.getBoundingClientRect){o.fn.offset=function(){if(!this[0]){return{top:0,left:0}}if(this[0]===this[0].ownerDocument.body){return o.offset.bodyOffset(this[0])}var G=this[0].getBoundingClientRect(),J=this[0].ownerDocument,F=J.body,E=J.documentElement,L=E.clientTop||F.clientTop||0,K=E.clientLeft||F.clientLeft||0,I=G.top+(self.pageYOffset||o.boxModel&&E.scrollTop||F.scrollTop)-L,H=G.left+(self.pageXOffset||o.boxModel&&E.scrollLeft||F.scrollLeft)-K;return{top:I,left:H}}}else{o.fn.offset=function(){if(!this[0]){return{top:0,left:0}}if(this[0]===this[0].ownerDocument.body){return o.offset.bodyOffset(this[0])}o.offset.initialized||o.offset.initialize();var J=this[0],G=J.offsetParent,F=J,O=J.ownerDocument,M,H=O.documentElement,K=O.body,L=O.defaultView,E=L.getComputedStyle(J,null),N=J.offsetTop,I=J.offsetLeft;while((J=J.parentNode)&&J!==K&&J!==H){M=L.getComputedStyle(J,null);N-=J.scrollTop,I-=J.scrollLeft;if(J===G){N+=J.offsetTop,I+=J.offsetLeft;if(o.offset.doesNotAddBorder&&!(o.offset.doesAddBorderForTableAndCells&&/^t(able|d|h)$/i.test(J.tagName))){N+=parseInt(M.borderTopWidth,10)||0,I+=parseInt(M.borderLeftWidth,10)||0}F=G,G=J.offsetParent}if(o.offset.subtractsBorderForOverflowNotVisible&&M.overflow!=="visible"){N+=parseInt(M.borderTopWidth,10)||0,I+=parseInt(M.borderLeftWidth,10)||0}E=M}if(E.position==="relative"||E.position==="static"){N+=K.offsetTop,I+=K.offsetLeft}if(E.position==="fixed"){N+=Math.max(H.scrollTop,K.scrollTop),I+=Math.max(H.scrollLeft,K.scrollLeft)}return{top:N,left:I}}}o.offset={initialize:function(){if(this.initialized){return}var L=document.body,F=document.createElement("div"),H,G,N,I,M,E,J=L.style.marginTop,K='<div style="position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;"><div></div></div><table style="position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;" cellpadding="0" cellspacing="0"><tr><td></td></tr></table>';M={position:"absolute",top:0,left:0,margin:0,border:0,width:"1px",height:"1px",visibility:"hidden"};for(E in M){F.style[E]=M[E]}F.innerHTML=K;L.insertBefore(F,L.firstChild);H=F.firstChild,G=H.firstChild,I=H.nextSibling.firstChild.firstChild;this.doesNotAddBorder=(G.offsetTop!==5);this.doesAddBorderForTableAndCells=(I.offsetTop===5);H.style.overflow="hidden",H.style.position="relative";this.subtractsBorderForOverflowNotVisible=(G.offsetTop===-5);L.style.marginTop="1px";this.doesNotIncludeMarginInBodyOffset=(L.offsetTop===0);L.style.marginTop=J;L.removeChild(F);this.initialized=true},bodyOffset:function(E){o.offset.initialized||o.offset.initialize();var G=E.offsetTop,F=E.offsetLeft;if(o.offset.doesNotIncludeMarginInBodyOffset){G+=parseInt(o.curCSS(E,"marginTop",true),10)||0,F+=parseInt(o.curCSS(E,"marginLeft",true),10)||0}return{top:G,left:F}}};o.fn.extend({position:function(){var I=0,H=0,F;if(this[0]){var G=this.offsetParent(),J=this.offset(),E=/^body|html$/i.test(G[0].tagName)?{top:0,left:0}:G.offset();J.top-=j(this,"marginTop");J.left-=j(this,"marginLeft");E.top+=j(G,"borderTopWidth");E.left+=j(G,"borderLeftWidth");F={top:J.top-E.top,left:J.left-E.left}}return F},offsetParent:function(){var E=this[0].offsetParent||document.body;while(E&&(!/^body|html$/i.test(E.tagName)&&o.css(E,"position")=="static")){E=E.offsetParent}return o(E)}});o.each(["Left","Top"],function(F,E){var G="scroll"+E;o.fn[G]=function(H){if(!this[0]){return null}return H!==g?this.each(function(){this==l||this==document?l.scrollTo(!F?H:o(l).scrollLeft(),F?H:o(l).scrollTop()):this[G]=H}):this[0]==l||this[0]==document?self[F?"pageYOffset":"pageXOffset"]||o.boxModel&&document.documentElement[G]||document.body[G]:this[0][G]}});o.each(["Height","Width"],function(H,F){var E=H?"Left":"Top",G=H?"Right":"Bottom";o.fn["inner"+F]=function(){return this[F.toLowerCase()]()+j(this,"padding"+E)+j(this,"padding"+G)};o.fn["outer"+F]=function(J){return this["inner"+F]()+j(this,"border"+E+"Width")+j(this,"border"+G+"Width")+(J?j(this,"margin"+E)+j(this,"margin"+G):0)};var I=F.toLowerCase();o.fn[I]=function(J){return this[0]==l?document.compatMode=="CSS1Compat"&&document.documentElement["client"+F]||document.body["client"+F]:this[0]==document?Math.max(document.documentElement["client"+F],document.body["scroll"+F],document.documentElement["scroll"+F],document.body["offset"+F],document.documentElement["offset"+F]):J===g?(this.length?o.css(this[0],I):null):this.css(I,typeof J==="string"?J:J+"px")}})})();

/* lib/jquery/leocs/js/jquery.pubsub.js */

/*
	jQuery pub/sub plugin by Peter Higgins (dante@dojotoolkit.org)
	Loosely based on Dojo publish/subscribe API, limited in scope. Rewritten blindly.
	Original is (c) Dojo Foundation 2004-2009. Released under either AFL or new BSD, see:
	http://dojofoundation.org/license for more information.
*/
;(function(d){
	// the topic/subscription hash
	var cache = {};
	d.publish = function(/* String */topic, /* Array? */args){
		// summary: 
		//		Publish some data on a named topic.
		// topic: String
		//		The channel to publish on
		// args: Array?
		//		The data to publish. Each array item is converted into an ordered
		//		arguments on the subscribed functions. 
		//
		// example:
		//		Publish stuff on '/some/topic'. Anything subscribed will be called
		//		with a function signature like: function(a,b,c){ ... }
		//
		//	|		$.publish("/some/topic", ["a","b","c"]);
		d.each(cache[topic], function(){
			this.apply(d, args || []);
		});
	};
	d.subscribe = function(/* String */topic, /* Function */callback){
		// summary:
		//		Register a callback on a named topic.
		// topic: String
		//		The channel to subscribe to
		// callback: Function
		//		The handler event. Anytime something is $.publish'ed on a 
		//		subscribed channel, the callback will be called with the
		//		published array as ordered arguments.
		//
		// returns: Array
		//		A handle which can be used to unsubscribe this particular subscription.
		//	
		// example:
		//	|	$.subscribe("/some/topic", function(a, b, c){ /* handle data */ });
		//
		if(!cache[topic]){
			cache[topic] = [];
		}
		cache[topic].push(callback);
		return [topic, callback]; // Array
	};
	d.unsubscribe = function(/* Array */handle){
		// summary:
		//		Disconnect a subscribed function for a topic.
		// handle: Array
		//		The return value from a $.subscribe call.
		// example:
		//	|	var handle = $.subscribe("/something", function(){});
		//	|	$.unsubscribe(handle);

		var t = handle[0];
		cache[t] && d.each(cache[t], function(idx){
			if(this == handle[1]){
				cache[t].splice(idx, 1);
			}
		});
	};
})(jQuery);

/* js/apps/GuidedEdit.refactored.js */

!function(){var merge=YAHOO.lang.merge;
LI.define("GuidedEdit");
LI.define("GuidedEdit.localValidation");
LI.define("GuidedEdit.nextPane");
LI.GuidedEdit.refactored=true;
LI.GuidedEdit.mixins={setConfig:function(config){if(!this.config){this.config={}
}if(config){for(var key in config){this.config[key]=config[key]
}for(var key in this.config){if(key.match(/^on/)&&typeof this.config[key]=="function"){this.addEvent(key,this.config[key])
}}}},addEvent:function(event,fn){if(!this._events){this._events={}
}if(!this._events[event]){this._events[event]=[]
}this._events[event].push(fn);
return true
},removeEvent:function(event,fn){if(!this._events[event]){return
}if(!fn){delete this._events[event]
}else{for(var i=0,len=this._events[event].length;
i<len;
i++){if(this._events[event][i]===fn){this._events[event].splice[i,1];
break
}}}},fireEvent:function(event,args){var evt;
if(this._events){evt=this._events[event];
if(evt){for(var i=0,len=evt.length;
i<len;
i+=1){evt[i].apply(this,args)
}}}}};
LI.GuidedEdit.Manager=function(config){this.setConfig(config);
this.initForms();
this.modules={};
this.getModules()
};
LI.GuidedEdit.Manager.prototype=merge(LI.GuidedEdit.Manager.prototype,LI.GuidedEdit.mixins,{config:{modulesURL:"/profile/mappers",modules:"profile_skill,profile_patent,profile_summary,profile_edu,profile_pos,profile_overview,profile_pub,profile_cert,profile_course,profile_honor,profile_lang,profile_org,profile_personal_info,profile_project,profile_test_score,profile_vs,profile_top_summary,profile_section_order",formsURL:"/profile/guided-edit-start-point",insertPoint:"content",isPromo:false},initForms:function(){this.formContainer=document.createElement("div");
this.formContainer.setAttribute("id","ge_form_container");
this.formContainer.setAttribute("tabindex","-1");
YDom.get(this.config.insertPoint).appendChild(this.formContainer);
this.startFlow()
},startFlow:function(url,restart){this.makeRequest("post",url||this.config.formsURL,"",function(resp){if(resp.responseText){resp=resp.responseText
}if(!this.config.isPromo){if(!restart){if(resp.showCompletenessMeter){YDom.setStyle("profile-progress-meter","display","block");
$.subscribe("ge-response",LI.ProfileProgressMeter.update);
this.addEvent("onFormUpdate",function(response){if(response.name!="finished"){$.publish("ge-response",[response])
}})
}else{YDom.setStyle("post-it","display","block");
this.addEvent("onFormUpdate",function(response){LI.TaskNote.update(response)
})
}}else{if(LI.TaskNote&&LI.TaskNote.instance){LI.TaskNote.instance.reset()
}}}this.addForm(resp);
this.fireEvent("onFormStart",[resp]);
this.fireEvent("onFormUpdate",[resp])
},this)
},addForm:function(resp){var self=this;
new LI.GuidedEdit.Form(resp,{insertPoint:this.formContainer,clearOnInsert:true,onFormSuccess:function(response,update){(function(){this.addForm(response.responseText);
this.fireEvent("onFormUpdate",[response.responseText])
}).apply(self,arguments)
},onAction:function(action,formName,event,target){switch(action){case"finished":this.startFlow.apply(self,[target.getAttribute("data-li-continueaction"),true]);
break;
case"save":if(!this.config.isPromo){this.addEvent("onFormSuccess",function(){if(self.modules){self.getModules.apply(self,[this.updateNames])
}})
}break
}},isPromo:this.config.isPromo});
this.formContainer.focus()
},makeRequest:function(method,loc,data,callback,scope,isSection){var isPost=method&&method.match(/post/i),url,qs=[];
loc=loc.split("?");
url=loc[0];
if(loc[1]){qs.push(loc[1])
}if(data){qs.push(data)
}qs=qs.join("&");
LI.asyncRequest(method,url+(isPost?"":("?"+qs)),{success:callback,custom:{exception:(isSection)?function(){return false
}:undefined},scope:scope||this},(isPost)?qs:"")
},getModules:function(updates){if(!this.config.isPromo){var data,callback;
if(updates||this.config.modules){if(updates){data="x-a="+updates.join(",");
callback=this.updateModules
}else{data="x-a="+this.config.modules;
callback=this.addModules
}this.makeRequest("get",this.config.modulesURL,data,callback,this,true)
}}},addModules:function(resp){if(resp.responseText){resp=resp.responseText
}var sectNames=resp.profile_section_order.sectionOrder;
sectNames.unshift("profile_top_summary");
for(var i=0,len=sectNames.length;
i<len;
i++){if(dust.cache[sectNames[i]]){this.addModule(sectNames[i],resp)
}}},addModule:function(moduleName,data){this.modules[moduleName]=new LI.GuidedEdit.Module(data,{insertPoint:this.config.insertPoint,url:this.config.modulesURL,locale:this.config.locale,name:moduleName});
return this
},updateModules:function(response){if(response&&response.responseText){response=response.responseText
}for(var k in response){if(k!="profile_overview"){if(this.modules&&this.modules[k]){this.modules[k].render(response)
}else{this.addModule(k,response)
}}}}});
LI.GuidedEdit.Module=function(data,config){this.setConfig(config);
this.name=this.config.name;
this.container=this.createContainer();
this.render(data)
};
LI.GuidedEdit.Module.prototype=merge(LI.GuidedEdit.Manager.prototype,LI.GuidedEdit.mixins,{config:{insertPoint:document.body,clearOnInsert:false},createContainer:function(){var tmp=document.createElement("div"),moduleParent=YDom.get(this.config.insertPoint);
tmp.id=this.name;
if(this.config.clearOnInsert){moduleParent.innerHTML=""
}moduleParent.appendChild(tmp);
return tmp
},render:function(json){var self=this;
if(!dust.cache[this.name]){return this
}dust.stream(this.name,json).on("data",function(data){(function(){this.container.innerHTML=data;
LI.each(self.container.getElementsByTagName("script"),function(script){eval(script.text)
});
this.fireEvent("onRender",[json,this.name])
}).apply(self)
}).on("end",function(){}).on("error",function(err){if(window.console&&console.log){console.log("Dust streaming error: %o",err)
}})
}});
LI.GuidedEdit.Form=function(data,config){var self=this;
this.setConfig(config);
this.name=this.config.name||data.name;
this.container=this.createContainer();
this.addEvent("onRender",function(){(function(){this.form=Y$("form",this.container,true);
if(this.form){YEvent.on(this.container,"click",this.checkActionableClick,this,true);
YEvent.on(this.form,"submit",this.checkSubmit,this,true)
}}).apply(self,arguments)
});
this.updateNames=(typeof data.updateSection=="string")?[data.updateSection]:data.updateSection;
this.render(data)
};
LI.GuidedEdit.Form.prototype=merge(LI.GuidedEdit.Form.prototype,LI.GuidedEdit.mixins,LI.GuidedEdit.Module.prototype,{config:{processingClass:"form-submit-processing"},formSuccess:function(response){this.fireEvent("onFormSuccess",[response,this.updateNames])
},checkActionableClick:function(evt){var target=this.getTarget(evt);
if(target){this.takeAction(target,evt)
}},checkSubmit:function(evt){this.takeAction(this.getDefaultButton(),evt)
},getDefaultButton:function(){if(this.hasMultiplePanes()){return Y$("fieldset.current .btn-action",this.form,true)
}return Y$(".btn-action",this.form,true)
},getTarget:function(evt){var target=YEvent.getTarget(evt);
if(!target){return null
}while(!this.isActionable(target)){if(YDom.hasClass(target,"guided-edit")){return null
}target=target.parentNode
}if(this.hasMultiplePanes()&&!YDom.hasClass(target,"close-action")){if(!YDom.getAncestorByClassName(target,"current")){target=Y$("fieldset.current .btn-action",this.form,true)
}}return target
},takeAction:function(target,evt){var actionTaken,inputs;
if(YDom.hasClass(target,"close-action")){if(this.config.isPromo){if(evt){YEvent.preventDefault(evt)
}var elem=Y$(".guided-edit")[0];
var animateOut=new YAHOO.util.Anim(elem,{height:{to:0},opacity:{to:0}},0.3,YAHOO.util.Easing.easeIn);
animateOut.onComplete.subscribe(function(){elem.parentNode.removeChild(elem)
});
animateOut.animate();
YConn.asyncRequest("GET",target.getAttribute("data-li-guided_close_action"),function(){})
}return
}actionTaken=target.getAttribute("role");
actionTaken=actionTaken.replace(/^action\:/,"");
if(!actionTaken){return
}LI.removeAlert();
YEvent.preventDefault(evt);
if(YDom.hasClass(this.form,this.config.processingClass)){return
}LI.GhostLabel.Manager.hide(this.form.id);
var validated=this.locallyValidated(this.hasMultiplePanes()?Y$("fieldset.current",this.form,true):this.form);
if(actionTaken=="save"||actionTaken=="next"){if(!validated||LI.GuidedEdit.localValidation[this.name]&&!LI.GuidedEdit.localValidation[this.name](evt,this.form,actionTaken)){return false
}}this.showProgress(target,evt);
this.addHiddenInput("actionTaken",actionTaken);
inputs=Y$("input:not([type=hidden]):not([type=submit]), select, textarea",this.form);
for(var i=0,len=inputs.length;
i<len;
i++){if(inputs[i].validationerror){inputs[i].validationerror.hide(true)
}}this.fireEvent("onAction",[actionTaken,this.name,evt,target]);
switch(actionTaken){case"next":if(this.hasMultiplePanes()){this.showNextPane(target,evt);
return
}break;
case"skip":case"does_not_apply":this.form.setAttribute("data-li-actionurl",this.form.getAttribute("action"));
this.form.setAttribute("method","get");
this.form.setAttribute("action",target.getAttribute("href"));
this.addHiddenInput("taskName",this.name);
break;
case"finished":return
}this.submitForm(evt)
},locallyValidated:function(container){var fields=Y$("[data-li-validation]",container),validated=true,field,tests,showError=function(input,error){if(input.validationerror){input.validationerror.show(error)
}else{new LI.GuidedEdit.FormError(input,error)
}};
for(var i=0,len=fields.length;
i<len;
i++){field=fields[i];
tests=field.getAttribute("data-li-validation");
try{tests=YAHOO.lang.JSON.parse(tests)
}catch(err){break
}for(var k in tests){switch(k){case"required":if(tests[k]){if(!field.value||field.value==field.placeholder){showError(field,LI.i18n.get("validation-fail-required-field"));
validated=false
}}break;
case"maxlength":if(YAHOO.lang.trim(field.value).length>tests[k]){showError(field,YAHOO.lang.substitute(LI.i18n.get("validation-fail-too-long"),{"0":YAHOO.lang.trim(field.value).length-tests[k]}));
validated=false
}break
}}}return validated
},hasMultiplePanes:function(){if(this.panes===undefined){this.panes=Y$("fieldset",this.form);
if(this.panes.length<2){this.panes=false
}}return !!this.panes
},showNextPane:function(target,evt){var current=YDom.getAncestorByTagName(target,"fieldset"),next,pane;
if(LI.GuidedEdit.nextPane[this.name]){if(LI.GuidedEdit.nextPane[this.name](target,evt,this)===false){this.hideProgress();
return
}}for(var i=0,len=this.panes.length;
i<len;
i++){pane=this.panes[i];
if(next==pane){YDom.addClass(pane,"current");
if(pane.onDisplay){pane.onDisplay()
}}else{YDom.removeClass(pane,"current")
}if(current===pane){if(this.panes[i+1]){next=this.panes[i+1]
}}}this.hideProgress()
},isActionable:function(node){var action=node.getAttribute("role");
return(action&&action.match(/^action\:/))
},addHiddenInput:function(name,value){var tmp=Y$("input[name="+name+"]",this.form,true);
if(!tmp){tmp=document.createElement("input");
tmp.setAttribute("name",name);
tmp.setAttribute("type","hidden");
this.form.appendChild(tmp)
}tmp.setAttribute("value",value)
},submitForm:function(evt){this.addHiddenInput("pagekey",LI.getPageKey());
YUtil.Connect.setForm(this.form);
LI.asyncRequest(this.form.getAttribute("method")||"POST",this.form.action,{custom:{error:function(err){LI.GhostLabel.Manager.show(this.form.id);
this.hideProgress();
if(err.globalError){LI.injectAlert(err.globalError,"error")
}this.handleErrors(err)
},exception:function(){LI.injectAlert(LI.i18n.get("unableToProcessRequest"),"error");
this.hideProgress()
}},success:this.formSuccess,failure:function(){LI.injectAlert(LI.i18n.get("unableToProcessRequest"),"error");
this.hideProgress()
},timeout:25000,scope:this})
},handleErrors:function(errors,force){var msg,elem;
if(this.hasMultiplePanes()&&!force){this.handleMultiPaneErrors(errors);
return
}for(var k in errors.fieldErrors){msg=errors.fieldErrors[k];
elem=document.getElementById(k);
if(elem){if(elem.validationerror){elem.validationerror.show(msg)
}else{new LI.GuidedEdit.FormError(k,msg)
}}}},handleMultiPaneErrors:function(sentErrors){sentErrors=sentErrors.fieldErrors;
var errors=[],input,pane,self=this;
for(var k in sentErrors){error=sentErrors[k];
if(error){input=document.getElementById(k);
pane=YDom.getAncestorByTagName(input,"fieldset");
for(var i=0,len=this.panes.length;
i<len;
i++){if(pane==this.panes[i]){if(!errors[i]){errors[i]={};
errors[i].fieldErrors={}
}errors[i].fieldErrors[k]=error
}}}}var firstPane;
for(var i=0,len=this.panes.length;
i<len;
i++){if(errors[i]){if(!firstPane){YDom.addClass(this.panes[i],"current");
this.handleErrors(errors[i],true);
firstPane=true
}else{YDom.removeClass(this.panes[i],"current");
pane.onDisplay=(function(){var x=i;
return function(){self.handleErrors(errors[x],true);
delete self.panes[x].onDisplay
}
})()
}}else{YDom.removeClass(this.panes[i],"current")
}}},showProgress:function(target,evt){if(!this.progress){this.injectProgress()
}var region=YDom.getRegion(this.form.parentNode),screen=this.progress.screen,indicator=this.progress.indicator,injectAfterTarget=Y$(".btn-secondary",YDom.getAncestorByTagName(target,"fieldset"),true);
if(!injectAfterTarget){alternateLinkContainer=Y$(".alternate",YDom.getAncestorByTagName(target,"fieldset"),true);
if(alternateLinkContainer){injectAfterTarget=alternateLinkContainer.previousSibling
}}YDom.setStyle(screen,"width",region.width+"px");
YDom.setStyle(screen,"height",region.height+"px");
this.injectAfter(this.progress.indicator,injectAfterTarget);
YDom.addClass(this.form,this.config.processingClass);
YDom.setStyle(screen,"display","block")
},hideProgress:function(){var url;
if(url=this.form.getAttribute("data-li-actionurl")){this.form.setAttribute("action",url);
this.form.removeAttribute("data-li-actionurl")
}YDom.removeClass(this.form,this.config.processingClass);
if(this.progress){YDom.setStyle(this.progress.screen,"display","none")
}},injectProgress:function(){this.progress={};
var screen=this.progress.screen=document.createElement("div");
YDom.addClass(screen,"screen");
YDom.setStyle(screen,"position","absolute");
YDom.setStyle(screen,"top",0);
YDom.setStyle(screen,"left",0);
this.form.parentNode.appendChild(screen);
this.progress.indicator=document.createElement("div");
YDom.addClass(this.progress.indicator,"progress-indicator");
YDom.setStyle(screen,"background-color","#FFF");
YDom.setStyle(screen,"opacity",".2")
},injectAfter:function(elem,after){if(after.nextSibling){after.parentNode.insertBefore(elem,after.nextSibling)
}else{after.parentNode.appendChild(elem)
}}});
LI.GuidedEdit.FormError=function(id,message,quiet){if(typeof id==="string"){this.inputId=id;
this.input=YDom.get(id)
}else{this.input=id;
this.inputId=id.getAttribute("id")
}var form=YDom.getAncestorByTagName(this.input,"form");
var input=this.errorLocation=Y$("[data-li-linkerror="+id+"]",form,true)||this.input;
if(!input){return false
}input.validationerror=this;
this.container=YDom.getAncestorByClassName(input,"guided-edit");
this.bindEvents();
this.createErrorElement();
this.setAnimations();
YEvent.addListener(this.element,"click",this.bound.hide);
if(!quiet){this.show(message)
}};
LI.GuidedEdit.FormError.prototype=merge(LI.GuidedEdit.FormError.prototype,{bindEvents:function(){var self=this;
this.bound={};
this.bound.hide=function(){self.hide.apply(self,arguments)
};
this.bound.show=function(){self.show.apply(self,arguments)
}
},positionError:function(){var inputRegion=YDom.getRegion(this.errorLocation),areaRegion=YDom.getRegion(this.container);
if(inputRegion.width<150){YDom.setStyle(this.element,"width","150px")
}else{YDom.setStyle(this.element,"max-width",inputRegion.width+"px")
}var errRegion=this.getRegion(this.element);
this.element.style.top=((inputRegion.top-areaRegion.top)-errRegion.height+18)+"px";
this.element.style.left=(inputRegion.left-areaRegion.left)+"px"
},getRegion:function(elem){var aspects=["top","left","bottom","right","position","visibility","display"];
var stats={},region,tmp;
for(var i=0,len=aspects.length;
i<len;
i++){tmp=aspects[i];
stats[tmp]=elem.style[tmp]
}elem.style.visibility="hidden";
elem.style.position="absolute";
elem.style.display="block";
elem.style.top="0px";
elem.style.left="-1000px";
var region=YDom.getRegion(elem);
for(var k in stats){elem.style[k]=stats[k]
}return region
},createErrorElement:function(){this.element=document.createElement("div");
this.element.className="balloon-error-wrap error-top";
var middlingElem=document.createElement("div");
middlingElem.className="balloon-error";
this.messageElem=document.createElement("p");
middlingElem.appendChild(this.messageElem);
this.element.appendChild(middlingElem);
this.container.appendChild(this.element);
return this.element
},setAnimations:function(){var elem=this.element;
this.animationIn=new YAHOO.util.Anim(this.element,{opacity:{from:0,to:1.3},top:{by:-20}},0.5,YAHOO.util.Easing.bounceOut);
this.animationIn.onStart.subscribe(function(){YDom.setStyle(elem,"display","block")
});
this.animationOut=new YAHOO.util.Anim(this.element,{top:{by:20},opacity:{to:0}},0.3,YAHOO.util.Easing.easeIn);
this.animationOut.onComplete.subscribe(function(){YDom.setStyle(elem,"display","none")
})
},show:function(message,noposition){var self=this;
this.setMessage(message);
if(!noposition){this.positionError()
}this.animationIn.animate();
YEvent.addListener(this.inputId,"focusin",this.bound.hide);
this.visible=true
},hide:function(immediate){if(!immediate){this.animationOut.animate();
if(this.relatedInput.select){this.relatedInput.select()
}}else{YDom.setStyle(this.element,"display","none")
}YEvent.removeListener(this.inputId,"focusin",this.bound.hide);
this.visible=false
},setMessage:function(message){this.messageElem.innerHTML=message||LI.i18n.get("pleaseCheckForErrors")
}});
LI.GuidedEdit.CheckTextarea=function(el,config){if(!el){return
}this.element=YDom.get(el);
this.id=this.element.getAttribute("id");
config=merge({i18n:{isError:LI.i18n.get("CheckTextarea-error"),isEmpty:LI.i18n.get("CheckTextarea-empty"),isCountDown:LI.i18n.get("CheckTextarea-countdown"),isFull:LI.i18n.get("CheckTextarea-full"),twitterOver:LI.i18n.get("CheckTextarea-twitter-over"),twitterUnder:LI.i18n.get("CheckTextarea-twitter-under")}},config||{});
this.setConfig(config);
this.setEvents()
};
LI.GuidedEdit.CheckTextarea.prototype=merge(LI.GuidedEdit.CheckTextarea.prototype,{config:{maxLength:2000},setEvents:function(){var self=this;
YEvent.on(this.element,"keyup",function(){self.checkLength.apply(self,arguments)
});
YEvent.on(this.element,"paste",function(){self.checkLength.apply(self,arguments)
})
},checkLength:function(){var length=this.element.value.replace(/\r?\n/g,"\n").length;
if(length>this.config.maxLength){this.showError(length)
}else{if(this.error&&this.error.visible){this.error.hide()
}}},showError:function(length){var msg,config=this.config;
var counts={0:Math.abs(config.maxLength-length),1:length};
if(length>config.maxLength){msg=config.i18n.isError
}else{if(length==config.maxLength){msg=config.i18n.isFull
}else{if(length<=config.maxLength&&length>0){msg=config.i18n.isCountDown
}else{if(length==0){msg=config.i18n.isEmpty
}}}}msg=YAHOO.lang.substitute(msg,counts);
if(!this.error){this.error=this.element.validationerror||new LI.GuidedEdit.FormError(this.id,msg)
}else{if(!this.error.visible){this.error.show(msg)
}else{this.error.setMessage(msg)
}}},setConfig:function(config){this.config=merge(this.config,config||{})
}})
}();

/* js/apps/ProfileProgressMeter.js */

LI.define("ProfileProgressMeter");
LI.ProfileProgressMeter=(function(){var f,a,b,h,d,e,g=false;
function i(){a=f.find(".task-header");
h=f.find(".base-bar");
d=f.find(".primary-bar");
e=f.find(".secondary-bar");
g=true
}function c(m){f=$("#profile-progress-meter");
if(!m||!f.length){return
}if(!g){i()
}var j=m.percentComplete||0,n=m.taskTitle||"",l=m.taskValue||0,k=f.find(".task-title");
d.animate({width:h.width()*(j/100)},function(){f.find(".text-representation .int").html(j.toString());
e.animate({width:d.width()+(h.width()*(l/100))},function(){if(n){if(!k.length){a.hide()
}a.html('<h3 class="task-title">'+n+"</h3>");
a.slideDown("slow")
}else{if(k.length){a.slideUp("slow",function(){k.remove()
})
}}})
})
}return{update:c}
}());

/* js/ajax/connection_chooser_service.js */

window.connChooser=function(){var _threshold=500;
var _targetIds="";
var _targetIdsInput=null;
var _targetText=null;
var _targetTextNode=null;
var _targetNames="";
var _targetNamesInput=null;
var _selectionLimit=50;
var _this=null;
var _chooserId="connChooser";
var _isInitialized=false;
var _connectionsCache={};
var _countRemaining=_selectionLimit;
var _countTotal=0;
var _countShowing=0;
var _countShowingSelected=0;
var _classHilite="hilite";
var _idSeparator=" ";
var _nameSeparator=", ";
var _lastInitialDontCare="DONT_CARE";
var _regionIdDontCare="0";
var _industryIdDontCare=-1;
var _serviceCallDelay=1;
var _timeout=300000;
var _cbStart=null;
var _cbFinish=null;
var _htmlBucketHeader=['<div class="ltrbox" id="ltr_{idSuffix}">'+'<h3><a name="{initial}" id="{initial}">{initial}</a></h3>',"</div>"].join("");
var _checkboxPrefix="connectionChooser_";
var _htmlConnectionEntry=['<div class="cnx {hilite}" id="cnx_{memberID}">','<div class="chk">','<input id="',_checkboxPrefix,'{memberID}" value="{memberID}" name="connectionChooser" type="checkbox" onclick="_toggle(this);">',"</div>",'<div class="guts">','<h4 firstname="{firstName}" lastname="{lastName}" id="connectionName_{memberID}">','<label for="',_checkboxPrefix,'{memberID}">{lastName}, {firstName}</label>',"</h4>","<p>{headline}</p>","</div>","</div>"].join("");
function _successHandler(myConnectionsDirectory){_isInitialized=true;
LI.hide("global-error");
LI.hide("processing");
_countTotal=myConnectionsDirectory.totalCount;
_updateConnectionsRegions(myConnectionsDirectory.myConnectionsRegions);
_updateConnectionsIndustries(myConnectionsDirectory.myConnectionsIndustries);
_updateAlphalist(myConnectionsDirectory.activeInitials,myConnectionsDirectory.lastInitial);
_updateNamelist(myConnectionsDirectory.myConnections);
_updateShowingHeader();
_updateCheckAllTogglers()
}function _errorHandler(message,ex){_isInitialized=false;
var className=(ex&&ex.className?ex.className:(ex?ex:""));
LI.show("global-error");
LI.hide("processing")
}function _updateConnectionsRegions(myConnectionsRegions){if(myConnectionsRegions==null){return
}var locSelect=YDom.get("loc");
var selOption=locSelect.options[0];
locSelect.innerHTML="";
locSelect.appendChild(selOption);
for(var i=0;
i<myConnectionsRegions.length;
i++){var opt=document.createElement("option");
opt.value=myConnectionsRegions[i].value;
opt.appendChild(document.createTextNode(LI.htmlUnencode(myConnectionsRegions[i].label)));
locSelect.appendChild(opt)
}}function _updateConnectionsIndustries(myConnectionsIndustries){if(myConnectionsIndustries==null){return
}var indSelect=YDom.get("ind");
var selOption=indSelect.options[0];
indSelect.innerHTML="";
indSelect.appendChild(selOption);
for(var i=0;
i<myConnectionsIndustries.length;
i++){var opt=document.createElement("option");
opt.value=myConnectionsIndustries[i].value;
opt.appendChild(document.createTextNode(LI.htmlUnencode(myConnectionsIndustries[i].label)));
indSelect.appendChild(opt)
}}function _encodeLetterId(letter){if(letter=="#"){return"OTHER"
}return letter.replace(/(.)/g,function(c){var code=c.charCodeAt(0);
if(code<127){return c
}return""+code
})
}function _unencodeLetter(encodedLetter){return encodedLetter.replace(/(&#x[0-9a-f]{2,4};)/g,function(s){var code=s.substring(3,s.length-1);
return String.fromCharCode(eval("0x"+code))
})
}function _updateAlphalist(activeInitials,initial){var activeInitialsMap={};
for(var i=0;
i<activeInitials.length;
i++){activeInitialsMap[_unencodeLetter(activeInitials[i])]=true
}var ul=YDom.get("alphalist-ul");
var lis=YDom.getElementsBy(function(){return true
},"li",ul);
for(var i=0;
i<lis.length;
i++){var li=lis[i];
var letter=null;
var entry=li.firstChild;
if(entry.firstChild!=null&&entry.firstChild.nodeType==3){letter=_unencodeLetter(entry.firstChild.nodeValue)
}else{continue
}li.innerHTML="";
if(activeInitialsMap[letter]){entry=document.createElement("a");
if(initial==null){entry.id=_encodeLetterId(letter);
entry.href="#"+entry.id;
entry.onclick=function(){var list=YDom.get("yourcnx-list");
var el="ltr_"+this.id;
list.scrollTop=YDom.get(el).offsetTop-list.offsetTop;
return false
}
}else{if(_unencodeLetter(initial)==letter){entry.href="javascript:void(0);";
entry.onclick="return false;";
YDom.addClass(entry,"chosen")
}else{entry.href="javascript:connChooser.fetch('"+letter+"')";
YDom.removeClass(entry,"chosen")
}}}else{entry=document.createElement("span");
entry.className="nolink"
}entry.appendChild(document.createTextNode(letter));
li.appendChild(entry)
}}function _isEmpty(o){if(YAHOO.lang.isUndefined(o)){return true
}for(var k in o){return false
}return true
}function _updateNamelist(myConnectionsMap){var picker=YDom.get("yourcnx-list");
picker.innerHTML="";
_countShowing=0;
_countShowingSelected=0;
if(_isEmpty(myConnectionsMap)){return
}function createContainer(initial){var headerInfo={};
headerInfo.initial=initial;
headerInfo.idSuffix=_encodeLetterId(initial);
return LI.domify(YAHOO.lang.substitute(_htmlBucketHeader,headerInfo))
}var container;
for(var letter in myConnectionsMap){container=createContainer(letter);
picker.appendChild(container);
var connections=myConnectionsMap[letter];
for(var i=0;
i<connections.length;
i++){_countShowing++;
var connection=connections[i];
var isSelected=_isConnectionInCache(connection.memberId);
if(isSelected){_countShowingSelected++
}var connectionInfo={};
connectionInfo.memberID=connection.memberId;
connectionInfo.hilite=(isSelected?" "+_classHilite:"");
connectionInfo.firstName=connection.firstName;
connectionInfo.lastName=connection.lastName;
connectionInfo.headline=connection.headline;
container.appendChild(LI.domify(YAHOO.lang.substitute(_htmlConnectionEntry,connectionInfo)));
var chkbox=YDom.get(_checkboxPrefix+connection.memberId);
chkbox.onclick=function(){_toggle(this)
};
chkbox.checked=isSelected
}}_updateAllSelectedCheckbox()
}function _updateCheckAllTogglers(){var checkAll=YDom.get("checkAll");
if(_countShowing==0||_countShowing-_countShowingSelected>_countRemaining){checkAll.style.color="#999";
checkAll.style.textDecoration="none";
var cb=YDom.get("allCheckedCheckbox");
cb.disabled=true;
cb.checked=false
}else{checkAll.style.color="";
checkAll.style.textDecoration="";
YDom.get("allCheckedCheckbox").disabled=false
}}function _updateShowingHeader(){var cntShowing=YDom.get("countShowing");
var oldNode=cntShowing.firstChild;
var newNode=document.createTextNode(""+_countShowing);
oldNode.parentNode.replaceChild(newNode,oldNode);
var cntTotal=YDom.get("countTotal");
oldNode=cntTotal.firstChild;
newNode=document.createTextNode(""+_countTotal);
oldNode.parentNode.replaceChild(newNode,oldNode)
}function _isConnectionInCache(idx){return !YAHOO.lang.isUndefined(_connectionsCache["_"+idx])
}function _addToConnectionCache(idx,fName,lName){_connectionsCache["_"+idx]={memberId:idx,firstName:fName,lastName:lName}
}function _removeFromConnectionCache(idx){var c=_connectionsCache["_"+idx];
delete _connectionsCache["_"+idx]
}function _checkAll(){if(_countShowing-_countShowingSelected>_countRemaining){return false
}var inputs=YDom.getElementsBy(function(e){return(e.type=="checkbox")
},"input",YDom.get("yourcnx-list"));
for(var i=0;
i<inputs.length;
i++){var chkbox=inputs[i];
if(chkbox.checked==false){chkbox.checked=true;
_toggle(chkbox)
}}return false
}function _clearAll(){var inputs=YDom.getElementsBy(function(e){return(e.type=="checkbox")
},"input",YDom.get("yourcnx-list"));
for(var i=0;
i<inputs.length;
i++){var chkbox=inputs[i];
if(chkbox.checked){chkbox.checked=false;
_toggle(chkbox)
}}YDom.get("allCheckedCheckbox").checked=false;
_countShowingSelected=0;
return false
}function _toggle(cb){if(cb.checked&&_countRemaining==0){cb.checked=false;
return
}var idx=cb.value;
if(cb.checked){YDom.addClass(YDom.get("cnx_"+idx),_classHilite);
_addChosenById(idx)
}else{YDom.removeClass(YDom.get("cnx_"+idx),_classHilite);
_clearChosen(idx,true)
}}function _addChosenById(idx){var connName=YDom.get("connectionName_"+idx);
_addChosen(idx,connName.getAttribute("firstName"),connName.getAttribute("lastName"))
}function _addChosen(idx,firstName,lastName){if(_isConnectionInCache(idx)){return
}_addToConnectionCache(idx,firstName,lastName);
_countRemaining--;
_countShowingSelected++;
var link=document.createElement("a");
link.href="javascript:void(0);";
link.onclick=function(){_removeSelected(idx)
};
link.appendChild(document.createTextNode(LI.htmlUnencode(firstName+" "+lastName)));
var entry=document.createElement("li");
entry.id="cnxSelected_"+idx;
entry.appendChild(link);
var selectedList=YDom.get("selected-list-ul");
selectedList.appendChild(entry);
_updateRemainingCounter();
_updateAllSelectedCheckbox();
_updateCheckAllTogglers()
}function _clearChosen(idx,isShowing){if(_isConnectionInCache(idx)==false){return
}_removeFromConnectionCache(idx);
_countRemaining++;
if(YAHOO.lang.isUndefined(isShowing)){_countShowingSelected--
}var listEntry=YDom.get("cnxSelected_"+idx);
listEntry.parentNode.removeChild(listEntry);
_updateRemainingCounter();
_updateAllSelectedCheckbox();
_updateCheckAllTogglers()
}function _removeSelected(idx){var chk=YDom.get("connectionChooser_"+idx);
if(YAHOO.lang.isUndefined(chk)){chk.checked=false;
_toggle(chk)
}else{_clearChosen(idx)
}}function _removeAllSelected(){var links=YDom.getElementsBy(function(){return true
},"a",YDom.get("selected-list"));
for(var i=0;
i<links.length;
i++){links[i].onclick()
}return false
}function _updateRemainingCounter(){var cnt=YDom.get("remainCounter").firstChild;
var newCnt=document.createTextNode(_countRemaining);
cnt.parentNode.replaceChild(newCnt,cnt);
if(_selectionLimit==_countRemaining){LI.show("toAddRecipient")
}else{LI.hide("toAddRecipient")
}}function _updateAllSelectedCheckbox(){YDom.get("allCheckedCheckbox").checked=(_countShowingSelected<_countShowing?false:true)
}function _toggleAllSelectedCheckbox(){if(YDom.get("allCheckedCheckbox").checked){_checkAll()
}else{_clearAll()
}}function _updateMainPage(updateJSONInput){var names="";
var ids="";
for(var idx in _connectionsCache){if(!_connectionsCache.hasOwnProperty(idx)){continue
}var member=_connectionsCache[idx];
names+=(names==""?"":_nameSeparator)+member.firstName+" "+member.lastName;
ids+=(ids==""?"":_idSeparator)+member.memberId
}if(_targetTextNode!=null){_targetTextNode.innerHTML="";
_targetTextNode.appendChild(document.createTextNode(LI.htmlUnencode(names)))
}if(_targetText!=null){if(names==""){LI.hide(_targetText)
}else{LI.show(_targetText)
}}_targetIdsInput.value=ids;
if(updateJSONInput){var jsonString=YAHOO.lang.JSON.stringify(_connectionsCache);
_targetNamesInput.value=(jsonString)?jsonString:{}
}}function _updateAndHide(){_updateMainPage(true);
_isInitialized=false;
LI.Dialog().close();
if(_cbFinish){_cbFinish(_connectionsCache)
}return false
}function _cancel(){_isInitialized=false;
return false
}function _resetFilter(){var loc=YDom.get("loc");
var ind=YDom.get("ind");
if(loc.selectedIndex==0&&ind.selectedIndex==0){return
}loc.selectedIndex=0;
ind.selectedIndex=0;
_fetch()
}function _fetch(){_fetchByInitial(null)
}function _fetchByInitial(intl){if(intl==null){intl=_lastInitialDontCare
}var loc=YDom.get("loc");
var regId=loc.options[loc.selectedIndex].value;
var ind=YDom.get("ind");
var indId=ind.options[ind.selectedIndex].value;
_showBusyIcon();
var paramsSvc={regionId:regId,industryId:indId,initial:intl,threshold:_threshold,inclMeta:false};
var paramsDwr={async:true,callback:_successHandler,errorHandler:_errorHandler,timeout:_timeout};
window.setTimeout(_callService(paramsSvc,paramsDwr),_serviceCallDelay)
}function _updateSelectedConnectionsList(){YDom.get("selected-list-ul").innerHTML="";
if(_targetNamesInput&&_targetNamesInput.value==""){return
}var cache=_targetNamesInput.value||"{}";
var connectionsCache=YAHOO.lang.JSON.parse(cache);
for(var i in connectionsCache){if(!connectionsCache.hasOwnProperty(i)){continue
}var conn=connectionsCache[i];
_addChosen(conn.memberId,conn.firstName,conn.lastName)
}}function _setSelectedConnectionsList(ids){_connectionsCache=ids
}function _showBusyIcon(){YDom.get("yourcnx-list").innerHTML="";
_updateNamelist();
_updateAlphalist([],null);
_updateShowingHeader();
_updateCheckAllTogglers();
LI.show("processing")
}function _callService(paramsSvc,paramsDwr){var pSvc=paramsSvc;
var pDwr=paramsDwr;
return(function(){ConnectionChooserService.getMyConnections(pSvc.regionId,pSvc.industryId,pSvc.initial,pSvc.threshold,pSvc.inclMeta,pDwr)
})
}return{init:function(){YEvent.on("loc","change",_fetch);
YEvent.on("ind","change",_fetch);
YEvent.on("checkAll","click",_checkAll);
YEvent.on("clearAll","click",_clearAll);
YEvent.on("allCheckedCheckbox","click",_toggleAllSelectedCheckbox);
YEvent.on("removeAllSelected","click",_removeAllSelected);
YEvent.on("updateAndHide","click",_updateAndHide);
YEvent.on("cancel","click",_cancel);
_this=window[_chooserId]
},reinit:function(){_connectionsCache={};
_countRemaining=_selectionLimit;
_countTotal=0;
_countShowing=0;
_countShowingSelected=0;
_targetIdsInput=YDom.get(_targetIds);
if(_targetText!=null){_targetTextNode=YDom.get(_targetText)
}_targetNamesInput=YDom.get(_targetNames);
_updateSelectedConnectionsList();
_updateRemainingCounter();
_updateMainPage(false)
},setSelected:function(ids){_setSelectedConnectionsList(ids);
_updateMainPage(true)
},setThreshold:function(t){_threshold=t
},setSelectionLimit:function(m){if(_selectionLimit==m){return
}_isInitialized=false;
_selectionLimit=m;
_countRemaining=m
},setTargetText:function(t){if(_targetText==t){return
}_isInitialized=false;
_targetText=t
},setTargetIds:function(t){if(_targetIds==t){return
}_isInitialized=false;
_targetIds=t
},setTargetNames:function(t){if(_targetNames==t){return
}_isInitialized=false;
_targetNames=t
},setStartCallback:function(cbStart){_cbStart=cbStart
},setFinishCallback:function(cbFinish){_cbFinish=cbFinish
},toggle:function(){if(!_isInitialized){if(_cbStart){_cbStart()
}_this.reinit();
if(!_targetIds){alert("ConnectionChooser: targetIds has not been specified!");
return
}if(!_targetNames){alert("ConnectionChooser: targetNames has not been specified!");
return
}_showBusyIcon();
var paramsSvc={regionId:_regionIdDontCare,industryId:_industryIdDontCare,initial:_lastInitialDontCare,threshold:_threshold,inclMeta:true};
var paramsDwr={async:true,callback:_successHandler,errorHandler:_errorHandler,timeout:_timeout};
window.setTimeout(_callService(paramsSvc,paramsDwr),_serviceCallDelay)
}return false
},fetch:function(initial){_fetchByInitial(initial)
},registerforPageUpdate:function(tIds,tText,tNames){var targetIds=tIds;
var targetText=tText;
var targetNames=tNames;
YEvent.on(window,"load",function(){var hidden=YDom.get(targetNames);
var names=(hidden&&hidden.value)?hidden.value:"{}";
if(names||tText==null){_connectionsCache=YAHOO.lang.JSON.parse(names);
_targetIds=targetIds;
_targetText=targetText;
_targetNames=targetNames;
_targetIdsInput=YDom.get(_targetIds);
_targetNamesInput=YDom.get(_targetNames);
if(_targetText!=null){_targetTextNode=YDom.get(_targetText)
}_updateMainPage(false)
}})
},firePageUpdate:function(tIds,tText,tNames){var targetIds=tIds;
var targetText=tText;
var targetNames=tNames;
var node=YDom.get(targetNames);
var names=(node&&node.value)?node.value:"{}";
if(names||tText==null){_connectionsCache=YAHOO.lang.JSON.parse(names);
_targetIds=targetIds;
_targetText=targetText;
_targetNames=targetNames;
_targetIdsInput=YDom.get(_targetIds);
_targetNamesInput=YDom.get(_targetNames);
if(_targetText!=null){_targetTextNode=YDom.get(_targetText)
}_updateMainPage(false)
}}}
}();
YEvent.on(window,"load",connChooser.init);

/* js/apps/ProfileMembersChooserInput.js */

LI.define("ProfileMembersChooserInput");
LI.ProfileMembersChooserInput=function(b,z){z=z||{};
YAHOO.lang.augmentObject(z,{typeaheadUrl:null,targetIdsHolderId:null,maxReachedMsgId:null,addMoreMsgIdPrefix:null,fieldIdPrefix:null,fieldNamePrefix:null,itemID:null,readOnly:false,focusOnInit:false});
var h=window.YDom,v=window.YEvent,i=window.connChooser,u=b;
_typeaheadUrl=z.typeaheadUrl,_schema=["result","headLine","subLine","id","first","last"],_dataSource=null,_autoComplete=null,_spacer=null,_unicodeCompSize=2,_clsContact="ccCon",_clsContactHL="ccConHL",_clsCloseButton="ccCloseBtn",_clsEntry="ccEntry",_idInputField="ccInput",_idContainer="ccContainer",_idInputHolder="ccInputHolder",_idAutoComplete="ccAutoComplete",_idAutoSpacer="ccAutoCompleteSpacer",_idRemainingCount="ccRemainingCount",_idClearer="ccClearer",_idCounter="ccCounter",_idHiddenInputField="ccHiddenInput",_inputField=null,_autoCompleteField=null,_inputHolder=null,_focusOnInit=z.focusOnInit,_focusedItem=null,_hiddenInput=null,_itemID=z.itemID,_idSeparator=" ",_idMaxReachedMsg=z.maxReachedMsgId,_idAddMoreMsgIdPrefix=z.addMoreMsgIdPrefix,_idTargetIdsHolder=null,_idFieldIdPrefix=z.fieldIdPrefix,_idFieldNamePrefix=z.fieldNamePrefix,_selectionLimit=10,_remainingCount=10,_minInputSize=45,_maxInputSize=200,_maxDisplaySize=60,_readOnly=z.readOnly,_onMemberCountChange=null;
function m(){_inputField.value="";
if(window.ActiveXObject&&navigator.platform.indexOf("Win")==-1){_inputField.style.visibility="hidden"
}}function g(){if(window.ActiveXObject&&navigator.platform.indexOf("Win")!=-1){_inputField.style.width="auto"
}else{_inputField.style.width="auto";
_inputField.style.visibility="visible"
}}function k(H){var C=H,F=_maxInputSize,G,E,J=0,D,I=H.length;
G={ellipEntity:"&hellip;"};
if(!C){return C
}E=document.createElement("span");
h.setStyle(E,"visibility","hidden");
h.setStyle(E,"padding","0px");
document.body.appendChild(E);
E.innerHTML=C;
if(E.offsetWidth>F){while(true){D=J+Math.ceil((I-J)/2);
if(D==I||D==J){break
}E.innerHTML=H.substring(0,D)+G.ellipEntity;
if(E.offsetWidth>F){I=D
}else{J=D
}}C=H.substring(0,J).replace("<","&lt;").replace(">","&gt;").replace(/(\s.)?\s*$/,"")+G.ellipEntity
}document.body.removeChild(E);
return C
}function n(){var F=0,E=h.getChildren(_autoCompleteField),C=E.length,D,G;
for(D=C-1;
D>=0;
D--){G=E[D];
if(G.className==_clsContact||G.className==_clsContactHL){F++
}}return F
}function A(C){if(_focusedItem!=null){_focusedItem.className=_clsContact;
_focusedItem=null
}}function y(C){if(_focusedItem!=null){_focusedItem.className=_clsContact
}C.className=_clsContactHL;
_focusedItem=C;
_hiddenInput.focus();
m()
}function r(E,C){var D=o(E,C);
_autoCompleteField.insertBefore(D,_inputHolder);
_onMemberCountChange.fire()
}function c(C){var C=f(_inputField.value);
if(C!=""){r("-1",C);
m();
return true
}else{_inputField.value="";
return false
}}function B(){var D=null,C;
if(_remainingCount==0){D=YAHOO.lang.substitute(LI.i18n.get(_idMaxReachedMsg),{0:_selectionLimit})
}else{if(_remainingCount>=1&&_remainingCount<=10&&_idAddMoreMsgIdPrefix){D=YAHOO.lang.substitute(LI.i18n.get(_idAddMoreMsgIdPrefix+(_remainingCount+"")),{0:_remainingCount})
}}if(_idMaxReachedMsg){C=h.get(_idCounter);
if(C){C.innerHTML=D
}}}function e(D){var C=n();
_remainingCount=_selectionLimit-C;
B()
}function s(){return(_remainingCount==0)?false:true
}function o(C,K){var E=document.createElement("div"),F=LI.htmlEncode(K),D,H=n(),I=[],J,G;
E.id="mem-"+H;
E.className=_clsContact;
I.push('<p><span class="'+_clsEntry+'" id="'+H+'-name" data-li-name="'+F+'">');
I.push(k(F));
J=_idFieldIdPrefix+"-"+H;
G=_idFieldNamePrefix+"_"+H;
I.push('<input type="hidden" id="'+J+'_id" value="'+C+'" name="'+G+'_id"/>');
I.push('<input type="hidden" id="'+J+'_name" value="'+F+'" name="'+G+'_name"/>');
I.push('<input type="hidden" id="'+J+'_contributorId" value="" name="'+G+'_contributorId"/>');
I.push("</span>");
if(!_readOnly){I.push('<span class="'+_clsCloseButton+'" id="'+H+'-close"> X</span>')
}I.push("</p>");
E.innerHTML=I.join("");
if(!_readOnly){v.on(E,"click",function(Q){var P=v.getTarget(Q),N,O,M,L;
if(!h.hasClass(P,"ccCloseBtn")){P=this
}if(P.className==_clsCloseButton){N=h.getChildren(_autoCompleteField);
L=N.length;
O=null;
for(M=0;
M<L;
M++){if(N[M].id==this.id){O=N[M];
break
}}v.stopEvent(Q);
O.parentNode.removeChild(O);
_onMemberCountChange.fire()
}else{if(P.className==_clsContact||P.className==_clsContactHL){y(P)
}else{y(P.parentNode)
}}})
}return E
}function d(F){var E=h.getChildren(_autoCompleteField),C=E.length,D;
for(D=0;
D<C;
D++){if(E[D].id==F){return true
}}return false
}function l(J,I){var D,H,E,G,C;
if(!s()){_inputField.value="";
return
}D=I[0];
H=I[1];
E=I[2];
_inputField.value="";
G=h.getChildren(_autoCompleteField);
C=G.length;
for(var F=0;
F<C;
F++){if(G[F].id==E[2]){_inputField.focus();
return
}}r(E[2],E[0]);
_inputField.focus();
g()
}function p(C){_hiddenInput=h.get(_idHiddenInputField);
if(!_hiddenInput){_hiddenInput=document.createElement("input");
_hiddenInput.id=_idHiddenInputField;
_hiddenInput.style.position="absolute";
_hiddenInput.style.top="-200px";
_hiddenInput.style.left="-200px";
document.body.appendChild(_hiddenInput)
}v.on(_hiddenInput,"blur",function(D){A()
})
}function j(F,M){var I="",G,E,H,J,O,K,L,C,D,N;
if(d(F[2])){I="*"
}G=F[0].replace(/</g,"&lt;").replace(/>/g,"&gt;");
E=F[1].replace(/</g,"&lt;").replace(/>/g,"&gt;");
H=[];
H.push(0);
for(J=0;
J<G.length;
J++){if(G.charAt(J)==" "){H.push(J+1)
}}O="";
for(J=0;
J<H.length;
J++){K=H[J];
L=G.substr(K);
if(L.toLowerCase().indexOf(M.toLowerCase())==0){O="<span>"+G.substr(0,K)+"</span>";
C=L.substr(0,M.length);
D=L.substr(M.length);
O+="<strong>"+C+"</strong><span>"+D+"</span>"
}}if(O==""){O="<h4>"+G+"</h4>"
}N=["<h4>",O,I,"</h4><p>",E,"</p>"];
return(N.join(""))
}function a(H){var C=_inputField.value.length*20,F,D,G,E;
if(C<_minInputSize){C=_minInputSize
}else{if(C<_maxInputSize){h.setStyle(_inputField,"width",C+"px")
}else{h.setStyle(_inputField,"width",_maxInputSize+"px")
}}F=H.keyCode;
if(F!=8&&_remainingCount==0){v.stopEvent(H);
return
}if((F==8||F==37)&&_inputField.value==""){D=h.getPreviousSiblingBy(_inputHolder,function(I){return I.tagName.toLowerCase()=="div"
});
if(D.className!=_clsContact){v.stopEvent(H);
return
}if(F==8){v.stopEvent(H)
}D.className=_clsContactHL;
_focusedItem=D;
_hiddenInput.focus();
m()
}else{if((F==39||F==46)&&_inputField.value==""){G=h.getNextSiblingBy(_inputHolder,function(I){return I.tagName.toLowerCase()=="div"
});
if(!G||G.id==_idClearer){return
}G.className=_clsContactHL;
_focusedItem=_inputHolder.nextSibling;
_hiddenInput.focus();
m()
}else{if(F==9||F==59||F==186||F==188){v.stopEvent(H);
if(!s()){_inputField.value="";
return
}if(c(_inputField.value)){g();
_inputField.focus()
}}else{if(F==13&&_inputField.value!=""){if(!_autoComplete.isContainerOpen()){if(c(_inputField.value)){v.stopEvent(H)
}}}}}}}function q(D){if(!s()){_inputField.value="";
return
}var C=_inputField.value;
var E=Math.max(C.indexOf(","),C.indexOf(";"));
if(E>-1&&C.length>0){c(_inputField.value)
}}function f(C){return(C!=null)?C.replace(/[,|;]/g,"").replace(/^\s+|\s+$/g,""):""
}function x(D){var C=D.keyCode;
if((C==8||C==46)&&_focusedItem!=null){h.insertAfter(_inputHolder,_focusedItem);
_focusedItem.parentNode.removeChild(_focusedItem);
_focusedItem=null;
_onMemberCountChange.fire();
g();
_inputField.focus()
}else{if(C==39&&_focusedItem!=null){_focusedItem.className=_clsContact;
h.insertAfter(_inputHolder,_focusedItem);
_focusedItem=null;
g();
_inputField.focus()
}else{if(C==37&&_focusedItem!=null){_focusedItem.className=_clsContact;
h.insertBefore(_inputHolder,_focusedItem);
_focusedItem=null;
g();
_inputField.focus()
}}}}function t(E){var D=v.getTarget(E),C;
if(D.id==_idAutoComplete){g();
C=_autoCompleteField.lastChild;
if(C.nodeType!=1){C=C.previousSibling
}_autoCompleteField.appendChild(_inputHolder,C);
_inputField.focus();
if(_focusedItem){_focusedItem.className=_clsContact;
_focusedItem=null
}}}function w(C){if(!_autoComplete.isContainerOpen()&&_inputField.value!=""){c(_inputField.value)
}}this.init=function(){if(typeof u=="string"){u=Y$("#"+u,document,true)
}_inputField=Y$("#"+_idInputField,u,true);
if(!_inputField){return
}_autoCompleteField=Y$("#"+_idAutoComplete,u,true);
_inputHolder=Y$("#"+_idInputHolder,u,true);
_spacer=Y$("#"+_idAutoSpacer,u,true);
if(_typeaheadUrl&&!_readOnly){p(_autoCompleteField);
_dataSource=new YAHOO.widget.DS_XHR(_typeaheadUrl,_schema);
_dataSource.scriptQueryParam="q";
_dataSource.scriptQueryAppend="startswith&itemID="+_itemID;
_dataSource.queryMatchCase=false;
_dataSource.responseType=YAHOO.widget.DS_XHR.TYPE_XML;
_dataSource.maxCacheEntries=60;
_dataSource.queryMatchSubset=false;
var C=Y$("#"+_idContainer,u,true);
_autoComplete=new YAHOO.widget.AutoComplete(_inputField,C,_dataSource);
_autoComplete.itemSelectEvent.subscribe(l);
_autoComplete.useIFrame=(YAHOO.env.ua.ie&&YAHOO.env.ua.ie<7);
_autoComplete.formatResult=j;
_autoComplete.minQueryLength=1;
_autoComplete.queryDelay=0;
_autoComplete.animVert=false;
_autoComplete.autoHighlight=false;
_onMemberCountChange=new YAHOO.util.CustomEvent(_idFieldIdPrefix+"-count-change");
_onMemberCountChange.subscribe(e);
v.on(_autoCompleteField,"click",t);
v.on(_inputField,"blur",w);
v.on(_hiddenInput,"keydown",x);
v.on(_inputField,"keydown",a);
v.on(_inputField,"keyup",q);
if(_focusOnInit){_inputField.blur();
_inputField.focus()
}}else{LI.hide(_inputHolder)
}i.setTargetIds("target_ids");
n();
B()
}
};

/* js/util/JellyBeanEditor.js */

LI.define("JellyBeanEditor");
LI.JellyBeanEditor=function(d,C){var r="jellybean-editor";
var e="jellybean-container-item";
var q=this;
var s=[];
var k=null;
var E=null;
var c=null;
var t=null;
var j=false;
var x=null;
var g=false;
var B=0;
var A=YAHOO.lang.trim;
var n={beanContainers:"ol > li",fieldNameTemplate:false,fieldClassName:"field",removeClassName:"remove",valueDelimiter:",",typeaheadHiddenFieldTemplate:null,dragAndDrop:false,maxInputFieldSize:0,autoBeanFieldCreation:true,typeahead:null,forceSelectionAndRevert:(C.typeahead&&C.typeahead.forceSelectionAndRevert)?C.typeahead.forceSelectionAndRevert:false};
YAHOO.lang.augmentObject(C,n);
this.jellyBeanMarkup=function(G){return["<span class='value'>",LI.htmlEncode(G),"</span>","<span class='remove'>X</span>"].join("")
};
this.setContainerClass=function(G){e=G
};
this.getContainerClass=function(){return e
};
this.getAllJellyBeans=function(){return Y$(C.beanContainers,d)
};
this.removeAllJellyBeans=function(){var H=this.getAllJellyBeans(),G=H.length,I;
for(I=0;
I<G;
I++){if(YDom.hasClass(H[I],"show-bean")){z(H[I])
}}};
this.removeBean=z;
this.getBeanValue=function(G){if(G&&G._field){return G._field.value
}return null
};
this.getBeanTypeahead=function(G){if(G&&G._typeahead){return G._typeahead
}return null
};
this.getBeanTypeaheadHiddenField=function(G){if(G&&G._typeaheadField){return G._typeaheadField
}return null
};
this.addNewJellyBean=function(J){var K,H,G,I,J=J||"";
if(J==""&&A(k._field.value)==""){return
}I=E.cloneNode(true);
H=Y$(".field label",I,true);
K=Y$(".field input",I,true);
if(!K){return
}I._index=B++;
y(I,I._index);
K.value=J;
if(J==""){k.parentNode.appendChild(I);
k=I;
s.push(I)
}else{k.parentNode.insertBefore(I,k);
s=q.getAllJellyBeans()
}F(I);
return I
};
this.onCreateJellyBean=new YAHOO.util.CustomEvent("createJellyBean");
this.onBeanEditingStart=new YAHOO.util.CustomEvent("beanEditingStart");
this.onBeanEditingEnd=new YAHOO.util.CustomEvent("onBeanEditingEnd");
this.onBeanRemoved=new YAHOO.util.CustomEvent("onBeanRemoved");
this.onBeanSelected=new YAHOO.util.CustomEvent("onBeanSelected");
this.onBeanUnselected=new YAHOO.util.CustomEvent("onBeanUnselected");
this.onBeansReordered=new YAHOO.util.CustomEvent("onBeansReordered");
this.onNoLastItemFocus=new YAHOO.util.CustomEvent("onNoLastItemFocus");
this.onBeanSetFieldName=new YAHOO.util.CustomEvent("onBeanSetFieldName");
function F(H){var I=Y$(".field input",H,true),G=Y$(".jellybean",H,true);
if(I.value==""&&!C.autoBeanFieldCreation){LI.hide(H)
}if(I&&G){YDom.addClass(H,e);
H._field=I;
H._bean=G;
if(C.typeahead){i(H)
}D(H);
if(C.dragAndDrop){w(H)
}p(H);
q.onCreateJellyBean.fire(H)
}p(H);
l()
}function D(G){var I=G._field;
var H=function(J){j=false;
a(G)
};
if(I){YEvent.on(I,"blur",H);
YEvent.on(I,"focus",function(J){j=true;
m(G)
});
YEvent.on(I,"keyup",function(K){var J=A(I.value);
if((C.valueDelimiter&&(K.charCode==C.valueDelimiter.charCodeAt(0)||J.indexOf(C.valueDelimiter)>0))||(K.keyCode==9&&!g&&G===k)||K.keyCode==13){if(J!=""&&(!C.valueDelimiter||J!=C.valueDelimiter)){YEvent.stopEvent(K);
YEvent.removeListener(I,"blur",H);
a(G);
j=false;
l();
YEvent.on(I,"blur",H)
}}if(G===k){q.addNewJellyBean()
}})
}YEvent.on(I,"keypress",function(J){if(J.keyCode==13){YEvent.stopEvent(J)
}})
}function y(I,H){var J=Y$(".field input",I,true),G=Y$(".field label",I,true);
if(C.fieldNameTemplate&&J){name=C.fieldNameTemplate.replace(/\$index\$/,H);
if(G){G.htmlFor=name
}J.id=name;
J.name=name
}if(C.typeaheadHiddenFieldTemplate&&I._typeaheadField){I._typeaheadField.name=C.typeaheadHiddenFieldTemplate.replace(/\$index\$/,H)
}q.onBeanSetFieldName.fire(I,H)
}function i(J){var K,H,G,I=YDom.getAncestorByTagName(J,"form");
if(C.typeaheadHiddenFieldTemplate&&I){H=C.typeaheadHiddenFieldTemplate.replace(/\$index\$/,J._index);
G=I.elements[H];
if(!G){G=document.createElement("input");
G.name=H;
G.type="hidden";
I.appendChild(G)
}YDom.generateId(G);
J._typeaheadField=G;
C.typeahead.hiddenField=G
}K=new LI.Typeahead(J._field,C.typeahead);
K.autocomplete.itemSelectEvent.subscribe(function(M,L){o(K,J)
});
if(C.forceSelectionAndRevert===true){K.autocomplete.unmatchedItemSelectEvent.subscribe(function(M,L){if(k!=J){o(K,J)
}})
}J._typeahead=K
}function o(H,G){H.autocomplete._bOverContainer=false;
a(G);
j=false;
l()
}function w(H){if(!YAHOO.util.DDProxy){throw"You need to include YUI dragdrop to get drag 'n drop functionality in the JellyBeanEditor control."
}var G=new h(H);
G.on("b4MouseDownEvent",function(J){var I=YEvent.getTarget(J);
if(I.nodeName.toLowerCase()=="input"){return false
}})
}function z(G){if(G===k){q.addNewJellyBean()
}if(G.parentNode){b(G);
G.parentNode.removeChild(G);
q.onBeanRemoved.fire(G)
}}function b(J){var K,H,G,I=YDom.getAncestorByTagName(J,"form");
if(C.typeaheadHiddenFieldTemplate&&I){H=C.typeaheadHiddenFieldTemplate.replace(/\$index\$/,J._index);
G=I.elements[H];
if(G){G.parentNode.removeChild(G)
}}}function m(G){var H=G._field;
if(c){}u();
if(A(H.value)!=""){YDom.addClass(G,"editing")
}YDom.replaceClass(G,"show-bean","show-field");
H.select();
c=G;
f(G);
q.onBeanEditingStart.fire(G)
}function f(G){if(A(G._field.value)!=""){t=G;
YDom.addClass(t,"selected");
q.onBeanSelected.fire(G)
}}function u(){if(t){YDom.removeClass(t,"selected");
q.onBeanUnselected.fire(t);
t=null
}}function a(K){var M=K._field,I,L,H;
q.onBeanEditingEnd.fire(K);
I=(C.valueDelimiter)?M.value.split(C.valueDelimiter):[M.value];
if(I.length>1){for(var J=0,G=I.length;
J<G;
J++){L=A(I[J]);
if(L!=""){H=q.addNewJellyBean(I[J])
}}if(H){z(K)
}}else{if(A(M.value)!=""){p(K)
}else{if(K!==k){z(K)
}}}c=null
}function p(H){var I=H._field,G=H._bean;
if(I&&A(I.value)!=""){I.size=(C.maxInputFieldSize>0&&I.value.length>C.maxInputFieldSize)?C.maxInputFieldSize:I.value.length;
G.innerHTML=q.jellyBeanMarkup(I.value);
YDom.replaceClass(H,"show-field","show-bean");
YDom.removeClass(H,"editing")
}}function l(){if(!C.autoBeanFieldCreation){if(!j){q.onNoLastItemFocus.fire()
}return
}x=setTimeout(function(){x=null;
if(!j&&k._field&&k._field){u();
try{k._field.focus()
}catch(G){}}},50)
}function v(){YDom.addClass(d,r);
YEvent.on(document,"click",function(L){var I=YEvent.getTarget(L),K,J;
if(!YDom.isAncestor(d,I)){if(c){a(c)
}if(I==d){j=false;
l()
}return
}K=YDom.getAncestorByClassName(I,e);
J=YDom.getAncestorByClassName(I,"jellybean");
if(K&&YDom.hasClass(I,C.removeClassName)){z(K)
}else{if(K){if(J){m(K)
}}else{if(k){l()
}}}});
YEvent.on(d,"keydown",function(I){if(I.keyCode==16){g=true
}});
YEvent.on(d,"keyup",function(I){if(I.keyCode==16){g=false
}});
s=q.getAllJellyBeans();
if(s.length>0){k=s[s.length-1];
E=k.cloneNode(true);
for(var H=0,G=s.length;
H<G;
H++){s[H]._index=H;
F(s[H])
}if(k._field&&A(k._field.value)!=""){q.addNewJellyBean()
}l()
}B=s.length;
if(C.dragAndDrop&&YAHOO.util.DDTarget&&YAHOO.util.DDProxy){new YAHOO.util.DDTarget((k)?k.parentNode:d)
}}var h=function(J,G,H){h.superclass.constructor.call(this,J,G,H);
var I=this.getDragEl();
YDom.setStyle(I,"opacity",0.67);
this.goingUp=false;
this.lastY=0
};
if(YAHOO.util.DDProxy){YAHOO.extend(h,YAHOO.util.DDProxy,{startDrag:function(H,J){var G=this.getDragEl();
var I=this.getEl();
YDom.setStyle(I,"visibility","hidden");
I=Y$(".jellybean",I,true);
if(I){G.innerHTML=I.innerHTML;
YDom.addClass(G,"jellybean-dragging")
}},endDrag:function(L){var G=this.getEl();
var M=this.getDragEl();
YDom.removeClass(G,"dd-placeholder");
s=q.getAllJellyBeans();
k=s[s.length-1];
for(var J=0,K=s.length;
J<K;
J++){var N=s[J];
N._index=J;
field=N._field;
y(N,J)
}q.onBeansReordered.fire();
YDom.setStyle(M,"visibility","");
var O=new YAHOO.util.Motion(M,{points:{to:YDom.getXY(G)}},0.2,YAHOO.util.Easing.easeOut);
var H=M.id;
var I=this.id;
O.onComplete.subscribe(function(){YDom.setStyle(H,"visibility","hidden");
YDom.setStyle(I,"visibility","")
});
O.animate()
},onDrag:function(G){var H=YEvent.getPageY(G);
if(H<this.lastY){this.goingUp=true
}else{if(H>this.lastY){this.goingUp=false
}}this.lastY=H
},onDragOver:function(K,L){var I=this.getEl();
var H=YDom.get(L);
YDom.addClass(I,"dd-placeholder");
if(H&&H.nodeName.toLowerCase()=="li"){var G=I.parentNode;
var J=H.parentNode;
if(A(I._field.value)==""){return
}if(this.goingUp){J.insertBefore(I,H)
}else{if(A(H._field.value)==""){J.insertBefore(I,H)
}else{J.insertBefore(I,H.nextSibling)
}}YAHOO.util.DragDropMgr.refreshCache()
}}})
}YEvent.onDOMReady(function(){v()
})
};

/* js/apps/ProfileSkillsEditor.js */

LI.define("ProfileSkillsEditor");
LI.ProfileSkillsEditor=function(a,u){u=u||{};
YAHOO.lang.augmentObject(u,{maxSkills:50,messages:null,saveBtnSel:"#btn-primary",skillsCounterSel:".skills-counter",addTaInputSel:"#edit-skills-add-ta",addTaBtnSel:"#edit-skills-add-btn",editorConfig:null});
var d=null;
var f=null;
var s=false;
var r=YAHOO.lang.trim;
var k=Y$(u.saveBtnSel,document,true);
var m=Y$(u.skillsCounterSel,document,true);
var p=Y$(u.addTaBtnSel,document,true);
var h=Y$(u.addTaInputSel,document,true);
function n(w){var v;
if(d){v=d.addNewJellyBean(w);
if(v){h.value="";
b(v);
t(q())
}}return v
}function e(v){v=v===false?false:true;
if(k){if(v){YDom.setAttribute(k,"disabled","disabled")
}else{if(!v&&!s){k.removeAttribute("disabled")
}}}}function l(v){v=v===false?false:true;
if(k){if(!v){YDom.setAttribute(k,"disabled","disabled")
}else{if(v&&!s){k.removeAttribute("disabled")
}}}}function i(v){if(r(v._field.value)!=""){j();
YDom.addClass(v,"show-callout");
f=v
}}function j(){if(f){YDom.removeClass(f,"show-callout")
}}function q(){var v=d.getAllJellyBeans(),x=0;
for(var w=v.length;
w--;
){if(d.getBeanValue(v[w])){x++
}}return x
}function t(w,y){var y=y===false?false:true;
var x=u.maxSkills-w;
var v="";
var z=false;
if(m){if(x==0){v=u.messages.maxReached
}else{if(x<0){v=YAHOO.lang.substitute(u.messages.exceededLimit,{0:Math.abs(x)});
z=true
}else{v=YAHOO.lang.substitute(u.messages.addMore,{0:x})
}}if(y){g(z)
}m.innerHTML=v
}}function g(v){s=v;
if(s){YDom.addClass(m,"error");
l(false)
}else{YDom.removeClass(m,"error");
l()
}}function c(z,A,x){var y=/\d+/;
A=typeof A=="string"?[A]:A;
for(var v=A.length;
v--;
){var w=z.getAttribute(A[v]);
if(w){z.setAttribute(A[v],w.replace(y,x))
}}}function b(x){var w=Y$(".skill-callout select",x);
for(var v=w.length;
v--;
){w[v].value=""
}}if(h){var o=LI.Controls.getControl(h,"Typeahead");
if(o){o.autocomplete.itemSelectEvent.subscribe(function(w,v){n(LI.htmlUnencode(v[2].displayName))
})
}YEvent.addListener(h,"keyup",function(w){if(w.keyCode==13){var v=r(h.value);
if(v!=""){n(v)
}}});
YEvent.addListener(p,"click",function(w){YEvent.preventDefault(w);
if(!YDom.hasClass(h,"hint")){var v=r(h.value);
if(v!=""){n(v)
}}})
}YEvent.on(document,"mousedown",function(w){var v=YEvent.getTarget(w);
if(!YDom.getAncestorByClassName(v,d.getContainerClass())){j()
}});
YEvent.on(a,"click",function(w){var v=YEvent.getTarget(w);
if(YDom.hasClass(v,"dismiss")){j();
h.focus()
}});
d=new LI.JellyBeanEditor(a,u.editorConfig);
d.onCreateJellyBean.subscribe(function(w,v){l()
});
d.onBeanSelected.subscribe(function(w,v){i(v[0])
});
d.onBeanUnselected.subscribe(function(w,v){j()
});
d.onBeanEditingEnd.subscribe(function(w,v){l();
t(q())
});
d.onBeanRemoved.subscribe(function(w,v){l();
t(q())
});
d.onBeansReordered.subscribe(function(w,v){l()
});
d.onNoLastItemFocus.subscribe(function(w,v){h.focus();
j()
});
d.onBeanSetFieldName.subscribe(function(z,w){var A=w[0];
var v=w[1];
if(A&&v!=undefined){var B=Y$(".skill-callout label",A);
var y=Y$(".skill-callout select",A);
for(var x=B.length;
x--;
){c(B[x],"for",v)
}for(var x=y.length;
x--;
){c(y[x],["id","name"],v)
}}});
YEvent.onDOMReady(function(){l(false);
t(q(),false)
});
this.addSkillJellyBean=n;
this.jellyBeanEditor=d
};

/* js/apps/TaskNote.js */

LI.define("TaskNote");
LI.TaskNote=function(b,c,a){this.elem=YDom.get(b);
this.list=Y$("ul",this.elem)[0];
this.benefit=Y$(".guided-result",this.elem)[0];
this.categories=[];
this.addCategories(c);
YDom.setStyle(this.benefit,"display","none");
YDom.setStyle(b,"display","block");
LI.TaskNote.instance=this
};
LI.TaskNote.update=function(a){if(a.responseText){a=a.responseText
}if(!LI.TaskNote.instance){LI.TaskNote.instance=new LI.TaskNote(Y$("#extra .post-it.curl")[0],a)
}LI.TaskNote.instance.checkCategoryStatus.apply(LI.TaskNote.instance,[a])
};
LI.TaskNote.prototype=YAHOO.lang.merge(LI.TaskNote.prototype,{config:{postItAction:{backgroundPosition:{from:0,to:750,unit:"px 50%"}},animDuration:6},addCategories:function(e){var b,c=e.categoryList,f=e.categoryStrings;
for(var d=0,a=c.length;
d<a;
d++){b=document.createElement("li");
b.innerHTML='<span class="guided-wrap"><span>'+f[d]+"</span></span>";
this.categories[d]={name:c[d],elem:b,text:f[d]};
this.categories[c[d]]=this.categories[d];
this.list.appendChild(b)
}},checkCategoryStatus:function(f){if(f.responseText){f=f.responseText
}var g=f.currentCategory||f.taskName,e;
var b=this,c=0;
if(g!=this.currentCategory){for(var d=0,a=this.categories.length;
d<a;
d++){e=this.categories[d];
if(e.name!=g){if(!YDom.hasClass(e.elem,"guided-complete")){YDom.removeClass(e.elem,"guided-active");
setTimeout((function(){var h=e.name;
return function(){b.stateCategory.apply(b,[h,"complete"])
}
})(),c);
c+=1000
}}else{if(f.benefitStatement){YDom.setStyle(this.benefit,"display","block");
this.benefit.innerHTML=f.benefitStatement
}setTimeout((function(){var h=e.name;
return function(){b.stateCategory.apply(b,[h,"active"])
}
})(),c);
break
}}if(g=="finished"||g=="share"){this.benefit.innerHTML=f.benefitStatement;
if(!LI.GuidedEdit.refactored){YEvent.on("continue-action-btn","click",this.reset,this,true)
}}}},reset:function(){while(this.list.childNodes[0]){this.list.removeChild(this.list.childNodes[0])
}YDom.setStyle(this.benefit,"display","none");
delete LI.TaskNote.instance;
if(!LI.GuidedEdit.refactored){new LI.Embed("_",{url:YDom.get("continue-action-btn").getAttribute("data-li-continueaction"),name:"",type:"mustache",defer:"false",dependent:"",handlertype:"init"});
YDom.get("finished_").innerHTML=""
}},animateElement:function(a){a=this.getCategory(a);
if(!a.animation){a.animation=new YUtil.Anim(Y$(".guided-wrap span",a.elem)[0],this.config.postItAction,this.config.animDuration,YUtil.Easing.easeOut)
}a.animation.animate()
},getCategory:function(a){return(typeof a=="object")?a:this.categories[a]
},getCategoryIndex:function(b){switch(typeof b){case"number":return b;
case"string":b=this.categories[b];
case"object":for(var c=0,a=this.categories.length;
c<a;
c++){if(b===this.categories[c]){return c
}}default:return false
}},stateCategory:function(b,a){b=this.getCategory(b);
if(!b){return false
}a=a||"active";
YDom.removeClass(b.elem,"guided-active");
switch(a){case"active":this.currentCategory=b.name;
YDom.addClass(b.elem,"guided-"+a);
this.animateElement(b);
break;
case"complete":YDom.addClass(b.elem,"guided-"+a);
this.animateElement(b);
break
}return this
}});

/* js/apps/SchoolTypeahead.js */

LI.define("SchoolTypeahead");
LI.SchoolTypeahead=function(d,f){f={noMatchValue:(f.noMatchValue===null)?"":0,schoolId:f.schoolId||null,dataURL:f.dataURL||"typeahead/school",changeLinkText:f.changeLinkText||null};
function m(){if(d.value.length>0&&f.changeLinkText){g.innerHTML=LI.htmlEncode(d.value);
YDom.addClass(c,"selected")
}}function j(n){YEvent.stopEvent(n);
d.value="";
g.innerHTML="";
YDom.removeClass(c,"selected");
i.value=f.noMatchValue;
d.focus()
}function l(){var p=[YDom.get(locationCodeID||""),YDom.get(provinceCodeID||"")];
for(var o=0,n=p.length;
o<n;
o++){var q=p[o];
if(q){q.value=""
}}}var i=YDom.get(f.schoolId);
if(!f.schoolId||!i||i.type!="hidden"){throw"The school ID hidden field is not present in the form. Check the 'schoolId' config property."
}var c=document.createElement("span");
d.parentNode.insertBefore(c,d);
c.appendChild(d);
var h=document.createElement("span");
var g=document.createElement("strong");
var k=document.createElement("span");
h.className="selected-school";
g.className="school-name";
k.className="change-school-cntl";
h.appendChild(g);
h.appendChild(k);
c.appendChild(h);
if(f.changeLinkText){k.innerHTML="[ <a href='#'>"+f.changeLinkText+"</a> ]";
YEvent.on(k,"click",j)
}if(d.defaultValue.length>0){m()
}var e=document.createElement("DIV");
e.id=d.id+"-typeahead-results-container";
e.className="typeahead-results-container";
document.body.appendChild(e);
var a=new YAHOO.widget.DS_XHR(f.dataURL,["resultList","displayName","headLine","subLine","id"]);
a.connXhrMode="ignoreStaleResponses";
a.responseType=YAHOO.widget.DS_XHR.TYPE_JSON;
var b=new YAHOO.widget.AutoComplete(d,e,a);
b.minQueryLength=1;
b.animHoriz=false;
b.animVert=false;
b.forceSelection=false;
b.allowBrowserAutocomplete=false;
b.autoHighlight=false;
b.maxResultsDisplayed=10;
b.useIFrame=true;
b.textboxFocusEvent.subscribe(function(){if(YAHOO.env.ua.gecko&&(YDom.hasClass(document.body,"ja")||YDom.hasClass(document.body,"ko"))){b.enableIntervalDetection()
}});
b.formatResult=function(u,s,n){var q=u[1];
var p=u[2];
var v=u[4];
var t;
var r;
if(v=="Y"){t='<h4 class="related">';
r='<div class="related">'
}else{t="<h4>";
r="<div>"
}var o=t+q+"</h4>";
if(u[1]!==null&&u[2]!==""){o+=r+p+"</div>"
}return o
};
b.doBeforeExpandContainer=function(n,o,s,r){var p=YDom.getRegion(n);
var q=[];
q[0]=p.left;
q[1]=p.bottom;
YDom.setXY(o,q);
return true
};
b.itemSelectEvent.subscribe(function(o,n){var p=YDom.get(d);
p.value=LI.htmlUnencode(p.value);
var q=n[2];
if(q&&q.length>=4){i.value=q[3]
}m();
l()
});
b.unmatchedItemSelectEvent.subscribe(function(o,n){i.value=f.noMatchValue;
l()
});
d._results=e;
d._autocomplete=b
};

/* js/apps/CompanyTypeahead.js */

LI.define("CompanyTypeahead");
LI.CompanyTypeahead=function(c,s){var h=0;
s={companyIdField:s.companyIdField||null,containerEl:s.containerEl||null,editDisplayNameElem:s.editDisplayNameElem||null,companyInfoElem:s.companyInfoElem||null,dataURL:s.dataURL||"/ta/company?loc=P",suggestUpHiddenField:s.suggestUpHiddenField||false,disableEditControl:s.disableEditControl||false};
var t=YDom.get(s.companyIdField);
if(!s.companyIdField||!t||t.type!="hidden"){throw"The company ID hidden field is not present in the form. Check the 'companyIdField' config property."
}var r=false;
var a,m;
if(c.nodeName!="INPUT"){m=c;
a=Y$("input[type=text]:first",c,true)
}else{a=c;
m=document.createElement("span");
c.parentNode.insertBefore(m,c);
m.appendChild(c)
}if(!a){throw"Could not find a text field (type=text) to add the typeaehad to. Please check the CompanyTypeahead docs for usage exmaples."
}var g=null;
if(s.companyInfoElem){g=YDom.get(s.companyInfoElem)
}var q=null,d=null;
if(s.editDisplayNameElem){q=YDom.get(s.editDisplayNameElem);
d=Y$("input[type=text]",q,true);
YDom.addClass(q,"hide");
var b=Y$("span.error",q,true);
if(q&&b!=null&&b.innerHTML.match(/[^\s]/)){YDom.removeClass(q,"hide")
}if(d.value.length>0&&a.value.length==0){a.value=d.value
}}var e,l,n;
var o=Y$(".selected-company",c,true);
if(o){e=Y$("strong",o,true);
l=Y$(".details",o,true);
n=document.createElement("span");
n.className="company-cntls";
var k="[<span class='change-company'>"+LI.i18n.get("company-typeahead-change")+"</span>";
if(q&&!s.disableEditControl){k+="<span class='edit-company'>"+LI.i18n.get("company-typeahead-edit")+"</span>"
}k+="]";
n.innerHTML=k;
if(l){o.insertBefore(n,l)
}else{if(e){o.insertBefore(n,e)
}else{o=null
}}}function f(x){var w=a.value;
var y="";
var v=false;
j(q);
if(w.length==0){return
}if(x&&(x.sourceID=="company"||x.sourceID=="suggestion")){w=LI.htmlUnencode(x.displayName);
y=LI.htmlUnencode(x.subLine);
v=true;
if(x.sourceID=="suggestion"&&s.suggestUpHiddenField){t.value=x.id
}j(g)
}else{YDom.removeClass(g,"hide")
}a.value=w;
if(d){d.value=w
}if(w.length>0){if(o){e.innerHTML=LI.htmlEncode(w);
if(l){l.innerHTML=LI.htmlEncode(y)
}a.blur()
}YDom.addClass(m,"selected");
if(v){YDom.addClass(m,"standard")
}else{YDom.removeClass(m,"standard")
}}}function p(){if(a.value.length>0){f()
}}function j(y){if(!y){return
}YDom.addClass(y,"hide");
var w=Y$("input",y);
for(var x=0,v=w.length;
x<v;
x++){w[x].value=w[x].defaultValue
}YDom.removeClass(y,"expand-newcompany")
}if(o){YEvent.on(o,"click",function(w){var v=YEvent.getTarget(w);
if(v.nodeName=="SPAN"){YEvent.preventDefault(w);
if(YDom.hasClass(v,"change-company")){YDom.removeClass(m,"selected");
j(g);
j(q);
a.value="";
a.focus();
if(d){d.value=""
}}else{if(YDom.hasClass(v,"edit-company")){if(q){YDom.removeClass(q,"hide")
}}}}})
}if(d&&d.value!=""){if(t&&t.value!=""&&t.value!="0"){f({displayName:d.defaultValue,subLine:"",sourceID:"company"})
}else{f({displayName:d.defaultValue,subLine:"",sourceID:"addNew"})
}}var i=new LI.Typeahead(a,{resultsClass:"company-typeahead-results",hiddenField:s.companyIdField,containerEl:s.containerEl,autofill:false,maxResultsPerSource:6,sources:{company:{url:s.dataURL},addNew:{filterResults:false,data:{"resultList":[{headLine:LI.i18n.get("company-typeahead-add-new"),displayName:LI.i18n.get("company-typeahead-add-new")}]}}}});
var u=i.autocomplete;
YEvent.on(a,"keypress",function(v){if(v.keyCode==13){YEvent.preventDefault(v)
}});
i.onResultsUpdated.subscribe(function(x,w){var v=w[1];
var y=decodeURIComponent(w[2]);
var z=Y$("li.addNew h4",v,true);
if(z){z.innerHTML=YAHOO.lang.substitute(z.innerHTML,[LI.htmlEncode(y)])
}});
u.containerExpandEvent.subscribe(function(w,v){r=false;
j(g);
YDom.addClass(m,"results-shown")
});
u.itemSelectEvent.subscribe(function(w,v){r=true;
var x=v[2];
f(x)
});
u.containerCollapseEvent.subscribe(function(w,v){YDom.removeClass(m,"results-shown");
if(!r){p()
}})
};

/* js/util/BalloonCallout.js */

(function(){LI.define("BalloonCalloutManager");
LI.BalloonCalloutManager=(function(){if(LI.__HPA===true){console.info("HOMPAGE_PERFORMANCE_ANALYSIS :: /js/util/BalloonCallout.js")
}var c=500,n="callout-overlay",r="callout-",k='<span class="callout-arrow"></span>',d={},g={zIndex:10,constraintoviewport:true},o=null,t=false,f=null,e=null,i=null,j=null,b=false;
o=new YAHOO.widget.Overlay(n,g);
var a=function(v,u){d[v]=u
};
var q=function(u){delete d[u]
};
var l=function(){t=true
};
var m=function(){t=false;
h()
};
var p=function(v){var w=v.config;
if(j){window.clearTimeout(j);
j=null;
f=null;
YDom.removeClass(i,"shown")
}f=v;
if(w.relativeToTrigger===true){o.cfg.setProperty("constraintoviewport",false)
}if(w.zIndex!==null&&w.zIndex!==undefined){o.cfg.setProperty("zIndex",w.zIndex)
}YDom.setStyle(i,"width",w.width);
i.className=w.type+" "+r+w.orientation+" "+w.id;
o.setBody(w.content+k);
o.render(document.body);
o.cfg.setProperty("context",[v.el,w.overlayCorner,w.contextCorner]);
var z=YDom.getXY(i);
YDom.setXY(i,[z[0]+w.offsetX,z[1]+w.offsetY]);
if(YAHOO.env.ua.ie==6){o.moveTo([z[0]+w.offsetX,z[1]+w.offsetY])
}YDom.addClass(i,"shown");
if(w.eventsOnInternalElements){var A=w.eventsOnInternalElements;
if(A.elementClass&&A.elementClass!==""){var x=YDom.getElementsByClassName(A.elementClass);
for(var y=0,u;
u=x[y];
y++){YEvent.purgeElement(u,false,A.elementEvent);
YEvent.on(u,A.elementEvent,v[A.elementAction],v,true)
}}b=true
}};
var s=function(){if((!t&&(f&&!f.isActive()))||(b&&(f&&!f.isActive()))){o.setBody("");
f=null;
YDom.removeClass(i,"shown")
}};
var h=function(){if(!j){j=window.setTimeout(function(){window.clearTimeout(j);
j=null;
s()
},c)
}};
YEvent.onDOMReady(function(){o.render(document.body);
i=YDom.get(n);
YEvent.on(i,"mouseover",l);
YEvent.on(i,"mouseout",m)
});
return{register:a,destroy:q,overlay:o,show:p,hide:h}
})()
})();
LI.define("BalloonCallout");
LI.BalloonCallout=function(c,d){var g=LI.BalloonCalloutManager,b="hover",h={"top-left":["tl","bl",0,5],"top-right":["tr","br",0,0],"right-top":["tr","tl",-5,-10],"right-bottom":["br","bl",-5,10],"bottom-right":["br","tr",0,0],"bottom-left":["bl","tl",0,0],"left-bottom":["bl","br",5,10],"left-top":["tl","tr",5,-10]},e="balloon-callout, error-callout, instructional-callout";
d=d||{};
if(c.tagName&&c.tagName.toLowerCase()=="a"&&c.href.indexOf("#")>-1){d.anchor=true;
d.id=c.href.substring(c.href.indexOf("#")+1)
}else{d.anchor=false
}d={anchor:d.anchor,width:d.width||300,id:d.id||"",overlayCorner:d.overlayCorner||null,contextCorner:d.contextCorner||null,orientation:d.orientation||"left-top",content:d.content||null,events:d.events||["mouseover","mouseout"],eventsOnInternalElements:d.eventsOnInternalElements||null,type:d.type||"balloon-callout",offsetX:d.offsetX||0,offsetY:d.offsetY||0,relativeToTrigger:d.relativeToTrigger||false,zIndex:d.zIndex||10};
if(!d.content){d.content=document.getElementById(d.id);
if(!d.content){throw"Could not find info element"
}else{d.content=d.content.innerHTML
}}if(d.width!=="auto"){d.width+="px"
}var a=function(j){YEvent.preventDefault(j)
};
if(d.anchor){YEvent.on(c,"click",a)
}if(!d.overlayCorner){d.overlayCorner=h[d.orientation][0]
}if(!d.contextCorner){d.contextCorner=h[d.orientation][1]
}d.offsetX+=h[d.orientation][2];
d.offsetY+=h[d.orientation][3];
this.openEvent=new YAHOO.util.CustomEvent("open");
var f=function(j){this.active=true;
YDom.addClass(c,b);
g.show(this);
this.openEvent.fire()
};
var i=function(j){this.active=false;
YDom.removeClass(c,b);
g.hide()
};
this.isActive=function(){return this.active
};
this.destroy=function(){if(d.anchor){YEvent.removeListener(c,"click",a)
}YEvent.removeListener(c,d.events[0],f);
YEvent.removeListener(c,d.events[1],i);
if(d.eventsOnInternalElements){var m=d.eventsOnInternalElements;
if(m.elementClass&&m.elementClass!==""){var k=YDom.getElementsByClassName(m.elementClass);
for(var l=0,j;
j=k[l];
l++){YEvent.removeListener(j,m.elementEvent,m.elementAction)
}}}i();
g.destroy(c.id)
};
this.setContent=function(j){if(!j){j=document.getElementById(d.id).innerHTML
}d.content=j
};
YDom.generateId(c,"callout-trigger-");
this.config=d;
this.el=c;
this.active=false;
this.close=i;
this.open=f;
g.register(c.id,this);
YEvent.on(c,d.events[0],f,this,true);
YEvent.on(c,d.events[1],i,this,true)
};
LI.Controls.register("LI.BalloonCallout");

/* js/apps/VariableSizeListParams.js */

LI.define("Profile");
LI.Profile.VariableSizeListParams=function(a,b){if(!a){return
}b=b||{};
b={paramContainerSelector:b.paramContainerSelector||"li",addButtonSelector:b.addButtonSelector||"a.add",removeButtonSelector:b.removeButtonSelector||"a.remove",maxNumberOfParams:b.maxNumberOfParams||10,classesToRemoveOnClone:b.classesToRemoveOnClone||[],suggestedClassName:b.suggestedClassName||null,controls:b.controls||{}};
var j=Y$(b.paramContainerSelector,a,false);
var p=j.length;
var e=p;
if(p==0){return
}if(YDom.hasClass(a,"min")){p=0
}for(var c=0,f=j.length;
c<f;
c++){var d=Y$(b.removeButtonSelector,j[c],true);
m(j[c],d)
}var h=Y$(b.addButtonSelector,a,true);
YEvent.on(h,"click",o);
if(p==b.maxNumberOfParams){YDom.addClass(a,"max")
}var n=j[0];
function o(i){if(YDom.hasClass(a,"min")){YDom.removeClass(a,"min");
p++;
return
}var r=g(n,e);
var s=Y$(b.paramContainerSelector,a,false);
var q=s[s.length-1];
q.parentNode.insertBefore(r,q.nextSibling);
m(r,Y$(b.removeButtonSelector,r,true));
l(r);
p++;
e++;
YEvent.preventDefault(i);
if(p==b.maxNumberOfParams){YDom.addClass(a,"max")
}}function m(q,i){YEvent.on(i,"click",function(){if(p==1){var s=Y$("select,input",q,false);
k(s);
YDom.addClass(a,"min");
p--;
return
}q.parentNode.removeChild(q);
if(p==b.maxNumberOfParams){YDom.removeClass(a,"max")
}if(q===n){var r=Y$(b.paramContainerSelector,a,false);
if(YDom.hasClass(n,"first")){YDom.addClass(r[0],"first")
}n=r[0]
}p--;
if(b.suggestedClassName){var u=YDom.getAncestorByClassName(a,b.suggestedClassName);
if(u){var t=Y$("li.nudge",a,false);
if(t.length==0){YDom.removeClass(u,b.suggestedClassName)
}}}})
}function g(w,v){var s=w.innerHTML;
var x=document.createElement(w.tagName);
x.className=w.className;
YDom.removeClass(x,"first");
if(b.classesToRemoveOnClone){for(var r=0,q=b.classesToRemoveOnClone.length;
r<q;
r++){YDom.removeClass(x,b.classesToRemoveOnClone[r])
}}s=s.replace(/<script[^>]*>([\S\s]*?)<\/script>/g,"");
s=s.replace(/(id|name|for)(="{0,1}.+?)\d+(.*?"{0,1})/g,"$1$2"+v+"$3");
x.innerHTML=s;
var u=Y$("select,input",x,false);
k(u);
var t=Y$("span.error",x,true);
if(t){t.innerHTML=""
}return x
}function k(s){for(var r=0,q=s.length;
r<q;
r++){if(s[r].tagName.toLowerCase()=="select"){s[r].selectedIndex=0
}else{if(s[r].tagName.toLowerCase()=="input"){s[r].value=""
}}}}function l(u){if(!b.controls){return
}var t;
var s=b.controls;
for(t in s){var q=s[t];
var i=LI.Controls.resolveName(q.controlName);
if(q.selector){var r=Y$(q.selector,u,true)
}else{var r=u
}new i(r,q.config)
}}};

/* js/util/Genie.js */

LI.define("Genie");
LI.Genie=function(c,p){var q="oid_cb_"+YDom.generateId().replace(/[^a-z]/i,"_"),r=q+"_allow",s=q+"_deny",n=q+"_error",l=q+"_close",d=q+"_scope",i={},k=c.tagName.toLowerCase(),a=this,m=false,b=null,h,e,j,f;
p=p||{};
p={url:p.url||null,onAllow:p.onAllow||function(){},onDeny:p.onDeny||function(){},onError:p.onError||function(){},onClose:p.onClose||function(){},scope:p.scope||window,popupWidth:p.popupWidth||790,popupHeight:p.popupHeight||580,obj:p.obj||{}};
if(!p.url){if(k=="a"){p.url=c.href
}else{throw new Error("No URL was supplied and no URL was found in the control.")
}}i=YAHOO.lang.JSON.stringify({onAllow:r,onDeny:s,onError:n,onClose:l,scope:d});
i=escape(i);
p.url=p.url+"&cb="+i;
f=function(u){var t=u;
if(typeof(u)=="string"){t=LI.Controls.resolveName(u)
}return t
};
p.onAllow=f(p.onAllow);
if(!p.onAllow){throw new Error("onAllow could not be found or resolved")
}p.onDeny=f(p.onDeny);
if(!p.onDeny){throw new Error("onDeny could not be found or resolved")
}p.onError=f(p.onError);
if(!p.onError){throw new Error("onError could not be found or resolved")
}p.onClose=f(p.onClose);
if(!p.onClose){throw new Error("onClose could not be found or resolved")
}if(p.scope!="window"&&p.scope!=window){p.scope=f(p.scope);
if(!p.scope){throw new Error("scope could not be found or resolved")
}}function o(){window[r]=null;
window[r]=null;
window[n]=null;
window[l]=null;
window[d]=null;
m=false;
clearInterval(b);
b=null
}j=function(){window[r]=function(t){o();
p.onAllow.call(p.scope,t,p.obj)
};
window[s]=function(t){o();
p.onDeny.call(p.scope,t,p.obj)
};
window[n]=function(t){o();
p.onError.call(p.scope,t,p.obj)
};
window[l]=function(t){o();
p.onClose.call(p.scope,t,p.obj)
};
window[d]=a
};
function g(t){YEvent.preventDefault(t);
j();
h=window.open(p.url,"genie_popup","width="+p.popupWidth+",height="+p.popupHeight);
if(!h||typeof h.document.getElementById=="undefined"){p.onError.call(p.scope,"popupBlocker")
}m=true;
b=setInterval(function(){if(m&&h.closed){o();
p.onClose.call(p.scope,{},p.obj)
}},300)
}YEvent.on(c,"click",g);
return{handleClick:g}
};

/* js/apps/genie/GuidedEditGenieBroadcast.js */

LI.GuidedEditGenieBroadcast=function(a,b){var b={submitButtonClass:b.submitButtonClass||"broadcast",popupTarget:b.popupTarget||"genie_popup",providerFieldId:b.providerFieldId||"provider",textFieldId:b.textFieldId||"broadcastMessage",urlFieldId:b.urlFieldId||"url",previouslyTetheredFBFieldId:b.previouslyTetheredFBFieldId||"previouslyTetheredFBFieldId",futureOffsetFieldId:b.futureOffsetFieldId||"futureOffsetFieldId",tetherMap:b.tetherMap||{},url:b.url||"",messageParamName:b.messageParamName||"message",providerParamName:b.providerParamName||"provider",urlParamName:b.urlParamName||"url",previouslyTetheredFBParamName:b.previouslyTetheredFBParamName||"previouslyTetheredFB",futureOffsetParamName:b.futureOffsetParamName||"futureOffset",progressClass:b.progressClass||"btn-progress",completedElPrefix:b.completedElPrefix||"shared-",skipID:b.skipID||"share-skip",continueID:b.continueID||"share-continue",importContinueID:b.continueID||"import-continue",genieFBUrl:b.genieFBUrl||"",genieTwitterUrl:b.genieTwitterUrl||"",broadcastSuccessUrl:b.broadcastSuccessUrl||"",twitterErrorMsg:b.twitterErrorMsg||"",facebookErrorMsg:b.facebookErrorMsg||"",fandangoPlaceholderId:b.fandangoPlaceholderId||"TEST_ID"};
var k=null,j=905,f=580,e,c,d;
YEvent.on(YDom.getElementsByClassName(b.submitButtonClass),"click",function(l){YEvent.preventDefault(l);
if(YDom.hasClass(YDom.get(b.textFieldId),"invalid")){return
}var o=YEvent.getTarget(l),n;
if(!YDom.hasClass(o,b.submitButtonClass)){o=o.parentNode
}n=YDom.getAttribute(o,"data-li-service");
YDom.get(b.providerFieldId).value=n;
e=n;
c=o;
if(b.tetherMap[n]){i(o,n);
return
}else{if(n=="TWITTER"){LI.GenieBroadcastInstance=LI.Controls.getControl(a,"LI.GuidedEditGenieBroadcast");
LI.GenieBroadcastInstance.twitterSettingsDisplayed=false;
var m=new LI.Genie(o,{url:b.genieTwitterUrl,onAllow:function(p,q){i(q.button,q.provider);
p.win.location.href=b.broadcastSuccessUrl
},onDeny:function(p,q){p.win.close()
},onError:function(p,q){LI.injectAlert(b.twitterErrorMsg,"error");
p.win.close()
},onClose:function(p,q){},scope:this,obj:{provider:n,button:o}})
}else{var m=new LI.Genie(o,{url:b.genieFBUrl,onAllow:function(p,q){i(q.button,q.provider);
p.win.close()
},onDeny:function(p,q){p.win.close()
},onError:function(p,q){if(!(p&&p.results&&p.results.errorMessage&&p.results.errorMessage.indexOf("user_denied")>-1)){LI.injectAlert(b.facebookErrorMsg,"error")
}p.win.close()
},onClose:function(p,q){},scope:this,obj:{provider:n,button:o}})
}m.handleClick(o)
}});
function i(l,n){YDom.get(b.providerFieldId).value=n;
e=n;
YDom.addClass(l,b.progressClass);
var m={};
m[b.messageParamName]=YDom.get(b.textFieldId).value;
m[b.providerParamName]=n;
m[b.urlParamName]=YDom.get(b.urlFieldId).value;
m[b.previouslyTetheredFBParamName]=YDom.get(b.previouslyTetheredFBFieldId).value;
m[b.futureOffsetParamName]=YDom.get(b.futureOffsetFieldId).value;
LI.asyncRequest("POST",b.url,{success:function(o){h(o)
},custom:{error:function(o){YDom.removeClass(c,b.progressClass)
}}},LI.addParams("",m,true));
return
}function h(n){LI.removeAlert(null,true);
LI.hide(c);
LI.hide(b.skipID);
if(!d){if(n&&n.responseText&&n.responseText.fandangoID){d=true;
var m=YDom.get(b.continueID);
var l=m.getAttribute("href");
l=l.replace(b.fandangoPlaceholderId,n.responseText.fandangoID);
m.setAttribute("href",l)
}}YDom.removeClass(c,b.submitButtonClass);
g(b.completedElPrefix+e.toLowerCase());
LI.hide(b.skipID);
g(b.continueID)
}function g(m){var l=document.getElementById(m);
YDom.setStyle(l,"display","inline-block")
}return{handleBroadcastComplete:h}
};