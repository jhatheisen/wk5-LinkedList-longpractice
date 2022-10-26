// Node class is implemented for you, no need to look for bugs here!
class DoublyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    addToHead(val) {
        // There are bugs in this method! Fix them!!!

        // Add node of val to head of linked list
        let newNode = new DoublyLinkedNode(val);
        this.length++;
        if (!this.head) {
          this.head = newNode;
          this.tail = newNode;
        } else {
          newNode.next = this.head;
          this.head.prev = newNode;
          this.head = newNode;
        }
        // Write your hypothesis on the time complexity of this method here
        // O(1), constant operations
    }

    addToTail(val) {
        // Add node of val to tail of linked list

        let newNode = new DoublyLinkedNode(val);
        this.length++;
        if (!this.tail) {
          this.head = newNode;
          this.tail = newNode;
        } else {
          newNode.prev = this.tail;
          this.tail.next = newNode;
          this.tail = newNode;
        }
        // Write your hypothesis on the time complexity of this method here
        // O(1), constant operations
    }

    removeFromHead() {
        // Remove node at head
        if (!this.head) return undefined;
        this.length--;
        let removed = this.head.value;
        if (!this.head.next) {
          this.head = null;
        } else {
          this.head = this.head.next;
          this.head.prev = null;
        }
        return removed;
        // Write your hypothesis on the time complexity of this method here
    }

    removeFromTail() {
        // Remove node at tail

        if (!this.tail) return undefined;
        this.length--;
        let removed = this.tail.value;
        if (!this.tail.prev) {
          this.tail = null;
        } else {
          this.tail = this.tail.prev;
          this.tail.next = null;
        }
        return removed;

        // Write your hypothesis on the time complexity of this method here
    }

    peekAtHead() {
        // Return value of head node

        if (!this.head) return undefined;
        return this.head.value;

        // Write your hypothesis on the time complexity of this method here
        // O(1) constant 1 operation
    }

    peekAtTail() {
        // Return value of tail node

        if (!this.tail) return undefined;
        return this.tail.value;

        // Write your hypothesis on the time complexity of this method here
    }
}

module.exports = {
    DoublyLinkedList,
    DoublyLinkedNode
}
