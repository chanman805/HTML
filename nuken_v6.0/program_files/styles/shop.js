var shop_frame = document.getElementById('shop_frame');
var navi = document.getElementById('navi');
var mini_navbar = document.getElementById('mini_navbar');

var show_shop = function(){
shop_frame.style.top = "0px";
mini_navbar.style.top="0px";
window.location.replace('#');
console.log('Reset user position.');
};
var reset_shop = function(){
		if (navigator.onLine){
		document.getElementById('shop_frame').style.backgroundColor = "white";
		document.getElementById('shop_frame').src = "http://nuken.xyz/editor/program_files/shop.html";
	} else {
		document.getElementById('shop_frame').style.backgroundColor = "white";
document.getElementById('shop_frame').src = "program_files/styles/offline.html";
	}
	
console.log('Reset nuken Shop frame.');
};

var return_edit = function(){
setTimeout(reset_shop,1000);
shop_frame.style.top = "1000";
mini_navbar.style.top="-100px";
};