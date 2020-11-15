// Complete the function in the editor so that given n and k, it returns the maximum a & b < k.

// Input Format
// The first line contains an integer, q, denoting the number of function calls.
// Each of the q subsequent lines defines a dataset for a function call 
// in the form of two space-separated integers describing the respective values of n and k.

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

// = = = = = = Write your code here = = = = = = = =
var getMaxLessThanK = function(n, k) {
    let max = 0;
    for (let i = 1 ; i < n; i++){
        for (let j = i + 1; j < n + 1; j++){
            if ((i & j) < k) {
                if ((i & j) > max) {
                    max = i & j;
                }
            }
        }
    }
    return max;
}

// = = = = = = = = = = = = = = = = = = = = = = = = =

function main() {
    const q = +(readLine());
    
    for (let i = 0; i < q; i++) {
        const [n, k] = readLine().split(' ').map(Number);
        
        console.log(getMaxLessThanK(n, k));
    }
}