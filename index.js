window.addEventListener('load',()=> {
	const sounds = document.querySelectorAll(".sound");
	const pads = document.querySelectorAll(".pads div");
	const visual = document.querySelectorAll('.visual');
	const colors= [
	"#9f7ee6","#6ecaf5","#66edd4","#64ed91", "#eb7199","#daeb6c"
];


	//sound
	pads.forEach((pad, index) =>{
	pad.addEventListener('click',function(){

		sounds[index].currentTime = 0;
	sounds[index].play();
	createBubbles(index);




});

	});
const createBubbles =index=>{
	const bubble = document.createElement("div");
	visual.appendChild(bubble);
	bubble.style.backgroundColor =colors[index];
	bubble.style.animation="jump is ease";
	bubble.addEventListener('animationend', function(){
		visual.removeChild(this);
	});

};

});
