
$(document).ready(function(){
	$('.house-temp-panel').on('click', function(){
		route('house-temperature');
	});

	$('.outer-temp-panel').on('click', function(){
		route('outer-temperature');
	});

	$('.hot-tub-temp-panel').on('click', function(){
		route('hot-tub-temperature');
	});

	$(window).resize(function(){
		resize();
	});

	setImageSize();
});

main();

function main() {

	updateTable();

	var interval = setInterval(function(){
		updateTable();
	},60000);

}

function getDomain(){
	return 'http://localhost:8282/api';
}

function updateTable(){
	fetchHouseTemp(setHouseTemp);
	fetchOuterTemp(setOuterTemp);
	fetchCameraImg(setCameraImg);
	fetchHotTub(setHotTubTemp);
}

function route(dest) {
	console.log(dest);
}

function resize() {
	setImageSize();
}

function fetchHouseTemp(callback){
	$.ajax({
		url: getDomain()+'/innerTemperature',
		type: 'GET',
	   	success: function(data){
	   		callback(data);
	   	}
	});
}

function fetchOuterTemp(callback){
	$.ajax({
		url: getDomain()+'/outerTemperature',
		type: 'GET',
	   	success: function(data){
	   		callback(data);
	   	}
	});
}

function fetchBadtunnaTemp(callback){
	//TODO
}

function fetchCameraImg(callback) {
	$.ajax({
		url: getDomain()+'/cameraImage',
		type: 'GET',
		success: function (data) {
			callback(data);
		}
	});
}

function fetchHotTub(callback) {
	// $.ajax({
	// 	url: getDomain()+'/hotTubTemperature',
	// 	type: 'GET',
	// 	success: function (data) {
	// 		console.log(data);
	// 		callback(data);
	// 	}
	// });
	
	var obj = {temperature: Math.floor((Math.random() * 20) + 1)}

	callback(obj);
}

function setImageSize() {
	console.log($('.camera-panel-body').width());
	var width = $('.camera-panel-body').width();
	$('.camera-img').width(width);
}

function setHouseTemp(obj){
 	$('.house-temp').text(obj.temperature + '°C');
}

function setOuterTemp(obj){
	$('.outer-temp').text(obj.temperature + '°C');
}

function setCameraImg(src) {
	$('.camera-img').attr('src', src);
}

function setHotTubTemp(obj) {
	$('.hot-tub-temp').text(obj.temperature + '°C');
}