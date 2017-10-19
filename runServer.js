var lutronpro = require('lutronpro');


//Enter your Bridge IP Addresses
var SMARTBRIDGE_IP = ['192.168.1.44'];
var SMARTTHINGS_IP = '192.168.1.2';

//Copy and past the below URL into your web browser.  Login with your Lutron credentials. In the addess bar at the end of the URL you will see something like 'code=XXXXXXX'. 
//Copy and paste that code below. It is needed to generate the certificates used for the new Lutron SSL connection.
//https://device-login.lutron.com/oauth/authorize?client_id=e001a4471eb6152b7b3f35e549905fd8589dfcf57eb680b6fb37f20878c28e5a&redirect_uri=https%3A%2F%2Fdevice-login.lutron.com%2Flutron_app_oauth_redirect&response_type=code
var OAUTHCODE = 'd76676f4544238ff682a0d6684e273ecb96c0fede251e33fe34c9316f3503808';


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
	4: true,
	5: true
	}
];

lutronpro.startup(SMARTBRIDGE_IP, SMARTTHINGS_IP, OAUTHCODE, buttonMethods, shortPressTime, intervalTime);

