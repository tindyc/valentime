

//Facebook SDK JS

(function(d, s, id) {
	var js, fjs = d.getElementsByTagName(s)[0];
	if (d.getElementById(id)) return;
	js = d.createElement(s); js.id = id;
	js.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0";
	fjs.parentNode.insertBefore(js, fjs);
	}(document, 'script', 'facebook-jssdk'));



//Flip cards code

const cards = document.querySelectorAll(".cards__single");

function flipCard() {
  this.classList.toggle("flip");
}
cards.forEach((card) => card.addEventListener("click", flipCard));



//Hearts on click code

let click = document.getElementById("on-off");

click.addEventListener("click", function(){
	if(click.textContent === "On"){
        click.textContent = "Off";
		} else {
        click.textContent = "On";
    }
});

document.onmousedown = function(e) {
	if (click.textContent === "On"){
		down = true;
		event = e;
}};

document.ontouchstart = function(e) {
	if (click.textContent === "On"){
	    down = true;
	    event = e.touches[0];
}};

const brd = document.createElement("DIV");
document.body.insertBefore(brd, document.getElementById("heart"));

const duration = 3000;
const speed = 0.5;
const cursorXOffset = 0;
const cursorYOffset = -5;

let hearts = [];
		
function generateHeart(x, y, xBound, xStart, scale)
{
	let heart = document.createElement("DIV");
	heart.setAttribute('class', 'heart');
	brd.appendChild(heart);
	heart.time = duration;
	heart.x = x;
	heart.y = y;
	heart.bound = xBound;
	heart.direction = xStart;
	heart.style.left = heart.x + "px";
	heart.style.top = heart.y + "px";
	heart.scale = scale;
	heart.style.transform = "scale(" + scale + "," + scale + ")";
	if(hearts == null)
		hearts = [];
	hearts.push(heart);
	return heart;
}

let down = false;
let event = null;

document.onmouseup = function(e) {
	down = false;
};

document.onmousemove = function(e) {
	event = e;
};

document.ontouchend = function(e) {
	down = false;
};

document.ontouchmove = function(e) {
	event = e.touches[0];
};

let before = Date.now();
const id = setInterval(frame, 5);
const gr = setInterval(check, 100);

function frame()
{
	let current = Date.now();
	let deltaTime = current - before;
	before = current;
	for(let i in hearts)
	{
		let heart = hearts[i];
		heart.time -= deltaTime;
		if(heart.time > 0)
		{
			heart.y -= speed;
			heart.style.top = heart.y + "px";
			heart.style.left = heart.x + heart.direction * heart.bound * Math.sin(heart.y * heart.scale / 30) / heart.y * 100 + "px";
    }
		else
		{
			heart.parentNode.removeChild(heart);
			hearts.splice(i, 1);
		}
	}
}

function check()
{
	if(down)
	{
		const start = 1 - Math.round(Math.random()) * 2;
		const scale = Math.random() * Math.random() * 0.8 + 0.2;
		const bound = 30 + Math.random() * 20;
		generateHeart(event.pageX - brd.offsetLeft + cursorXOffset, event.pageY - brd.offsetTop + cursorYOffset, bound, start, scale);
	}
}