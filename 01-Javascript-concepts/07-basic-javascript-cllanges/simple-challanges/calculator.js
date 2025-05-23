// function calulator(a, b, oparator) {
//   let result;
//   switch (oparator) {
//     case '+':
//       result = a + b;
//     case '-':
//       result = a - b;
//     case '/':
//       result = a / b;
//     case '*':
//       result = a * b;
//     default:
//       throw new Error('Invalid Operator');
//   }
function calulator(a, b, oparator) {
  let res;

  if (oparator === '+') res(a + b);
  else if (oparator === '-') res(a - b);
  else if (oparator === '/') res(a / b);
  else if (oparator === '*') res(a * b);
  else {
    throw new error('invalid input');
  }

  return res;
}
