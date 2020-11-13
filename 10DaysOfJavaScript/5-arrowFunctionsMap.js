// Complete the function in the editor. It has one parameter: an array, nums. 
// It must iterate through the array performing one of the following actions on each element:
//     - If the element is even, multiply the element by 2.
//     - If the element is odd, multiply the element by 3.
// The function must then return the modified array.

/*
 * Modify and return the array so that all even elements are doubled and all odd elements are tripled.
 * 
 * Parameter(s):
 * nums: An array of numbers.
 */

//  1st Solution
function modifyArray(nums) {
    var mod = function (n) {
        if (n % 2 == 0)
            return n * 2
        else
            return n * 3
    }
    var newArray = nums.map(mod)
    return newArray;
}

// Using a Ternary Operator ? :
function modifyArray(nums) {
    var mod = function(n) {
        var a = (n % 2 == 0) ? n * 2: n * 3;
        return a;
    }
    var newArray = nums.map(mod);
    return newArray;
}

// ES6+ and Ternary Operation
function modifyArray(nums) {
    var mod = n => n = (n % 2 == 0) ? n * 2: n * 3;
    var newArray = nums.map(mod);
    return newArray;
}

// Shortest Optimized Solution
function modifyArray(nums) {
    return nums.map(n => n = (n%2 == 0) ? n * 2 : n * 3);
}