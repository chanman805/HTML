window.addEventListener("keyup", event => {

if (document.getElementById("checker_mccheckerson").checked===true){
document.getElementById("playbutton").style.transition = "all 0.5s";
document.getElementById("playbutton").style.filter = "invert(100%) brightness(150%) sepia(100) saturate(100) hue-rotate(50deg)";
document.getElementById("preview").click();
console.log('Auto-run has been activated.');
  } else {
  document.getElementById("playbutton").style.transition = "all 0.5s";
document.getElementById("playbutton").style.filter = "invert(100%) contrast(150%)";
console.log('Auto-run has been disabled.');
  }
});

var theater_preview = function(){
if (executedonce===true){
var h = screen.height;
var w = screen.width;
var win = window.open("", "Title", "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width="+w+",height="+h+",top="+(screen.height-400)+",left="+(screen.width-840));
win.document.body.innerHTML = external_html;
window.location.replace('#exportwarn');
console.log('Exported project to preview window.');
} else {
window.location.replace('#nothingtopreview');
console.log('Failed to export project to preview window.');
}
};


function preview_code () {
    var previewframe = document.getElementById("preview_frame");
		previewframe.innerHTML = "<iframe id=\"new_frame\">" + html + "</iframe>";

    var newframe = document.getElementById("new_frame");
	var frame = (newframe.contentWindow || newframe.contentDocument); //Cross-browser support
	if (frame.document) { frame = frame.document; }	

    var html = makeHTML(); 
    
	frame.write(html);	
}
