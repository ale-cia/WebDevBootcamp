//Scope is the *context* that the code is executed in //
//Evaluate this code
//Every function has it's own scope and they're not shared between functions

var num = 8;
function doMath(){
	num += 1; 
	if(num % 5 === 0){
	   return true;
	}
	else {
		return false;
	}
}
num += 1;
doMath()

//true
// num + 1 is 9
// num + 1 is now 10 and 10 is evenly divisible by 5 