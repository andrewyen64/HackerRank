// Given n names and phone numbers, assemble a phone book that maps friends' names to their respective phone numbers. 
// You will then be given an unknown number of names to query your phone book for. 
// For each name queried, print the associated entry from your phone book on a new line in the form name=phoneNumber; 
// if an entry for name is not found, print 'Not found' instead.

// Note: Your phone book should be a Dictionary/Map/HashMap data structure.

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});

function processData(input) {
    //Enter your code here
    var inputArray = input.split("\n");
    var arrayLength = inputArray.splice(0, 1); 
    var queries = inputArray.splice(arrayLength);

    for (var i = 0; i < arrayLength; i++) {
        inputArray[i] = inputArray[i].split(" ");
    }
    
    var phoneBookMap = new Map(inputArray);
    
    for (var i = 0; i < queries.length; i++) {
        if (phoneBookMap.has(queries[i])) {
            console.log(queries[i] + "=" + phoneBookMap.get(queries[i]));
        } else {
            console.log("Not found");
        }
    }
} 


// Alternate solution w/o for loop
function processData(input) {
    var inputArray = input.split("\n");
    var totalEntries = parseInt(inputArray.splice(0, 1));
    var nameQueries = inputArray.splice(totalEntries);

    var phoneBookArray = inputArray.map(item => item.split(" "));
    
    var phoneBookMap = new Map(phoneBookArray);

    nameQueries.map(name => {
        if (phoneBookMap.has(name)) {
            console.log(name + "=" + phoneBookMap.get(name));
        } else {
            console.log("Not found");
        }
    })
}