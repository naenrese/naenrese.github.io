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
    this.appendStatementInput("define")
        .appendField("define");
    this.appendStatementInput("script")
        .appendField("script");
    this.setInputsInline(true);
    this.setColour(230);
  }
};
Blockly.Blocks['define'] = {
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
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['word'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("name")
        .appendField(new Blockly.FieldTextInput("default"), "name")
        .appendField("word")
        .appendField(new Blockly.FieldTextInput("default"), "word");
    this.appendDummyInput()
        .appendField("timing")
        .appendField(new Blockly.FieldDropdown([["nexttime","nexttime"], ["sametime","sametime"]]), "timeFlag")
        .appendField("time [ms]")
        .appendField(new Blockly.FieldNumber(0), "time");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};