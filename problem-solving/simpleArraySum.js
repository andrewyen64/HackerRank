// Complete the simpleArraySum function in the editor below. It must return the sum of the array elements as an integer.
// simpleArraySum has the following parameter(s):
// - ar: an array of integers

/*
 * Complete the simpleArraySum function below.
 */
function simpleArraySum(ar) {
    /*
     * Write your code here.
     */
    var sum = 0;
    for (var i = 0; i < ar.length; i++) {
      sum += ar[i];
    }
    return count;
}

// Simpler solution using reduce method
function simpleArraySum(ar) {
    return ar.reduce((a,b) => (a + b))
}