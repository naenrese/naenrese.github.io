Blockly.JavaScript['test_block'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '\n\taaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa;\n';
  return code;
};
Blockly.JavaScript['script_create'] = function(block) {
  var text_name = block.getFieldValue('script_name');
  var statements_define = Blockly.JavaScript.statementToCode(block, 'define');
  var statements_name = Blockly.JavaScript.statementToCode(block, 'script');
  // TODO: Assemble JavaScript into code variable.
  var code = '{\n\t"name": "' + text_name + '",\n\t"define": [' + statements_define 
                + '\n\t],\n\t"scripts": [\n' + statements_name + '\n\t]\n}';
  var codej = {"name":text_name,"define":[statements_define],"scripts":[statements_define]};
  return code;
};
Blockly.JavaScript['define'] = function(block) {
  var text_name = block.getFieldValue('name');
  var dropdown_who = block.getFieldValue('who');
  var number_location_x = block.getFieldValue('location_x');
  var number_location_y = block.getFieldValue('location_y');
  // TODO: Assemble JavaScript into code variable.
  var code = '\n\t{\n\t"name":"' + text_name + '",\n\t"type":"' + dropdown_who 
                + '",\n\t"location":' 
                + '\n\t\t{\n\t\t\t"x":' + number_location_x
                + ',\n\t\t\t"y":' + number_location_y
                + '\n\t\t}\n\t}';
  var codej = {"name":text_name,"type":dropdown_who,"location":{"x":number_location_x,"y":number_location_y}};
  return code;
};
Blockly.JavaScript['word'] = function(block) {
  var text_name = block.getFieldValue('name');
  var text_word = block.getFieldValue('word');
  var dropdown_timeflag = block.getFieldValue('timeFlag');
  var number_time = block.getFieldValue('time');
  // TODO: Assemble JavaScript into code variable.
  var code = '\n\t{\n\t"mode":"word",\n\t"name":"' + text_name + '",\n\t"word":"' + text_word + '",'
              + '\n\t"timeFlag":"' + dropdown_timeflag + '",\n\t"time":' + number_time + '\n\t}';
  var codej = {"mode":"word","name":text_name,"word":text_word,"timeFlag":dropdown_timeflag,"time":number_time}
  return code;
};
Blockly.JavaScript['location'] = function(block) {
  var text_name = block.getFieldValue('name');
  var number_location_x = block.getFieldValue('location_x');
  var number_location_y = block.getFieldValue('location_y');
  var dropdown_timeflag = block.getFieldValue('timeFlag');
  var number_time = block.getFieldValue('time');
  // TODO: Assemble JavaScript into code variable.
  var code = '\n\t{\n\t"mode":"location",\n\t"name":"' + text_name 
  + '",\n\t"location":' 
  + '\n\t\t{\n\t\t\t"x":' + number_location_x
  + ',\n\t\t\t"y":' + number_location_y
  + '\n\t\t},' + '\n\t"timeFlag":"' + dropdown_timeflag 
  + '",\n\t"time":' + number_time + '\n\t}';
  var codej = {"mode":"location","name":text_name,"location":{"x":number_location_x,"y":number_location_y}
                ,"timeFlag":dropdown_timeflag,"time":number_time}
  return code;
};