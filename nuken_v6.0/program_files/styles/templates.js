
function load_template (index) {
console.log('Template was loaded successfully.');
	  textbox = document.getElementById("textbox"),
    	cssbox = document.getElementById("cssbox"),
		jsbox = document.getElementById('jsbox');
    	titlebox = document.getElementById("titlebox"),
    	filebox = document.getElementById("filebox");
    	
    	titlebox.value = templates[index].name;
    	cssbox.innerHTML = templates[index].css;
    	textbox.innerHTML = templates[index].body;
        jsbox.value = "//Note: If your selected template doesn't include the JS parameter, then this field will read as 'undefined'.\n\n"+templates[index].js;
		filebox.value = templates[index].file;    	
}
			
function show_templates (id) {
console.log('Template list loaded successfully.');
	if(!templates_imported) {
		var i;
		document.getElementById(id).innerHTML = '';
		for(i = 0; i < templates.length; i++) {
		  var tmp = "<div class=\"inline-block\" onClick=\"load_template(" + i + "); preview_code ();\">"
			+ "<div class=\"dropdown_icon\" style=\""
			+ " color: " + templates[i]['template_color'] + ";"
			+ " background-color: " + templates[i]['template_bg'] + ";"
			+ " border: 0px solid " + templates[i]['template_color'] + ";"
			+ " border-top: 0px solid " + templates[i]['template_color'] + ";"
			+ "margin-top:-2.5px;margin-bottom:-2.5px"
			+ "\">"+templates[i]['template_icon']
			+ "</div>"
			+ "<a width = '100%' title=\"" + templates[i]['title'] + "\">" 
			+ templates[i]['title'] + "</a>" 
			+ "</div>";
			
			
			var editButtonHTML = document.createElement('div');
				editButtonHTML.className = 'dropdown_button inline-block';
				editButtonHTML.innerHTML = tmp;
				document.getElementById(id).appendChild(editButtonHTML);
		}
		templates_imported = true;
	}
}


var docs = new Array();
var active_index = 0;

var templates = new Array();
var templates_imported = false;

