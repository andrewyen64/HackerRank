// Given an array, A, of N integers, print A's elements in reverse order as a single line of space-separated numbers.

function readLine() {
    return inputString[currentLine++];
}



function main() {
    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
    // Write your code here
    console.log(arr.reverse().join(' '))
}