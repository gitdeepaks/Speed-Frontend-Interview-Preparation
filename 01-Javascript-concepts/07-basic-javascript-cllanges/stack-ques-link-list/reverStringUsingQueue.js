const { Queue } = require('./customQueues');

const reverseStringWithQueue = (str) => {
  const queue = new Queue();

  for (let i = str.length - 1; i >= 0; i--) {
    queue.enqueue(str[i]);
  }

  let reveredString = '';

  while (!queue.isEmpty()) {
    reveredString += queue.dequeue();
  }

  return reveredString;
};

const revStr = reverseStringWithQueue('Hello There!');
console.log(revStr);
