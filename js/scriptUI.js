var workspace_script = Blockly.inject('blocklyDiv_script',options)
function myUpdateFunction_script(event) {
    let code_script = Blockly.JavaScript.workspaceToCode(workspace_script);
    document.getElementById('code_script').innerHTML = '<pre><font size="3" face="Consolas">' + code_script + '</font></pre>';
}
workspace_script.addChangeListener(myUpdateFunction_script);