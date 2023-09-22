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
function scriptUI_myUpdateFunction(event) {
    let code_script = Blockly.JavaScript.workspaceToCode(scriptUI_workspace);
    document.getElementById('code_script').innerHTML = '<pre>' + code_script + '</pre>';
}
scriptUI_workspace.addChangeListener(scriptUI_myUpdateFunction);

var scriptUI_blocks = {};//コードたちを格納する変数
function scriptUI_saveScriptBlock(){
    let blockName_element = document.getElementById('input_block_name');
    var blockName = blockName_element.value;
    var scriptUI_code = Blockly.JavaScript.workspaceToCode(scriptUI_workspace);
    var scriptUI_xml = Blockly.Xml.workspaceToDom(scriptUI_workspace);

    var script_select = document.getElementById("script_select");
    
    var optionAddFlag = true;

    //名前が被ってない時だけ選択フォームに追加
    for (let i = 0; i < script_select.options.length; i++) {
        const selectElement = script_select.options[i];
        if (blockName == selectElement.value) {
            optionAddFlag = false;
            break;
        }
    }
    if (optionAddFlag) {
        var option = document.createElement("option");
        option.text = blockName;
        option.value = blockName;
        script_select.appendChild(option);
    }

    //格納
    scriptUI_blocks[blockName] = {xml:scriptUI_xml,code:scriptUI_code,name:blockName};
    //mainUIに追加
    // mainUI_addScriptBlocks(blockName)
}

function scriptUI_showScriptBlock(){
    let blockName_element = document.getElementById('input_block_name');
    var script_select = document.getElementById("script_select");
    var blockXmlForShow = scriptUI_blocks[script_select.value].xml;

    blockName_element.value = scriptUI_blocks[script_select.value].name;
    Blockly.Xml.clearWorkspaceAndLoadFromXml(blockXmlForShow,scriptUI_workspace);
}

let scriptUI_button_scriptSave = document.getElementById('button_scriptSave');
scriptUI_button_scriptSave.onclick = scriptUI_saveScriptBlock;

let scriptUI_selectBlock = document.getElementById('script_select');
scriptUI_selectBlock.onchange = scriptUI_showScriptBlock;