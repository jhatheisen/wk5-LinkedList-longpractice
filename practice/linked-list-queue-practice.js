// Basic implementation of Nodes and Linked List for you to use

class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor(head = null) {
        this.head = head;
        this.length = 0;
    }

    addToTail(val) {
        let newNode = new SinglyLinkedNode(val);
        this.length++;
        if (!this.head) {
            this.head = newNode;
            return this.head;
        }

        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }

        curr.next = newNode;
        return this.head;
    }

    listLength() {
        // Returns the length of the list
        // Implement in O(n)
        let curr = this.head;
        if (!curr) return 0;
        let l = 1;
        while(curr.next) {
          l++
          curr = curr.next;
        }
        return l;

        // O(1)
        return this.length;
    }

    sumOfNodes() {
        // Returns the sum of the values of all the nodes

        let curr = this.head;
        let sum = curr.value;
        while (curr.next) {
          // go next val then add
          curr = curr.next;
          sum += curr.value;

        }
        return sum;
        // Write your hypothesis on the time complexity of this method here
        // O(n), have to iterate through array to add all
    }

    averageValue() {
        // Returns the average value of all the nodes

        let curr = this.head;
        let sum = curr.value;
        while (curr.next) {
          // go next val then add
          curr = curr.next;
          sum += curr.value;

        }
        return sum / this.length;

        // Write your hypothesis on the time complexity of this method here
        // O(n), iterate through all
    }

    findNthNode(n) {
        // Returns the node at the nth index from the head

        let curr = this.head;
        // goes next n times, then returns
        for (let i = 0; i < n; i++) {
          curr = curr.next;
        }
        return curr;

        // Write your hypothesis on the time complexity of this method here
        // worst case O(n), best O(1), depends on how far need to iterate
    }


    findMid() {
        // Returns the middle node
        // Implement this as a singly linked list then as a doubly linked list
            // How do the implementation for singly and doubly vary if at all?
            // no difference

        let curr = this.head;
        let middle = this.length/2;
        middle % 1 !== 0 ? middle = Math.floor(middle) : middle--;
        for (let i = 0; i < middle; i++) {
          curr = curr.next;
        }
        return curr;

        // Write your hypothesis on the time complexity of this method here

        // O(n/2) === O(n), iterate based on size of arr
    }

    addToHead(val) {
      let newNode = new SinglyLinkedNode(val);
        this.length++;
        if (!this.head) {
          this.head = newNode;
        } else {
          newNode.next = this.head;
          this.head = newNode;
        }
        return this;
    }

    reverse() {
        // Returns a new reversed version of the linked list
        // Try implementing it by returning a new linked list then returning
        // the original linked list reversed in place
            // Does the time complexity change? How about space complexity?

        let newList = new SinglyLinkedList();
        let curr = this.head;
        newList.addToHead(curr.value);
        while (curr.next) {
          curr = curr.next;
          newList.addToHead(curr.value)
        }
        return newList;
        // Write your hypothesis on the time complexity of this method here
        // O(n), iterating through list and making new one at same time, not iterating through 2
        // O(n), space, need to make new one
    }

    reverseInPlace() {
        // Reverses the linked list in-place
        let midI = Math.floor(this.length / 2);
        // console.log(`mid: ${midI}`);
        let first = 0
        let final = this.length - 1;
        while (first < midI) {
          let curr = this.findNthNode(first);
          let currVal = curr.value;
          let last = this.findNthNode(final);
          let lastVal = last.value;
          first++;
          final--;
          // console.log(`first: ${curr.value}`);
          // console.log(`last: ${last.value}`);
          last.value = currVal;
          curr.value = lastVal;
        }
        // Write your hypothesis on the time complexity of this method here
        // O(n^2) prob, have to get sort through whole array each time untill at middle
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

class DoublyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor(head = null) {
        this.head = head;
        this.tail = head;
        this.length = 0;
    }

    addToTail(val) {
        let newNode = new DoublyLinkedNode(val);
        this.length++;
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return this.head;
        }

        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;

        return this.head;
    }

    findMid() {
        // Returns the middle node
        // Implement this as a singly linked list then as a doubly linked list
            // How do the implementation for singly and doubly vary if at all?

        let curr = this.head;
        let middle = this.length/2;
        middle % 1 !== 0 ? middle = Math.floor(middle) : middle--;
        for (let i = 0; i < middle; i++) {
          curr = curr.next;
        }
        return curr;

        // Write your hypothesis on the time complexity of this method here
    }

    reverse() {
        // Returns a new reversed version of the linked list

        let newList = new SinglyLinkedList();
        let curr = this.head;
        newList.addToHead(curr.value);
        while (curr.next) {
          curr = curr.next;
          newList.addToHead(curr.value)
        }
        return newList;

        // Write your hypothesis on the time complexity of this method here
    }

    findNthNode(n) {
        // Returns the node at the nth index from the head

        let curr = this.head;
        // goes next n times, then returns
        for (let i = 0; i < n; i++) {
          curr = curr.next;
        }
        return curr;

        // Write your hypothesis on the time complexity of this method here
        // worst case O(n), best O(1), depends on how far need to iterate
    }

    reverseInPlace() {
        // Reverses the linked list in-place

        let midI = Math.floor(this.length / 2);
        let first = 0
        let final = this.length - 1;
        while (first < midI) {
          let curr = this.findNthNode(first);
          let currVal = curr.value;
          let last = this.findNthNode(final);
          let lastVal = last.value;
          first++;
          final--;
          last.value = currVal;
          curr.value = lastVal;
        }

        // Write your hypothesis on the time complexity of this method here
        // O(n), because the array is iterated through n / 2 times, where n is length of array, so O(n)
    }

}

module.exports = {
    SinglyLinkedNode,
    SinglyLinkedList,
    DoublyLinkedNode,
    DoublyLinkedList
}
