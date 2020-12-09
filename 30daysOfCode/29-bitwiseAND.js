// Given set S = {1,2,3,...,N}. Find two integers, A and B (where A < B), 
// from set S such that the value of A&B is the maximum possible and also less than a given integer, K. 
// In this case, & represents the bitwise AND operator.

function main() {
    const t = parseInt(readLine(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const nk = readLine().split(' ');

        const n = parseInt(nk[0], 10);

        const k = parseInt(nk[1], 10);
    }

    let max = 0;
        
    for (let i = 1; i <= n; i++) {
        for (let j = i + 1; j <= n; j++) {
            let nextNum = i & j;
            if (nextNum > max && nextNum < k) {
                max = nextNum;
            }
        }
    }
    
    console.log(max);
}

