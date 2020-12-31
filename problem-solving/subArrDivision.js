// Given a chocolate bar, two children, Lily and Ron, are determining how to share it. 
// Each of the squares has an integer on it.
// Lily decides to share a contiguous segment of the bar selected such that:
// - The length of the segment matches Ron's birth month, and,
// - The sum of the integers on the squares is equal to his birth day.
// You must determine how many ways she can divide the chocolate.

function solve(s, d, m) {    
    let result = 0;
    
    for (let i = 0, l = s.length; i < l; i++) {
        if (s.slice(i, i + m).reduce((x, y) => x + y) === d) {
            result++;
        }
    }
    
    return result;
}