dragElement(document.getElementById("mydiv"));
dragElement(document.getElementById("mydiv2"));
dragElement(document.getElementById("mydiv3"));


function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

var pin_addon1 = function(){
	window.location.replace('#');
		document.getElementById('addon1_widget').style.opacity = "100%"
document.getElementById('addon1_widget').style.display = "inline-block";
};

var fadeout_addon1 = function(){
	document.getElementById('addon1_widget').style.transition = "all 0.25s"
	document.getElementById('addon1_widget').style.opacity = "0%"
	setTimeout(finalfade1,500);
};
var finalfade1 = function(){
document.getElementById('addon1_widget').style.display = "none";
};

var pin_addon2 = function(){
	window.location.replace('#');
		document.getElementById('addon2_widget').style.opacity = "100%"
document.getElementById('addon2_widget').style.display = "inline-block";
};

var fadeout_addon2 = function(){
	document.getElementById('addon2_widget').style.transition = "all 0.25s"
	document.getElementById('addon2_widget').style.opacity = "0%"
	setTimeout(finalfade2,500);
};
var finalfade2 = function(){
document.getElementById('addon2_widget').style.display = "none";
};

var pin_addon3 = function(){
	window.location.replace('#');
		document.getElementById('addon3_widget').style.opacity = "100%"
document.getElementById('addon3_widget').style.display = "inline-block";
};

var fadeout_addon3 = function(){
	document.getElementById('addon3_widget').style.transition = "all 0.25s"
	document.getElementById('addon3_widget').style.opacity = "0%"
	setTimeout(finalfade3,500);
};
var finalfade3 = function(){
document.getElementById('addon3_widget').style.display = "none";
};

var grab = function(element){
element.style.cursor = "grabbing";
};


var letgo= function(element){
element.style.cursor = "grab";
};








