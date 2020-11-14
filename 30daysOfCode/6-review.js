// Given a string, S, of length N that is indexed from 0 to N-1, 
// print its even-indexed and odd-indexed characters as 2 space-separated strings on a single line.

// Note: 0 is considered to be an even index.
// Input Format:
// The first line contains an integer, T (the number of test cases).
// Each line i of the T subsequent lines contain a String, S.

function processData(input) {
    //Enter your code here
    let inputCopy = input.split('\n').slice(1);
    inputCopy.forEach((str) => {
        let even = [];
        let odd = [];
        for(let i = 0; i < str.length; i++) {
            if (i%2 == 0) {
                even += str[i]
            } else {
                odd += str[i]
            }
        }
        console.log(even + ' ' + odd);
    });
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});

// Other Solution using Ternary Operators and Template Literals
function processData(input) {
    let inputCopy = input.split('\n').slice(1);
    inputCopy.forEach((str) => {
        let evenStr = '';
        let oddStr = '';
        for(let i = 0; i < str.length; i++) {
            i % 2 ? oddStr += str[i] : evenStr += str[i];
        }
        console.log(`${evenStr} ${oddStr}`);
    });
}