

/* tl/apps/profile/ge/form/add_location.js */

(function(){dust.register("add_location",e);
var f={closeText:d,saveText:a,skipText:g};
function e(i,h){h=h.shiftBlocks(f);
return i.write('<div class="guided-edit">  ').partial("_close_action",h).write("  ").write("  ").exists(h.get("firstTaskTitleString"),h,{"block":c},null).write('    <form class="standard-form" id="').reference(h.get("name"),h,"h").write('_id" name="').reference(h.get("name"),h,"h").write('" method="').reference(h.get("method"),h,"h").write('" action="').reference(h.get("action"),h,"h").write('">    <fieldset>      <legend>').reference(h.get("tl_profile_form_add_location__text_plain__where_are_you_located"),h,"h").write('</legend>      <ul>        <li class="postal-code">          <label for="').reference(h.getPath(false,["postalCode","id"]),h,"h").write('" id="').reference(h.getPath(false,["postalCode","id"]),h,"h").write('-label">').reference(h.get("tl_profile_form_add_location__text_plain__add_postal_code"),h,"h").write('</label>          <script id="').reference(h.getPath(false,["postalCode","id"]),h,"h").write('-control" type="text/javascript">          LI.Controls.addControl(\'').reference(h.getPath(false,["postalCode","id"]),h,"h").write("-control', 'GhostLabel');          <\/script>                    ").partial("inputText",h.rebase(h.get("postalCode"))).write("        </li>        <li>          ").section(h.get("countryCode"),h,{"block":b},{"choose":h.get("tl_profile_form_add_location__text_plain__choose")}).write("        </li>      </ul>      ").partial("action_params",h).write("      ").write("      ").write("      ").partial("_guided_edit_flow_hidden",h).write("      ").partial("inputHidden",h.rebase(h.get("countryCode"))).write("    </fieldset>  </form>  ").partial("_guided_edit_flow",h).write("</div>")
}function d(i,h){h=h.shiftBlocks(f);
return i.reference(h.get("tl_profile_form_add_location__text_plain__close"),h,"h")
}function c(i,h){h=h.shiftBlocks(f);
return i.write("    <h1>").reference(h.get("firstTaskTitleString"),h,"h",["s"]).write("</h1>  ")
}function b(i,h){h=h.shiftBlocks(f);
return i.write("            ").partial("singleSelect",h).write("          ")
}function a(i,h){h=h.shiftBlocks(f);
return i.reference(h.get("tl_profile_form_add_location__text_plain__save"),h,"h")
}function g(i,h){h=h.shiftBlocks(f);
return i.reference(h.get("tl_profile_form_add_location__text_plain__skip"),h,"h")
}return e
})();

/* tl/apps/profile/ge/form/add_industry.js */

(function(){dust.register("add_industry",e);
var f={closeText:d,saveText:a,skipText:g};
function e(i,h){h=h.shiftBlocks(f);
return i.write('<div class="guided-edit">  ').partial("_close_action",h).write("  ").write("  ").exists(h.get("firstTaskTitleString"),h,{"block":c},null).write('    <form class="standard-form" id="').reference(h.get("name"),h,"h").write('_id" name="').reference(h.get("name"),h,"h").write('" method="').reference(h.get("method"),h,"h").write('" action="').reference(h.get("action"),h,"h").write('">    <fieldset>      <legend>').reference(h.get("tl_profile_form_add_industry__text_plain__what_is_your_industry"),h,"h").write("</legend>      <ul>        <li>          ").section(h.get("industryChooser"),h,{"block":b},{"choose":h.get("tl_profile_form_add_industry__text_plain__choose")}).write("        </li>      </ul>      ").partial("action_params",h).write("      ").write("      ").write("      ").partial("_guided_edit_flow_hidden",h).write("    </fieldset>  </form>  ").partial("_guided_edit_flow",h).write("</div>")
}function d(i,h){h=h.shiftBlocks(f);
return i.reference(h.get("tl_profile_form_add_industry__text_plain__close"),h,"h")
}function c(i,h){h=h.shiftBlocks(f);
return i.write("    <h1>").reference(h.get("firstTaskTitleString"),h,"h",["s"]).write("</h1>  ")
}function b(i,h){h=h.shiftBlocks(f);
return i.write("            ").partial("singleSelect",h).write("          ")
}function a(i,h){h=h.shiftBlocks(f);
return i.reference(h.get("tl_profile_form_add_industry__text_plain__save"),h,"h")
}function g(i,h){h=h.shiftBlocks(f);
return i.reference(h.get("tl_profile_form_add_industry__text_plain__skip"),h,"h")
}return e
})();

/* tl/nprofile/form/confirm_current_position.js */

(function(){dust.register("confirm_current_position",e);
var f={closeText:d,yesText:b,noText:a};
function e(h,g){g=g.shiftBlocks(f);
return h.write('<div class="guided-edit">  ').partial("_close_action",g).write("  ").write("  ").exists(g.get("firstTaskTitleString"),g,{"block":c},null).write('    <form class="standard-form" id="').reference(g.get("name"),g,"h").write('_id" name="').reference(g.get("name"),g,"h").write('" method="').reference(g.get("method"),g,"h").write('" action="').reference(g.get("action"),g,"h").write('">    <fieldset>      <legend>').reference(g.get("tl_profile_form_confirm_current_position__text_plain__is_this_your_current_position"),g,"h").write('</legend>      <p class="task-content">').reference(g.get("tl_profile_form_confirm_current_position__text_plain__title_at_company"),g,"h").write("</p>      ").partial("action_params_yes_no",g).write("      ").write("      ").write("            ").partial("_guided_edit_flow_hidden",g).write("      ").partial("inputHidden",g.rebase(g.get("positionID"))).write("    </fieldset>  </form>  ").partial("_guided_edit_flow",g).write("</div>")
}function d(h,g){g=g.shiftBlocks(f);
return h.reference(g.get("tl_profile_form_confirm_current_position__text_plain__close"),g,"h")
}function c(h,g){g=g.shiftBlocks(f);
return h.write("    <h1>").reference(g.get("firstTaskTitleString"),g,"h",["s"]).write("</h1>  ")
}function b(h,g){g=g.shiftBlocks(f);
return h.reference(g.get("tl_profile_form_confirm_current_position__text_plain__yes"),g,"h")
}function a(h,g){g=g.shiftBlocks(f);
return h.reference(g.get("tl_profile_form_confirm_current_position__text_plain__no"),g,"h")
}return e
})();

/* tl/apps/profile/ge/form/end_current_position.js */

(function(){dust.register("end_current_position",e);
var g={closeText:d,saveText:h,skipText:f};
function e(j,i){i=i.shiftBlocks(g);
return j.write('<div class="guided-edit">  ').partial("_close_action",i).write("  ").write("  ").exists(i.get("firstTaskTitleString"),i,{"block":c},null).write('    <form class="standard-form" id="').reference(i.get("name"),i,"h").write('_id" name="').reference(i.get("name"),i,"h").write('" method="').reference(i.get("method"),i,"h").write('" action="').reference(i.get("action"),i,"h").write('">    <fieldset>      <legend>').reference(i.get("tl_profile_form_end_current_position__text_plain__when_did_your_position_end"),i,"h").write('</legend>      <p class="task-content">').reference(i.get("tl_profile_form_end_current_position__text_plain__i_worked_as_x_at_x"),i,"h").write('</p>      <ul>        <li class="start-date">          ').section(i.get("startDateMonth"),i,{"block":b},{"choose":i.get("tl_profile_form_end_current_position__text_plain__choose")}).write('          <label for="').reference(i.getPath(false,["startDateYear","id"]),i,"h").write('" class="ghost">').reference(i.get("tl_profile_form_end_current_position__text_plain__year"),i,"h").write('</label>          <script id="').reference(i.get("name"),i,"h").write('startDateYear-control" type="text/javascript">            LI.Controls.addControl(\'').reference(i.get("name"),i,"h").write("startDateYear-control', 'GhostLabel', {});          <\/script>          ").partial("inputText",i.rebase(i.get("startDateYear"))).write('        </li>        <li class="end-date" id="position-end-date">          <span class="to" id="position-to">').reference(i.get("tl_profile_form_end_current_position__text_plain__to"),i,"h").write("</span>          ").section(i.get("endDateMonth"),i,{"block":a},{"choose":i.get("tl_profile_form_end_current_position__text_plain__choose")}).write('          <label for="').reference(i.getPath(false,["endDateYear","id"]),i,"h").write('" class="ghost">').reference(i.get("tl_profile_form_end_current_position__text_plain__year"),i,"h").write('</label>          <script id="').reference(i.get("name"),i,"h").write('endDateYear-control" type="text/javascript">            LI.Controls.addControl(\'').reference(i.get("name"),i,"h").write("endDateYear-control', 'GhostLabel', {});          <\/script>          ").partial("inputText",i.rebase(i.get("endDateYear"))).write("        </li>      </ul>      ").partial("action_params",i).write("      ").write("  \t  ").write("            ").partial("_guided_edit_flow_hidden",i).write("      ").partial("inputHidden",i.rebase(i.get("positionID"))).write("    </fieldset>  </form>  ").partial("_guided_edit_flow",i).write("</div>")
}function d(j,i){i=i.shiftBlocks(g);
return j.reference(i.get("tl_profile_form_end_current_position__text_plain__close"),i,"h")
}function c(j,i){i=i.shiftBlocks(g);
return j.write("    <h1>").reference(i.get("firstTaskTitleString"),i,"h",["s"]).write("</h1>  ")
}function b(j,i){i=i.shiftBlocks(g);
return j.write("            ").partial("singleSelect",i).write("          ")
}function a(j,i){i=i.shiftBlocks(g);
return j.write("            ").partial("singleSelect",i).write("          ")
}function h(j,i){i=i.shiftBlocks(g);
return j.reference(i.get("tl_profile_form_end_current_position__text_plain__save"),i,"h")
}function f(j,i){i=i.shiftBlocks(g);
return j.reference(i.get("tl_profile_form_end_current_position__text_plain__skip"),i,"h")
}return e
})();

/* tl/apps/profile/ge/form/current_position_start_date.js */

(function(){dust.register("current_position_start_date",e);
var g={closeText:d,saveText:h,skipText:f};
function e(j,i){i=i.shiftBlocks(g);
return j.write('<div class="guided-edit">  ').partial("_close_action",i).write("  ").write("  ").exists(i.get("firstTaskTitleString"),i,{"block":c},null).write('    <form class="standard-form" id="').reference(i.get("name"),i,"h").write('_id" name="').reference(i.get("name"),i,"h").write('" method="').reference(i.get("method"),i,"h").write('" action="').reference(i.get("action"),i,"h").write('">    <fieldset>      <legend>').reference(i.get("tl_profile_form_current_position_start_date__text_plain__when_did_you_start_your"),i,"h").write('</legend>      <p class="task-content">').reference(i.get("tl_profile_form_current_position_start_date__text_plain__i_started_working_as"),i,"h").write('</p>      <ul>        <li class="start-date">          ').section(i.get("startDateMonth"),i,{"block":b},{"choose":i.get("tl_profile_form_current_position_start_date__text_plain__choose")}).write("          ").section(i.get("tl_profile_form_current_position_start_date__text_if_needed__month_of_year_preposition"),i,{"block":a},null).write('          <label for="year-startDate-current_position_start_date" class="ghost">').reference(i.get("tl_profile_form_current_position_start_date__text_plain__year"),i,"h").write('</label>          <script id="').reference(i.get("name"),i,"h").write('startDateYear-control" type="text/javascript">            LI.Controls.addControl(\'').reference(i.get("name"),i,"h").write('startDateYear-control\', \'GhostLabel\');          <\/script>          <input type="text" name="startDateYear" value="" id="year-startDate-current_position_start_date">        </li>      </ul>      ').partial("action_params",i).write("      ").write("  \t  ").write("      ").partial("_guided_edit_flow_hidden",i).write("      ").partial("inputHidden",i.rebase(i.get("positionID"))).write("    </fieldset>  </form>  ").partial("_guided_edit_flow",i).write("</div>")
}function d(j,i){i=i.shiftBlocks(g);
return j.reference(i.get("tl_profile_form_current_position_start_date__text_plain__close"),i,"h")
}function c(j,i){i=i.shiftBlocks(g);
return j.write("    <h1>").reference(i.get("firstTaskTitleString"),i,"h",["s"]).write("</h1>  ")
}function b(j,i){i=i.shiftBlocks(g);
return j.write("            ").partial("singleSelect",i).write("          ")
}function a(j,i){i=i.shiftBlocks(g);
return j.write('          \t<span class="at">').reference(i.get("tl_profile_form_current_position_start_date__text_if_needed__month_of_year_preposition"),i,"h").write("</span>          ")
}function h(j,i){i=i.shiftBlocks(g);
return j.reference(i.get("tl_profile_form_current_position_start_date__text_plain__save"),i,"h")
}function f(j,i){i=i.shiftBlocks(g);
return j.reference(i.get("tl_profile_form_current_position_start_date__text_plain__skip"),i,"h")
}return e
})();

/* tl/apps/profile/ge/form/add_current_position.js */

(function(){dust.register("add_current_position",e);
var f={closeText:d,saveText:b,skipText:a};
function e(h,g){g=g.shiftBlocks(f);
return h.write('<div class="guided-edit">  ').partial("_close_action",g).write("  ").write("  ").exists(g.get("firstTaskTitleString"),g,{"block":c},null).write('    <form class="standard-form" id="').reference(g.get("name"),g,"h").write('_id" name="').reference(g.get("name"),g,"h").write('" method="').reference(g.get("method"),g,"h").write('" action="').reference(g.get("action"),g,"h").write('">    <fieldset>      <legend>').reference(g.get("tl_profile_form_add_current_position__text_plain__what_is_your_current_position"),g,"h").write('</legend>      <ul>        <li>          <label for="positionTitle-').reference(g.getPath(true,["name"]),g,"h").write('" id="').reference(g.getPath(true,["id"]),g,"h").write('-label">').reference(g.get("tl_profile_form_add_current_position__text_plain__job_title"),g,"h").write('</label>          <script id="positionTitle-').reference(g.getPath(true,["name"]),g,"h").write('-control" type="text/javascript">            LI.Controls.addControl(\'positionTitle-').reference(g.getPath(true,["name"]),g,"h").write("-control', 'GhostLabel');          <\/script>          ").partial("inputText",g.rebase(g.get("positionTitle"))).write('        </li>        <li>          <span class="at">').reference(g.get("tl_profile_form_add_current_position__text_plain__at"),g,"h").write('</span>          <label for="companyName-positionCompany-').reference(g.getPath(true,["name"]),g,"h").write('" id="').reference(g.getPath(true,["id"]),g,"h").write('-label">').reference(g.get("tl_profile_form_add_current_position__text_plain__company"),g,"h").write('</label>          <script id="companyName-positionCompany-').reference(g.getPath(true,["name"]),g,"h").write('-control" type="text/javascript">            LI.Controls.addControl(\'companyName-positionCompany-').reference(g.getPath(true,["name"]),g,"h").write('-control\', \'GhostLabel\');          <\/script>          <input type="text" maxlength="100" size="32" id="companyName-positionCompany-').reference(g.getPath(true,["name"]),g,"h").write('" value="" name="companyName" class="yui-ac-input" autocomplete="off"/>          <script class="li-control" type="text/javascript" id="companyTypeAhead-control-').reference(g.getPath(true,["name"]),g,"h").write('">            LI.i18n.register("typeahead-null-results", "').reference(g.get("tl_profile_form_add_current_position__text_plain_typeahead_no_results"),g,"h",["j","s"]).write("\");            LI.Controls.addControl('companyTypeAhead-control-").reference(g.getPath(true,["name"]),g,"h").write("', 'Typeahead', {              sources: {                result: {url: '/ta/company'}              },              unencodeValues: true,              hiddenField: \"").reference(g.getPath(false,["companyID","name"]),g,"h").write('_id"            });          <\/script>        </li>      </ul>      ').partial("inputHidden",g.rebase(g.get("companyID"))).write("      ").partial("action_params",g).write("      ").write("      ").write("      ").partial("_guided_edit_flow_hidden",g).write("      ").partial("inputHidden",g.rebase(g.get("positionID"))).write("    </fieldset>  </form>  ").partial("_guided_edit_flow",g).write("</div>")
}function d(h,g){g=g.shiftBlocks(f);
return h.reference(g.get("tl_profile_form_add_current_position__text_plain__close"),g,"h")
}function c(h,g){g=g.shiftBlocks(f);
return h.write("    <h1>").reference(g.get("firstTaskTitleString"),g,"h",["s"]).write("</h1>  ")
}function b(h,g){g=g.shiftBlocks(f);
return h.reference(g.get("tl_profile_form_add_current_position__text_plain__save"),g,"h")
}function a(h,g){g=g.shiftBlocks(f);
return h.reference(g.get("tl_profile_form_add_current_position__text_plain__skip"),g,"h")
}return e
})();

/* tl/apps/profile/ge/form/add_position.js */

(function(){dust.register("add_position",k);
var a={closeText:j,saveText:b,skipText:m,notes:l};
function k(o,n){n=n.shiftBlocks(a);
return o.write('<div class="guided-edit">  ').partial("_close_action",n).write("  ").write("  ").exists(n.get("firstTaskTitleString"),n,{"block":i},null).write('    <form class="standard-form multipane" id="').reference(n.get("name"),n,"h").write('_id" name="').reference(n.get("name"),n,"h").write('" method="').reference(n.get("method"),n,"h").write('" action="').reference(n.get("action"),n,"h").write('">\t    <fieldset class="current">      <legend>').reference(n.get("tl_profile_form_add_position__text_plain__where_else_have_you_worked"),n,"h").write('</legend>      <ul>        <li>          <label for="positionTitle-').reference(n.getPath(true,["name"]),n,"h").write('" id="').reference(n.getPath(true,["id"]),n,"h").write('-positionTitle-label">').reference(n.get("tl_profile_form_add_position__label__job_title"),n,"h").write('</label>          <script id="positionTitle-').reference(n.get("name"),n,"h").write('-control" type="text/javascript">            LI.Controls.addControl(\'positionTitle-').reference(n.get("name"),n,"h").write('-control\', \'GhostLabel\');          <\/script>          <input type="text" size="32" id="').reference(n.getPath(false,["positionTitle","id"]),n,"h").write('" name="').reference(n.getPath(false,["positionTitle","name"]),n,"h").write('" data-li-validation=\'{"required": true, "maxlength": ').reference(n.get("positionTitleMaxLength"),n,"h").write('}\'/>        </li>        <li>          <span class="at">').reference(n.get("tl_profile_form_add_position__text_plain__at"),n,"h").write('</span>          <label for="companyName-positionCompany-').reference(n.getPath(true,["name"]),n,"h").write('" id="').reference(n.getPath(true,["id"]),n,"h").write('-label">').reference(n.get("tl_profile_form_add_position__label__company"),n,"h").write('</label>          <script id="companyName-positionCompany-').reference(n.get("name"),n,"h").write('-control" type="text/javascript">            LI.Controls.addControl(\'companyName-positionCompany-').reference(n.get("name"),n,"h").write('-control\', \'GhostLabel\', {});          <\/script>          <input type="text" size="32" id="companyName-positionCompany-').reference(n.getPath(true,["name"]),n,"h").write('" value="" name="companyName" class="yui-ac-input" autocomplete="off" data-li-validation=\'{"required": true, "maxlength": ').reference(n.get("positionCompanyMaxLength"),n,"h").write('}\'/>          <script class="li-control" type="text/javascript" id="companyTypeAhead-control-').reference(n.getPath(true,["name"]),n,"h").write('">            LI.i18n.register( "typeahead-null-results", "').reference(n.get("tl_profile_form_add_position__text_plain__no_matching_results"),n,"h",["j","s"]).write("\" );            LI.Controls.addControl('companyTypeAhead-control-").reference(n.getPath(true,["name"]),n,"h").write("', 'Typeahead', {              sources: {                result: {url: '/ta/company'}              },              hiddenField: \"").reference(n.getPath(false,["companyID","name"]),n,"h").write('_id",              unencodeValues: true            });          <\/script>        </li>      </ul>      <div class="actions-wrapper">        <p class="actions">          <a class="btn-action" role="action:next" id="').reference(n.getPath(true,["name"]),n,"h").write('-btn-primary-next">            <span>').reference(n.get("tl_profile_form_add_position__button_text__next"),n,"h").write('</span>          </a>          <a class="btn-secondary" role="action:skip" id="').reference(n.getPath(true,["name"]),n,"h").write('-inter-btn-primary-skip" href="').reference(n.getPath(true,["skipAction"]),n,"h").write('">            <span>').reference(n.get("tl_profile_form_add_position__button_text__skip"),n,"h").write('</span>          </a>          <span class="alternate">            <a href="').reference(n.get("skipAction"),n,"h").write('" role="action:does_not_apply" id="').reference(n.getPath(true,["name"]),n,"h").write('-not-applicable">').reference(n.get("tl_profile_form_add_position__text_plain__no_more_positions"),n,"h").write('</a>          </span>        </p>      </div>    </fieldset>    <fieldset id="form2">      <legend id="form-state-2-legend"></legend>      <p class="task-content" id="form-state-2-task"></p>      <ul>        <li class="start-date">          ').section(n.get("startDateMonth"),n,{"block":h},{"choose":n.get("tl_profile_form_add_position__text_plain__choose")}).write("          ").section(n.get("tl_profile_form_add_position__text_if_needed__month_of_year_preposition"),n,{"block":g},null).write("          ").section(n.get("startDateYear"),n,{"block":f},null).write('          <abbr class="asterisk">').reference(n.get("tl_profile_form_add_position__text_plain__asterisk"),n,"h").write('</abbr>        </li>        <li class="end-date toggleClass" id="date-past">          <span class="to">').reference(n.get("tl_profile_form_add_position__text_plain__to"),n,"h").write("</span>          ").section(n.get("endDateMonth"),n,{"block":e},{"choose":n.get("tl_profile_form_add_position__text_plain__choose")}).write("          ").section(n.get("tl_profile_form_add_position__text_if_needed__month_of_year_preposition"),n,{"block":d},null).write("          ").section(n.get("endDateYear"),n,{"block":c},null).write('          <abbr class="asterisk">').reference(n.get("tl_profile_form_add_position__text_plain__asterisk"),n,"h").write('</abbr>        </li>        <li id="still-here" class="checkbox">          <label id="').reference(n.getPath(false,["isCurrent","id"]),n,"h").write('-label">            ').partial("inputCheckbox",n.rebase(n.get("isCurrent"))).write("            <script id=\"checkboxToggle\" type=\"linkedin/control\" class=\"li-control\">              LI.Controls.addControl('checkboxToggle', 'ToggleClass', { classname: 'collapsed', on: '.toggleClass', stopEvent: false });            <\/script>            ").reference(n.get("tl_profile_form_add_position__text_plain__i_currently_work_here"),n,"h").write("          </label>        </li>      </ul>      ").partial("inputHidden",n.rebase(n.get("companyID"))).write("      ").partial("action_params",n).write("      ").write("    \t").write("      ").write('    </fieldset>    <script type="text/javascript">      LI.define(\'GuidedEdit.nextPane.').reference(n.get("name"),n,"h").write("');      LI.GuidedEdit.nextPane.").reference(n.get("name"),n,"h").write(" = function(target, evt, form) {        companyTitle = document.getElementById('").reference(n.getPath(false,["positionTitle","id"]),n,"h").write("');        companyName =  document.getElementById('companyName-positionCompany-").reference(n.getPath(true,["name"]),n,"h").write("');        YDom.get('form-state-2-legend').innerHTML = YAHOO.lang.substitute(\"").reference(n.get("tl_profile_form_add_position__text_plain__when_did_you_work_at"),n,"h",["j","s"]).write("\", {0: LI.htmlEncode(companyName.value)});        YDom.get('form-state-2-task').innerHTML = YAHOO.lang.substitute(\"").reference(n.get("tl_profile_form_add_position__text_plain__i_worked_as"),n,"h",["j","s"]).write('", {0: LI.htmlEncode(companyTitle.value), 1: LI.htmlEncode(companyName.value)});        return true;      };\t\t\tLI.i18n.register( "validation-fail-required-field", "').reference(n.get("tl_profile_form_add_position__text_plain__this_is_a_required_field"),n,"h",["j","s"]).write('" );\t\t\tLI.i18n.register( "validation-fail-too-long",   "').reference(n.get("tl_profile_form_add_position__text_plain__max_exceeded"),n,"h",["j","s"]).write('" );    <\/script>    ').partial("_guided_edit_flow_hidden",n).write("    ").partial("inputHidden",n.rebase(n.get("positionID"))).write("  </form>  ").partial("_guided_edit_flow",n).write("</div>")
}function j(o,n){n=n.shiftBlocks(a);
return o.reference(n.get("tl_profile_form_add_position__text_plain__close"),n,"h")
}function i(o,n){n=n.shiftBlocks(a);
return o.write("    <h1>").reference(n.get("firstTaskTitleString"),n,"h",["s"]).write("</h1>  ")
}function h(o,n){n=n.shiftBlocks(a);
return o.write("            ").partial("singleSelect",n).write("          ")
}function g(o,n){n=n.shiftBlocks(a);
return o.write('          \t<span class="at">').reference(n.get("tl_profile_form_add_position__text_if_needed__month_of_year_preposition"),n,"h").write("</span>          ")
}function f(o,n){n=n.shiftBlocks(a);
return o.write('\t\t\t\t\t\t<label for="').reference(n.getPath(true,["id"]),n,"h").write('" class="ghost">').reference(n.get("tl_profile_form_add_position__text_plain__year"),n,"h").write("</label>\t\t\t\t\t\t<script id=\"datesGhost1\" type=\"text/javascript\">\t\t\t\t\t\t\tLI.Controls.addControl('datesGhost1', 'GhostLabel');\t\t\t\t\t\t<\/script>\t\t\t\t\t\t").partial("inputText",n).write("          ")
}function e(o,n){n=n.shiftBlocks(a);
return o.write("            ").partial("singleSelect",n).write("          ")
}function d(o,n){n=n.shiftBlocks(a);
return o.write('          \t<span class="at">').reference(n.get("tl_profile_form_add_position__text_if_needed__month_of_year_preposition"),n,"h").write("</span>          ")
}function c(o,n){n=n.shiftBlocks(a);
return o.write('\t\t\t\t\t\t<label for="').reference(n.getPath(true,["id"]),n,"h").write('" class="ghost">').reference(n.get("tl_profile_form_add_position__text_plain__year"),n,"h").write("</label>\t\t\t\t\t\t<script id=\"datesGhost2\" type=\"text/javascript\">\t\t\t\t\t\t\tLI.Controls.addControl('datesGhost2', 'GhostLabel');\t\t\t\t\t\t<\/script>\t\t\t\t\t\t").partial("inputText",n).write("          ")
}function b(o,n){n=n.shiftBlocks(a);
return o.reference(n.get("tl_profile_form_add_position__text_plain__save"),n,"h")
}function m(o,n){n=n.shiftBlocks(a);
return o.reference(n.get("tl_profile_form_add_position__text_plain__skip"),n,"h")
}function l(o,n){n=n.shiftBlocks(a);
return o.write('\t\t\t\t<p class="note">\t\t\t\t\t').reference(n.get("tl_profile_form_add_position__text_plain__you_must_enter_dates_to_add"),n,"h").write("\t\t\t\t</p>\t\t\t")
}return k
})();

/* tl/nprofile/form/school_name.js */

(function(){dust.register("school_name",j);
var a={closeText:i,saveText:d,skipText:c,dnaText:b};
function j(l,k){k=k.shiftBlocks(a);
return l.write('<div class="guided-edit">  ').partial("_close_action",k).write("    ").write("  ").exists(k.get("firstTaskTitleString"),k,{"block":h},null).write('    <form class="standard-form" id="').reference(k.getPath(true,["name"]),k,"h").write('_id" name="').reference(k.getPath(true,["name"]),k,"h").write('" method="').reference(k.getPath(true,["method"]),k,"h").write('" action="').reference(k.get("action"),k,"h").write('">    <fieldset>      ').exists(k.get("alreadyHasSchool"),k,{"else":g,"block":f},null).write('      <ul>        <li id="row-school-typeahead">          ').section(k.get("schoolText"),k,{"block":e},null).write("        </li>      </ul>      ").partial("action_params_with_dna",k).write("      ").write("      ").write("      ").write("      ").partial("_guided_edit_flow_hidden",k).write('      <input type="hidden" id="schoolID" name="schoolID" value="').reference(k.getPath(false,["schoolID","value"]),k,"h").write('" class="school-id-field"/>      ').partial("inputHidden",k.rebase(k.get("schoolcountryCode"))).write('    </fieldset>    <script type="text/javascript">      LI.i18n.register( "validation-fail-required-field", "').reference(k.get("tl_profile_form_school_name__text_plain__this_is_a_required_field"),k,"h",["j","s"]).write('" );    <\/script>        </form>  ').partial("_guided_edit_flow",k).write("</div>")
}function i(l,k){k=k.shiftBlocks(a);
return l.reference(k.get("tl_profile_form_school_name__text_plain__close"),k,"h")
}function h(l,k){k=k.shiftBlocks(a);
return l.write("    <h1>").reference(k.get("firstTaskTitleString"),k,"h",["s"]).write("</h1>  ")
}function g(l,k){k=k.shiftBlocks(a);
return l.write("      \t<legend>").reference(k.get("tl_profile_form_school_name__text_plain__where_did_you_attend_school"),k,"h").write("</legend>      ")
}function f(l,k){k=k.shiftBlocks(a);
return l.write("      \t<legend>").reference(k.get("tl_profile_form_school_name__text_plain__where_else_did_you_attend_school"),k,"h").write("</legend>      ")
}function e(l,k){k=k.shiftBlocks(a);
return l.write('          <label for="').reference(k.getPath(true,["id"]),k,"h").write('" id="').reference(k.getPath(true,["id"]),k,"h").write('-label">').reference(k.get("tl_profile_form_school_name__text_plain__school_name"),k,"h").write('</label>          <script id="').reference(k.getPath(true,["id"]),k,"h").write('-control" type="text/javascript">            LI.Controls.addControl(\'').reference(k.getPath(true,["id"]),k,"h").write('-control\', \'GhostLabel\');          <\/script>          <input type="text" maxlength="100" size="32" id="').reference(k.getPath(true,["id"]),k,"h").write('" value="" name="schoolText" class="yui-ac-input" autocomplete="off" data-li-validation=\'{"required": true}\'/>          <script class="li-control" type="text/javascript" id="').reference(k.getPath(true,["id"]),k,"h").write("-ta-control\">            LI.Controls.addControl('").reference(k.getPath(true,["id"]),k,"h").write("-ta-control', 'SchoolTypeahead', {            schoolId: 'schoolID',            dataURL: '/ta/school'            });          <\/script>          ")
}function d(l,k){k=k.shiftBlocks(a);
return l.reference(k.get("tl_profile_form_school_name__text_plain__save"),k,"h")
}function c(l,k){k=k.shiftBlocks(a);
return l.reference(k.get("tl_profile_form_school_name__text_plain__skip"),k,"h")
}function b(l,k){k=k.shiftBlocks(a);
return l.reference(k.get("tl_profile_form_school_name__text_plain__i_have_listed_all_my_schools"),k,"h")
}return j
})();

/* tl/nprofile/form/degree_and_major.js */

(function(){dust.register("degree_and_major",e);
var f={closeText:d,saveText:b,skipText:a,dnaText:g};
function e(i,h){h=h.shiftBlocks(f);
return i.write('<div class="guided-edit">  ').partial("_close_action",h).write("  ").write("  ").exists(h.get("firstTaskTitleString"),h,{"block":c},null).write('    <form class="standard-form" id="').reference(h.get("name"),h,"h").write('_id" name="').reference(h.get("name"),h,"h").write('" method="').reference(h.get("method"),h,"h").write('" action="').reference(h.get("action"),h,"h").write('">    <fieldset>      <legend>').reference(h.get("tl_profile_form_degree_and_major__text_plain__what_degree_did_your_earn"),h,"h").write("</legend>      <ul>        <li>          ").partial("inputText",h.rebase(h.get("schoolDegree"))).write('          <script id="degree-typeahead-').reference(h.getPath(true,["name"]),h,"h").write('-control" class="li-control" type="text/javascript">            if (LI.GuidedEdit.estt) {              LI.Controls.addControl(\'degree-typeahead-').reference(h.getPath(true,["name"]),h,"h").write("-control', 'Typeahead', {                sources: {                  degree: { local: true, url: '/ta/degree', filterResultsBooleanAnd: true }                }              });            }          <\/script>          <label for=\"schoolDegree-").reference(h.getPath(true,["name"]),h,"h").write('" id="').reference(h.getPath(true,["id"]),h,"h").write('-label">').reference(h.get("tl_profile_form_degree_and_major__text_plain__degree_name_example"),h,"h").write('</label>          <script id="degree-ghost-').reference(h.getPath(true,["name"]),h,"h").write('-control" class="li-control" type="text/javascript">            LI.Controls.addControl(\'degree-ghost-').reference(h.getPath(true,["name"]),h,"h").write("-control', 'GhostLabel');          <\/script>                  </li>        <li>          ").partial("inputText",h.rebase(h.get("schoolFieldOfStudy"))).write('          <script id="field-typeahead-').reference(h.getPath(true,["name"]),h,"h").write('-control" class="li-control" type="text/javascript">            if (LI.GuidedEdit.estt) {              LI.Controls.addControl(\'field-typeahead-').reference(h.getPath(true,["name"]),h,"h").write("-control', 'Typeahead', {                sources: {                  fos: { url: \"/ta/fieldofstudy\" }                }              });            }          <\/script>          <label for=\"schoolFieldOfStudy-").reference(h.getPath(true,["name"]),h,"h").write('" id="').reference(h.getPath(true,["id"]),h,"h").write('-label">').reference(h.get("tl_profile_form_degree_and_major__text_plain__major_or_field_of_study"),h,"h").write('</label>          <script id="field-ghost-').reference(h.getPath(true,["name"]),h,"h").write('-control" class="li-control" type="text/javascript">            LI.Controls.addControl(\'field-ghost-').reference(h.getPath(true,["name"]),h,"h").write("-control', 'GhostLabel');          <\/script>        </li>      </ul>      ").partial("action_params_with_dna",h).write("      ").write("      ").write("      ").write("            ").partial("_guided_edit_flow_hidden",h).write("      ").partial("inputHidden",h.rebase(h.get("educationID"))).write("      ").partial("inputHidden",h.rebase(h.get("schoolIDParam"))).write("      ").partial("inputHidden",h.rebase(h.get("schoolNameParam"))).write('    </fieldset>    <script type="text/javascript">      LI.i18n.register( "validation-fail-required-field", "').reference(h.get("tl_profile_form_degree_and_major__text_plain__this_is_a_required_field"),h,"h",["j","s"]).write('" );    <\/script>      </form>  ').partial("_guided_edit_flow",h).write("</div>")
}function d(i,h){h=h.shiftBlocks(f);
return i.reference(h.get("tl_profile_form_degree_and_major__text_plain__close"),h,"h")
}function c(i,h){h=h.shiftBlocks(f);
return i.write("    <h1>").reference(h.get("firstTaskTitleString"),h,"h",["s"]).write("</h1>  ")
}function b(i,h){h=h.shiftBlocks(f);
return i.reference(h.get("tl_profile_form_degree_and_major__input_value__save"),h,"h")
}function a(i,h){h=h.shiftBlocks(f);
return i.reference(h.get("tl_profile_form_degree_and_major__text_plain__skip"),h,"h")
}function g(i,h){h=h.shiftBlocks(f);
return i.reference(h.get("tl_profile_form_degree_and_major__text_plain__does_not_apply"),h,"h")
}return e
})();

/* tl/nprofile/form/education_dates.js */

(function(){dust.register("education_dates",i);
var a={closeText:h,saveText:d,skipText:c,dnaText:b};
function i(k,j){j=j.shiftBlocks(a);
return k.write('<div class="guided-edit">  ').partial("_close_action",j).write("  ").write("  ").exists(j.get("firstTaskTitleString"),j,{"block":g},null).write('    <form class="standard-form" id="').reference(j.getPath(true,["name"]),j,"h").write('_id" name="').reference(j.getPath(true,["name"]),j,"h").write('" method="').reference(j.getPath(true,["method"]),j,"h").write('" action="').reference(j.get("action"),j,"h").write('">    <fieldset>      <legend>').reference(j.get("tl_profile_form_education_dates__text_plain__when_did_you_attend"),j,"h").write('</legend>      <ul>        <li class="start-date single-select">          ').section(j.get("startYear"),j,{"block":f},{"choose":j.get("tl_profile_form_education_dates__text_plain__choose")}).write('        </li>        <li class="end-date single-select">          <span class="to">').reference(j.get("tl_profile_form_education_dates__text_plain__to"),j,"h").write("</span>          ").section(j.get("endYear"),j,{"block":e},{"choose":j.get("tl_profile_form_education_dates__text_plain__choose")}).write('        </li>      </ul>      <p class="note">').reference(j.get("tl_profile_form_education_dates__text_plain__current_students_enter_your"),j,"h").write("</p>            ").partial("action_params_with_dna",j).write("      ").write("      ").write("      ").write("            ").partial("_guided_edit_flow_hidden",j).write("      ").partial("inputHidden",j.rebase(j.get("educationID"))).write("      ").partial("inputHidden",j.rebase(j.get("schoolIDParam"))).write("      ").partial("inputHidden",j.rebase(j.get("schoolNameParam"))).write("    </fieldset>  </form>  ").partial("_guided_edit_flow",j).write("</div>")
}function h(k,j){j=j.shiftBlocks(a);
return k.reference(j.get("tl_profile_form_education_dates__text_plain__close"),j,"h")
}function g(k,j){j=j.shiftBlocks(a);
return k.write("    <h1>").reference(j.get("firstTaskTitleString"),j,"h",["s"]).write("</h1>  ")
}function f(k,j){j=j.shiftBlocks(a);
return k.write("            ").partial("singleSelect",j).write("          ")
}function e(k,j){j=j.shiftBlocks(a);
return k.write("            ").partial("singleSelect",j).write("          ")
}function d(k,j){j=j.shiftBlocks(a);
return k.reference(j.get("tl_profile_form_education_dates__text_plain__save"),j,"h")
}function c(k,j){j=j.shiftBlocks(a);
return k.reference(j.get("tl_profile_form_education_dates__text_plain__skip"),j,"h")
}function b(k,j){j=j.shiftBlocks(a);
return k.reference(j.get("tl_profile_form_education_dates__text_plain__id_rather_not_say"),j,"h")
}return i
})();

/* tl/nprofile/form/add_skills.js */

(function(){dust.register("add_skills",e);
var g={closeText:d,saveText:h,skipText:f};
function e(j,i){i=i.shiftBlocks(g);
return j.write('<div class="guided-edit">  ').partial("_close_action",i).write("  ").write("  ").exists(i.get("firstTaskTitleString"),i,{"block":c},null).write('    <form class="standard-form" id="').reference(i.get("name"),i,"h").write('_id" name="').reference(i.get("name"),i,"h").write('" method="').reference(i.get("method"),i,"h").write('" action="').reference(i.get("action"),i,"h").write('">    <fieldset>      <legend>        ').exists(i.getPath(true,["hasSkills"]),i,{"else":b,"block":a},null).write('      </legend>      <ul>        <li>          <label for="skill-').reference(i.getPath(true,["name"]),i,"h").write('" id="skillinput-label">').reference(i.get("tl_profile_form_add_skills__text_plain__skill_name"),i,"h").write('</label>          <script id="skill-').reference(i.getPath(true,["name"]),i,"h").write('-control" type="text/javascript">            LI.Controls.addControl(\'skill-').reference(i.getPath(true,["name"]),i,"h").write('-control\', \'GhostLabel\');          <\/script>          <input type="text" maxlength="100" size="32" id="skill-').reference(i.getPath(true,["name"]),i,"h").write('" value="" name="skill" class="yui-ac-input" autocomplete="off"/>          <script class="li-control" type="text/javascript" id="skillsTypeAhead-control-').reference(i.getPath(true,["name"]),i,"h").write('">            LI.i18n.register( "typeahead-null-results", "').reference(i.get("tl_profile_form_add_skills__text_plain__no_matching_results"),i,"h",["j","s"]).write("\" );            LI.Controls.addControl('skillsTypeAhead-control-").reference(i.getPath(true,["name"]),i,"h").write("', 'LI.Typeahead', {              sources: {                skill: {url: '/ta/skill'}              }            });          <\/script>        </li>        <li>          <label for=\"skill2-").reference(i.getPath(true,["name"]),i,"h").write('" id="skillinput2-label">').reference(i.get("tl_profile_form_add_skills__text_plain__skill_name"),i,"h").write('</label>          <script id="skill2-').reference(i.getPath(true,["name"]),i,"h").write('-control" type="text/javascript">            LI.Controls.addControl(\'skill2-').reference(i.getPath(true,["name"]),i,"h").write('-control\', \'GhostLabel\');          <\/script>          <input type="text" maxlength="100" size="32" id="skill2-').reference(i.getPath(true,["name"]),i,"h").write('" value="" name="skill2" class="yui-ac-input" autocomplete="off"/>          <script class="li-control" type="text/javascript" id="skillsTypeAhead-control2-').reference(i.getPath(true,["name"]),i,"h").write("\">            LI.Controls.addControl('skillsTypeAhead-control2-").reference(i.getPath(true,["name"]),i,"h").write("', 'LI.Typeahead', {              sources: {                skill: {url: '/ta/skill'}              }            });          <\/script>        </li>        <li>          <label for=\"skill3-").reference(i.getPath(true,["name"]),i,"h").write('" id="skillinput3-label">').reference(i.get("tl_profile_form_add_skills__text_plain__skill_name"),i,"h").write('</label>          <script id="skill3-').reference(i.getPath(true,["name"]),i,"h").write('-control" type="text/javascript">            LI.Controls.addControl(\'skill3-').reference(i.getPath(true,["name"]),i,"h").write('-control\', \'GhostLabel\');          <\/script>          <input type="text" maxlength="100" size="32" id="skill3-').reference(i.getPath(true,["name"]),i,"h").write('" value="" name="skill3" class="yui-ac-input" autocomplete="off"/>          <script class="li-control" type="text/javascript" id="skillsTypeAhead-control3-').reference(i.getPath(true,["name"]),i,"h").write("\">            LI.Controls.addControl('skillsTypeAhead-control3-").reference(i.getPath(true,["name"]),i,"h").write("', 'LI.Typeahead', {              sources: {                skill: {url: '/ta/skill'}              }            });          <\/script>        </li>      </ul>    </fieldset>    <script type=\"text/javascript\">      LI.define('GuidedEdit.localValidation.").reference(i.get("name"),i,"h").write("');      LI.GuidedEdit.localValidation.").reference(i.get("name"),i,"h").write(" = function(evt, form, action) {                var inputs, input, skillEntered = false;        if (action != 'save') { return true; }        inputs = Y$('input[type=text]', form);        for (var i=0, len=inputs.length; i<len; i++) {          input = inputs[i];          if (input.value && input.value != input.placeholder) {            skillEntered = true;          }        }        if (!skillEntered) {        \tinput = inputs[0];          if (input.validationerror) {             input.validationerror.show(\"").reference(i.get("tl_profile_form_add_skills__text_plain__please_enter_at_least_one"),i,"h",["j","s"]).write('");          } else {            input.validationerror = new LI.GuidedEdit.FormError(input, "').reference(i.get("tl_profile_form_add_skills__text_plain__please_enter_at_least_one"),i,"h",["j","s"]).write('");          }        \treturn false;        }        return true;      };          <\/script>    ').partial("action_params",i).write("    ").write("    ").write("    ").partial("_guided_edit_flow_hidden",i).write("    ").partial("inputHidden",i.rebase(i.get("positionID"))).write("    ").partial("inputHidden",i.rebase(i.get("timestamp"))).write("  </form>  ").partial("_guided_edit_flow",i).write("</div>")
}function d(j,i){i=i.shiftBlocks(g);
return j.reference(i.get("tl_profile_form_add_skills__text_plain__close"),i,"h")
}function c(j,i){i=i.shiftBlocks(g);
return j.write("    <h1>").reference(i.get("firstTaskTitleString"),i,"h",["s"]).write("</h1>  ")
}function b(j,i){i=i.shiftBlocks(g);
return j.write("\t\t  ").reference(i.get("tl_profile_form_add_skills__text_plain__add_skills"),i,"h").write("        ")
}function a(j,i){i=i.shiftBlocks(g);
return j.write("          ").reference(i.get("tl_profile_form_add_skills__text_plain__add_more_skills"),i,"h").write("        ")
}function h(j,i){i=i.shiftBlocks(g);
return j.reference(i.get("tl_profile_form_add_skills__text_plain__save"),i,"h")
}function f(j,i){i=i.shiftBlocks(g);
return j.reference(i.get("tl_profile_form_add_skills__text_plain__skip"),i,"h")
}return e
})();

/* tl/nprofile/form/add_descriptions_for_positions.js */

(function(){dust.register("add_descriptions_for_positions",e);
var f={closeText:d,saveText:a,skipText:g};
function e(i,h){h=h.shiftBlocks(f);
return i.write('<div class="guided-edit">  ').partial("_close_action",h).write("  ").write("  ").exists(h.get("firstTaskTitleString"),h,{"block":c},null).write('    <form class="standard-form" id="').reference(h.get("name"),h,"h").write('_id" name="').reference(h.get("name"),h,"h").write('" method="').reference(h.get("method"),h,"h").write('" action="').reference(h.get("action"),h,"h").write('">    <fieldset>      <legend>').reference(h.get("tl_profile_form_add_descriptions_for_position__dynamic__what_did_you_do_as"),h,"h").write("</legend>      <ul>        <li>          ").section(h.get("description"),h,{"block":b},null).write("                  </li>      </ul>      ").partial("action_params",h).write("      ").write("      ").write("      ").partial("_guided_edit_flow_hidden",h).write("      ").partial("inputHidden",h.rebase(h.get("positionID"))).write("    </fieldset>  </form>  ").partial("_guided_edit_flow",h).write("</div>")
}function d(i,h){h=h.shiftBlocks(f);
return i.reference(h.get("tl_profile_form_add_descriptions_for_position__text_plain__close"),h,"h")
}function c(i,h){h=h.shiftBlocks(f);
return i.write("    <h1>").reference(h.get("firstTaskTitleString"),h,"h",["s"]).write("</h1>  ")
}function b(i,h){h=h.shiftBlocks(f);
return i.write('            <label for="').reference(h.getPath(true,["id"]),h,"h").write('" id="').reference(h.getPath(true,["id"]),h,"h").write('-label">').reference(h.get("tl_profile_form_add_descriptions_for_position__text_plain__describe_your_position"),h,"h").write('</label>            <script id="').reference(h.getPath(true,["id"]),h,"h").write('-control" type="text/javascript">              LI.Controls.addControl(\'').reference(h.getPath(true,["id"]),h,"h").write('-control\', \'GhostLabel\');            <\/script>            <script type="text/javascript">              LI.i18n.register( "CheckTextarea-error", "').reference(h.get("tl_profile_form_add_descriptions_for_position__text_plain__you_have_exceeded_the_maximum_by"),h,"h",["j","s"]).write('" );              LI.i18n.register( "CheckTextarea-empty",   "').reference(h.get("tl_profile_form_add_descriptions_for_position__text_plain__you_may_add_up_to_x_characters"),h,"h",["j","s"]).write('" );              LI.i18n.register( "CheckTextarea-full", "').reference(h.get("tl_profile_form_add_descriptions_for_position__text_plain__you_may_not_add_more_characters"),h,"h",["j","s"]).write('" );              LI.i18n.register( "CheckTextarea-countdown",   "').reference(h.get("tl_profile_form_add_descriptions_for_position__text_plain__you_may_add_x_more_characters"),h,"h",["j","s"]).write('" );              LI.i18n.register( "CheckTextarea-twitter-under", "').reference(h.get("tl_profile_form_add_descriptions_for_position__text_plain__count_x"),h,"h",["j","s"]).write('" );              LI.i18n.register( "CheckTextarea-twitter-over",   "').reference(h.get("tl_profile_form_add_descriptions_for_position__text_plain__count_x_only_140_characters"),h,"h",["j","s"]).write('" );            <\/script>            ').partial("textArea",h).write("          ")
}function a(i,h){h=h.shiftBlocks(f);
return i.reference(h.get("tl_profile_form_add_descriptions_for_position__text_plain__save"),h,"h")
}function g(i,h){h=h.shiftBlocks(f);
return i.reference(h.get("tl_profile_form_add_descriptions_for_position__text_plain__skip"),h,"h")
}return e
})();

/* tl/apps/profile/ge/form/add_summary.js */

(function(){dust.register("add_summary",e);
var f={closeText:d,saveText:b,skipText:a};
function e(h,g){g=g.shiftBlocks(f);
return h.write('<div class="guided-edit">  ').partial("_close_action",g).write("  ").write("  ").exists(g.get("firstTaskTitleString"),g,{"block":c},null).write('    <form class="standard-form" id="').reference(g.get("name"),g,"h").write('_id" name="').reference(g.get("name"),g,"h").write('" method="').reference(g.get("method"),g,"h").write('" action="').reference(g.get("action"),g,"h").write('">    <fieldset>      <legend>').reference(g.get("tl_profile_form_add_summary__text_plain__how_would_you_summarize_yourself"),g,"h").write('</legend>      <ul>        <li>          <script type="text/javascript">            LI.i18n.register( "CheckTextarea-error", "').reference(g.get("tl_profile_form_add_summary__text_plain__you_have_exceeded_the_maximum_by"),g,"h",["j","s"]).write('" );            LI.i18n.register( "CheckTextarea-empty",   "').reference(g.get("tl_profile_form_add_summary__text_plain__you_may_add_up_to_x_characters"),g,"h",["j","s"]).write('" );            LI.i18n.register( "CheckTextarea-full", "').reference(g.get("tl_profile_form_add_summary__text_plain__you_may_not_add_more_characters"),g,"h",["j","s"]).write('" );            LI.i18n.register( "CheckTextarea-countdown",   "').reference(g.get("tl_profile_form_add_summary__text_plain__you_may_add_x_more_characters"),g,"h",["j","s"]).write('" );            LI.i18n.register( "CheckTextarea-twitter-under", "').reference(g.get("tl_profile_form_add_summary__text_plain__count_x"),g,"h",["j","s"]).write('" );            LI.i18n.register( "CheckTextarea-twitter-over",   "').reference(g.get("tl_profile_form_add_summary__text_plain__count_x_only_140_characters"),g,"h",["j","s"]).write('" );          <\/script>          ').partial("textArea",g.rebase(g.get("summary"))).write("        </li>      </ul>      ").partial("action_params",g).write("\t    ").write("  \t  ").write("      ").partial("_guided_edit_flow_hidden",g).write("    </fieldset>  </form>  ").partial("_guided_edit_flow",g).write("</div>")
}function d(h,g){g=g.shiftBlocks(f);
return h.reference(g.get("tl_profile_form_add_summary__text_plain__close"),g,"h")
}function c(h,g){g=g.shiftBlocks(f);
return h.write("    <h1>").reference(g.get("firstTaskTitleString"),g,"h",["s"]).write("</h1>  ")
}function b(h,g){g=g.shiftBlocks(f);
return h.reference(g.get("tl_profile_form_add_summary__text_plain__save"),g,"h")
}function a(h,g){g=g.shiftBlocks(f);
return h.reference(g.get("tl_profile_form_add_summary__text_plain__skip"),g,"h")
}return e
})();

/* tl/nprofile/form/has_languages.js */

(function(){dust.register("has_languages",e);
var f={closeText:d,yesText:b,noText:a};
function e(h,g){g=g.shiftBlocks(f);
return h.write('<div class="guided-edit">  ').partial("_close_action",g).write("  ").write("  ").exists(g.get("firstTaskTitleString"),g,{"block":c},null).write('    <form class="standard-form" id="').reference(g.get("name"),g,"h").write('_id" name="').reference(g.get("name"),g,"h").write('" method="').reference(g.get("method"),g,"h").write('" action="').reference(g.get("action"),g,"h").write('">    <fieldset class="task-content">      <legend>').reference(g.get("tl_profile_form_has_languages__text_plain__do_you_know_other_languages"),g,"h").write("</legend>      ").partial("action_params_yes_no",g).write("      ").write("      ").write("            ").partial("_guided_edit_flow_hidden",g).write("    </fieldset>  </form>  ").partial("_guided_edit_flow",g).write("</div>")
}function d(h,g){g=g.shiftBlocks(f);
return h.reference(g.get("tl_profile_form_has_languages__text_plain__close"),g,"h")
}function c(h,g){g=g.shiftBlocks(f);
return h.write("    <h1>").reference(g.get("firstTaskTitleString"),g,"h",["s"]).write("</h1>  ")
}function b(h,g){g=g.shiftBlocks(f);
return h.reference(g.get("tl_profile_form_has_languages__text_plain__yes"),g,"h")
}function a(h,g){g=g.shiftBlocks(f);
return h.reference(g.get("tl_profile_form_has_languages__text_plain__no"),g,"h")
}return e
})();

/* tl/apps/profile/ge/form/add_languages.js */

(function(){dust.register("add_languages",e);
var f={closeText:d,saveText:b,skipText:a};
function e(h,g){g=g.shiftBlocks(f);
return h.write('<div class="guided-edit">  ').partial("_close_action",g).write("  ").write("  ").exists(g.get("firstTaskTitleString"),g,{"block":c},null).write('    <form class="standard-form add-languages" id="').reference(g.get("name"),g,"h").write('_id" name="').reference(g.get("name"),g,"h").write('" method="').reference(g.get("method"),g,"h").write('" action="').reference(g.get("action"),g,"h").write('">    <fieldset>      <legend>').reference(g.get("tl_profile_form_add_languages__text_plain__what_languages_do_you_know"),g,"h").write('</legend>      <ul id="addLanguagesList">        <li class="item">          <input type="text" maxlength="80" size="80" id="language-').reference(g.getPath(true,["name"]),g,"h").write('" value="" name="language0" class="yui-ac-input" autocomplete="off"/>          <script class="li-control" type="text/javascript" id="languagesTypeAhead-control-').reference(g.getPath(true,["name"]),g,"h").write("\">            LI.i18n.register( 'typeahead-null-results', '").reference(g.get("tl_profile_form_add_languages__text_plain__no_matching_results"),g,"h").write("' );            LI.Controls.addControl('languagesTypeAhead-control-").reference(g.getPath(true,["name"]),g,"h").write("', 'LI.Typeahead', {              sources: {                language: {                  url: LI.i18n.get('language-typeahead-url'),                  local: true                }              }            });          <\/script>        </li>        <li class=\"addNew\">          + <a href=\"#\">").reference(g.get("tl_profile_form_add_languages__text_plain__add_another"),g,"h").write("</a>        </li>      </ul>      <script type=\"text/javascript\" id=\"languagesScript\">        LI.Controls.addControl('languagesScript', 'Profile.VariableSizeListParams', {          paramContainerSelector: 'li.item',          maxNumberOfParams: 25,          addButtonSelector: 'li.addNew a',          removeButtonSelector: 'a.removeItem',          controls: {            typeahead: {              controlName: 'LI.Typeahead',              selector: 'input',              config: {                sources: {                  language: {                    url: LI.i18n.get('language-typeahead-url'),                    local: true                  }                }              }            }          }        });      <\/script>            ").partial("action_params",g).write("\t    ").write("  \t  ").write("      ").partial("_guided_edit_flow_hidden",g).write("      ").partial("inputHidden",g.rebase(g.get("timestamp"))).write("      ").partial("inputHidden",g.rebase(g.get("maxLanguageNumberAdded"))).write("      </fieldset>  </form>  ").partial("_guided_edit_flow",g).write('  <script type="text/javascript">    LI.define(\'GuidedEdit.localValidation.').reference(g.get("name"),g,"h").write("');    LI.GuidedEdit.localValidation.").reference(g.get("name"),g,"h").write(" = function(evt, form, action) {      var hasOne = false;      var inputs = Y$('.item input', form.form);      for (var i=0, len=inputs.length; i<len; i++) {        if (inputs[i].value) {          hasOne = true;          break;        }      }      if (!hasOne) {        if (inputs[0].validationerror) {          inputs[0].validationerror.show(LI.i18n.get('validation-add-one-language'));        } else {          new LI.GuidedEdit.FormError(inputs[0], LI.i18n.get('validation-add-one-language'));        }        return false;      }            YDom.get('maxLanguageNumberAdded_id').value = inputs.length;      return true;    };    LI.i18n.register('validation-add-one-language', '").reference(g.get("tl_profile_form_add_languages__text_plain__please_enter_one"),g,"h",["j","s"]).write("');  <\/script></div>")
}function d(h,g){g=g.shiftBlocks(f);
return h.reference(g.get("tl_profile_form_add_languages__text_plain__close"),g,"h")
}function c(h,g){g=g.shiftBlocks(f);
return h.write("    <h1>").reference(g.get("firstTaskTitleString"),g,"h",["s"]).write("</h1>  ")
}function b(h,g){g=g.shiftBlocks(f);
return h.reference(g.get("tl_profile_form_add_languages__text_plain__save"),g,"h")
}function a(h,g){g=g.shiftBlocks(f);
return h.reference(g.get("tl_profile_form_add_languages__text_plain__skip"),g,"h")
}return e
})();

/* tl/nprofile/form/add_courses.js */

(function(){dust.register("add_courses",i);
var a={closeText:h,saveText:c,skipText:b};
function i(k,j){j=j.shiftBlocks(a);
return k.write('<div class="guided-edit">  ').partial("_close_action",j).write("  ").write("  ").exists(j.get("firstTaskTitleString"),j,{"block":g},null).write('    <form class="standard-form add-courses multipane" id="').reference(j.get("name"),j,"h").write('_id" name="').reference(j.get("name"),j,"h").write('" method="').reference(j.get("method"),j,"h").write('" action="').reference(j.get("action"),j,"h").write('">\t\t<fieldset class="current chooseSchool">      <legend>').reference(j.get("tl_profile_form_add_courses__text_plain__add_a_few_courses"),j,"h").write("</legend>      <p>").reference(j.get("tl_profile_form_add_courses__text_plain__pick_a_school"),j,"h").write('</p>      <ul id="schoolChooser" data-li-linkerror="schoolsParam_add-courses">        ').section(j.get("schoolAttributeList"),j,{"block":f},null).write('      </ul>      <div class="actions-wrapper">        <p class="actions">          <a class="btn-action" role="action:next" id="').reference(j.getPath(true,["name"]),j,"h").write('-btn-primary-next">            <span>').reference(j.get("tl_profile_form_add_courses__button_text__next"),j,"h").write('</span>          </a>          <a class="btn-secondary" role="action:skip" id="').reference(j.getPath(true,["name"]),j,"h").write('-inter-btn-primary-skip" href="').reference(j.getPath(true,["skipAction"]),j,"h").write('">            <span>').reference(j.get("tl_profile_form_add_courses__button_text__skip"),j,"h").write('</span>          </a>          <span class="alternate">            <a href="').reference(j.get("skipAction"),j,"h").write('" role="action:does_not_apply" id="').reference(j.getPath(true,["name"]),j,"h").write('-not-applicable">').reference(j.get("tl_profile_form_add_courses__text_plain__ive_added_all_my_courses"),j,"h").write('</a>          </span>        </p>      </div>\t\t\t\t</fieldset>    <fieldset class="addCourses">      <legend>').reference(j.get("tl_profile_form_add_courses__text_plain__what_courses_did_you_take"),j,"h").write('</legend>      <p id="educationRefer"></p>            <ul id="courseList">        <li class="item">          ').section(j.get("courseName0"),j,{"block":e},null).write("          ").section(j.get("courseNumber0"),j,{"block":d},null).write('        </li>        <li class="addNew">+ <a href="#">').reference(j.get("tl_profile_form_add_courses__button_text__add_another_course"),j,"h").write("</a></li>      </ul>      <script type=\"text/javascript\" id=\"courseListScript\">        LI.Controls.addControl('courseListScript', 'Profile.VariableSizeListParams', {          paramContainerSelector: 'li.item',          maxNumberOfParams: 50,          addButtonSelector: 'li.addNew a',          removeButtonSelector: 'a.removeItem'        });      <\/script>            ").partial("action_params",j).write("      ").write("      ").write("    </fieldset>    ").partial("_guided_edit_flow_hidden",j).write("    ").partial("inputHidden",j.rebase(j.get("timestamp"))).write("    ").partial("inputHidden",j.rebase(j.get("schoolIDs"))).write('    <input type="hidden" value="" name="curSchoolID" id="curSchoolID_id"/>    ').partial("inputHidden",j.rebase(j.get("maxCourseNumberAdded"))).write("  </form>  ").partial("_guided_edit_flow",j).write('  <script type="text/javascript">    LI.define(\'GuidedEdit.nextPane.').reference(j.get("name"),j,"h").write("');    LI.GuidedEdit.nextPane.").reference(j.get("name"),j,"h").write(" = function(evt, form, action) {      var radioButtons = Y$('input[type=radio]', 'schoolChooser');      var selectedButton;      if (radioButtons.length == 1) {        radioButtons[0].checked=true;        selectedButton = radioButtons[0];      } else {        for (var i=0, len=radioButtons.length; i<len; i++) {          if (radioButtons[i].checked) {            selectedButton = radioButtons[i];            break;          }        }      }\t\t\tYDom.get('educationRefer').innerHTML = Y$('span', selectedButton.parentNode, true).innerHTML;\t\t\tYDom.get('curSchoolID_id').value = selectedButton.value;  \t};    LI.define('GuidedEdit.localValidation.").reference(j.get("name"),j,"h").write("');    LI.GuidedEdit.localValidation.").reference(j.get("name"),j,"h").write(" = function(evt, form, action) {      var throwError = function(elem, error) {        if (elem.validationerror) {          elem.validationerror.show(error);        } else {          new LI.GuidedEdit.FormError(elem, error);        }      };            var validateCourses = function() {        var hasOne = false, hold = false,          sets = Y$('li.item', 'courseList'),          course;        for (var i=0, len=sets.length; i<len; i++) {          course = Y$('input', sets[i]);          if (course[0].value) {            hasOne = true;          } else if (course[1].value) {            throwError(course[0], LI.i18n.get('validation-coursename-required'));            hold = true;          }        }                if (hold) {          return false;        };                 if (!hasOne) {          throwError(Y$('input','courseList',true), LI.i18n.get('validation-add-one-course'));          return false;        }                YDom.get('maxCourseNumberAdded_id').value = len;        return true;      };      if (action != 'next') {        return validateCourses();      }      return true;          };    LI.i18n.register(\"validation-radio-required\", \"").reference(j.get("tl_profile_form_add_courses__button_text__please_select_one"),j,"h",["j","s"]).write('");    LI.i18n.register("validation-coursename-required", "').reference(j.get("tl_profile_form_add_courses__button_text__coursename_required"),j,"h",["j","s"]).write('");    LI.i18n.register("validation-add-one-course", "').reference(j.get("tl_profile_form_add_courses__button_text__add_one_course"),j,"h",["j","s"]).write("\");        (function() {      var schoolInputs = Y$('input[type=radio]', 'schoolChooser');      if (schoolInputs.length == 1) {        LI.GuidedEdit.nextPane.").reference(j.getPath(true,["name"]),j,"h").write('();      } else {        schoolInputs[0].checked="checked";      }    })();  <\/script></div>')
}function h(k,j){j=j.shiftBlocks(a);
return k.reference(j.get("tl_profile_form_add_courses__text_plain__close"),j,"h")
}function g(k,j){j=j.shiftBlocks(a);
return k.write("    <h1>").reference(j.get("firstTaskTitleString"),j,"h",["s"]).write("</h1>  ")
}function f(k,j){j=j.shiftBlocks(a);
return k.write("          <li>            <label>              <span>").reference(j.getPath(true,["displayString"]),j,"h").write('</span>              <input type="radio" name="schoolsParam" value="').reference(j.getPath(true,["educationId"]),j,"h").write('" id="').reference(j.getPath(true,["educationId"]),j,"h").write('-schoolsParam-add_courses"/>            </label>          </li>        ')
}function e(k,j){j=j.shiftBlocks(a);
return k.write('\t          <label class="courseName">\t          \t<input type="text" name="').reference(j.getPath(true,["name"]),j,"h").write('" id="').reference(j.getPath(true,["id"]),j,"h").write('"/>\t          \t').reference(j.get("tl_profile_form_add_courses__text_plain__name_of_course"),j,"h").write("\t          </label>          ")
}function d(k,j){j=j.shiftBlocks(a);
return k.write('\t          <label>\t          \t<input type="text" name="').reference(j.getPath(true,["name"]),j,"h").write('" id="').reference(j.getPath(true,["id"]),j,"h").write('"/>\t          \t').reference(j.get("tl_profile_form_add_courses__text_plain__course_number"),j,"h").write("\t          </label>          ")
}function c(k,j){j=j.shiftBlocks(a);
return k.reference(j.get("tl_profile_form_add_courses__text_plain__save"),j,"h")
}function b(k,j){j=j.shiftBlocks(a);
return k.reference(j.get("tl_profile_form_add_courses__text_plain__skip"),j,"h")
}return i
})();

/* tl/apps/profile/ge/finished.js */

(function(){dust.register("finished",b);
function b(d,c){return d.write('<div class="guided-edit finish-task">  <form>    <p class="actions">      <a href="').reference(c.get("finishedAction"),c,"h").write('" class="btn-action"><span>').reference(c.get("tl_profile_finished__text_plain__finished"),c,"h").write("</span></a>      ").exists(c.get("hasAvailableTask"),c,{"block":a},null).write("    </p>    <h1>").reference(c.get("tl_profile_finished__text_plain__looking_good_now"),c,"h").write("</h1>  </form></div>")
}function a(d,c){return d.write('      <a class="btn-secondary" role="action:finished" id="continue-action-btn" data-li-continueaction="').reference(c.get("continueAction"),c,"h").write('"><span>').reference(c.get("tl_profile_finished__text_plain__continue_improving"),c,"h").write("</span></a>      ")
}return b
})();

/* tl/apps/profile/ge/form/update_headline.js */

(function(){dust.register("update_headline",e);
var f={closeText:d,saveText:b,skipText:a};
function e(h,g){g=g.shiftBlocks(f);
return h.write('<div class="guided-edit">  ').partial("_close_action",g).write("  ").write("  ").exists(g.get("firstTaskTitleString"),g,{"block":c},null).write('  <form class="standard-form" id="').reference(g.get("name"),g,"h").write('_id" name="').reference(g.get("name"),g,"h").write('" method="').reference(g.get("method"),g,"h").write('" action="').reference(g.get("action"),g,"h").write('">    <fieldset>      <legend>').reference(g.get("tl_profile_form_update_headline__do_you_want_to_change_headline_title"),g,"h").write('</legend>     <ul>        <li>          <input type="text" maxlength="120" size="32" id="headline-').reference(g.getPath(true,["name"]),g,"h").write('" value="').reference(g.get("tl_profile_form_update_headline__dynamic__suggested_headline"),g,"h").write('" name="headline" />        </li>      </ul>      ').partial("action_params",g).write("      ").write("      ").write("      ").partial("_guided_edit_flow_hidden",g).write("      ").partial("inputHidden",g.rebase(g.get("positionID"))).write("    </fieldset>  </form></div>").partial("_guided_edit_flow",g)
}function d(h,g){g=g.shiftBlocks(f);
return h.reference(g.get("tl_profile_form_update_headline__text_plain__close"),g,"h")
}function c(h,g){g=g.shiftBlocks(f);
return h.write("    <h1>").reference(g.get("firstTaskTitleString"),g,"h",["s"]).write("</h1>  ")
}function b(h,g){g=g.shiftBlocks(f);
return h.reference(g.get("tl_profile_form_update_headline__text_plain__save"),g,"h")
}function a(h,g){g=g.shiftBlocks(f);
return h.reference(g.get("tl_profile_form_update_headline__text_plain__skip"),g,"h")
}return e
})();

/* tl/apps/profile/ge/form/new_add_skills.js */

(function(){dust.register("new_add_skills",o);
var v={closeText:n,saveText:k,skipText:i,dnaText:g,notes:a};
function o(x,w){w=w.shiftBlocks(v);
return x.write('<div class="guided-edit">  ').partial("_close_action",w).write("  ").write("  ").exists(w.get("firstTaskTitleString"),w,{"block":l},null).write('  <form class="standard-form" id="').reference(w.get("name"),w,"h").write('_id" name="').reference(w.get("name"),w,"h").write('" method="').reference(w.get("method"),w,"h").write('" action="').reference(w.get("action"),w,"h").write('">    <fieldset>      <legend>        ').exists(w.getPath(true,["hasSkills"]),w,{"else":j,"block":h},null).write('      </legend>            <ul>        <li>          <label for="skill-').reference(w.getPath(true,["name"]),w,"h").write('" id="skillinput-label">').reference(w.get("tl_profile_form_new_add_skills__text_plain__enter_skill"),w,"h").write('</label>          <script id="skill-').reference(w.getPath(true,["name"]),w,"h").write('-control" type="text/javascript">            LI.Controls.addControl(\'skill-').reference(w.getPath(true,["name"]),w,"h").write('-control\', \'GhostLabel\');          <\/script>          <input type="text" maxlength="80" size="32" id="skill-').reference(w.getPath(true,["name"]),w,"h").write('" value="" name="skill" autocomplete="off"/>          <script class="li-control" type="text/javascript" id="skillsTypeAhead-control-').reference(w.getPath(true,["name"]),w,"h").write('">            LI.i18n.register( "typeahead-null-results", "').reference(w.get("tl_profile_form_new_add_skills__text_plain__no_matching_results"),w,"h",["j","s"]).write("\" );            LI.Controls.addControl('skillsTypeAhead-control-").reference(w.getPath(true,["name"]),w,"h").write('\', \'LI.Typeahead\', {              sources: {                skill: {url: \'/ta/skill\'}              }            });          <\/script>          <a href="#" class="btn-ternary" id="edit-skills-add-btn">').reference(w.get("tl_profile_form_new_add_skills__text_plain__add"),w,"h").write('</a>        </li>        <li id="ge-skills-editor" class="skills-editor">          <ol class="skills-list">            ').section(w.get("skills"),w,{"block":f},null).write('                        <li class="skill-jb">              <div class="skill-callout">                <select id="skills__proficiency" name="skills__proficiency">                  <option value="" selected=""></option>                </select>                <select id="skills__years" name="skills__years">                  <option value="" selected=""></option>                </select>              </div>              <span class="field">                <label for="skills__skill">                    <abbr title="This is a required field."><em>*</em></abbr>                    <span> Name of Skill:</span>                </label>                <input type="text" name="skills__skill" value="" id="skills__skill" autocomplete="off" size="4" />              </span>                            <span class="jellybean">                <span class="value"></span>                <span class="remove">X</span>              </span>            </li>          </ol>        </li>      </ul>       <input id="existingSkillIDs-editSkillsForm" type="hidden" value="').reference(w.getPath(false,["existingSkillIDs","value"]),w,"h").write('" name="').reference(w.getPath(false,["existingSkillIDs","name"]),w,"h").write('">        ').section(w.get("skills"),w,{"else":r,"block":q},null).write('    </fieldset>    <script type="text/javascript">      YEvent.on(YDom.get(\'').reference(w.get("name"),w,"h").write("_id'), 'keypress', function(evt){\tif(evt.keyCode === 13){\t  YEvent.preventDefault(evt);\t};      });      LI.define('GuidedEdit.localValidation.").reference(w.get("name"),w,"h").write("');      LI.GuidedEdit.localValidation.").reference(w.get("name"),w,"h").write(" = function(evt, form, action) {        var inputs, input, sortedInputs, dupSkills = false;              if (action != 'save') { return true; }              inputs = Y$('.jellybean .value', form);\t\tsortedInputs = inputs.sort(function(a,b){\t  var aVal = a.innerHTML.toUpperCase(),\t      bVal = b.innerHTML.toUpperCase();\t  return (aVal > bVal);\t});\t        for (var i = 0; i < inputs.length - 1; i += 1) {          if(YDom.getStyle(YDom.getAncestorByClassName(sortedInputs[i+1], 'jellybean-container-item'), 'display') != 'none'){\t    if (sortedInputs[i + 1].innerHTML.toUpperCase() == sortedInputs[i].innerHTML.toUpperCase()) {              dupSkills = true;              input = sortedInputs[i];            }          }        }              if (dupSkills) {          if (input.validationerror) {             input.validationerror.show(\"").reference(w.get("tl_profile_form_new_add_skills__text_plain__you_have_duplicates"),w,"h",["j","s"]).write('");          } else {            input.validationerror = new LI.GuidedEdit.FormError(input, "').reference(w.get("tl_profile_form_new_add_skills__text_plain__you_have_duplicates"),w,"h",["j","s"]).write("\");          }        \treturn false;        }        return true;      };                  new LI.ProfileSkillsEditor(YDom.get('ge-skills-editor'), {        maxSkills: 50,        addTaInputSel: '#skill-").reference(w.getPath(true,["name"]),w,"h").write("',        saveBtnSel: '#").reference(w.get("name"),w,"h").write("-btn-primary-submit',        messages: {          addMore: '").reference(w.get("tl_profile_form_new_add_skills__text_plain__you_can_add_more"),w,"h",["j","s"]).write("',          maxReached: '").reference(w.get("tl_profile_form_new_add_skills__text_plain__you_reached_max"),w,"h",["j","s"]).write("',          exceededLimit: '").reference(w.get("tl_profile_form_new_add_skills__text_plain__you_exceeded_limit"),w,"h",["j","s"]).write("'        },        editorConfig: {          beanContainers: 'li.skill-jb',           fieldNameTemplate: 'skills_$index$_skill',          maxInputFieldSize: 60,           valueDelimiter: '',           dragAndDrop: true,          autoBeanFieldCreation: false,          typeahead: {            resultsClass: 'edit-skills-ta-results',            sources: {              headline: {                url: '/ta/skill?goback=%2Enpe_*1_*1_*1_*1_*1_*1'              }            }          }        }      });    <\/script>        ").partial("action_params_with_dna",w).write("    ").write("    ").write("    ").write("    ").write("    ").partial("_guided_edit_flow_hidden",w).write("    ").partial("inputHidden",w.rebase(w.get("positionID"))).write("    ").partial("inputHidden",w.rebase(w.get("timestamp"))).write("  </form>  ").partial("_guided_edit_flow",w).write("</div>")
}function n(x,w){w=w.shiftBlocks(v);
return x.reference(w.get("tl_profile_form_new_add_skills__text_plain__close"),w,"h")
}function l(x,w){w=w.shiftBlocks(v);
return x.write("    <h1>").reference(w.get("firstTaskTitleString"),w,"h",["s"]).write("</h1>  ")
}function j(x,w){w=w.shiftBlocks(v);
return x.write("\t\t      ").reference(w.get("tl_profile_form_new_add_skills__text_plain__add_skills"),w,"h").write("        ")
}function h(x,w){w=w.shiftBlocks(v);
return x.write("          ").reference(w.get("tl_profile_form_new_add_skills__text_plain__add_more_skills"),w,"h").write("        ")
}function f(x,w){w=w.shiftBlocks(v);
return x.write('              <li class="skill-jb">                <div class="skill-callout">                  <select id="skills_').helper("idx",w,{"block":e},null).write('_proficiency" name="skills_').helper("idx",w,{"block":d},null).write('_proficiency">               \t    <option value="').reference(w.get("proficiency"),w,"h").write('" selected="">').reference(w.get("proficiency"),w,"h").write('</option>                  </select>                  <select id="skills_').helper("idx",w,{"block":c},null).write('_years" name="skills_').helper("idx",w,{"block":b},null).write('_years">               \t    <option value="').reference(w.get("yearsOfExperience"),w,"h").write('" selected="">').reference(w.get("yearsOfExperience"),w,"h").write('</option>                  </select>                </div>                <span class="field">                  <label for="skills_').helper("idx",w,{"block":u},null).write('_skills">                      <abbr title="').reference(w.get("tl_profile_form_new_add_skills__text_plain__required_field"),w,"h").write('"><em>*</em></abbr>                      <span>').reference(w.get("tl_profile_form_new_add_skills__text_plain__name_of_skill"),w,"h").write('</span>                  </label>                  <input type="text" name="skills_').helper("idx",w,{"block":t},null).write('_skill" value="').reference(w.get("name"),w,"h").write('" id="skills_').helper("idx",w,{"block":s},null).write('_skills" autocomplete="off" size="4" />                </span>                              <span class="jellybean">                  <span class="value">').reference(w.get("name"),w,"h").write('</span>                  <span class="remove">').reference(w.get("tl_profile_form_new_add_skills__text_plain__remove_skill"),w,"h").write("</span>                </span>              </li>            ")
}function e(x,w){w=w.shiftBlocks(v);
return x.reference(w.getPath(true,[]),w,"h")
}function d(x,w){w=w.shiftBlocks(v);
return x.reference(w.getPath(true,[]),w,"h")
}function c(x,w){w=w.shiftBlocks(v);
return x.reference(w.getPath(true,[]),w,"h")
}function b(x,w){w=w.shiftBlocks(v);
return x.reference(w.getPath(true,[]),w,"h")
}function u(x,w){w=w.shiftBlocks(v);
return x.reference(w.getPath(true,[]),w,"h")
}function t(x,w){w=w.shiftBlocks(v);
return x.reference(w.getPath(true,[]),w,"h")
}function s(x,w){w=w.shiftBlocks(v);
return x.reference(w.getPath(true,[]),w,"h")
}function r(x,w){w=w.shiftBlocks(v);
return x.write('        <input type="hidden" name="skills__elementId" value="" id="skills__elementId" />      ')
}function q(x,w){w=w.shiftBlocks(v);
return x.write('        <input type="hidden" name="skills_').helper("idx",w,{"block":p},null).write('_elementId" value="').reference(w.get("id"),w,"h").write('" id="skills_').helper("idx",w,{"block":m},null).write('_elementId" />      ')
}function p(x,w){w=w.shiftBlocks(v);
return x.reference(w.getPath(true,[]),w,"h")
}function m(x,w){w=w.shiftBlocks(v);
return x.reference(w.getPath(true,[]),w,"h")
}function k(x,w){w=w.shiftBlocks(v);
return x.reference(w.get("tl_profile_form_new_add_skills__text_plain__save"),w,"h")
}function i(x,w){w=w.shiftBlocks(v);
return x.reference(w.get("tl_profile_form_new_add_skills__text_plain__skip"),w,"h")
}function g(x,w){w=w.shiftBlocks(v);
return x.reference(w.get("tl_profile_form_new_add_skills__text_plain__added_all_skills"),w,"h")
}function a(x,w){w=w.shiftBlocks(v);
return x.write('    <p class="skills-counter">').reference(w.get("tl_profile_form_new_add_skills__text_plain__you_can_add_more"),w,"h",["s"]).write("</p>    ")
}return o
})();

/* tl/apps/profile/ge/form/share.js */

(function(){dust.register("share",e);
var f={closeText:d};
function e(h,g){g=g.shiftBlocks(f);
return h.write('<div class="guided-edit">  ').partial("_close_action",g).write("  ").write("  ").exists(g.get("firstTaskTitleString"),g,{"block":c},null).write('      <form class="standard-form broadcast-message" id="').reference(g.get("name"),g,"h").write('_id" name="').reference(g.get("name"),g,"h").write('" method="').reference(g.get("method"),g,"h").write('" action="').reference(g.get("action"),g,"h").write('">    <fieldset>      <legend><span>').reference(g.get("tl_profile_form_share__text_plain__share_your_profile"),g,"h").write('</span></legend>        <ul>          <li>                        <script type="text/javascript">              LI.i18n.register( "CheckTextarea-error", "').reference(g.get("tl_profile_form_share__text_plain__you_have_exceeded_the_maximum_by"),g,"h",["j","s"]).write('" );              LI.i18n.register( "CheckTextarea-empty",   "').reference(g.get("tl_profile_form_share__text_plain__you_may_add_up_to_x_characters"),g,"h",["j","s"]).write('" );              LI.i18n.register( "CheckTextarea-full", "').reference(g.get("tl_profile_form_share__text_plain__you_may_not_add_more_characters"),g,"h",["j","s"]).write('" );              LI.i18n.register( "CheckTextarea-countdown",   "').reference(g.get("tl_profile_form_share__text_plain__you_may_add_x_more_characters"),g,"h",["j","s"]).write('" );              LI.i18n.register( "CheckTextarea-twitter-under", "').reference(g.get("tl_profile_form_share__text_plain__count_x"),g,"h",["j","s"]).write('" );              LI.i18n.register( "CheckTextarea-twitter-over",   "').reference(g.get("tl_profile_form_share__text_plain__count_x_only_140_characters"),g,"h",["j","s"]).write('" );            <\/script>            ').section(g.get("broadcastMessage"),g,{"block":b},null).write('                        <p class="note public-profile-url">              ').exists(g.get("publicProfileUrl"),g,{"block":a},null).write("            </p>          </li>                </ul>      <script id=\"control-2\" type=\"text/javascript\">        LI.Controls.addControl('control-2', 'GuidedEditGenieBroadcast', {          url: '").reference(g.get("formProcessorLink"),g,"h").write("',          messageParamName : 'broadcastMessage',          providerParamName : 'provider',          urlParamName: 'URL',          previouslyTetheredFBParamName: 'previouslyTetheredFB',          futureOffsetParamName: 'futureOffset',          submitButtonClass : 'btn-icon',          popupTarget: 'genie_popup',          providerFieldId: 'provider_id',          textFieldId: 'broadcastMessage-share',          urlFieldId: 'URL_id',          previouslyTetheredFBFieldId: 'previouslyTetheredFB_id',          futureOffsetFieldId: 'futureOffset_id',                    tetherMap: {              'FACEBOOK' : '").reference(g.get("facebookAuthenticated"),g,"h").write("',              'TWITTER' : '").reference(g.get("twitterAuthenticated"),g,"h").write("'          },          genieFBUrl : '").reference(g.get("genieFBUrl"),g,"h").write("',          genieTwitterUrl: '").reference(g.get("genieTwitterUrl"),g,"h").write("',          broadcastSuccessUrl: '").reference(g.get("broadcastSuccessfulLink"),g,"h").write("',          twitterErrorMsg: '").reference(g.get("tl_profile_form_share__text_plain__twitter_error"),g,"h",["s","j"]).write("',          facebookErrorMsg: '").reference(g.get("tl_profile_form_share__text_plain__facebook_error"),g,"h",["s","j"]).write("',          fandangoPlaceholderId: '").reference(g.get("fandangoPlaceholderId"),g,"h").write('\'          });       <\/script>            <div class="actions-wrapper">        <p class="actions">          <a data-li-service="FACEBOOK" class="btn-icon facebook">            <span>').reference(g.get("tl_profile_form_share__text_plain__share_on_facebook"),g,"h").write('</span>          </a>          <span class="shared-success" id="shared-facebook">').reference(g.get("tl_profile_form_share__text_plain__shared_on_facebook"),g,"h").write('</span>          <a data-li-service="TWITTER" class="btn-icon twitter">            <span>').reference(g.get("tl_profile_form_share__text_plain__share_on_twitter"),g,"h").write('</span>          </a>          <span class="shared-success" id="shared-twitter">').reference(g.get("tl_profile_form_share__text_plain__shared_on_twitter"),g,"h").write('</span>          <span class="alternate">            <a href="').reference(g.get("skipAction"),g,"h").write('" role="action:skip" id="share-skip">').reference(g.get("tl_profile_form_share__text_plain__skip"),g,"h").write('</a>            <a href="').reference(g.get("skipAction"),g,"h").write('" role="action:skip" id="share-continue">').reference(g.get("tl_profile_form_share__text_plain__continue"),g,"h").write("</a>          </span>        </p>      </div>      ").partial("inputHidden",g.rebase(g.get("updatedProfile"))).write("      ").partial("inputHidden",g.rebase(g.get("provider"))).write("      ").partial("inputHidden",g.rebase(g.get("URL"))).write("      ").partial("inputHidden",g.rebase(g.get("previouslyTetheredFB"))).write("            ").partial("_guided_edit_flow_hidden",g).write("    </fieldset>  </form>").partial("_guided_edit_flow",g).write("</div>")
}function d(h,g){g=g.shiftBlocks(f);
return h.reference(g.get("tl_profile_form_update_headline__text_plain__close"),g,"h")
}function c(h,g){g=g.shiftBlocks(f);
return h.write("    <h1>").reference(g.get("firstTaskTitleString"),g,"h",["s"]).write("</h1>  ")
}function b(h,g){g=g.shiftBlocks(f);
return h.write('              <textarea cols="25" rows="7" id="').reference(g.getPath(true,["id"]),g,"h").write('" name="').reference(g.getPath(true,["name"]),g,"h").write('">').reference(g.getPath(true,["value"]),g,"h",["s"]).write('</textarea>              <script id="checkTextArea-control-').reference(g.getPath(true,["name"]),g,"h").write('" type="text/javascript">                LI.Controls.addControl(\'checkTextArea-control-').reference(g.getPath(true,["name"]),g,"h").write("', 'GuidedEdit.CheckTextarea', {                  maxLength: 140                });              <\/script>            ")
}function a(h,g){g=g.shiftBlocks(f);
return h.write("                ").reference(g.get("tl_profile_form_share__text_plain__your_profile_url"),g,"h").write(" ").reference(g.get("publicProfileUrl"),g,"h").write("              ")
}return e
})();

/* tl/apps/profile/ge/form/import.js */

(function(){dust.register("import",k);
var a={closeText:j};
function k(o,n){n=n.shiftBlocks(a);
return o.write('<div class="guided-edit">  ').partial("_close_action",n).write("  ").write("  ").exists(n.get("firstTaskTitleString"),n,{"block":i},null).write('  <form class="standard-form facebook-import" id="').reference(n.get("name"),n,"h").write('_id" name="').reference(n.get("name"),n,"h").write('" method="').reference(n.get("method"),n,"h").write('" action="').reference(n.get("action"),n,"h").write('">    <fieldset class="task-content">      <legend><span>').reference(n.get("tl_profile_form_import__text_plain__successfully_shared"),n,"h",["s"]).write("</span></legend>            ").exists(n.get("unableToFetchData"),n,{"else":h,"block":l},null).write('      <div class="actions-wrapper">        <p class="actions">          <input type="submit" role="action:save" name="').reference(n.get("name"),n,"h").write("-save\" value='").reference(n.get("tl_profile_form_import__text_plain__continue"),n,"h",["s"]).write('\' class="btn-action" id="').reference(n.get("name"),n,"h").write('-btn-primary-submit"/>          <span class="alternate">            <a href="').reference(n.get("skipAction"),n,"h").write('" role="action:skip" id="import-skip">').reference(n.get("tl_profile_form_import__text_plain__skip"),n,"h",["s"]).write("</a>          </span>        </p>      </div>      ").partial("inputHidden",n.rebase(n.get("fandangoIdParam"))).write("      ").partial("_guided_edit_flow_hidden",n).write("    </fieldset>  </form>    ").partial("_guided_edit_flow",n).write("</div>")
}function j(o,n){n=n.shiftBlocks(a);
return o.reference(n.get("tl_profile_form_import__text_plain__close"),n,"h",["s"])
}function i(o,n){n=n.shiftBlocks(a);
return o.write("    <h1>").reference(n.get("firstTaskTitleString"),n,"h",["s"]).write("</h1>  ")
}function h(o,n){n=n.shiftBlocks(a);
return o.write('          <p class="note examples">            ').reference(n.get("tl_profile_form_import__text_plain__good_news_you_have_friends"),n,"h",["s"]).write('          </p>          <div id="fb_friends_pics">            ').section(n.get("displayFacebookFriends"),n,{"block":g},null).write("          </div>        ")
}function g(o,n){n=n.shiftBlocks(a);
return o.write('              <img src="').reference(n.getPath(true,[]),n,"h").write('" class="fbpic ').helper("idx",n,{"block":f},null).write('"/>            ')
}function f(o,n){n=n.shiftBlocks(a);
return o.helper("if",n,{"else":e,"block":d},{"cond":c}).helper("if",n,{"block":b},{"cond":m})
}function e(o,n){n=n.shiftBlocks(a);
return o.write("small")
}function d(o,n){n=n.shiftBlocks(a);
return o.write("large")
}function c(o,n){n=n.shiftBlocks(a);
return o.write("'").reference(n.getPath(true,[]),n,"h").write("'==0")
}function b(o,n){n=n.shiftBlocks(a);
return o.write(" odd")
}function m(o,n){n=n.shiftBlocks(a);
return o.write("'").reference(n.getPath(true,[]),n,"h").write("'>0 && '").reference(n.getPath(true,[]),n,"h").write("'%2 == 0")
}function l(o,n){n=n.shiftBlocks(a);
return o.write('        <p class="note examples">          ').reference(n.get("tl_profile_form_import__text_plain__invite_some_friends_to_join_linkedin"),n,"h",["s"]).write("        </p>        ")
}return k
})();

/* tl/nprofile/form/has_projects.js */

(function(){dust.register("has_projects",e);
var g={closeText:d,yesText:h,noText:f};
function e(j,i){i=i.shiftBlocks(g);
return j.write('<div class="guided-edit">  ').partial("_close_action",i).write("  ").write("  ").exists(i.get("firstTaskTitleString"),i,{"block":c},null).write('\t  <form class="standard-form" id="').reference(i.get("name"),i,"h").write('_id" name="').reference(i.get("name"),i,"h").write('" method="').reference(i.get("method"),i,"h").write('" action="').reference(i.get("action"),i,"h").write('">    <fieldset class="task-content">      ').exists(i.getPath(true,["hasProject"]),i,{"else":b,"block":a},null).write("      ").partial("action_params_yes_no",i).write("      ").write("      ").write("      ").partial("_guided_edit_flow_hidden",i).write("    </fieldset>  </form></div>")
}function d(j,i){i=i.shiftBlocks(g);
return j.reference(i.get("tl_profile_form_has_projects__text_plain__close"),i,"h")
}function c(j,i){i=i.shiftBlocks(g);
return j.write("    <h1>").reference(i.get("firstTaskTitleString"),i,"h",["s"]).write("</h1>  ")
}function b(j,i){i=i.shiftBlocks(g);
return j.write("        <legend><span>").reference(i.get("tl_profile_form_has_projects__text_plain__do_you_have_any_projects"),i,"h",["s"]).write("</span></legend>      ")
}function a(j,i){i=i.shiftBlocks(g);
return j.write("        <legend><span>").reference(i.get("tl_profile_form_has_projects__text_plain__do_you_have_any_more_projects"),i,"h",["s"]).write("</span></legend>      ")
}function h(j,i){i=i.shiftBlocks(g);
return j.reference(i.get("tl_profile_form_has_projects__text_plain__yes"),i,"h")
}function f(j,i){i=i.shiftBlocks(g);
return j.reference(i.get("tl_profile_form_has_projects__text_plain__no"),i,"h")
}return e
})();

/* tl/nprofile/form/project_name.js */

(function(){dust.register("project_name",e);
var f={closeText:d,saveText:b,skipText:a};
function e(h,g){g=g.shiftBlocks(f);
return h.write('<div class="guided-edit">  ').partial("_close_action",g).write("  ").write("  ").exists(g.get("firstTaskTitleString"),g,{"block":c},null).write('  <form class="standard-form" id="').reference(g.get("name"),g,"h").write('_id" name="').reference(g.get("name"),g,"h").write('" method="').reference(g.get("method"),g,"h").write('" action="').reference(g.get("action"),g,"h").write('">    <fieldset>      <legend><span>').reference(g.get("tl_profile_form_project_name__text_plain__lets_start_by_creating_a_title_for_your_project"),g,"h",["s"]).write('</span></legend>      <ul>        <li>          <input type="text" maxlength="255" size="32" id="title-').reference(g.getPath(true,["name"]),g,"h").write('" value="" name="').reference(g.getPath(false,["title","name"]),g,"h").write('" class="yui-ac-input" autocomplete="off" data-li-validation=\'{"required": true, "maxlength": ').reference(g.get("titleMaxLength"),g,"h").write("}'/>          <label for=\"title-").reference(g.getPath(true,["name"]),g,"h").write('" id="').reference(g.getPath(true,["id"]),g,"h").write('-title-label">').reference(g.get("tl_profile_form_project_name__text_plain__project_name"),g,"h").write('</label>          <script id="title-').reference(g.getPath(true,["name"]),g,"h").write('-control" type="text/javascript">            LI.Controls.addControl(\'title-').reference(g.getPath(true,["name"]),g,"h").write("-control', 'GhostLabel');          <\/script>        </li>      </ul>      ").partial("action_params",g).write("      ").write("      ").write("      ").partial("_guided_edit_flow_hidden",g).write("      ").partial("inputHidden",g.rebase(g.get("timestamp"))).write('    </fieldset>    <script type="text/javascript">      LI.i18n.register( "validation-fail-required-field", "').reference(g.get("tl_profile_form_project_name__text_plain__this_is_a_required_field"),g,"h",["j","s"]).write('" );    <\/script>      </form></div>')
}function d(h,g){g=g.shiftBlocks(f);
return h.reference(g.get("tl_profile_form_project_name__text_plain__close"),g,"h")
}function c(h,g){g=g.shiftBlocks(f);
return h.write("    <h1>").reference(g.get("firstTaskTitleString"),g,"h",["s"]).write("</h1>  ")
}function b(h,g){g=g.shiftBlocks(f);
return h.reference(g.get("tl_profile_form_project_name__text_plain__save"),g,"h")
}function a(h,g){g=g.shiftBlocks(f);
return h.reference(g.get("tl_profile_form_project_name__text_plain__skip"),g,"h")
}return e
})();

/* tl/apps/profile/ge/form/project_dates.js */

(function(){dust.register("project_dates",j);
var a={closeText:i,saveText:c,skipText:b};
function j(l,k){k=k.shiftBlocks(a);
return l.write('<div class="guided-edit">  ').partial("_close_action",k).write("  ").write("  ").exists(k.get("firstTaskTitleString"),k,{"block":h},null).write('    <form class="standard-form" id="').reference(k.getPath(true,["name"]),k,"h").write('_id" name="').reference(k.getPath(true,["name"]),k,"h").write('" method="').reference(k.getPath(true,["method"]),k,"h").write('" action="').reference(k.get("action"),k,"h").write('">    <fieldset>      <legend><span>').reference(k.get("tl_profile_form_project_dates__text_plain__when_did_you_work_on"),k,"h").write('</span></legend>      <ul>        <li class="start-date">          ').section(k.get("startDateMonth"),k,{"block":g},{"choose":k.get("tl_profile_form_project_dates__text_plain__month")}).write('          <select name="').reference(k.getPath(false,["startDateYear","name"]),k,"h").write('" id="').reference(k.getPath(false,["startDateYear","id"]),k,"h").write('" class="').reference(k.getPath(false,["startDateYear","class"]),k,"h").write('">            <option value="" selected>').reference(k.get("tl_profile_form_project_dates__text_plain__year"),k,"h").write("</option>            ").section(k.get("startYearList"),k,{"block":f},null).write('          </select>        </li>        <li id="project-to">          <span class="to">').reference(k.get("tl_profile_form_project_dates__text_plain__to"),k,"h").write('</span>        </li>        <li id="project-end-date" class="end-date">          ').section(k.get("endDateMonth"),k,{"block":e},{"choose":k.get("tl_profile_form_project_dates__text_plain__month")}).write('          <select name="').reference(k.getPath(false,["endDateYear","name"]),k,"h").write('" id="').reference(k.getPath(false,["endDateYear","id"]),k,"h").write('" class="').reference(k.getPath(false,["endDateYear","class"]),k,"h").write('">            <option value="" selected>').reference(k.get("tl_profile_form_project_dates__text_plain__year"),k,"h").write("</option>            ").section(k.get("endYearList"),k,{"block":d},null).write('          </select>        </li>        <li id="project-present" style="display: none;">          <span class="to">').reference(k.get("tl_profile_form_project_dates__text_plain__to_present"),k,"h").write('</span>        </li>        <li class="checkbox">          <label for="').reference(k.getPath(false,["isCurrent","id"]),k,"h").write('" id="').reference(k.getPath(true,["id"]),k,"h").write('-label">').reference(k.get("tl_profile_form_project_dates__text_plain__project_is_ongoing"),k,"h").write("          ").partial("inputCheckbox",k.rebase(k.get("isCurrent"))).write("          </label>        </li>      </ul>      ").partial("action_params",k).write("      ").write("      ").write("      ").partial("_guided_edit_flow_hidden",k).write("      ").partial("inputHidden",k.rebase(k.get("projectID"))).write("      ").partial("inputHidden",k.rebase(k.get("timestamp"))).write('    </fieldset>    <script type="text/javascript">      (function() {        var onGoingChkBoxId = "').reference(k.getPath(false,["isCurrent","id"]),k,"h").write("\";        function refreshDateControls(dateType, ongoing) {          if (dateType == 'single') {            LI.hide('project-end-date');            LI.hide('project-to');            LI.hide('project-present');          } else if (dateType == 'range') {            if (ongoing) {              LI.hide('project-end-date');              LI.hide('project-to');              LI.show('project-present');            } else {              LI.show('project-end-date');              LI.show('project-to');              LI.hide('project-present');            }          }          var onGoingChkBox = YDom.get(onGoingChkBoxId);          onGoingChkBox.checked = ongoing;        }        YEvent.on( onGoingChkBoxId, 'click', function(evt){          var trgt = YEvent.getTarget(evt);          if (trgt) {            if (trgt.checked) {              refreshDateControls('range', true);            } else {              refreshDateControls('range', false);            }          }        });      })();    <\/script>  </form></div>")
}function i(l,k){k=k.shiftBlocks(a);
return l.reference(k.get("tl_profile_form_project_dates__text_plain__close"),k,"h")
}function h(l,k){k=k.shiftBlocks(a);
return l.write("    <h1>").reference(k.get("firstTaskTitleString"),k,"h",["s"]).write("</h1>  ")
}function g(l,k){k=k.shiftBlocks(a);
return l.write("            ").partial("singleSelect",k).write("          ")
}function f(l,k){k=k.shiftBlocks(a);
return l.write('            <option value="').reference(k.getPath(true,["year"]),k,"h").write('">').reference(k.getPath(true,["year"]),k,"h").write("</option>            ")
}function e(l,k){k=k.shiftBlocks(a);
return l.write("            ").partial("singleSelect",k).write("          ")
}function d(l,k){k=k.shiftBlocks(a);
return l.write('            <option value="').reference(k.getPath(true,["year"]),k,"h").write('">').reference(k.getPath(true,["year"]),k,"h").write("</option>            ")
}function c(l,k){k=k.shiftBlocks(a);
return l.reference(k.get("tl_profile_form_project_dates__text_plain__save"),k,"h")
}function b(l,k){k=k.shiftBlocks(a);
return l.reference(k.get("tl_profile_form_project_dates__text_plain__skip"),k,"h")
}return j
})();

/* tl/apps/profile/ge/form/project_team_members.js */

(function(){dust.register("project_team_members",e);
var g={closeText:d,saveText:a,skipText:h,dnaText:f};
function e(j,i){i=i.shiftBlocks(g);
return j.write('<div class="guided-edit">  ').partial("_close_action",i).write("  ").write("  ").exists(i.get("firstTaskTitleString"),i,{"block":c},null).write('  <form class="standard-form" id="').reference(i.get("name"),i,"h").write('_id" name="').reference(i.get("name"),i,"h").write('" method="').reference(i.get("method"),i,"h").write('" action="').reference(i.get("action"),i,"h").write('">    <fieldset>      <legend><span>').reference(i.get("tl_profile_form_project_team_members__text_plain__who_else_worked_with_you_on_project"),i,"h").write("</span></legend>      <ul>        <li>").reference(i.get("tl_profile_form_project_team_members__text_plain__please_use_separate_entries"),i,"h").write('</li>      </ul>      <div id="ccAutoComplete">        <div id="ccAutoCompleteSpacer"></div>      ').section(i.get("memberAttributeList"),i,{"block":b},null).write('        <div id="ccInputHolder">            <input type="text" size="16" maxlength="110" id="ccInput">        </div>      </div>      <ul>        <li><span id="ccCounter">&nbsp;</span></li>      </ul>      ').partial("action_params_with_dna",i).write("      ").write("      ").write("      ").write("      ").partial("_guided_edit_flow_hidden",i).write("      ").partial("inputHidden",i.rebase(i.get("projectID"))).write("      ").partial("inputHidden",i.rebase(i.get("creatorContributorId"))).write("      ").partial("inputHidden",i.rebase(i.get("creatorName"))).write('      <input id="targetIdsHolder" type="hidden" name="targetIdsHolder" value="">      ').partial("inputHidden",i.rebase(i.get("timestamp"))).write('    </fieldset>        <div class="ac">      <div id="ccContainer" class="inpt"></div>    </div>    <script type="text/javascript">      LI.i18n.register("memberAddMore1", "').reference(i.get("tl_profile_form_project_team_members__text_plain__you_can_add_1_more"),i,"h",["s"]).write('");      LI.i18n.register("memberAddMore2", "').reference(i.get("tl_profile_form_project_team_members__text_plain__you_can_add_2_more"),i,"h",["s"]).write('");      LI.i18n.register("memberAddMore3", "').reference(i.get("tl_profile_form_project_team_members__text_plain__you_can_add_3_more"),i,"h",["s"]).write('");      LI.i18n.register("memberAddMore4", "').reference(i.get("tl_profile_form_project_team_members__text_plain__you_can_add_4_more"),i,"h",["s"]).write('");      LI.i18n.register("memberAddMore5", "').reference(i.get("tl_profile_form_project_team_members__text_plain__you_can_add_5_more"),i,"h",["s"]).write('");      LI.i18n.register("memberAddMore6", "').reference(i.get("tl_profile_form_project_team_members__text_plain__you_can_add_6_more"),i,"h",["s"]).write('");      LI.i18n.register("memberAddMore7", "').reference(i.get("tl_profile_form_project_team_members__text_plain__you_can_add_7_more"),i,"h",["s"]).write('");      LI.i18n.register("memberAddMore8", "').reference(i.get("tl_profile_form_project_team_members__text_plain__you_can_add_8_more"),i,"h",["s"]).write('");      LI.i18n.register("memberAddMore9", "').reference(i.get("tl_profile_form_project_team_members__text_plain__you_can_add_9_more"),i,"h",["s"]).write('");      LI.i18n.register("memberAddMore10", "').reference(i.get("tl_profile_form_project_team_members__text_plain__you_can_add_10_more"),i,"h",["s"]).write('");      LI.i18n.register("memberMaxReached", "').reference(i.get("tl_profile_form_project_team_members__text_plain__you_reached_max"),i,"h",["s"]).write('");      if (connChooser && LI.ProfileMembersChooserInput) {        connChooser.init();        var projectMembersChooser = new LI.ProfileMembersChooserInput("project_team_members_id", {          typeaheadUrl      : LI.i18n.get("project-members-typeahead-url"),          targetIdsHolderId : "targetIdsHolder",          maxReachedMsgId   : "memberMaxReached",          addMoreMsgIdPrefix: "memberAddMore",          fieldIdPrefix     : "project-team-members",          fieldNamePrefix   : "projectMembers"        });                projectMembersChooser.init();      }      LI.define(\'GuidedEdit.localValidation.').reference(i.get("name"),i,"h").write("');      LI.GuidedEdit.localValidation.").reference(i.get("name"),i,"h").write(" = function(evt, form, action) {        var entries, input, hasOne = false;        if (action != 'save') {          return true;        }        entries = Y$('#ccAutoComplete .ccEntry', form);        hasOne = (entries && entries.length > 0);        if (!hasOne) {          input = Y$('#ccInput', form, true);          if (input) {            if (input.validationerror) {              input.validationerror.show(\"").reference(i.get("tl_profile_form_project_team_members__text_plain__please_enter_at_least_one"),i,"h",["j","s"]).write('");            } else {              new LI.GuidedEdit.FormError(input, "').reference(i.get("tl_profile_form_project_team_members__text_plain__please_enter_at_least_one"),i,"h",["j","s"]).write('");            }          }          return false;        }        return true;      };    <\/script>  </form></div>')
}function d(j,i){i=i.shiftBlocks(g);
return j.reference(i.get("tl_profile_form_project_team_members__text_plain__close"),i,"h")
}function c(j,i){i=i.shiftBlocks(g);
return j.write("    <h1>").reference(i.get("firstTaskTitleString"),i,"h",["s"]).write("</h1>  ")
}function b(j,i){i=i.shiftBlocks(g);
return j.write('        <p>        <span class="clsEntry" data-li-name="').reference(i.getPath(true,["name"]),i,"h").write('" id="').reference(i.getPath(true,["memberId"]),i,"h").write('-name">          ').reference(i.getPath(true,["name"]),i,"h").write('        <input type="hidden" name="project-team-members-').reference(i.getPath(true,["memberIndex"]),i,"h").write('_id" value="').reference(i.getPath(true,["memberId"]),i,"h").write('" id="projectMembers_').reference(i.getPath(true,["memberIndex"]),i,"h").write('_id ">        <input type="hidden" name="project-team-members-').reference(i.getPath(true,["memberIndex"]),i,"h").write('_name" value="').reference(i.getPath(true,["name"]),i,"h").write('" id="projectMembers_').reference(i.getPath(true,["memberIndex"]),i,"h").write('_name">        <input type="hidden" name="project-team-members-').reference(i.getPath(true,["memberIndex"]),i,"h").write('_contributorId" value="').reference(i.getPath(true,["name"]),i,"h").write('" id="projectMembers_').reference(i.getPath(true,["memberIndex"]),i,"h").write('_contributorId">        </span>        </p>      ')
}function a(j,i){i=i.shiftBlocks(g);
return j.reference(i.get("tl_profile_form_project_team_members__text_plain__save"),i,"h")
}function h(j,i){i=i.shiftBlocks(g);
return j.reference(i.get("tl_profile_form_project_team_members__text_plain__skip"),i,"h")
}function f(j,i){i=i.shiftBlocks(g);
return j.reference(i.get("tl_profile_form_project_team_members__text_plain__i_worked_alone_on_this_project"),i,"h")
}return e
})();

/* tl/nprofile/form/project_occupation.js */

(function(){dust.register("project_occupation",e);
var g={closeText:d,saveText:a,skipText:h,dnaText:f};
function e(j,i){i=i.shiftBlocks(g);
return j.write('<div class="guided-edit">  ').partial("_close_action",i).write("  ").write("  ").exists(i.get("firstTaskTitleString"),i,{"block":c},null).write('    <form class="standard-form" id="').reference(i.get("name"),i,"h").write('_id" name="').reference(i.get("name"),i,"h").write('" method="').reference(i.get("method"),i,"h").write('" action="').reference(i.get("action"),i,"h").write('">    <fieldset>      <legend><span>').reference(i.get("tl_profile_form_project_occupation__text_plain__do_you_want_to_associate_project_with_your_experience_or_education"),i,"h").write('</span></legend>      <ul>        <li class="occupation">          ').section(i.get("projectOccupation"),i,{"block":b},null).write("        </li>      </ul>            ").partial("action_params_with_dna",i).write("      ").write("      ").write("      ").write("            ").partial("_guided_edit_flow_hidden",i).write("      ").partial("inputHidden",i.rebase(i.get("projectID"))).write("      ").partial("inputHidden",i.rebase(i.get("timestamp"))).write("          </fieldset>  </form></div>")
}function d(j,i){i=i.shiftBlocks(g);
return j.reference(i.get("tl_profile_form_project_occupation__text_plain__close"),i,"h")
}function c(j,i){i=i.shiftBlocks(g);
return j.write("    <h1>").reference(i.get("firstTaskTitleString"),i,"h",["s"]).write("</h1>  ")
}function b(j,i){i=i.shiftBlocks(g);
return j.write("            ").partial("singleSelect",i).write("          ")
}function a(j,i){i=i.shiftBlocks(g);
return j.reference(i.get("tl_profile_form_project_occupation__text_plain__save"),i,"h")
}function h(j,i){i=i.shiftBlocks(g);
return j.reference(i.get("tl_profile_form_project_occupation__text_plain__skip"),i,"h")
}function f(j,i){i=i.shiftBlocks(g);
return j.reference(i.get("tl_profile_form_project_occupation__text_plain__none_of_these"),i,"h")
}return e
})();

/* tl/nprofile/form/project_url.js */

(function(){dust.register("project_url",e);
var f={closeText:d,saveText:b,skipText:a,dnaText:g};
function e(i,h){h=h.shiftBlocks(f);
return i.write('<div class="guided-edit">  ').partial("_close_action",h).write("  ").write("  ").exists(h.get("firstTaskTitleString"),h,{"block":c},null).write('    <form class="standard-form" id="').reference(h.get("name"),h,"h").write('_id" name="').reference(h.get("name"),h,"h").write('" method="').reference(h.get("method"),h,"h").write('" action="').reference(h.get("action"),h,"h").write('">    <fieldset>      <legend><span>').reference(h.get("tl_profile_form_project_url__text_plain__do_you_have_url_for_your_project"),h,"h",["s"]).write('</span></legend>      <ul>        <li>          <label for="projectUrl-').reference(h.getPath(true,["name"]),h,"h").write('" id="').reference(h.getPath(true,["id"]),h,"h").write('-project-label">').reference(h.get("tl_profile_form_project_url__text_plain__enter_a_url"),h,"h").write('</label>          <script id="projectUrl-').reference(h.get("name"),h,"h").write('-control" type="text/javascript">            LI.Controls.addControl(\'projectUrl-').reference(h.get("name"),h,"h").write("-control', 'GhostLabel');          <\/script>          ").partial("inputText",h.rebase(h.get("projectUrl"))).write("        </li>      </ul>      ").partial("action_params_with_dna",h).write("      ").write("      ").write("      ").write("      ").partial("_guided_edit_flow_hidden",h).write("      ").partial("inputHidden",h.rebase(h.get("projectID"))).write("      ").partial("inputHidden",h.rebase(h.get("timestamp"))).write('    </fieldset>    <script type="text/javascript">      LI.i18n.register( "validation-fail-required-field", "').reference(h.get("tl_profile_form_project_url__text_plain__this_is_a_required_field"),h,"h",["j","s"]).write('" );    <\/script>      </form></div>')
}function d(i,h){h=h.shiftBlocks(f);
return i.reference(h.get("tl_profile_form_project_url__text_plain__close"),h,"h")
}function c(i,h){h=h.shiftBlocks(f);
return i.write("    <h1>").reference(h.get("firstTaskTitleString"),h,"h",["s"]).write("</h1>  ")
}function b(i,h){h=h.shiftBlocks(f);
return i.reference(h.get("tl_profile_form_project_url__text_plain__save"),h,"h")
}function a(i,h){h=h.shiftBlocks(f);
return i.reference(h.get("tl_profile_form_project_url__text_plain__skip"),h,"h")
}function g(i,h){h=h.shiftBlocks(f);
return i.reference(h.get("tl_profile_form_project_url__text_plain__no_url"),h,"h")
}return e
})();

/* tl/nprofile/form/project_description.js */

(function(){dust.register("project_description",e);
var f={closeText:d,saveText:b,skipText:a};
function e(h,g){g=g.shiftBlocks(f);
return h.write('<div class="guided-edit">  ').partial("_close_action",g).write("  ").write("  ").exists(g.get("firstTaskTitleString"),g,{"block":c},null).write('    <form class="standard-form" id="').reference(g.get("name"),g,"h").write('_id" name="').reference(g.get("name"),g,"h").write('" method="').reference(g.get("method"),g,"h").write('" action="').reference(g.get("action"),g,"h").write('">    <fieldset>      <legend><span>').reference(g.get("tl_profile_form_project_description__text_plain__how_would_you_describe_project"),g,"h").write('</span></legend>      <ul>        <li>          <script type="text/javascript">            LI.i18n.register( "CheckTextarea-error", "').reference(g.get("tl_profile_form_project_description__text_plain__you_have_exceeded_the_maximum_by"),g,"h",["s"]).write('" );            LI.i18n.register( "CheckTextarea-empty",   "').reference(g.get("tl_profile_form_project_description__text_plain__you_may_add_up_to_x_characters"),g,"h",["s"]).write('" );            LI.i18n.register( "CheckTextarea-full", "').reference(g.get("tl_profile_form_project_description__text_plain__you_may_not_add_more_characters"),g,"h",["s"]).write('" );            LI.i18n.register( "CheckTextarea-countdown",   "').reference(g.get("tl_profile_form_project_description__text_plain__you_may_add_x_more_characters"),g,"h",["s"]).write('" );            LI.i18n.register( "CheckTextarea-twitter-under", "').reference(g.get("tl_profile_form_project_description__text_plain__count_x"),g,"h",["s"]).write('" );            LI.i18n.register( "CheckTextarea-twitter-over",   "').reference(g.get("tl_profile_form_project_description__text_plain__count_x_only_140_characters"),g,"h",["s"]).write('" );          <\/script>          ').partial("textArea",g.rebase(g.get("projectDescription"))).write("        </li>      </ul>      ").partial("action_params",g).write("      ").write("      ").write("      ").partial("_guided_edit_flow_hidden",g).write("      ").partial("inputHidden",g.rebase(g.get("projectID"))).write("      ").partial("inputHidden",g.rebase(g.get("timestamp"))).write("    </fieldset>  </form></div>")
}function d(h,g){g=g.shiftBlocks(f);
return h.reference(g.get("tl_profile_form_project_description__text_plain__close"),g,"h")
}function c(h,g){g=g.shiftBlocks(f);
return h.write("    <h1>").reference(g.get("firstTaskTitleString"),g,"h",["s"]).write("</h1>  ")
}function b(h,g){g=g.shiftBlocks(f);
return h.reference(g.get("tl_profile_form_project_description__text_plain__save"),g,"h")
}function a(h,g){g=g.shiftBlocks(f);
return h.reference(g.get("tl_profile_form_project_description__text_plain__skip"),g,"h")
}return e
})();

/* tl/nprofile/form/suggested_skills.js */

(function(){dust.register("suggested_skills",i);
var a={closeText:h,saveText:c,skipText:b};
function i(k,j){j=j.shiftBlocks(a);
return k.write('<div class="guided-edit">  ').partial("_close_action",j).write("  ").write("  ").exists(j.get("firstTaskTitleString"),j,{"block":g},null).write('  <form class="standard-form" id="').reference(j.get("name"),j,"h").write('_id" name="').reference(j.get("name"),j,"h").write('" method="').reference(j.get("method"),j,"h").write('" action="').reference(j.get("action"),j,"h").write('">    <fieldset>      <legend>        ').reference(j.get("tl_profile_form_suggested_skills__text_plain__do_you_have_skills"),j,"h").write('      </legend>            <ol class="skills-jellybeans">        ').section(j.get("skillsList"),j,{"block":f},null).write('      </ol>          <div class="actions-wrapper">        <p class="actions">          <input type="submit" role="action:save" name="').reference(j.get("name"),j,"h").write('-save" value="').block(j.getBlock("saveText"),j,{},null).write('" class="btn-action" id="').reference(j.get("name"),j,"h").write('-btn-primary-submit"/>          <input type="submit" role="action:no" value="').block(j.getBlock("skipText"),j,{},null).write('" class="btn-secondary last-action" id="').reference(j.get("name"),j,"h").write('-btn-primary-no"/>        </p>        ').write("        ").write("      </div>          </fieldset>      ").partial("_guided_edit_flow_hidden",j).write("    ").partial("inputHidden",j.rebase(j.get("positionID"))).write("    ").partial("inputHidden",j.rebase(j.get("timestamp"))).write('    <input type="hidden" class="max-skills" name="maxSkillsParam" value="" />  </form>  ').partial("_guided_edit_flow",j).write('    <script type="text/javascript">    (function(){      var form = YDom.get(\'').reference(j.get("name"),j,"h").write("_id'),          maxSkillsParam = YDom.getElementsByClassName('max-skills', 'input', form)[0];            maxSkillsParam.value = YDom.getElementsByClassName('jellybean', 'li', form).length;            jellybeanNoLink();                  /**       * Make AJAX call to remove skill, then remove element       * @method removeSkill       * @private       * @param {DOM Element} item - List item for skill to be removed       */      function removeSkill(item){                        LI.asyncRequest('POST', YDom.getAttribute(item, 'href'), {          success: function(resp){            var parent = item.parentNode,                len, jellybeans;            parent.parentNode.removeChild(parent);            jellybeans = YDom.getElementsByClassName('jellybean', 'li', form);                        maxSkillsParam.value = jellybeans.length;            jellybeanNoLink();                        var thisBean, i;            len = jellybeans.length;            for (i=0; i<len; i++){              thisBean = jellybeans[i];                                Y$('input[name^=skillName]', thisBean, true).setAttribute('name', 'skillName'+i);              Y$('input[name^=skillId]', thisBean, true).setAttribute('name', 'skillId'+i);            }          }        });      }            function jellybeanNoLink(){        if(YDom.getElementsByClassName('jellybean', 'li', form).length === 1){           var jellybean = YDom.getElementsByClassName('jellybean', 'li', form)[0],              closeLink = YDom.getElementsByClassName('remove', 'a', jellybean)[0],              skipLink = YDom.get('").reference(j.get("name"),j,"h").write("-btn-primary-no');          YDom.setAttribute(closeLink, 'role', 'action:no');          YDom.setAttribute(closeLink, 'href', YDom.getAttribute(skipLink, 'href'));        };      }            YEvent.on('").reference(j.get("name"),j,"h").write("_id', 'click', function(evt){        YEvent.preventDefault(evt);        var target = YEvent.getTarget(evt);                if(YDom.hasClass(target, 'remove') && !(YDom.getAttribute(target, 'role') === 'action:no')){           removeSkill(target);        };              })          }());  <\/script></div>")
}function h(k,j){j=j.shiftBlocks(a);
return k.reference(j.get("tl_profile_form_suggested_skills__text_plain__close"),j,"h")
}function g(k,j){j=j.shiftBlocks(a);
return k.write("    <h1>").reference(j.get("firstTaskTitleString"),j,"h",["s"]).write("</h1>  ")
}function f(k,j){j=j.shiftBlocks(a);
return k.write('          <li class="jellybean">              <span class="value">').reference(j.getPath(true,["name"]),j,"h").write('</span>              <a href="').reference(j.getPath(true,["closeLink"]),j,"h").write('" class="remove" title="').reference(j.get("tl_profile_form_suggested_skills__text_plain__close"),j,"h").write('">x</a>              <input type="hidden" class="skill-name" name="skillName').helper("idx",j,{"block":e},null).write('" value="').reference(j.getPath(true,["name"]),j,"h").write('" />              <input type="hidden" class="skill-id" name="skillId').helper("idx",j,{"block":d},null).write('" value="').reference(j.getPath(true,["canonicalId"]),j,"h").write('" />          </li>        ')
}function e(k,j){j=j.shiftBlocks(a);
return k.reference(j.getPath(true,[]),j,"h")
}function d(k,j){j=j.shiftBlocks(a);
return k.reference(j.getPath(true,[]),j,"h")
}function c(k,j){j=j.shiftBlocks(a);
return k.reference(j.get("tl_profile_form_suggested_skills__text_plain__yes"),j,"h")
}function b(k,j){j=j.shiftBlocks(a);
return k.reference(j.get("tl_profile_form_suggested_skills__text_plain__no"),j,"h")
}return i
})();

/* tl/apps/profile/ge/form/upload_photo.js */

(function(){dust.register("upload_photo",e);
var f={closeText:d,saveText:b,skipText:a};
function e(h,g){g=g.shiftBlocks(f);
return h.write('<div class="guided-edit">  ').partial("_close_action",g).write("  ").write("  ").exists(g.get("firstTaskTitleString"),g,{"block":c},null).write('    <form class="standard-form" id="').reference(g.get("name"),g,"h").write('_id" target="_self" name="').reference(g.get("name"),g,"h").write('" method="').reference(g.get("method"),g,"h").write('" action="').reference(g.get("action"),g,"h").write('">    <fieldset class="task-content">      <legend><span>').reference(g.get("tl_profile_form_upload_photo__text_plain__upload_image"),g,"h",["s"]).write("</span></legend>      <ul>        <li>").reference(g.get("tl_profile_form_upload_photo__text_plain__upload_file_type"),g,"h").write('</li>      </ul>           <div id="canvas-mask" class="canvas-mask-out">        <div id="canvas-mask-handle" class="canvas-mask-handle-out"></div>     </div>\t  \t      ').partial("action_params",g).write("      ").write("      ").write("    ").partial("_guided_edit_flow_hidden",g).write("          ").partial("inputHidden",g.rebase(g.get("pictureID"))).write('    </fieldset>    <script type="text/javascript">      YDom.get("').reference(g.get("name"),g,"h").write('-btn-primary-submit").type = "button";    \t      if ( LI.ProfilePhotoUploader ) {        profilePicture = new LI.ProfilePhotoUploader( {          uploadFormName       : "uploadPicture",          uploadInfoId         : "upload_info",          uploadInfoJsId       : "upload_info_with_js",          uploadIframeName       : "picture-upload-iframe",          uploadPictureFileId  : "ge-picture-file",          uploadPicParamName   : "pictureID_id"        });        profilePicture.init();        profilePicture.setUploadErrorMessage("').reference(g.get("tl_profile_form_upload_photo__text_plain__we_are_sorry"),g,"h",["s"]).write('");        profilePicture.setNoFileMessage("').reference(g.get("tl_profile_form_upload_photo__text_plain__no_file"),g,"h",["s"]).write('");        profilePicture.setTimeMessage("').reference(g.get("tl_profile_form_upload_photo__text_plain__upload_timed_out"),g,"h",["s"]).write('");        profilePicture.setSizeMessage("').reference(g.get("tl_profile_form_upload_photo__text_plain__file_size_too_large"),g,"h",["s"]).write('");        profilePicture.setDimensionMessage("').reference(g.get("tl_profile_form_upload_photo__text_plain__dimension_too_large"),g,"h",["s"]).write('");        profilePicture.setInvalidMessage("').reference(g.get("tl_profile_form_upload_photo__text_plain__file_type_not_supported"),g,"h",["s"]).write('");        profilePicture.setNotSpecifiedMessage("').reference(g.get("tl_profile_form_upload_photo__text_plain__unspecified_problem"),g,"h",["s"]).write('");\t    }\t  <\/script>  </form>    <form class="standard-form stacked simple" id="uploadPicture_id" name="uploadPicture" method="POST" action="/mupld/upload" enctype="multipart/form-data" accept-charset="UTF-8">    <input name="callback" type="hidden" value="profilePicture.processResponse"/>    <input type="file" class="file" id="ge-picture-file" name="file">    <input type="hidden" value="').reference(g.get("uploadInfo"),g,"h").write('" name="upload_info" id="upload_info_id"/>    <input type="hidden" value="').reference(g.get("uploadInfoWithJS"),g,"h").write('" name="upload_info_with_js" id="upload_info_with_js_id"/>  </form></div><div id="form-to-photo-frame-pointer" name="form-to-photo-frame-pointer"> </div><iframe id="picture-upload-iframe" name="picture-upload-iframe"></iframe>')
}function d(h,g){g=g.shiftBlocks(f);
return h.reference(g.get("tl_profile_form_upload_photo__text_plain__close"),g,"h")
}function c(h,g){g=g.shiftBlocks(f);
return h.write("    <h1>").reference(g.get("firstTaskTitleString"),g,"h",["s"]).write("</h1>  ")
}function b(h,g){g=g.shiftBlocks(f);
return h.reference(g.get("tl_profile_form_upload_photo__text_plain__upload"),g,"h")
}function a(h,g){g=g.shiftBlocks(f);
return h.reference(g.get("tl_profile_form_upload_photo__text_plain__skip"),g,"h")
}return e
})();

/* tl/nprofile/form/adjust_photo.js */

(function(){dust.register("adjust_photo",e);
var f={closeText:d,saveText:b,skipText:a};
function e(h,g){g=g.shiftBlocks(f);
return h.write('<div class="guided-edit">  ').partial("_close_action",g).write("  ").write("  ").exists(g.get("firstTaskTitleString"),g,{"block":c},null).write('  <form class="standard-form" id="').reference(g.get("name"),g,"h").write('_id" name="').reference(g.get("name"),g,"h").write('" method="').reference(g.get("method"),g,"h").write('" action="').reference(g.get("action"),g,"h").write('">    <fieldset class="task-content">      <legend><span>').reference(g.get("tl_profile_form_adjust_photo__text_plain__adjust_image"),g,"h",["s"]).write('</span></legend>          <div class="canvas" id="canvas-frame">       \t<div id="photo-background">      \t  <img id="canvas-img" src="/img/spacer.gif"/>      \t</div>      </div>      <div id="leftpanel">       <h5 class="photo-actions" id="position-text">').reference(g.get("tl_profile_form_adjust_photo__text_plain__position"),g,"h",["s"]).write("</h5>       <h6>").reference(g.get("tl_profile_form_adjust_photo__text_plain__drag"),g,"h",["s"]).write('</h6>              <h5 class="photo-actions" id="zoom-text">').reference(g.get("tl_profile_form_adjust_photo__text_plain__zoom"),g,"h",["s"]).write('</h5>       <div id="slider-bar"></div>\t    <div id="sliderbg">\t      <div id="sliderthumb">\t      </div>        </div>        <h5 class="photo-actions" id="rotation-text">').reference(g.get("tl_profile_form_adjust_photo__text_plain__rotation"),g,"h",["s"]).write('</h5>        <div class="rotation-buttons">          <input id="ccRotation" type="button" value="').reference(g.get("tl_profile_form_adjust_photo__text_plain__cclockwise"),g,"h",["s"]).write('" />          <input id="cRotation" type="button" value="').reference(g.get("tl_profile_form_adjust_photo__text_plain__clockwise"),g,"h",["s"]).write('" />        </div>           </div>      ').partial("action_params",g).write("      ").write("      ").write("            ").partial("_guided_edit_flow_hidden",g).write("    ").partial("inputHidden",g.rebase(g.get("masterTempID"))).write("    ").partial("inputHidden",g.rebase(g.get("croppedTempID"))).write("    ").partial("inputHidden",g.rebase(g.get("xParam"))).write("    ").partial("inputHidden",g.rebase(g.get("yParam"))).write("    ").partial("inputHidden",g.rebase(g.get("xSizeParam"))).write("    ").partial("inputHidden",g.rebase(g.get("ySizeParam"))).write('        <script type="text/javascript">\t  YDom.get("').reference(g.get("name"),g,"h").write('-btn-primary-submit").type = "button";\t  YDom.get("').reference(g.get("name"),g,"h").write('-btn-primary-skip").setAttribute("role", "action:does_not_apply");\t  \t        if ( LI.ProfilePhotoCropper ) {        profilePictureCropper = new LI.ProfilePhotoCropper( {          adjustFormName      : "').reference(g.get("name"),g,"h").write('",          uploadIframeName    : "picture-upload-iframe",          uploadIframeId      : "picture-upload-iframe",          imgId               : "canvas-img",          imgBgId             : "photo-background",          saveButtonId        : "').reference(g.get("name"),g,"h").write('-btn-primary-submit",          leftButtonId        : "ccRotation",          rightButtonId       : "cRotation"        });        profilePictureCropper.setMediaReadTemplateURL("').reference(g.get("mediaReadTemplateURL"),g,"h").write('");        profilePictureCropper.setMediaProcessURL("').reference(g.get("mediaProcessURL"),g,"h").write('");                profilePictureCropper.setMasterMid("').reference(g.get("mediaId"),g,"h").write('");                profilePictureCropper.setNotFoundErrorMessage("').reference(g.get("tl_profile_form_adjust_photo__text_plain__choose_another_image"),g,"h",["s"]).write('");        profilePictureCropper.setUploadErrorMessage("').reference(g.get("tl_profile_form_adjust_photo__text_plain__we_are_sorry"),g,"h",["s"]).write('");                profilePictureCropper.init();      }\t <\/script>\t     </fieldset>  </form></div><div id="form-to-photo-frame-pointer" name="form-to-photo-frame-pointer"> </div><iframe id="picture-upload-iframe" name="picture-upload-iframe"></iframe>')
}function d(h,g){g=g.shiftBlocks(f);
return h.reference(g.get("tl_profile_form_adjust_photo__text_plain__close"),g,"h")
}function c(h,g){g=g.shiftBlocks(f);
return h.write("    <h1>").reference(g.get("firstTaskTitleString"),g,"h",["s"]).write("</h1>  ")
}function b(h,g){g=g.shiftBlocks(f);
return h.reference(g.get("tl_profile_form_adjust_photo__text_plain__save"),g,"h")
}function a(h,g){g=g.shiftBlocks(f);
return h.reference(g.get("tl_profile_form_adjust_photo__text_plain__choose_another"),g,"h")
}return e
})();