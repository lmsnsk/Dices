let rand;
let getRandomDeg = () => {rand = Math.round(Math.random()*6 + 1)*92};
let boxArray = document.querySelectorAll('.box');
let box1 = document.querySelector('#cube1');
let box2 = box1;
let box3 = box1;

if(boxArray.length == 3) {
	box2 = document.querySelector('#cube2')
	box3 = document.querySelector('#cube3')
} else if(boxArray.length == 2){
	box2 = document.querySelector('#cube2');
}

let button = document.querySelector('button');

let count = 0;
let buttonTitle = boxArray.length == 1 ? 'Бросить кубик' : 'Бросить кубики';
button.innerText = buttonTitle;

let addAnim = () => {
	function setVar(val) {
		getRandomDeg();
		box1.style.setProperty(val, `${rand}deg`);
		getRandomDeg();
		box2.style.setProperty(val, `${rand}deg`);
		getRandomDeg();
		box3.style.setProperty(val, `${rand}deg`);
	}

	setVar('--rx');
	setVar('--ry');
	setVar('--rz'); 
	
	for(let i = 0; i < boxArray.length; i++) {
		boxArray[i].classList.toggle('anim');
	}
	
	count++;
	
	if(count % 2 !== 0) {
		button.innerText = 'Отмена'
	} else {
		button.innerText = buttonTitle
	}
}

button.onclick = addAnim;

