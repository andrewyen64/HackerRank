// This is a staircase of size n:
//     #
//    ##
//   ###
//  ####
// Its base and height are both equal to n. It is drawn using # symbols and spaces. 
// The last line is not preceded by any spaces.

// Write a program that prints a staircase of size n.

// Complete the staircase function below.
function staircase(n) {
    for (let i = 0; i < n; i++) {
        console.log(" ".repeat(n-i-1) + "#".repeat(i+1))  
    } 
}

// Other solution using padStart().
function staircase(n) {
    for (let i = 1; i <= n; i++) {
    console.log("#".repeat(i).padStart(n));
    }
}

