// There will be two arrays of integers. Determine all integers that satisfy the following two conditions:
// 1. The elements of the first array are all factors of the integer being considered
// 2. The integer being considered is a factor of all elements of the second array
// These numbers are referred to as being between the two arrays. Determine how many such numbers exist.

function getTotalX(a, b) {
    // Write your code here
    let count = 0;
    
    for (let i = 1; i <= 100; i++) {
        if (a.every(int => (i % int == 0))) {
            if (b.every(int => (int % i == 0))) {
                count++;
            }
        }
    }

    return count;
}