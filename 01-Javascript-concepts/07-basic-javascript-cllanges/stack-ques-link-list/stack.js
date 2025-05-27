class Stack {
  constructor() {
    this.maxSize = 100;
    this.stack = [];
    this.top = -1;
  }

  push(value) {
    if (this.isFull()) {
      return false;
    }

    this.top++;
    this.stack[this.top] = value;
    return true;
  }

  pop() {
    if (this.isEmpty()) {
      return null;
    }

    const value = this.stack[this.top]; // ✅ Get the value first
    this.top--; // ✅ Then decrement top
    return value; // ✅ Return the correct value
  }

  isEmpty() {
    return this.top === -1;
  }

  peek() {
    // ✅ Fixed typo: "peak" → "peek"
    if (this.isEmpty()) {
      return null;
    }

    return this.stack[this.top];
  }

  isFull() {
    return this.top === this.maxSize - 1;
  }

  size() {
    return this.top + 1;
  }

  // Helper method to see all elements
  display() {
    if (this.isEmpty()) {
      console.log('Stack is empty');
      return;
    }
    console.log('Stack elements:', this.stack.slice(0, this.top + 1));
  }
}

// Export the class so other files can use it
module.exports = Stack;

// Test the implementation
const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);

console.log('Popped:', stack.pop()); // Should output: 3
console.log('Peek:', stack.peek()); // Should output: 2
console.log('Stack:', stack);
stack.display(); // Should show: [1, 2]
