const template1 = { 
title: ``,
headers: '<meta></meta>', 
css: `

body, html {
background-color:lightgreen;
color:black;
font-family: 'Arial';
}
hr {
background-color:green;
color:black;
padding:1px;
border-radius:10px;
}

button {
padding:20px;
font-size:20px;
cursor:pointer;
border: 5px dashed lightgreen;
border-radius:20px;
}

button:hover {
transform:scale(1.05);
}

#date {
background-color:beige;
width:50%;
border-radius:20px;
}

#time {
background-color:orange;
width:50%;
border-radius:20px;

}

`, 
js: `
var intGo;

var displayDate = function(){
var d = new Date();
var day = d.getDate();
var month = d.getMonth() +1;
var year = d.getFullYear();

document.getElementById("date").innerHTML = "Today's date is " + month + "/"+day+"/"+year;

};

var displayTime = function(){
var d = new Date();
var hour = d.getHours();
var minute = d.getMinutes();
var second = d.getSeconds();
var end = "";

if (minute < 10){
minute = "0" + minute;
}

if (second < 10){
second = "0" + second;
}

if (hour > 12){ 

if (document.getElementById("24_hour_time").checked){
hour = hour;
end = "";
} else {
hour = hour -12;
end = "pm";
}

}else {

if (document.getElementById("24_hour_time").checked){
end = "";
} else {
end = "am";
}

}

document.getElementById("time").innerHTML = "The current time is "+ hour + ":" + minute + ":" + second + " "+end;

};

document.getElementById("auto_run").addEventListener('change', e => {

    if(e.target.checked){
displayTime();
        intGo = setInterval(displayTime,1000);
    } else {
clearInterval(intGo);
}
});

window.onerror = function(){
alert("Hey, something went wrong.");
};`,
body:`

<center>
<hr>
<h1>Date / Time Tool</h1>	
<hr>
<br>
<button style = "background-color:beige" onclick = "displayDate()" >What is today's date?</button>
<br>
<p id = "date" ></p>
<button style = "background-color:orange" onclick = "displayTime()" >What is today's time?</button>
<br>
<p id = "time" ></p>
<br><hr>
<h2>Options</h2>
<input id = "24_hour_time" type = "checkbox">Turn on 24-hour time</input>
<br>
<br>
<input id = "auto_run" type = "checkbox">Auto-run time function</input>
</center>
`, 
name: 'Date / Time Tool',
file: 'index.html', 
template_color : '#FFFFFF',
template_bg : 'lightgreen', 
 template_icon: "<img onclick = 'document.getElementById('preview').click();' title = 'Date / Time Tool'style = 'filter:invert(0%);margin:-5px;margin-left:-8px;margin-right:-8px'src = 'program_files/templates/loaded/images/date.png' width = '30px' height = '30px'></img>", //Put text, an image tag, or a video tag here!
saved: true
};
templates.push(template1);

const template2 = { 
title: ``,
headers: '<meta></meta>', 
css: `

body, html {
background-color:#0000ff20;
color:black;
font-family: "Courier New";
}
hr {
background-color:black;
color:black;
padding:1px;
border-radius:10px;
}

button {
font-family: "Courier New";
padding:20px;
font-size:20px;
cursor:pointer;
box-shadow: 5px 5px 5px black;
border-radius:200px;
}

button:hover {
transform:scale(1.05);
box-shadow: 10px 10px 10px black;
transition: all 0.2s steps(2);
}

#dimensions_o {
background-color:green;
width:50%;
}

#dimensions_i {
background-color:pink;
width:50%;

}



`, 
js: `
var r1_answer = Math.round(Math.random()*5);
var r2_answer = Math.round(Math.random()*5); 
var r3_answer = Math.round(Math.random()*5);

var score = 0;

var randomNumbers = function(){

var userInput = prompt("Can you guess what number I'm thinking of? Hint: You shouldn't guess above 5.");

var finalAnswer = parseInt(userInput);
if (finalAnswer === r1_answer){
alert("You won this round! You are awarded "+r1_answer + " points.");
score = score + r1_answer;
randomLetters();
} else {
alert("You were off by "+(r1_answer - finalAnswer+". Game over!"));
printResults();
}

};

var randomLetters = function(){

const alphabet = "aabcdefghijklmnopqrstuvwxyz";

if (r2_answer<1){
r2_answer = r2_answer +1;
}

const randomCharacter = alphabet[r2_answer];

userInput = prompt('Can you guess what lowercase letter I'+"'"+'m thinking of? Hint: anything past "f" is way off.');


if (userInput === randomCharacter){
alert("You won this round! You are awarded "+r2_answer + " points.");
score = score + r2_answer;
randomQuestion();
} else {
alert('The letter I was thinking of  was "' + randomCharacter+'". Game over!');
printResults();
}
};

var randomQuestion = function(){

var questions= ["There are fifty states in the U.S.", "0 is the only number that can't be represented in Roman Numerals.", "Brazil is larger than Russia.", "Texas is the largest U.S. state.", "Bats are an insect species."];


var answerBank = ["true", "true", "false", "false", "false"];

var userQuestion = questions[r3_answer];

alert('This is the final round. Please type "true" or "false" as your answer. Good luck!');

var userInput = prompt(userQuestion);

if (userInput === answerBank[r3_answer]){
alert("Congratulations, your answer was correct - and you've been awarded "+r3_answer+ " points. Your results will be printed onscreen.");
score = score + r3_answer;
} else {
alert("Oh no, and you were so close to winning too! Unfortunately, your answer was incorrect. Game over!");
printResults();
}
};

var printResults = function(){
document.getElementById("scorecard").innerHTML = "<b>Score: "+score+"</b>";
document.getElementById("results").style.display = "block";
};

var startGame = function(){
document.getElementById("playbutton").style.display = "none";
document.getElementById("instructions").style.display = "none";
randomNumbers();
};


`,
body:`

<center>
<br>
<hr>
<h1>The Dialog Boxes Game</h1>	
<hr>
<br>
<button id = "playbutton"style = "width:150px;height:150px;background-color:red;margin-bottom:50px;" onclick = "startGame()" >Play</button>
<div id = "instructions">
<h2>How do I play this game?</h2>
<p style = "width:60%">The rules are simple. Do what the popup dialog boxes tell you to do!</p>
</div>
<div style = "display:none" id = "results">
<h2>Your results</h2>
<p id = "scorecard" style = "background-color:#00ff00;width:50%"><b>Final score: 0</b></p>
<p style = "width:40%">Please reload the page to play again! I hope you had fun.</p>
<p></p>
</div>
</center>
	

`, 
name: 'The Dialog Boxes Game',
file: 'index.html', 
template_color : '#FFFFFF',
template_bg : '#0000ff20', 
 template_icon: "<img onclick = 'document.getElementById('preview').click();' title = 'The Dialog Boxes Game'style = 'filter:invert(0%);margin:-5px;margin-left:-8px;margin-right:-8px'src = 'program_files/templates/loaded/images/dialog.png' width = '30px' height = '30px'></img>", //Put text, an image tag, or a video tag here!

saved: true
};
templates.push(template2);

const template3 = { 
title: ``,
headers: '<meta></meta>', 
css: `
body, html {
background-color:lightblue;
color:black;
}
hr {
background-color:black;
color:black;
padding:1px;
border-radius:10px;
}

button {
padding:20px;
font-size:20px;
cursor:pointer;
}

button:hover {
transform:scale(1.05);
}

#dimensions_o {
background-color:green;
width:50%;
}

#dimensions_i {
background-color:pink;
width:50%;

}


`, 
js: `
var findInnerDimensions = function(){
var x = window.innerWidth;
var y = window.innerHeight;

document.getElementById("dimensions_i").innerHTML = "Your inner viewport dimensions: "+x+" x " +y+" pixels";

};

var findOuterDimensions = function(){
var a = window.outerWidth;
var b = window.outerHeight;

document.getElementById("dimensions_o").innerHTML = "Your outer viewport dimensions: "+a+" x " +b+" pixels";

};



`,
body:`
<center>
<hr>
<h1>Viewport Dimensions Tool</h1>	
<hr>
<br>
<button style = "background-color:pink" onclick = "findInnerDimensions()" >Find my screen's inner dimensions</button>
<br>
<p id = "dimensions_i" ></p>
<button style = "background-color:green" onclick = "findOuterDimensions()" >Find my screen's outer dimensions</button>
<br>
<p id = "dimensions_o" ></p>
<br><hr>
<h2>How do I use this tool?</h2>
<p style = "width:70%">Click on a button to find the inner or outer dimensions of your viewport. The returned value of the function will be printed directly below the button you click. This is a very helpful tool for developers, who want to see how large or how small their user's viewport is!</p>
</center>
	
`, 
name: 'Viewport Dimensions Tool',
file: 'vd_tool.html', 
template_color : 'black',
template_bg : 'lightblue', 
 template_icon: "<img onclick = 'document.getElementById('preview').click();' title = 'Viewport Dimensions Tool'style = 'filter:invert(0%);margin:-5px;margin-left:-8px;margin-right:-8px'src = 'program_files/templates/loaded/images/viewport.png' width = '30px' height = '30px'></img>", //Put text, an image tag, or a video tag here!

saved: true
};
templates.push(template3);


