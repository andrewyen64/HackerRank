// Complete the function in the editor below by returning a RegExp object, re, 
// that matches every integer in some string s.

// Constraints
// The length of string s is >= 3.
// It's guaranteed that string s contains at least one integer.

function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match ALL occurrences of numbers in a string.
     */
    const re = new RegExp('\\d+', 'g');
    
    /*
     * Do not remove the return statement
     */
    return re;
}

function main() {
    const re = regexVar();
    const s = readLine();
    
    const r = s.match(re);
    
    for (const e of r) {
        console.log(e);
    }
}

// Solution as RegEx Literal
function regexVar() {
    let re = /\d+/g;
    return re;
}