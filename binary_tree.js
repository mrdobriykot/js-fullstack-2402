/**DONE create binary tree class and node class
 * DONE create method for add elements
 * DONE create method for search elements
 * TODO create method for delete element
 * TODO create method for modify element
 * TODO create method for calculating tree size
**/


class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    add(value) {
        const newNode = new Node(value);
        if (!this.root) {
            this.root = newNode;
            return;
        }

        let currentNode = this.root;
        while (currentNode) {
            if(newNode.value < currentNode.value) {
                if(!currentNode.left) {
                    currentNode.left = newNode;
                    return;
                }
                currentNode = currentNode.left
            } else {
                if(!currentNode.right) {
                    currentNode.right = newNode;
                    return;
                }
                currentNode = currentNode.right;
            }
        }
    }

    preOrder(node, callback) {
        if(!node) {
            return;
        }

        if (callback) {
            callback(node);
        }

        this.preOrder(node.left, callback);
        this.preOrder(node.right, callback);

    }

    inOrder(node, callback) {
        if(!node) {
            return;
        }

        this.inOrder(node.left, callback);
        if (callback) {
            callback(node);
        }
        this.inOrder(node.right, callback);
    }

    postOrder(node, callback) {
        if(!node) {
            return;
        }

        this.postOrder(node.left, callback);
        this.postOrder(node.right, callback);

        if (callback) {
            callback(node);
        }
    }

    traversDFS(callback, method) {
        if (method === 'preOrder') {
            return this.preOrder(this.root, callback);
        }
        if (method === 'inOrder') {
            return this.inOrder(this.root, callback);
        }

        return this.postOrder(this.root, callback);
    }

    traversBFS(callback) {
        const queue = [this.root];
        while (queue.length) {
            const node = queue.shift();
            callback(node);

            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }
    }

    remove(value) {
        this.root = this.removeNode(this.root, value);
    }

    removeNode(current, value) {
        // base case, if the tree is empty
        if(current === null) return current
        // case: value is the same as current's value, this is the node to be deleted
        if (value === current.value) {
            // case 1 and 2, node without child or with one child
            if (current.left === null && current.right === null){
                return null
            }else if(current.left === null){
                return current.right
            }else if(current.right === null){
                return current.left
            }else{
                //case: node with two children, get the inorder successor smallest in the right subtree
                let tempNode = this.findSmallestNode(current.right)
                current.value = tempNode.value
                // delete the in order successor
                current.right = this.removeNode(current.right, tempNode.value)
                return current
            }
            // recur down the tree
        }else if(value < current.value) {
            current.left = this.removeNode(current.left, value)
            return current
        }else{
            current.right = this.removeNode(current.right, value)
            return current
        }
    }
    /// helper function to find the smallest node
    findSmallestNode(node) {
        while(!node.left === null)
            node = node.left

        return node
    }

    find(value){
        if(!this.root) return false

        let current = this.root
        let found = false
        while(current && !found){
            if(value < current.value){
                current = current.left
            } else if(value > current.value){
                current = current.right
            } else {
                found = current
            }
        }
        if(!found) return undefined;
        return found
    }

}

const myTree= new BinaryTree();
myTree.add(8);
myTree.add(7);
myTree.add(9);
myTree.add(5);
myTree.add(10);
myTree.add(20);
myTree.add(6);
myTree.add(2);
myTree.add(11);
// console.log(myTree.find(20));
console.log(myTree.remove(8));
console.log(myTree);
//console.log(myTree);
// myTree.traversDFS((node) => {
//     console.log(node.value);
// }, 'inOrder' );