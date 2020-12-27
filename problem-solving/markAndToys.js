// Given a list of toy prices and an amount to spend, determine the maximum number of gifts he can buy.
// maximumToys has the following parameter(s):
// - int prices[n]: the toy prices
// - int k: Mark's budget

// Complete the maximumToys function below.
function maximumToys(prices, k) {
    let total = 0;
    let toys = [];
    let sortedPrices = prices.sort((a, b) => a - b);

    for (let p of sortedPrices) {
        if (total + p <= k) {
            toys.push(p);
            total += p;
        } else {
            return toys.length;
        }
    }
}