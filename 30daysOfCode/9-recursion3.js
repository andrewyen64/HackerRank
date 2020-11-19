// Write a factorial function that takes a positive integer, N as a parameter and prints the result of N! (N factorial).

function readLine() {
    return inputString[currentLine++];
}

// Complete the factorial function below.
function factorial(n) {
    if (n==1) {
        return n;
    } else {
        return n * factorial(n-1)
    }

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    let result = factorial(n);

    ws.write(result + "\n");

    ws.end();
}


// Ternary Operator Solution
function factorial(n) {
    return n != 1 ? n * factorial(n-1) : n;
}