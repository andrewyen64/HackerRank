// You are given an array of n integers, ar = [ar[0]], ar[1],...divisibleSumPairs,ar[n-1], and a positive integer, k. 
// Find and print the number of (i,j) pairs where i < j and ar[i] + ar[j] is divisible by k.

// Complete the divisibleSumPairs function below.
function divisibleSumPairs(n, k, ar) {
    var count = 0;
    for (var i = 0; i < n; i++) {
        for (var j = (i + 1); j < n; j++) {
            if ((ar[i] + ar[j]) % k === 0) {
                count++;
            }
        }
    }
    return count;
}