var mainUI_toolbox = '<xml id="toolbox" style="display: none">';

mainUI_toolbox += '<category name="Basis" colour="#0000FF">'
mainUI_toolbox += '<block type="script_create"></block>';
mainUI_toolbox += '  </category>';

mainUI_toolbox += '<category name="Define" colour="#0000FF">'
mainUI_toolbox += '<block type="robot_define"></block>';
// mainUI_toolbox += '<block type="person_define"></block>';
// mainUI_toolbox += '<block type="object_define"></block>';
mainUI_toolbox += '  </category>';

mainUI_toolbox += '<category name="Movement" colour="#000080">'
mainUI_toolbox += '<block type="word"></block>';
// mainUI_toolbox += '<block type="location"></block>';
// mainUI_toolbox += '<block type="animation"></block>';
mainUI_toolbox += '  </category>';

mainUI_toolbox += '<category name="Robot Interaction" colour="#800080">'
mainUI_toolbox += '<block type="touch_robot"></block>';
mainUI_toolbox += '  </category>';


mainUI_toolbox += '<sep></sep>';
mainUI_toolbox += '</xml>';


var mainUI_options = { 
    toolbox : mainUI_toolbox, 
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

var mainUI_workspace = Blockly.inject('blocklyDiv_main',mainUI_options)
function myUpdateFunction_main(event) {
    let code_main = Blockly.JavaScript.workspaceToCode(mainUI_workspace);
    document.getElementById('code_main').innerHTML = '<pre><font size="3" face="Consolas">' + code_main + '</font></pre>';
}
mainUI_workspace.addChangeListener(myUpdateFunction_main);