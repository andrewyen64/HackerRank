// A Node class is provided for you in the editor. A Node object has an integer data field, data, 
// and a Node instance pointer, next, pointing to another node (i.e.: the next node in a list).
// A removeDuplicates function is declared in your editor, which takes a pointer to the head node of a linked list as a parameter. 
// Complete removeDuplicates so that it deletes any duplicate nodes from the list and returns the head of the updated list.

function Solution() {
    this.removeDuplicates=function(head){
        //Write your code here
        if (typeof actualHead === 'undefined') {
            actualHead = head;
       }
       if (head && head.next) {
           if (head.data === head.next.data) {
               if (head.next.next) {
                   head.next = head.next.next;
               } else {
                   head.next = null;
               }
               this.removeDuplicates(head);
           } else {
               this.removeDuplicates(head.next);
           }
       }
       return actualHead;
    }

    this.insert=function(head,data){
        var p=new Node(data);
        if(head==null){
            head=p;
        }
        else if(head.next==null){
            head.next=p;
        }
        else{
            var start=head;
            while(start.next!=null){
                start=start.next;
            }
            start.next=p;
        }
        return head;
        
    };

	this.display=function(head){
        var start=head;
            while(start){
                process.stdout.write(start.data+" ");
                start=start.next;
            }
    };
}

