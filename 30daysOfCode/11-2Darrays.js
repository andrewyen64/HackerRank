// Context:
// Given a 6 X 6 2D array A:
// 1 1 1 0 0 0
// 0 1 0 0 0 0
// 1 1 1 0 0 0
// 0 0 0 0 0 0
// 0 0 0 0 0 0
// 0 0 0 0 0 0
// We define an hourglass in A to be a subset of values with indices falling in this pattern in A's graphical representation:
// a b c
//   d
// e f g

// Task: 
// Calculate the hourglass sum for every hourglass in A, then print the maximum hourglass sum.

// Constraints:
// -9 <= A[i][j] <= 9
// 0 <= i,j <= 5

function main() {
    let arr = Array(6);
    
    for (let i = 0; i < 6; i++) {
        arr[i] = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }
    // Write your code here
    // highestSum is set to -63 since it's the lowest possible hourglass sum (-9*6)
    var highestSum = -63;
    var currentSum = 0;
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            currentSum = arr[i][j] + arr[i][j+1] + arr[i][j+2]
                    + arr[i+1][j+1] 
                    + arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2];
            if (currentSum > highestSum) {
                highestSum = currentSum
            }
        }
    }
    console.log(highestSum);
}