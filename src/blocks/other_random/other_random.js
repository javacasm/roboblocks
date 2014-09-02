'use strict';
/* global Blockly, JST */
/* jshint sub:true */

var other_random = function() {
    var value_num = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_NONE) || '0';
    var value_dmax = Blockly.Arduino.valueToCode(this, 'DMAX', Blockly.Arduino.ORDER_ATOMIC) || '10';
    value_dmax = value_dmax.replace('(', '').replace(')', '');
    var code = JST['other_random']({
        'value_num': value_num,
        'value_dmax': value_dmax
    });
    return [code, Blockly.Arduino.ORDER_NONE];
};

//register with blockly arduino
Blockly.Arduino.other_random = other_random;

Blockly.Blocks.other_random = {
    category: 'Math',
    helpUrl: 'https://github.com/bq/roboblock/tree/master/src/blocks/other_random',
    init: function() {
        this.appendValueInput('NUM', Number)
            .appendField('Random between')
            .setCheck(Number);
        this.appendValueInput('DMAX', Number)
            .appendField(' and ')
            .setCheck(Number);
        this.setInputsInline(true);
        this.setOutput(true);
        this.setTooltip('Assign a random number');
    }
};