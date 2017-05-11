var lutronpro = require('lutronpro');

var SMARTBRIDGE_IP = '192.168.1.47';
var SMARTTHINGS_IP = '192.168.1.19';

lutronpro.startup(SMARTBRIDGE_IP, SMARTTHINGS_IP);