// A Regular Expression, or RegEx, is a pattern used to match character combinations in a string. In JS, regular expressions are also objects.

// A regular expression consists of a pattern string and, potentially, 
// a flag specifying further detail on how the pattern should be matched. 
// We construct regular expressions by using regular expression literals or RegExp class objects.

// RegEx Literal: const re = /ab+c/;
// RegEx Objects: const re = new RegExp('ab+c');

// Task: 
// Complete the function in the editor below by returning a RegExp object, re, 
// that matches any string s that begins and ends with the same vowel.
function regexVar() {
    // Declare a RegExp object variable named 're'
    // It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
    let re = /^([aeiou]).+\1$/;
    
    return re;
}

// ^ => first item matches:
// () => stores matching value captured within
// [aeiou] => matches any of the characters in the brackets
// . => matches any character:
// + => for 1 or more occurrances (this ensures str length > 3)
// \1 => matches to previously stored match. 
// $ ensures that matched item is at end of the sequence