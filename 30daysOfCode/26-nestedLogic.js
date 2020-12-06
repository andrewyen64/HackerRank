// Your local library needs your help! Given the expected and actual return dates for a library book, 
// create a program that calculates the fine (if any). 
// 1. If the book is returned on or before the expected return date, no fine will be charged (i.e.: fine = 0).
// 2. If the book is returned after the expected return day 
//    but still within the same calendar month and year as the expected return date, fine = 15 Hackos * (number of days late).
// 3. If the book is returned after the expected return month but still within the same calendar year 
//    as the expected return date, the fine = 500 Hackos * (number of months late).
// 4. If the book is returned after the calendar year in which it was expected, there is a fixed fine of 10000 Hackos.

function processData(input) {
    //Enter your code here
    // Split the strings into D, M, Y
    var actualReturn = input[0].split(' ');
    var expectedReturn = input[1].split(' ');

    // parseInt strings
    for (let i = 0; i < 3; i++) {
        actualReturn[i] = parseInt(actualReturn[i]);
        expectedReturn[i] = parseInt(expectedReturn[i]);
    }

    if (actualReturn[2] < expectedReturn[2]) {
        console.log(0);
    } else if (actualReturn[2] > expectedReturn[2]) { 
        console.log(10000);
    } else if (actualReturn[1] > expectedReturn[1]) {
        let fee = 500 * (actualReturn[1] - expectedReturn[1]);
        console.log(fee);
    } else if(actualReturn[0] > expectedReturn[0]) {
        let fee = 15 * (actualReturn[0] - expectedReturn[0]);
        console.log(fee);
    } else {
        console.log(0);
    }
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   input_arr = _input.split("\n"); // Split the input lines
   processData(input_arr);
});