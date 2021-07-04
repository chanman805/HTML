
  
  var checkycss = function(){
  setTimeout(function(){
   document.getElementById("css_alert").style.transition = "all 0.2s";
   
  if (document.getElementById("CSS_CHECK").checked ===true){
   document.getElementById('cssInput').style.display = "none";
  external_css = "";
  document.getElementById("css_alert").style.height = "0px";
   document.getElementById("css_alert").style.opacity = "0%";
   cssbox.style.backgroundColor = "#e9e9e9";
   cssbox.style.color="black";
    cssbox.style.backgroundImage = "url('program_files/images/css.gif')"; 
	
  } else if (document.getElementById("W3_CHECK").checked === true){
	  
  document.getElementById("css_alert").innerHTML = "nuken is sourcing this stylesheet from an online repository.";
   document.getElementById('cssInput').style.display = "none";
   cssbox.style.color="black";
  external_css = '<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">';
    document.getElementById("css_alert").style.height = "40px";
   document.getElementById("css_alert").style.opacity = "100%";
   	cssbox.style.backgroundColor = "#cddfdd";
   cssbox.style.backgroundImage = "url('program_files/images/w3css.gif')";
   
   
   
    } else if (document.getElementById("CUSTOM_CSS_CHECK").checked === true){
	
  document.getElementById('cssInput').style.display = "inline-block";
  document.getElementById("css_alert").innerHTML = "Please enter your custom link tag below.";
    document.getElementById("css_alert").style.height = "auto";
   document.getElementById("css_alert").style.opacity = "100%";
   	cssbox.style.backgroundColor = "#dae4e4";
	cssbox.style.color="black";
   cssbox.style.backgroundImage = "url('program_files/images/script_bg.png')";
     external_css = document.getElementById('cssInput').value;
	 
	 cssbox.value.replace(cssbox.value,"/* Inline CSS goes here. Your project is already pulling from an external stylesheet! */"+cssbox.value);
  } else {
   document.getElementById('cssInput').style.display = "none";
  external_css = "";
  }
  },500);
  };
  
  
  var checkyboxes = function(){
  setTimeout(function(){
    document.getElementById('jq_alert').style.transition = "all 0.2s";
	
  if (document.getElementById("JS_CHECK").checked===true){
  document.getElementById('scriptInput').style.display = "none";

  jsbox_total = jsbox.value+"</scr"+"ipt>";
  scripttype = "<script>";

  jsbox.value.replace(jsbox.value,"//Script language set to Javascript.\n"+jsbox.value);
  jsbox.style.backgroundImage = "url('program_files/images/js.gif')"; 
jsbox.style.backgroundColor = "#e9e9e9";  
jsbox.style.color="black";
  document.getElementById('jq_alert').style.opacity = "0%";
  document.getElementById('jq_alert').style.height = "0%";
 
} else if (document.getElementById("JQUERY_CHECK").checked===true){
document.getElementById('scriptInput').style.display = "none";

  scripttype = '<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js">'+'</sc'+'ript>'+"\n"+"<script>";
 jsbox_total = jsbox.value+"</scr"+"ipt>";

 jsbox.value.replace(jsbox.value,"//Script language set to jQuery.\n"+jsbox.value);
   jsbox.style.backgroundImage = "url('program_files/images/jquery.gif')";
   jsbox.style.backgroundColor = "#ebe4d6";
   jsbox.style.color="black";
   document.getElementById('jq_alert').style.opacity = "100%";
   document.getElementById('jq_alert').style.height = "40px";  
  if (navigator.onLine){
   document.getElementById('jq_alert').innerHTML = "nuken is sourcing the latest version of jQuery from an online repository.";
   } else {
   document.getElementById('jq_alert').innerHTML = "nuken is offline. Your code's performance may be affected by a lack of resources.";
   
   }

   
} else if (document.getElementById("TYPESCRIPT_CHECK").checked===true){
document.getElementById('scriptInput').style.display = "none";
scripttype = "<script type = 'text/typescript'>";
 jsbox_total = jsbox.value+"</scr"+"ipt>"+'<script src="https://rawgit.com/Microsoft/TypeScript/master/lib/typescriptServices.js">'+"</sc"+"ript>"+ '<script src="https://rawgit.com/basarat/typescript-script/master/transpiler.js"></s'+'cript>';

  jsbox.value.replace(jsbox.value,"//Script language set to Typescript.\n"+jsbox.value);
   jsbox.style.backgroundImage = "url('program_files/images/typescript.gif')";
   document.getElementById('jq_alert').style.opacity = "100%";
   document.getElementById('jq_alert').style.height = "40px";
   jsbox.style.backgroundColor = "#dae0e6";
   jsbox.style.color="black";
   
   if (navigator.onLine){
   document.getElementById('jq_alert').innerHTML = "nuken is sourcing a Typescript compiler from an online repository.";
   } else {
   document.getElementById('jq_alert').innerHTML = "nuken is offline. Your code's performance may be affected by a lack of resources.";
   }
   
   
   
   } else if (document.getElementById("PRO_CHECK").checked===true){
document.getElementById('scriptInput').style.display = "none";
  scripttype = '<script src="https://cdn.jsdelivr.net/processing.js/1.4.8/processing.min.js">'+'</sc'+'ript>'+"\n"+"<script>";
 jsbox_total = jsbox.value+"</scr"+"ipt>";

  jsbox.value.replace(jsbox.value,"//Script language set to ProcessingJS.\n"+jsbox.value);
   jsbox.style.backgroundImage = "url('program_files/images/processingjs.gif')";
   jsbox.style.backgroundColor = "#e9dce0";
   jsbox.style.color="black";
   document.getElementById('jq_alert').style.opacity = "100%";
   document.getElementById('jq_alert').style.height = "40px";  
  if (navigator.onLine){
   document.getElementById('jq_alert').innerHTML = "nuken is sourcing a ProcessingJS library from an online repository.";
   } else {
   document.getElementById('jq_alert').innerHTML = "nuken is offline. Your code's performance may be affected by a lack of resources.";
   
   }


 } else if (document.getElementById("CUSTOM_CHECK").checked===true){
document.getElementById('scriptInput').style.display = "inline-block";

  scripttype = document.getElementById('scriptInput').value;
 jsbox_total = "<script>"+jsbox.value+"</scr"+"ipt>";

  jsbox.value.replace(jsbox.value,"//Script language set to custom. Extra code goes here, your project is already pulling from an external script!\n"+jsbox.value);
   jsbox.style.backgroundImage = "url('program_files/images/script_bg.png')";
   jsbox.style.backgroundColor = "#ebebd6";
   jsbox.style.color="black";
   document.getElementById('jq_alert').style.opacity = "100%";
   document.getElementById('jq_alert').style.height = "auto"; 
   document.getElementById('jq_alert').style.marginBottom = "2.5px";
   document.getElementById('jq_alert').innerHTML = "Please enter your custom script tag below.";

   
} else {
document.getElementById('scriptInput').style.display = "none";
  jsbox_total = jsbox.value+"</scr"+"ipt>";
  scripttype = "<script>";
  document.getElementById('JQUERY_CHECK').checked = false;
  document.getElementById('TYPESCRIPT_CHECK').checked = false;
}
},500);

  };
 
 document.getElementById('checkyboxes_button').addEventListener("click",checkyboxes);
 document.getElementById('checkycss_button').addEventListener("click",checkycss);
 
  document.getElementById('close_button_css').addEventListener("click",checkycss);
 document.getElementById('close_button_script').addEventListener("click",checkyboxes);
 
 
 
 

(function () {
var textFile = null,
  makeTextFile = function (text) {
    var data = new Blob([text], {type: "text/html", endings:"native"});
	
    if (textFile !== null) {
      window.URL.revokeObjectURL(textFile);
    }

    textFile = window.URL.createObjectURL(data);

    return textFile;
  };
 
  makeHTML = function() {
 jsbox = document.getElementById('jsbox');

 if (document.getElementById("TYPESCRIPT_CHECK").checked===true){
 jsbox_total = jsbox.value+"</scr"+"ipt>"+'<script src="https://rawgit.com/Microsoft/TypeScript/master/lib/typescriptServices.js">'+"</sc"+"ript>"+ '<script src="https://rawgit.com/basarat/typescript-script/master/transpiler.js"></s'+'cript>';
 } else if (document.getElementById("JS_CHECK").checked===true){
 jsbox_total = jsbox.value+"</scr"+"ipt>";
 } else if (document.getElementById("JQUERY_CHECK").checked===true){
 jsbox_total = jsbox.value+"</scr"+"ipt>";
  } else if (document.getElementById("CUSTOM_CHECK").checked===true){
   jsbox_total = "<script>"+jsbox.value+"</scr"+"ipt>";
 } else {
 jsbox_total = jsbox.value+"</scr"+"ipt>";
 }
 
 create = document.getElementById("create"),
  		textbox = document.getElementById("textbox"),
    	cssbox = document.getElementById("cssbox"),
    	titlebox = document.getElementById("titlebox"),
    	filebox = document.getElementById("filebox");
		
  var html = "<html>\n<head>\n<title>\n"
    	+ titlebox.value
		+ "\n</title>\n"
		+ external_css
    	+ "\n<style>\n"
    	+ cssbox.value
    	+ "\n</style>\n"
    	+ "</head>\n<body>\n"
    	+ textbox.value
    	+ "\n</body>\n"
		+ scripttype+"\n"
		+ jsbox_total+"</html>";	
	external_html = html;
	console.log('nuken Project was constructed.');
	return html;
  
 
};
  
   

  var create = document.getElementById("create"),
  		textbox = document.getElementById("textbox"),
    	cssbox = document.getElementById("cssbox"),
    	titlebox = document.getElementById("titlebox"),
		jsbox = document.getElementById('jsbox');
    	filebox = document.getElementById("filebox");

  create.addEventListener("click", function () {
    var link = document.getElementById("downloadlink");
    
    var html = makeHTML(); 
    
 	link.download = filebox.value;
    link.href = makeTextFile(html);   
    link.style.display = "none";
	link.click();
	window.location.replace("#exported");
  }, false);
  preview.addEventListener("click", function () {
	
    var previewframe = document.getElementById("preview_frame");
		previewframe.innerHTML = "<iframe id=\"new_frame\">" + html + "</iframe>";

    var newframe = document.getElementById("new_frame");
	var frame = (newframe.contentWindow || newframe.contentDocument); //Cross-browser support
	if (frame.document) { frame = frame.document; }	

    var html = makeHTML(); 
    
	frame.write(html);	
	console.log('nuken Project was written to the preview area.');
  }, false);  
})();
