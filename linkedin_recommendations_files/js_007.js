

/* tl/shared/action_params.js */

(function(){dust.register("action_params",a);
function a(c,b){return c.write('<div class="actions-wrapper">  <p class="actions">    <input type="submit" role="action:save" name="').reference(b.get("name"),b,"h").write('-save" value="').block(b.getBlock("saveText"),b,{},null).write('" class="btn-action" id="').reference(b.get("name"),b,"h").write('-btn-primary-submit"/>    <a class="btn-secondary last-action" role="action:skip" id="').reference(b.getPath(true,["name"]),b,"h").write('-btn-primary-skip" href="').reference(b.getPath(true,["skipAction"]),b,"h").write('">      <span>').block(b.getBlock("skipText"),b,{},null).write("</span>    </a>  </p>  ").block(b.getBlock("notes"),b,{},null).write("</div>")
}return a
})();

/* tl/shared/action_params_with_dna.js */

(function(){dust.register("action_params_with_dna",a);
function a(c,b){return c.write('<div class="actions-wrapper">  <p class="actions">    <input type="submit" role="action:save" name="').reference(b.get("name"),b,"h").write('-save" value="').block(b.getBlock("saveText"),b,{},null).write('" class="btn-action" id="').reference(b.get("name"),b,"h").write('-btn-primary-submit"/>    <a class="btn-secondary" role="action:skip" href="').reference(b.getPath(true,["skipAction"]),b,"h").write('" id="').reference(b.getPath(true,["name"]),b,"h").write('-btn-primary-skip"><span>').block(b.getBlock("skipText"),b,{},null).write('</span></a>    <span class="alternate"><a href="').reference(b.getPath(true,["skipAction"]),b,"h").write('" role="action:does_not_apply" id="').reference(b.get("name"),b,"h").write('-not-applicable">').block(b.getBlock("dnaText"),b,{},null).write("</a></span>  </p>  ").block(b.getBlock("notes"),b,{},null).write("</div>")
}return a
})();

/* tl/shared/action_params_yes_no.js */

(function(){dust.register("action_params_yes_no",a);
function a(c,b){return c.write('<div class="actions-wrapper">  <p class="actions">    <input type="submit" name="').reference(b.get("name"),b,"h").write('-yes" role="action:yes" value="').block(b.getBlock("yesText"),b,{},null).write('" class="btn-action" id="').reference(b.get("name"),b,"h").write('-btn-primary-yes"/>    <input type="submit" name="').reference(b.get("name"),b,"h").write('-no" role="action:no" value="').block(b.getBlock("noText"),b,{},null).write('" class="btn-secondary" id="').reference(b.get("name"),b,"h").write('-btn-primary-no"/>  </p></div>')
}return a
})();

/* tl/shared/inputSubmit.js */

(function(){dust.register("inputSubmit",b);
function b(d,c){return d.write('<input type="submit" id="').reference(c.getPath(true,["id"]),c,"h").write('" class="btn-primary" value="').block(c.getBlock("inputvalue"),c,{"block":a},null).write('" name="').reference(c.getPath(true,["name"]),c,"h").write('"/>')
}function a(d,c){return d.reference(c.getPath(true,["value"]),c,"h")
}return b
})();

/* tl/shared/inputText.js */

(function(){dust.register("inputText",a);
function a(c,b){return c.write('  <input type="text" id="').reference(b.getPath(true,["id"]),b,"h").write('" value="').reference(b.getPath(true,["value"]),b,"h",["s"]).write('" name="').reference(b.getPath(true,["name"]),b,"h").write('" ').reference(b.getPath(true,["extras"]),b,"h").write(" ").block(b.getBlock("formExtras"),b,{},null).write("/>")
}return a
})();

/* tl/shared/singleSelect.js */

(function(){dust.register("singleSelect",d);
function d(f,e){return f.write('<select name="').reference(e.getPath(true,["name"]),e,"h").write('" id="').reference(e.getPath(true,["id"]),e,"h").write('" class="').reference(e.getPath(true,["class"]),e,"h").write('">  ').section(e.get("choose"),e,{"block":c},null).write("  ").section(e.get("options"),e,{"block":b},null).write("</select>")
}function c(f,e){return f.write('    <option value="">').reference(e.get("choose"),e,"h").write("</option>  ")
}function b(f,e){return f.write('   <option value="').reference(e.getPath(true,["value"]),e,"h").write('" ').exists(e.getPath(true,["selected"]),e,{"block":a},null).write(">").reference(e.getPath(true,["label"]),e,"h").write("</option>  ")
}function a(f,e){return f.write('selected="selected"')
}return d
})();

/* tl/shared/inputHidden.js */

(function(){dust.register("inputHidden",a);
function a(c,b){return c.write(' <input type="hidden" value="').reference(b.getPath(true,["value"]),b,"h").write('" name="').reference(b.getPath(true,["name"]),b,"h").write('" id="').reference(b.getPath(true,["name"]),b,"h").write('_id"/>')
}return a
})();

/* tl/shared/inputCheckbox.js */

(function(){dust.register("inputCheckbox",b);
function b(d,c){return d.write(' <input type="checkbox" id="').reference(c.getPath(true,["id"]),c,"h").write('" value="').reference(c.getPath(true,["value"]),c,"h").write('" name="').reference(c.getPath(true,["name"]),c,"h").write('" ').exists(c.getPath(true,["checked"]),c,{"block":a},null).write("/>")
}function a(d,c){return d.write("checked")
}return b
})();

/* tl/shared/textArea.js */

(function(){dust.register("textArea",a);
function a(c,b){return c.write('<textarea cols="25" rows="7" id="').reference(b.getPath(true,["id"]),b,"h").write('" name="').reference(b.getPath(true,["name"]),b,"h").write('">').reference(b.getPath(true,["value"]),b,"h").write('</textarea><script id="checkTextArea-control-').reference(b.getPath(true,["name"]),b,"h").write('" type="text/javascript">  LI.Controls.addControl(\'checkTextArea-control-').reference(b.getPath(true,["name"]),b,"h").write("', 'GuidedEdit.CheckTextarea');<\/script>")
}return a
})();

/* tl/shared/default_hidden_params.js */

(function(){dust.register("default_hidden_params",a);
function a(c,b){return c.partial("inputHidden",b.rebase(b.get("csrfToken"))).partial("inputHidden",b.rebase(b.get("sourceAlias"))).write(" ")
}return a
})();

/* tl/shared/nprofile/_close_action.js */

(function(){dust.register("_close_action",a);
function a(c,b){return c.write('<a data-li-guided_close_action="').reference(b.get("profileCloseAction"),b,"h").write('" class="close-action" role="action:close" href="').reference(b.get("closeAction"),b,"h").write('">').block(b.getBlock("closeText"),b,{},null).write("</a>")
}return a
})();

/* tl/shared/nprofile/_guided_edit_flow_hidden.js */

(function(){dust.register("_guided_edit_flow_hidden",a);
function a(c,b){return c.partial("inputHidden",b.rebase(b.get("multiNudgeID"))).partial("inputHidden",b.rebase(b.get("sessionID"))).partial("inputHidden",b.rebase(b.get("actionTaken"))).partial("inputHidden",b.rebase(b.get("taskID"))).partial("inputHidden",b.rebase(b.get("locale"))).partial("inputHidden",b.rebase(b.get("futureOffset"))).partial("inputHidden",b.rebase(b.get("profCompTestGroup"))).partial("inputHidden",b.rebase(b.get("isFirst"))).partial("inputHidden",b.rebase(b.get("o"))).partial("default_hidden_params",b)
}return a
})();

/* tl/shared/nprofile/_guided_edit_flow.js */

(function(){dust.register("_guided_edit_flow",a);
function a(c,b){return c.write('<script type="text/javascript">  if (!LI.GuidedEdit.refactored) {    new LI.GuidedEdit.Form("').reference(b.getPath(true,["name"]),b,"h").write('", "').reference(b.getPath(true,["updateSection"]),b,"h").write('");  }<\/script>')
}return a
})();