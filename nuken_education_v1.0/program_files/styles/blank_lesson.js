const blank_lesson = {
	title: '', //The name of the lesson.
	headers: '<meta></meta>', 
	css: `body, html {
background-color:black;
color:white;
}
`, //This will get auto-populated into the CSS box.
	body: `<h1>Welcome to nuken!<h1>`, //This will appear in the HTML/JS box.
name: 'New Assignment', //The assignment's name, in the top left of the screen.
	file: 'index.html', //The actual file name, when it's exported.
	template_color : '#FFFFFF', //The text color of the lesson icon.
	template_bg : '#FFFFFF00', //The background color of the lesson icon.
    template_icon: "<img onclick = 'trigger()'title = 'Create a new, blank project.'style = 'filter:invert(0%);margin:-5px;margin-left:-8px;margin-right:-8px'src = 'program_files/images/new.gif' width = '25px' ></img>", //Put text, an image, or a video here!
	saved: true
};

var trigger = function(){
window.location.replace('#popup6');
};

templates.push(blank_lesson);