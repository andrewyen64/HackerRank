// Given two strings, determine if they share a common substring. A substring may be as small as one character.

// Complete the twoStrings function below.
function twoStrings(s1, s2) {
    for (let letter of s1) {
        if (s2.includes(letter)) {
            return 'YES'
        }
    }
    return 'NO';
}


// Faster Solution
function twoStrings(s1, s2) {
    var map = {};
    for (let i of s1) {
        map[i] = 1;
    }

    for (let i of s2) {
        if (map[i])
            return "YES";
    }
    return "NO";
}