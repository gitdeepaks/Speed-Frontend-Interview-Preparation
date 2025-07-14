// // //expensive calculation for JS usin memoization
// // function slowAdd(a, b) {
// //   for (let i = 0; i < 1e8; i++) {
// //     //1e8 = 1* 10^8
// //   }
// //   return a + b;
// // }
// // console.time('No Memo');
// // console.log(slowAdd(6, 10));
// // console.timeEnd('No memo again');

// // console.time('No Memo');
// // console.log(slowAdd(6, 10));
// // console.timeEnd('No memo again');

// function memoAdd() {
//   const cache = {};

//   return function (a, b) {
//     const key = `${a}_ ${b}`;

//     if (cache[key]) {
//       return cache[key];
//     }
//     for (let i = 0; i < ie8; i++) {}
//     const res = a + b;
//     cache[key] = res;
//     return res;
//   };
// }

// const add = memoAdd();

// console.time('with Memo');
// console.log(memoAdd(6, 10));
// console.timeEnd('No memo again');

// console.time('with Memo');
// console.log(memoAdd(6, 10));
// console.timeEnd('No memo again');

// const myName = 'John';
// const age = 30;

// const greet = `Hello, my name is ${myName} and my age is ${age}`;

// console.log(greet);

const num = 2;

const message = num % 2 === 0 ? 'Even Number' : 'Odd Number';

console.log(message);
