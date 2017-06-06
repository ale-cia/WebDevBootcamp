//printReverse()
//Write a function that takes an array and prints the array items in reverse

function printReverse(arr){
	for(var i = arr.length -1; i >= 0; i--){
		console.log(arr[i]);

	}
}

printReverse(['purple', 'white', 'grey', 'teal', 'burnt orange']);


//isUniform()
// Write a function isUniform() which takes an array as an argument an returns true is all elements in the array are identical

function isUniform(arr){
	var first = arr[0];
	for(var i = 1; i < arr.length; i++) {
		if(arr[i] !== first){
			return false
		}
	}
	return true;
}
