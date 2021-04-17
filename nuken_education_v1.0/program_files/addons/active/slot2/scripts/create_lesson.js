var lesson_name = document.getElementById("lesson_name");
var css = document.getElementById('css');
var html = document.getElementById('html');
var output_box = document.getElementById('output_box');
var hint_text = document.getElementById("hint_text");

var created = false;

var create_lesson = function(){
	if (created === false){
var output = `const lesson = {
title: "`+lesson_name.value+`",
headers: '<meta></meta>', 
css: "`+css.value+`", 
body:"`+html.value+`", 
name: '`+lesson_name.value+`',
file: 'index.html', 
template_color : '#FFFFFF',
template_bg : '#da21fe', 
template_icon: "LS",
saved: true
};
templates.push(lesson);
`;
lesson_name.style.display = "none";
css.style.display = "none";
html.style.display = "none";
output_box.style.display = "inline-block";
output_box.value = output;
created = true;
hint_text.style.display = "inline-block";
document.getElementById('create').innerHTML = "Back to editing?";
	} else {
	lesson_name.style.display = "inline-block";
css.style.display = "inline-block";
html.style.display = "inline-block";
output_box.style.display = "none";
output_box.value = output;
hint_text.style.display = "none";
document.getElementById('create').innerHTML = "Create my lesson!";
created = false;
	}
};