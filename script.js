let diceIMG = [
'images/dice/dice1.svg',
'images/dice/dice2.svg',
'images/dice/dice3.svg',
'images/dice/dice4.svg',
'images/dice/dice5.svg',
'images/dice/dice6.svg',
];



function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}



let rollButton = document.querySelector('.throw-dice-button');
/*rollButton.addEventListener ( 'click', roll, ); 

function roll(){
	let dice = document.querySelector('.dice');
	//dice.innerHTML = '';

	let dice1 = document.createElement("IMG");
	let dice2 = document.createElement("IMG");

	let d1 = getRandomIntInclusive(1,5);
	let d2 = getRandomIntInclusive(1,5);

	dice1.src = diceIMG[d1];
	dice2.src = diceIMG[d2];;


	dice.appendChild(dice1);
	dice.appendChild(dice2);
}*/

rollButton.addEventListener ( 'click', function roll() {
	let imgs=["dice1", "dice2"];

	imgs.forEach(function(elementId){
		document.getElementById(elementId).src = diceIMG[getRandomIntInclusive(1,5)];
	});
}, );