// what is map()
const numsArray = [1, 2, 3, 4];

const multyplyThree = numsArray.map((num, index, arr) => num * 3 + index);

// console.log(multyplyThree);

// what is filter

const moreThanTwo = numsArray.filter((num) => num > 2);

// console.log(moreThanTwo);

//What is reduce()

const sum = numsArray.reduce((acc, currVal, index, arr) => {
  return acc + currVal;
}, 0);

// console.log(sum);

// polyfill for map
// Array.map((num,i,arr)=>{})
Array.prototype.myMap = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    //this is referencing to the parent Array
    temp.push(cb(this[i], i, this));
  }
  return temp;
};

const testMapArr = [2, 3, 4, 5];

const testMymap = testMapArr.myMap((num) => {
  return num * 5;
});

console.log(testMymap);

// Polyfill filter

Array.prototype.myFilter = function (cb) {
  let temp = [];
  // for (let i = 0; i < this.length; i++) {
  //   if (cb(this[i], i, this)) {
  //     temp.push(this[i]);
  //   }
  // }

  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      temp.push(this[i]);
    }
  }

  return temp;
};

const filterArr = [4, 5, 6, 7, 8];

const testMyFilter = filterArr.myFilter((num) => {
  return num > 4;
});

console.log(testMyFilter);

// Reduce polyfill

// arr.reduce((acc, currVal, i, arr) => {}, initialValue);

Array.prototype.myReduce = function (cb, initialValue) {
  var accumulator = initialValue;

  for (let i = 0; i < this.length; i++) {
    accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i];
  }
  return accumulator;
};

const redArr = [6, 7, 8, 9];

const testmyReduce = redArr.myReduce((acc, currVal, i, arr) => {
  return acc + currVal;
}, 0);

console.log(testmyReduce);

let students = [
  { name: 'Deepak', age: 21, marks: 80 },
  { name: 'Dee', age: 19, marks: 84 },
  { name: 'Suppy', age: 20, marks: 95 },
];

const details = students.filter((s) => s.marks > 90);
const detailsRoll = students.filter((s) => s.marks > 90 && s.age < 20);

console.log(details);
console.log(detailsRoll);

const totalmarks = students.reduce((acc, curr) => acc + curr.marks, 0);
console.log(totalmarks);

const namesMoreMarks = students.filter((s) => s.marks > 85).map((s) => s.name);

console.log(namesMoreMarks);

const totalmarks2 = students
  .map((s) => {
    if (s.marks < 50) {
      s.marks += 20;
    }

    return s;
  })
  .filter((s) => s.marks > 85)
  .reduce((acc, curr) => acc + curr.marks, 0);

console.log(totalmarks2);
