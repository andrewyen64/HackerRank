// Read a string, S, and print its integer value; if S cannot be converted to an integer, print Bad String.

// Note: You must use the String-to-Integer and exception handling constructs built into your submission language.
//       If you attempt to use loops/conditional statements, you will get a  score.
// Also, this challenge does work well at all with JavaScript.

/*
 * You can use the following pseudocode:
 * `S` = read string from stdin.
 * try {
 *     `N` = numeric value of `S`.
 *     
 *     If `N` is `NaN` or `undefined`, then some exception must be thrown,
 *     you can write the following without using conditional statement:
 *     <condition to return true when `N` is `NaN` or `undefined`> && an_undefined_function_call()
 *
 *     print `N`
 * } catch (err) {
 *     print `Bad String`.
 * }
 */

// Solution w/o conditional statements
function main() {
    const S = readLine();
    try {
        S != Number(S) && err()
        console.log(Number(S))
    } catch (err) {
        console.log('Bad String')
    }
}

// The non hacking way that isn't allowed for this submission
function main() {
    const S = readLine();
    if (isNaN(S)) {
        console.log('Bad String')
    } else {
        console.log(S);
    }
}