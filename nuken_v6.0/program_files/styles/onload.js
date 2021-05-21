var fadein_nuken = function(){
console.log('Welcome to nuken!');
preload.style.display = "none";
literally_everything_else.style.transition = "all 0.5s";
literally_everything_else.style.opacity = "100%";

};

var welcome_user = function(){
preload.style.transition = "all 0.5s";
preload.style.opacity = "0%";
setTimeout(fadein_nuken,500);
};
