// Complete the function in the editor below by returning a RegExp object, re, 
// that matches any string s satisfying both of the following conditions:

// - String s starts with the prefix Mr., Mrs., Ms., Dr., or Er.
// - The remainder of string s (i.e., the rest of the string after the prefix),
//   consists of one or more upper and/or lowercase English alphabetic letters (i.e., [a-z] and [A-Z]).

// Constraints
// The length of string s is >= 3.

// Solution as an Object Variable
function regexVar() {
    // Declare a RegExp object variable named 're'
    // It must match a string that starts with 'Mr.', 'Mrs.', 'Ms.', 'Dr.', or 'Er.', 
    // followed by one or more letters.
    const re = new RegExp('^(Mr|Mrs|Ms|Dr|Er)(\\.)([a-zA-Z])+$')
    
    return re;
}

function main() {
    const re = regexVar();
    const s = readLine();
    
    console.log(!!s.match(re));
}

// Solution as RegEx Literal
function regexVar() {
    const re = /^(Mr|Mrs|Ms|Dr|Er)(\.)([a-zA-Z])*$/;
    
    return re;
}