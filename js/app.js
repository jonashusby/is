// HTML objects
var screenSize = document.body.clientWidth;
var frontpage = document.getElementById("frontpage");
var assortment = document.getElementById("assortment");
var frontpageLink = document.getElementById("frontpageLink");
var assortmentLink = document.getElementById("assortmentLink");
var classic = document.getElementsByClassName("classic");
var fruit = document.getElementsByClassName("fruit");
var cones = document.getElementsByClassName("cones");
var navClassic = document.getElementById("navClassic");
var navFruit = document.getElementById("navFruit");
var navCones = document.getElementById("navCones");
var icecreamTitle = document.getElementById("icecreamTitle");
var icecreamText = document.getElementById("icecreamText");
var confirmation = document.getElementById("confirmation");
var navigation = document.getElementsByClassName("Header-navigation");
var mobileNavTrigger = document.getElementById("mobileNavTrigger");
var mobileNavTriggerParts = document.getElementsByClassName("Header-mobileNavTrigger-part");

// functions
function openCloseNavigation() {
	if ( mobileNavTrigger.classList.contains("active") ) {
		// if navigation is open - hide it
    	closeNavigation();
	} else {
		// if navigation is closed - open it
		TweenLite.to(navigation, 0.3, { right: "0" });
		TweenLite.to(mobileNavTriggerParts, 0.3, { backgroundColor: "white" });
		mobileNavTrigger.classList.add("active");
	}   
}
function closeNavigation() {
	TweenLite.to(navigation, 0.3, { right: "-100%" });
	TweenLite.to(mobileNavTriggerParts, 0.3, { backgroundColor: "#0286c4" });
	mobileNavTrigger.classList.remove("active");
}
function openConfirmation() {
	confirmation.style.display = "block";
}
function hideConfirmation() {
	confirmation.style.display = "none";
}

function showFrontpage() {
	// closing navigation after link is clicked
	closeNavigation();
	// fade out assortment page
	assortmentLink.classList.remove("active");
	TweenLite.to(assortment, 0.3, { opacity: "0" });
	setTimeout(function(){
		// fade in front page
		assortment.style.display = "none";
		frontpage.style.display = "block";
		TweenLite.to(frontpage, 0.3, { opacity: "1" });
		frontpageLink.classList.add("active");
	}, 300);
}
function showAssortment() {
	// closing navigation after link is clicked
	closeNavigation();
	// fade out front page
	frontpageLink.classList.remove("active");
	TweenLite.to(frontpage, 0.3, { opacity: "0" });
	setTimeout(function(){
		// fade in assortment page
		frontpage.style.display = "none";
		assortment.style.display = "block";
		TweenLite.to(assortment, 0.3, { opacity: "1" });
		assortmentLink.classList.add("active");
	}, 300);
}

function showClassic() {
	// removes active selection on ice cream navigation - and make the current active
	removeNavActive();
	navClassic.classList.add("active");

	// change text
	icecreamTitle.innerHTML = "Klassisk is";
	icecreamText.innerHTML = "Men like god for det";

	// different animation based on screen size
	if ( screenSize < 800 ) {
		TweenLite.to(fruit, 0.3, { left: "75%", width: "50%", height: "50%", top: "25%", zIndex: "0" });
		TweenLite.to(cones, 0.3, { left: "-25%", width: "50%", height: "50%", top: "25%", zIndex: "0" });
		TweenLite.to(classic, 0.3, { left: "0", width: "100%", height: "100%", top: "0", zIndex: "1" });
	} else {
		TweenLite.to(classic, 0.7, { left: "0", ease:Back.easeOut.config(1) });
		TweenLite.to(fruit, 0.7, { left: "100%", ease:Back.easeOut.config(1) });
		TweenLite.to(cones, 0.7, { left: "200%", ease:Back.easeOut.config(1) });
	}
}
function showFruit() {
	// removes active selection on ice cream navigation - and make the current active
	removeNavActive();
	navFruit.classList.add("active");

	// change text
	icecreamTitle.innerHTML = "Fruktis";
	icecreamText.innerHTML = "Lekkerbiten!";

	// different animation based on screen size
	if ( screenSize < 800 ) {
		TweenLite.to(cones, 0.3, { left: "75%", width: "50%", height: "50%", top: "25%", zIndex: "0" });
		TweenLite.to(classic, 0.3, { left: "-25%", width: "50%", height: "50%", top: "25%", zIndex: "0" });
		TweenLite.to(fruit, 0.3, { left: "0", width: "100%", height: "100%", top: "0", zIndex: "1" });
	} else {
		TweenLite.to(classic, 0.7, { left: "-100%", ease:Back.easeOut.config(1) });
		TweenLite.to(fruit, 0.7, { left: "0", ease:Back.easeOut.config(1) });
		TweenLite.to(cones, 0.7, { left: "100%", ease:Back.easeOut.config(1) });
	}
}
function showCones() {
	// removes active selection on ice cream navigation - and make the current active
	removeNavActive();
	navCones.classList.add("active");

	// change text
	icecreamTitle.innerHTML = "Kuleis";
	icecreamText.innerHTML = "Tre ulike smaker";

	// different animation based on screen size
	if ( screenSize < 800 ) {
		TweenLite.to(classic, 0.3, { left: "75%", width: "50%", height: "50%", top: "25%", zIndex: "0" });
		TweenLite.to(fruit, 0.3, { left: "-25%", width: "50%", height: "50%", top: "25%", zIndex: "0" });
		TweenLite.to(cones, 0.3, { left: "0", width: "100%", height: "100%", top: "0", zIndex: "1" });
	} else {
		TweenLite.to(classic, 0.7, { left: "-200%", ease:Back.easeOut.config(1) });
		TweenLite.to(fruit, 0.7, { left: "-100%", ease:Back.easeOut.config(1) });
		TweenLite.to(cones, 0.7, { left: "0", ease:Back.easeOut.config(1) });
	}
	
}
function removeNavActive() {
	// removes active class from all ice cream navigation buttons
	navClassic.classList.remove("active");
	navFruit.classList.remove("active");
	navCones.classList.remove("active");
}



/* ---------------------------------------------------------
-------------------- Creative decor ------------------------
------------------------------------------------------------ */

// variables
const DECOR_WRAPPER = document.getElementById("decorWrapper");
const ICECREAM_INFO = document.getElementById("icecreamInfo");
const MOVE_DISTANCE_OF_PINK_DECOR = 25;
const MOVE_DISTANCE_OF_BLUE_DECOR = 50;
const MOVE_DISTANCE_OF_YELLOW_DECOR = 75;

let docWidth = document.documentElement.clientWidth;
let docHeight = document.documentElement.clientHeight;
let pinkDecor = document.getElementsByClassName("pink");
let blueDecor = document.getElementsByClassName("blue");
let yellowDecor = document.getElementsByClassName("yellow");
let mainIcecreams = document.getElementsByClassName("Frontpage-icecreams-icecream");
let numberOfPinkDecor = 0;
let numberOfBlueDecor = 0;
let numberOfYellowDecor = 0;

// class decor - which builds the foundation for all decor types
class Decor {
	constructor() {
		this.location = {
			x: 0,
			y: 0
		}
		this.rotation = 0;
		this.CSSClass = "";
		this.bgImage = "";
	}

	// set methods
	setLocationX() {
		this.location.x = Math.random() * (docWidth - 1) + 1;
	}
	setLocationY() {
		this.location.y = Math.random() * (docHeight - 1) + 1;
	}
	setRotation() {
		this.rotation = Math.random() * (360 - 1) + 1;
	}
	setCSSClass(CSSClass) {
		this.CSSClass = CSSClass;
	}
	setBgImage(bgImage) {
		this.bgImage = bgImage;
	}

	// get methods
	getLocationX() {
		return this.location.x;
	}
	getLocationY() {
		return this.location.y;
	}
	getRotation() {
		return this.rotation;
	}
	getCSSClass() {
		return this.CSSClass;
	}
	getBgImage() {
		return this.bgImage;
	}

	// makes decors move - the distance varies between decor colors
	move(moveDistance) {
		let randomDirectionX = Math.random() < 0.5 ? moveDistance : - moveDistance;
		let randomDirectionY = Math.random() < 0.5 ? moveDistance : - moveDistance;
		this.location.x += randomDirectionX;
		this.location.y += randomDirectionY;
	}
}

// make less decors if user is on a small screen
// this increases performance and prevents too much decor on small screens
if ( docWidth < 800 ) {
	numberOfPinkDecor = 40;
	numberOfBlueDecor = 20;
	numberOfYellowDecor = 10;
} else {
	numberOfPinkDecor = 100;
	numberOfBlueDecor = 50;
	numberOfYellowDecor = 25;
}

// produces pink decor
// pink decor is the most used of the colors
for (i = 0; i < numberOfPinkDecor; i++) {
	// set attributes for the decor
	let decorInst = new Decor();
	decorInst.setLocationY();
	decorInst.setLocationX();
	decorInst.setRotation();
	decorInst.setCSSClass("pink");
	decorInst.setBgImage("img/decor_pink.png");

	// create a HTML element
	let decorEl = document.createElement("div");
	decorEl.classList.add(decorInst.getCSSClass());

	// insert attributes into HTML element
	decorEl.style.left = decorInst.getLocationX() + "px";
	decorEl.style.top = decorInst.getLocationY() + "px";
	decorEl.style.transform = "rotate(" + decorInst.getRotation() + "deg)";
	decorEl.style.backgroundImage = "url(" + decorInst.getBgImage() + ")"; 

	// moves decor when users hover it
	// pink decor moves just a bit when hovered
	decorEl.onmouseover = function() {
		// insert new location attributes
		decorInst.move(MOVE_DISTANCE_OF_PINK_DECOR);
		decorEl.style.left = decorInst.getLocationX() + "px";
		decorEl.style.top = decorInst.getLocationY() + "px";
		// add flying class - which makes the decor appear bigger when flying away from the users hovering
		decorEl.classList.add("flying");
		setTimeout(function(){
			// removes class after animation is finished - to make the same decor movable again
			decorEl.classList.remove("flying");
		}, 500);
	}
	// appends current decor to the decor wrapper
	DECOR_WRAPPER.appendChild(decorEl);
}

// produces blue decor
// blue decor is the second most used of the colors
for (i = 0; i < numberOfBlueDecor; i++) {
	// set attributes for the decor
	let decorInst = new Decor();
	decorInst.setLocationY();
	decorInst.setLocationX();
	decorInst.setRotation();
	decorInst.setCSSClass("blue");
	decorInst.setBgImage("img/decor_blue.png");

	// create a HTML element
	let decorEl = document.createElement("div");
	decorEl.classList.add(decorInst.getCSSClass());

	// insert attributes into HTML element
	decorEl.style.left = decorInst.getLocationX() + "px";
	decorEl.style.top = decorInst.getLocationY() + "px";
	decorEl.style.transform = "rotate(" + decorInst.getRotation() + "deg)";
	decorEl.style.backgroundImage = "url(" + decorInst.getBgImage() + ")"; 

	// moves decor when users hover it
	// blue decor moves a medium distance away when hovered
	decorEl.onmouseover = function() {
		// insert new location attributes
		decorInst.move(MOVE_DISTANCE_OF_BLUE_DECOR);
		decorEl.style.left = decorInst.getLocationX() + "px";
		decorEl.style.top = decorInst.getLocationY() + "px";
		// add flying class - which makes the decor appear bigger when flying away from the users hovering
		decorEl.classList.add("flying");
		setTimeout(function(){
			// removes class after animation is finished - to make the same decor movable again
			decorEl.classList.remove("flying");
		}, 500);
	}
	// appends current decor to the decor wrapper
	DECOR_WRAPPER.appendChild(decorEl);
}

// produces yellow decor
// blue decor is the least used of the colors
for (i = 0; i < numberOfYellowDecor; i++) {
	// set attributes for the decor
	let decorInst = new Decor();
	decorInst.setLocationY();
	decorInst.setLocationX();
	decorInst.setRotation();
	decorInst.setCSSClass("yellow");
	decorInst.setBgImage("img/decor_yellow.png");

	// create a HTML element
	let decorEl = document.createElement("div");
	decorEl.classList.add(decorInst.getCSSClass());

	// insert attributes into HTML element
	decorEl.style.left = decorInst.getLocationX() + "px";
	decorEl.style.top = decorInst.getLocationY() + "px";
	decorEl.style.transform = "rotate(" + decorInst.getRotation() + "deg)";
	decorEl.style.backgroundImage = "url(" + decorInst.getBgImage() + ")"; 

	// moves decor when users hover it
	// blue decor moves a long distance away when hovered
	decorEl.onmouseover = function() {
		// insert new location attributes
		decorInst.move(MOVE_DISTANCE_OF_YELLOW_DECOR);
		decorEl.style.left = decorInst.getLocationX() + "px";
		decorEl.style.top = decorInst.getLocationY() + "px";
		// add flying class - which makes the decor appear bigger when flying away from the users hovering
		decorEl.classList.add("flying");
		setTimeout(function(){
			// removes class after animation is finished - to make the same decor movable again
			decorEl.classList.remove("flying");
		}, 500);
	}
	// appends current decor to the decor wrapper
	DECOR_WRAPPER.appendChild(decorEl);
}

// a click on the ice cream info (title and text about the ice cream) executes the following
ICECREAM_INFO.onclick = function() {
	// first the pink decor is pulled into the ice cream
	for ( i = 0; i < pinkDecor.length; i++ ) {
		pinkDecor[i].style.zIndex = "0";
		pinkDecor[i].style.left = "50%";
		pinkDecor[i].style.top = "50%";
		pinkDecor[i].style.marginLeft = "-10px";
		pinkDecor[i].style.marginTop = "-10px";
	}
	setTimeout(function(){
		// then the blue decor is pulled in
		for ( i = 0; i < blueDecor.length; i++ ) {
			blueDecor[i].style.zIndex = "0";
			blueDecor[i].style.left = "50%";
			blueDecor[i].style.top = "50%";
			blueDecor[i].style.marginLeft = "-10px";
			blueDecor[i].style.marginTop = "-10px";
		}
	}, 500);
	setTimeout(function(){
		// and lastly the yellow decor
		for ( i = 0; i < yellowDecor.length; i++ ) {
			yellowDecor[i].style.zIndex = "0";
			yellowDecor[i].style.left = "50%";
			yellowDecor[i].style.top = "50%";
			yellowDecor[i].style.marginLeft = "-10px";
			yellowDecor[i].style.marginTop = "-10px";
		}
	}, 1000);
	// make the ice cream increase its size while pulling in decor
	for ( i = 0; i < mainIcecreams.length; i++ ) {
		mainIcecreams[i].style.backgroundSize = "auto 100%";
	}
	// hide all decor after it is pulled in - to prevent it from being visible when carousel rotates
	setTimeout(function(){
		DECOR_WRAPPER.style.display = "none";
	}, 1500);
}
