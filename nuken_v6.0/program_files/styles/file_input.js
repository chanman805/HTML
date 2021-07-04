

function init(){
console.log('Now accepting file input.');
  document.getElementById('fileInput').addEventListener('change', handleFileSelect, false);
}

function handleFileSelect(event){
  const reader = new FileReader()
  reader.onload = handleFileLoad;
  reader.readAsText(event.target.files[0])
}

function handleFileLoad(event){

var str = event.target.result;
//BODY CHECK

if (str.includes("<body>") && str.includes("</body>")){
window.location.replace("#popup7");
console.log('Imported project HTML successfully.');
document.getElementById('textbox').value = str.split('<body>').pop().split('</body>')[0];
document.getElementById('filebox').value = "index_v2.html"



//CSS CHECK


if (str.includes("<style>") && str.includes("</style>")){
	
	
	//W3 CHECK
	if (str.includes("w3.css")){
	document.getElementById('W3_CHECK').click();
	checkycss();
	checkycss();
	
	
	//CUSTOM SHIT CHECK
	} else if (str.includes("link") || str.includes("stylesheet")){
	document.getElementById('CUSTOM_CSS_CHECK').click();
var part = str.substring(
    str.lastIndexOf("<link") + 1, 
    str.lastIndexOf("/>")
);
var usethis = "<"+part+"/>";
document.getElementById('cssInput').value = usethis;
	checkycss();
    checkycss();
	}
	
	//WE WANT TO IMPORT WHATEVER ANYWAY
document.getElementById('cssbox').value =  str.split('<style>').pop().split('</style>')[0];
console.log('Imported project CSS successfully.');

} else {


//YOU IDIOT THERE'S NO CSS
window.location.replace("#nocssfound");
console.log('Imported project does not contain any CSS.');
}


if (str.includes("<title>") && str.includes("</title>")){
console.log('Imported project Title recovered successfully.');
document.getElementById('titlebox').value = str.split('<title>').pop().split('</title>')[0]+" (Recovered)";

} else {
	
//A FREAK ACCIDENT HAS OCCURED THERE IS NO FREAKING TITLE AAAAAAAAAAAA HOW DID YOU EXPORT YOUR FILE?!	
	
document.getElementById('titlebox').value = "Imported File (No title)";
console.log('Imported project has no title.');
}

//JS (OR SCRIPT) CHECK

if (str.includes("<script")){
console.log('Imported project JS successfully.');


//TYPESCRIPT CHECK
if (str.includes("text/typescript")){
	
	
document.getElementById('TYPESCRIPT_CHECK').click();	
checkyboxes();
checkyboxes();
document.getElementById('jsbox').value = str.split("<script type = 'text/typescript'>").pop().split('</scr'+'ipt>')[0];	
	//JQUERY CHECK
} else if (str.includes("jquery.min")){
	
document.getElementById('JQUERY_CHECK').click();	
checkyboxes();
checkyboxes();
document.getElementById('jsbox').value = str.split("<script>").pop().split('</scr'+'ipt>')[0];	


//PROCESSING CHECK
} else if (str.includes("processing.js")){
	
document.getElementById('PRO_CHECK').click();	
checkyboxes();
checkyboxes();
document.getElementById('jsbox').value = str.split("<script>").pop().split('</scr'+'ipt>')[0];	

//CUSTOM SHIT
} else if (str.includes("<script src = ")){
	
	
document.getElementById('CUSTOM_CHECK').click();	
checkyboxes();
checkyboxes();
var tempy = str.split("<script src =").pop().split('</scr'+'ipt>')[0];
document.getElementById('scriptInput').value = "<script src = " + tempy +"</script>";
document.getElementById('jsbox').value = str.split("<script>").pop().split('</scr'+'ipt>')[0];	


} else if (str.includes("<script>" && str.includes("</script>"))){
	
	
document.getElementById('JS_CHECK').click();	
checkyboxes();
checkyboxes();
document.getElementById('jsbox').value = str.split("<script>").pop().split('</scr'+'ipt>')[0];	

} else {
	document.getElementById('JS_CHECK').click();	
checkyboxes();
checkyboxes();
	document.getElementById('jsbox').value = str.split("<script>").pop().split('</scr'+'ipt>')[0];
}



// YOU'VE GOT NO JAVASCRIPT! NONE AT ALL! NOOOOOO
} else {
document.getElementById('jsbox').value = "//No JS found";
window.location.replace("#nojsfound");
console.log('Imported project has no JS.');
}

//CONGRATULATIONS! YOU REALLY, REALLY, REALLY **REALLY** HAVE F***ED UP.

} else {
window.location.replace("#popup8");
console.log('Failed to import project.');
}

}
  