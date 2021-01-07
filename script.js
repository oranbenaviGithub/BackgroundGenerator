var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var RGbutton = document.querySelector(".RG");

setGradient();

function setGradient(color1String, color2String ) {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value
	+ ", " 
	+ color2.value 
	+ ")";
	css.textContent = body.style.background + ";";
}

var randHex = function() {
	do {
		var randHex = Math.floor(Math.random()*16777215).toString(16);
	} while (randHex.length !== 6);
	return randHex;
};

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

RGbutton.addEventListener("click", function() {
	color1.value = "#" + randHex();
	color2.value = "#" + randHex();
	setGradient();
});