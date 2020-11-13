// Complete the function in the editor so that it does the following:
// 1. Finds the initial values of s1 and s2 by plugging the area and perimeter values into the formula:
        // s = P +- sqrt(P*P - 16 * A) / 4
//    where A is the rectangle's area and P is its perimeter.
// 2. Creates an array consisting of s1 and s2 and sorts it in ascending order.
// 3. Returns the sorted array.

/*
 * Determine the original side lengths and return an array:
 * - The first element is the length of the shorter side
 * - The second element is the length of the longer side
 * 
 * Parameter(s):
 * literals: The tagged template literal's array of strings.
 * expressions: The tagged template literal's array of expression values (i.e., [area, perimeter]).
 */

// 1st Solution
function sides(literals, ...expressions) {
    const A = expressions[0];
    const P = expressions[1];
    const results = [];

    const s1 = (P + Math.sqrt((P * P) - (16 * A)))/4;
    const s2 = (P - Math.sqrt((P * P) - (16 * A)))/4;
    results.push(s1);
    results.push(s2);
    
    return results.sort();
}

// DRYer Solution using sort method
function sides(literals, ...expressions) {
    const A = expressions[0];
    const P = expressions[1];

    const root = Math.sqrt((P * P) - (16 * A))
    const s1 = (P + root)/4;
    const s2 = (P - root)/4;
    // s2 will always be smaller because of the (-/+) above
    return ([s2, s1]).sort((a, b) => a - b);
}