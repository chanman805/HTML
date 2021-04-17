//Name your lessons whatever you like! Just remember to "push" it at the end as well.
//There's no limit to the number of lessons you can have here.

//A template lesson is loaded in for you here. You can edit this if you like.
const Lesson_Template = {
	title: 'Example #1', //The name of the lesson.
	headers: '<meta></meta>', 
	css: `body, html {
background-color:black;
color:white;
}

h1 {
font-size:20px;
}

p {
font-size:16px;
}

`, //This will get auto-populated into the CSS box.
	body: `<h1>Hello, world! This is a 20 px header.<h1>
	
<img title = "This is a 250x250 px image." width = "250px" height = "250px" src = "https://upload.wikimedia.org/wikipedia/commons/9/99/BlackMarble_2016_rotating_globe_at_night_transparent.gif"></img>

<p>Paragraph fonts should be around 16 px, according to the latest web standards.</p>
<h2>WELCOME TO LESSON 1</h2>

<script>
var message = "You can also execute inline JS in your webpages using the script tags!";
var x = Math.random();
window.onclick = function(){
	alert(message);
alert('Here is a random number: '+x);
};

</script>
	
	
	
	`, //This will appear in the HTML/JS box.
name: 'New Assignment', //The assignment's name, in the top left of the screen.
	file: 'index.html', //The actual file name, when it's exported.
	template_color : '#FFFFFF', //The text color of the lesson icon.
	template_bg : '#da21fe', //The background color of the lesson icon.
    template_icon: "<p style = 'margin:0px'onclick = 'document.getElementById('preview').click();' >L1</p>", //Put text, an image tag, or a video tag here!
	saved: true
};


//This puts it into the import dropdown menu.
templates.push(Lesson_Template);
//If there are ANY ERRORS in this file, no templates will be loaded in.
