var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
var https = require("https");
var fs = require('fs');
var exports = module.exports = {};

init();

function init() {
	// body...
}

exports.getInnerTemperature = function(callback){
	var request = new XMLHttpRequest();
	request.open('GET', 'http://fjallet.mine.nu:81/temperature/get/Temp_Inne', true);
	request.onload = function() {
		if(request.status >= 200 && request.status < 400){
			//Success
			var x = request.responseText.split('|');
			var obj = {
				code: x[1],
				status: x[2],
				temperature: x[3]
			}
			// var data = JSON.parse(request.responseText);
			console.log('inne temp: '+ obj.temperature);
			callback(obj);
		} else {
			console.log("FAIL!!!!" + request.responseText);
		}
	}
	request.onerror = function(err) {
		console.log("ERROR!!!!");
	}
	request.send();
};

exports.getOuterTemperature = function(callback){
	var request = new XMLHttpRequest();
	request.open('GET', 'http://fjallet.mine.nu:81/temperature/get/Temp_Ute', true);
	request.onload = function() {
		if(request.status >= 200 && request.status < 400){
			//Success
			var x = request.responseText.split('|');
			var obj = {
				code: x[1],
				status: x[2],
				temperature: x[3]
			}
			// var data = JSON.parse(request.responseText);
			console.log('ute temp: '+ obj.temperature);
			callback(obj);
		} else {
			console.log("FAIL!!!!" + request.responseText);
		}
	}
	request.onerror = function(err) {
		console.log("ERROR!!!!");
	}
	request.send();
};