const por1 = document.querySelector(".por1");
const por2 = document.querySelector(".por2");
const por3 = document.querySelector(".por3");
const por4 = document.querySelector(".por4");
let track;

por1.addEventListener("mouseenter", () => {
  track = document.getElementById("image-track1");
  var mouseDownAt = track.getAttribute("data-mouse-down-at"); //changed element -> track
});

por1.addEventListener("mouseleave", () => {
  track = null;
});

por2.addEventListener("mouseenter", () => {
  track = document.getElementById("image-track2");
  var mouseDownAt = track.getAttribute("data-mouse-down-at"); //changed element -> track
});

por2.addEventListener("mouseleave", () => {
  track = null;
});

por3.addEventListener("mouseenter", () => {
  track = document.getElementById("image-track3");
  var mouseDownAt = track.getAttribute("data-mouse-down-at"); //changed element -> track
});

por3.addEventListener("mouseleave", () => {
  track = null;
});

por4.addEventListener("mouseenter", () => {
  track = document.getElementById("image-track4");
  var mouseDownAt = track.getAttribute("data-mouse-down-at"); //changed element -> track
});

por4.addEventListener("mouseleave", () => {
  track = null;
});

window.onmousedown = e => {
	track.dataset.mouseDownAt = e.clientX;
}

window.onmouseup = () => {
	track.dataset.mouseDownAt = "0";
	track.dataset.prevPercentage = track.dataset.percentage;
}

window.onmousemove = e => {
	if(track.dataset.mouseDownAt == "0") return;
	
	const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
		  maxDelta = window.innerWidth / 2;
		  
	const percentage = (mouseDelta / maxDelta) * -100;
		  nextPercentage = parseFloat(track.dataset.prevPercentage) + percentage;
	
	nextPercentage = Math.min(nextPercentage, 0); //i dont know these min max position
	nextPercentage = Math.max(nextPercentage, -100);
	
	track.dataset.percentage = nextPercentage;
	
	track.animate({
		transform: `translate(${nextPercentage}%, 10%)` //chagne the (x, this) to the css value //changed ' to , = to :
		
		}, {duration: 800, fill: "forwards"});
	
	for (const image of track.getElementsByClassName("imagee")){
	image.animate({
		objectPosition: `${nextPercentage + 100}% 10%` //changed ' to `
		}, {duration: 800, fill: "forwards"});
	}
	
}