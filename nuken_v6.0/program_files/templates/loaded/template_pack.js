const template1 = { 
title: ``,
headers: '<meta></meta>', 
css: `

body, html {
background-color:white;
color:black;
font-family:'Garamond';
overflow-y:scroll;
}

body {
overflow:hidden;
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


#right {
float:right;
width:40%;
margin:-20px;
}

#right img {
width:100%;
display:block;
}

#preview_image {
width:100%;
height:50%;
object-fit:cover;
}

#left {
float:left;
width:60%;
margin:20px;
font-size:1.5em;
}

#footer {
background-color:black;
color:white;
width:100%;
overflow:hidden;
text-align:left;
padding:20px;
font-size:35px;
}



`, 
js: `window.onclick = function(){
alert("You clicked on the page. Just so you know.");
};`,
body:`

<div class = "navbar">
	<img title = "Site icon?" width = "45px" src = "https://static.thenounproject.com/png/710544-200.png" style = "filter:invert(100%);float:left;" ></img>
	Insert title here...
	</div>
	<img id = "preview_image" title = "Hmm. The Eagles come to mind for some reason." width = "100%" height = "50%" src = "https://upload.wikimedia.org/wikipedia/commons/7/7d/Blue_to_purple_gradient_header.png"></img>
	</div class = "content" >
	<h1 id = "title" >Your cool tag line goes here.</h1>
	</div>

<div id = "left">
<b>Lorem ipsum dolor sit amet consectetur adipisicing elit.</b> Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
optio, eaque rerum! Provident similique accusantium nemo autem. Obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos 
sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
recusandae alias error harum maxime adipisci amet laborum. Perspiciatis 
minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit 
quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur 
fugiat, temporibus enim commodi iusto libero magni deleniti quod quam!
</div>
	

<div id = "right" >
<img  title = "Take a peek." src = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Breezeicons-actions-22-view-preview.svg/1024px-Breezeicons-actions-22-view-preview.svg.png"></img>

<img title = "Take a peek."  src = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Breezeicons-actions-22-view-preview.svg/1024px-Breezeicons-actions-22-view-preview.svg.png" style = "margin-top:-45px" ></img>

</div>

<div id = "footer" >This is just the beginning of your journey!</div>




	

`, 
name: 'Your Cool Page',
file: 'page.html', 
template_color : 'Transparent',
template_bg : 'lightblue', 
template_icon: '<img src = "program_files/templates/loaded/images/news.png" width = "30px" ></img>',
saved: true
};


const template2 = { 
title: ``,
headers: '<meta></meta>', 
css: `
body, html {
background-color:orange;
color:white;
font-family: "arial";
overflow:hidden;
overflow-y:auto;
}

h1 {
text-align:center;
padding:25px;
}

.widget {
background-color:black;
border:none;
padding:25px;
border-radius:10px;
font-size:25px;
color:white;
text-align:center;
width:60%;
display:block;
margin:25px;
cursor:pointer;
transition: all 1s;
font-weight:bolder;
}

#congrats {
opacity:0;
transition: all 1s;
transition-delay:0.5s;
}

.onward:hover {
transition: all 3s;
transform:scale(1.1);
}



`, 
js: `
var clicked = false;
var hovered = false;
var dragged = false;

var click_button = document.getElementsByClassName("widget")[0];

var hover_button = document.getElementsByClassName("widget")[1];

var drag_button = 
document.getElementsByClassName("widget")[2];

click_button.addEventListener("click",function(){
clicked = true;
click_button.style.backgroundColor = "blue";
click_button.style.color = "blue";
click_button.style.transform = "scale(1.01)";
setTimeout(function(){
click_button.innerHTML = "<i>You clicked the button!</i>";
click_button.style.color = "white";
checksum();
},750);

},false);



hover_button.addEventListener("mouseover",function(){
hovered = true;
hover_button.style.backgroundColor = "blue";
hover_button.style.color = "blue";
hover_button.style.transform = "scale(1.01)";
setTimeout(function(){
hover_button.innerHTML = "<i>You hovered over the button!</i>";
hover_button.style.color = "white";
checksum();
},750);

},false);


drag_button.addEventListener("drag",function(){
dragged = true;
drag_button.style.backgroundColor = "blue";
drag_button.style.color = "blue";
drag_button.style.transform = "scale(1.01)";
setTimeout(function(){
drag_button.innerHTML = "<i>You dragged the button!</i>";
drag_button.style.color = "white";
drag_button.style.userDrag = "none!important";
checksum();
},750);

},false);

var checksum = function(){
if (hovered && clicked && dragged){
document.getElementById("congrats").style.opacity = "100%";
}
};
`,
body:`
<h1>Welcome to nuken!</h1>
<center>
<button class = "widget" >Click me.</button>
<button class = "widget" >Hover over me.</button>

<button class = "widget" draggable = "true" >Drag me!</button>
<div id = "congrats" >
<h1>Congratulations!</h1>
<p style = "margin-top:-40px;margin-bottom:-10px">(You've done all that there is to do here.)</p>
<button class = "widget onward" ><i>What will you do next?!</i></button>
</div>
</center>

	
	
`, 
name: 'A Good Start',
file: 'index.html', 
template_color : '#FFFFFF',
template_bg : 'orange', 
template_icon: '<img src = "program_files/templates/loaded/images/start.png" width = "30px" ></img>',
saved: true
};
templates.push(template2);
templates.push(template1);


