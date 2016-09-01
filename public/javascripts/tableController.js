
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
			console.log(data);
			callback(data);
		}
	});
}

function setHouseTemp(obj){
 	$('.house-temp').text(obj.temperature);
}

function setOuterTemp(obj){
	$('.outer-temp').text(obj.temperature);
}

function setCameraImg(src) {
	$('.camera-img').attr('src', src);
}