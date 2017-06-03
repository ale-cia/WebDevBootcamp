//Print all numbers between -10 and 19
var num = -10;
  while (num <= 19){
	console.log(num);
    num++;
}


//Print all even numbers between 10 and 40
//Counts by 2 and prints even numbers
var num = 10;
  while(num <= 40){
	console.log(num)
	num += 2;
}


//Checks every number from 10 - 40 to see if it's even
// var num = 10;
//   while(num <= 40){
//   	if(num % 2 === 0){
// 	console.log(num);
// }
// num += 1;
// }


//Print all odd numbers between 300 and 333
var num = 301;
	while(num <= 333){
		console.log(num);
		num+= 2;
	}

// var num = 300;
//   while(num <= 333){
//     if(counter % 2 !=== 0){
//      console.log(num);  
// } 
//.    num += 1;
// }

//Print all numbers divisible by 5 AND 3 between 5 and 50
var num = 5;
	while(num <= 50){
		if(num % 3 === 0 && num % 5 === 0){
			console.log(num);
		}
		num++;
	}