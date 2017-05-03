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