// Given the sequence of up and down steps during a hike, find and print the number of valleys walked through.

/*
 * Complete the 'countingValleys' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER steps
 *  2. STRING path
 */

function countingValleys(steps, path) {
    // Write your code here
    let currLevel = 0;
    let valleys = 0;
    
    for (let i = 0; i < path.length; i++) {
        if (path[i] === 'U') {
            currLevel += 1;
            if (currLevel == 0) {
                valleys += 1;
            }
        } else {
            currLevel -= 1;
        } 
    }
    return valleys;
}