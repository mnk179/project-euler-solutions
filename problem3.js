function largestPrimeFactor(number) {
	var recFactor = 0;
	while(number > 1) {
		for(var factor = 2; factor <= number; factor++) {
			if(number % factor === 0) {
				number = number / factor;
				break;
			}
			console.log(number);
		}
	}
	return factor;
}

document.write("The largest prime factor of the number " + 600851475143 + " is " + largestPrimeFactor(600851475143));