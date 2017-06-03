//Print all numbers between -10 and 19
for(var i = -10; i < 20; i++){
	console.log(i);
}




//Print all even numbers between 10 and 40
for(var i = 10; i <= 40; i += 1){
	if(i % 2 === 0){
	console.log(i);
	i += 1;
 }
}



//Print all odd numbers between 300 and 333
for(var j = 300; j <= 333; j++){
	if(j % 2 !== 0)
	console.log(j);
}




//Print all numbers divisible by 5 AND 3 between 5 and 50
for(var j = 5; j <= 50; j++){
	if(j % 3 === 0 && j % 5 === 0){
			console.log(j);
		}
}