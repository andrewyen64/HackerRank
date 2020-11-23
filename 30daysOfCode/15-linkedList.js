// Complete the insert function in your editor so that it creates a new Node (pass data as the Node constructor argument) 
// and inserts it at the tail of the linked list referenced by the head parameter. 
// Once the new node is added, return the reference to the head node.

// Note: If the head argument passed to the insert function is null, then the initial list is empty.

function Node(data){
    this.data=data;
    this.next=null;
}
function Solution(){

	this.insert=function(head,data){
        // COMPLETE THIS METHOD HERE
        newNode = new Node(data);
        currentNode = head;

        // If the currentrent node is not null (it has values), walk the node list
        if (currentNode != null ) {
            while (currentNode.next != null) {
                currentNode = currentNode.next;
            }
            currentNode.next = newNode;
        } else {
            head = newNode;
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

function main(){
    var T=parseInt(readLine());
    var head=null;
    var mylist=new Solution();
    for(i=0;i<T;i++){
        var data=parseInt(readLine());
        head=mylist.insert(head,data);
    }
    mylist.display(head);
}	
