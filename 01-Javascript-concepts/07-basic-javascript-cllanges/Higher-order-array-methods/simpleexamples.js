const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map((num) => {
  return num * 2;
});

// fillters

const evenNumbers = numbers.filter((num) => num % 2 === 0);

const sum = numbers.reduce((acc, currVal) => {
  return acc + currVal;
}, 0);

// console.log(doubledNumbers, evenNumbers, sum);
// forEach
// numbers.forEach((num) => console.log(num));

const foundNumber = numbers.find((num) => num > 2);
console.log(foundNumber);

const hasEvenNumber = numbers.some((n) => n % 2 === 0);
console.log(hasEvenNumber);

const allNumsGreterTHanZero = numbers.every((n) => n > 0);

console.log(allNumsGreterTHanZero);
