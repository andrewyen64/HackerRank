// A prime is a natural number greater than 1 that has no positive divisors other than 1 and itself. 
// Given a number, n, determine and print whether it is Prime or Not Prime.

// Note: If possible, try to come up with a O(sqrt(n)) primality algorithm, 
// or see what sort of optimizations you come up with for an O(n) algorithm. 

// Input Format
// The first line contains an integer, T, the number of test cases.
// Each of the T subsequent lines contains an integer, n, to be tested for primality.

function processData(input) {
    //Enter your code here
    var inputArray = input.split('\n').map(Number);
    inputArray.shift();
    
    inputArray.forEach(function(element) {
         if (isPrime(element)) {
            console.log('Prime');
         } else {
            console.log('Not prime');
         }
    });
} 

function isPrime(number) {
	var range = Math.sqrt(number);
	if (number < 2) {
		return false;
	} else if (number === 2) {
		return true;
	}

	for (var i = 2; i <= range; i++) {
		if (number % i === 0) {
			return false;
		}
	}

	return true;
}

