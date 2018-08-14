function average(nums){
	// gets the nearest whole number average to the numbers inside "nums" array 
	/*var arrayAverage = 0;
	for(var i = 0; i < nums.length; i++){
		arrayAverage += nums[i];
	}
	return (arrayAverage / nums.length)*/

	
	var arrayAverage = 0;
	nums.forEach(function(number){
			arrayAverage += number;
		}
	);
	return Math.floor(arrayAverage / nums.length);
}

// test case
test = [90, 98, 89, 100, 100, 86, 94];
console.log(average(test));