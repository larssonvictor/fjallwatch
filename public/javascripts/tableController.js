
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
	$.get(getDomain()+'Temp_Inne',function(data){
		callback(data);
	});
}

function fetchUtomhusTemp(callback){

}

function fetchBadtunnaTemp(callback){

}

function setInomhusTemp(value){
 console.log(value);
}