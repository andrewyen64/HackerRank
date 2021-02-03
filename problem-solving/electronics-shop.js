// A person wants to determine the most expensive computer keyboard and USB drive that can be purchased with a give budget. 
// Given price lists for keyboards and USB drives and a budget, 
// find the cost to buy them. If it is not possible to buy both items, return -1.

function getMoneySpent(keyboards, drives, b) {
    /*
     * Write your code here.
     */
    var combosOptions = [];
    
    keyboards.forEach(c => {
        for (let i in drives) {
            if(c + drives[i] <= b) {
                combosOptions.push(c + drives[i]);
            }
        }
    })
    
    return combosOptions.length != 0 ? Math.max.apply(null, combosOptions) : -1;
}
