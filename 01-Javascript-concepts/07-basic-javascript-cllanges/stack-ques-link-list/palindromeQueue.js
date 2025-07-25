import { Stack } from './stack';
import { Queue } from './customQueues';

function isPalindrome(str) {
  const formattedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

  const charQueue = new Queue();
  const charStack = new Stack();

  for (let i = 0; i < formattedStr.length; i++) {
    const char = formattedStr.charAt(i);

    charQueue.enqueue(char);
    charStack.push(char);
  }

  while (!charQueue.isEmpty()) {
    if (charQueue.dequeue() !== charStack.pop()) {
      return false;
    }
  }

  return true;
}

const res1 = isPalindrome('A man,a plan, a canal: Panama');
const res2 = isPalindrome('Hello');
console.log(res1, res2);
