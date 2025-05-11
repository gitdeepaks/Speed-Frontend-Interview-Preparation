// // for Loops
// // for ([initialExpression]; [conditionsExpression]; [incrementExpression]) {
// //   statement;
// // }

// // for (let i = 5; i <= 11; i++) {
// //   if (i === 7) {
// //     console.log('7 is my Lucky number');
// //   } else {
// //     console.log('Number' + i);
// //   }
// // }

// //Nest Loops

// // for (let i = 0; i < 100; i++) {
// //   console.log('Number' + i);

// //   for (let j = 0; j < 10; j++) {
// //     console.log(`${i} * ${j} = ${i * j}`);
// //   }
// // }

// // Loop through array
// const names = ['sam', 'deepak', 'bala', 'antonio', 'sara'];

// for (let i = 0; i < names.length; i++) {
//   if (i === 1) {
//     console.log(names[i] + ' is the best programmer in the world');
//   } else {
//     console.log(names[i]);
//   }
// }

// //Break  and continue

// // for (let i = 0; i < 20; i++) {
// //   if (i === 15) {
// //     console.log('Breaking');
// //     break;
// //   }
// //   console.log(i);
// // }
// // Continue

// for (let i = 0; i < 20; i++) {
//   if (i == 13) {
//     console.log('Skippng 13...');
//     continue;
//   }
//   console.log(i);
// }

// // while Loops

// let i = 1;

// while (i <= 20) {
//   console.log('Number' + i);
//   i++;
// }

// Loop over Array

// const arr = [10, 23, 30, 40, 50];

// while (i < arr.length) {
//   console.log(arr[i]);
//   i++;
// }

// Nesting while loops
// let i = 0;
// while (i <= 5) {
//   console.log('Number' + i);

//   let j = 1;
//   while (j <= 5) {
//     console.log(`${i} x ${j} = ${i * j}`);
//     j++;
//   }
//   i++;
// }

//do-while loops
// i = 0;
// do {
//   console.log('Number' + i);
//   i++;
// } while (i <= 20);
// {
// }

// Fizbuzz challnges

// for (let i = 0; i <= 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log('Fizbuzz');
//   } else if (i % 3 === 0) {
//     console.log('Fizz');
//   } else if (i % 5 == 0) {
//     console.log('Buzz');
//   } else {
//     console.log(i);
//   }
// }

// while Loop

let j = 1;

while (j <= 100) {
  if (j % 3 === 0 && j % 5 === 0) {
    console.log('Fizbuzz');
  } else if (j % 3 === 0) {
    console.log('Fizz');
  } else if (j % 5 == 0) {
    console.log('Buzz');
  } else {
    console.log(j);
  }
  j++;
}
