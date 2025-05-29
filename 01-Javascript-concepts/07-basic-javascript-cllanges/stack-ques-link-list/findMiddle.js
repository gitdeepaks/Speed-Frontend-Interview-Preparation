import { LinkedList } from './customLinkedList.js';

function findMiddle(list) {
  let slow = list.head;
  let fast = list.head;

  let prev = null;

  while (fast !== null && fast.next !== null) {
    fast = fast.next.next;
    prev = slow;

    slow = slow.next;
  }

  if (fast === null) {
    return prev.next;
  } else {
    return slow;
  }
}

const list = new LinkedList();

list.add('a');
list.add('b');
list.add('c');
list.add('d');
list.add('e');
list.add('f');

const res = findMiddle(list);

console.log(res.data);
