// Complete the function in the editor. It has two parameters: a and b. 
// It must return an object modeling a rectangle that has the following properties:
    // length: This value is equal to a.
    // width: This value is equal to b.
    // perimeter: This value is equal to 2 * (a + b)
    // area: This value is equal to a * b 
/*
 * Complete the Rectangle function
 */
// My First Solution
function Rectangle (a, b) {
    return {
        length: a,
        width: b,
        perimeter: 2 * (a + b),
        area: a*b
    }
}

// Other Solution using 'this'
function Rectangle (a, b) {
    this.length = a;
    this.width = b;
    this.perimeter = 2 * (a + b);
    this.area = a * b;
}

// Alternate Solution using class/constructor
class Rectangle {
    constructor (a, b) {
        this.length = a;
        this.width = b;
        this.perimeter = 2 * (a + b);
        this.area = a * b;
    }
}