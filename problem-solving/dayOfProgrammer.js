// Given a year, y, find the date of the 256th day of that year according to the official Russian calendar during that year. 
// Then print it in the format dd.mm.yyyy, where dd is the two-digit day, mm is the two-digit month, and yyyy is y.

// Complete the dayOfProgrammer function below.
function dayOfProgrammer(year) {
    return (year === 1918) ? `26.09.${year}` 
    : ((year < 1918 && year % 4 === 0) || 
    (year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0))) ?
    `12.09.${year}` : `13.09.${year}`;

}