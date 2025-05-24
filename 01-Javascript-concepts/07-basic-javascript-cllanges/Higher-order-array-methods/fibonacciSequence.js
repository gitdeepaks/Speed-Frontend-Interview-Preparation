// f(n) = f(n-1)+f(n-2)
function fibonacciSequence(num) {
  // base case
  if (num < 2) {
    return num;
  }

  // recursive case
  return fibonacciSequence(num - 1) + fibonacciSequence(num - 2);
}
