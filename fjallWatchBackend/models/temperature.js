var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
var https = require("https");
var fs = require('fs');
var exports = module.exports = {};

var domain = 'http://fjallet.mine.nu:81';

init();

function init() {
	log('Starting server...')
	// body...
}

exports.getInnerTemperature = function(callback){
	var request = new XMLHttpRequest();
	request.open('GET', domain + '/temperature/get/Temp_Inne', true);
	request.onload = function() {
		if(request.status >= 200 && request.status < 400){
			//Success
			var x = request.responseText.split('|');
			var obj = {
				code: x[1],
				status: x[2],
				temperature: x[3]
			}
			// log('inne temp: '+ obj.temperature);
			callback(obj);
		} else {
			log("Fail at " + request.responseText);
		}
	}
	request.onerror = function() {
		log("Error while fetching inner temperature");
	}
	request.send();
};

exports.getOuterTemperature = function(callback){
	var request = new XMLHttpRequest();
	request.open('GET', domain + '/temperature/get/Temp_Ute', true);
	request.onload = function() {
		if(request.status >= 200 && request.status < 400){
			//Success
			var x = request.responseText.split('|');
			var obj = {
				code: x[1],
				status: x[2],
				temperature: x[3]
			}
			callback(obj);
		} else {
			log("Fail at " + request.responseText);
		}
	}
	request.onerror = function() {
		log("Error while fetching outer temperature");
	}
	request.send();
};

exports.getInnerTemperatureOutliers = function(outlier,callback){
	var request = new XMLHttpRequest();
	request.open('GET', domain + '/temperature/get/Temp_Inne/'+outlier, true);
	request.onload = function(){
		if(request.status >= 200 && request.status < 400){
			//Success
			var x = request.responseText.split('|');
			var obj = {
				code: x[1],
				status: x[2],
				outlier_temperature: x[3]
			}
			callback(obj);
		} else {
			log("Fail at " + request.responseText);
		}
	}
	request.onerror = function() {
		log("Error while fetching "+ outlier +" outer temperature");
	}
	request.send();
};

exports.getOuterTemperatureOutliers = function(outlier,callback){
	var request = new XMLHttpRequest();
	request.open('GET', domain + '/temperature/get/Temp_Ute/'+outlier,true);
	request.onload = function(){
		if(request.status >= 200 && request.status < 400){
			//Success
			var x = request.responseText.split('|');
			var obj = {
				code: x[1],
				status: x[2],
				outlier_temperature: x[3]
			}
			callback(obj);
		} else {
			log("Fail at " + request.responseText);
		}
	}
	request.onerror = function() {
		log("Error while fetching "+ outlier +" outer temperature");
	}
	request.send();
};

/* Private Functions */
function log(msg) {
	var d = new Date().toLocaleTimeString();
	console.log(d+ ' | ' + msg);
}

