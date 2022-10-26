const {
  SinglyLinkedNode,
  SinglyLinkedList,
  DoublyLinkedNode,
  DoublyLinkedList
} = require('./linked-list-queue-practice');



console.log('Testing reverse in place:');
// let startTime = Date.now();
// list.reverseInPlace();
// let endTime = Date.now();
// console.log(`${endTime - startTime}`);

let increment = 100000;
for (let n = increment ; n <= 10 * increment ; n += increment) {
  let list = new SinglyLinkedList();
  for (let i = 0; i < n; i++) {
    list.addToHead(1);
  }
  startTime = Date.now();
  list.reverseInPlace();
  endTime = Date.now();

  console.log(`${endTime - startTime}`);
}
