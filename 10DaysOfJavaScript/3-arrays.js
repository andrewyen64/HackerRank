// Complete the getSecondLargest function in the editor below. It has one parameter: an array, nums, of n numbers. 
// The function must find and return the second largest number in nums.
function getSecondLargest(nums) {
    let largest = nums[0];
    let secondLargest = nums[0];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > largest) {
            secondLargest = largest;
            largest = nums [i];
        }
        if (nums[i] > secondLargest && nums[i] < largest) {
            secondLargest = nums[i]
        }
    }
    return secondLargest;
}

console.log(getSecondLargest([2,3,6,6,5]))
console.log(getSecondLargest([1,4,8,4,10]))