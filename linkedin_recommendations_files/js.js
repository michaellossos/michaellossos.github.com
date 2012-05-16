

/* tl/nprofile/form/has_publications.js */

(function(){dust.register("has_publications",e);
var g={closeText:d,yesText:h,noText:f};
function e(j,i){i=i.shiftBlocks(g);
return j.write('<div class="guided-edit">  ').partial("_close_action",i).write("  ").write("  ").exists(i.get("firstTaskTitleString"),i,{"block":c},null).write('\t  <form class="standard-form" id="').reference(i.get("name"),i,"h").write('_id" name="').reference(i.get("name"),i,"h").write('" method="').reference(i.get("method"),i,"h").write('" action="').reference(i.get("action"),i,"h").write('">    <fieldset class="task-content">      ').exists(i.getPath(true,["hasPublication"]),i,{"else":b,"block":a},null).write("      ").partial("action_params_yes_no",i).write("      ").write("      ").write("      ").partial("_guided_edit_flow_hidden",i).write("    </fieldset>  </form></div>")
}function d(j,i){i=i.shiftBlocks(g);
return j.reference(i.get("tl_profile_form_has_publications__text_plain__close"),i,"h")
}function c(j,i){i=i.shiftBlocks(g);
return j.write("    <h1>").reference(i.get("firstTaskTitleString"),i,"h",["s"]).write("</h1>  ")
}function b(j,i){i=i.shiftBlocks(g);
return j.write("        <legend><span>").reference(i.get("tl_profile_form_has_publications__text_plain__do_you_have_any_publications"),i,"h",["s"]).write("</span></legend>      ")
}function a(j,i){i=i.shiftBlocks(g);
return j.write("        <legend><span>").reference(i.get("tl_profile_form_has_publications__text_plain__do_you_have_any_more_publications"),i,"h",["s"]).write("</span></legend>      ")
}function h(j,i){i=i.shiftBlocks(g);
return j.reference(i.get("tl_profile_form_has_publications__text_plain__yes"),i,"h")
}function f(j,i){i=i.shiftBlocks(g);
return j.reference(i.get("tl_profile_form_has_publications__text_plain__no"),i,"h")
}return e
})();

/* tl/nprofile/form/publication_authors.js */

(function(){dust.register("publication_authors",e);
var g={closeText:d,saveText:a,skipText:h,dnaText:f};
function e(j,i){i=i.shiftBlocks(g);
return j.write('<div class="guided-edit">  ').partial("_close_action",i).write("  ").write("  ").exists(i.get("firstTaskTitleString"),i,{"block":c},null).write('  <form class="standard-form" id="').reference(i.get("name"),i,"h").write('_id" name="').reference(i.get("name"),i,"h").write('" method="').reference(i.get("method"),i,"h").write('" action="').reference(i.get("action"),i,"h").write('">    <fieldset>      <legend><span>').reference(i.get("tl_profile_form_publication_authors__text_plain__who_else_was_an_author_on_this_publication"),i,"h").write("</span></legend>      <ul>        <li>").reference(i.get("tl_profile_form_publication_authors__text_plain__please_use_separate_entries"),i,"h").write('</li>      </ul>      <div id="ccAutoComplete">        <div id="ccAutoCompleteSpacer"></div>      ').section(i.get("authorAttributeList"),i,{"block":b},null).write('        <div id="ccInputHolder">            <input type="text" size="16" maxlength="110" id="ccInput">        </div>      </div>      <ul>        <li><span id="ccCounter">&nbsp;</span></li>      </ul>      ').partial("action_params_with_dna",i).write("      ").write("      ").write("      ").write("      ").partial("_guided_edit_flow_hidden",i).write("      ").partial("inputHidden",i.rebase(i.get("publicationID"))).write("      ").partial("inputHidden",i.rebase(i.get("creatorContributorId"))).write("\t  ").partial("inputHidden",i.rebase(i.get("creatorName"))).write('      <input id="targetIdsHolder" type="hidden" name="targetIdsHolder" value="">      ').partial("inputHidden",i.rebase(i.get("timestamp"))).write('    </fieldset>        <div class="ac">      <div id="ccContainer" class="inpt"></div>    </div>    <script type="text/javascript">      LI.i18n.register("memberAddMore1", "').reference(i.get("tl_profile_form_publication_authors__text_plain__you_can_add_1_more"),i,"h",["s"]).write('");      LI.i18n.register("memberAddMore2", "').reference(i.get("tl_profile_form_publication_authors__text_plain__you_can_add_2_more"),i,"h",["s"]).write('");      LI.i18n.register("memberAddMore3", "').reference(i.get("tl_profile_form_publication_authors__text_plain__you_can_add_3_more"),i,"h",["s"]).write('");      LI.i18n.register("memberAddMore4", "').reference(i.get("tl_profile_form_publication_authors__text_plain__you_can_add_4_more"),i,"h",["s"]).write('");      LI.i18n.register("memberAddMore5", "').reference(i.get("tl_profile_form_publication_authors__text_plain__you_can_add_5_more"),i,"h",["s"]).write('");      LI.i18n.register("memberAddMore6", "').reference(i.get("tl_profile_form_publication_authors__text_plain__you_can_add_6_more"),i,"h",["s"]).write('");      LI.i18n.register("memberAddMore7", "').reference(i.get("tl_profile_form_publication_authors__text_plain__you_can_add_7_more"),i,"h",["s"]).write('");      LI.i18n.register("memberAddMore8", "').reference(i.get("tl_profile_form_publication_authors__text_plain__you_can_add_8_more"),i,"h",["s"]).write('");      LI.i18n.register("memberAddMore9", "').reference(i.get("tl_profile_form_publication_authors__text_plain__you_can_add_9_more"),i,"h",["s"]).write('");      LI.i18n.register("memberAddMore10", "').reference(i.get("tl_profile_form_publication_authors__text_plain__you_can_add_10_more"),i,"h",["s"]).write('");      LI.i18n.register("memberMaxReached", "').reference(i.get("tl_profile_form_publication_authors__text_plain__you_reached_max"),i,"h",["s"]).write('");      if (connChooser && LI.ProfileMembersChooserInput) {        connChooser.init();        var publicationAuthorsChooser = new LI.ProfileMembersChooserInput("publication_authors_id", {          typeaheadUrl      : LI.i18n.get("publication-authors-typeahead-url"),          targetIdsHolderId : "targetIdsHolder",          maxReachedMsgId   : "memberMaxReached",          addMoreMsgIdPrefix: "memberAddMore",          fieldIdPrefix     : "publication-authors",          fieldNamePrefix   : "pubAuthors"        });          publicationAuthorsChooser.init();      }      LI.define(\'GuidedEdit.localValidation.').reference(i.get("name"),i,"h").write("');      LI.GuidedEdit.localValidation.").reference(i.get("name"),i,"h").write(" = function(evt, form, action) {        var entries, input, hasOne = false;        if (action != 'save') {          return true;        }        entries = Y$('#ccAutoComplete .ccEntry', form);        hasOne = (entries && entries.length > 0);        if (!hasOne) {          input = Y$('#ccInput', form, true);          if (input) {            if (input.validationerror) {              input.validationerror.show(\"").reference(i.get("tl_profile_form_publication_authors__text_plain__please_enter_at_least_one"),i,"h",["j","s"]).write('");            } else {              new LI.GuidedEdit.FormError(input, "').reference(i.get("tl_profile_form_publication_authors__text_plain__please_enter_at_least_one"),i,"h",["j","s"]).write('");            }          }          return false;        }        return true;      };    <\/script>  </form></div>')
}function d(j,i){i=i.shiftBlocks(g);
return j.reference(i.get("tl_profile_form_publication_authors__text_plain__close"),i,"h")
}function c(j,i){i=i.shiftBlocks(g);
return j.write("    <h1>").reference(i.get("firstTaskTitleString"),i,"h",["s"]).write("</h1>  ")
}function b(j,i){i=i.shiftBlocks(g);
return j.write('        <p>        <span class="clsEntry" data-li-name="').reference(i.getPath(true,["name"]),i,"h").write('" id="').reference(i.getPath(true,["authorId"]),i,"h").write('-name">          ').reference(i.getPath(true,["name"]),i,"h").write('        <input type="hidden" name="pubAuthors-').reference(i.getPath(true,["authorIndex"]),i,"h").write('_id" value="').reference(i.getPath(true,["authorId"]),i,"h").write('" id="pubAuthors_').reference(i.getPath(true,["authorIndex"]),i,"h").write('_id ">        <input type="hidden" name="pubAuthors-').reference(i.getPath(true,["authorIndex"]),i,"h").write('_name" value="').reference(i.getPath(true,["name"]),i,"h").write('" id="pubAuthors_').reference(i.getPath(true,["authorIndex"]),i,"h").write('_name">        <input type="hidden" name="pubAuthors-').reference(i.getPath(true,["authorIndex"]),i,"h").write('_contributorId" value="').reference(i.getPath(true,["name"]),i,"h").write('" id="pubAuthors_').reference(i.getPath(true,["authorIndex"]),i,"h").write('_contributorId">        </span>        </p>      ')
}function a(j,i){i=i.shiftBlocks(g);
return j.reference(i.get("tl_profile_form_publication_authors__text_plain__save"),i,"h")
}function h(j,i){i=i.shiftBlocks(g);
return j.reference(i.get("tl_profile_form_publication_authors__text_plain__skip"),i,"h")
}function f(j,i){i=i.shiftBlocks(g);
return j.reference(i.get("tl_profile_form_publication_authors__text_plain__i_worked_alone_on_this_publication"),i,"h")
}return e
})();

/* tl/nprofile/form/publication_dates.js */

(function(){dust.register("publication_dates",o);
var a={closeText:m,saveText:j,skipText:h};
function o(s,r){r=r.shiftBlocks(a);
return s.write('<div class="guided-edit">  ').partial("_close_action",r).write("  ").write("  ").exists(r.get("firstTaskTitleString"),r,{"block":k},null).write('    <form class="standard-form" id="').reference(r.getPath(true,["name"]),r,"h").write('_id" name="').reference(r.getPath(true,["name"]),r,"h").write('" method="').reference(r.getPath(true,["method"]),r,"h").write('" action="').reference(r.get("action"),r,"h").write('">    <fieldset>      <legend><span>').reference(r.get("tl_profile_form_publication_dates__text_plain__when_did_you_work_on"),r,"h",["s"]).write('</span></legend>      <ul>        <li class="start-date">          ').section(r.get("paramOrderList"),r,{"block":i},null).write("        </li>      </ul>      ").partial("action_params",r).write("      ").write("      ").write("      ").partial("_guided_edit_flow_hidden",r).write("      ").partial("inputHidden",r.rebase(r.get("publicationID"))).write("      ").partial("inputHidden",r.rebase(r.get("timestamp"))).write("    </fieldset>  </form></div>")
}function m(s,r){r=r.shiftBlocks(a);
return s.reference(r.get("tl_profile_form_publication_dates__text_plain__close"),r,"h")
}function k(s,r){r=r.shiftBlocks(a);
return s.write("    <h1>").reference(r.get("firstTaskTitleString"),r,"h",["s"]).write("</h1>  ")
}function i(s,r){r=r.shiftBlocks(a);
return s.write("            ").helper("if",r,{"block":g},{"cond":e}).write("\t        ").helper("if",r,{"block":d},{"cond":b}).write("\t\t\t").helper("if",r,{"block":q},{"cond":l}).write("          ")
}function g(s,r){r=r.shiftBlocks(a);
return s.write("\t\t          ").section(r.get("month"),r,{"block":f},{"choose":r.get("tl_profile_form_publication_dates__text_plain__month")}).write("\t        ")
}function f(s,r){r=r.shiftBlocks(a);
return s.write("\t            ").partial("singleSelect",r).write("\t          ")
}function e(s,r){r=r.shiftBlocks(a);
return s.write(" '").reference(r.get("param"),r,"h").write("' == 'month' ")
}function d(s,r){r=r.shiftBlocks(a);
return s.write("\t\t          ").section(r.get("date"),r,{"block":c},{"choose":r.get("tl_profile_form_publication_dates__text_plain__date")}).write("\t\t\t")
}function c(s,r){r=r.shiftBlocks(a);
return s.write("\t            ").partial("singleSelect",r).write("\t          ")
}function b(s,r){r=r.shiftBlocks(a);
return s.write(" '").reference(r.get("param"),r,"h").write("' == 'day' ")
}function q(s,r){r=r.shiftBlocks(a);
return s.write("\t\t\t  ").section(r.get("year"),r,{"block":p},null).write("\t        ")
}function p(s,r){r=r.shiftBlocks(a);
return s.write('\t            <select name="').reference(r.getPath(true,["name"]),r,"h").write('" id="').reference(r.getPath(true,["id"]),r,"h").write('" class="').reference(r.getPath(true,["id"]),r,"h").write('">\t              <option value="" selected>').reference(r.get("tl_profile_form_publication_dates__text_plain__year"),r,"h").write("</option>\t                ").section(r.get("publishYearList"),r,{"block":n},null).write("\t            </select>\t          ")
}function n(s,r){r=r.shiftBlocks(a);
return s.write('\t                  <option value="').reference(r.getPath(true,["year"]),r,"h").write('">').reference(r.getPath(true,["year"]),r,"h").write("</option>\t                ")
}function l(s,r){r=r.shiftBlocks(a);
return s.write(" '").reference(r.get("param"),r,"h").write("' == 'year' ")
}function j(s,r){r=r.shiftBlocks(a);
return s.reference(r.get("tl_profile_form_publication_dates__text_plain__save"),r,"h")
}function h(s,r){r=r.shiftBlocks(a);
return s.reference(r.get("tl_profile_form_publication_dates__text_plain__skip"),r,"h")
}return o
})();

/* tl/nprofile/form/publication_name.js */

(function(){dust.register("publication_name",e);
var f={closeText:d,saveText:b,skipText:a};
function e(h,g){g=g.shiftBlocks(f);
return h.write('<div class="guided-edit">  ').partial("_close_action",g).write("  ").write("  ").exists(g.get("firstTaskTitleString"),g,{"block":c},null).write('  <form class="standard-form" id="').reference(g.get("name"),g,"h").write('_id" name="').reference(g.get("name"),g,"h").write('" method="').reference(g.get("method"),g,"h").write('" action="').reference(g.get("action"),g,"h").write('">    <fieldset>      <legend><span>').reference(g.get("tl_profile_form_publication_title__text_plain__what_is_the_title_of_your_publication"),g,"h",["s"]).write('</span></legend>      <ul>        <li>          <input type="text" maxlength="255" size="32" id="title-').reference(g.getPath(true,["name"]),g,"h").write('" value="" name="').reference(g.getPath(false,["title","name"]),g,"h").write('" class="yui-ac-input" autocomplete="off" data-li-validation=\'{"required": true, "maxlength": ').reference(g.get("titleMaxLength"),g,"h").write("}'/>          <label for=\"title-").reference(g.getPath(true,["name"]),g,"h").write('" id="').reference(g.getPath(true,["id"]),g,"h").write('-title-label">').reference(g.get("tl_profile_form_publication_title__text_plain__publication_title"),g,"h").write('</label>          <script id="title-').reference(g.getPath(true,["name"]),g,"h").write('-control" type="text/javascript">            LI.Controls.addControl(\'title-').reference(g.getPath(true,["name"]),g,"h").write("-control', 'GhostLabel');          <\/script>        </li>      </ul>      ").partial("action_params",g).write("      ").write("      ").write("      ").partial("_guided_edit_flow_hidden",g).write("      ").partial("inputHidden",g.rebase(g.get("timestamp"))).write('    </fieldset>    <script type="text/javascript">      LI.i18n.register( "validation-fail-required-field", "').reference(g.get("tl_profile_form_publication_title__text_plain__this_is_a_required_field"),g,"h",["j","s"]).write('" );    <\/script>      </form></div>')
}function d(h,g){g=g.shiftBlocks(f);
return h.reference(g.get("tl_profile_form_publication_title__text_plain__close"),g,"h")
}function c(h,g){g=g.shiftBlocks(f);
return h.write("    <h1>").reference(g.get("firstTaskTitleString"),g,"h",["s"]).write("</h1>  ")
}function b(h,g){g=g.shiftBlocks(f);
return h.reference(g.get("tl_profile_form_publication_title__text_plain__save"),g,"h")
}function a(h,g){g=g.shiftBlocks(f);
return h.reference(g.get("tl_profile_form_publication_title__text_plain__skip"),g,"h")
}return e
})();

/* tl/nprofile/form/publication_publisher.js */

(function(){dust.register("publication_publisher",e);
var f={closeText:d,saveText:b,skipText:a,dnaText:g};
function e(i,h){h=h.shiftBlocks(f);
return i.write('<div class="guided-edit">  ').partial("_close_action",h).write("  ").write("  ").exists(h.get("firstTaskTitleString"),h,{"block":c},null).write('  <form class="standard-form" id="').reference(h.get("name"),h,"h").write('_id" name="').reference(h.get("name"),h,"h").write('" method="').reference(h.get("method"),h,"h").write('" action="').reference(h.get("action"),h,"h").write('">    <fieldset>      <legend><span>').reference(h.get("tl_profile_form_publication_publisher__text_plain__where_was_this_publication_published"),h,"h",["s"]).write('</span></legend>      <ul>        <li>          <input type="text" maxlength="255" size="32" id="').reference(h.getPath(false,["publisher","id"]),h,"h").write('" value="" name="').reference(h.getPath(false,["publisher","name"]),h,"h").write('" class="yui-ac-input" autocomplete="off" data-li-validation=\'{"required": true, "maxlength": ').reference(h.get("publisherMaxLength"),h,"h").write("}'/>          <label for=\"").reference(h.getPath(false,["publisher","id"]),h,"h").write('" id="').reference(h.getPath(true,["publisher","id"]),h,"h").write('-publisher-label">').reference(h.get("tl_profile_form_publication_name__text_plain__publication_publisher"),h,"h").write('</label>          <script id="').reference(h.getPath(false,["publisher","id"]),h,"h").write('-control" type="text/javascript">            LI.Controls.addControl(\'').reference(h.getPath(false,["publisher","id"]),h,"h").write("-control', 'GhostLabel');          <\/script>        </li>      </ul>      ").partial("action_params_with_dna",h).write("      ").write("      ").write("      ").write("      ").partial("_guided_edit_flow_hidden",h).write("      ").partial("inputHidden",h.rebase(h.get("publicationID"))).write("      ").partial("inputHidden",h.rebase(h.get("timestamp"))).write("    </fieldset>  </form></div>")
}function d(i,h){h=h.shiftBlocks(f);
return i.reference(h.get("tl_profile_form_publication_publisher__text_plain__close"),h,"h")
}function c(i,h){h=h.shiftBlocks(f);
return i.write("    <h1>").reference(h.get("firstTaskTitleString"),h,"h",["s"]).write("</h1>  ")
}function b(i,h){h=h.shiftBlocks(f);
return i.reference(h.get("tl_profile_form_publication_publisher__text_plain__save"),h,"h")
}function a(i,h){h=h.shiftBlocks(f);
return i.reference(h.get("tl_profile_form_publication_publisher__text_plain__skip"),h,"h")
}function g(i,h){h=h.shiftBlocks(f);
return i.reference(h.get("tl_profile_form_publication_publisher__text_plain__does_not_apply"),h,"h")
}return e
})();

/* tl/nprofile/form/publication_summary.js */

(function(){dust.register("publication_summary",e);
var f={closeText:d,saveText:b,skipText:a};
function e(h,g){g=g.shiftBlocks(f);
return h.write('<div class="guided-edit">  ').partial("_close_action",g).write("  ").write("  ").exists(g.get("firstTaskTitleString"),g,{"block":c},null).write('    <form class="standard-form" id="').reference(g.get("name"),g,"h").write('_id" name="').reference(g.get("name"),g,"h").write('" method="').reference(g.get("method"),g,"h").write('" action="').reference(g.get("action"),g,"h").write('">    <fieldset>      <legend><span>').reference(g.get("tl_profile_form_publication_summary__text_plain__enter_a_brief_description_of_your_publication"),g,"h").write('</span></legend>      <ul>        <li>          <script type="text/javascript">            LI.i18n.register( "CheckTextarea-error", "').reference(g.get("tl_profile_form_publication_summary__text_plain__you_have_exceeded_the_maximum_by"),g,"h",["s"]).write('" );            LI.i18n.register( "CheckTextarea-empty",   "').reference(g.get("tl_profile_form_publication_summary__text_plain__you_may_add_up_to_x_characters"),g,"h",["s"]).write('" );            LI.i18n.register( "CheckTextarea-full", "').reference(g.get("tl_profile_form_publication_summary__text_plain__you_may_not_add_more_characters"),g,"h",["s"]).write('" );            LI.i18n.register( "CheckTextarea-countdown",   "').reference(g.get("tl_profile_form_publication_summary__text_plain__you_may_add_x_more_characters"),g,"h",["s"]).write('" );            LI.i18n.register( "CheckTextarea-twitter-under", "').reference(g.get("tl_profile_form_publication_summary__text_plain__count_x"),g,"h",["s"]).write('" );            LI.i18n.register( "CheckTextarea-twitter-over",   "').reference(g.get("tl_profile_form_publication_summary__text_plain__count_x_only_2000_characters"),g,"h",["s"]).write('" );          <\/script>          ').partial("textArea",g.rebase(g.get("pubSummary"))).write("        </li>      </ul>      ").partial("action_params",g).write("      ").write("      ").write("      ").partial("_guided_edit_flow_hidden",g).write("      ").partial("inputHidden",g.rebase(g.get("publicationID"))).write("      ").partial("inputHidden",g.rebase(g.get("timestamp"))).write("    </fieldset>  </form></div>")
}function d(h,g){g=g.shiftBlocks(f);
return h.reference(g.get("tl_profile_form_publication_summary__text_plain__close"),g,"h")
}function c(h,g){g=g.shiftBlocks(f);
return h.write("    <h1>").reference(g.get("firstTaskTitleString"),g,"h",["s"]).write("</h1>  ")
}function b(h,g){g=g.shiftBlocks(f);
return h.reference(g.get("tl_profile_form_publication_summary__text_plain__save"),g,"h")
}function a(h,g){g=g.shiftBlocks(f);
return h.reference(g.get("tl_profile_form_publication_summary__text_plain__skip"),g,"h")
}return e
})();

/* tl/nprofile/form/publication_url.js */

(function(){dust.register("publication_url",e);
var f={closeText:d,saveText:b,skipText:a,dnaText:g};
function e(i,h){h=h.shiftBlocks(f);
return i.write('<div class="guided-edit">  ').partial("_close_action",h).write("  ").write("  ").exists(h.get("firstTaskTitleString"),h,{"block":c},null).write('    <form class="standard-form" id="').reference(h.get("name"),h,"h").write('_id" name="').reference(h.get("name"),h,"h").write('" method="').reference(h.get("method"),h,"h").write('" action="').reference(h.get("action"),h,"h").write('">    <fieldset>      <legend><span>').reference(h.get("tl_profile_form_publication_url__text_plain__do_you_have_url_for_your_publication"),h,"h",["s"]).write('</span></legend>      <ul>        <li>          <label for="').reference(h.getPath(false,["pubUrl","id"]),h,"h").write('" id="').reference(h.getPath(false,["pubUrl","id"]),h,"h").write('-publication-label">').reference(h.get("tl_profile_form_publication_url__text_plain__enter_a_url"),h,"h").write('</label>          <script id="').reference(h.getPath(false,["pubUrl","id"]),h,"h").write('-control" type="text/javascript">            LI.Controls.addControl(\'').reference(h.getPath(false,["pubUrl","id"]),h,"h").write("-control', 'GhostLabel');          <\/script>          ").partial("inputText",h.rebase(h.get("pubUrl"))).write("        </li>      </ul>      ").partial("action_params_with_dna",h).write("      ").write("      ").write("      ").write("      ").partial("_guided_edit_flow_hidden",h).write("      ").partial("inputHidden",h.rebase(h.get("publicationID"))).write("      ").partial("inputHidden",h.rebase(h.get("timestamp"))).write('    </fieldset>    <script type="text/javascript">      LI.i18n.register( "validation-fail-required-field", "').reference(h.get("tl_profile_form_publication_url__text_plain__this_is_a_required_field"),h,"h",["j","s"]).write('" );    <\/script>      </form></div>')
}function d(i,h){h=h.shiftBlocks(f);
return i.reference(h.get("tl_profile_form_publication_url__text_plain__close"),h,"h")
}function c(i,h){h=h.shiftBlocks(f);
return i.write("    <h1>").reference(h.get("firstTaskTitleString"),h,"h",["s"]).write("</h1>  ")
}function b(i,h){h=h.shiftBlocks(f);
return i.reference(h.get("tl_profile_form_publication_url__text_plain__save"),h,"h")
}function a(i,h){h=h.shiftBlocks(f);
return i.reference(h.get("tl_profile_form_publication_url__text_plain__skip"),h,"h")
}function g(i,h){h=h.shiftBlocks(f);
return i.reference(h.get("tl_profile_form_publication_url__text_plain__no_url"),h,"h")
}return e
})();