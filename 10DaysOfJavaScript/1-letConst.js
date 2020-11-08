// ## Day 1: Let and Const
// 1. Declare a constant variable, PI, and assign it the value Math.PI. 
// You will not pass this challenge unless the variable is declared as a constant and named PI (uppercase).
// 2. Read a number 'r', denoting the radius of a circle from stdin.
// 3. Use and to calculate the area and perimeter of a circle having radius r.
// 4. Print area as the first line of output and print perimeter as the second line of output.

function main() {
    // Write your code here. Read input using 'readLine()' and print output using 'console.log()'.
    let r = readLine();
    const PI = Math.PI;
    // Print the area of the circle:
    console.log(PI*r*r);
    // Print the perimeter of the circle:
    console.log(PI*2*r);
}

console.log("Circle Area/Perimeter: ", main(2.6));
