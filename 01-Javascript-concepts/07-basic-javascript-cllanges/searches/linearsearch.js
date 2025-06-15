const array = [4, 9, 2, 0, 10, 23];

function linear(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

console.log(linear(array, 0));
