
reloadstopper=false;
window.onbeforeunload = function() {
if (reloadstopper === false){   
   return "Be sure to save your work before you reload the page!";
   }
};
