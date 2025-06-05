// let n = 10;

// for (let i = 0; i < n; i++) {
//   let row = '';
//   for (let j = 0; j < i + 1; j++) {
//     row += '*';
//   }
//   // console.log(row);
// }

// for (let i = 0; i <= n; i++) {
//   let row = '';
//   for (let j = 0; j <= i; j++) {
//     row += j + 1;
//   }

//   // console.log(row);
// }

// for (let i = 0; i <= n; i++) {
//   let row = '';
//   for (let j = 0; j <= n - i; j++) {
//     row += j + 1;
//   }

//   console.log(row);
// }
// for (let i = 0; i <= n; i++) {
//   let row = '';
//   for (let j = 0; j <= i; j++) {
//     row += j + 1;
//   }

//   // console.log(row);
// }

// for (let i = 0; i <= n; i++) {
//   let row = '';
//   for (let j = 0; j <= n - i; j++) {
//     row += '-';
//   }

//   // console.log(row)
// }

// for (let i = 0; i <= n; i++) {
//   let row = '';
//   for (let j = 0; j < n - (i + 1); j++) {
//     row += ' ';
//   }
//   for (let k = 0; k < i + 1; k++) {
//     row += '*';
//   }

//   console.log(row);
// }

// for (let i = 0; i <= n; i++) {
//   let row = '';
//   let switchVar = '';
//   for (let j = 0; j < i + 1; j++) {
//     row += switchVar;

//     if (switchVar === 1) {
//       switchVar = 0;
//     } else {
//       switchVar = 1;
//     }
//   }
//   console.log(row);
// }

// let switchVar = 1;
// for (let i = 0; i <= n; i++) {
//   let row = '';
//   for (let j = 0; j < i + 1; j++) {
//     row += switchVar;

//     if (switchVar === 1) {
//       switchVar = 0;
//     } else {
//       switchVar = 1;
//     }
//   }
//   console.log(row);
// }

// WAP that returns the count of digit in a number
function countDigit(num) {
  if (num == 0) {
    return 1;
  }
  num = Math.abs(num); //Math.absolute - converting negative number to positive

  let counter = 0;
  while (num > 0) {
    num = Math.floor(num / 2);
    console.log({ num });
    counter++;
    console.log({ counter });
  }

  return counter;
}

console.log(countDigit(-259));
