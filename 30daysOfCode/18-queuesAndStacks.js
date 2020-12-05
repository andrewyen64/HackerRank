// Write the following declarations and implementations:
// 1. Two instance variables: one for your stack, and one for your queue.
// 2. A void pushCharacter(char ch) method that pushes a character onto a stack.
// 3. A void enqueueCharacter(char ch) method that enqueues a character in the queue instance variable.
// 4. A char popCharacter() method that pops and returns the character at the top of the stack instance variable.
// 5. A char dequeueCharacter() method that dequeues and returns the first character in the queue instance variable.

// Output Format
// If your code is correctly written and s is a palindrome, 
// the locked stub code will print 'The word, s, is a palindrome.'; 
// otherwise, it will print 'The word, s, is not a palindrome.'

function Solution() {
    //Write your code here
    const stack = [];
    const queue = [];
    
    // Pushes character to the stack array
    this.pushCharacter = function(a) {
        return stack.push(a);
    }
    // Pushes new items to beginning of the queue array
    this.enqueueCharacter = function(b) {
        return queue.push(b);
    }
    // pop method removes and returns the last item in stack
    this.popCharacter = function() {
        return stack.pop();
    }
    // shift method removes the first item in queue
    this.dequeueCharacter = function() {
        return queue.shift();
    }
}
  
function main(){
    // read the string s
    var s=readLine();
    var len=s.length;
    // create the Solution class object p
    var obj=new Solution();
    //push/enqueue all the characters of string s to stack
    for(var i=0;i<len;i++){
        obj.pushCharacter(s.charAt(i));
        obj.enqueueCharacter(s.charAt(i));
    }

    var isPalindrome=true;
    /*
    pop the top character from stack
    dequeue the first character from queue
    compare both the characters*/

    for(var i=0;i<len/2;i++){
        if(obj.popCharacter()!=obj.dequeueCharacter()){
            isPalindrome=false;
            break;
        }
    }
    //finally print whether string s is palindrome or not

    if(isPalindrome)
        console.log("The word, "+s+", is a palindrome.");    
    else
        console.log("The word, "+s+", is not a palindrome.");
}


// ES6+ Solution
function Solution() {
    //Write your code here
    const stack = [];
    const queue = [];
    
    this.pushCharacter = a => stack.push(a);
    this.enqueueCharacter = b => queue.push(b);
    this.popCharacter = () => stack.pop();
    this.dequeueCharacter = () => queue.shift();
}

// Solution that logically makes more sense with the definition of Stacks and Queues
function Solution() {
    //Write your code here
    const stack = [];
    const queue = [];
    
    // unshift adds an element at the beginning of an array
    this.pushCharacter = a => stack.unshift(a);
    // push adds an element at the end of an array
    this.enqueueCharacter = b => queue.push(b);
    // pop removes last element in an array
    this.popCharacter = () => stack.pop();
    // shift removes 1st element in an array
    this.dequeueCharacter = () => queue.shift();
}
