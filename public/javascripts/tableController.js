
main();

function main() {

	updateTable();

	var interval = setInterval(function(){

	},60000);

}

function getDomain(){
	return 'http://fjallet.mine.nu:81/temperature/get/';
}

function updateTable(){
	fetchInomhusTemp(setInomhusTemp);
}

function fetchInomhusTemp(callback){
	$.ajax({
		url: getDomain()+'Temp_Inne',
		crossDomain: true,
		xhrFields: {
      		withCredentials: true
	   	},
	   	success: function(data){
	   		callback(data);
	   	}
	});
}

function fetchUtomhusTemp(callback){

}

function fetchBadtunnaTemp(callback){

}

function setInomhusTemp(value){
 console.log(value);
}