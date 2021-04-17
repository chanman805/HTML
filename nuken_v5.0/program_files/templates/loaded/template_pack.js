
const blogger = {
	title: '', //The name of the lesson.
	headers: '<meta></meta>', 
	css: `body, html {
background-color:white;
background-size:100%;
background-repeat:no-repeat;
background-position:top;
color:black;
font-family:'Brush Script MT';
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
	<img title = "Site icon?" width = "45px" src = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Wikisp-logo-icon-white.svg/622px-Wikisp-logo-icon-white.svg.png" style = "float:left" ></img>
	This is my blog!
	</div>
	<img id = "preview_image" title = "This is a real place in Alaska, in the United States." width = "100%" height = "50%" src = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Parque_nacional_y_reserva_Denali%2C_Alaska%2C_Estados_Unidos%2C_2017-08-30%2C_DD_72.jpg/1600px-Parque_nacional_y_reserva_Denali%2C_Alaska%2C_Estados_Unidos%2C_2017-08-30%2C_DD_72.jpg"></img>
	</div class = "content" >
	<h1 id = "title" >It is very cold.</h1>
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
<img width = "39%" title = "A yawning bear. Sleep tight, bear!" style = "float:right;padding:0px;padding-top:15px;padding-right:0px;" src = "https://upload.wikimedia.org/wikipedia/commons/3/36/Grizzly_Denali_edit.jpg"></img>

<p class = "subtitle">Some rad photos for you to look at.</p>

<img width = "39%" title = "A cool little cabin. Perhaps it's Baby Bear's?" style = "float:right;padding:10px;padding-top:0px;padding-right:0px;" src = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Headquarters_of_Denali_National_Park_and_Preserve_%2826974559489%29.jpg/1599px-Headquarters_of_Denali_National_Park_and_Preserve_%2826974559489%29.jpg"></img>



	`, //This will appear in the HTML/JS box.
name: 'New Blog Page', //The assignment's name, in the top left of the screen.
	file: 'blog.html', //The actual file name, when it's exported.
	template_color : 'Transparent', //The text color of the lesson icon.
	template_bg : 'black', //The background color of the lesson icon.
    template_icon: "<img onclick = 'document.getElementById('preview').click();' title = 'Blogger'style = 'filter:invert(100%);margin:-5px;margin-left:-8px;margin-right:-8px'src = 'program_files/templates/loaded/images/blogger.png' width = '30px' ></img>", //Put text, an image tag, or a video tag here!
	saved: true
};


templates.push(blogger);

const landing = {
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
	<img title = "Site icon?" width = "45px" src = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Wikisp-logo-icon-white.svg/622px-Wikisp-logo-icon-white.svg.png" style = "float:left" ></img>
	Welcome to my site!
	</div>
	<img id = "preview_image" style = "padding-bottom:-10px;" title = "Next week: More terrible Dad Jokes." width = "100%" height = "50%" src = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Vincent_van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/1552px-Vincent_van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg"></img>
	</div class = "content" >
	<h1 id = "title" >Coming up this week: The Sun</h1>
	</div>
	<br>
	<center>
<img class = "tile"width = "39%" title = "A yawning bear. Sleep tight, bear!"  src = "https://upload.wikimedia.org/wikipedia/commons/3/36/Grizzly_Denali_edit.jpg"></img>
<img class = "tile"width = "39%" title = "A cool little cabin. Perhaps it's Baby Bear's?"  src = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Headquarters_of_Denali_National_Park_and_Preserve_%2826974559489%29.jpg/1599px-Headquarters_of_Denali_National_Park_and_Preserve_%2826974559489%29.jpg"></img>
<img class = "tile"width = "39%" title = "Always watching...always..."  src = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg/948px-Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg"></img>
</center>
<div class = "middlebar" >These are some cool photos, huh?</div>
<center>
<img class = "tile"width = "39%" title = "Always watching...always..."  src = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg/948px-Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg"></img>
<img class = "tile"width = "39%" title = "A cool little cabin. Perhaps it's Baby Bear's?"  src = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Headquarters_of_Denali_National_Park_and_Preserve_%2826974559489%29.jpg/1599px-Headquarters_of_Denali_National_Park_and_Preserve_%2826974559489%29.jpg"></img>
<img class = "tile"width = "39%" title = "A yawning bear. Sleep tight, bear!"  src = "https://upload.wikimedia.org/wikipedia/commons/3/36/Grizzly_Denali_edit.jpg"></img>

</center>

	`, //This will appear in the HTML/JS box.
name: 'New Home Page', //The assignment's name, in the top left of the screen.
	file: 'index.html', //The actual file name, when it's exported.
	template_color : 'Transparent', //The text color of the lesson icon.
	template_bg : 'black', //The background color of the lesson icon.
    template_icon: "<img onclick = 'document.getElementById('preview').click();' title = 'Landing Page'style = 'filter:invert(100%);margin:-5px;margin-left:-8px;margin-right:-8px'src = 'program_files/templates/loaded/images/landing_page.png' width = '30px' ></img>", //Put text, an image tag, or a video tag here!
	saved: true
};


templates.push(landing);

const album = {
	title: '', //The name of the lesson.
	headers: '<meta></meta>', 
	css: `body, html {
background-color:black;
background-image: linear-gradient(black, black, green, green);
background-size:100%;
background-repeat:no-repeat;
background-position:top;
color:white;
font-family:'Brush Script MT';
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
	 filter:hue-rotate(90deg);
	 width:90%;
	 height:30%;
 object-fit:cover;
padding:5px;
transition:all 1s;
 }
 .tile:hover {
	 cursor:pointer;
 transition: all 1s;
 	 transition-delay:0.5s;
 width:100%;
 height:75%;
 filter:hue-rotate(90deg) contrast(120%);
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
		Brett's Birthday
	</div>
	<br>
	<center>
<img class = "tile"width = "100%" title = "Brett was so excited to blow out his candles."  src = "https://upload.wikimedia.org/wikipedia/commons/3/36/Grizzly_Denali_edit.jpg"></img>
<br>
<img class = "tile"width = "100%" title = "Brett's house reminded me something out of a fairy tale."  src = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Headquarters_of_Denali_National_Park_and_Preserve_%2826974559489%29.jpg/1599px-Headquarters_of_Denali_National_Park_and_Preserve_%2826974559489%29.jpg"></img>
<br>
<img class = "tile"width = "100%" title = "Brett was so excited to take a bite of his cake until he realized that it was coconut..."  src = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg/948px-Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg"></img>
<br>
<img class = "tile"width = "100%" title = "Another picture of Brett's house. It's quite large on the inside!"  src = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Headquarters_of_Denali_National_Park_and_Preserve_%2826974559489%29.jpg/1599px-Headquarters_of_Denali_National_Park_and_Preserve_%2826974559489%29.jpg"></img>
<br>
<img class = "tile"width = "100%" title = "Brett was getting tired near the end of the party."  src = "https://upload.wikimedia.org/wikipedia/commons/3/36/Grizzly_Denali_edit.jpg"></img>
<br>
<img class = "tile"width = "100%" title = "Goodbye, everybody! Thank you for coming to my party."  src = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg/948px-Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg"></img>
</center>

	`, //This will appear in the HTML/JS box.
name: 'New Album Viewer', //The assignment's name, in the top left of the screen.
	file: 'album.html', //The actual file name, when it's exported.
	template_color : 'Transparent', //The text color of the lesson icon.
	template_bg : 'black', //The background color of the lesson icon.
    template_icon: "<img onclick = 'document.getElementById('preview').click();' title = 'Album Viewer'style = 'filter:invert(100%);margin:-5px;margin-left:-8px;margin-right:-8px'src = 'program_files/templates/loaded/images/album.png' width = '30px' height = '27px'></img>", //Put text, an image tag, or a video tag here!
	saved: true
};


templates.push(album);