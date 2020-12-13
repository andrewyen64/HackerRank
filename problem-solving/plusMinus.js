// Print the ratios of positive, negative and zero values in the array. 
// Each value should be printed on a separate line with 6 digits after the decimal. 
// The function should not return a value.

// Complete the plusMinus function below.
function plusMinus(arr) {
    let pos = 0;
    let neg = 0;
    let zero = 0;
    let length = arr.length;
    
    for (let i = 0; i < length; i++) {
        if (arr[i] > 0) {
            pos++;
        } else if (arr[i] < 0) {
            neg++;
        } else {
            zero++;
        }
    }
    console.log((pos/length).toFixed(6));
    console.log((neg/length).toFixed(6));
    console.log((zero/length).toFixed(6));
}

// Solution using forEach
function plusMinus(arr) {
    let pos = 0, neg = 0, zero = 0, length = arr.length;
    
    arr.forEach(n => {
        if (n > 0) {
            pos++
        } else if ( n < 0 ) {
            neg++
        } else {
            zero++
        }
    })
    console.log((pos/length).toFixed(6), '\n', (neg/length).toFixed(6), '\n', (zero/length).toFixed(6));
}
