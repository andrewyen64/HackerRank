// Given an integer, n, print its first 10 multiples. 
// Each multiple 'n x i(where 1 <= n <= 10)' should be printed on a new line in the form: n x i = result.

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Type your solution here:
function main() {
    const n = parseInt(readLine(), 10);
    for (let i = 1; i < 11; i++) {
        console.log(n + ' x ' + i + ' = ' + n * i)
    }
}

// Alternate Solution using Template Literals
function main() {
    for (let i = 1; i <= 10; i += 1) {
        console.log(`${n} x ${i} = ${n * i}`);
    }
}