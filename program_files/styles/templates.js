const hello_world_doc = {
	title: '',
	name: "",
	headers: '<meta></meta>',
	css: 'body {\n \tbackground-color: #CCC;\n \tmargin: 0px;\n }\nh1 {\n \tbackground-color: #333;\n \tcolor: #FFF;\n \tpadding: 30px;\n \ttext-align: center;\n }',
	body: '<h1>Hello World</h1>',
	file: 'index.html',
	template_color : '#333',
	template_bg : 'black',
	 template_icon: "<img onclick = 'document.getElementById('preview').click();' title = 'Blogger'style = 'filter:invert(0%);margin:-5px;margin-left:-8px;margin-right:-8px'src = 'http://nuken.digitalartathome.com/program_files/images/logo.png' width = '30px' ></img>",
	saved: true
};
templates.push(hello_world_doc);

const blogger = {
	title: '', //The name of the lesson.
	headers: '<meta></meta>', 
	css: `
	@import url('https://fonts.googleapis.com/css2?family=EB+Garamond&family=Nanum+Brush+Script&display=swap');
	body, html {
background-color:white;
background-size:100%;
background-repeat:no-repeat;
background-position:top;
color:black;
font-family:'Nanum Brush Script', cursive;
}
.navbar {
background-color:gray;
color:white;
padding:10px;
text-align:center;
font-size:30px;
}
.content {

}
h1 {
font-size:30px;
font-family:  'EB Garamond', serif;
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
font-family:  'EB Garamond', serif;
font-size:17px;
width:90%;
}
 .subtitle {
padding-right:50px;
 padding-top:0px;
 font-family: 'EB Garamond', serif;
 color:gray;
 }

`, //This will get auto-populated into the CSS box.
	body: `<div class = "navbar">
	This is my blog!
	</div>
	<img id = "preview_image" title = "This is a real place in Alaska, in the United States." width = "100%" height = "30%" src = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Parque_nacional_y_reserva_Denali%2C_Alaska%2C_Estados_Unidos%2C_2017-08-30%2C_DD_72.jpg/1600px-Parque_nacional_y_reserva_Denali%2C_Alaska%2C_Estados_Unidos%2C_2017-08-30%2C_DD_72.jpg"></img>
	</div class = "content" >
	<h1 id = "title" >It is very cold.</h1>
	</div>
	<div class = "body"><b>Lorem ipsum dolor sit amet consectetur adipisicing elit.</b> Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
tenetur error, harum nesciunt ipsum debitis quas aliquid. <br><br>
<img width = "110%!important;" title = "A yawning bear. Sleep tight, bear!"  style = "margin-left:-6%!important"src = "https://upload.wikimedia.org/wikipedia/commons/3/36/Grizzly_Denali_edit.jpg"></img>
<br>
<br>
Reprehenderit, quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos 
sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
recusandae alias error harum maxime adipisci amet laborum. Perspiciatis 
minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit 
quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur 
fugiat, temporibus enim commodi iusto libero magni deleniti quod quam 
consequuntur! Commodi minima excepturi repudiandae velit hic maxime
doloremque. Possimus quis earum veniam 
quasi aliquam eligendi, placeat qui corporis!
</div>

<img width = "100%" title = "A cool little cabin. Perhaps it's Baby Bear's?" src = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Headquarters_of_Denali_National_Park_and_Preserve_%2826974559489%29.jpg/1599px-Headquarters_of_Denali_National_Park_and_Preserve_%2826974559489%29.jpg"></img>
<br><br>


	`, //This will appear in the HTML/JS box.
name: 'New Blog Page', //The assignment's name, in the top left of the screen.
	file: 'blog.html', //The actual file name, when it's exported.
	template_color : 'Transparent', //The text color of the lesson icon.
	template_bg : '#575757', //The background color of the lesson icon.
    template_icon: "<img onclick = 'document.getElementById('preview').click();' title = 'Blogger'style = 'filter:invert(100%);margin:-5px;margin-left:-8px;margin-right:-8px'src = 'program_files/styles/images/blogger.png' width = '30px' ></img>", //Put text, an image tag, or a video tag here!
	saved: true
};


templates.push(blogger);

const landing = {
	title: '', //The name of the lesson.
	headers: '<meta></meta>', 
	css: `
	@import url('https://fonts.googleapis.com/css2?family=EB+Garamond&family=Nanum+Brush+Script&display=swap');
	body, html {
background-color:black;
background-size:100%;
background-repeat:no-repeat;
background-position:top;
color:black;
font-family: 'EB Garamond', serif;
}
.navbar {
background-color:black;
color:white;
padding:10px;
text-align:center;
font-size:30px;
}

h1 {
font-size:30px;
font-family:  'EB Garamond', serif;
color:white;
}

#title {
	font-size:20px;
	margin:10px;
margin-top:-50px;
}

 .tile, .tile_bottom {
	 width:30%;
	 height:15%;
 object-fit:cover;
  padding-bottom:10px;
  padding-top:10px;
 }
 
 .tile_bottom{
 padding-bottom:0px;
 padding-top:0px;
 }
 
 .tile:hover .tile_bottom:hover {
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
		Welcome to my site!
	</div>
	<img id = "preview_image" style = "padding-bottom:-10px;" title = "Next week: More terrible Dad Jokes." width = "100%" height = "30%" src = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Vincent_van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/1552px-Vincent_van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg"></img>
	<br>
	<center>
<img class = "tile"width = "39%" title = "A yawning bear. Sleep tight, bear!"  src = "https://upload.wikimedia.org/wikipedia/commons/3/36/Grizzly_Denali_edit.jpg"></img>
<img class = "tile"width = "39%" title = "A cool little cabin. Perhaps it's Baby Bear's?"  src = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Headquarters_of_Denali_National_Park_and_Preserve_%2826974559489%29.jpg/1599px-Headquarters_of_Denali_National_Park_and_Preserve_%2826974559489%29.jpg"></img>
<img class = "tile"width = "39%" title = "Always watching...always..."  src = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg/948px-Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg"></img>
</center>
<div class = "middlebar" >These are some cool photos, huh?</div>
<br>
<center>
<img class = "tile_bottom"width = "39%" title = "Always watching...always..."  src = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg/948px-Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg"></img>
<img class = "tile_bottom"width = "39%" title = "A cool little cabin. Perhaps it's Baby Bear's?"  src = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Headquarters_of_Denali_National_Park_and_Preserve_%2826974559489%29.jpg/1599px-Headquarters_of_Denali_National_Park_and_Preserve_%2826974559489%29.jpg"></img>
<img class = "tile_bottom"width = "39%" title = "A yawning bear. Sleep tight, bear!"  src = "https://upload.wikimedia.org/wikipedia/commons/3/36/Grizzly_Denali_edit.jpg"></img>
<img class = "tile_bottom"width = "39%" title = "A cool little cabin. Perhaps it's Baby Bear's?"  src = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Headquarters_of_Denali_National_Park_and_Preserve_%2826974559489%29.jpg/1599px-Headquarters_of_Denali_National_Park_and_Preserve_%2826974559489%29.jpg"></img>
<img class = "tile_bottom"width = "39%" title = "A yawning bear. Sleep tight, bear!"  src = "https://upload.wikimedia.org/wikipedia/commons/3/36/Grizzly_Denali_edit.jpg"></img>
<img class = "tile_bottom"width = "39%" title = "Always watching...always..."  src = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg/948px-Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg"></img>

</center>

	`, //This will appear in the HTML/JS box.
name: 'New Home Page', //The assignment's name, in the top left of the screen.
	file: 'index.html', //The actual file name, when it's exported.
	template_color : 'Transparent', //The text color of the lesson icon.
	template_bg : 'black', //The background color of the lesson icon.
    template_icon: "<img onclick = 'document.getElementById('preview').click();' title = 'Landing Page'style = 'filter:invert(100%);margin:-5px;margin-left:-8px;margin-right:-8px'src = 'program_files/styles/images/landing_page.png' width = '30px' ></img>", //Put text, an image tag, or a video tag here!
	saved: true
};


templates.push(landing);

const album = {
	title: '', //The name of the lesson.
	headers: '<meta></meta>', 
	css: `
	@import url('https://fonts.googleapis.com/css2?family=EB+Garamond&family=Nanum+Brush+Script&display=swap');
	body, html {
background-color:black;
background-image: linear-gradient(black, black, green, green);
background-size:100%;
background-repeat:no-repeat;
background-position:top;
color:white;
font-family:'Nanum Brush Script', cursive;
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
font-family:  'EB Garamond', serif;
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
	template_bg : '#0f5722', //The background color of the lesson icon.
    template_icon: "<img onclick = 'document.getElementById('preview').click();' title = 'Album Viewer'style = 'filter:invert(100%);margin:-5px;margin-left:-8px;margin-right:-8px'src = 'program_files/styles/images/album.png' width = '30px' height = '27px'></img>", //Put text, an image tag, or a video tag here!
	saved: true
};


templates.push(album);