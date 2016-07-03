function sumOfEvenValuedTerms(previousNumber, number, limit) {
	var temp = 0;
	var sum = 0;
	if(previousNumber % 2 === 0) {
		sum += previousNumber;
	}
	while(number < limit) {
		if(number % 2 === 0) {
			sum += number;
		}
		temp = number;
		number = number + previousNumber;
		previousNumber = temp;
	}
	return sum;
}

document.write("The sum of the even-valued terms under four million of a Fibonacci sequence that starts with 1 and 2 is " + sumOfEvenValuedTerms(1, 2, 4000000));