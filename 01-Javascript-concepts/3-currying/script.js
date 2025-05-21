// const test = 'string';

// // Currying

// function nam(a) {
//   return function (b) {
//     return `${a} ${b}`;
//   };
// }

// console.log(nam(5)(6));

// function name1(a) {
//   return function (b) {
//     return function (c) {
//       return `${a} ${b} ${c}`;
//     };
//   };
// }

// console.log(name1(4)(5)(8));

// // evaluate

// function evaluate(oparation) {
//   return function (a) {
//     return function (b) {
//       if (oparation === 'sum') {
//         return a + b;
//       } else if (oparation === 'mul') return a * b;
//       else if (oparation === 'divide') return a / b;
//       else if (oparation === 'substract') return a - b;
//       else return 'Invalide oparation';
//     };
//   };
// }

// sum(1)(2); //3

// function sum(a) {
//   return function (b) {
//     if (b) return add(a + b);
//     return a;
//   };
// }

// console.log(sum(5)(4)(4)(7)(9)());

// Currying vs Partial Application

// function sum(a) {
//   return function (b, c) {
//     return a + b + c;
//   };
// }

function curry(fn) {
  return function curriedFunc(...args) {
    if (args.length >= fn.length) {
      return func(...args);
    } else {
      return function (...next) {
        return curriedFunc(...args, ...next);
      };
    }
  };
}

const sum = (a, b, c, d) => a + b + c + d;

const totalSum = curry(sum);

console.log(totalSum(1)(3)(4)(5));
