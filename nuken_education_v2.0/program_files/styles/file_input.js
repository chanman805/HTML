

function init(){
console.log('Now accepting file input.');
  document.getElementById('fileInput').addEventListener('change', handleFileSelect, false);
}

function handleFileSelect(event){
  const reader = new FileReader()
  reader.onload = handleFileLoad;
  reader.readAsText(event.target.files[0])
}

function handleFileLoad(event){

var str = event.target.result;
if (str.includes("stylesheet")&&str.includes("<link")){
window.location.replace('#incorrectformatting');
console.log('Imported project contained incorrect CSS formatting.');
} else{
if (str.includes("<body>") && str.includes("</body>")){
window.location.replace("#popup7");
console.log('Imported project HTML successfully.');
document.getElementById('textbox').value = str.split('<body>').pop().split('</body>')[0];
document.getElementById('filebox').value = "index_v2.html"
document.getElementById('playbutton').click();
document.getElementById('preview').click();
document.getElementById('preview').click();

if (str.includes("<style>") && str.includes("</style>")){
document.getElementById('cssbox').value =  str.split('<style>').pop().split('</style>')[0];
console.log('Imported project CSS successfully.');
} else {
console.log('Executed Queen easter egg!');
document.getElementById('cssbox').value = `Is this the real life?
Is this just fantasy?
Caught in a landslide
No escape from reality
Open your eyes
Look up to the skies and see
I'm just a poor boy
I need no sympathy
Because I'm easy come, easy go
Little high, little low
Any way the wind blows doesn't really matter to me, to me
Mama, just killed a man
Put a gun against his head
Pulled my trigger, now he's dead
Mama, life had just begun
But now I've gone and thrown it all away
Mama, ooh
Didn't mean to make you cry
If I'm not back again this time tomorrow
Carry on, carry on
As if nothing really matters
Too late, my time has come
Sends shivers down my spine
Body's aching all the time
Goodbye everybody, I've got to go
Gotta leave you all behind and face the truth
Mama, ooh (any way the wind blows)
I don't wanna die
I sometimes wish I'd never been born at all
I see a little silhouetto of a man
Scaramouche, Scaramouche, will you do the Fandango?
Thunderbolt and lightning very very frightening me
Gallileo, Gallileo
Gallileo, Gallileo
Gallileo Figaro, magnifico
I'm just a poor boy, nobody loves me
He's just a poor boy from a poor family
Spare him his life from this monstrosity
Easy come easy go, will you let me go?
Bismillah! No, we will not let you go (let him go)
Bismillah! We will not let you go (let him go)
Bismillah! We will not let you go (let me go)
Will not let you go (let me go)
Never, never, never, never let me go
No, no, no, no, no, no, no
Oh, mama mia, mama mia
Mama mia, let me go
Beelzebub has a devil put aside for me
For me
For me
So you think you can stone me and spit in my eye?
So you think you can love me and leave me to die?
Oh, baby
Can't do this to me, baby
Just gotta get out, just gotta get right outta here
Nothing really matters
Anyone can see
Nothing really matters
Nothing really matters to me
Any way the wind blows
`;
window.location.replace("#nocssfound");
console.log('Imported project does not contain any CSS.');
}

document.getElementById('preview').click();
if (str.includes("<title>") && str.includes("</title>")){
console.log('Imported project Title recovered successfully.');
document.getElementById('titlebox').value = str.split('<title>').pop().split('</title>')[0]+" (Recovered)";

} else {
document.getElementById('titlebox').value = "Imported File (No title)";
console.log('Imported project has no title.');
}
if (str.includes("<script>") && str.includes("</scr"+"ipt>")){
console.log('Imported project JS successfully.');
document.getElementById('jsbox').value = str.split('<script>').pop().split('</scr'+'ipt>')[0];
} else {
document.getElementById('jsbox').value = "//No JS found";
window.location.replace("#nojsfound");
console.log('Imported project has no JS.');
}
document.getElementById('preview').click();
} else {
window.location.replace("#popup8");
console.log('Failed to import project.');
}
}
}
  