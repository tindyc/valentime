// Card Data Sets 
const cardData = {
	empty: [{
		title: "",
		url: "",
		image: "",
		label: ""
	}],
	gameSolo: [
	{
		title: "Club Penguin",
		url: "https://cprewritten.net/",
		image: "assets/images/controller.jpeg",
		label: "Free to play - make new friends and solve puzzles together in this frozen virtual world"
	},
	{
		title: "MiniClip",
		url: "https://www.miniclip.com/games/genre-2/multiplayer/en/",
		image: "assets/images/controller.jpeg",
		label: "Large selection of multiplayer games available on desktop and mobile. Make new friends as you team up for a challenge."
	},
	{
		title: "Best Games to Meet People Online",
		url: "https://www.esquireme.com/gaming/44920-lonely-these-are-the-best-games-to-make-friends-online",
		image: "assets/images/controller.jpeg",
		label: "Some of the best games with communities to meet new people"
	}],
 	gameCouples: [
	{
		title: "Guess the Song (Android)",
		url: "https://play.google.com/store/apps/details?id=quess.song.music.pop.quiz",
		image: "assets/images/tic_tac_toe.jpeg",
		label: " Guess the Song is a fun mobile game where you can go head-to-head in a battle to see who can identify songs faster"
	},
	{
		title: "Steamy Role Play",
		url: "https://www.thedatingdivas.com/10-super-steamy-stories-for-roleplay-romance/",
		image: "assets/images/tic_tac_toe.jpeg",
		label: "Roleplay is an exciting way to add some spice, grab some props and bring your fantasy scenarios to life!"
	},
	{	
		title: "Sexy Dice Game",
		url: "https://www.thedatingdivas.com/sexy-dice-intimate-date-night/",
		image: "assets/images/tic_tac_toe.jpeg",
		label: "Give this free printable sexy dice game a roll and see just how fun an intimate date night can be."
	},
	{
		title: "Sexy Tic Tac Toe",
		url: "https://www.thedatingdivas.com/sexy-tic-tac-toe/",
		image: "assets/images/tic_tac_toe.jpeg",
		label: "Spice things up with this spin on an old classic. With steamy action cards no matter who wins the game you'll both be winners tonight!"
	},
	{
		title: "Romantic Games for Couples",
		url: "https://www.marriage.com/advice/romance/fun-and-romantic-games-for-couples/",
		image: "assets/images/tic_tac_toe.jpeg",
		label: "Rid the monotonous routine with some fun romantic games that are easy to play and a great way to spice things up."
	},
	{
		title: "21 Fun Games to Play at home",
		url: "https://www.stylecraze.com/articles/games-for-couples/",
		image: "assets/images/tic_tac_toe.jpeg",
		label: "Suggestions for couples to interact in new and unique ways to strengthen your connections."
	}],
 	gameOnline: [
	{
		title: "Virtual Game Night",
		url: "https://www.letsroam.com/roam_from_home/virtual_game_night",
		image: "assets/images/loading.jpeg",
		label: "Get ready for some wholesome laughs and bonding with your partner with a virtual game night! "
	},
	{
		title: "Psych",
		url: "https://www.warnerbros.com/games-and-apps/psych-outwit-your-friends",
		image: "assets/images/loading.jpeg",
		label: " Mime the clues as your partner guesses for some laugh out moments!"
	},
	{
		title: "SnapChat Games",
		url: "https://beebom.com/best-snapchat-games/",
		image: "assets/images/loading.jpeg",
		label: "Have a phone, have SnapChat, then try one of these fun SnapChat games!"
	},
	{
		title: "Text Chat Games",
		url: "https://parade.com/1043064/marynliles/texting-games/",
		image: "assets/images/loading.jpeg",
		label: "A curated list of 30 of the best games and suggestions to play with your partner by phone!"
	}],
	foodCook: [
	{
		title: "Spicy Pesto Pasta Alla Vodka",
		url: "https://www.youtube.com/results?search_query=Spicy+Pesto+Pasta+Alla+Vodka",
		image: "assets/images/food_drink-page/pasta.jpeg",
		label: "Enjoy the flavors and taste of... authentic Italian cuisine."
	},
	{
		title: "Crispy Honey Glazed Chicken Thighs",
		url: "https://www.youtube.com/results?search_query=Crispy+Honey+Glazed+Chicken+Thighs",
		image: "assets/images/food_drink-page/food_prep.jpeg",
		label: "Tweak the flavor of Chicken to suit all taste buds."
	},
	{
		title: "Instant Pot Indian Butter Chicken",
		url: "https://www.youtube.com/results?search_query=Instant+Pot+Indian+Butter+Chicken",
		image: "assets/images/food_drink-page/bchicken.jpeg",
		label: "Traditionally known as Murgh makhani, is a type of curry made from chicken with a spiced tomato and butter sauce."
	},
	{
		title: "Shrimp and Gnocchi With Garlic Parmesan Cream Sauce",
		url: "https://www.youtube.com/results?search_query=Shrimp+and+Gnocchi+With+Garlic+Parmesan+Cream+Sauce",
		image: "assets/images/food_drink-page/gnocchi.jpeg",
		label: "Light, airy gnocchi tossed with tender shrimp and the most amazing cream sauce."
	},
	{
		title: "Roasted Salmon Nicoise",
		url: "https://www.youtube.com/results?search_query=roasted+salmon+nicoise",
		image: "assets/images/food_drink-page/salmon_steak.jpeg",
		label: "As healthy as it could be."
	}],
	foodBake: [
	{
		title: "Red velvet cupcakes",
		url: "https://www.youtube.com/results?search_query=Red+velvet+cupcakes",
		image: "assets/images/food_drink-page/baking_ingredients.jpeg",
		label: "Cake is incredibly soft, moist, buttery, and topped with an easy cream cheese frosting."
	},
	{
		title: "Persian Love Cake",
		url: "https://www.youtube.com/results?search_query=Persian+Love+Cake",
		image: "assets/images/food_drink-page/cake_petals.jpeg",
		label: "A fragrant rose cake flavored with freshly ground cardamom and topped with crushed pistachios and rose "
	},
	{
		title: "Vanilla Cupcakes with Rose Petal Buttercream",
		url: "https://www.youtube.com/results?search_query=Vanilla+Cupcakes+with+Rose+Petal+Buttercream",
		image: "assets/images/food_drink-page/piping-bag.jpeg",
		label: "Light, airy and fluffy vanilla cupcakes with rose petal buttercream icing is the cutest treat."
	},
	{
		title: "Molten chocolate lava cakes",
		url: "https://www.youtube.com/results?search_query=Molten+chocolate+lava+cakes",
		image: "assets/images/food_drink-page/lava_cake.jpeg",
		label: "A popular dessert that combines the elements of a chocolate cake and a soufflé."
	},
	{
		title: "Fudgy Brownies",
		url: "https://www.youtube.com/results?search_query=Fudgy+Brownies+",
		image: "assets/images/food_drink-page/cocoa-powder-browine.jpeg",
		label: "These brownies are rich, fudgy in the middle and have a higher fat-to-flour ratio than cakey ones."
	}],
	foodShake: [{
		title: "Strawberry Margarita",
		url: "https://www.youtube.com/results?search_query=Strawberry+Margarita",
		image: "assets/images/food_drink-page/cocktail-ingredients.jpeg",
		label: "A near perfect strawberry margarita with frozen strawberries and limeade concentrate."
	},
	{
		title: "Love Potion No. 9",
		url: "https://www.youtube.com/results?search_query=love+potion+no.+9+cocktail",
		image: "assets/images/food_drink-page/pouring-drink.jpeg",
		label: "A a sweet, spicy non-alcoholic drink."
	},
	{
		title: "Cosmopolitan",
		url: "https://www.youtube.com/results?search_query=cosmopolitan+cocktail+recipe",
		image: "assets/images/food_drink-page/cosmo_glass.jpeg",
		label: "A cocktail made with vodka, triple sec, cranberry juice, and freshly squeezed or sweetened lime juice."
	},
	{
		title: "Strawberry Sangria",
		url: "https://www.youtube.com/results?search_query=Strawberry+Sangria+recipe",
		image: "assets/images/food_drink-page/strawberry_glass.jpeg",
		label: "A refreshing cocktail that combines the sweetness and flavours of strawberries, oranges, lime and basil with white wine."
	},
	{
		title: "Classic Mudslide",
		url: "https://www.youtube.com/results?search_query=Classic+Mudslide",
		image: "assets/images/food_drink-page/chocolate_cocktail.jpeg",
		label: "A delicious dessert cocktail "
	}],
	movieSolo: [{
		title: "How to be Single",
		url: "https://www.imdb.com/video/vi49721881?playlistId=tt1292566&ref_=tt_pr_ov_vi",
		image: "assets/images/movies-page/how-to-be-single.webp",
		label: "(2016) Comedy, Drama, Romance"
	},
	{
		title: "Romie & Micheles High School Reunion",
		url: "https://www.imdb.com/video/vi1849802265?playlistId=tt0120032&ref_=tt_pr_ov_vi",
		image: "assets/images/movies-page/romy-michele.webp",
		label: "(1997) Comedy"
	},
	{
		title: "He's Just Not That Into You",
		url: "https://www.imdb.com/video/vi1239875865?playlistId=tt1001508&ref_=tt_ov_vi",
		image: "assets/images/movies-page/not-into-you.webp",
		label: "(2009) Comedy, Drama, Romance"
	},
	{
		title: "Magic Mike",
		url: "https://www.imdb.com/video/vi889627417?playlistId=tt1915581&ref_=tt_pr_ov_vi",
		image: "assets/images/movies-page/magic-mike.webp",
		label: "(2012) Comedy, Drama"
	},
	{
		title: "La La Land",
		url: "https://www.imdb.com/video/vi2514728473?playlistId=tt3783958&ref_=tt_ov_vi",
		image: "assets/images/movies-page/lala-land.webp",
		label: "(2016) Comedy, Drama, Musical, Romance"
	}],
	movieCouples: [{
		title: "The Wedding Singer",
		url: "https://www.imdb.com/video/vi3125853209?playlistId=tt0120888&ref_=tt_pr_ov_vi",
		image: "assets/images/movies-page/wedding-singer.webp",
		label: "(1998) Comedy, Romance, Music"
	},
	{
		title: "The Notebook",
		url: "https://www.imdb.com/video/vi2603746073?playlistId=tt0332280&ref_=tt_ov_vi",
		image: "assets/images/movies-page/notebook.webp",
		label: "(2004) Romance, Drama"
	},
	{
		title: "Romeo & Juliet",
		url: "https://www.imdb.com/video/vi58720537?playlistId=tt0117509&ref_=tt_pr_ov_vi",
		image: "assets/images/movies-page/romeo-juliet.webp",
		label: "(1996) Drama, Romance"
	},
	{
		title: "The Vow",
		url: "https://www.imdb.com/video/vi236559897?playlistId=tt1606389&ref_=tt_pr_ov_vi",
		image: "assets/images/movies-page/vow.webp",
		label: "(2012) Drama, Romance"
	},
	{
		title: "Sleepless in Seattle",
		url: "https://www.imdb.com/video/vi727367449?playlistId=tt0108160&ref_=tt_ov_vi",
		image: "assets/images/movies-page/sleepless-seattle.webp",
		label: "(1993) Comedy, Drama, Romance"
	}],
	movieFriends: [{
		title: "Girls Trip",
		url: "https://www.imdb.com/video/vi3164191001?playlistId=tt3564472&ref_=tt_pr_ov_vi",
		image: "assets/images/movies-page/girls-trip.webp",
		label: "(2017) Comedy, Drama, Adventure"
	},
	{
		title: "The Sweetest Thing",
		url: "https://www.imdb.com/video/vi1509622041?playlistId=tt0253867&ref_=tt_pr_ov_vi",
		image: "assets/images/movies-page/sweetest-thing.webp",
		label: "(2002) Comedy, Romance"
	},
	{
		title: "The Proposal",
		url: "https://www.imdb.com/video/vi125895193?playlistId=tt1041829&ref_=tt_pr_ov_vi",
		image: "assets/images/movies-page/proposal.webp",
		label: "(2009) Comedy, Drama, Romance"
	},
	{
		title: "My Best Friends Wedding",
		url: "https://www.imdb.com/video/vi610777881?playlistId=tt0119738&ref_=tt_pr_ov_vi",
		image: "assets/images/movies-page/best-friends-wedding.webp",
		label: "(1997) Comedy, Drama, Romance"
	},
	{
		title: "Someone Great",
		url: "https://www.imdb.com/video/vi2772679193?playlistId=tt8075260&ref_=tt_pr_ov_vi",
		image: "assets/images/movies-page/someone-great.webp",
		label: "(2019) Comedy, Romance"
	}]
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
// create empty dictionary
let allCardChoices = {}

function randomCard(elParentId) {
	if (elParentId == "game-solo") {
		console.log("random from game-single");
		allCardChoices = cardData.gameSolo;
	}
	else if (elParentId == "game-couples") {
		console.log("random from game-couples");
		allCardChoices = cardData.gameCouples;
	}
	else if (elParentId == "game-online") {
		console.log("random from game-online");
		allCardChoices = cardData.gameOnline;
	}
	else if (elParentId == "food-cook") {
		console.log("random from food cook");
		allCardChoices = cardData.foodCook;
	}
	else if (elParentId == "food-bake") {
		console.log("random from food bake");
		allCardChoices = cardData.foodBake;
	}
	else if (elParentId == "food-shake") {
		console.log("random from food-shake");
		allCardChoices = cardData.foodShake;
	}
	else if (elParentId == "movie-solo") {
		console.log("random from movie solo");
		allCardChoices = cardData.movieSolo;
	}
	else if (elParentId == "movie-couples") {
		console.log("random from movie couples");
		allCardChoices = cardData.movieCouples;
	}
	else if (elParentId == "movie-friends") {
		console.log("random from movide friends");
		allCardChoices = cardData.movieFriends;
	}

	
	else {
		allCardChoices = cardData.empty;
	}
	console.log("show card choices", allCardChoices);
	

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


	let cardHtml = `
		<h3 class="p-3">${randomSelection.title}</h3>
		<img src="${randomSelection.image}" class="card-img-top">
		<div class="card-body">
			<p class="card-text">${randomSelection.label}</p>
		<a class="btn visit-btn" href="${randomSelection.url}" target=”_blank” role="button">Click here to visit</a>
		</div>
    `;
	
	if (elParentId == "game-solo") {
		document.getElementById('game-solo-back').innerHTML = cardHtml;
	}
	else if (elParentId == "game-couples") {
		document.getElementById('game-couples-back').innerHTML = cardHtml;
	}
	else if (elParentId == "game-online") {
		document.getElementById('game-online-back').innerHTML = cardHtml;
	}
	else if (elParentId == "food-bake") {
		document.getElementById('food-bake-back').innerHTML = cardHtml;
	}
	else if (elParentId == "food-cook") {
		document.getElementById('food-cook-back').innerHTML = cardHtml;
	}
	else if (elParentId == "food-shake") {
		document.getElementById('food-shake-back').innerHTML = cardHtml;
	}
	else if (elParentId == "movie-solo") {
		document.getElementById('movie-solo-back').innerHTML = cardHtml;
	}
	else if (elParentId == "movie-couples") {
		document.getElementById('movie-couples-back').innerHTML = cardHtml;
	}
	else if (elParentId == "movie-friends") {
		document.getElementById('movie-friends-back').innerHTML = cardHtml;
	}
};



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