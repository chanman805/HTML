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
  var jsbox_total = jsbox.value+"</scr"+"ipt>";
	var html = "<html>\n<head>\n<title>\n"
    	+ titlebox.value
		+ "\n</title>\n" 
    	+ "<style>\n"
    	+ cssbox.value
    	+ "\n</style>\n"
    	+ "</head>\n<body>\n"
    	+ textbox.value
    	+ "\n</body>\n"
		+ "<script>\n"
		+ jsbox_total;	
	external_html = html;
	console.log('nuken Project was constructed.');
	return html;

	
  }  
  
   

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
