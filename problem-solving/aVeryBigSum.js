// Complete the aVeryBigSum function in the editor below. It must return the sum of all array elements.
// aVeryBigSum has the following parameter(s):
// - int ar[n]: an array of integers .

// Complete the aVeryBigSum function below.
function aVeryBigSum(ar) {
    return ar.reduce((a,b) => (a + b))
}