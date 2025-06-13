// function fun(num) {
//   //base case

//   if (num <= 0) {
//     return;
//   }

//   debugger;

//   console.log(num);

//   num = num - 1;

//   fun(num);
// }

// let a = 10;

// fun(a);

// function printnToOne(n) {
//   if (n < 1) return;

//   console.log(n);

//   printnToOne(--n);
// }

let n = 5;
function printOneToN(x) {
  if (x > n) return;

  console.log(x);

  printOneToN(++x);
}

// printnToOne(5);
printOneToN(1);
