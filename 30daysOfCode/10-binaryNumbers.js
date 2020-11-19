// Given a base-10 integer, n, convert it to binary (base-2). 
// Then find and print the base-10 integer denoting the maximum number of consecutive 1's in n's binary representation.

function readLine() {
    return inputString[currentLine++];
}

function main() {
    var n = parseInt(readLine());
    var BinArr = n.toString(2).split('0');
    var max = Math.max(...BinArr);
    console.log(max.toString().length);
}