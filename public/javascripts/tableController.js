
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
	return 'http://192.168.1.2:8282/api';
}

function updateTable(){
	$('.camera-img').attr('src', "");


	fetchHouseTemp(setHouseTemp);
	fetchOuterTemp(setOuterTemp);
	fetchCameraImg(setCameraImg);
	fetchHotTub(setHotTubTemp);

	//Min and max
	fetchHouseTempMinMax(setHouseTempMin, setHouseTempMax);
	fetchOuterTempMinMax(setOuterTempMin, setOuterTempMax);

}

function route(dest) {
	console.log(dest);
}

function resize() {
	setImageSize();
}

function stopSpinner() {
	$('.spinner-container').hide();
}

function startSpinenr(){
	$('.spinner-container').show();
}

/*--- Fetching data ---*/

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

function fetchHouseTempMinMax(callback_min, callback_max) {
	$.ajax({
		url: getDomain()+'/innerTemperature/min',
		type: 'GET',
		success: function (data) {
			callback_min(data);
		}
	});

	$.ajax({
		url: getDomain()+'/innerTemperature/max',
		type: 'GET',
		success: function (data) {
			callback_max(data);
		}
	});
}

function fetchOuterTempMinMax(callback_min, callback_max) {
	$.ajax({
		url: getDomain()+'/outerTemperature/min',
		type: 'GET',
		success: function (data) {
			callback_min(data);
		}
	});

	$.ajax({
		url: getDomain()+'/outerTemperature/max',
		type: 'GET',
		success: function (data) {
			callback_max(data);
		}
	});
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
	
	// var obj = {temperature: Math.floor((Math.random() * 20) + 1)}

	// callback(obj);
}


/*--- Setters ---*/
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
	// stopSpinner();
	$('.camera-img').attr('src', src);
}

function setHotTubTemp(obj) {
	$('.hot-tub-temp').text('('+obj.temperature + '°C)');
}

function setHouseTempMin(obj) {
	$('.house-temp-min').text('Min: '+ obj.outlier_temperature + '°C');
}

function setHouseTempMax(obj) {
	$('.house-temp-max').text('Max: '+ obj.outlier_temperature + '°C');
}

function setOuterTempMin(obj) {
	$('.outer-temp-min').text('Min: '+ obj.outlier_temperature + '°C');
}

function setOuterTempMax(obj) {
	$('.outer-temp-max').text('Max: '+ obj.outlier_temperature + '°C');
}