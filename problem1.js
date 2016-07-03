function findSumOfMultiples(limit) {
	var sum = 0;
	for(var i = 1; i < limit; i++) {
		if(i % 3 === 0 || i % 5 === 0) {
			sum += i;
		}
	}
	return sum;
}

document.write("The sum of multiples of 3 or 5 below 1000 is " + findSumOfMultiples(1000));
