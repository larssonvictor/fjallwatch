var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
var https = require("https");
var fs = require('fs');
var exports = module.exports = {};

init();

function init() {
	// body...
}

exports.getCameraImage = function(callback){
	callback('http://fjallet.mine.nu:8080/axis-cgi/jpg/image.cgi?resolution=640x480&camera=1&compression=25&text=1');	

	// var request = new XMLHttpRequest();
	// request.open('GET', 'http://fjallet.mine.nu:8080/axis-cgi/jpg/image.cgi?resolution=640x480&camera=1&compression=25&text=1', true);
	// if(request.status >= 200 && request.status < 400){
	// 		//Success
	// 		console.log(request.responseText);
	// 		callback(request.responseText);
	// } else {
		
	// 	console.log("Failed to fetch from fjallet");
	// 	request.open('GET', 'http://hagbard.se/fjallet/bild/image.jpg',true);
	// 	callback(request.responseText)
	// }

	// request.onerror = function(err) {
	// 	console.log("ERROR!!!!");
	// }
	// request.send();
}

