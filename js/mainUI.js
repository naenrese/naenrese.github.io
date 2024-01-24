var mainUI_toolbox = '<xml id="toolbox" style="display: none">';

mainUI_toolbox += '<category name="Basis" colour="#0000FF">'
mainUI_toolbox += '<block type="script_create"></block>';
mainUI_toolbox += '  </category>';

mainUI_toolbox += '<category name="Characters" colour="#0000FF">'
mainUI_toolbox += '<block type="Pepper_character"></block>';
mainUI_toolbox += '<block type="NAO_character"></block>';
// mainUI_toolbox += '<block type="person_character"></block>';
// mainUI_toolbox += '<block type="object_character"></block>';
mainUI_toolbox += '  </category>';

mainUI_toolbox += '<category name="Pepper" colour="#000080">'
mainUI_toolbox += '<block type="word_Pepper"></block>';
mainUI_toolbox += '<block type="location_Pepper"></block>';
mainUI_toolbox += '<block type="animation_Pepper"></block>';
mainUI_toolbox += '<block type="touch_robot_Pepper"></block>';
mainUI_toolbox += '  </category>';

mainUI_toolbox += '<category name="NAO" colour="#000080">'
mainUI_toolbox += '<block type="word_NAO"></block>';
// mainUI_toolbox += '<block type="location_NAO"></block>';
// mainUI_toolbox += '<block type="animation_NAO"></block>';
mainUI_toolbox += '<block type="touch_robot_NAO"></block>';
mainUI_toolbox += '  </category>';

mainUI_toolbox += '<category name="Original Block" colour="#ffc71f">'
mainUI_toolbox += '<block type="custom_dropdown"></block>'
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
    document.getElementById('code_main').innerHTML = '<pre>' + code_main + '</pre>';
}
mainUI_workspace.addChangeListener(myUpdateFunction_main);

function mainUI_addScriptBlocks(blockName){
        Blockly.Blocks[blockName] = {
            init: function() {
                this.appendStatementInput(blockName)
                    .appendField(blockName);
                this.setColour(50);
                this.setPreviousStatement(true, null);
                this.setNextStatement(true, null);
                this.setTooltip("");
                this.setHelpUrl("");
            }
        }
        Blockly.JavaScript[blockName] = function(block) {
            var code = '\n\t{\n\t"mode":"originalBlock",\n\t"name":"' + blockName 
                          + '\n\t}' + "#...#";
            return code;
        };


        var parser = new DOMParser();
        var xml_toolbox = parser.parseFromString(mainUI_toolbox,'text/xml');
        var categoryElements 
        = xml_toolbox.querySelectorAll('category[name="Original Block"][colour="#ffc71f"]');
        var newBlockElement = xml_toolbox.createElement("block");
        newBlockElement.setAttribute("type", blockName);
        categoryElements.forEach(function(categoryElement) {
            categoryElement.appendChild(newBlockElement);
        });
        mainUI_toolbox = new XMLSerializer().serializeToString(xml_toolbox);
        mainUI_options["toolbox"] = mainUI_toolbox;
        // console.log(mainUI_options["toolbox"]);
        mainUI_ToolcoxClass = new Blockly.Toolbox(mainUI_workspace);
        mainUI_ToolcoxClass.setVisible(false);

        // [求む] toolboxの途中で変更する方法
        // mainUI_workspace = Blockly.inject('blocklyDiv_main',mainUI_options)
}

function mainUI_outputXMLandJSON(){
    var mainUI_code = Blockly.JavaScript.workspaceToCode(mainUI_workspace);
    var mainUI_xml = Blockly.Xml.workspaceToDom(mainUI_workspace);

    return {xml:mainUI_xml,code:mainUI_code};
}

//現在の作業状況全部消してzipファイルのmainフォルダから作業状況を復元
function mainUI_restoreWorkingState(mainUI_newData){
    let blockXmlForShow = Blockly.Xml.textToDom(mainUI_newData["xml"]);

    Blockly.Xml.clearWorkspaceAndLoadFromXml(blockXmlForShow,mainUI_workspace);
}


// Define a function to populate script_selectOptions with options from script_select
function populateOptions() {
    // Get a reference to the <select> element
    var scriptSelectElement = document.getElementById("script_select");

    // Create an empty array to store the options
    script_selectOptions = [];

    // Iterate through the <option> elements and populate script_selectOptions
    for (var i = 0; i < scriptSelectElement.options.length; i++) {
        var option = scriptSelectElement.options[i];
        script_selectOptions.push([option.text, option.value]);
    }

    // You can now use script_selectOptions as needed
    console.log(script_selectOptions);
}

// Get a reference to the button element
var button_populate_options = document.getElementById('button_populate_options');

// Associate the populateOptions function with the button's click event
button_populate_options.addEventListener('click', populateOptions);
