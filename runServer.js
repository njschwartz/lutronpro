var lutronpro = require('./nodetest.js');

//Enter your Bridge IP Addresses
var SMARTBRIDGE_IP = '192.168.1.47';
var SMARTTHINGS_IP = '192.168.1.19';


var shortPressTime = 300;  //Time (in ms) to hold button to trigger a held event vs a single press
var intervalTime = 750;  //Frequency (in ms) to send a held button event if using the ramp hold method

/* Use this map to define how you want each button to react when held. 
	**The device is the device number of the Pico. You can press a button and look at the logs while this is running to get it.
	**The numbers represent each button. 
	**You do not have to enter anything for this if you do not want to and it will default to a single hold event
	**Use the example below for multiple devices
	**
	
	**A True value means that the button will use the ramp style. A held event will be sent at the interval above until the button is released
	**A False value means the button will send a single held button event when held for longer than shortPressTime above
	
	
var buttonMethods = [
	{device: 1,
	4: true,
	5: true
	},
	{device: 2,
	1: true,
	3: false,
	4: false,
	5: true
	}
];
*/

var buttonMethods = [
	{device: '3',
	4: true;
	5: true;
	}
];



lutronpro.startup(SMARTBRIDGE_IP, SMARTTHINGS_IP, buttonMethods, shortPressTime, intervalTime);
