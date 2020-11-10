// Given the meal price (base cost of a meal), tip percent (the percentage of the meal price being added as tip), 
// and tax percent (the percentage of the meal price being added as tax) for a meal, find and print the meal's total cost.

// * Input Format
// There are 3 lines of numeric input:
// The first line has a double, mealCost (the cost of the meal before tax and tip).
// The second line has an integer, tipPercent (the percentage of mealCost being added as tip).
// The third line has an integer, taxPercent (the percentage of mealCost being added as tax).

// * Output Format
// Print the total meal cost, where totalCost is the rounded integer result of the entire bill ( with added tax and tip).

// Complete the solve function below.
var mealCost=0;
var tipPercent=0;
var taxPercent=0;

function main (mealCost, tipPercent, taxPercent) {
    var totalCost;
    return totalCost = Math.round(mealCost * (1 + (tipPercent + taxPercent)/100))
}

console.log(main(100, 15, 8));
console.log(main(60, 15, 8));