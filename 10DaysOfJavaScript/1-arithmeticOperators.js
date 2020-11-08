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
