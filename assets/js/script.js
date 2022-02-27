// Card Data Sets 
const const cardData = {
	gameSolo: [{
		title: "Club Penguin",
		url: "https://cprewritten.net/",
		image: "assets/images/noimage.png",
		label: "Free to play - make new friends and solve puzzles together in this frozen virtual world"
	},
	{
		title: "MiniClip",
		url: "https://www.miniclip.com/games/genre-2/multiplayer/en/",
		image: "assets/images/noimage.png",
		label: "Large selection of multiplayer games available on desktop and mobile. Make new friends as you team up for a challenge."
	},
	{
		title: "Best Games to Meet People Online",
		url: "https://www.esquireme.com/gaming/44920-lonely-these-are-the-best-games-to-make-friends-online",
		image: "assets/images/noimage.png",
		label: "Some of the best games with communities to meet new people"
	}],
 	gameCouples: [{
		title: "Guess the Song (Android)",
		url: "  https://play.google.com/store/apps/details?id=quess.song.music.pop.quiz",
		image: "",
		label: " Guess the Song is a fun mobile game where you can go head-to-head in a battle to see who can identify songs faster"
	},
	{
		title: "Steamy Role Play",
		url: "https://www.thedatingdivas.com/10-super-steamy-stories-for-roleplay-romance/",
		image: "",
		label: "Roleplay is an exciting way to add some spice, grab some props and bring your fantasy scenarios to life!"
	},
	{	
		title: "Sexy Dice Game",
		url: "https://www.thedatingdivas.com/sexy-dice-intimate-date-night/",
		image: "",
		label: "Give this free printable sexy dice game a roll and see just how fun an intimate date night can be."
	},
	{
		title: "Sexy Tic Tac Toe",
		url: "https://www.thedatingdivas.com/sexy-tic-tac-toe/",
		image: "",
		label: "Spice things up with this spin on an old classic. With steamy action cards no matter who wins the game you'll both be winners tonight!"
	},
	{
		title: "Romantic Games for Couples",
		url: "https://www.marriage.com/advice/romance/fun-and-romantic-games-for-couples/",
		image: "",
		label: "Rid the monotonous routine with some fun romantic games that are easy to play and a great way to spice things up."
	},
	{
		title: "21 Fun Games to Play at home",
		url: "https://www.thedatingdivas.com/sexy-tic-tac-toe/",
		image: "https://www.stylecraze.com/articles/games-for-couples/",
		label: "Suggestions for couples to interact in new and unique ways to strengthen your connections."
	}],
 	gameOnline: [{
		title: "",
		url: "",
		image: "",
		label: ""
	},
	{
		title: "",
		url: "",
		image: "",
		label: ""
	},
	{
		title: "",
		url: "",
		image: "",
		label: ""
	}],
};

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

function flipCard(e) {
  // fip card animation	
  this.classList.toggle("flip");
  
  // get parent ID (if user clicks on H3 or image)
  var target = e.target;
  console.log("target", target);

  var elParentId = target.parentNode.id;
  console.log("elParentID1", elParentId);

  // get grand-parent id (if user clicks on text)
  var nodeName = e.target.nodeName;
  console.log("nodename", nodeName);

  if (nodeName == "P") {
	  elParentId = target.parentNode.parentNode.id;
  	}
  
  console.log("elParentID2", elParentId);
  //pass ID to randomCard function
  randomCard(elParentId);
}

// choose a random card matching the id to the relevant data set
// create empty array
let allCardChoices = {}

function randomCard(elParentId) {
	if (elParentId == "game-single") {
		console.log("random from game-single");
		allCardChoices = cardData.gameSolo;
	}
	console.log("show card choices", allCardChoices);
	
	// add if statements here for all cardIDs and map to correct data set

	// make random seletion from allCards array
	let randomSelection = allCardChoices[Math.random() * allCardChoices.length | 0];
	console.log("random selection", randomSelection);
	
	// populate back of card with random selection
	let cardTitle = randomSelection.title;
	console.log("card title", cardTitle);
	let cardURL = randomSelection.url;
	console.log("card url", cardURL);
	let cardImg = randomSelection.image;
	console.log("card img", cardImg);
	let cardLabel = randomSelection.label;
	console.log("card label", cardLabel);

}



cards.forEach((card) => card.addEventListener("click", flipCard, false));


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