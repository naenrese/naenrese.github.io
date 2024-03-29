// 正式なJSONのフォーマットにする関数
function convertJSON(list){
  console.log(list)
  var json_list = []
  for (index = 0; index < list.length - 1; ++index) {
    try {
      json_list.push(JSON.parse(list[index]))
    }
    catch (e) {
      json_list.push(list[index])
    }
  }
    json_data = JSON.stringify(json_list,null,"\t")
    return json_data
}

Blockly.JavaScript['test_block'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '\n\taaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa;\n';
  return code;
};

Blockly.JavaScript['script_create'] = function(block) {
  var text_name = block.getFieldValue('script_name');
  var statements_define = Blockly.JavaScript.statementToCode(block, 'character');
  var statements_name = Blockly.JavaScript.statementToCode(block, 'script');
  
  // 正式なJSONのフォーマットにする部分(define)
  var list_character =  statements_define.split("#...#");
  var text_statements_character = convertJSON(list_character)

   // 正式なJSONのフォーマットにする部分(script)
  var list_script =  statements_name.split("#...#");
  var text_statements_script = convertJSON(list_script) 

  // TODO: Assemble JavaScript into code variable.
  var code = '{\n\t"name": "' + text_name + '",\n\t"define":' + text_statements_character 
                + '\n\t,\n\t"scripts":' + text_statements_script + '\n}';
  return code;
};

Blockly.JavaScript['character'] = function(block) {
  var text_name = block.getFieldValue('name');
  var dropdown_who = block.getFieldValue('who');
  var number_location_x = block.getFieldValue('location_x');
  var number_location_y = block.getFieldValue('location_y');
  // TODO: Assemble JavaScript into code variable.
  var code = '\n\t{\n\t"name":"' + text_name + '",\n\t"type":"' + dropdown_who 
                + '",\n\t"location":' 
                + '\n\t\t{\n\t\t\t"x":' + number_location_x
                + ',\n\t\t\t"y":' + number_location_y
                + '\n\t\t}\n\t}' + "#...#";
  return code;
};
Blockly.JavaScript['Pepper_character'] = function(block) {
  var text_name = block.getFieldValue('name');
  var number_location_x = block.getFieldValue('location_x');
  var number_location_y = block.getFieldValue('location_y');
  var number_location_angle = block.getFieldValue('location_angle');
  var text_ip = block.getFieldValue('ip');
  // TODO: Assemble JavaScript into code variable.
  var code = '\n\t{\n\t"name":"' + text_name + '",\n\t"type":"' + "Pepper" 
                + '",\n\t"ip":"' + text_ip
                + '",\n\t"location":' 
                + '\n\t\t{\n\t\t\t"x":' + number_location_x
                + ',\n\t\t\t"y":' + number_location_y
                + ',\n\t\t\t"angle":' + number_location_angle
                + '\n\t\t}\n\t}' + "#...#";
  return code;
};
Blockly.JavaScript['NAO_character'] = function(block) {
  var text_name = block.getFieldValue('name');
  var number_location_x = block.getFieldValue('location_x');
  var number_location_y = block.getFieldValue('location_y');
  var number_location_angle = block.getFieldValue('location_angle');
  var text_ip = block.getFieldValue('ip');
  // TODO: Assemble JavaScript into code variable.
  var code = '\n\t{\n\t"name":"' + text_name + '",\n\t"type":"' + "NAO" 
                + '",\n\t"ip":"' + text_ip
                + '",\n\t"location":' 
                + '\n\t\t{\n\t\t\t"x":' + number_location_x
                + ',\n\t\t\t"y":' + number_location_y
                + ',\n\t\t\t"angle":' + number_location_angle
                + '\n\t\t}\n\t}' + "#...#";
  return code;
};
Blockly.JavaScript['person_character'] = function(block) {
  var text_name = block.getFieldValue('name');
  var number_location_x = block.getFieldValue('location_x');
  var number_location_y = block.getFieldValue('location_y');
  var number_location_angle = block.getFieldValue('location_angle');
  // TODO: Assemble JavaScript into code variable.
  var code = '\n\t{\n\t"name":"' + text_name + '",\n\t"type":"' + "person" 
                + '",\n\t"location":' 
                + '\n\t\t{\n\t\t\t"x":' + number_location_x
                + ',\n\t\t\t"y":' + number_location_y
                + ',\n\t\t\t"angle":' + number_location_angle
                + '\n\t\t}\n\t}' + "#...#";
  return code;
};
Blockly.JavaScript['object_character'] = function(block) {
  var text_name = block.getFieldValue('name');
  var number_location_x = block.getFieldValue('location_x');
  var number_location_y = block.getFieldValue('location_y');
  var number_location_angle = block.getFieldValue('location_angle');
  // TODO: Assemble JavaScript into code variable.
  var code = '\n\t{\n\t"name":"' + text_name + '",\n\t"type":"' + "object" 
                + '",\n\t"location":' 
                + '\n\t\t{\n\t\t\t"x":' + number_location_x
                + ',\n\t\t\t"y":' + number_location_y
                + ',\n\t\t\t"angle":' + number_location_angle
                + '\n\t\t}\n\t}' + "#...#";
  return code;
};
Blockly.JavaScript['word_Pepper'] = function(block) {
  var text_name = block.getFieldValue('name');
  var text_word = block.getFieldValue('word');
  var dropdown_timeflag = block.getFieldValue('timeFlag');
  var number_time = block.getFieldValue('time');
  var number_volume = block.getFieldValue('volume');
  var number_pitch = block.getFieldValue('pitch');
  // TODO: Assemble JavaScript into code variable.
  var code = '\n\t{\n\t"mode":"word",\n\t"name":"' + text_name 
                + '",\n\t"word":"' + text_word + '",'
                + '\n\t"timeFlag":"' + dropdown_timeflag 
                + '",\n\t"time":' + number_time 
                + ',\n\t"volume":' + number_volume
                + ',\n\t"pitch":' + number_pitch
                + '\n\t}' + "#...#";
  return code;
};
Blockly.JavaScript['location_Pepper'] = function(block) {
  var text_name = block.getFieldValue('name');
  var number_location_x = block.getFieldValue('location_x');
  var number_location_y = block.getFieldValue('location_y');
  var number_location_angle = block.getFieldValue('location_angle');
  var dropdown_timeflag = block.getFieldValue('timeFlag');
  var number_time = block.getFieldValue('time');
  // TODO: Assemble JavaScript into code variable.
  var code = '\n\t{\n\t"mode":"location",\n\t"name":"' + text_name 
  + '",\n\t"location":' 
  + '\n\t\t{\n\t\t\t"x":' + number_location_x
  + ',\n\t\t\t"y":' + number_location_y
  + ',\n\t\t\t"angle":' + number_location_angle
  + '\n\t\t},' + '\n\t"timeFlag":"' + dropdown_timeflag 
  + '",\n\t"time":' + number_time 
  + '\n\t}' + "#...#";
  return code;
};

Blockly.JavaScript['animation_Pepper'] = function(block) {
  var text_name = block.getFieldValue('name');
  var dropdown_animationFlag = block.getFieldValue('animationFlag');
  var dropdown_timeflag = block.getFieldValue('timeFlag');
  var number_time = block.getFieldValue('time');
  // TODO: Assemble JavaScript into code variable.
  var code = '\n\t{\n\t"mode":"animation",\n\t"name":"' + text_name 
                + '",\n\t"animation":"' + dropdown_animationFlag + '",'
                + '\n\t"timeFlag":"' + dropdown_timeflag + '"' 
                + ',\n\t"time":' + number_time 
                + '\n\t}' + "#...#";
  return code;
};
Blockly.JavaScript['touch_robot_Pepper'] = function(block) {
  var text_name = block.getFieldValue('name');
  var dropdown_sensor = block.getFieldValue('sensor');
  // var dropdown_timeflag = block.getFieldValue('timeFlag');
  // var number_time = block.getFieldValue('time');
  // TODO: Assemble JavaScript into code variable.
  var code = '\n\t{\n\t"mode":"touch_robot",\n\t"name":"' + text_name 
                + '",\n\t"sensor":"' + dropdown_sensor + '",'
                + '\n\t"timeFlag":"' 
                // + dropdown_timeflag
                + 'nexttime' 
                + '"' 
                + ',\n\t"time":' 
                // + number_time
                + '0' 
                + '\n\t}' + "#...#";
  return code;
};

Blockly.JavaScript['word_NAO'] = function(block) {
  var text_name = block.getFieldValue('name');
  var text_word = block.getFieldValue('word');
  var dropdown_timeflag = block.getFieldValue('timeFlag');
  var number_time = block.getFieldValue('time');
  var number_volume = block.getFieldValue('volume');
  var number_pitch = block.getFieldValue('pitch');
  // TODO: Assemble JavaScript into code variable.
  var code = '\n\t{\n\t"mode":"word",\n\t"name":"' + text_name 
                + '",\n\t"word":"' + text_word + '",'
                + '\n\t"timeFlag":"' + dropdown_timeflag 
                + '",\n\t"time":' + number_time 
                + ',\n\t"volume":' + number_volume
                + ',\n\t"pitch":' + number_pitch
                + '\n\t}' + "#...#";
  return code;
};
Blockly.JavaScript['location_NAO'] = function(block) {
  var text_name = block.getFieldValue('name');
  var number_location_x = block.getFieldValue('location_x');
  var number_location_y = block.getFieldValue('location_y');
  var number_location_angle = block.getFieldValue('location_angle');
  var dropdown_timeflag = block.getFieldValue('timeFlag');
  var number_time = block.getFieldValue('time');
  // TODO: Assemble JavaScript into code variable.
  var code = '\n\t{\n\t"mode":"location",\n\t"name":"' + text_name 
  + '",\n\t"location":' 
  + '\n\t\t{\n\t\t\t"x":' + number_location_x
  + ',\n\t\t\t"y":' + number_location_y
  + ',\n\t\t\t"angle":' + number_location_angle
  + '\n\t\t},' + '\n\t"timeFlag":"' + dropdown_timeflag 
  + '",\n\t"time":' + number_time 
  + '\n\t}' + "#...#";
  return code;
};

Blockly.JavaScript['animation_NAO'] = function(block) {
  var text_name = block.getFieldValue('name');
  var dropdown_animationFlag = block.getFieldValue('animationFlag');
  var dropdown_timeflag = block.getFieldValue('timeFlag');
  var number_time = block.getFieldValue('time');
  // TODO: Assemble JavaScript into code variable.
  var code = '\n\t{\n\t"mode":"animation",\n\t"name":"' + text_name 
                + '",\n\t"animation":"' + dropdown_animationFlag + '",'
                + '\n\t"timeFlag":"' + dropdown_timeflag + '"' 
                + ',\n\t"time":' + number_time 
                + '\n\t}' + "#...#";
  return code;
};
Blockly.JavaScript['touch_robot_NAO'] = function(block) {
  var text_name = block.getFieldValue('name');
  var dropdown_sensor = block.getFieldValue('sensor');
  // var dropdown_timeflag = block.getFieldValue('timeFlag');
  // var number_time = block.getFieldValue('time');
  // TODO: Assemble JavaScript into code variable.
  var code = '\n\t{\n\t"mode":"touch_robot",\n\t"name":"' + text_name 
                + '",\n\t"sensor":"' + dropdown_sensor + '",'
                + '\n\t"timeFlag":"' 
                // + dropdown_timeflag
                + 'nexttime' 
                + '"' 
                + ',\n\t"time":' 
                // + number_time
                + '0' 
                + '\n\t}' + "#...#";
  return code;
};

Blockly.JavaScript['newBlock_create'] = function(block) {
  // var text_name = block.getFieldValue('block_name');
  let blockName_element = document.getElementById('input_block_name');
  var blockName = blockName_element.value;
  var statements_name = Blockly.JavaScript.statementToCode(block, 'script');
  

   // 正式なJSONのフォーマットにする部分(script)
  var list_script =  statements_name.split("#...#");
  var text_statements_script = convertJSON(list_script) 

  // TODO: Assemble JavaScript into code variable.
  var code = '{' 
                + '\n\t"name": "' + blockName 
                + '",'
                + '\n\t"scripts":' + text_statements_script 
                + '\n}';
  return code;
};

//ENRIQUE
Blockly.JavaScript['custom_dropdown'] = function(block) {
  var dropdown_name = block.getFieldValue('dropdown_name');
  var code = '\n\t{\n\t"mode":"originalBlock",'
  +'\n\t"script_name":"' + dropdown_name + '",'
  +'\n\t"timeFlag":"' + 'nexttime'
  + '"\n\t}' + "#...#";
  // return [code, Blockly.JavaScript.ORDER_ATOMIC];
  return code;
};