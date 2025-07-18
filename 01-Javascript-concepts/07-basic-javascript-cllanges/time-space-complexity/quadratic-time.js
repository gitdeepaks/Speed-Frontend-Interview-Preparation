// less effciaent than linear time

function sumArray(arr) {
  let sum = 0;
  let sum2 = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];

    for (let j = 0; j < arr.length; j++) {
      sum2 += arr[j];
    }
  }

  return sum + sum2;
}

const arr1 = [1, 2, 4, 5, 6];

console.time('SumArray 1');
console.log(sumArray(arr1));
console.timeEnd('Sum Array 1');

const arr2 = Array.from({ length: 10000 }, (_, index) => index + 1);
console.time('SumArray 2');
console.log(sumArray(arr2));
console.timeEnd('Sum Array 2');
