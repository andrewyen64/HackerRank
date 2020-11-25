// Write a Calculator class with a single method: int power(int,int). 
// The power method takes two integers, n and p, as parameters and returns the integer result of n^p. 
// If either n or p is negative, then the method must throw an exception with the message: n and p should be non-negative.

//Write your code here
class Calculator {
    constructor(n,p) {
        this.n = n;
        this.p = p;
    }

    power(n,p) {
        if (n < 0 || p < 0) {
            throw 'n and p should be non-negative'
        } else {
            return n**p
        }
    }
}

function main(){
    var myCalculator=new Calculator();
    var T=parseInt(readLine());
    while(T-->0){
        var num = (readLine().split(" "));
        try{
            var n=parseInt(num[0]);
            var p=parseInt(num[1]);
            var ans=myCalculator.power(n,p);
            console.log(ans);
        }
        catch(e){
            console.log(e);
        }

    }
}