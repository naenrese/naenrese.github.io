var scriptUI_toolbox = '<xml id="toolbox" style="display: none">';

scriptUI_toolbox += '<category name="Basis" colour="#0000FF">'
scriptUI_toolbox += '<block type="newBlock_create"></block>';
scriptUI_toolbox += '  </category>';

scriptUI_toolbox += '<category name="Movement" colour="#000080">'
scriptUI_toolbox += '<block type="word"></block>';
scriptUI_toolbox += '<block type="location"></block>';
scriptUI_toolbox += '<block type="animation"></block>';
scriptUI_toolbox += '  </category>';

scriptUI_toolbox += '<category name="Robot Interaction" colour="#800080">'
scriptUI_toolbox += '<block type="touch_robot"></block>';
scriptUI_toolbox += '  </category>';


scriptUI_toolbox += '<sep></sep>';
scriptUI_toolbox += '</xml>';

var scriptUI_options = { 
    toolbox : scriptUI_toolbox, 
    collapse : false, 
    comments : false, 
    disable : true, 
    maxBlocks : Infinity, 
    trashcan : true, 
    horizontalLayout : false, 
    toolboxPosition : 'start', 
    css : true, 
    rtl : false, 
    scrollbars : true, 
    sounds : true, 
    oneBasedIndex : true, 
    grid : {
        spacing : 20, 
        length : 1, 
        colour : '#888', 
        snap : false
    }, 
    zoom : {
        controls : true, 
        wheel : true, 
        startScale : 1, 
        maxScale : 3, 
        minScale : 0.1, 
        scaleSpeed : 1.2
    }
};

var scriptUI_workspace = Blockly.inject('blocklyDiv_script',scriptUI_options)
function myUpdateFunction_script(event) {
    let code_script = Blockly.JavaScript.workspaceToCode(scriptUI_workspace);
    document.getElementById('code_script').innerHTML = '<pre><font size="3" face="Consolas">' + code_script + '</font></pre>';
}
scriptUI_workspace.addChangeListener(myUpdateFunction_script);

function saveScriptBlock(){
    let blockName_element = document.getElementById('input_block_name');
    var blockName = blockName_element.value;
    var scriptUI_code = Blockly.JavaScript.workspaceToCode(scriptUI_workspace);
    var scriptUI_xml = Blockly.Xml.workspaceToDom(scriptUI_workspace);
}