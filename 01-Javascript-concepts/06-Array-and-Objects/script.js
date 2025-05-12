// Creating an Array

let x;
const fruits = new Array('apple', 'orange', 'banana', 'grapes');

const numbers = [20, 30, 40, 50, 60, 70, 80, 90, 100];

x = numbers[0];
x = numbers[0] + numbers[3];
x = `My Favourate fruits is ${fruits[1]}`;

x = numbers.length;

fruits[2] = 'pear';
x = fruits;

fruits[fruits.length] = 'blueberry';
fruits[fruits.length] = 'peach';

console.log(x);
