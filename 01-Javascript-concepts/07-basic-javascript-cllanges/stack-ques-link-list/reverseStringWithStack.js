const Stack = require('./stack');

function reverseStringUsingStack(str) {
  const stack = new Stack();

  for (let i = 0; i < str.length; i++) {
    stack.push(str[i]);
  }

  let reveresString = '';

  while (!stack.isEmpty()) {
    reveresString += stack.pop();
  }

  return reveresString;
}

const res = reverseStringUsingStack('Hello there!');

console.log(res);
