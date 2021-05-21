if (navigator.onLine){
console.log('nuken is online!');
if (uptodate === false){
console.log('A new version of nuken was detected.');
document.getElementById("puppy3").click();
} else {
uptodate=true;
}
} else {

console.log('nuken is offline!');
uptodate=true;
}