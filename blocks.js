Blockly.Blocks['test_block'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField("test_block");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour(330);
 this.setTooltip("a");
 this.setHelpUrl("a");
  }
};
Blockly.Blocks['script_create'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("script name")
        .appendField(new Blockly.FieldTextInput('default name'),"script_name");
    this.appendStatementInput("character")
        .appendField("character");
    this.appendStatementInput("script")
        .appendField("script");
    this.setInputsInline(true);
    this.setColour(230);
  }
};
Blockly.Blocks['character'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("name")
        .appendField(new Blockly.FieldTextInput("default"), "name")
        .appendField(new Blockly.FieldDropdown([["person","person"], ["robot","robot"], ["object","object"]]), "who")
        .appendField("location")
        .appendField("x")
        .appendField(new Blockly.FieldNumber(0), "location_x")
        .appendField("y")
        .appendField(new Blockly.FieldNumber(0), "location_y");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['Pepper_character'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Pepper name")
        .appendField(new Blockly.FieldTextInput("Pepper"), "name")
        .appendField("location")
        .appendField("x")
        .appendField(new Blockly.FieldNumber(0), "location_x")
        .appendField("y")
        .appendField(new Blockly.FieldNumber(0), "location_y")
        .appendField("angle")
        .appendField(new Blockly.FieldNumber(0), "location_angle")
        .appendField("ip adress")
        .appendField(new Blockly.FieldTextInput("10.146.0.11"), "ip");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['NAO_character'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("NAO name")
        .appendField(new Blockly.FieldTextInput("NAO"), "name")
        .appendField("location")
        .appendField("x")
        .appendField(new Blockly.FieldNumber(0), "location_x")
        .appendField("y")
        .appendField(new Blockly.FieldNumber(0), "location_y")
        .appendField("angle")
        .appendField(new Blockly.FieldNumber(0), "location_angle")
        .appendField("ip adress")
        .appendField(new Blockly.FieldTextInput("169.254.205.214"), "ip");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['person_character'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("person name")
        .appendField(new Blockly.FieldTextInput("default"), "name")
        .appendField("location")
        .appendField("x")
        .appendField(new Blockly.FieldNumber(0), "location_x")
        .appendField("y")
        .appendField(new Blockly.FieldNumber(0), "location_y")
        .appendField("angle")
        .appendField(new Blockly.FieldNumber(0), "location_angle");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['object_character'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("object name")
        .appendField(new Blockly.FieldTextInput("default"), "name")
        .appendField("location")
        .appendField("x")
        .appendField(new Blockly.FieldNumber(0), "location_x")
        .appendField("y")
        .appendField(new Blockly.FieldNumber(0), "location_y")
        .appendField("angle")
        .appendField(new Blockly.FieldNumber(0), "location_angle");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['word_Pepper'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("name")
        .appendField(new Blockly.FieldTextInput("Pepper"), "name")
        .appendField("word")
        .appendField(new Blockly.FieldTextInput("default"), "word");
    this.appendDummyInput()
        .appendField("timing")
        .appendField(new Blockly.FieldDropdown([["nexttime","nexttime"], ["sametime","sametime"]]), "timeFlag")
        .appendField("delay time [s]")
        .appendField(new Blockly.FieldNumber(0), "time")
        .appendField("volume")
        .appendField(new Blockly.FieldNumber(1), "volume")
        .appendField("pitch")
        .appendField(new Blockly.FieldNumber(1), "pitch");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['location_Pepper'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("name")
        .appendField(new Blockly.FieldTextInput("Pepper"), "name")
        .appendField("location")
        .appendField("x [m]")
        .appendField(new Blockly.FieldNumber(0), "location_x")
        .appendField("y [m]")
        .appendField(new Blockly.FieldNumber(0), "location_y")
        .appendField("angle")
        .appendField(new Blockly.FieldNumber(0), "location_angle");
    this.appendDummyInput()
        .appendField("timing")
        .appendField(new Blockly.FieldDropdown([["nexttime","nexttime"], ["sametime","sametime"]]), "timeFlag")
        .appendField("delay time[s]")
        .appendField(new Blockly.FieldNumber(0), "time");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['animation_Pepper'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("name")
        .appendField(new Blockly.FieldTextInput("Pepper"), "name")
        .appendField("animation")
        .appendField(new Blockly.FieldDropdown(
          [
            ["happy","happy"],
            ["bored","bored"],
            ["confused","confused"],
            ["curious","curious"],
            ["elephant","elephant"],
            ["kisses","kisses"],
            ["thinking","thinking"]
            // ,
            // ["wave","wave"]
            
            // ["IDontKnow","IDontKnow"],
            // ["Hey","Hey"],
            // ["sad","sad"],
            // ["No_1","No_1"],
            // ["No_2","No_2"],
            // ["But_1","But_1"],
            // ["CalmDown_1","CalmDown_1"],
            // ["Thinking_1","Thinking_1"]
          ]
          ), "animationFlag")
    this.appendDummyInput()
        .appendField("timing")
        .appendField(new Blockly.FieldDropdown([["nexttime","nexttime"], ["sametime","sametime"]]), "timeFlag")
        .appendField("delay time [s]")
        .appendField(new Blockly.FieldNumber(0), "time")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['touch_robot_Pepper'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("robot's name")
        .appendField(new Blockly.FieldTextInput("Pepper"), "name")
        .appendField("sensor")
        .appendField(new Blockly.FieldDropdown([["head","head"],["right hand","right_hand"], ["left hand","left_hand"]]), "sensor")
    // this.appendDummyInput()
    //     .appendField("timing")
    //     .appendField(new Blockly.FieldDropdown([["nexttime","nexttime"], ["sametime","sametime"]]), "timeFlag")
    //     .appendField("delay time [s]")
    //     .appendField(new Blockly.FieldNumber(0), "time")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['word_NAO'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("name")
        .appendField(new Blockly.FieldTextInput("NAO"), "name")
        .appendField("word")
        .appendField(new Blockly.FieldTextInput("default"), "word");
    this.appendDummyInput()
        .appendField("timing")
        .appendField(new Blockly.FieldDropdown([["nexttime","nexttime"], ["sametime","sametime"]]), "timeFlag")
        .appendField("delay time [s]")
        .appendField(new Blockly.FieldNumber(0), "time")
        .appendField("volume")
        .appendField(new Blockly.FieldNumber(1), "volume")
        .appendField("pitch")
        .appendField(new Blockly.FieldNumber(1), "pitch");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['location_NAO'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("name")
        .appendField(new Blockly.FieldTextInput("NAO"), "name")
        .appendField("location")
        .appendField("x [m]")
        .appendField(new Blockly.FieldNumber(0), "location_x")
        .appendField("y [m]")
        .appendField(new Blockly.FieldNumber(0), "location_y")
        .appendField("angle")
        .appendField(new Blockly.FieldNumber(0), "location_angle");
    this.appendDummyInput()
        .appendField("timing")
        .appendField(new Blockly.FieldDropdown([["nexttime","nexttime"], ["sametime","sametime"]]), "timeFlag")
        .appendField("delay time[s]")
        .appendField(new Blockly.FieldNumber(0), "time");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['animation_NAO'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("name")
        .appendField(new Blockly.FieldTextInput("NAO"), "name")
        .appendField("animation")
        .appendField(new Blockly.FieldDropdown(
          [
            ["happy","happy"],
            ["bored","bored"],
            ["confused","confused"],
            ["curious","curious"],
            ["elephant","elephant"],
            ["kisses","kisses"],
            ["thinking","thinking"],
            ["wave","wave"]
            
            // ["IDontKnow","IDontKnow"],
            // ["Hey","Hey"],
            // ["sad","sad"],
            // ["No_1","No_1"],
            // ["No_2","No_2"],
            // ["But_1","But_1"],
            // ["CalmDown_1","CalmDown_1"],
            // ["Thinking_1","Thinking_1"]
          ]
          ), "animationFlag")
    this.appendDummyInput()
        .appendField("timing")
        .appendField(new Blockly.FieldDropdown([["nexttime","nexttime"], ["sametime","sametime"]]), "timeFlag")
        .appendField("delay time [s]")
        .appendField(new Blockly.FieldNumber(0), "time")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['touch_robot_NAO'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("robot's name")
        .appendField(new Blockly.FieldTextInput("NAO"), "name")
        .appendField("sensor")
        .appendField(new Blockly.FieldDropdown([["head","head"],["right hand","right_hand"], ["left hand","left_hand"]]), "sensor")
    // this.appendDummyInput()
    //     .appendField("timing")
    //     .appendField(new Blockly.FieldDropdown([["nexttime","nexttime"], ["sametime","sametime"]]), "timeFlag")
    //     .appendField("delay time [s]")
    //     .appendField(new Blockly.FieldNumber(0), "time")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['newBlock_create'] = {
  init: function() {
    // this.appendDummyInput()
    //     .appendField("block name")
    //     .appendField(new Blockly.FieldTextInput('default name'),"block_name");
    this.appendStatementInput("script")
        .appendField("script");
    this.setInputsInline(true);
    this.setColour(100);
  }
};


//ENRIQUE
var script_selectOptions = [
  ['Select', 'option1'],
  // Add more options as needed
];


//ENRIQUE
Blockly.Blocks['custom_dropdown'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Custom Dropdown:")
        .appendField(new Blockly.FieldDropdown(script_selectOptions), "dropdown_name");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};