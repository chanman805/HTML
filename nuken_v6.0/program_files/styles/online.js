
if (navigator.onLine){
console.log('nuken is online!');
if (uptodate === false){
console.log('A new version of nuken was detected.');
document.getElementById("puppy3").click();
} else {
uptodate=true;
}
} else {

shop_frame.src = "program_files/styles/offline.html";

console.log('nuken is offline!');
uptodate=true;
}