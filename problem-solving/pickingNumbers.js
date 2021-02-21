// Given an array of integers, 
// find the longest subarray where the absolute difference between any two elements is less than or equal to 1.

/*
 * Complete the 'pickingNumbers' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function pickingNumbers(a) {
    // Write your code here
    let biggest = 0
    a.forEach(elem => {
        const subarray = a.filter(subElem => elem-subElem === 0 || elem-subElem === 1);
        if (subarray.length > biggest){
            biggest = subarray.length;
        }
    });
    return biggest;
}