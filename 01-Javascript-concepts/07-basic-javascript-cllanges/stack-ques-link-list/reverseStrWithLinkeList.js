import { LinkedList } from './customLinkedList.js';

function reverseStringWithLinkedList(str) {
  const list = new LinkedList();

  for (let i = str.length - 1; i >= 0; i--) {
    list.add(str[i]);
  }

  let reversedString = '';

  let current = list.head;

  while (current !== null) {
    reversedString += current.data;

    current = current.next;
  }

  return reversedString;
}

const test = reverseStringWithLinkedList('hello there');

console.log(test);
