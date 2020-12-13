// Given a square matrix, calculate the absolute difference between the sums of its diagonals.

function diagonalDifference(arr) {
    // Write your code here
    let d1 = 0;
    let d2 = 0;
    
    for (let i = 0; i < arr.length; i++) {
        d1 += arr[i][i];
        d2 += arr[i][arr.length - i - 1];
    }
    
    return Math.abs(d1 - d2);
}