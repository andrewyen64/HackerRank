// Given five positive integers, find the minimum and maximum values that can be calculated by 
// summing exactly four of the five integers. 
// Then print the respective minimum and maximum values as a single line of two space-separated long integers.

// Complete the miniMaxSum function below.
function miniMaxSum(arr) {
    let min = 0;
    let max = 0;
    
    arr.sort((a, b) => a - b)
    for (let i = 0; i < arr.length - 1; i++) {
        min += arr[i]
    }
    
    arr.sort((a, b) => a + b)
    for (let i = 0; i < arr.length - 1; i++) {
        max += arr[i]
    }
    console.log(min + " " + max);
}