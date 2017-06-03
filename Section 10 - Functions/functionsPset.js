//Write a function to determine if a number is even.


function isEven(num) {
	return num % 2 === 0
		return true;
}
//Refactor code above

// function isEven(num) {
// 	if (num % 2 === 0){
// 		return true;

// 	} else {
// 		return false;
// 	}
// }

// isEven(4);


//FACTORIAL

function factorial(num) {
	var result = 1;
	for(var i = 2; i <= num; i++){
		result *= i;
}
return result;
}




//kebabtoSnake

function kebabToSnake(str) {
	var newStr = str.replace(/-/g , "_");
	return newStr;
}
