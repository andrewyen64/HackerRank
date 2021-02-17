// We define a magic square to be an n X n matrix of distinct positive integers from 1 to n^2
//  where the sum of any row, column, or diagonal of length n is always equal to the same number: the magic constant.

// You will be given a 3 X 3 matrix s of integers in the inclusive range [1,9]. 
// We can convert any digit a to any other digit b in the range [1,9] at cost of [a-b]. 
// Given s, convert it into a magic square at minimal cost. Print this cost on a new line.

// Complete the formingMagicSquare function below.
function formingMagicSquare(s) {
    const theMagic = [
    [[8, 1, 6], [3, 5, 7], [4, 9, 2]],
    [[6, 1, 8], [7, 5, 3], [2, 9, 4]],
    [[4, 9, 2], [3, 5, 7], [8, 1, 6]],
    [[2, 9, 4], [7, 5, 3], [6, 1, 8]],
    [[8, 3, 4], [1, 5, 9], [6, 7, 2]],
    [[4, 3, 8], [9, 5, 1], [2, 7, 6]],
    [[6, 7, 2], [1, 5, 9], [8, 3, 4]],
    [[2, 7, 6], [9, 5, 1], [4, 3, 8]],
    ]

    let lowest = Number.MAX_SAFE_INTEGER;

    for (let k = 0; k<theMagic.length; k++) { 
        let totalDiff = 0;
        for (let i = 0; i < s.length; i++) {
            for (let j = 0; j < 3; j++) {
                totalDiff += Math.abs(s[i][j] - theMagic[k][i][j]);
            }
        }
        if (totalDiff < lowest) { 
            lowest = totalDiff;
        }
    }

    return lowest;

}