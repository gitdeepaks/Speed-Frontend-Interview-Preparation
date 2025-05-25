//O(n)
function sumArray(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}

const arr1 = [1, 2, 4, 5, 6];

console.time('SumArray 1');
console.log(sumArray(arr1));
console.timeEnd('Sum Array 1');

const arr2 = Array.from({ length: 10000000 }, (_, index) => index + 1);
console.time('SumArray 2');
console.log(sumArray(arr2));
console.timeEnd('Sum Array 2');
