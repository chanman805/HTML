window.onerror = function(){
document.getElementById('error_code').innerHTML = "We've run into a bit of a problem, please reload the page.";

};


var counter = 0;
var themecheck = function(){
if (themefound ===false){
console.log('Theme files detected. Changing image and CSS paths...');
imagepath = "program_files/images/";
document.getElementById("harry_styles").href = "program_files/styles/default_stylesheet.css";
} else {
console.log('No theme files detected.');
imagepath = "program_files/themes/selected/images/"
document.getElementById("harry_styles").href = "program_files/themes/selected/theme.css";
}
};