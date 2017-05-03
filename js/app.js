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


function openNavigation() {
	var navigation = document.getElementsByClassName("Header-navigation");
	var mobileNavTrigger = document.getElementById("mobileNavTrigger");
	var mobileNavTriggerParts = document.getElementsByClassName("Header-mobileNavTrigger-part");

	if ( mobileNavTrigger.classList.contains("active") ) {
		TweenLite.to(navigation, 0.3, { right: "-100%" });
    	TweenLite.to(mobileNavTriggerParts, 0.3, { backgroundColor: "#0286c4" });
    	mobileNavTrigger.classList.remove("active");
	} else {
		TweenLite.to(navigation, 0.3, { right: "0" });
    	TweenLite.to(mobileNavTriggerParts, 0.3, { backgroundColor: "white" });
    	mobileNavTrigger.classList.add("active");
	}   
}

function showFrontpage() {
	assortmentLink.classList.remove("active");
	TweenLite.to(assortment, 0.3, { opacity: "0" });
	setTimeout(function(){
		assortment.style.display = "none";
		frontpage.style.display = "block";
		TweenLite.to(frontpage, 0.3, { opacity: "1" });
		frontpageLink.classList.add("active");
	}, 300);
}
function showAssortment() {
	frontpageLink.classList.remove("active");
	TweenLite.to(frontpage, 0.3, { opacity: "0" });
	setTimeout(function(){
		frontpage.style.display = "none";
		assortment.style.display = "block";
		TweenLite.to(assortment, 0.3, { opacity: "1" });
		assortmentLink.classList.add("active");
	}, 300);
}

function showClassic() {
	if ( screenSize < 800 ) {
		removeNavActive();
		navClassic.classList.add("active");

		icecreamTitle.innerHTML = "Klassisk is";
		icecreamText.innerHTML = "Men like god for det";

		TweenLite.to(fruit, 0.3, { left: "75%", width: "50%", height: "50%", top: "25%", zIndex: "0" });
		TweenLite.to(cones, 0.3, { left: "-25%", width: "50%", height: "50%", top: "25%", zIndex: "0" });
		TweenLite.to(classic, 0.3, { left: "0", width: "100%", height: "100%", top: "0", zIndex: "1" });
	} else {
		removeNavActive();
		navClassic.classList.add("active");

		icecreamTitle.innerHTML = "Klassisk is";
		icecreamText.innerHTML = "Men like god for det";

		TweenLite.to(classic, 0.7, { left: "0" });
		TweenLite.to(fruit, 0.7, { left: "100%" });
		TweenLite.to(cones, 0.7, { left: "200%" });
	}
}
function showFruit() {
	if ( screenSize < 800 ) {
		removeNavActive();
		navFruit.classList.add("active");

		icecreamTitle.innerHTML = "Fruktis";
		icecreamText.innerHTML = "Lekkerbiten!";

		TweenLite.to(cones, 0.3, { left: "75%", width: "50%", height: "50%", top: "25%", zIndex: "0" });
		TweenLite.to(classic, 0.3, { left: "-25%", width: "50%", height: "50%", top: "25%", zIndex: "0" });
		TweenLite.to(fruit, 0.3, { left: "0", width: "100%", height: "100%", top: "0", zIndex: "1" });
	} else {
		removeNavActive();
		navFruit.classList.add("active");

		icecreamTitle.innerHTML = "Fruktis";
		icecreamText.innerHTML = "Lekkerbiten!";

		TweenLite.to(classic, 0.7, { left: "-100%" });
		TweenLite.to(fruit, 0.7, { left: "0" });
		TweenLite.to(cones, 0.7, { left: "100%" });
	}
}
function showCones() {
	if ( screenSize < 800 ) {
		removeNavActive();
		navCones.classList.add("active");

		icecreamTitle.innerHTML = "Kuleis";
		icecreamText.innerHTML = "Tre ulike smaker";

		TweenLite.to(classic, 0.3, { left: "75%", width: "50%", height: "50%", top: "25%", zIndex: "0" });
		TweenLite.to(fruit, 0.3, { left: "-25%", width: "50%", height: "50%", top: "25%", zIndex: "0" });
		TweenLite.to(cones, 0.3, { left: "0", width: "100%", height: "100%", top: "0", zIndex: "1" });
	} else {
		removeNavActive();
		navCones.classList.add("active");

		icecreamTitle.innerHTML = "Kuleis";
		icecreamText.innerHTML = "Tre ulike smaker";

		TweenLite.to(classic, 0.7, { left: "-200%" });
		TweenLite.to(fruit, 0.7, { left: "-100%" });
		TweenLite.to(cones, 0.7, { left: "0" });
	}
	
}
function removeNavActive() {
	navClassic.classList.remove("active");
	navFruit.classList.remove("active");
	navCones.classList.remove("active");
}