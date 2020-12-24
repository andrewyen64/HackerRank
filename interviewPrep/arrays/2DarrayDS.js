// There are 16 hourglasses in arr. An hourglass sum is the sum of an hourglass' values. 
// Calculate the hourglass sum for every hourglass in arr, then print the maximum hourglass sum. 
// The array will always be 6 X 6.

// Input Format
// Each of the 6 lines of inputs arr[i] contains 6 space-separated integers arr[i][j]

// Constraints
// -9 <= arr[i][j] <= 9 
// 0 <= i,j <= 5

// Complete the hourglassSum function below.
function hourglassSum(arr) {
    let max = -63;

    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            let sum = arr[i + 1][j + 1];
            for (let k = 0; k < 3; k++) {
                sum += arr[i][j + k];
                sum += arr[i + 2][j + k]
            }
            if (sum > max) max = sum;
        }
    }
    return max;
}
