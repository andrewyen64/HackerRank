// Given the words in the magazine and the words in the ransom note, 
// print Yes if he can replicate his ransom note exactly using whole words from the magazine; otherwise, print No.

// Complete the checkMagazine function. It must print Yes if the note can be formed using the magazine, or No.
// checkMagazine has the following parameters:
// - magazine: an array of strings, each a word in the magazine
// - note: an array of strings, each a word in the ransom note

// Complete the checkMagazine function below.
function checkMagazine(magazine, note) {
    var map = { };
    var result = true;
    for (let i of magazine ) {
        map[i] = (map[i] || 0) + 1;
    }
    for (let i of note ) {
        map[i] = (map[i] || 0) - 1;
    }
    for (let i in map ) {
        if ( map[i] < 0 ) {
            result = false;
            break;
        }
    }
    console.log(result ? 'Yes' : 'No');
}