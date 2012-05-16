

/* js/util/SaveUISetting.js */

function SaveUISetting(b,a){a={setting:{name:(a.setting&&a.setting.name)?a.setting.name:null,value:(a.setting&&a.setting.value)?a.setting.value:"false",url:(a.setting&&a.setting.url)?a.setting.url:null},triggerID:a.triggerID||null,preventDefault:(a.preventDefault===false)?false:true,saveOnLoad:(a.saveOnLoad===true)?true:false,container:b};
if(a.triggerID){YEvent.on(a.triggerID,"click",this.saveSetting,a)
}if(a.saveOnLoad){if(typeof(oUISettings)!=="undefined"&&oUISettings.saveSettings){oUISettings.saveSettings(a.setting.name,a.setting.value)
}}}SaveUISetting.prototype={saveSetting:function(a,c){if(typeof(oUISettings)!=="undefined"&&oUISettings.saveSettings){if(c.setting.name){oUISettings.saveSettings(c.setting.name,c.setting.value)
}}if(c.setting&&c.setting.url){LI.asyncRequest("POST",c.setting.url,{custom:{exception:function(){return false
}}})
}if(c.preventDefault){YEvent.preventDefault(a)
}var b=YDom.get(c.triggerID);
if(!c.preventDefault&&b&&b.tagName.toLowerCase()=="a"){YEvent.preventDefault(a);
window.setTimeout(function(){location.href=b.href
},1)
}var d=YDom.get(c.container);
LI.fade(d)
}};

/* js/util/Dialog.js */

(function(){var a="interrupt success-plus success-timeout task-modal task-modeless task-modeless-secondary no-header noheader-modal";
var d={autoSize:"no-header task-modeless success-plus success-timeout",modal:"interrupt task-modal noheader-modal",dragNDrop:"task-modeless task-modeless-secondary success-plus success-timeout",docClick:"success-plus success-timeout",timeout:"success-timeout"};
var e=null;
var c={or:LI.i18n.get("Dialog-or"),closeThisWindow:LI.i18n.get("Dialog-closeWindow"),cancel:LI.i18n.get("Dialog-cancel"),submit:LI.i18n.get("Dialog-submit")};
LI.Dialog=function(h,g){var f=e||new b();
e=f;
if(h){c=(g.i18n)?g.i18n:c;
g=g||{};
g.content=g.content||{};
g.webtrack=g.webtrack||{};
g={content:{attentionMsg:g.content.attentionMsg||null,successMsg:g.content.successMsg||null,title:g.content.title||null,node:g.content.node||null,url:g.content.url||null,useCache:g.content.useCache||false,html:g.content.html||null,submitButton:g.content.submitButton||false,dustData:g.content.dustData||null,dustDataUrl:g.content.dustDataUrl||null,dustTemplate:g.content.dustTemplate||null},dependencies:g.dependencies||null,name:g.name||"config.name=not_set",className:g.className||"",type:(g&&g.type&&a.match(g.type))?g.type:"task-modeless",width:(g&&g.width)?parseInt(g.width,10):500,webtrack:{key:g.webtrack.key||null,val:g.webtrack.val||null},container:(g.container)?g.container:null,extra:(g.extra)?g.extra:null,lazyEvent:(g.lazyEvent)?g.lazyEvent:null,stopEvent:(typeof(g.stopEvent)==="undefined")?true:(!!g.stopEvent)};
YEvent.on(h,"click",e.open,g);
if(g.lazyEvent){e.open(g.lazyEvent,g)
}}return e
};
function b(){var L;
var w;
var B=null,p=null,E=null;
var y=parseInt(YDom.getStyle("body","padding-right"),10);
var u=document.createElement("DIV");
YEvent.on(u,"click",j);
var r=new YAHOO.util.KeyListener(document,{keys:27},{fn:G});
var F=document.createElement("DIV");
F.id="dialog-place-holder";
var o=new YAHOO.util.CustomEvent("close");
var q=new YAHOO.util.CustomEvent("open");
var i=new YAHOO.util.CustomEvent("beforeOpen");
var x=new YAHOO.util.CustomEvent("submit");
var m=new YAHOO.util.CustomEvent("swap");
var z=new YAHOO.util.CustomEvent("contentChange");
var g=null;
var C={};
function f(){if(L.container){var N=YDom.getRegion(L.container);
return N.width
}else{return(YDom.getViewportWidth()+30)
}}function D(O){L=O;
var Q,P,N="&nbsp";
if(L.content){if(L.content.title){Q=L.content.title
}else{if(L.content.node){P=Y$(".dialog-title",L.content.node,true);
if(P){Q=P.innerHTML;
YDom.setStyle(P,"display","none")
}}}}if(!Q){Q=N
}u.innerHTML=YAHOO.lang.substitute(['<div class="dialog-window">','<div class="dialog-title"><button class="dialog-close" title="{closeWindow}"></button><h3 class="title">{title}</h3></div>','<div class="dialog-body"></div>',"</div>"].join(""),{title:Q,closeWindow:c.closeThisWindow})
}function j(N){var O=YEvent.getTarget(N);
if(YDom.hasClass(O,"dialog-close")&&!O.disabled){var P=G(N);
if(P){YEvent.preventDefault(N);
o.fire(O,E.name,E.extra)
}}else{if(YDom.hasClass(O,"dialog-submit")||(O.tagName=="INPUT"&&O.type&&O.type=="submit")){if(YDom.hasClass(O,"dialog-submit-suppress")){YEvent.preventDefault(N)
}x.fire(O,E.name,E.extra)
}}}function G(N){var P=(N&&N.type=="click"||(N=="keyPressed"||N=="timer"||N=="selfClose"));
if(P){I();
var O=YDom.get("dialog-wrapper");
if(!O){return
}var Q=Y$(".dialog-content",O,true);
if(Q){Y$(".dialog-content",O,true).innerHTML=""
}YEvent.removeListener(window,"resize",l);
document.body.removeChild(O);
YDom.removeClass(document.body,"dialog-mask-active");
YDom.removeClass(document.body,"dialog-hide-select");
r.disable();
YDom.setStyle("body","padding-right",y+"px");
YDom.setStyle([YDom.get("header"),YDom.get("footer")],"margin-right","auto");
YDom.setStyle(document.getElementsByTagName("HTML")[0],"overflow","");
if(p){YEvent.removeListener(document,"click",G);
p=null
}if(B){clearTimeout(B);
B=null
}}return P
}function M(N){var P='<p class="dialog-close">{closeWindow}</p>';
var O='<input class="btn-primary" type="submit" value="{submit}"> {cancel}';
return YAHOO.lang.substitute(['<div class="dialog-message">{message}</div>','<div class="dialog-content">{content}</div>','<div class="dialog-actions">',(N&&N.content&&N.content.submitButton)?O:"",(N&&N.content&&N.content.closeMessage)?P:"","</div>"].join(""),{cancel:c.or+' <span class="dialog-cancel dialog-close">'+c.cancel+"</span>",closeWindow:'<span class="dialog-cancel dialog-close">'+c.closeThisWindow+"</span>",message:(N&&N.content&&N.content.msg)?"<p>"+N.content.msg+"</p>":"",submit:(N&&N.content&&N.content.submitButton!==true)?N.content.submitButton:c.submit})
}function A(){YEvent.on(Y$(".dialog-title",u,true),"mousedown",function(W){if(!YDom.hasClass(YEvent.getTarget(W),"dialog-close")){Q(W)
}});
var U={};
var T={};
var N=0,R=0;
var S=YDom.get("dialog-wrapper");
function Q(W){var X=parseInt(YDom.getStyle(S,"width"),10)||0;
var Y=parseInt(YDom.getStyle(S,"height"),10)||0;
YDom.addClass(document.body,"dragging");
U={x:W.clientX,y:W.clientY};
T.left=T.left||parseInt(YDom.getStyle(S,"left"),10)||0;
T.top=T.top||parseInt(YDom.getStyle(S,"top"),10)||0;
N=YDom.getDocumentWidth()-X;
R=YDom.getDocumentHeight()-Y;
YEvent.on(document,"mouseup",P);
YEvent.on(document,"mousemove",V);
O(true);
YEvent.stopEvent(W)
}function V(W){T.left+=W.clientX-U.x;
T.top+=W.clientY-U.y;
T.left=Math.min(Math.max(T.left,0),N);
T.top=Math.min(Math.max(T.top,0),R);
YDom.setStyle(S,"left",T.left+"px");
YDom.setStyle(S,"top",T.top+"px");
U={x:W.clientX,y:W.clientY}
}function P(){YDom.removeClass(document.body,"dragging");
YEvent.removeListener(document,"mouseup",P);
YEvent.removeListener(document,"mousemove",V);
O(false)
}function O(W){if(W){document.body.ondrag=document.body.onselectstart=function(){return false
};
document.body.style.MozUserSelect="none"
}else{document.body.ondrag=document.body.onselectstart=null;
document.body.style.MozUserSelect=""
}}}function t(N){YAHOO.util.Connect.initHeader("X-IsDialog","1");
YAHOO.util.Connect.asyncRequest("GET",N,{success:function(O){var P=Y$(".dialog-body",u,true);
YDom.removeClass(P,"dialog-body-loading");
if(!O){v()
}else{if(O&&O.responseText){var Q=YAHOO.lang.trim(O.responseText);
if(Q.indexOf("<!DOCTYPE")===0||Q.indexOf("<html")===0){v()
}else{s({content:{html:Q}})
}}}},failure:function(){v()
},timeout:15000})
}function v(){LI.Dialog().close();
LI.injectAlert(LI.i18n.get("Dialog-error-generic"),"error")
}function n(N){LI.asyncRequest("get",N,{success:function(O){K(O.responseText)
},failure:v})
}function K(O){dust.render(L.content.dustTemplate,O,function N(Q,P){if(Q){v()
}else{YDom.removeClass(Y$(".dialog-body",u,true),"dialog-body-loading");
s({content:{html:P}})
}})
}function l(N){if(d.modal.match(L.type)){if(YAHOO.env.ua.ie<7){var R=YDom.getClientRegion();
YDom.setStyle(u,"height",(R.bottom-R.top)+"px")
}}else{var P=Y$(".dialog-window",u,true),Q=YDom.get("dialog-wrapper"),O=parseInt(YDom.getStyle(P,"width"),10);
YDom.setStyle(Q,"left",(f()-O)/2+"px");
YDom.setStyle(Q,"top",YDom.getDocumentScrollTop()+105+"px")
}}function J(aa,Q){var S=(aa===null)?"publicAPI":YEvent.getTarget(aa),Z;
if(YDom.inDocument("dialog-wrapper")&&(S!=w||S=="publicAPI")){G("selfClose")
}Q.className=Q.className||"";
E=Q;
var W=null;
if(typeof Q.i18n=="object"){W={};
YAHOO.lang.augmentObject(W,c);
YAHOO.lang.augmentObject(c,Q.i18n,true)
}u.className="dialog-mask dialog-"+Q.type;
if(S!=w||S=="publicAPI"){D(Q);
w=S
}s(Q);
var U=Y$(".dialog-window",u,true);
YDom.setStyle(U,"width",Q.width+"px");
YDom.setStyle(u,"visibility","hidden");
var N=YDom.get("dialog-wrapper")||document.body.appendChild(document.createElement("DIV"));
N.id="dialog-wrapper";
N.innerHTML="";
if(Q.className!==""){N.className=Q.className
}YDom.setStyle(N,"top","");
YDom.setStyle(N,"left","");
N.appendChild(u);
var O=YDom.getStyle(u,"filter")||null;
if(d.modal.match(Q.type)){Z=YAHOO.util.Region.getRegion(U);
YDom.setStyle(U,"margin-left",(Q.width*-0.5)+"px");
var V=YAHOO.util.Region.getRegion(N);
YDom.setStyle(document.getElementsByTagName("HTML")[0],"overflow","hidden");
var R=YAHOO.util.Region.getRegion(N).right-V.right;
var ab=R+y;
YDom.addClass(document.body,"dialog-mask-active");
if(YAHOO.env.ua.ie&&YAHOO.env.ua.ie<7){var T=YDom.getClientRegion();
YDom.setStyle(u,"height",(T.bottom-T.top)+"px")
}}else{Z=YAHOO.util.Region.getRegion(u);
var Y=parseInt(YDom.getStyle(U,"width"),10);
YDom.setStyle(N,"left",(f()-Y)/2+"px");
YDom.setStyle(N,"top",YDom.getDocumentScrollTop()+105+"px");
if(d.autoSize.match(Q.type)){YDom.addClass(N,"auto-size")
}else{YDom.removeClass(N,"auto-size")
}if(d.dragNDrop.match(Q.type)){A()
}if(YAHOO.env.ua.ie&&YAHOO.env.ua.ie<7){if(g===null||!g.parentNode){g=document.createElement("IFRAME");
g.src="javascript:false;";
YDom.setStyle(g,"width",Q.width+"px");
YDom.setStyle(g,"height","0px");
YDom.insertBefore(g,YDom.getFirstChild(u))
}var X=function(){var ad=YAHOO.util.Region.getRegion(U);
var ac=ad.bottom-ad.top;
YDom.setStyle(g,"height",ac+"px");
YDom.setStyle(U,"margin-top",-ac+"px");
YDom.setStyle(u,"height","")
};
m.subscribe(X);
var P=window.setInterval(X,500);
o.subscribe(function(){m.unsubscribe(X);
window.clearInterval(P);
o.unsubscribe(arguments.callee)
})
}}YEvent.on(window,"resize",l);
i.fire(S,Q.name,Q.extra);
if(YDom.getLastChild(document.body)!=N){document.body.appendChild(document.body.removeChild(N))
}YDom.setStyle(u,"visibility","");
r.enable();
if(d.timeout.match(Q.type)){B=setTimeout(function(){G("timer")
},2000)
}if(d.docClick.match(Q.type)){YEvent.on(document,"click",G);
p=true
}if((YAHOO.env.ua.ie==6)&&(Q.type=="task-modal"||Q.type=="interrupt")){document.location.href="#header"
}if(aa!==null){if(Q.stopEvent){YEvent.stopEvent(aa)
}else{YEvent.preventDefault(aa)
}}q.fire(S,Q.name,Q.extra);
if(Q.webtrack&&Q.webtrack.key&&typeof(WebTracking)!="undefined"){WebTracking.trackUserAction(Q.webtrack.key,Q.webtrack.val)
}if(W){c=W
}}function I(){var N=YDom.getFirstChild(Y$(".dialog-content",u,true));
if(!N){return
}if(YDom.inDocument(F)){F.parentNode.replaceChild(N,F)
}else{if(E.content&&(E.content.url||E.content.dustDataUrl)){C[E.content.url||E.content.dustDataUrl]=N.parentNode.removeChild(N)
}}}function H(O,N,P){P=P||Y$(".dialog-message",u,true);
N=(N)?N:"attention";
P.innerHTML="<p>"+(O)+"</p>";
YDom.addClass(P,"alert");
YDom.removeClass(P,"attention");
YDom.removeClass(P,"success");
YDom.removeClass(P,"error");
YDom.addClass(P,N);
YDom.setStyle(P,"display","")
}function k(N){N=N||Y$(".dialog-message",u,true);
if(N){N.innerHTML="";
LI.hide(N)
}}function s(O){var U=(O&&O.content)?O.content:{};
var N=Y$(".dialog-body",u,true);
if(O.dependencies){h(O)
}else{if((U.url&&(!U.useCache||!C[U.url]))||(U.dustDataUrl&&(!U.useCache||!C[U.dustDataUrl]))){var P=Y$(".dialog-content",u,true);
if(P){P.innerHTML=""
}YDom.addClass(N,"dialog-body-loading");
if(U.url){t(U.url)
}else{if(U.dustDataUrl){n(U.dustDataUrl)
}}}else{if(U.dustData){K(U.dustData)
}else{if(U.attentionMsg||U.successMsg||U.node||U.html||(U.useCache&&U.url&&C[U.url])||(U.useCache&&U.dustDataUrl&&C[U.dustDataUrl])){var S=function(Z){var ab=Y$(".dialog-message",Z,true);
var aa=Y$(".dialog-content",Z,true);
var X=YDom.getNextSibling(aa);
YDom.setStyle([ab,aa,X],"display","none");
if(U.attentionMsg||U.successMsg){aa.innerHTML="";
H((U.attentionMsg||U.successMsg),((U.successMsg)?"success":"attention"),ab)
}if(U.node){var Y=YDom.get(U.node);
Y.parentNode.replaceChild(F,Y);
aa.innerHTML="";
aa.appendChild(Y);
YDom.setStyle(aa,"display","")
}else{if(U.html){aa.innerHTML=U.html;
YDom.setStyle(aa,"display","")
}else{if(U.useCache&&U.url&&C[U.url]){aa.innerHTML="";
aa.appendChild(C[U.url]);
YDom.setStyle(aa,"display","")
}}}if(O.content&&(O.content.submitButton||O.content.closeMessage)){YDom.setStyle(X,"display","")
}LI.Controls.parseFragment(N);
z.fire(E.name,E.extra)
};
var W=M(O);
var R=YDom.inDocument("dialog-wrapper");
var Q=N.cloneNode(true);
var T=N.parentNode;
var V=YDom.getStyle(N,"height");
YDom.setStyle(N,"height",V);
I();
YDom.setStyle(N,"height","");
N.innerHTML=W;
S(N)
}}}}}function h(S){var U=S.dependencies;
if(typeof U==="string"){U=LI.Controls.resolveName(U)
}if(!U){return
}var N=(U.jsFiles===undefined),T=(U.cssFiles===undefined),P;
var R=Y$(".dialog-body",u,true);
YDom.addClass(R,"dialog-body-loading");
var Q=function(){if(P){return
}if(N&&T){P=true;
YDom.removeClass(R,"dialog-body-loading");
delete S.dependencies;
s(S)
}};
var O=function(){var V=['<div class="dialog-container interrupt">','<div class="alert attention"><p><strong>'+LI.i18n.get("Dialog-error-generic")+"</strong></p></div>","</div>"].join(" ");
s({name:S.name,content:{html:V,closeMessage:true}})
};
if(!N||!T){if(!N){YAHOO.util.Get.script(U.jsFiles,{onSuccess:function(){N=true;
Q()
},onFailure:function(){O()
},timeout:1000})
}if(!T){YAHOO.util.Get.css(U.cssFiles,{onSuccess:function(){T=true;
Q()
},onFailure:function(){O()
},timeout:1000})
}}else{Q()
}}return{contentChangeEvent:z,close:function(){G("selfClose")
},closeEvent:o,open:function(){if(arguments.length===1){evt=null;
L=arguments[0]
}else{evt=arguments[0];
L=arguments[1]
}J(evt,L)
},openEvent:q,beforeOpenEvent:i,submitEvent:x,swapEvent:m,swap:function(O){var N=(E&&E.name)?E.name:"";
s(O);
if(E){m.fire("",N,E.extra)
}},injectAlert:H,removeAlert:k,handlesOwnLazyLoading:true}
}})();
YAHOO.register("LI.Dialog",LI.Dialog,{});

/* js/util/FrontierAJAXForm.js */

LI.define("FrontierAJAXForm");
LI.FrontierAJAXForm=function(c,e){e=e||{};
e.backgroundColor=e.backgoundColor||"#fff";
e.injectAfter=e.injectAfter||".actions .btn-primary";
e.enableAJAX=(e.enableAJAX!==false)?true:false;
e.enableDemo=e.enableDemo||false;
e.errorId=e.errorId||YDom.generateId();
e.useGlobalError=e.useGlobalError||false;
e.injectGlobalError=(e.injectGlobalError!=="undefined"&&e.injectGlobalError===false)?false:true;
e.injectGlobalErrorOnly=e.injectGlobalErrorOnly||false;
e.successCallback=e.successCallback||null;
e.exceptionCallback=e.exceptionCallback||null;
e.errorCallback=e.errorCallback||null;
e.failureCallback=e.failureCallback||null;
if(e.useGlobalError){e.errorId="global-error"
}var b=this;
var j=YDom.getRegion(c);
var l=16;
b.successHandlers=[];
b.failureHandlers=[];
var f=Y$(e.injectAfter,c,true);
var k=f;
if(k){while(k.nextSibling){if(k.nextSibling.nodeType===1){YDom.addClass(k.nextSibling,"hidden")
}k=k.nextSibling
}}var o=document.createElement("div");
YDom.addClass(o,"screen");
c.appendChild(o);
var g=document.createElement("div");
var n=YDom.getRegion(f).height;
n=(n>l)?n:l;
if(f){if(f.nextSibling){f.parentNode.insertBefore(g,f.nextSibling)
}else{f.parentNode.appendChild(g)
}}YDom.addClass(g,"progress-indicator");
YDom.setStyle(g,"lineHeight",n+"px");
var a=function(r){var q=YDom.get(e.errorId);
if(!q){q=document.createElement("div");
q.id=e.errorId;
c.parentNode.insertBefore(q,c)
}LI.injectAlert(r,"error",q);
q.scrollIntoView()
};
var m=function(){YDom.removeClass(c,"form-submit-processing");
YDom.removeClass(f,"disabled");
YDom.setStyle(o,"display","none")
};
var d=function(){var q=YDom.getRegion(c);
YDom.setStyle(o,"width",j.width+"px");
YDom.setStyle(o,"height",q.height+"px");
YDom.setStyle(o,"margin-top",(q.height*-1)+"px")
};
var i=function(q){location.href=q
};
var p=function(t){if(YDom.hasClass(c,"form-submit-processing")){return
}YDom.addClass(c,"form-submit-processing");
YDom.addClass(f,"disabled");
var s=YDom.getRegion(c);
YDom.setStyle(o,"backgroundColor",e.backgroundColor);
YDom.setStyle(o,"display","block");
d();
var q=document.createElement("input");
YDom.setStyle(q,"opacity",0);
YDom.setStyle(q,"height","1px");
YDom.setStyle(q,"width","1px");
YDom.setStyle(q,"display","inline");
c.appendChild(q);
q.focus();
c.removeChild(q);
delete (q);
if(e.enableDemo){YEvent.stopEvent(t);
var r=(e.enableDemo=="success")?LI.FrontierAJAXForm.DEMO_SUCCESS:LI.FrontierAJAXForm.DEMO_FAILURE;
b.handleFormSuccess=i;
b.injectGlobalFormError=a;
b.markFormErrors=markFormErrors;
b.resetFormSubmission=m;
window.setTimeout(function(){r.call(b)
},5000);
return false
}if(e.enableAJAX){YEvent.preventDefault(t);
window.setTimeout(function(){h()
},1);
return false
}};
var h=function(){YAHOO.util.Connect.setForm(c);
LI.asyncRequest("POST",c.action,{custom:{error:function(q){LI.removeAlert();
if(e.injectGlobalError||e.injectGlobalErrorOnly){if(q.globalError){a(q.globalError)
}else{if(!e.injectGlobalErrorOnly){a(LI.i18n.get("oneOrMoreErrors"))
}}}if(e.errorCallback){e.errorCallback(q)
}m();
d()
},exception:function(){if(e.exceptionCallback){e.exceptionCallback()
}}},success:function(t){for(var r=0,q=b.successHandlers.length;
r<q;
r++){var s=b.successHandlers[r];
s.fn.apply(null,[t])
}},failure:function(t){for(var r=0,q=b.failureHandlers.length;
r<q;
r++){var s=b.failureHandlers[r];
s.fn.call(s.scope,t)
}},timeout:25000})
};
this.addSuccessHandler=function(r,q){b.successHandlers.push({fn:r||function(){},scope:q||window})
};
this.addFailureHandler=function(r,q){b.failureHandlers.push({fn:r||function(){},scope:q||window})
};
if(e.successCallback){e.successCallback=(typeof(e.successCallback)=="string")?LI.Controls.resolveName(e.successCallback):e.successCallback;
if(!e.successCallback){throw new Error(e.successCallback+" is not defined")
}this.addSuccessHandler(e.successCallback)
}if(e.failureCallback){this.addFailureHandler(e.failureCallback)
}this.resetFormSubmit=m;
this.submitForm=p;
YEvent.on(c,"submit",p)
};

/* js/apps/Feedback.js */

LI.Feedback=function(e,c){c=c||{};
c.id=c.id||"feedback_info";
c.containerId=c.containerId||"feedback-form";
function d(){LI.Dialog().closeEvent.unsubscribe(d)
}function a(){LI.hide(c.containerId);
LI.show("feedback-success");
LI.Dialog().closeEvent.subscribe(d)
}LI.Dialog().contentChangeEvent.subscribe(function(g,i){var f=i[1];
if(i[0]!="feedback-dialog"){return
}if(f&&f.feedbackSubjectLine){var h=YDom.get("subject-feedbackInfoForm");
h.value=YAHOO.lang.trim(f.feedbackSubjectLine)
}});
var b=LI.Controls.getControl(c.id,"FrontierAJAXForm");
if(b){b.addSuccessHandler(function(){a()
})
}};

/* js/language_switch.js */

var langSwitch=function(){var c;
function b(){var j;
var g=YDom.get("nav-utility-lang");
var h=g.getElementsByTagName("a");
YEvent.on(g,"click",function(){var i=this;
if(YDom.hasClass(i,"hover")){return
}j=setTimeout(function(){YDom.addClass(i,"hover")
},0)
});
YEvent.on(g,"mouseout",function(k){var l=this;
var i=YEvent.getRelatedTarget(k);
if(l!=i&&!YDom.isAncestor(l,i)){YDom.removeClass(l,"hover")
}clearTimeout(j)
});
h[0].onclick=function(){return false
};
var d=YDom.get("lang-list");
var f=d.getElementsByTagName("a");
for(var e=0;
f.length>e;
e++){f[e].onclick=function(){a(this.lang);
return false
}
}}function a(d){c.i18nLang.value=d;
c.submit()
}return{init:function(){if(!document.languageSelectorForm){return false
}c=document.languageSelectorForm;
b()
}}
}();
YEvent.on(window,"load",langSwitch.init);