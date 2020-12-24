// Given an array a of n integers and a number, d, perform d left rotations on the array. 
// Return the updated array to be printed as a single line of space-separated integers.

// Input Format
// The first line contains two space-separated integers n and d, the size of a and the number of left rotations.
// The second line contains n space-separated integers, each an a[i].

// Complete the rotLeft function below.
function rotLeft(a, d) {
    for (let i = 0; i < d; i++) {
        a.push(a.shift());
    }
    return a;
}