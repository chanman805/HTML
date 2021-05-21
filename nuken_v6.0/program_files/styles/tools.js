
var darken = function(){
if (isdark===false){
document.documentElement.style.filter = "invert(100%)";
console.log('All colors on the page were inverted.');
isdark = true;
} else {
document.documentElement.style.filter = "invert(0%)";
console.log('All colors on the page were inverted again!');
isdark=false;
}
};

var github = function(){
document.getElementById("gitty").click();
console.log('Github link was clicked!');
};
var mailer = function(){
document.getElementById("supersecretmail").click();
console.log('Mail link was clicked!');
};