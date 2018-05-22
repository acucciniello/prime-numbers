function primeNumbers (x) {
	var y = x - 1
  var primeNumbers = []
  for (var i = 2; i < y; i++) {
	    var prime =  isPrime(i)
	    if (prime === true) {
		    primeNumbers.push(i)
	    }
  }
	return primeNumbers
}

// Returns true if n is prime and false otherwise
function isPrime (n) {
	var isPrime = false
	for (var j = 2; j < n; j++) {
		var remainder = n % j
		if (remainder === 0) {
			isPrime = false
			return isPrime
		}
  }
  isPrime = true
  return isPrime
}

console.log(primeNumbers(10))
