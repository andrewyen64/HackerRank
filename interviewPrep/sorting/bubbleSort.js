// Given an array of integers, sort the array in ascending order using the Bubble Sort algorithm above. 
// Once sorted, print the following three lines:
// 1. 'Array is sorted in numSwaps swaps.', where numSwaps is the number of swaps that took place.
// 2. 'First Element: firstElement', where firstElement is the first element in the sorted array.
// 3. 'Last Element: lastElement', where lastElement is the last element in the sorted array.

// Complete the countSwaps function below.
function countSwaps(a) {
    let numSwaps = 0;
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < a.length - 1; j++) {
            // Swap adjacent elements if they are in decreasing order
            if (a[j] > a[j + 1]) {
                let swapped = a[j];
                a[j] = a[j+1];
                a[j+1] = swapped
                numSwaps++;
            }
        }
    }
    console.log("Array is sorted in " + numSwaps + " swaps.");
    console.log("First Element: " + a[0]);
    console.log("Last Element: " + a[a.length-1]);
}