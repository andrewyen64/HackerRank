// There is a list of 26 character heights aligned by index to their letters. 
// For example, 'a' is at index 0 and 'z' is at index 25. There will also be a string. 
// Using the letter heights given, 
// determine the area of the rectangle highlight in mm^2 assuming all letters are 1mm wide.

// designerPdfViewer has the following parameter(s):
// - int h[26]: the heights of each letter
// - string word: a string

// Complete the designerPdfViewer function below.
function designerPdfViewer(h, word) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const heights = [];

    for (let letter of word) { heights.push(h[alphabet.indexOf(letter)]) }

    return heights.length * Math.max(...heights);

}