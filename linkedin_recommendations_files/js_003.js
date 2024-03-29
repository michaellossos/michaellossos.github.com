

/* js/profile.js */

var profileSwitch=function(){function a(){var c=document.getElementById("nav-profile-lang");
var d=document.getElementById("current-locale");
var b=document.getElementById("nav-profile-lang-list");
YEvent.on(d,"mouseover",function(){YDom.addClass(c,"hover")
});
YEvent.on(b,"mouseover",function(){YDom.addClass(c,"hover")
});
YEvent.on(c,"mouseout",function(){YDom.removeClass(c,"hover")
})
}return{init:function(){if(!document.getElementById("nav-profile-lang")){return false
}a()
}}
}();
YEvent.on(window,"load",profileSwitch.init);
var toggleWarning=function(){var b=document.getElementById("locale-createInternationalProfile");
var a=document.getElementById("unsupported");
var d=function(){b.onchange=function(){c()
}
};
var c=function(){for(var e=0;
supportedLanguages.length>e;
e++){var f=supportedLanguages[e];
if(b.options[b.selectedIndex].value==f){LI.hide(a);
break
}else{LI.show(a)
}}};
return{init:function(){if(!document.getElementById||!document.getElementById("locale-createInternationalProfile")){return
}d()
}}
}();
YEvent.on(window,"load",toggleWarning.init);
var flagPhotoForm={init:function(){if(!document.getElementById||!document.getElementById("flag-form")){return
}var a=YDom.getElementsByClassName("flag-photo","li")[0].getElementsByTagName("a")[0];
var c=YDom.getElementsByClassName("profile-control","div")[0];
var b=document.getElementById("cancel-flag");
a.onclick=function(){YDom.addClass(c,"open");
return false
};
b.onclick=function(){YDom.removeClass(c,"open");
return false
}
}};
YEvent.on(window,"load",flagPhotoForm.init);
var bubbleInfo=function(){return{init:function(){if(!YDom.get("introlink-bot")){return
}var a=YDom.get("introlink-bot");
if(a.nextSibling&&/bubble/.test(a.nextSibling.className)){a.onmouseover=a.onmouseout=function(){LI.toggle(this.nextSibling)
}
}}}
}();
YEvent.on(window,"load",bubbleInfo.init);
var profileExperts={init:function(){if(!document.getElementById||!document.getElementById("experts")){return
}var e=document.getElementById("experts");
var d=e.getElementsByTagName("li");
if(d.length>4){var b=document.getElementById("nobullet").style.display="list-item";
var c=document.getElementById("see-more-experts");
var a=d.length-1;
c.onclick=function(){profileExperts.toggleExperts(d,a);
return false
};
profileExperts.showExpertsOnInit(d,a)
}},toggleExperts:function(c,a){var d=0;
if(c[3].style.display=="list-item"){profileExperts.showExpertsOnInit(c,a)
}else{for(var b=0;
c.length>b;
b++){if(b<a){if(b>2){c[b].style.display="list-item";
d++
}}}document.getElementById("see-more-experts").innerHTML=i18n.seeLess
}},showExpertsOnInit:function(d,b){var f=0;
for(var c=0;
d.length>c;
c++){if(c<b){if(c>2){LI.hide(d[c]);
f++
}}}var a;
if(f==1){a=i18n.other
}else{a=i18n.others
}var e=i18n.and+" "+f+" "+a;
document.getElementById("see-more-experts").innerHTML=e
}};
var profileRecs={sets:null,showlinks:null,selectedSet:null,init:function(){if(!document.getElementById||!document.getElementById("showlinks-rec")){return
}profileRecs.showlinks=document.getElementById("showlinks-rec").getElementsByTagName("a");
for(var a=0;
a<profileRecs.showlinks.length;
a++){profileRecs.showlinks[a].onclick=function(){profileRecs.toggleSets(this);
return false
}
}profileRecs.sets=YDom.getElementsByClassName("recset","div");
profileRecs.hideAllSets();
profileRecs.showSet(profileRecs.selectedSet);
profileRecs.updateLinkClasses(profileRecs.selectedSet)
},toggleSets:function(a){profileRecs.hideAllSets();
var b=a.href.split("#")[1];
profileRecs.showSet(b);
profileRecs.updateLinkClasses(b)
},showSet:function(a){LI.show("recset_"+a)
},hideAllSets:function(){for(var a=0;
a<profileRecs.sets.length;
a++){LI.hide(profileRecs.sets[a])
}},updateLinkClasses:function(b){for(var a=0;
a<profileRecs.showlinks.length;
a++){YDom.removeClass(profileRecs.showlinks[a],"chosen");
if(profileRecs.showlinks[a].href.split("#")[1]==b){YDom.addClass(profileRecs.showlinks[a],"chosen")
}}}};
var profileQa={init:function(){if(!document.getElementById||!document.getElementById("showlinks-qa")){return
}LI.hide("hdr-q");
LI.hide("hdr-a");
var c=YDom.get("showlinks-qa");
var a=c.getElementsByTagName("a");
for(var b=0;
a.length>b;
b++){a[b].onclick=function(){profileQa.toggleQA(this.id);
return false
}
}if(isQuestionMode){profileQa.toggleQA("qLink")
}else{profileQa.toggleQA("aLink")
}},toggleQA:function(a){if(a=="qLink"){if(YDom.get("my-q")){LI.show("my-q")
}if(YDom.get("my-a")){LI.hide("my-a")
}if(YDom.get("qLink")){YDom.get("qLink").className="on"
}if(YDom.get("aLink")){YDom.get("aLink").className="off"
}}else{if(YDom.get("my-q")){LI.hide("my-q")
}if(YDom.get("my-a")){LI.show("my-a")
}if(YDom.get("qLink")){YDom.get("qLink").className="off"
}if(YDom.get("aLink")){YDom.get("aLink").className="on"
}}}};
YEvent.on(window,"load",profileQa.init);
(function(){function b(){var f=YDom.getElementsByClassName("primary-profile-content");
var d;
for(var c=0;
c<f.length;
c++){d=f[c];
var e=document.createElement("span");
e.className="control";
d.appendChild(e);
YDom.addClass(d,"collapse-open");
e._content=d;
f._control=e;
YEvent.on(e,"click",a)
}}function a(){var d=this;
var c=d._content;
if(YDom.hasClass(c,"collapse-open")){YDom.replaceClass(c,"collapse-open","collapse-close")
}else{YDom.replaceClass(c,"collapse-close","collapse-open")
}}YEvent.onDOMReady(b)
})();
function ToggleModuleVisibility(b,a){YEvent.on(b,"click",this.toggle,a)
}ToggleModuleVisibility.prototype={toggle:function(a,b){var c=YDom.get(b.parentID);
if(YDom.hasClass(c,"open")){YDom.removeClass(c,"open");
YDom.addClass(c,"close");
oUISettings.saveSettings(b.setting,"true")
}else{YDom.removeClass(c,"close");
YDom.addClass(c,"open");
oUISettings.saveSettings(b.setting,"false")
}}};
function ConnectionBrowseVcard(c,b){var a=c.getElementsByTagName("li");
YAHOO.util.Event.addListener(a,"mouseover",function(d){YAHOO.util.Dom.addClass(this,"hover")
});
YAHOO.util.Event.addListener(a,"mouseout",function(d){YAHOO.util.Dom.removeClass(this,"hover")
})
}function getRegionAndCityOptions(d,e){if(!e||typeof(e)!="object"||!e.countryFieldId||!e.postalCodeId||!e.resultsContainerId||!e.requestURL){return
}var j=document.getElementById(e.countryFieldId),b=document.getElementById(e.postalCodeId),g=document.getElementById(e.resultsContainerId),h=Y$("ul",g,true);
var c=h.innerHTML,f=null,a=null,i=null;
resetEl=function(){h.innerHTML=c;
g.style.display="none"
};
goGetMatchingLocations=function(m){clearTimeout(i);
resetEl();
var k=function(t){try{var s=YAHOO.lang.JSON.parse(t.responseText);
if(s&&s.formOptions&&s.formOptions.length>0){a="";
for(var q=0,p=s.formOptions.length;
q<p;
q++){a+='<li><label><input type="radio" name="'+s.formKey+'" value="'+s.formOptions[q].formValue+'" ';
if(s.checkedValue==s.formOptions[q].formValue){a+=' checked="checked" '
}a+="/> "+s.formOptions[q].formLabel+"</label></li>"
}h.innerHTML=a;
g.style.display="block"
}}catch(r){return
}};
var n={success:k};
var l=function(){YAHOO.util.Connect.asyncRequest("GET",e.requestURL+((e.requestURL.indexOf("?")>0)?"&":"?")+"countryCode="+j.options[j.selectedIndex].value+"&postalCode="+b.value,n)
};
i=setTimeout(l,300)
};
if(j&&b&&g&&h){YEvent.on(j,"change",goGetMatchingLocations);
YEvent.on(b,"keyup",goGetMatchingLocations)
}goGetMatchingLocations()
}var secondProfileLang={paramId:null,specialLocales:[],phoneticLocales:[],init:function(b,a){var e=secondProfileLang;
if(typeof a.specialLocales=="undefined"){a.specialLocales=a
}var c={specialLocales:a.specialLocales||e.specialLocales,phoneticLocales:a.phoneticLocales||e.phoneticLocales};
e.paramId=b;
e.specialLocales=c.specialLocales;
e.phoneticLocales=c.phoneticLocales;
var d=YDom.get("locale-createInternationalProfile");
if(d.selectedIndex>0){e.checkLocale()
}YEvent.addListener(e.paramId,"change",secondProfileLang.checkLocale)
},checkLocale:function(b){var d=secondProfileLang;
var a=YDom.get(d.paramId);
var c=a.options[a.selectedIndex].value;
if(d.isSpecialLocale(c)){if(!d.isInSpecialLocales){d.switchNameFields(true);
d.isInSpecialLocales=true
}}else{if(d.isInSpecialLocales){d.switchNameFields(false);
d.isInSpecialLocales=false
}}if(d.isPhoneticLocale(c)){d.showHidePhoneticNameFields(true)
}else{d.showHidePhoneticNameFields(false)
}},isSpecialLocale:function(a){var b=secondProfileLang.specialLocales;
for(var c=0;
c<b.length;
c++){if(b[c]==a){return true
}}return false
},isPhoneticLocale:function(a){var b=secondProfileLang.phoneticLocales;
if(secondProfileLang.phoneticLocales){for(var c=0;
c<b.length;
c++){if(b[c]==a){return true
}}}return false
},swapListItem:function(a){if(a){a.parentNode.insertBefore(a,a.parentNode.firstChild)
}},switchNameFields:function(b){var a=secondProfileLang.swapListItem;
if(b){a(YDom.get("fld_phonetic_fn"));
a(YDom.get("fld_firstname"));
a(YDom.get("fld_phonetic_ln"));
a(YDom.get("fld_lastname"))
}else{a(YDom.get("fld_phonetic_ln"));
a(YDom.get("fld_lastname"));
a(YDom.get("fld_phonetic_fn"));
a(YDom.get("fld_firstname"))
}},showHidePhoneticNameFields:function(a){var e=YDom.get("fld_phonetic_fn"),g=YDom.get("fld_phonetic_ln"),c=YDom.get("phoneticLastName-createInternationalProfile"),d=YDom.get("phoneticFirstName-createInternationalProfile"),b=(a)?"block":"none",f=(a)?false:"disable";
e.style.display=b;
g.style.display=b;
c.disabled=f;
d.disabled=f;
if(!a){c.value="";
d.value=""
}}};

/* js/showhide.js */

var showHide={init:function(k){var g=(k)?YDom.get(k):document;
var h=YDom.getElementsByClassName("showhide-block","*",g);
for(var f=0;
f<h.length;
f++){LI.hide(h[f])
}var b=YDom.getElementsByClassName("showhide-link","*",g);
for(var e=0;
e<b.length;
e++){var d=b[e].getElementsByTagName("a");
for(var c=0;
c<d.length;
c++){YEvent.on(d[c],"click",showHide.toggle);
d[c].onclick=function(){return false
};
if(/-show/.test(d[c].id)){b[e].style.display="block"
}}}},toggle:function(d){var b=YEvent.getTarget(d);
var a=b.id;
var g=a.split("-")[0];
var c=a.split("-")[1];
var f=YDom.get(g);
if(c=="show"){LI.show(f);
if(YDom.get(g+"-hide")){YDom.get(g+"-hide").parentNode.style.display="block"
}}else{LI.hide(f);
YDom.get(g+"-show").parentNode.style.display="block"
}LI.hide(b.parentNode)
}};

/* js/ajax/chameleon_service.js */

var ChameleonService={panels:{},deleteModuleErrorMessage:"Please delete a module before adding another.",loadApe:true,setPanel:function(b,a){if(LI.__HPA===true){console.info("HOMEPAGE_PERFORMANCE_ANALYSIS :: js/ajax/chameleon_service.js ChameleonService.setPanel()")
}ChameleonService.panels[b]=a
},init:function(){if(LI.__HPA===true){console.info("HOMEPAGE_PERFORMANCE_ANALYSIS :: js/ajax/chameleon_service.js ChameleonService.init()")
}ChameleonService.onChamPanelComplete=new YAHOO.util.CustomEvent("Chameleon Panel Complete")
},grantPermission:function(b,a,d,c){if(LI.__HPA===true){console.info("HOMEPAGE_PERFORMANCE_ANALYSIS :: js/ajax/chameleon_service.js ChameleonService.grantPermission()")
}ChameleonAjaxService.grantPermission(b,a,d,function(e){if(c){if(e&&e.hadError){c(e)
}if(e){c(["VIEWER"])
}}})
},getProfileUrlFor:function(a,b,c){if(LI.__HPA===true){console.info("HOMEPAGE_PERFORMANCE_ANALYSIS :: js/ajax/chameleon_service.js ChameleonService.getProfileUrlFor()")
}ChameleonAjaxService.getProfileUrlFor(a,b,function(d){var f=new Array(d.length);
for(var e=0;
e<d.length;
e++){f[e]=LI.htmlUnencode(d[e])
}c(f)
})
},showError:function(a){if(LI.__HPA===true){console.info("HOMEPAGE_PERFORMANCE_ANALYSIS :: js/ajax/chameleon_service.js ChameleonService.showError()")
}LI.injectAlert(a,"error");
document.location.href="#header"
},submitForm:function(formName){if(LI.__HPA===true){console.info("HOMEPAGE_PERFORMANCE_ANALYSIS :: js/ajax/chameleon_service.js ChameleonService.submitForm()")
}var map=lui.ui.form2Map.convertByFormId(formName);
ChameleonAjaxService.submitForm(map,formName,function(result){if(!ChameleonService.checkError(result)){var unencodedJson=LI.htmlUnencode(result.javascriptResponse);
var appInfo=eval("("+unencodedJson+")");
var slot=appInfo.app;
ChameleonService.reIDSlotDiv(appInfo.oldDivID,slot.divID);
ChameleonService.replaceSlot(slot.divID,slot.content);
if(result.slotDivID!=null&&result.slotDivID.length>0){setupModules.initSlot(result.slotDivID,false)
}}})
},savePrefs:function(c,b,d,f){if(LI.__HPA===true){console.info("HOMEPAGE_PERFORMANCE_ANALYSIS :: js/ajax/chameleon_service.js ChameleonService.init()")
}if(ChameleonService.saveAppPreferencesURL){var e=[];
if(c){for(pref in c){e.push(pref+":"+c[pref])
}e=e.join("|")
}var a="&panelID="+escape(d)+"&appID="+escape(f)+"&pageID="+escape(b)+"&prefMap="+escape(e);
LI.asyncRequest("POST",ChameleonService.saveAppPreferencesURL,{failure:function(){},success:function(){}},a)
}else{ChameleonAjaxService.savePrefs(b,d,f,c,function(g){})
}},deleteOSApplication:function(b,c,d){if(LI.__HPA===true){console.info("HOMEPAGE_PERFORMANCE_ANALYSIS :: js/ajax/chameleon_service.js ChameleonService.deleteOSApplication()")
}if(ChameleonService.deleteOSAppURL){var a="&panelID="+escape(c)+"&appID="+escape(d);
LI.asyncRequest("POST",ChameleonService.deleteOSAppURL,{failure:function(){},success:function(e){var f=YAHOO.lang.JSON.parse(e.responseText);
if(f){if(f.errorCode){ChameleonService.showError(ChameleonService.deleteModuleErrorMessage)
}var g=f.txId;
ChameleonService.panels[c].txId=g
}}},a)
}else{ChameleonAjaxService.deleteOSApplication(c,d,ChameleonService.handleOsAppDeteleEvalResponse)
}},loadPanel:function(pageID,panelID,titleTag){if(LI.__HPA===true){console.info("HOMEPAGE_PERFORMANCE_ANALYSIS :: js/ajax/chameleon_service.js ChameleonService.loadPanel()")
}ChameleonAjaxService.loadPanel(pageID,panelID,titleTag,function(result){if(!ChameleonService.checkError(result)){var unencodedJson=LI.htmlUnencode(result.javascriptResponse);
var panel=eval("("+unencodedJson+")");
var panelDiv=YDom.get(panel.panelDiv);
ChameleonService.setPanel(panelID,{div:panelDiv,txId:panel.txId,maxSlots:panel.maxSlots});
var slots=panel.panel;
var hasGadgets=false;
var gadgetTitleDivs=new Array();
var j=0;
for(var i=0;
i<slots.length;
i++){var slot=slots[i];
if(!slot.appType){ChameleonService.createSlot(panelDiv,slot.divID,"","h4")
}else{switch(slot.appType){case 1:ChameleonService.createSlot(panelDiv,slot.divID,"","h4");
ChameleonService.replaceSlot(slot.divID,slot.content);
ChameleonService.trackLinks(slot.pageID,slot.panelID,slot.appID,slot.divID);
ChameleonService.initSlot(slot.divID);
break;
case 3:ChameleonService.createSlot(panelDiv,slot.divID,"","h4");
if(slot.apeUrl){ChameleonService.getApeContent(slot.apeUrl,slot.pageSlot,slot.divID,slot.isExpanded);
ChameleonService.initSlot(slot.divID)
}break;
case 4:ChameleonService.createSlot(panelDiv,slot.divID,"","h4");
ChameleonService.loadGadget(slot.divID,slot,true);
hasGadgets=true;
gadgetTitleDivs[j]={"divId":"panel-0"+slot.panelID+"-slot-"+slot.appID+"-remote-title","title":slot.title};
j++;
break
}}}if(hasGadgets){gadgets.container.renderGadgets();
YDom.addClass("profile-applications","installed-apps");
for(var i=0;
i<gadgetTitleDivs.length;
i++){YDom.get(gadgetTitleDivs[i]["divId"]).innerHTML=gadgetTitleDivs[i]["title"]
}}}})
},loadChamSlotsOnPanel:function(pageID,panelID,titleTag,installationExpandedMap,txId,panelDivId,maxSlots){if(LI.__HPA===true){console.info("HOMEPAGE_PERFORMANCE_ANALYSIS :: js/ajax/chameleon_service.js ChameleonService.loadChamSlotsOnPanel()")
}ChameleonService.setPanel(panelID,{div:document.getElementById(panelDivId),txId:txId,maxSlots:maxSlots});
if(installationExpandedMap){ChameleonAjaxService.loadApplicationsFor(pageID,panelID,titleTag,installationExpandedMap,txId,function(result){if(!ChameleonService.checkError(result)){var unencodedJson=LI.htmlUnencode(result.javascriptResponse);
var panel=eval("("+unencodedJson+")");
var panelDiv=document.getElementById(panel.panelDiv);
var slots=panel.panel;
var j=0;
for(var i=0;
i<slots.length;
i++){var slot=slots[i];
if(!slot.appType){ChameleonService.createSlot(panelDiv,slot.divID,"","h4")
}else{switch(slot.appType){case 1:ChameleonService.replaceSlot(slot.divID,slot.content);
ChameleonService.trackLinks(slot.pageID,slot.panelID,slot.appID,slot.divID);
ChameleonService.initSlot(slot.divID);
break;
case 3:if(slot.apeUrl){ChameleonService.getApeContent(slot.apeUrl,slot.pageSlot,slot.divID,slot.isExpanded);
ChameleonService.initSlot(slot.divID)
}break
}}}}})
}},loadChamSlotsOnPanelV2:function(pageID,panelID,titleTag,installationExpandedMap,txId,panelDivId,maxSlots){if(LI.__HPA===true){console.info("HOMEPAGE_PERFORMANCE_ANALYSIS :: js/ajax/chameleon_service.js ChameleonService.loadChamSlotsOnPanelV2()")
}if(installationExpandedMap){ChameleonAjaxService.loadApplicationsFor(pageID,panelID,titleTag,installationExpandedMap,txId,function(result){if(!ChameleonService.checkError(result)){var unencodedJson=LI.htmlUnencode(result.javascriptResponse);
var panel=eval("("+unencodedJson+")");
YAHOO.util.Event.onDOMReady(function(){ChameleonService.setPanel(panelID,{div:document.getElementById(panelDivId),txId:txId,maxSlots:maxSlots});
var panelDiv=document.getElementById(panel.panelDiv);
var slots=panel.panel;
var j=0;
for(var i=0;
i<slots.length;
i++){var slot=slots[i];
if(!slot.appType){ChameleonService.createSlot(panelDiv,slot.divID,"","h4")
}else{switch(slot.appType){case 1:ChameleonService.replaceSlot(slot.divID,slot.content);
ChameleonService.trackLinks(slot.pageID,slot.panelID,slot.appID,slot.divID);
ChameleonService.initSlot(slot.divID);
break;
case 3:if(slot.apeUrl){ChameleonService.getApeContent(slot.apeUrl,slot.pageSlot,slot.divID,slot.isExpanded);
ChameleonService.initSlot(slot.divID)
}break
}}}ChameleonService.onChamPanelComplete.fire(panel)
},panel)
}})
}},loadProfilePanel:function(ownerID,ownerHash){if(LI.__HPA===true){console.info("HOMEPAGE_PERFORMANCE_ANALYSIS :: js/ajax/chameleon_service.js ChameleonService.loadProfilePanel()")
}ChameleonAjaxService.loadProfilePanel(ownerID,ownerHash,function(result){if(!ChameleonService.checkError(result)){var unencodedJson=LI.htmlUnencode(result.javascriptResponse);
var panel=eval("("+unencodedJson+")");
var panelDiv=YDom.get(panel.panelDiv);
ChameleonService.panels[3]={div:panelDiv,txId:panel.txId};
var slots=panel.panel;
var hasGadgets=false;
for(var i=0;
i<slots.length;
i++){var slot=slots[i];
if(!slot.appType){ChameleonService.createSlot(panelDiv,slot.divID,"","h4")
}else{switch(slot.appType){case 1:ChameleonService.createSlot(panelDiv,slot.divID,"","h4");
ChameleonService.replaceSlot(slot.divID,slot.content);
ChameleonService.trackLinks(slot.pageID,slot.panelID,slot.appID,slot.divID);
ChameleonService.initSlot(slot.divID);
break;
case 3:ChameleonService.createSlot(panelDiv,slot.divID,"","h4");
if(slot.apeUrl){ChameleonService.getApeContent(slot.apeUrl,slot.pageSlot,slot.divID,slot.isExpanded);
ChameleonService.initSlot(slot.divID)
}break;
case 4:ChameleonService.createSlot(panelDiv,slot.divID,"","h4",true);
ChameleonService.loadGadget(slot.divID,slot,false);
hasGadgets=true;
break
}}}if(hasGadgets){gadgets.container.renderGadgets();
if(slots.length>0){YDom.addClass("profile-applications","installed-apps")
}}}})
},loadGenericProfilePanel:function(ownerID,ownerHash,panelId){if(LI.__HPA===true){console.info("HOMEPAGE_PERFORMANCE_ANALYSIS :: js/ajax/chameleon_service.js ChameleonService.loadGenericProfilePanel()")
}ChameleonAjaxService.loadGenericProfilePanel(ownerID,ownerHash,panelId,function(result){if(!ChameleonService.checkError(result)){var unencodedJson=LI.htmlUnencode(result.javascriptResponse);
var panel=eval("("+unencodedJson+")");
var panelDiv=document.getElementById(panel.panelDiv);
ChameleonService.panels[3]={div:panelDiv,txId:panel.txId};
var slots=panel.panel;
var hasGadgets=false;
for(var i=0;
i<slots.length;
i++){var slot=slots[i];
if(!slot.appType){ChameleonService.createSlot(panelDiv,slot.divID,"","h4")
}else{switch(slot.appType){case 1:ChameleonService.createSlot(panelDiv,slot.divID,"","h4");
ChameleonService.replaceSlot(slot.divID,slot.content);
ChameleonService.trackLinks(slot.pageID,slot.panelID,slot.appID,slot.divID);
ChameleonService.initSlot(slot.divID);
break;
case 3:ChameleonService.createSlot(panelDiv,slot.divID,"","h4");
if(slot.apeUrl){ChameleonService.getApeContent(slot.apeUrl,slot.pageSlot,slot.divID,slot.isExpanded);
ChameleonService.initSlot(slot.divID)
}break;
case 4:ChameleonService.createSlot(panelDiv,slot.divID,"","h4",true);
ChameleonService.loadGadget(slot.divID,slot,false);
hasGadgets=true;
break
}}}if(hasGadgets){gadgets.container.renderGadgets();
if(slots.length>0){YAHOO.util.Dom.addClass(document.getElementById("profile-applications"),"installed-apps")
}}}})
},loadCanvas:function(pageID,panelID,applicationID,ownerID,canvasUrl,osSignature,completeSignature){if(LI.__HPA===true){console.info("HOMEPAGE_PERFORMANCE_ANALYSIS :: js/ajax/chameleon_service.js ChameleonService.loadCanvas()")
}ChameleonAjaxService.loadCanvas(pageID,panelID,applicationID,ownerID,canvasUrl,osSignature,completeSignature,function(result){if(!ChameleonService.checkError(result)){var unencodedJson=LI.htmlUnencode(result.javascriptResponse);
var appInfo=eval("("+unencodedJson+")");
if(appInfo.app&&appInfo.app.divID!=null){ChameleonService.loadGadget("opensocial-app-container-in-canvas",appInfo.app,false);
YDom.get("opensocial-gadget-title").innerHTML=appInfo.title;
document.title="LinkedIn: "+appInfo.title;
gadgets.container.renderGadgets()
}}})
},loadGadget:function(e,d,c){if(LI.__HPA===true){console.info("HOMEPAGE_PERFORMANCE_ANALYSIS :: js/ajax/chameleon_service.js ChameleonService.loadGadget()")
}ChameleonService.replaceSlot(e,d.content);
gadgets.container.addGadgetChrome(d.appID,d.gadgetChromeID);
var f=gadgets.container.createGadget({specUrl:d.specUrl,secureToken:d.secureToken,id:d.appID});
f.setServerBase(d.serverBase);
f.setGadgetInfo(d.pageID,d.panelID,d.appID,d.urlToCanvasView,d.signedUrlToCanvasView,d.baseLeoNonSecureURL,d.ownerProfileUrl,d.viewerId,d.ownerId,d.applicationId,d.viewerAccess,d.isViewerTheOwner,d.language,d.country);
for(var b in d.prefs){var a=d.prefs[b];
f.userPrefs_[b]=a
}gadgets.container.addGadget(f);
if(c){ChameleonService.initSlot(d.divID,true)
}return f
},createInappGadget:function(c,h,d,i){if(LI.__HPA===true){console.info("HOMEPAGE_PERFORMANCE_ANALYSIS :: js/ajax/chameleon_service.js ChameleonService.createInappGadget()")
}gadgets.container.addGadgetChrome(h.appID,h.gadgetChromeID);
var b=gadgets.container.createGadget({specUrl:h.specUrl,secureToken:h.secureToken,id:h.appID});
b.setServerBase(h.serverBase);
b.setGadgetInfo(h.pageID,h.panelID,h.appID,h.urlToCanvasView,h.signedUrlToCanvasView,h.baseLeoNonSecureURL,h.ownerProfileUrl,h.viewerId,h.ownerId,h.applicationId,h.viewerAccess,h.isViewerTheOwner,h.language,h.country);
for(var a in h.prefs){var f=h.prefs[a];
b.userPrefs_[a]=f
}gadgets.container.addGadget(b);
if(d){ChameleonService.initSlot(h.divID,true)
}var e=b.getIframeId();
var g=b.rpcRelay;
gadgets.rpc.setRelayUrl(e,h.serverBase+g);
gadgets.rpc.setAuthToken(e,i);
return b
},loadInappGadget:function(panelDiv,jresponse,initializeDnD,rpcToken,panelID){if(LI.__HPA===true){console.info("HOMEPAGE_PERFORMANCE_ANALYSIS :: js/ajax/chameleon_service.js ChameleonService.loadInappGadget()")
}var unencodedJson=LI.htmlUnencode(jresponse);
try{var appInfo=eval("("+unencodedJson+")")
}catch(err){}if(appInfo){ChameleonService.setPanel(panelID,{div:panelDiv,txId:appInfo.txId,maxSlots:appInfo.maxSlots});
if(appInfo.app&&appInfo.app.divID!=null){ChameleonService.createInappGadget(panelDiv,appInfo.app,initializeDnD,rpcToken)
}}},loadInappGadgetOnPanel:function(panelDiv,jresponse,initializeDnD){if(LI.__HPA===true){console.info("HOMEPAGE_PERFORMANCE_ANALYSIS :: js/ajax/chameleon_service.js ChameleonService.loadInappGadgetOnPanel()")
}var unencodedJson=LI.htmlUnencode(jresponse);
var appInfo=eval("("+unencodedJson+")");
var content='<div class="module gadget open" id="'+appInfo.app.gadgetChromeID+'"></div>';
appInfo.app.content=content;
if(appInfo.app&&appInfo.app.divID!=null){var gadget=ChameleonService.loadGadget(panelDiv,appInfo.app,initializeDnD);
var chromeId=appInfo.app.gadgetChromeID;
var chrome=chromeId?document.getElementById(chromeId):null;
gadget.render(chrome);
var appTitleDivId="panel-0"+appInfo.app.panelID+"-slot-"+appInfo.app.appID+"-remote-title";
document.getElementById(appTitleDivId).innerHTML=appInfo.title
}},addNonOSApplicationOnNhome:function(f,g,d,b){if(LI.__HPA===true){console.info("HOMEPAGE_PERFORMANCE_ANALYSIS :: js/ajax/chameleon_service.js ChameleonService.addNonOSApplicationOnNhome()")
}var i=ChameleonService.getPanelOrder(g);
if(i){var c=i.slots;
var e=i.collapse;
if(c.length>=ChameleonService.panels[g].maxSlots){ChameleonService.showError(ChameleonService.deleteModuleErrorMessage);
return
}if(ChameleonService.addApplicationURL){if(c){c=c.join("|")
}var h=[];
if(e){for(panel in e){h.push(panel+":"+e[panel])
}h=h.join("|")
}var a="&panelID="+escape(g)+"&appID="+escape(d)+"&panelOrder="+escape(c)+"&collapsed="+escape(h)+"&titleTag="+escape(b)+"&txID="+escape(ChameleonService.panels[g].txId);
LI.asyncRequest("POST",ChameleonService.addApplicationURL,{failure:function(){},success:function(){}},a)
}}},addApplication:function(pageID,panelID,appID,titleTag,callback){if(LI.__HPA===true){console.info("HOMEPAGE_PERFORMANCE_ANALYSIS :: js/ajax/chameleon_service.js ChameleonService.addApplication()")
}var panelConfig=ChameleonService.getPanelOrder(panelID);
if(panelConfig){var slots=panelConfig.slots;
var collapsed=panelConfig.collapse;
if(slots.length>=ChameleonService.panels[panelID].maxSlots){ChameleonService.showError(ChameleonService.deleteModuleErrorMessage);
return
}ChameleonAjaxService.addApplication(panelID,appID,slots,collapsed,titleTag,ChameleonService.panels[panelID].txId,function(result){if(!ChameleonService.checkError(result)){var unencodedJson=LI.htmlUnencode(result.javascriptResponse);
var appInfo=eval("("+unencodedJson+")");
if(appInfo.app&&appInfo.app.divID!=null){var panelDiv=YDom.get(appInfo.panelDiv);
ChameleonService.panels[panelID].txId=appInfo.txId;
var e=ChameleonService.createSlot(panelDiv,appInfo.app.divID,appInfo.title,"h4");
ChameleonService.replaceSlot(appInfo.app.divID,appInfo.app.content);
setupModules.initSlot(appInfo.app.divID,true);
if(callback){callback()
}var module=YDom.getFirstChild(e);
if(!YDom.hasClass(module,"add")){YDom.addClass(module,"add")
}YEvent.preventDefault(e)
}}})
}},addGadget:function(a,b,d,e){if(LI.__HPA===true){console.info("HOMEPAGE_PERFORMANCE_ANALYSIS :: js/ajax/chameleon_service.js ChameleonService.addGadget()")
}var c=ChameleonService.getPanelOrder(b);
if(c){if(c.slots.length>=ChameleonService.panels[b].maxSlots){ChameleonService.showError(ChameleonService.deleteModuleErrorMessage);
return
}document.location.href=ChameleonService.leoNonSecureUrl+"opensocialInstallation/preview?_ch_panel_id="+b+"&_applicationId="+d
}},deleteApplication:function(a,b,c){if(LI.__HPA===true){console.info("HOMEPAGE_PERFORMANCE_ANALYSIS :: js/ajax/chameleon_service.js ChameleonService.addApplication()")
}ChameleonAjaxService.deleteApplication(b,c,ChameleonService.handleEvalResponse)
},collapseApplication:function(a,b,c){if(LI.__HPA===true){console.info("HOMEPAGE_PERFORMANCE_ANALYSIS :: js/ajax/chameleon_service.js ChameleonService.collapseApplication()")
}ChameleonService.savePanel(b)
},expandApplication:function(a,b,c){if(LI.__HPA===true){console.info("HOMEPAGE_PERFORMANCE_ANALYSIS :: js/ajax/chameleon_service.js ChameleonService.expandApplication()")
}ChameleonService.savePanel(b)
},moveApplication:function(a,b,c,d){if(LI.__HPA===true){console.info("HOMEPAGE_PERFORMANCE_ANALYSIS :: js/ajax/chameleon_service.js ChameleonService.moveApplication()")
}ChameleonService.savePanel(b)
},savePanel:function(panelID){if(LI.__HPA===true){console.info("HOMEPAGE_PERFORMANCE_ANALYSIS :: js/ajax/chameleon_service.js ChameleonService.savePanel()")
}var panelConfig=ChameleonService.getPanelOrder(panelID);
if(panelConfig){ChameleonAjaxService.savePanelOrder(panelID,panelConfig.slots,panelConfig.collapse,ChameleonService.panels[panelID].txId,function(result){if(!ChameleonService.checkError(result)){var unencodedJson=LI.htmlUnencode(result.javascriptResponse);
var appInfo=eval("("+unencodedJson+")");
if(appInfo.txId){ChameleonService.panels[panelID].txId=appInfo.txId
}}})
}},getPanelOrder:function(c){if(LI.__HPA===true){console.info("HOMEPAGE_PERFORMANCE_ANALYSIS :: js/ajax/chameleon_service.js ChameleonService.getPanelOrder()")
}if(!ChameleonService.panels[c]){return null
}var g=ChameleonService.panels[c].div;
if(g){var f=g.childNodes;
var b=[];
var a={};
var e=0;
for(var d=0;
d<f.length;
d++){if(f[d].nodeName=="DIV"){b[e]=ChameleonService.getAppInstanceID(f[d].id);
a[b[e]]=ChameleonService.isSlotOpen(f[d]);
e++
}}var h={slots:b,collapse:a};
return h
}return null
},isSlotOpen:function(d){if(LI.__HPA===true){console.info("HOMEPAGE_PERFORMANCE_ANALYSIS :: js/ajax/chameleon_service.js ChameleonService.isSlotOpen()")
}var c=d.childNodes;
if(c&&c.length>0){var a=c[0];
for(var b=0;
b<c.length;
b++){a=c[b];
if(a.nodeType==1){break
}}if(a.nodeType!=1){return true
}return YAHOO.util.Dom.hasClass(a,"open")
}return true
},getPanelID:function(a){if(LI.__HPA===true){console.info("HOMEPAGE_PERFORMANCE_ANALYSIS :: js/ajax/chameleon_service.js ChameleonService.getPanelID()")
}var b=a.split("-");
if(b.length>=4){return b[1]
}return""
},getAppInstanceID:function(a){if(LI.__HPA===true){console.info("HOMEPAGE_PERFORMANCE_ANALYSIS :: js/ajax/chameleon_service.js ChameleonService.getAppInstanceID()")
}var b=a.split("-");
if(b.length>=4){return b[3]
}return""
},reIDSlotDiv:function(b,a){if(LI.__HPA===true){console.info("HOMEPAGE_PERFORMANCE_ANALYSIS :: js/ajax/chameleon_service.js ChameleonService.reIDSlotDiv()")
}var c=YDom.get(b);
c.setAttribute("id",a)
},createApeSlot:function(e,c,a){if(LI.__HPA===true){console.info("HOMEPAGE_PERFORMANCE_ANALYSIS :: js/ajax/chameleon_service.js ChameleonService.createApeSlot()")
}var d=YDom.get(e);
var b=document.createElement("div");
b.setAttribute("id",c);
if(a){b.setAttribute("class","module ape open")
}else{b.setAttribute("class","module ape")
}d.appendChild(b)
},createSlot:function(b,g,f,d,a){if(LI.__HPA===true){console.info("HOMEPAGE_PERFORMANCE_ANALYSIS :: js/ajax/chameleon_service.js ChameleonService.createSlot()")
}var c=document.createElement("div");
c.setAttribute("id",g);
c.setAttribute("class","slot");
if(gadgets.setGadgetDefaultHeightToZero&&a){c.style.position="absolute";
c.style.left="-12345px"
}b.appendChild(c);
if(f!=""){var e=document.createElement(d);
e.innerHTML=f;
c.appendChild(e)
}return c
},trackLinkClick:function(e){if(LI.__HPA===true){console.info("HOMEPAGE_PERFORMANCE_ANALYSIS :: js/ajax/chameleon_service.js ChameleonService.trackLinkClick()")
}ChameleonAjaxService.trackClick(this.pageID,this.panelID,this.appInstanceID,this.href,function(result){var unencodedJson=LI.htmlUnencode(result.javascriptResponse);
var resultObj=eval("("+unencodedJson+")");
if(resultObj.url){ChameleonService.redirect(resultObject.url)
}})
},checkError:function(a){if(LI.__HPA===true){console.info("HOMEPAGE_PERFORMANCE_ANALYSIS :: js/ajax/chameleon_service.js ChameleonService.checkError()")
}switch(a.errorCode){case 100:ChameleonService.showError(ChameleonService.deleteModuleErrorMessage);
return true;
break;
case 200:return true;
break;
case -1:return false;
break;
default:return false
}},handleEvalResponse:function(result){if(LI.__HPA===true){console.info("HOMEPAGE_PERFORMANCE_ANALYSIS :: js/ajax/chameleon_service.js ChameleonService.handleEvalResponse()")
}switch(result.errorCode){case 100:ChameleonService.showError(ChameleonService.deleteModuleErrorMessage);
break;
case 200:case -1:break;
default:}var panelID=result.panelID;
var responseContent=result.javascriptResponse;
eval(responseContent)
},handleOsAppDeteleEvalResponse:function(result){if(LI.__HPA===true){console.info("HOMEPAGE_PERFORMANCE_ANALYSIS :: js/ajax/chameleon_service.js ChameleonService.handleOsAppDeteleEvalResponse()")
}switch(result.errorCode){case 100:ChameleonService.showError(ChameleonService.deleteModuleErrorMessage);
break;
case 200:case -1:break;
default:}var panelID=result.panelID;
var unencodedJson=LI.htmlUnencode(result.javascriptResponse);
var txInfo=eval("("+unencodedJson+")");
ChameleonService.panels[panelID].txId=txInfo.txId
},trackLinks:function(g,h,k,b){if(LI.__HPA===true){console.info("HOMEPAGE_PERFORMANCE_ANALYSIS :: js/ajax/chameleon_service.js ChameleonService.trackLinks()")
}var m=YDom.get(b);
var n=YDom.getElementsByClassName("content","div",m);
for(var d=0;
d<n.length;
d++){var c=n[d];
var p=c.getElementsByTagName("a");
for(var e=0;
e<p.length;
e++){var l=p[e];
var a=l.getAttribute("href");
var f=YDom.hasClass(l,"no-track");
if(a!=null&&!f){var o=new Object();
o.pageID=g;
o.panelID=h;
o.appInstanceID=k;
o.href=a;
YEvent.on(l,"click",ChameleonService.trackLinkClick,o,true)
}}}},redirect:function(a){if(LI.__HPA===true){console.info("HOMEPAGE_PERFORMANCE_ANALYSIS :: js/ajax/chameleon_service.js ChameleonService.redirect()")
}window.location=LI.htmlUnencode(a)
},clearPanel:function(b){if(LI.__HPA===true){console.info("HOMEPAGE_PERFORMANCE_ANALYSIS :: js/ajax/chameleon_service.js ChameleonService.clearPanel()")
}var a=YDom.get(b);
a.innerHTML=""
},replaceSlot:function(a,b){if(LI.__HPA===true){console.info("HOMEPAGE_PERFORMANCE_ANALYSIS :: js/ajax/chameleon_service.js ChameleonService.replaceSlot()")
}var c=YDom.get(a);
c.innerHTML=b;
if(b==""||b==null){YDom.addClass(c,"empty")
}},initSlot:function(a,b){if(LI.__HPA===true){console.info("HOMEPAGE_PERFORMANCE_ANALYSIS :: js/ajax/chameleon_service.js ChameleonService.initSlot()")
}setupModules.initSlot(a,false,b)
},getApeContent:function(a,g,f,b){if(LI.__HPA===true){console.info("HOMEPAGE_PERFORMANCE_ANALYSIS :: js/ajax/chameleon_service.js ChameleonService.getApeContent()")
}if(!ChameleonService.loadApe){return
}var c=false;
if(window.XMLHttpRequest){try{c=new XMLHttpRequest()
}catch(d){c=false
}}else{if(window.ActiveXObject){try{c=new ActiveXObject("Msxml2.XMLHTTP")
}catch(d){try{c=new ActiveXObject("Microsoft.XMLHTTP")
}catch(d){c=false
}}}}if(c){try{c.open("GET",a,true);
c.onreadystatechange=function(){if(c.readyState==4){if(c.status==200){var m=YDom.get(f);
m.innerHTML=c.responseText;
if(c.responseText.length>0){if(b){var k=YDom.getElementsByClassName("module","div",m);
for(var e=0;
e<k.length;
e++){YDom.addClass(k[e],"open")
}}var l=YDom.getElementsByClassName("header","div",m);
for(var h=0;
h<l.length;
h++){l[h].setAttribute("id",f+"-header")
}setupModules.initSlot(f,false)
}else{YDom.addClass(m,"empty")
}}else{}}};
c.send("")
}catch(d){}}}};
var setupModules=function(){var u;
var p;
var k=function(y){if(LI.__HPA===true){console.info("HOMEPAGE_PERFORMANCE_ANALYSIS :: js/ajax/chameleon_service.js setupModules.editModule()")
}var x=YDom.getFirstChild(this);
if(!YDom.hasClass(x,"edit")){YDom.addClass(x,"edit")
}else{YDom.removeClass(x,"edit")
}YEvent.preventDefault(y)
};
var h=function(){if(LI.__HPA===true){console.info("HOMEPAGE_PERFORMANCE_ANALYSIS :: js/ajax/chameleon_service.js setupModules.addEditHandlers()")
}for(var y=0;
y<u.length;
y++){var z=YDom.getElementsByClassName("edit","li",u[y]);
if(z!=null&&z.length>0){var x=z[0];
YEvent.on(x,"click",k,u[y],true)
}}};
var j=function(){if(LI.__HPA===true){console.info("HOMEPAGE_PERFORMANCE_ANALYSIS :: js/ajax/chameleon_service.js setupModules.addCancelHandlers()")
}for(var z=0;
z<u.length;
z++){var x=YDom.getElementsByClassName("cancel","a",u[z]);
if(x!=null&&x.length>0){var y=x[0];
var A=YEvent.getListeners(y,"click");
if(A==null||A.size==0){YEvent.on(y,"click",k,u[z],true)
}}}};
var f=function(){if(LI.__HPA===true){console.info("HOMEPAGE_PERFORMANCE_ANALYSIS :: js/ajax/chameleon_service.js setupModules.addNewModuleCancelHandlers()")
}for(var z=0;
z<u.length;
z++){var x=YDom.getElementsByClassName("cancel","a",u[z]);
if(x!=null&&x.length>0){var y=x[0];
var A=YEvent.getListeners(y,"click");
if(A==null||A.size==0){YEvent.on(y,"click",w,u[z],true)
}}}};
var b=function(x){if(LI.__HPA===true){console.info("HOMEPAGE_PERFORMANCE_ANALYSIS :: js/ajax/chameleon_service.js setupModules.saveModule()")
}YDom.addClass(this.parentNode,"processing")
};
var d=function(){if(LI.__HPA===true){console.info("HOMEPAGE_PERFORMANCE_ANALYSIS :: js/ajax/chameleon_service.js setupModules.addSaveHandlers()")
}for(var x=0;
x<u.length;
x++){var z=YDom.getElementsByAttribute("type","submit","input",u[x]);
if(z!=null&&z.length>0){var A=z[0];
var y=YEvent.getListeners(A,"click");
if(y==null||y.size==0){YEvent.on(A,"click",b,u[x])
}}}};
var w=function(z){if(LI.__HPA===true){console.info("HOMEPAGE_PERFORMANCE_ANALYSIS :: js/ajax/chameleon_service.js setupModules.removeModule()")
}var y=new YAHOO.util.Anim(this,{opacity:{to:0}},0.3);
var x=this;
y.onComplete.subscribe(function(){x.parentNode.removeChild(x);
ChameleonService.deleteApplication(1,p,ChameleonService.getAppInstanceID(x.id))
});
y.animate();
YEvent.preventDefault(z)
};
var o=function(z){if(LI.__HPA===true){console.info("HOMEPAGE_PERFORMANCE_ANALYSIS :: js/ajax/chameleon_service.js setupModules.removeOpenSocialModule()")
}var y=new YAHOO.util.Anim(this,{opacity:{to:0}},0.3);
var x=this;
y.onComplete.subscribe(function(){x.parentNode.removeChild(x);
ChameleonService.deleteOSApplication(1,p,ChameleonService.getAppInstanceID(x.id))
});
y.animate();
YEvent.preventDefault(z)
};
var r=function(B){if(LI.__HPA===true){console.info("HOMEPAGE_PERFORMANCE_ANALYSIS :: js/ajax/chameleon_service.js setupModules.addRemoveHandlers()")
}for(var x=0;
x<u.length;
x++){var A=YDom.getElementsByClassName("close","li",u[x]);
if(A!=null&&A.length>0){var z=A[0];
var y=YEvent.getListeners(z,"click");
if(y==null||y.size==0){if((B!=undefined)&&B){YEvent.on(z,"click",o,u[x],true)
}else{YEvent.on(z,"click",w,u[x],true)
}}}else{A=YDom.getElementsByClassName("close","div",u[x]);
if(A!=null&&A.length>0){var z=A[0];
var y=YEvent.getListeners(z,"click");
if(y==null||y.size==0){if((B!=undefined)&&B){YEvent.on(z,"click",o,u[x],true)
}else{YEvent.on(z,"click",w,u[x],true)
}}}else{A=YDom.getElementsByClassName("close","a",u[x]);
if(A!=null&&A.length>0){var z=A[0];
var y=YEvent.getListeners(z,"click");
if(y==null||y.size==0){if((B!=undefined)&&B){YEvent.on(z,"click",o,u[x],true)
}else{YEvent.on(z,"click",w,u[x],true)
}}}}}}};
var v=function(y){if(LI.__HPA===true){console.info("HOMEPAGE_PERFORMANCE_ANALYSIS :: js/ajax/chameleon_service.js setupModules.minimizeModule()")
}var x=YDom.getFirstChild(this);
if(!YDom.hasClass(x,"open")){YDom.addClass(x,"open");
ChameleonService.expandApplication(1,1,ChameleonService.getAppInstanceID(this.id))
}else{YDom.removeClass(x,"open");
ChameleonService.collapseApplication(1,1,ChameleonService.getAppInstanceID(this.id))
}YEvent.preventDefault(y)
};
var c=function(){if(LI.__HPA===true){console.info("HOMEPAGE_PERFORMANCE_ANALYSIS :: js/ajax/chameleon_service.js setupModules.addMinimizeHandlers()")
}for(var x=0;
x<u.length;
x++){var z=u[x].getElementsByTagName("h4");
if(z!=null&&z.length>0){var A=z[0];
var y=YEvent.getListeners(A,"click");
if(y==null||y.size==0){YEvent.on(A,"click",v,u[x],true)
}}}};
var n=function(){if(LI.__HPA===true){console.info("HOMEPAGE_PERFORMANCE_ANALYSIS :: js/ajax/chameleon_service.js setupModules.initDragAndDrop()")
}var z=u;
for(var y=0;
y<z.length;
y++){var x=new DDList(z[y].id);
x.setHandleElId(z[y].id+"-header")
}};
var m="h4";
var a=function(x){if(LI.__HPA===true){console.info("HOMEPAGE_PERFORMANCE_ANALYSIS :: js/ajax/chameleon_service.js setupModules.addPeopleModule()")
}ChameleonService.addApplication(1,1,1,m);
YEvent.preventDefault(x)
};
var t=function(x){if(LI.__HPA===true){console.info("HOMEPAGE_PERFORMANCE_ANALYSIS :: js/ajax/chameleon_service.js setupModules.addReferralCenterModule()")
}ChameleonService.addNonOSApplicationOnNhome(1,1,11,m);
YEvent.preventDefault(x)
};
var e=function(A){if(LI.__HPA===true){console.info("HOMEPAGE_PERFORMANCE_ANALYSIS :: js/ajax/chameleon_service.js setupModules.addDirectModule()")
}var x=YEvent.getTarget(A);
if(x&&x.id){var z=x.id.split("_");
var y=z[1];
ChameleonService.addNonOSApplicationOnNhome(1,1,y,m)
}YEvent.preventDefault(A)
};
var i=function(x){if(LI.__HPA===true){console.info("HOMEPAGE_PERFORMANCE_ANALYSIS :: js/ajax/chameleon_service.js setupModules.addAnswersModule()")
}ChameleonService.addApplication(1,1,3,m);
YEvent.preventDefault(x)
};
var l=function(x){if(LI.__HPA===true){console.info("HOMEPAGE_PERFORMANCE_ANALYSIS :: js/ajax/chameleon_service.js setupModules.addLinkedInTestGadget()")
}ChameleonService.addGadget(1,1,400,m);
YEvent.preventDefault(x)
};
var g=function(y,x){if(LI.__HPA===true){console.info("HOMEPAGE_PERFORMANCE_ANALYSIS :: js/ajax/chameleon_service.js setupModules.addGadgetToPanel()")
}ChameleonService.addGadget(1,x.panel,x.app,m);
YEvent.preventDefault(y)
};
var s=function(y,x){if(LI.__HPA===true){console.info("HOMEPAGE_PERFORMANCE_ANALYSIS :: js/ajax/chameleon_service.js setupModules.addPeopleServiceTestsGadgetOnProfile()")
}ChameleonService.addGadget(1,3,500,m);
YEvent.preventDefault(y)
};
var q=function(x){if(LI.__HPA===true){console.info("HOMEPAGE_PERFORMANCE_ANALYSIS :: js/ajax/chameleon_service.js setupModules.addAddHandlers()")
}YEvent.on("add-people-module","click",a);
YEvent.on("add-answers-module","click",i);
YEvent.on("add-referralcenter-module","click",t);
var z=YDom.getElementsByClassName("add-direct-module");
for(var y=0;
y<z.length;
y++){YEvent.on(z[y],"click",e)
}};
return{initSlot:function(y,A,B){if(LI.__HPA===true){console.info("HOMEPAGE_PERFORMANCE_ANALYSIS :: js/ajax/chameleon_service.js setupModules.minimizeModule()")
}var z=YDom.get(y);
var x=YDom.getAncestorByClassName(z,"customizable");
if(x!=null){u=[z];
r(B);
h();
if(A){f();
d()
}else{j();
d()
}c();
n()
}else{var x=YDom.getAncestorByClassName(z,"applications");
if(x!=null){u=[z];
r(B);
h();
if(A){f()
}else{j()
}c()
}}},addGadgetToPanel:function(y,x){if(LI.__HPA===true){console.info("HOMEPAGE_PERFORMANCE_ANALYSIS :: js/ajax/chameleon_service.js setupModules.addGadgetToPanel()")
}ChameleonService.addGadget(1,x.panel,x.app,"h4");
YEvent.preventDefault(y)
},init:function(x,y){if(LI.__HPA===true){console.info("HOMEPAGE_PERFORMANCE_ANALYSIS :: js/ajax/chameleon_service.js setupModules.init()")
}if(y){m=y
}p=x;
q(x);
setupModules.addOSHandler(x)
}}
}();

/* js/opensocial/rpc.js */

var gadgets=gadgets||{};
gadgets.config=function(){if(LI.__HPA===true){console.info("HOMEPAGE_PERFORMANCE_ANALYSIS :: js/opensocial/rpc.js")
}var a=[];
return{register:function(d,c,b){var e=a[d];
if(!e){e=[];
a[d]=e
}e.push({validators:c||{},callback:b})
},get:function(b){if(b){return configuration[b]||{}
}return configuration
},init:function(d,m){configuration=d;
for(var b in a){if(a.hasOwnProperty(b)){var c=a[b],h=d[b];
for(var g=0,f=c.length;
g<f;
++g){var k=c[g];
if(h&&!m){var e=k.validators;
for(var l in e){if(e.hasOwnProperty(l)){if(!e[l](h[l])){throw new Error('Invalid config value "'+h[l]+'" for parameter "'+l+'" in component "'+b+'"')
}}}}if(k.callback){k.callback(d)
}}}}},EnumValidator:function(e){var d=[];
if(arguments.length>1){for(var c=0,b;
(b=arguments[c]);
++c){d.push(b)
}}else{d=e
}return function(g){for(var f=0,h;
(h=d[f]);
++f){if(g===d[f]){return true
}}}
},RegExValidator:function(b){return function(c){return b.test(c)
}
},ExistsValidator:function(b){return typeof b!=="undefined"
},NonEmptyStringValidator:function(b){return typeof b==="string"&&b.length>0
},BooleanValidator:function(b){return typeof b==="boolean"
},LikeValidator:function(b){return function(d){for(var e in b){if(b.hasOwnProperty(e)){var c=b[e];
if(!c(d[e])){return false
}}}return true
}
}}
}();
var gadgets=gadgets||{};
gadgets.log=function(a){gadgets.log.logAtLevel(gadgets.log.INFO,a)
};
gadgets.warn=function(a){gadgets.log.logAtLevel(gadgets.log.WARNING,a)
};
gadgets.error=function(a){gadgets.log.logAtLevel(gadgets.log.ERROR,a)
};
gadgets.setLogLevel=function(a){gadgets.log.logLevelThreshold_=a
};
gadgets.log.logAtLevel=function(d,c){if(d<gadgets.log.logLevelThreshold_||!gadgets.log._console){return
}var b;
var a=gadgets.log._console;
if(d==gadgets.log.WARNING&&a.warn){a.warn(c)
}else{if(d==gadgets.log.ERROR&&a.error){a.error(c)
}else{if(a.log){a.log(c)
}}}};
gadgets.log.INFO=1;
gadgets.log.WARNING=2;
gadgets.log.NONE=4;
gadgets.log.logLevelThreshold_=gadgets.log.INFO;
gadgets.log._console=window.console?window.console:window.opera?window.opera.postError:undefined;
var tamings___=tamings___||[];
tamings___.push(function(a){___.grantRead(gadgets.log,"INFO");
___.grantRead(gadgets.log,"WARNING");
___.grantRead(gadgets.log,"ERROR");
___.grantRead(gadgets.log,"NONE");
caja___.whitelistFuncs([[gadgets,"log"],[gadgets,"warn"],[gadgets,"error"],[gadgets,"setLogLevel"],[gadgets.log,"logAtLevel"],])
});
var gadgets=gadgets||{};
if(window.JSON&&window.JSON.parse&&window.JSON.stringify){gadgets.json={parse:function(b){try{return window.JSON.parse(b)
}catch(a){return false
}},stringify:function(b){try{return window.JSON.stringify(b)
}catch(a){return null
}}}
}else{gadgets.json=function(){function f(n){return n<10?"0"+n:n
}Date.prototype.toJSON=function(){return[this.getUTCFullYear(),"-",f(this.getUTCMonth()+1),"-",f(this.getUTCDate()),"T",f(this.getUTCHours()),":",f(this.getUTCMinutes()),":",f(this.getUTCSeconds()),"Z"].join("")
};
var m={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};
function stringify(value){var a,i,k,l,r=/["\\\x00-\x1f\x7f-\x9f]/g,v;
switch(typeof value){case"string":return r.test(value)?'"'+value.replace(r,function(a){var c=m[a];
if(c){return c
}c=a.charCodeAt();
return"\\u00"+Math.floor(c/16).toString(16)+(c%16).toString(16)
})+'"':'"'+value+'"';
case"number":return isFinite(value)?String(value):"null";
case"boolean":case"null":return String(value);
case"object":if(!value){return"null"
}a=[];
if(typeof value.length==="number"&&!value.propertyIsEnumerable("length")){l=value.length;
for(i=0;
i<l;
i+=1){a.push(stringify(value[i])||"null")
}return"["+a.join(",")+"]"
}for(k in value){if(k.match("___$")){continue
}if(value.hasOwnProperty(k)){if(typeof k==="string"){v=stringify(value[k]);
if(v){a.push(stringify(k)+":"+v)
}}}}return"{"+a.join(",")+"}"
}}return{stringify:stringify,parse:function(text){if(/^[\],:{}\s]*$/.test(text.replace(/\\["\\\/b-u]/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))){return eval("("+text+")")
}return false
}}
}()
}var tamings___=tamings___||[];
tamings___.push(function(a){caja___.whitelistFuncs([[gadgets.json,"parse"],[gadgets.json,"stringify"]])
});
var gadgets=gadgets||{};
gadgets.util=function(){function g(m){var n;
var k=m;
var i=k.indexOf("?");
var j=k.indexOf("#");
if(j===-1){n=k.substr(i+1)
}else{n=[k.substr(i+1,j-i-1),"&",k.substr(j+1)].join("")
}return n.split("&")
}var e=null;
var d={};
var c={};
var f=[];
var a={0:false,10:true,13:true,34:true,39:true,60:true,62:true,92:true,8232:true,8233:true};
function b(i,j){return String.fromCharCode(j)
}function h(i){d=i["core.util"]||{}
}if(gadgets.config){gadgets.config.register("core.util",null,h)
}return{getUrlParameters:function(s){if(e!==null&&typeof s==="undefined"){return e
}var o={};
e={};
var l=g(s||document.location.href);
var q=window.decodeURIComponent?decodeURIComponent:unescape;
for(var n=0,m=l.length;
n<m;
++n){var p=l[n].indexOf("=");
if(p===-1){continue
}var k=l[n].substring(0,p);
var r=l[n].substring(p+1);
r=r.replace(/\+/g," ");
o[k]=q(r)
}if(typeof s==="undefined"){e=o
}return o
},makeClosure:function(n,p,o){var m=[];
for(var l=2,k=arguments.length;
l<k;
++l){m.push(arguments[l])
}return function(){var q=m.slice();
for(var s=0,r=arguments.length;
s<r;
++s){q.push(arguments[s])
}return p.apply(n,q)
}
},makeEnum:function(k){var m={};
for(var l=0,j;
(j=k[l]);
++l){m[j]=j
}return m
},getFeatureParameters:function(i){return typeof d[i]==="undefined"?null:d[i]
},hasFeature:function(i){return typeof d[i]!=="undefined"
},getServices:function(){return c
},registerOnLoadHandler:function(i){f.push(i)
},runOnLoadHandlers:function(){for(var l=0,k=f.length;
l<k;
++l){f[l]()
}},escape:function(k,o){if(!k){return k
}else{if(typeof k==="string"){return gadgets.util.escapeString(k)
}else{if(typeof k==="array"){for(var n=0,l=k.length;
n<l;
++n){k[n]=gadgets.util.escape(k[n])
}}else{if(typeof k==="object"&&o){var m={};
for(var p in k){if(k.hasOwnProperty(p)){m[gadgets.util.escapeString(p)]=gadgets.util.escape(k[p],true)
}}return m
}}}}return k
},escapeString:function(o){var l=[],n,p;
for(var m=0,k=o.length;
m<k;
++m){n=o.charCodeAt(m);
p=a[n];
if(p===true){l.push("&#",n,";")
}else{if(p!==false){l.push(o.charAt(m))
}}}return l.join("")
},unescapeString:function(i){return i.replace(/&#([0-9]+);/g,b)
}}
}();
gadgets.util.getUrlParameters();
var tamings___=tamings___||[];
tamings___.push(function(a){caja___.whitelistFuncs([[gadgets.util,"escapeString"],[gadgets.util,"getFeatureParameters"],[gadgets.util,"hasFeature"],[gadgets.util,"registerOnLoadHandler"],[gadgets.util,"unescapeString"]])
});
var gadgets=gadgets||{};
gadgets.rpctx=gadgets.rpctx||{};
gadgets.rpctx.wpm=function(){var a;
return{getCode:function(){return"wpm"
},isParentVerifiable:function(){return true
},init:function(b,c){a=c;
var d=function(e){b(gadgets.json.parse(e.data))
};
if(typeof window.addEventListener!="undefined"){window.addEventListener("message",d,false)
}else{if(typeof window.attachEvent!="undefined"){window.attachEvent("onmessage",d)
}}a("..",true);
return true
},setup:function(c,b){if(c===".."){gadgets.rpc.call(c,gadgets.rpc.ACK)
}return true
},call:function(c,f,e){var d=c===".."?window.parent:window.frames[c];
var b=gadgets.rpc.getOrigin(gadgets.rpc.getRelayUrl(c));
if(b){d.postMessage(gadgets.json.stringify(e),b)
}else{gadgets.error("No relay set (used as window.postMessage targetOrigin)"+", cannot send cross-domain message")
}return true
}}
}();
var gadgets=gadgets||{};
gadgets.rpctx=gadgets.rpctx||{};
gadgets.rpctx.frameElement=function(){var e="__g2c_rpc";
var b="__c2g_rpc";
var d;
var c;
function a(g,k,j){try{if(k!==".."){var f=window.frameElement;
if(typeof f[e]==="function"){if(typeof f[e][b]!=="function"){f[e][b]=function(l){d(gadgets.json.parse(l))
}
}f[e](gadgets.json.stringify(j));
return
}}else{var i=document.getElementById(g);
if(typeof i[e]==="function"&&typeof i[e][b]==="function"){i[e][b](gadgets.json.stringify(j));
return
}}}catch(h){}return true
}return{getCode:function(){return"fe"
},isParentVerifiable:function(){return false
},init:function(f,g){d=f;
c=g;
return true
},setup:function(j,f){if(j!==".."){try{var i=document.getElementById(j);
i[e]=function(k){d(gadgets.json.parse(k))
}
}catch(h){return false
}}if(j===".."){c("..",true);
var g=function(){window.setTimeout(function(){gadgets.rpc.call(j,gadgets.rpc.ACK)
},500)
};
gadgets.util.registerOnLoadHandler(g)
}return true
},call:function(f,h,g){a(f,h,g)
}}
}();
var gadgets=gadgets||{};
gadgets.rpctx=gadgets.rpctx||{};
gadgets.rpctx.nix=function(){var c="GRPC____NIXVBS_wrapper";
var d="GRPC____NIXVBS_get_wrapper";
var f="GRPC____NIXVBS_handle_message";
var b="GRPC____NIXVBS_create_channel";
var a=10;
var j=500;
var i={};
var h;
var g=0;
function e(){var l=i[".."];
if(l){return
}if(++g>a){gadgets.warn("Nix transport setup failed, falling back...");
h("..",false);
return
}if(!l&&window.opener&&"GetAuthToken" in window.opener){l=window.opener;
if(l.GetAuthToken()==gadgets.rpc.getAuthToken("..")){var k=gadgets.rpc.getAuthToken("..");
l.CreateChannel(window[d]("..",k),k);
i[".."]=l;
window.opener=null;
h("..",true);
return
}}window.setTimeout(function(){e()
},j)
}return{getCode:function(){return"nix"
},isParentVerifiable:function(){return false
},init:function(l,m){h=m;
if(typeof window[d]!=="unknown"){window[f]=function(o){window.setTimeout(function(){l(gadgets.json.parse(o))
},0)
};
window[b]=function(o,q,p){if(gadgets.rpc.getAuthToken(o)===p){i[o]=q;
h(o,true)
}};
var k="Class "+c+"\n "+"Private m_Intended\n"+"Private m_Auth\n"+"Public Sub SetIntendedName(name)\n "+"If isEmpty(m_Intended) Then\n"+"m_Intended = name\n"+"End If\n"+"End Sub\n"+"Public Sub SetAuth(auth)\n "+"If isEmpty(m_Auth) Then\n"+"m_Auth = auth\n"+"End If\n"+"End Sub\n"+"Public Sub SendMessage(data)\n "+f+"(data)\n"+"End Sub\n"+"Public Function GetAuthToken()\n "+"GetAuthToken = m_Auth\n"+"End Function\n"+"Public Sub CreateChannel(channel, auth)\n "+"Call "+b+"(m_Intended, channel, auth)\n"+"End Sub\n"+"End Class\n"+"Function "+d+"(name, auth)\n"+"Dim wrap\n"+"Set wrap = New "+c+"\n"+"wrap.SetIntendedName name\n"+"wrap.SetAuth auth\n"+"Set "+d+" = wrap\n"+"End Function";
try{window.execScript(k,"vbscript")
}catch(n){return false
}}return true
},setup:function(o,k){if(o===".."){e();
return true
}try{var m=document.getElementById(o);
var n=window[d](o,k);
m.contentWindow.opener=n
}catch(l){return false
}return true
},call:function(k,n,m){try{if(i[k]){i[k].SendMessage(gadgets.json.stringify(m))
}}catch(l){return false
}return true
}}
}();
var gadgets=gadgets||{};
gadgets.rpctx=gadgets.rpctx||{};
gadgets.rpctx.rmr=function(){var g=500;
var e=10;
var h={};
var b;
var i;
function k(p,n,o,m){var q=function(){document.body.appendChild(p);
p.src="about:blank";
if(m){p.onload=function(){l(m)
}
}p.src=n+"#"+o
};
if(document.body){q()
}else{gadgets.util.registerOnLoadHandler(function(){q()
})
}}function c(o){if(typeof h[o]==="object"){return
}var p=document.createElement("iframe");
var m=p.style;
m.position="absolute";
m.top="0px";
m.border="0";
m.opacity="0";
m.width="10px";
m.height="1px";
p.id="rmrtransport-"+o;
p.name=p.id;
var n=gadgets.rpc.getOrigin(gadgets.rpc.getRelayUrl(o))+"/robots.txt";
h[o]={frame:p,receiveWindow:null,relayUri:n,searchCounter:0,width:10,waiting:true,queue:[],sendId:0,recvId:0};
if(o!==".."){k(p,n,a(o))
}d(o)
}function d(n){var p=null;
h[n].searchCounter++;
try{if(n===".."){p=window.parent.frames["rmrtransport-"+gadgets.rpc.RPC_ID]
}else{p=window.frames[n].frames["rmrtransport-.."]
}}catch(o){}var m=false;
if(p){m=f(n,p)
}if(!m){if(h[n].searchCounter>e){return
}window.setTimeout(function(){d(n)
},g)
}}function j(n,p,t,s){var o=null;
if(t!==".."){o=h[".."]
}else{o=h[n]
}if(o){if(p!==gadgets.rpc.ACK){o.queue.push(s)
}if(o.waiting||(o.queue.length===0&&!(p===gadgets.rpc.ACK&&s&&s.ackAlone===true))){return true
}if(o.queue.length>0){o.waiting=true
}var m=o.relayUri+"#"+a(n);
try{o.frame.contentWindow.location=m;
var q=o.width==10?20:10;
o.frame.style.width=q+"px";
o.width=q
}catch(r){return false
}}return true
}function a(n){var o=h[n];
var m={id:o.sendId};
if(o){m.d=Array.prototype.slice.call(o.queue,0);
m.d.push({s:gadgets.rpc.ACK,id:o.recvId})
}return gadgets.json.stringify(m)
}function l(x){var u=h[x];
var q=u.receiveWindow.location.hash.substring(1);
var y=gadgets.json.parse(decodeURIComponent(q))||{};
var n=y.d||[];
var o=false;
var t=false;
var v=0;
var m=(u.recvId-y.id);
for(var p=0;
p<n.length;
++p){var s=n[p];
if(s.s===gadgets.rpc.ACK){i(x,true);
if(u.waiting){t=true
}u.waiting=false;
var r=Math.max(0,s.id-u.sendId);
u.queue.splice(0,r);
u.sendId=Math.max(u.sendId,s.id||0);
continue
}o=true;
if(++v<=m){continue
}++u.recvId;
b(s)
}if(o||(t&&u.queue.length>0)){var w=(x==="..")?gadgets.rpc.RPC_ID:"..";
j(x,gadgets.rpc.ACK,w,{ackAlone:o})
}}function f(p,s){var o=h[p];
try{var n=false;
n="document" in s;
if(!n){return false
}n=typeof s["document"]=="object";
if(!n){return false
}var r=s.location.href;
if(r==="about:blank"){return false
}}catch(m){return false
}o.receiveWindow=s;
function q(){l(p)
}if(typeof s.attachEvent==="undefined"){s.onresize=q
}else{s.attachEvent("onresize",q)
}if(p===".."){k(o.frame,o.relayUri,a(p),p)
}else{l(p)
}return true
}return{getCode:function(){return"rmr"
},isParentVerifiable:function(){return true
},init:function(m,n){b=m;
i=n;
return true
},setup:function(o,m){try{c(o)
}catch(n){gadgets.warn("Caught exception setting up RMR: "+n);
return false
}return true
},call:function(m,o,n){return j(m,n.s,o,n)
}}
}();
var gadgets=gadgets||{};
gadgets.rpctx=gadgets.rpctx||{};
gadgets.rpctx.ifpc=function(){var e=[];
var d=0;
var c;
function b(h){var f=[];
for(var k=0,g=h.length;
k<g;
++k){f.push(encodeURIComponent(gadgets.json.stringify(h[k])))
}return f.join("&")
}function a(j){var g;
for(var f=e.length-1;
f>=0;
--f){var k=e[f];
try{if(k&&(k.recyclable||k.readyState==="complete")){k.parentNode.removeChild(k);
if(window.ActiveXObject){e[f]=k=null;
e.splice(f,1)
}else{k.recyclable=false;
g=k;
break
}}}catch(h){}}if(!g){g=document.createElement("iframe");
g.style.border=g.style.width=g.style.height="0px";
g.style.visibility="hidden";
g.style.position="absolute";
g.onload=function(){this.recyclable=true
};
e.push(g)
}g.src=j;
window.setTimeout(function(){document.body.appendChild(g)
},0)
}return{getCode:function(){return"ifpc"
},isParentVerifiable:function(){return true
},init:function(f,g){c=g;
c("..",true);
return true
},setup:function(g,f){c(g,true);
return true
},call:function(f,k,i){var j=gadgets.rpc.getRelayUrl(f);
++d;
if(!j){gadgets.warn("No relay file assigned for IFPC");
return
}var h=null;
if(i.l){var g=i.a;
h=[j,"#",b([k,d,1,0,b([k,i.s,"","",k].concat(g))])].join("")
}else{h=[j,"#",f,"&",k,"@",d,"&1&0&",encodeURIComponent(gadgets.json.stringify(i))].join("")
}a(h);
return true
}}
}();
var gadgets=gadgets||{};
gadgets.rpc=function(){var s="__cb";
var r="";
var g="__ack";
var q=500;
var i=10;
var b={};
var c={};
var w={};
var j={};
var m=0;
var H={};
var v={};
var d={};
var E={};
var k={};
var u={};
var l=(window.top!==window.self);
var n=window.name;
var F=(function(){function I(J){return function(){gadgets.log("gadgets.rpc."+J+"("+gadgets.json.stringify(Array.prototype.slice.call(arguments))+"): call ignored. [caller: "+document.location+", isChild: "+l+"]")
}
}return{getCode:function(){return"noop"
},isParentVerifiable:function(){return true
},init:I("init"),setup:I("setup"),call:I("call")}
})();
if(gadgets.util){E=gadgets.util.getUrlParameters()
}var z=(E["rpc_earlyq"]==="1");
function a(){return typeof window.postMessage==="function"?gadgets.rpctx.wpm:typeof window.postMessage==="object"?gadgets.rpctx.wpm:window.ActiveXObject?gadgets.rpctx.ifpc:navigator.userAgent.indexOf("WebKit")>0?gadgets.rpctx.rmr:navigator.product==="Gecko"?gadgets.rpctx.frameElement:gadgets.rpctx.ifpc
}function A(N,L){var J=B;
if(!L){J=F
}k[N]=J;
var I=u[N]||[];
for(var K=0;
K<I.length;
++K){var M=I[K];
M.t=x(N);
J.call(N,M.f,M)
}u[N]=[]
}function t(J){if(J&&typeof J.s==="string"&&typeof J.f==="string"&&J.a instanceof Array){if(j[J.f]){if(j[J.f]!==J.t){throw new Error("Invalid auth token. "+j[J.f]+" vs "+J.t)
}}if(J.s===g){window.setTimeout(function(){A(J.f,true)
},0);
return
}if(J.c){J.callback=function(K){gadgets.rpc.call(J.f,s,null,J.c,K)
}
}var I=(b[J.s]||b[r]).apply(J,J.a);
if(J.c&&typeof I!=="undefined"){gadgets.rpc.call(J.f,s,null,J.c,I)
}}}function D(K){if(!K){return""
}K=K.toLowerCase();
if(K.indexOf("//")==0){K=window.location.protocol+K
}if(K.indexOf("://")==-1){K=window.location.protocol+"//"+K
}var L=K.substring(K.indexOf("://")+3);
var I=L.indexOf("/");
if(I!=-1){L=L.substring(0,I)
}var N=K.substring(0,K.indexOf("://"));
var M="";
var O=L.indexOf(":");
if(O!=-1){var J=L.substring(O+1);
L=L.substring(0,O);
if((N==="http"&&J!=="80")||(N==="https"&&J!=="443")){M=":"+J
}}return N+"://"+L+M
}var B=a();
b[r]=function(){gadgets.warn("Unknown RPC service: "+this.s)
};
b[s]=function(J,I){var K=H[J];
if(K){delete H[J];
K(I)
}};
function o(K,I){if(v[K]===true){return
}if(typeof v[K]==="undefined"){v[K]=0
}var J=document.getElementById(K);
if(K===".."||J!=null){if(B.setup(K,I)===true){v[K]=true;
return
}}if(v[K]!==true&&v[K]++<i){window.setTimeout(function(){o(K,I)
},q)
}else{k[K]=F;
v[K]=true
}}function f(J,M){if(typeof d[J]==="undefined"){d[J]=false;
var L=gadgets.rpc.getRelayUrl(J);
if(D(L)!==D(window.location.href)){return false
}var K=null;
if(J===".."){K=window.parent
}else{K=window.frames[J]
}try{d[J]=K.gadgets.rpc.receiveSameDomain
}catch(I){gadgets.error("Same domain call failed: parent= incorrectly set.")
}}if(typeof d[J]==="function"){d[J](M);
return true
}return false
}function h(J,I,K){c[J]=I;
w[J]=!!K
}function x(I){return j[I]
}function e(I,J){J=J||"";
j[I]=String(J);
o(I,J)
}function p(I){function K(N){var P=N?N.rpc:{};
var M=P.parentRelayUrl;
if(M.substring(0,7)!=="http://"&&M.substring(0,8)!=="https://"&&M.substring(0,2)!=="//"){if(typeof E.parent==="string"&&E.parent!==""){if(M.substring(0,1)!=="/"){var L=E.parent.lastIndexOf("/");
M=E.parent.substring(0,L+1)+M
}else{M=D(E.parent)+M
}}}var O=!!P.useLegacyProtocol;
h("..",M,O);
if(O){B=gadgets.rpctx.ifpc;
B.init(t,A)
}e("..",I)
}var J={parentRelayUrl:gadgets.config.NonEmptyStringValidator};
gadgets.config.register("rpc",J,K)
}function y(K,I){var J=I||E.parent;
if(J){h("..",J);
e("..",K)
}}function C(I,M,O){if(!gadgets.util){return
}var L=document.getElementById(I);
if(!L){throw new Error("Cannot set up gadgets.rpc receiver with ID: "+I+", element not found.")
}var J=M||L.src;
h(I,J);
var N=gadgets.util.getUrlParameters(L.src);
var K=O||N.rpctoken;
e(I,K)
}function G(I,K,L){if(I===".."){var J=L||E.rpctoken||E.ifpctok||"";
if(gadgets.config){p(J)
}else{y(J,K)
}}else{C(I,K,L)
}}if(l){G("..")
}return{register:function(J,I){if(J===s||J===g){throw new Error("Cannot overwrite callback/ack service")
}if(J===r){throw new Error("Cannot overwrite default service:"+" use registerDefault")
}b[J]=I
},unregister:function(I){if(I===s||I===g){throw new Error("Cannot delete callback/ack service")
}if(I===r){throw new Error("Cannot delete default service:"+" use unregisterDefault")
}delete b[I]
},registerDefault:function(I){b[r]=I
},unregisterDefault:function(){delete b[r]
},forceParentVerifiable:function(){if(!B.isParentVerifiable()){B=gadgets.rpctx.ifpc
}},call:function(I,J,O,M){I=I||"..";
var N="..";
if(I===".."){N=n
}++m;
if(O){H[m]=O
}var L={s:J,f:N,c:O?m:0,a:Array.prototype.slice.call(arguments,3),t:j[I],l:w[I]};
if(f(I,L)){return
}var K=k[I]?k[I]:B;
if(!K){if(!u[I]){u[I]=[L]
}else{u[I].push(L)
}return
}if(w[I]){K=gadgets.rpctx.ifpc
}if(K.call(I,N,L)===false){k[I]=F;
B.call(I,N,L)
}},getRelayUrl:function(J){var I=c[J];
if(I&&I.indexOf("//")==0){I=document.location.protocol+I
}return I
},setRelayUrl:h,setAuthToken:e,setupReceiver:G,getAuthToken:x,getRelayChannel:function(){return B.getCode()
},receive:function(I){if(I.length>4){t(gadgets.json.parse(decodeURIComponent(I[I.length-1])))
}},receiveSameDomain:function(I){I.a=Array.prototype.slice.call(I.a);
window.setTimeout(function(){t(I)
},0)
},getOrigin:D,init:function(){if(B.init(t,A)===false){B=F
}},ACK:g,RPC_ID:n}
}();
gadgets.rpc.init();

/* js/opensocial/util.js */

Function.prototype.inherits=function(a){if(LI.__HPA===true){console.info("HOMEPAGE_PERFORMANCE_ANALYSIS :: js/opensocial/util.js")
}function b(){}b.prototype=a.prototype;
this.superClass_=a.prototype;
this.prototype=new b();
this.prototype.constructor=this
};

/* js/opensocial/gadgets.js */

var gadgets=gadgets||{};
gadgets.errors=gadgets.errors||{};
gadgets.errors.SUBCLASS_RESPONSIBILITY="subclass responsibility";
gadgets.errors.TO_BE_DONE="to be done";
gadgets.callAsyncAndJoin=function(e,a,d){var f=e.length;
var c=[];
for(var b=0;
b<e.length;
b++){var g=function(h){e[h].call(d,function(i){c[h]=i;
if(--f===0){a(c)
}})
};
g(b)
}};
gadgets.Extensible=function(){if(LI.__HPA===true){console.info("HOMEPAGE_PERFORMANCE_ANALYSIS :: js/opensocial/gadgets.js gadgets.Extensible")
}};
gadgets.Extensible.prototype.setDependencies=function(a){for(var b in a){this[b]=a[b]
}};
gadgets.Extensible.prototype.getDependencies=function(a){return this[a]
};
gadgets.UserPrefStore=function(){if(LI.__HPA===true){console.info("HOMEPAGE_PERFORMANCE_ANALYSIS :: js/opensocial/gadgets.js gadgets.UserPrefStore")
}};
gadgets.UserPrefStore.prototype.getPrefs=function(a){throw Error(gadgets.error.SUBCLASS_RESPONSIBILITY)
};
gadgets.UserPrefStore.prototype.savePrefs=function(a){throw Error(gadgets.error.SUBCLASS_RESPONSIBILITY)
};
gadgets.DefaultUserPrefStore=function(){if(LI.__HPA===true){console.info("HOMEPAGE_PERFORMANCE_ANALYSIS :: js/opensocial/gadgets.js gadgets.DefaultUserPrefStore")
}gadgets.UserPrefStore.call(this)
};
gadgets.DefaultUserPrefStore.inherits(gadgets.UserPrefStore);
gadgets.DefaultUserPrefStore.prototype.getPrefs=function(a){};
gadgets.DefaultUserPrefStore.prototype.savePrefs=function(a){};
gadgets.GadgetService=function(){if(LI.__HPA===true){console.info("HOMEPAGE_PERFORMANCE_ANALYSIS :: js/opensocial/gadgets.js gadgets.GadgetService")
}};
gadgets.GadgetService.prototype.setHeight=function(b,a){throw Error(gadgets.error.SUBCLASS_RESPONSIBILITY)
};
gadgets.GadgetService.prototype.setTitle=function(a,b){throw Error(gadgets.error.SUBCLASS_RESPONSIBILITY)
};
gadgets.GadgetService.prototype.setUserPref=function(a){throw Error(gadgets.error.SUBCLASS_RESPONSIBILITY)
};
gadgets.IfrGadgetService=function(){if(LI.__HPA===true){console.info("HOMEPAGE_PERFORMANCE_ANALYSIS :: js/opensocial/gadgets.js gadgets.IfrGadgetService")
}gadgets.GadgetService.call(this);
gadgets.rpc.register("resize_iframe",this.setHeight);
gadgets.rpc.register("set_pref",this.setUserPref);
gadgets.rpc.register("set_title",this.setTitle);
gadgets.rpc.register("requestNavigateTo",this.requestNavigateTo)
};
gadgets.IfrGadgetService.inherits(gadgets.GadgetService);
gadgets.IfrGadgetService.prototype.setHeight=function(a){var c,b;
var d="cannot find div for ";
if(a>gadgets.container.maxheight_){a=gadgets.container.maxheight_
}if(gadgets.container.view_==="profile"){b=this.f.replace(/-remote/,"");
c=document.getElementById(b);
if(c){if(a===0){c.style.display="none"
}else{c.style.display="";
c.style.visibility="";
c.style.position="";
c.style.left=""
}}else{gadgets.log(d+b)
}}c=document.getElementById(this.f);
if(c){c.style.height=a+"px"
}else{gadgets.log(d+this.f)
}};
gadgets.IfrGadgetService.prototype.setTitle=function(b){var a=document.getElementById(this.f+"_title");
if(a){a.innerHTML=b.replace(/&/g,"&amp;").replace(/</g,"&lt;")
}};
gadgets.IfrGadgetService.prototype.setUserPref=function(h,c,e){var g=gadgets.container.gadgetService.getGadgetIdFromModuleId(this.f);
var f=gadgets.container.getGadget(g);
var b=f.getUserPrefs()||{};
for(var d=1,a=arguments.length;
d<a;
d+=2){b[arguments[d]]=arguments[d+1]
}f.setUserPrefs(b)
};
gadgets.IfrGadgetService.prototype.requestNavigateTo=function(a,d){var e=gadgets.container.gadgetService.getGadgetIdFromModuleId(this.f);
var b=gadgets.container.gadgetService.getUrlForView(a);
if(d){var c=gadgets.json.stringify(d);
if(c.length>0){b+="&appParams="+encodeURIComponent(c)
}}if(b&&document.location.href.indexOf(b)==-1){document.location.href=b
}};
gadgets.IfrGadgetService.prototype.getUrlForView=function(a){if(a==="canvas"){return"/canvas"
}else{if(a==="profile"){return"/profile"
}else{return null
}}};
gadgets.IfrGadgetService.prototype.getGadgetIdFromModuleId=function(a){return parseInt(a.match(/_([0-9]+)$/)[1],10)
};
gadgets.LayoutManager=function(){if(LI.__HPA===true){console.info("HOMEPAGE_PERFORMANCE_ANALYSIS :: js/opensocial/gadgets.js gadgets.LayoutManager")
}};
gadgets.LayoutManager.prototype.getGadgetChrome=function(a){throw Error(gadgets.errors.SUBCLASS_RESPONSIBILITY)
};
gadgets.StaticLayoutManager=function(){if(LI.__HPA===true){console.info("HOMEPAGE_PERFORMANCE_ANALYSIS :: js/opensocial/gadgets.js gadgets.StaticLayoutManager")
}gadgets.LayoutManager.call(this)
};
gadgets.StaticLayoutManager.inherits(gadgets.LayoutManager);
gadgets.StaticLayoutManager.prototype.setGadgetChromeIds=function(a){this.gadgetChromeIds_=a
};
gadgets.StaticLayoutManager.prototype.getGadgetChrome=function(b){var a=this.gadgetChromeIds_[b.id];
return a?document.getElementById(a):null
};
gadgets.FloatLeftLayoutManager=function(a){if(LI.__HPA===true){console.info("HOMEPAGE_PERFORMANCE_ANALYSIS :: js/opensocial/gadgets.js gadgets.FloatLeftLayoutManager")
}gadgets.LayoutManager.call(this);
this.layoutRootId_=a
};
gadgets.FloatLeftLayoutManager.inherits(gadgets.LayoutManager);
gadgets.FloatLeftLayoutManager.prototype.getGadgetChrome=function(c){var b=document.getElementById(this.layoutRootId_);
if(b){var a=document.createElement("div");
a.className="gadgets-gadget-chrome";
a.style.cssFloat="left";
b.appendChild(a);
return a
}else{return null
}};
gadgets.Gadget=function(b){if(LI.__HPA===true){console.info("HOMEPAGE_PERFORMANCE_ANALYSIS :: js/opensocial/gadgets.js gadgets.Gadget")
}this.userPrefs_={};
if(b){for(var a in b){if(b.hasOwnProperty(a)){this[a]=b[a]
}}}};
gadgets.Gadget.prototype.getUserPrefs=function(){return this.userPrefs_
};
gadgets.Gadget.prototype.setUserPrefs=function(a){this.userPrefs_=a;
gadgets.container.userPrefStore.savePrefs(this)
};
gadgets.Gadget.prototype.getUserPref=function(a){return this.userPrefs_[a]
};
gadgets.Gadget.prototype.setUserPref=function(a,b){this.userPrefs_[a]=b;
gadgets.container.userPrefStore.savePrefs(this)
};
gadgets.Gadget.prototype.render=function(a){if(a){var b=this;
this.getContent(function(c){a.innerHTML=c;
window.frames[b.getIframeId()].location.replace(b.getIframeUrl())
})
}};
gadgets.Gadget.prototype.getContent=function(a){gadgets.callAsyncAndJoin([this.getTitleBarContent,this.getUserPrefsDialogContent,this.getMainContent],function(b){a(b.join(""))
},this)
};
gadgets.Gadget.prototype.getTitleBarContent=function(a){throw Error(gadgets.errors.SUBCLASS_RESPONSIBILITY)
};
gadgets.Gadget.prototype.getUserPrefsDialogContent=function(a){throw Error(gadgets.errors.SUBCLASS_RESPONSIBILITY)
};
gadgets.Gadget.prototype.getMainContent=function(a){throw Error(gadgets.errors.SUBCLASS_RESPONSIBILITY)
};
gadgets.Gadget.prototype.getAdditionalParams=function(){return""
};
gadgets.IfrGadget=function(a){if(LI.__HPA===true){console.info("HOMEPAGE_PERFORMANCE_ANALYSIS :: js/opensocial/gadgets.js gadgets.IfrGadget")
}gadgets.Gadget.call(this,a);
this.serverBase_="../../"
};
gadgets.IfrGadget.inherits(gadgets.Gadget);
gadgets.IfrGadget.prototype.GADGET_IFRAME_PREFIX_="remote_iframe_";
gadgets.IfrGadget.prototype.CONTAINER="default";
gadgets.IfrGadget.prototype.cssClassGadget="gadgets-gadget";
gadgets.IfrGadget.prototype.cssClassTitleBar="gadgets-gadget-title-bar";
gadgets.IfrGadget.prototype.cssClassTitle="gadgets-gadget-title";
gadgets.IfrGadget.prototype.cssClassTitleButtonBar="gadgets-gadget-title-button-bar";
gadgets.IfrGadget.prototype.cssClassGadgetUserPrefsDialog="gadgets-gadget-user-prefs-dialog";
gadgets.IfrGadget.prototype.cssClassGadgetUserPrefsDialogActionBar="gadgets-gadget-user-prefs-dialog-action-bar";
gadgets.IfrGadget.prototype.cssClassTitleButton="gadgets-gadget-title-button";
gadgets.IfrGadget.prototype.cssClassGadgetContent="gadgets-gadget-content";
gadgets.IfrGadget.prototype.rpcToken=(2147483647*Math.random())|0;
gadgets.IfrGadget.prototype.rpcRelay="files/container/rpc_relay.html";
gadgets.IfrGadget.prototype.getTitleBarContent=function(a){a('<div id="'+this.cssClassTitleBar+"-"+this.id+'" class="'+this.cssClassTitleBar+'"><span id="'+this.getIframeId()+'_title" class="'+this.cssClassTitle+'">'+(this.title?this.title:"Title")+'</span> | <span class="'+this.cssClassTitleButtonBar+'"><a href="#" onclick="gadgets.container.getGadget('+this.id+').handleOpenUserPrefsDialog();return false;" class="'+this.cssClassTitleButton+'">settings</a> <a href="#" onclick="gadgets.container.getGadget('+this.id+').handleToggle();return false;" class="'+this.cssClassTitleButton+'">toggle</a></span></div>')
};
gadgets.IfrGadget.prototype.getUserPrefsDialogContent=function(a){a('<div id="'+this.getUserPrefsDialogId()+'" class="'+this.cssClassGadgetUserPrefsDialog+'"></div>')
};
gadgets.IfrGadget.prototype.setServerBase=function(a){this.serverBase_=a
};
gadgets.IfrGadget.prototype.getServerBase=function(){return this.serverBase_
};
gadgets.resetFrame=function(a){if(LI.__HPA===true){console.info("HOMEPAGE_PERFORMANCE_ANALYSIS :: js/opensocial/gadgets.js gadgets.resetFrame")
}};
gadgets.IfrGadget.prototype.getMainContent=function(a){var b=this.getIframeId();
gadgets.rpc.setRelayUrl(b,this.serverBase_+this.rpcRelay);
gadgets.rpc.setAuthToken(b,this.rpcToken);
a('<div class="'+this.cssClassGadgetContent+'"><iframe id="'+b+'" name="'+b+'" class="'+this.cssClassGadget+'" src="about:blank'+'" frameborder="no" scrolling="no"'+(this.height?' height="'+this.height+'"':"")+' onload="gadgets.resetFrame(this);" '+(this.width?' width="'+this.width+'"':"")+"></iframe></div>")
};
gadgets.IfrGadget.prototype.getIframeId=function(){return this.GADGET_IFRAME_PREFIX_+this.id
};
gadgets.IfrGadget.prototype.getUserPrefsDialogId=function(){return this.getIframeId()+"_userPrefsDialog"
};
gadgets.IfrGadget.prototype.getIframeUrl=function(){return this.serverBase_+"ifr?"+"container="+this.CONTAINER+"&mid="+this.id+"&nocache="+gadgets.container.nocache_+"&urlToCanvasView="+encodeURIComponent(this.urlToCanvasView)+"&signedUrlToCanvasView="+encodeURIComponent(this.signedUrlToCanvasView)+"&country="+gadgets.container.country_+"&lang="+gadgets.container.language_+"&view="+gadgets.container.view_+(this.specVersion?"&v="+this.specVersion:"")+(gadgets.container.parentUrl_?"&parent="+encodeURIComponent(gadgets.container.parentUrl_):"")+(this.debug?"&debug=1":"")+this.getAdditionalParams()+this.getUserPrefsParams()+(this.secureToken?"&st="+this.secureToken:"")+"#rpctoken="+this.rpcToken+(this.viewParams?"&view-params="+encodeURIComponent(gadgets.json.stringify(this.viewParams)):"")+(this.hashData?"&"+this.hashData:"")
};
gadgets.IfrGadget.prototype.getUserPrefsParams=function(){var c="";
if(this.getUserPrefs()){for(var a in this.getUserPrefs()){var b=this.getUserPref(a);
c+="&up_"+encodeURIComponent(a)+"="+encodeURIComponent(b)
}}return c
};
gadgets.IfrGadget.prototype.handleToggle=function(){var b=document.getElementById(this.getIframeId());
if(b){var a=b.parentNode;
var c=a.style.display;
a.style.display=c?"":"none"
}};
gadgets.IfrGadget.prototype.handleOpenUserPrefsDialog=function(){if(this.userPrefsDialogContentLoaded){this.showUserPrefsDialog()
}else{var c=this;
var b="ig_callback_"+this.id;
window[b]=function(d){c.userPrefsDialogContentLoaded=true;
c.buildUserPrefsDialog(d);
c.showUserPrefsDialog()
};
var a=document.createElement("script");
a.src="http://gmodules.com/ig/gadgetsettings?url="+this.specUrl+"&mid="+this.id+"&output=js"+this.getUserPrefsParams();
document.body.appendChild(a)
}};
gadgets.IfrGadget.prototype.buildUserPrefsDialog=function(a){var b=document.getElementById(this.getUserPrefsDialogId());
b.innerHTML=a+'<div class="'+this.cssClassGadgetUserPrefsDialogActionBar+'"><input type="button" value="Save" onclick="gadgets.container.getGadget('+this.id+').handleSaveUserPrefs()"> <input type="button" value="Cancel" onclick="gadgets.container.getGadget('+this.id+').handleCancelUserPrefs()"></div>';
b.childNodes[0].style.display=""
};
gadgets.IfrGadget.prototype.showUserPrefsDialog=function(a){var b=document.getElementById(this.getUserPrefsDialogId());
b.style.display=(a||a===undefined)?"":"none"
};
gadgets.IfrGadget.prototype.hideUserPrefsDialog=function(){this.showUserPrefsDialog(false)
};
gadgets.IfrGadget.prototype.handleSaveUserPrefs=function(){this.hideUserPrefsDialog();
var d={};
var a=document.getElementById("m_"+this.id+"_numfields").value;
for(var e=0;
e<a;
e++){var b=document.getElementById("m_"+this.id+"_"+e);
if(b.type!="hidden"){var g="m_"+this.id+"_up_";
var c=b.name.substring(g.length);
var f=b.value;
d[c]=f
}}this.setUserPrefs(d);
this.refresh()
};
gadgets.IfrGadget.prototype.handleCancelUserPrefs=function(){this.hideUserPrefsDialog()
};
gadgets.IfrGadget.prototype.refresh=function(){var a=this.getIframeId();
document.getElementById(a).src=this.getIframeUrl()
};
gadgets.Container=function(){if(LI.__HPA===true){console.info("HOMEPAGE_PERFORMANCE_ANALYSIS :: js/opensocial/gadgets.js gadgets.Container")
}this.gadgets_={};
this.parentUrl_="http://"+document.location.host;
this.country_="ALL";
this.language_="ALL";
this.view_="default";
this.nocache_=0;
this.maxheight_=2147483647
};
gadgets.Container.inherits(gadgets.Extensible);
gadgets.Container.prototype.gadgetClass=gadgets.Gadget;
gadgets.Container.prototype.userPrefStore=new gadgets.DefaultUserPrefStore();
gadgets.Container.prototype.gadgetService=new gadgets.GadgetService();
gadgets.Container.prototype.layoutManager=new gadgets.StaticLayoutManager();
gadgets.Container.prototype.setParentUrl=function(a){this.parentUrl_=a
};
gadgets.Container.prototype.setCountry=function(a){this.country_=a
};
gadgets.Container.prototype.setNoCache=function(a){this.nocache_=a
};
gadgets.Container.prototype.setLanguage=function(a){this.language_=a
};
gadgets.Container.prototype.setView=function(a){this.view_=a
};
gadgets.Container.prototype.setMaxHeight=function(a){this.maxheight_=a
};
gadgets.Container.prototype.getGadgetKey_=function(a){return"gadget_"+a
};
gadgets.Container.prototype.getGadget=function(a){return this.gadgets_[this.getGadgetKey_(a)]
};
gadgets.Container.prototype.createGadget=function(a){return new this.gadgetClass(a)
};
gadgets.Container.prototype.addGadget=function(a){a.id=this.getNextGadgetInstanceId();
a.setUserPrefs(this.userPrefStore.getPrefs(a));
this.gadgets_[this.getGadgetKey_(a.id)]=a
};
gadgets.Container.prototype.addGadgets=function(a){for(var b=0;
b<a.length;
b++){this.addGadget(a[b])
}};
gadgets.Container.prototype.renderGadgets=function(){for(var a in this.gadgets_){this.renderGadget(this.gadgets_[a])
}};
gadgets.Container.prototype.renderGadget=function(a){throw Error(gadgets.errors.SUBCLASS_RESPONSIBILITY)
};
gadgets.Container.prototype.nextGadgetInstanceId_=0;
gadgets.Container.prototype.getNextGadgetInstanceId=function(){return this.nextGadgetInstanceId_++
};
gadgets.Container.prototype.refreshGadgets=function(){for(var a in this.gadgets_){this.gadgets_[a].refresh()
}};
gadgets.IfrContainer=function(){if(LI.__HPA===true){console.info("HOMEPAGE_PERFORMANCE_ANALYSIS :: js/opensocial/gadgets.js gadgets.IfrContainer")
}gadgets.Container.call(this)
};
gadgets.IfrContainer.inherits(gadgets.Container);
gadgets.IfrContainer.prototype.gadgetClass=gadgets.IfrGadget;
gadgets.IfrContainer.prototype.gadgetService=new gadgets.IfrGadgetService();
gadgets.IfrContainer.prototype.setParentUrl=function(a){if(!a.match(/^http[s]?:\/\//)){a=document.location.href.match(/^[^?#]+\//)[0]+a
}this.parentUrl_=a
};
gadgets.IfrContainer.prototype.renderGadget=function(b){var a=this.layoutManager.getGadgetChrome(b);
b.render(a)
};
gadgets.container=new gadgets.IfrContainer();

/* js/opensocial/gadget_container.js */

gadgets.ChameleonLayoutManager=function(a){if(LI.__HPA===true){console.info("HOMEPAGE_PERFORMANCE_ANALYSIS :: js/opensocial/gadget_container.js gadgets.ChameleonLayoutManager")
}gadgets.StaticLayoutManager.call(this,a);
this.gadgetChromeMap_=new Array()
};
gadgets.ChameleonLayoutManager.inherits(gadgets.StaticLayoutManager);
gadgets.ChameleonLayoutManager.prototype.addGadgetChrome=function(b,a){this.gadgetChromeMap_[b]=a
};
gadgets.ChameleonLayoutManager.prototype.getGadgetChrome=function(b){var a=this.gadgetChromeMap_[b.id];
return a?document.getElementById(a):null
};
gadgets.ChameleonGadget=function(a){if(LI.__HPA===true){console.info("HOMEPAGE_PERFORMANCE_ANALYSIS :: js/opensocial/gadget_container.js gadgets.ChameleonGadget")
}gadgets.IfrGadget.call(this,a);
this.pageID_=0;
this.panelID_=0;
this.appID_=0
};
gadgets.ChameleonGadget.prototype.getPageID=function(){return this.pageID_
};
gadgets.ChameleonGadget.prototype.getPanelID=function(){return this.panelID_
};
gadgets.ChameleonGadget.prototype.getAppID=function(){return this.appID_
};
gadgets.ChameleonGadget.inherits(gadgets.IfrGadget);
gadgets.ChameleonGadget.prototype.cssClassGadgetContent="content";
gadgets.ChameleonGadget.prototype.cssClassTitleBar="header";
gadgets.ChameleonGadget.prototype.GADGET_IFRAME_PREFIX_="";
gadgets.ChameleonGadget.prototype.rpcRelay="js/opensocial/rpc_relay.html";
gadgets.ChameleonGadget.prototype.getIframeId=function(){return"panel-0"+this.panelID_+"-slot-"+this.appID_+"-remote"
};
gadgets.ChameleonGadget.prototype.getTitleBarContent=function(c){var d="";
var b=gadgets.container.view_?gadgets.container.view_.split(".")[0]:"";
var a,e;
if(LI&&LI.i18n){a=LI.i18.get("profile-view-remove");
e=LI.i18.get("profile-view-close")
}if(b=="canvas"){c("")
}else{if(b=="profile"){c('<div class="'+this.cssClassTitleBar+'" id="'+this.getTitleBarId()+'"><h3><strong id="'+"panel-0"+this.panelID_+"-slot-"+this.appID_+'-remote-title">'+(this.title?this.title:d)+'</strong> <span class="edit">[ <a class="close" href="#">'+(a?a:"Remove")+"</a> ]</span></h3></div>")
}else{c('<div class="'+this.cssClassTitleBar+'" id="'+this.getTitleBarId()+'"><h4 title="'+(this.title?this.title:d)+'"><strong id="'+"panel-0"+this.panelID_+"-slot-"+this.appID_+'-remote-title">'+(this.title?this.title:d)+"</strong></h4>"+'<ul><li class="close"><a href="#">'+(e?e:"Close")+"</a></li></ul></div>")
}}};
gadgets.ChameleonGadget.prototype.getUserPrefsDialogContent=function(a){a("")
};
gadgets.ChameleonGadget.prototype.getTitleBarId=function(){return"panel-0"+this.panelID_+"-slot-"+this.appID_+"-header"
};
gadgets.ChameleonGadget.prototype.getSlotId=function(){return"panel-0"+this.panelID_+"-slot-"+this.appID_
};
gadgets.ChameleonGadget.prototype.handleToggle=function(){};
gadgets.ChameleonGadget.prototype.setGadgetInfo=function(i,j,f,n,h,e,k,b,l,a,m,c,g,d){this.pageID_=i;
this.panelID_=j;
this.appID_=f;
this.urlToCanvasView=n;
this.signedUrlToCanvasView=h;
this.baseLeoNonSecureURL=e;
this.ownerProfileUrl=k;
this.viewerId=b;
this.ownerId=l;
this.applicationId=a;
this.viewerAccess=m;
this.isViewerTheOwner=c;
this.language=g;
this.country=d
};
function makeXhr(){if(window.XMLHttpRequest){return new XMLHttpRequest()
}else{if(window.ActiveXObject){var a=new ActiveXObject("Msxml2.XMLHTTP");
if(!a){a=new ActiveXObject("Microsoft.XMLHTTP")
}return a
}}}gadgets.ChameleonGadget.prototype.handleOpenUserPrefsDialog=function(){if(this.userPrefsDialogContentLoaded){this.showUserPrefsDialog()
}else{var c=this;
var b={context:{country:"US",language:"en",view:"default",container:"default"},gadgets:[{url:c.specUrl,moduleId:c.id}]};
var d=makeXhr();
d.open("POST","/opensocial/metadata",true);
d.onreadystatechange=function(e){return function(){if(d.readyState!==4){return
}var n=gadgets.json.parse(d.responseText);
var m=n.gadgets;
var o={};
for(var l=0,p;
p=m[l];
++l){var k=p.features||[];
for(var f=0,h;
h=k[f];
++f){o[h]=true
}}}
}(d);
var a=gadgets.json.stringify(b);
d.send(a)
}};
gadgets.ChameleonGadget.prototype.render=function(a){if(gadgets.container.view_=="canvas"){}gadgets.IfrGadget.prototype.render.apply(this,[a]);
setupModules.initSlot(this.getSlotId(),false,true)
};
gadgets.ChameleonGadget.prototype.getIframeUrl=function(){var a=gadgets.util.getUrlParameters().appParams;
return this.serverBase_+"opensocial/ifr?"+"url="+encodeURIComponent(this.specUrl)+"&synd=default"+"&mid="+this.id+"&nocache="+gadgets.container.nocache_+"&urlToCanvasView="+encodeURIComponent(this.urlToCanvasView)+"&signedUrlToCanvasView="+encodeURIComponent(this.signedUrlToCanvasView)+"&baseLeoNonSecureURL="+encodeURIComponent(this.baseLeoNonSecureURL)+"&ownerProfileUrl="+encodeURIComponent(this.ownerProfileUrl)+"&viewerAccess="+encodeURIComponent(this.viewerAccess)+"&country="+this.country+"&lang="+this.language+"&view="+gadgets.container.view_+(this.specVersion?"&v="+this.specVersion:"")+(gadgets.container.parentUrl_?"&parent="+encodeURIComponent(gadgets.container.parentUrl_):"")+(this.debug?"&debug=1":"")+this.getAdditionalParams()+this.getUserPrefsParams()+"#rpctoken="+this.rpcToken+(this.secureToken?"&st="+this.secureToken:"")+(a?"&view-params="+encodeURIComponent(a):"")+(this.hashData?"&"+this.hashData:"")
};
gadgets.ChameleonUserPrefStore=function(){if(LI.__HPA===true){console.info("HOMEPAGE_PERFORMANCE_ANALYSIS :: js/opensocial/gadget_container.js gadgets.ChameleonUserPrefStore")
}gadgets.UserPrefStore.call(this)
};
gadgets.ChameleonUserPrefStore.inherits(gadgets.UserPrefStore);
gadgets.ChameleonUserPrefStore.prototype.getPrefs=function(a){return a.getUserPrefs()
};
gadgets.ChameleonUserPrefStore.prototype.savePrefs=function(b){var a=b.getUserPrefs();
if(b.isViewerTheOwner){ChameleonService.savePrefs(a,b.pageID_,b.panelID_,b.appID_)
}};
gadgets.ChameleonGadgetService=function(){if(LI.__HPA===true){console.info("HOMEPAGE_PERFORMANCE_ANALYSIS :: js/opensocial/gadget_container.js gadgets.ChameleonGadgetService")
}gadgets.IfrGadgetService.call(this);
gadgets.rpc.register("requestSendMessage",this.requestSendMessage);
gadgets.rpc.register("requestPermission",this.requestPermission)
};
gadgets.ChameleonGadgetService.inherits(gadgets.IfrGadgetService);
gadgets.ChameleonGadgetService.prototype.requestPermission=function(b,g,c){var h=gadgets.container.gadgetService.getGadgetIdFromModuleId(this.f);
var f=gadgets.container.getGadget(h);
var a=f.viewerId;
var e=f.applicationId;
var d=['<div class="interrupt">','<div class="alert attention"><p><strong>This application would like access to your profile information in order to continue.</strong></p></div>','<p class="actions">','<input type="button" value="OK, allow access" class="btn-primary" id="app-request-ok">&nbsp;','<input type="button" value="Don\'t allow access" class="btn-secondary" id="app-request-no">&nbsp;',"or&nbsp;",'<a href="/home" id="app-request-cancel">Cancel</a>',"</p>","</div>"].join("");
LI.Dialog().open({name:"openSocialConfirm",type:"interrupt",width:500,content:{html:d,title:"Application Request"}});
YEvent.on("app-request-ok","click",function(){LI.Dialog().close();
ChameleonService.grantPermission(b,a,e);
window.location.reload()
});
YEvent.on("app-request-no","click",function(){LI.Dialog().close();
window.location.reload()
});
YEvent.on("app-request-cancel","click",function(i){LI.Dialog().close();
YAHOO.util.Event.preventDefault(i);
window.history.back()
})
};
gadgets.ChameleonGadgetService.prototype.requestSendMessage=function(b,i,k,m,l,j,h,o,a,n){var c=gadgets.container.gadgetService.getGadgetIdFromModuleId(this.f);
var g=gadgets.container.getGadget(c);
if((h=="profile"||m=="profile")&&(o||l)){if(o&&!l){if(n){l="0"
}var f=gadgets.ChameleonGadgetService.getUrlFor(m,j,l,g,false);
var d=gadgets.ChameleonGadgetService.translateIds([o],g);
ChameleonService.getProfileUrlFor(d,g.secureToken,function(p){gadgets.ChameleonGadgetService.requestSendMessageHelper(b,i,k,m,l,j,h,o,a,n,g,f,p[0])
})
}else{if(!o&&l){var e=undefined;
if(h||o||a){e=gadgets.ChameleonGadgetService.getUrlFor(h,a,o,g,true)
}var d=gadgets.ChameleonGadgetService.translateIds([l],g);
ChameleonService.getProfileUrlFor(d,g.secureToken,function(p){gadgets.ChameleonGadgetService.requestSendMessageHelper(b,i,k,m,l,j,h,o,a,n,g,p[0],e)
})
}else{var d=gadgets.ChameleonGadgetService.translateIds([l,o],g);
ChameleonService.getProfileUrlFor(d,g.secureToken,function(p){gadgets.ChameleonGadgetService.requestSendMessageHelper(b,i,k,m,l,j,h,o,a,n,g,p[0],p[1])
})
}}}else{if(n){l="0"
}var f=gadgets.ChameleonGadgetService.getUrlFor(m,j,l,g,false);
var e=undefined;
if(h||o||a){e=gadgets.ChameleonGadgetService.getUrlFor(h,a,o,g,true)
}gadgets.ChameleonGadgetService.requestSendMessageHelper(b,i,k,m,l,j,h,o,a,n,g,f,e)
}};
gadgets.ChameleonGadgetService.requestSendMessageHelper=function(j,k,g,e,p,u,w,s,x,o,d,y,r){var f=(e&&e!="");
var t=document.createElement("FORM");
document.body.appendChild(t);
t.method="POST";
t.name="_LI_requestSendMessageForm";
t.id="_LI_requestSendMessageForm";
var i=new Lui.Url(lui.goback.agbpushHref("/dummy")).getParameterValueByKey(Lui.GoBack.GOBACK);
t.action=d.baseLeoNonSecureURL+"msgToConns?displayCreate=&"+Lui.GoBack.GOBACK+"="+i+"&st="+d.secureToken;
var l=document.createElement("input");
l.type="text";
l.name="recipients";
l.value=j;
t.appendChild(l);
var n=document.createElement("textarea");
n.name="body";
n.value=gadgets.util.unescapeString(k);
t.appendChild(n);
if(f){var b=document.createElement("textarea");
b.name="openSocialAppBodySuffix";
b.value='For more details, go <a href="'+y+'">here</a>.';
t.appendChild(b)
}var v=document.createElement("input");
v.name="st";
v.value=d.secureToken;
t.appendChild(v);
var q=document.createElement("input");
q.type="text";
q.name="subject";
q.value=gadgets.util.unescapeString(g);
t.appendChild(q);
var h=document.createElement("input");
h.type="text";
h.name="opensocialRecipientIds";
h.value=j;
t.appendChild(h);
var m=document.createElement("input");
m.type="hidden";
m.name="osbetafilter";
t.appendChild(m);
if(r){var a=document.createElement("input");
a.type="hidden";
a.name="viewerDestinationUrl";
a.value=r;
t.appendChild(a)
}var c=document.createElement("input");
c.type="hidden";
c.name="osappid";
c.value=d.applicationId;
t.appendChild(c);
t.submit()
};
gadgets.ChameleonGadgetService.prototype.setTitle=function(c){var a=this.f+"-title";
var b=document.getElementById(a);
if(!b){b=document.getElementById("opensocial-gadget-title")
}if(b){if(typeof b.innerText=="undefined"){b.textContent=c
}else{b.innerText=c
}if(gadgets.container.view_==="profile"&&!c){b.style.visibility="hidden";
b.style.display="none"
}}else{gadgets.log("cannot find element2 "+a)
}};
gadgets.ChameleonGadgetService.prototype.requestNavigateTo=function(b,c,a){var f=gadgets.container.gadgetService.getGadgetIdFromModuleId(this.f);
var d=gadgets.container.getGadget(f);
if(b=="profile"&&a){var e=gadgets.ChameleonGadgetService.translateIds([a],d);
ChameleonService.getProfileUrlFor(e,d.secureToken,function(g){window.location=g[0]
})
}else{window.location=gadgets.ChameleonGadgetService.getUrlFor(b,c,a,d,true)
}};
gadgets.ChameleonGadgetService.translateIds=function(b,c){var d=new Array(b.length);
for(var a=0;
a<b.length;
a++){if(b[a]=="VIEWER"){d[a]=c.viewerId
}else{if(b[a]=="OWNER"){d[a]=c.ownerId
}else{d[a]=b[a]
}}}return d
};
gadgets.ChameleonGadgetService.getUrlFor=function(h,c,i,d,g){var a="";
if(c&&c!=""&&gadgets.json.stringify(c)!="{}"){var e=gadgets.json.stringify(c);
if(e.length>0){a="appParams="+encodeURIComponent(e)
}}var k="_ownerId="+d.ownerId;
if(i){k="_ownerId="+i
}var b=h?h.split(".")[0]:"";
if(b=="canvas"){var f=(h!=b)?"&view="+h:"";
if(a==""&&!i){if(g){return d.signedUrlToCanvasView+f
}else{var j=d.urlToCanvasView+f;
return j+((j.substring(j.length-1,j.length)=="&")?k:("&"+k))
}}else{if(g){var j=d.serverBase_+"opensocial/osRedirectServlet?st="+d.secureToken+"&redirectTo="+encodeURIComponent(d.urlToCanvasView+"&"+a);
return j+((j.substring(j.length-1,j.length)=="&")?k+f:("&"+k+f))
}else{var j=d.urlToCanvasView+"&"+a;
return j+((j.substring(j.length-1,j.length)=="&")?k+f:("&"+k+f))
}}}if(b=="home"){return d.baseLeoNonSecureURL
}if(b=="profile"){return d.ownerProfileUrl
}return d.baseLeoNonSecureURL
};
gadgets.ChameleonGadgetService.prototype.getGadgetIdFromModuleId=function(a){var b=a.match(/([0-9]+)/g);
return parseInt(b[1],10)
};
gadgets.ChameleonContainer=function(a){if(LI.__HPA===true){console.info("HOMEPAGE_PERFORMANCE_ANALYSIS :: js/opensocial/gadget_container.js gadgets.ChameleonContainer")
}gadgets.IfrContainer.call(this);
this.pageID_=a;
this.gadgetCount_=0;
this.gadgetChromeIDs_=new Array()
};
gadgets.ChameleonContainer.inherits(gadgets.IfrContainer);
gadgets.ChameleonContainer.prototype.gadgetClass=gadgets.ChameleonGadget;
gadgets.ChameleonContainer.prototype.gadgetService=new gadgets.ChameleonGadgetService();
gadgets.ChameleonContainer.prototype.addGadgetChrome=function(a,b){this.gadgetChromeIDs_[this.gadgetCount_++]=b;
this.layoutManager.addGadgetChrome(a,b)
};
gadgets.ChameleonContainer.prototype.renderGadgets=function(){this.layoutManager.setGadgetChromeIds(this.gadgetChromeIDs_);
gadgets.IfrContainer.prototype.renderGadgets.apply(this)
};
gadgets.ChameleonContainer.prototype.userPrefStore=new gadgets.ChameleonUserPrefStore();
gadgets.ChameleonContainer.prototype.layoutManager=new gadgets.ChameleonLayoutManager();
gadgets.ChameleonContainer.prototype.addGadget=function(a){this.gadgets_[this.getGadgetKey_(a.id)]=a
};
gadgets.ChameleonContainer.prototype.createGadget=function(b){var a=this.view_?this.view_.split(".")[0]:"";
if(a=="profile"){b.height=0;
b.width=440
}else{if(a=="home"){b.height=250;
b.width=290
}else{if(a=="canvas"){b.height=600;
b.width="100%"
}}}return gadgets.IfrContainer.prototype.createGadget.apply(this,[b])
};
gadgets.ChameleonContainer.prototype.getNextGadgetInstanceId=function(){throw Error("operation not supported")
};
gadgets.ChameleonContainer.prototype.setView=function(b){this.view_=b;
var a=b?b.split(".")[0]:"";
if(a=="canvas"){}else{if(a=="profile"){this.maxheight_=500
}else{if(a=="home"){this.maxheight_=535
}}}};
gadgets.ChameleonContainer.prototype.getView=function(){return this.view_
};