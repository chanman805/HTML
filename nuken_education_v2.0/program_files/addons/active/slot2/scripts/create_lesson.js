var reset_button = function(){
document.getElementById('create').innerHTML = "<img title = 'Download your lesson?' src = 'images/arrow.gif' width = '50px'></img>";
document.getElementById('create').style.transition = 'all 1.5s, transform 0.5s';
document.getElementById('create').style.transform = "scaleX(-1)";
document.getElementById('create').style.opacity = "100%";
};

var change_button = function(){
	document.getElementById('create').style = "background-color:Transparent;color:black;margin:-20px;padding:0px;";
	document.getElementById('create').style.transform = "scaleX(1)";
document.getElementById('create').innerHTML = "<img title = 'Back to editing?' src = 'images/arrow.gif' width = '50px'></img>";
};

function download(filename, text) {
    var pom = document.createElement('a');
    pom.setAttribute('href', 'data:text/js;charset=utf-8,' + encodeURIComponent(text));
    pom.setAttribute('download', filename);

    if (document.createEvent) {
        var event = document.createEvent('MouseEvents');
        event.initEvent('click', true, true);
        pom.dispatchEvent(event);
    }
    else {
        pom.click();
    }
}


var lesson_name = document.getElementById("lesson_name");
var css = document.getElementById('css');
var html = document.getElementById('html');
var js = document.getElementById('js');
var output_box = document.getElementById('output_box');
var download_button = document.getElementById('download');

var created = false;
var all_disappear = function(){
	lesson_name.style.opacity = "0%";
css.style.opacity = "0%";
html.style.opacity = "0%";
js.style.opacity = "0%";
lesson_name.style.height = "0px"
css.style.height= "0px";
html.style.height= "0px";
js.style.height= "0px";
lesson_name.style.margin = "-10px"
css.style.margin= "-10px";
html.style.margin= "-10px";
js.style.margin= "-10px";
};

var all_reappear = function(){
	document.getElementById('create').style.margin = "2px";
document.getElementById('create').style.marginTop = "-10px";
lesson_name.style.height = "10%"
css.style.height= "20%";
html.style.height= "20%";
js.style.height= "20%";
lesson_name.style.margin = "0px"
css.style.margin= "0px";
html.style.margin= "0px";
js.style.margin= "0px";
lesson_name.style.marginBottom = "7px"
css.style.marginBottom= "7px";
html.style.marginBottom= "7px";
js.style.marginBottom= "7px";
};

var outputbox_flyin = function(){
	output_box.style.transition = "3s";
output_box.style.opacity = "100%";
document.getElementById('create').style.opacity = "0%";
setTimeout(change_button,1000);
};

var outputbox_flyout = function(){
	output_box.value = "";
	output_box.style.transition = "0.5s";
output_box.style.opacity = "0%";
document.getElementById('create').style.opacity = "0%";
document.getElementById('create').style.marginTop = "20px";
reset_button();
};

var tick = '`';
var create_lesson = function(){
	if (created === false){
		download_button.style.display = "inline-block";
		output_box.style.display = "inline-block";
		
var output = `const template = { 
title: `+tick+lesson_name.value+tick+`,
headers: '<meta></meta>', 
css: `+tick+css.value+tick+`, 
jss: `+tick+js.value+tick+`,
body:`+tick+html.value+tick+`, 
name: '`+lesson_name.value+`',
file: 'index.html', 
template_color : '#FFFFFF',
template_bg : '#da21fe', 
template_icon: 'TM',
saved: true
};
templates.push(template);
`;



all_disappear();
outputbox_flyin();
output_box.value = output;
created = true;
	} else {
setTimeout(all_reappear,250);
lesson_name.style.opacity = "100%";
css.style.opacity = "100%";
html.style.opacity = "100%";
js.style.opacity = "100%";
outputbox_flyout();
	download_button.style.display = "none";
		output_box.style.display = "none";

created = false;
	}
};

var download_template = function(){
download('lessons.js', output_box.value);
};