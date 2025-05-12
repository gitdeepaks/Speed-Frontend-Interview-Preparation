let x;

const fruits = ['aaple', 'pear', 'orange'];

const berries = ['strawberry', 'blueberry', 'resberry '];

// fruits.push(berries);

const allFruits = [fruits, berries];
x = allFruits[1][0];

x = fruits.concat(berries);
//Spread Operator

x = [...fruits, ...berries];

//Flatten the Arrays
const arr = [1, 2, [3, 5, [6, 7]]];

x = arr.flat().flat();

//static metods on Array objects

x = Array.isArray('fruits');

x = Array.from('12345');

const a = 1;
const b = 2;
const c = 3;

x = Array.of(a, b, c);

console.log(x);
