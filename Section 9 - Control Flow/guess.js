var secretNumber = 4;

var guess = Number(prompt("Guess a number"));
alert(guess);

if(guess === secretNumber) {
	alert("You guessed right!");
}

else if(guess < secretNumber){
	alert("Too low. Guess again.");
}

else {
	alert("Too high. Guess again.");
}



//Instead of repeating "Number(guess)" in both conditions use:
//var guess = Number(prompt("Guess a number")) 


// if(Number(guess) === secretNumber) {
// 	alert("You guessed right!");
// }

// else if(Number(guess) < secretNumber){
// 	alert("Too low. Guess again.");