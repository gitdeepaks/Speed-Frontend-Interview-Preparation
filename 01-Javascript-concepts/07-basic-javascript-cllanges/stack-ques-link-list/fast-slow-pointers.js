let a = 1;
let b = a;
a = 2;

let c = { name: 'Jonny' };
let d = c;

c.name = 'Hola';

console.log(d.name);

function findMiddle(head) {
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    fast = fast.next.next;
    slow = slow.next;
  }

  return slow;
}
