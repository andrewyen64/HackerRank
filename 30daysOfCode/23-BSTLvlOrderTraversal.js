

// Start of function Node
function Node(data) {
    this.data = data;
    this.left = null;
    this.right = null;
}; // End of function Node

// Start of function BinarySearchTree
function BinarySearchTree() {
    this.insert = function(root, data) {
        if (root === null) {
            this.root = new Node(data);
            
            return this.root;
        }
        
        if (data <= root.data) {
            if (root.left) {
                this.insert(root.left, data);
            } else {
                root.left = new Node(data);
            }
        } else {
            if (root.right) {
                this.insert(root.right, data);
            } else {
                root.right = new Node(data);
            }
        }
        
        return this.root;
	};
	
	// Start of function levelOrder
	this.levelOrder = function(root) {
		// Add your code here
		// To print values separated by spaces use process.stdout.write(someValue + ' ')
		var queue = [root];

		while (queue.length) {
			// shift removes first element in array and returns it.
			var treeNode = queue.shift();
			// Prints the node's data that was just removed
			process.stdout.write(treeNode.data + ' ');
			
			// If node has a left child, push to queue
			if(treeNode.left) {
				queue.push(treeNode.left);
			}	
			// If node has right child, push to queue
			if(treeNode.right) {
				queue.push(treeNode.right);
			}
		}
	}; // End of function levelOrder
}; // End of function BinarySearchTree