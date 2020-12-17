// You are in charge of the cake for a child's birthday. 
// You have decided the cake will have one candle for each year of their total age. 
// They will only be able to blow out the tallest of the candles. Count how many candles are tallest.

function birthdayCakeCandles(candles) {
    // Write your code here
    let max = 0;
    for (let i = 0; i < candles.length; i++) {
        let currentNum = candles[i];
        if (currentNum > max)
            max = currentNum;
    }
    
    const filteredArr = candles.filter(num => num === max);
    return filteredArr.length;
}


// Solution using Math.max instead of for loop
function birthdayCakeCandles(candles) {
    // Write your code here
    let max = Math.max(...candles); // Math.max finds the maximum number
    const filteredArr = candles.filter(num => num === max); // filter checks how many numbers are max
    return filteredArr.length;
}
