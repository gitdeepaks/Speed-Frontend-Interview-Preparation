const Stack = require('./stack');

function isBalanced(str) {
  const stack = new Stack();

  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(') {
      stack.push(str[i]);
    } else if (str[i] === ')') {
      if (stack.isEmpty()) {
        return false;
      }
      stack.pop();
    }
  }

  return stack.isEmpty();
}

const res1 = isBalanced('()()()');
const res2 = isBalanced('()()(');

console.log({ res1, res2 });
