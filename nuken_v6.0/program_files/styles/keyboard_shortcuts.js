
document.addEventListener("keydown", function(e) {
  if ((window.navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)  && e.keyCode == 83) {
    e.preventDefault();
    document.getElementById('create').click();
  }
  
  
   if ((window.navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)  && e.keyCode == 80) {
    e.preventDefault();
    document.getElementById('preview').click();
  }
  
  
  if ((window.navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)  && e.keyCode == 32) {
    e.preventDefault();
	if (document.getElementById('checker_mccheckerson').checked){
    document.getElementById('checker_mccheckerson').checked = false;
	} else {
	document.getElementById('checker_mccheckerson').checked = true;
	}
  }
  }, false);