// Given a date string, dateString, in the format MM/DD/YYYY, find and return the day name for that date. 
// Each day name must be one of the following strings: 
// - Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, or Saturday. 
// For example, the day name for the date 12/07/2016 is Wednesday.

// The days of the week are: "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
function getDayName(dateString) {
    // Write your code here
    const day = new Date(dateString);
    const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return weekDays[day.getDay()];
}

// Other Solution
function getDayName(dateString) {
    let dayName;
    let dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    dayName = dayNames[new Date(dateString).getDay()];
}
