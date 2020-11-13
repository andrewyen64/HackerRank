// Create a Polygon class that has the following properties:
// A constructor that takes an array of integer values describing the lengths of the polygon's sides.
// A perimeter() method that returns the polygon's perimeter.

// Locked code in the editor tests the Polygon constructor and the perimeter method.
// Note: The perimeter method must be lowercase and spelled correctly.

// 1st Solution using for loop
class Polygon {
    constructor(sides) {
        this.sides = sides;
    }
    perimeter() {
        var sum = 0;
        for (var i = 0; i < this.sides.length; i++){
            sum = sum + this.sides[i];
        }
        return sum;
    }
}
const rectangle = new Polygon([10, 20, 10, 20]);
const square = new Polygon([10, 10, 10, 10]);
const pentagon = new Polygon([10, 20, 30, 40, 43]);

console.log(rectangle.perimeter());
console.log(square.perimeter());
console.log(pentagon.perimeter());

// Reduce method Solution
class Polygon2 {
    constructor (sides) {
        this.sides = sides
    }
    perimeter() {
        return this.sides.reduce(function (a,b) {
            return (a + b);
        })
    }
}
const hexagon = new Polygon2([10, 20, 10, 20, 10, 20]);
console.log("2nd Solution: ");
console.log(hexagon.perimeter());

// ES6+ Reduce Solution
class Polygon3 {
    constructor (sides) {
        this.sides = sides
    }
    perimeter() {
        return this.sides.reduce((a,b) => (a + b))
    }
}
const triangle = new Polygon([10, 20, 10]);
console.log("3rd Solution: ");
console.log(triangle.perimeter());
