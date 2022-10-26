// Node class is implemented for you, no need to look for bugs here!
class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    addToHead(val) {
        // Add node of val to head of linked list
        let newNode = new SinglyLinkedNode(val);
        this.length++;
        if (!this.head) {
          this.head = newNode;
        } else {
          newNode.next = this.head;
          this.head = newNode;
        }
        return this;
        // Write your hypothesis on the time complexity of this method here
        // O(1)
    }

    addToTail(val) {
        // There are bugs in this method! Fix them!!!

        // Add node of val to tail of linked list
        let newNode = new SinglyLinkedNode(val);
        this.length++;
        if (!this.head) {
          this.head = newNode;
        } else {
          let curr = this.head;
          while (curr.next) {
            curr = curr.next;
          }
          curr.next = newNode;
        }
        return this;
        // Write your hypothesis on the time complexity of this method here
        // O(n), sorting through ll to find last, depends on size
    }

    removeFromHead() {
        // Remove node at head
        if (!this.head) return undefined;

        let oldHead = this.head;
        this.head = this.head.next;
        this.length--;
        return oldHead;

        // Write your hypothesis on the time complexity of this method here
        // O(1), always changing 1 value, constant time
    }

    removeFromTail() {
        // Remove node at tail
        let curr = this.head;
        let removed = curr;
        if (!curr){
          return undefined;
        } else if (!curr.next) {
          this.head = null;
        } else {
          for (let i = 1; i < this.length - 1; i++) {
            curr = curr.next;
          }
          removed = curr.next;
          curr.next = null;
        }
        this.length--;
        return removed;
        // Write your hypothesis on the time complexity of this method here
        // worst case O(n), have to sort through array first
        // best case, O(1), no tail or first is tail;
    }

    peekAtHead() {
        // Return the value of head node
        if (!this.head) return undefined;
        return this.head.value;

        // Write your hypothesis on the time complexity of this method here
        // O(1),  just return value, constant 1 operation
    }

    print() {
        // Print out the linked list
        if (!this.head) return;
        let curr = this.head;
        while (curr.next) {
          console.log(curr.value);
          curr = curr.next;
        }
        console.log(curr.value);
        // Write your hypothesis on the time complexity of this method here
        // O(n), logs based on length of ll
    }
}

module.exports = {
    SinglyLinkedList,
    SinglyLinkedNode
}
