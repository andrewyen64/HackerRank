// ## Day 1: Arithmetic Operators
// Calculate the area of a rectangle.
function getArea(length, width) {
    let area;
    // Write your code here
    area = length * width;
    return area;
}

// Calculate the perimeter of a rectangle.
function getPerimeter(length, width) {
    let perimeter;
    // Write your code here
    perimeter = length*2 + width*2;
    return perimeter;
}
console.log("Arithmetic Operators: ");
console.log(getArea(2, 4));
console.log(getPerimeter(5, 10));

// ==========================================================================================================
// ==========================================================================================================

// ## Day 1: Functions
// Implement a function named factorial that has one parameter: an integer, n. 
// It must return the value of n! (i.e., n factorial)
function factorial(n){
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n-1);
    }
}

console.log("Factorial: ", factorial(4));

// ==========================================================================================================
// ==========================================================================================================

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
