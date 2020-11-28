// Given an array, a, of size n distinct elements, 
// sort the array in ascending order using the Bubble Sort algorithm above. 
// Once sorted, print the following 3 lines:
// 1. Array is sorted in numSwaps swaps.
//    where numSwaps is the number of swaps that took place.
// 2. First Element: firstElement
//    where firstElement is the first element in the sorted array.
// 3. Last Element: lastElement
//    where lastElement is the last element in the sorted array.

function main() {
    var n = parseInt(readLine());
    a = readLine().split(' ');
    a = a.map(Number);
    // Write Your Code Here
    var numberOfSwaps = 0;
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < n - 1; j++) {
            if (a[j] > a[j + 1]) {
                var temp1 = a[j];
                var temp2 = a[j+1];
                a[j] = temp2;
                a[j+1] = temp1;

                numberOfSwaps++;
            }
        }
        // If no elements were swapped during a traversal, array is sorted
        if (numberOfSwaps == 0) {
            break;
        }
    }

    console.log("Array is sorted in "+ numberOfSwaps +" swaps.");
    console.log("First Element: " + a[0]);
    console.log("Last Element: " + a[a.length - 1]);
}
