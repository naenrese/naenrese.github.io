var workspace_main = Blockly.inject('blocklyDiv_main',options)
function myUpdateFunction_main(event) {
    let code_main = Blockly.JavaScript.workspaceToCode(workspace_main);
    document.getElementById('code_main').innerHTML = '<pre><font size="3" face="Consolas">' + code_main + '</font></pre>';
}
workspace_main.addChangeListener(myUpdateFunction_main);