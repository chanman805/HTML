var slot1 = document.getElementById("slot1");
var slot2 = document.getElementById("slot2");
var slot3 = document.getElementById("slot3");

var pin1 = document.getElementById('pin1');
var pin2 = document.getElementById('pin2');
var pin3 = document.getElementById('pin3');
var reload1 = document.getElementById('reload1');
var reload2 = document.getElementById('reload2');
var reload3 = document.getElementById('reload3');

var addonmenu1 = document.getElementById('addon1');
var addonmenu2 = document.getElementById('addon2');
var addonmenu3 = document.getElementById('addon3');


var reloadAnimate = function(){
document.getElementById("m1").style.transform = "scaleX(-1)";
document.getElementById("m2").style.transform = "scaleX(-1)";
document.getElementById("m3").style.transform = "scaleX(-1)";
iframe1.style.opacity = "0%";
iframe2.style.opacity = "0%";
iframe3.style.opacity = "0%";

setTimeout(function(){
document.getElementById("m1").style.transform = "scaleX(1)";
document.getElementById("m2").style.transform = "scaleX(1)";
document.getElementById("m3").style.transform = "scaleX(1)";
iframe1.style.opacity = "100%";
iframe2.style.opacity = "100%";
iframe3.style.opacity = "100%";
},400);

};

var expand = function(element){
element.style.transition = 'all 0.5s';
element.style.opacity = '0%';
element.style.transform = 'scale(1.5)';
setTimeout(function(){retract(element)},1500);
document.getElementById("m1").style.transform = "scale(1)";
document.getElementById("m2").style.transform = "scale(1)";
document.getElementById("m3").style.transform = "scale(1)";
};

var retract = function(element){

element.style.transition = 'all 0.1s';
element.style.opacity = '100%';
element.style.transform = 'scale(1)';


};

var closeaddon = function(){
document.getElementById("m1").style.transform = "scale(0)";
document.getElementById("m2").style.transform = "scale(0)";
document.getElementById("m3").style.transform = "scale(0)";
};

var hideboxes = function(){
document.getElementById('cssbox').readOnly=true;
document.getElementById('textbox').readOnly=true;
document.getElementById('jsbox').readOnly=true;
document.getElementById('filebox').readOnly=true;
document.getElementById('titlebox').readOnly=true;
setTimeout(showboxes,500);
};

var showboxes = function(){
document.getElementById('cssbox').readOnly=false;
document.getElementById('textbox').readOnly=false;
document.getElementById('jsbox').readOnly=false;
document.getElementById('filebox').readOnly=false;
document.getElementById('titlebox').readOnly=false;
};



var blackout = function(element){
element.style.display = "none";
element.style.opacity = "0%";
};

var whitein = function(element){
element.style.display = "block!important";
element.style.opacity = "100%!important";
};

var addoncheck = function(){

if (counter ===3){


blackout(addonmenu1);
blackout(addonmenu2);
blackout(addonmenu3);

document.getElementById("errorboi").style.display = "block";
document.getElementById("shopNO").style.display = "block";
console.log('No add-ons detected.');
} else {

whitein(addonmenu1);
whitein(addonmenu2);
whitein(addonmenu3);

document.getElementById("slot1").src = "program_files/addons/active/slot1/preview.gif";

document.getElementById("slot2").src = "program_files/addons/active/slot2/preview.gif";

document.getElementById("slot3").src = "program_files/addons/active/slot3/preview.gif";

document.getElementById("errorboi").style.display = "none";
document.getElementById("shopNO").style.display = "none";
console.log('Add-ons detected.');
}
};