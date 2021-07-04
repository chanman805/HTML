 
var fullscreen_preview = function(){
 if (isfullscreen && executedonce){
		//RESET PREVIEW PANE
		setTimeout(function(){},1500);
		var cusid_ele = document.getElementsByClassName('overlay');
for (var i = 0; i < cusid_ele.length; ++i) {
    var item = cusid_ele[i];  
    item.style.zIndex = "100";
}
		document.body.style.backgroundImage = "url('program_files/themes/selected/images/background.gif')";
		
	  document.getElementById('not_preview_frame').style.transition = "all 0.5s"; 
	document.getElementById('preview_frame').style.opacity = "0%";
setTimeout(function(){	
	document.getElementById('not_preview_frame').style.transform = "translate(0%, 0)";
	document.getElementById('preview_frame').style = "z-index:0;opacity:0%;width:67%;height:100%;transition: all 0.5s;transform:translate(0%,0%);border-top:0px solid Transparent";
setTimeout(function(){	document.getElementById('preview_frame').style.opacity = "100%";},500);
isfullscreen = false;	
},250);
document.getElementById('fullscreen_button').style.backgroundColor = "black";
document.getElementById('fullscreen_button').innerHTML = "Fullscreen my file";
	} else {
		//THERE'S NOTHING TO PREVIEW!
		if (!executedonce){
window.location.replace("#nothingtopreview");
isfullscreen = false;
		} else {
		//SHOW PREVIEW PANE
		document.body.style.backgroundImage = "url('"+imagepath+"loader.gif";
		var cusid_ele = document.getElementsByClassName('overlay');
for (var i = 0; i < cusid_ele.length; ++i) {
    var item = cusid_ele[i];  
    item.style.zIndex = "100";
}
		
		  document.getElementById('not_preview_frame').style.transition = "all 0.5s"; 
	document.getElementById('preview_frame').style.opacity = "0%";
setTimeout(function(){	
	document.getElementById('not_preview_frame').style.transform = "translate(-250%, 0)";
	document.getElementById('preview_frame').style = "z-index:0;opacity:0%;width:100%;height:105%;transition: all 0.5s;transform:translate(0%,-87.5%);border-top:5px solid black";
setTimeout(function(){	document.getElementById('preview_frame').style.opacity = "100%";},1500);
document.getElementById('fullscreen_button').style.backgroundColor = "green";
document.getElementById('fullscreen_button').innerHTML = "Reset my workspace";
	isfullscreen = true;
},250);

		}

	}
	
};

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
