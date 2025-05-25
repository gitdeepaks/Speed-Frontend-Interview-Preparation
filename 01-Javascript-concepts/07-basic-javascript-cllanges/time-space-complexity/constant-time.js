function accessElement(arr, index) {
  return arr[index];
}

const arr1 = [1, 2, 3, 4, 5];
console.time('Access Element 1');
// console.timeEnd('Access Elemet 1');
console.log(accessElement(arr1, 1));
console.timeEnd('Access Element 1');

const arr2 = Array.from(
  {
    length: 10000,
  },
  (_, index) => index + 1
);
console.log(arr2);

console.time('Access Element 2');
// console.timeEnd('Access Elemet 1');
console.log(accessElement(arr2, 1000));
console.timeEnd('Access Element 2');
