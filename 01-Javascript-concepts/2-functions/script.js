// const square = function (num) {
//   return num * num;
// };

// First class functions

// function square(num) {
//   return num * num;
// }

// function displaySquare(fn) {
//   console.log('Square is' + fn(5));
// }

// displaySquare(square);

//what is IIFE ?
// (function square(num) {
//   return num * num;
// })(5);

(function (x) {
  return (function (y) {
    console.log(x);
  })(2);
})(1);

// Spread vs const

function multuiply(...nums) {
  console.log(nums[0] * nums[1]);
}

// callback function is when the function is called inside the functions
const add = (fNum, secNum) => {
  return fNum * secNum;
};
