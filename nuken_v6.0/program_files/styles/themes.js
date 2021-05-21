
var themeverify = function(){
if (themeverifier === false){
document.getElementById("puppy2").click();
console.log('No theme files could be found.');
} else {
themefound=false;returntonormal();
}
};


var returntonormal = function(){
if (switcheroo === false){
console.log('nuken Theme was reverted to default.');
imagepath = "program_files/images/";
pin1.src = imagepath+"pin.gif";
pin2.src = imagepath+"pin.gif";
pin3.src = imagepath+"pin.gif";
reload1.src = imagepath+"reload.gif";
reload2.src = imagepath+"reload.gif";
reload3.src = imagepath+"reload.gif";
document.getElementById("bigpreview").src = imagepath+"download.gif";
document.getElementById("github").src = imagepath+"github.gif";
document.getElementById("inverter").src = imagepath+"invert.gif";
document.getElementById("reloader").src = imagepath+"reload.gif";
document.getElementById("showandtell").src = imagepath+"share.gif";
document.getElementById("shop_icon").src = imagepath+"shop.gif";
document.getElementById("addoner").src = imagepath+"addon.gif";
document.getElementById("tooler").src = imagepath+"tools.gif";
document.getElementById("importer").src = imagepath+"import.gif";
document.getElementById("exporter").src = imagepath+"export.gif";
document.getElementById("shopNO").src = imagepath+"shop.gif";
document.getElementById("playbutton").src = imagepath+"play.gif";
document.getElementById("logo").src = imagepath+"logo.png";
document.getElementById("bullhorn").src = imagepath+"announce.gif";
document.getElementById("harry_styles").href = "program_files/styles/default_stylesheet.css";
switcheroo = true;
} else {
console.log('nuken Theme was selected!');
imagepath = "program_files/themes/selected/images/";
pin1.src = imagepath+"pin.gif";
pin2.src = imagepath+"pin.gif";
pin3.src = imagepath+"pin.gif";
reload1.src = imagepath+"reload.gif";
reload2.src = imagepath+"reload.gif";
reload3.src = imagepath+"reload.gif";
document.getElementById("bigpreview").src = imagepath+"download.gif";
document.getElementById("github").src = imagepath+"github.gif";
document.getElementById("inverter").src = imagepath+"invert.gif";
document.getElementById("reloader").src = imagepath+"reload.gif";
document.getElementById("showandtell").src = imagepath+"share.gif";
document.getElementById("shop_icon").src = imagepath+"shop.gif";
document.getElementById("addoner").src = imagepath+"addon.gif";
document.getElementById("tooler").src = imagepath+"tools.gif";
document.getElementById("importer").src = imagepath+"import.gif";
document.getElementById("exporter").src = imagepath+"export.gif";
document.getElementById("shopNO").src = imagepath+"shop.gif";
document.getElementById("playbutton").src = imagepath+"play.gif";
document.getElementById("logo").src = imagepath+"logo.png";
document.getElementById("bullhorn").src = imagepath+"announce.gif";
document.getElementById("harry_styles").href = "program_files/themes/selected/theme.css";
switcheroo = false;
}
};