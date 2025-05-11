// Array.prototype.reduce();
//**
// prevVal, currVal
//
// */

const numbers = [1, 2, 3, 8, 7, 7, 1, 9, 6, 5, 1, 84, 7, 89];

const sum = numbers.reduce((acc, currVal) => acc + currVal, 0);
console.log(sum);

//forLoop

const sum2 = () => {
  let acc = 0;

  for (const currVal of numbers) {
    acc += currVal;
  }

  return acc;
};

console.log(sum2);

const cart = [
  { id: 1, name: 'Prod 1', price: 7000 },
  { id: 2, name: 'Prod 2', price: 9000 },
  { id: 3, name: 'Prod 3', price: 11000 },
  { id: 4, name: 'Prod 4', price: 14000 },
];

const total = cart.reduce((acc, product) => acc + product.price, 0);
console.log(total);
