
const blogger = {
	title: '', //The name of the lesson.
	headers: '<meta></meta>', 
	css: `body, html {
background-color:white;
background-size:100%;
background-repeat:no-repeat;
background-position:top;
color:black;
font-family:'Garamond';
}
.navbar {
background-color:gray;
color:white;
padding:10px;
text-align:center;
font-size:40px;
}
.content {

}
h1 {
font-size:30px;
font-family: 'Garamond';
color:white;
}
h2 {
font-size:15px;
}
#title {
	margin:10px;
margin-top:-50px;
}
.body {
padding:20px;
font-family: 'Garamond';
font-size:17px;
width:50%;
float:left;
}
 .subtitle {
 float:right;padding-right:50px;
 padding-top:0px;
 font-family:'Garamond';
 color:gray;
 }

`, //This will get auto-populated into the CSS box.
	body: `<div class = "navbar">
	<img title = "Site icon?" width = "45px" src = "https://static.thenounproject.com/png/710544-200.png" style = "filter:invert(100%);float:left" ></img>
	The Proper Pauper
	</div>
	<img id = "preview_image" title = "Hmm. The Eagles come to mind for some reason." width = "100%" height = "50%" src = "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"></img>
	</div class = "content" >
	<h1 id = "title" >Welcome to the big city!</h1>
	</div>
	<div class = "body"><b>Lorem ipsum dolor sit amet consectetur adipisicing elit.</b> Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos 
sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
recusandae alias error harum maxime adipisci amet laborum. Perspiciatis 
minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit 
quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur 
fugiat, temporibus enim commodi iusto libero magni deleniti quod quam 
consequuntur! Commodi minima excepturi repudiandae velit hic maxime
doloremque. Quaerat provident commodi consectetur veniam similique ad 
earum omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo 
fugiat, dolorum eligendi quam cupiditate excepturi mollitia maiores labore 
suscipit quas? Nulla, placeat. Voluptatem quaerat non architecto ab laudantium
modi minima sunt esse temporibus sint culpa, recusandae aliquam numquam 
totam ratione voluptas quod exercitationem fuga. Possimus quis earum veniam 
quasi aliquam eligendi, placeat qui corporis!
</div>
<img width = "39%" title = "Take a peek." style = "float:right;padding:0px;padding-top:15px;padding-right:0px;" src = "https://images.unsplash.com/photo-1507090960745-b32f65d3113a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"></img>

<p class = "subtitle">Life in the big city looks like this.</p>

<img width = "39%" title = "Some tall buildings!" style = "float:right;padding:10px;padding-top:0px;padding-right:0px;" src = "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"></img>



	`, //This will appear in the HTML/JS box.
name: 'New Blog Page', //The assignment's name, in the top left of the screen.
	file: 'blog.html', //The actual file name, when it's exported.
	template_color : 'Transparent', //The text color of the lesson icon.
	template_bg : 'black', //The background color of the lesson icon.
    template_icon: "<img onclick = 'document.getElementById('preview').click();' title = 'Blogger'style = 'filter:invert(100%);margin:-5px;margin-left:-8px;margin-right:-8px'src = 'program_files/templates/loaded/images/blogger.png' width = '30px' ></img>", //Put text, an image tag, or a video tag here!
	js:
`var congrats = function(){
	
alert("Congratulations! You're our 100th reader. You win the grand prize!");

};

window.onscroll = function(ev) {
	
    if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) {

      setTimeout(congrats,500);
    }
};
`,
	saved: true
};


templates.push(blogger);

const landing = {
	title: '', //The name of the lesson.
	headers: '<meta></meta>', 
	css: `body, html {
background-color:black;
background-size:100%;
background-repeat:no-repeat;
background-position:top;
color:black;
font-family:'Garamond';
}

#preview_image {
transition: all 1s;
}

.navbar {
background-color:black;
color:white;
padding:10px;
text-align:center;
font-size:40px;
}

h1 {
font-size:30px;
font-family: 'Garamond';
color:white;
}

#title {
	margin:10px;
margin-top:-50px;
}

 .tile {
	 width:30%;
	 height:30%;
 object-fit:cover;
 padding:10px;
  padding-bottom:10px;
  padding-top:10px;
 }
 .tile:hover {
	 cursor:pointer;
 transition: all 0.5s;
 transform:scale(1.05);
 filter:contrast(120%);
 }
 .middlebar {
 background-color:black;
color:white;
padding:10px;
text-align:center;
font-size:20px;
 }

`, //This will get auto-populated into the CSS box.
	body: `<div class = "navbar">
<img title = "Site icon?" width = "45px" src = "https://static.thenounproject.com/png/1050-200.png" style = "float:left;filter:invert(100%)" ></img>
The Big Idea
</div>]

<img id = "preview_image" style = "padding-bottom:-10px;" title = "That's right. EVERYTHING." width = "100%" height = "50%" src = "https://images.unsplash.com/photo-1600132806608-231446b2e7af?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"></img>

</div class = "content" >
<h1 id = "title" >What do we do? Everything.</h1>
</div>

<br>

<center>
<img class = "tile"width = "39%" title = "This is a photo."  src = "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2389&q=80"></img>

<img class = "tile"width = "39%" title = "This is also a photo."  src = "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2552&q=80"></img>

<img class = "tile"width = "39%" title = "You can add these little blurbs to your own images!"  src = "https://images.unsplash.com/photo-1469598614039-ccfeb0a21111?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80"></img>

</center>

<div class = "middlebar" >Does this answer your many questions?</div>

<center>

<img class = "tile"width = "39%" title = "Try using the <title> tag."  src = "https://images.unsplash.com/photo-1597592201324-d8d1e13f4f62?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80"></img>

<img class = "tile"width = "39%" title = "Making nuken v6.0 was definitely a lot of fun!"  src = "https://images.unsplash.com/photo-1524397057410-1e775ed476f3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"></img>

<img class = "tile"width = "39%" title = "Remember me?"  src = "https://upload.wikimedia.org/wikipedia/commons/3/36/Grizzly_Denali_edit.jpg"></img>

</center>

	`, //This will appear in the HTML/JS box.
name: 'New Home Page', //The assignment's name, in the top left of the screen.
	file: 'index.html', //The actual file name, when it's exported.
	template_color : 'Transparent', //The text color of the lesson icon.
	template_bg : 'black', //The background color of the lesson icon.
    template_icon: "<img onclick = 'document.getElementById('preview').click();' title = 'Landing Page'style = 'filter:invert(100%);margin:-5px;margin-left:-8px;margin-right:-8px'src = 'program_files/templates/loaded/images/landing_page.png' width = '30px' ></img>", //Put text, an image tag, or a video tag here!
	js: 
`var x = 24;
var blurb = "This is a string!";

window.onclick = function(){

x = "The window has been clicked!";		
alert(x);

};
	`,
	saved: true
};


templates.push(landing);

const album = {
	title: '', //The name of the lesson.
	headers: '<meta></meta>', 
	css: `body, html {
background-color:black;
background-image: linear-gradient(black, black, #34014a, purple);
background-size:100%;
background-repeat:no-repeat;
background-position:top;
color:white;
font-family:'Georgia';
overflow-x:hidden;
}
.navbar {
background-color:black;
color:white;
padding:15px;
text-align:center;
font-size:30px;

}

h1 {
font-size:30px;
font-family: 'Garamond';
color:white;
}
 .tile {
	 filter:hue-rotate(180deg);
	 width:90%;
	 height:30%;
 object-fit:cover;
padding:5px;
transition:all 1s;
 }
 .tile:hover {
	 cursor:pointer;
 transition: all 1s, transform 1s;
 	 transition-delay:0.5s;
 width:85%;
 height:85%;
 filter:hue-rotate(0deg) contrast(120%);
 transform:rotate(360deg);
 }
 .middlebar {
 background-color:black;
color:white;
padding:10px;
text-align:center;
font-size:20px;
 }

`, //This will get auto-populated into the CSS box.
	body: `<div class = "navbar">
		Brett's 2nd Birthday 
	</div>
	<br>
	<center>
<img class = "tile"width = "100%" title = "Brett was looking forward to his second birthday!"  src = "https://upload.wikimedia.org/wikipedia/commons/3/36/Grizzly_Denali_edit.jpg"></img>
<br>
<img class = "tile"width = "100%" title = "Brett's house was decorated so nicely."  src = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Headquarters_of_Denali_National_Park_and_Preserve_%2826974559489%29.jpg/1599px-Headquarters_of_Denali_National_Park_and_Preserve_%2826974559489%29.jpg"></img>
<br>
<img class = "tile"width = "100%" title = "Brett was so excited to take a bite of his cake, until he realized that it was coconut once again..."  src = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg/948px-Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg"></img>
<br>
<img class = "tile"width = "100%" title = "Another picture of Brett's house. I just can't get enough of it!"  src = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Headquarters_of_Denali_National_Park_and_Preserve_%2826974559489%29.jpg/1599px-Headquarters_of_Denali_National_Park_and_Preserve_%2826974559489%29.jpg"></img>
<br>
<img class = "tile"width = "100%" title = "It was almost Brett's nap time."  src = "https://upload.wikimedia.org/wikipedia/commons/3/36/Grizzly_Denali_edit.jpg"></img>
<br>
<img class = "tile"width = "100%" title = "Thanks, everybody! My second birthday party was a blast."  src = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg/948px-Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg"></img>
</center>

	`, //This will appear in the HTML/JS box.
name: 'New Album Viewer', //The assignment's name, in the top left of the screen.
	file: 'album.html', //The actual file name, when it's exported.
	template_color : 'Transparent', //The text color of the lesson icon.
	template_bg : 'black', //The background color of the lesson icon.
    template_icon: "<img onclick = 'document.getElementById('preview').click();' title = 'Album Viewer'style = 'filter:invert(100%);margin:-5px;margin-left:-8px;margin-right:-8px'src = 'program_files/templates/loaded/images/album.png' width = '30px' height = '27px'></img>", //Put text, an image tag, or a video tag here!
	js: 
`
window.onclick = function(){
	
	alert('Hover around the images for some cool effects! Brett hopes you enjoy.');

};
`,
	saved: true
};


templates.push(album);