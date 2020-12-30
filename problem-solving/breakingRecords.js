// Given the scores for a season, 
// find and print the number of times Maria breaks her records for most and least points scored during the season.

// Complete the breakingRecords function in the editor below.
// It must return an integer array containing the numbers of times she broke her records. 
// Index 0 is for breaking most points records, and index 1 is for breaking least points records.
// breakingRecords has the following parameter(s):
// - scores: an array of integers

// Complete the breakingRecords function below.
function breakingRecords(scores) {
    let [high, low] = [scores[0], scores[0]];
    let [max, min] = [0, 0];

    for (let i = 1; i < scores.length; i++) {
        if (scores[i] > high) {high = scores[i]; max++;}
        if (scores[i] < low) {low = scores[i]; min++;}
    }
    return [max, min];
}