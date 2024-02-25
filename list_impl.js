class List {
    constructor(){
        this.items = [];
    }

    //add element to the end of the list
    add(element) {
        this.items.push(element);
    }

    // Remove the first occurrence of a specific element from the list
    remove(element) {
        const index = this.items.indexOf(element);
        if (index !== -1) {
            this.items.splice(index, 1);
        }
    }

    // Modify the value of a specific element in the list
    modify(index, newValue) {
        if (index >= 0 && index < this.items.length) {
            this.items[index] = newValue;
        }
    }

    // Get the length of the list
    size() {
        return this.items.length;
    }

    // Check if the list is empty
    isEmpty() {
        return this.size() === 0;
    }

    // Get all elements of the list
    getAll() {
        return this.items;
    }

    // Clear all elements from the list
    clear() {
        this.items = [];
    }
}

// Example usage:
const myList = new List();
myList.add(1);
myList.add(2);
myList.add(3);
myList.add(4);
myList.add(5);
myList.add(6);
myList.add(7);

console.log("List:", myList.getAll()); // Output: List: [1,2,3,4,5,6,7]

myList.modify(4, 99);
console.log("List after modification 4:", myList.getAll()); // List after modification 4: [1, 2, 3, 4, 99, 6, 7]

myList.remove(4);
console.log("List after removing 4:", myList.getAll()); // Output: List after removing 4: [1,2,3,5,6,7]

console.log("List size:", myList.size()); // Output: List size: 6

console.log("Is the list empty?", myList.isEmpty()); // Output: Is the list empty? false

myList.clear();
console.log("List after clearing:", myList.getAll()); // Output: List after clearing: []