
window.onbeforeunload = function() {
	window.location.replace("#");
if (reloadstopper === false){   
   return "Be sure to save your work before you reload the page!";
   }
};
