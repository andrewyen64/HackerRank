// Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.

// Input Format
// A single string  that represents a time in 12-hour clock format (i.e.: hh:mm:ssAM or hh:mm:ssPM).

function timeConversion(s) {
    /*
     * Write your code here.
     */
    let AMPM = s.slice(-2);
    let timeArr = s.slice(0, -2).split(":");
    
    if (AMPM === "AM" && timeArr[0] === "12") {
        timeArr[0] = "00";
    } else if (AMPM === "PM") {
        timeArr[0] = (timeArr[0] % 12) + 12
    }
    
    return timeArr.join(":");

}