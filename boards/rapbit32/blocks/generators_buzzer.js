function InitBuzzer() {
    Blockly.Python.definitions_['from_machine_import_pin'] = 'from machine import Pin';
    Blockly.Python.definitions_['init_buzzer'] = 'buzzer = Pin(4, Pin.OUT)';
}

Blockly.Python['buzzer_beep_duration'] = function(block) {
    InitBuzzer();
    Blockly.Python.definitions_['from_time_import_sleep'] = 'from time import sleep';

    var value_duration = Blockly.Python.valueToCode(block, 'duration', Blockly.Python.ORDER_ATOMIC);
    var code = `buzzer.value(1); sleep(${value_duration}); buzzer.value(0)\n`;
    return code;
};

Blockly.Python['buzzer_beep_on'] = function(block) {
    InitBuzzer();

    var code = `buzzer.value(1)\n`;
    return code;
};

Blockly.Python['buzzer_beep_off'] = function(block) {
    InitBuzzer();

    var code = `buzzer.value(0)\n`;
    return code;
};
