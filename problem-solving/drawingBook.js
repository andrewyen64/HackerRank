// Given n and p, find and print the minimum number of pages that must be turned in order to arrive at page p.

// pageCount has the following parameter(s):
// - int n: the number of pages in the book
// - int p: the page number to turn to

/*
 * Complete the pageCount function below.
 */
function pageCount(n, p) {
    /*
     * Write your code here.
     */
    const pageTurns = Math.floor(p / 2);
    const totalTurns = Math.floor(n / 2);

    return Math.min(pageTurns, totalTurns - pageTurns);
}