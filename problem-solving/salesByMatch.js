// Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.
// Complete the sockMerchant function in the editor below. 
// It must return an integer representing the number of matching pairs of socks that are available.

// sockMerchant has the following parameter(s):
// n: the number of socks in the pile
// ar: the colors of each sock


// Complete the sockMerchant function below.
function sockMerchant(n, ar) {
    var res = 0;
    ar.sort();
    for (let i = 0; i < n; i++){
        if (ar[i] == ar[i + 1]) {
            i++;
            res++;
        }
    }
    return res;
}