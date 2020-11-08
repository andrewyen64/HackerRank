// 1. Declare 3 variables: one of type int, one of type double, and one of type String.
// 2. Read 3 lines of input from stdin (according to the sequence given in the Input Format section below) and initialize your 3 variables.
// 3. Use the + operator to perform the following operations:
    // 1. Print the sum i of plus your int variable on a new line.
    // 2. Print the sum d of plus your double variable to a scale of one decimal place on a new line.
    // 3. Concatenate s with the string you read as input and print the result on a new line.

// Declare second integer, double, and String variables.
var i1;
var d1;
var s1;
// Read and save an integer, double, and String to your variables.
i1 = parseInt(readLine());
d1 = parseFloat(readLine());
s1 = readLine();

// Print the sum of both integer variables on a new line.
console.log(i + i1);
// Print the sum of the double variables on a new line.
console.log((d + d1).toFixed(1));
// Concatenate and print the String variables on a new line
// The 's' variable above should be printed first.
console.log(s + s1);