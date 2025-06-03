// class Node {
//   constructor(data) {
//     this.data = data;
//     this.left = null;
//     this.right = null;
//   }
// }

// function breadthFirstTraversal(root) {
//   if (!root) return [];

//   const result = [];
//   const queue = [];
//   queue.push(root);

// //   while (queue.length > 0) {
// //     const current = queue.shift();
// //     result.push(current.data);

// //     if (current.left) {
// //       queue.push(current.left);
// //     }
// //     if (current.right) {
// //       queue.push(current.right);
// //     }
// //   }

// //   return result;
// // }

// // let obj = {
// //   a: 7,
// //   name: 'Deepak',
// //   bool: true,
// //   arr: [6, 7, 8, 9, 10],
// // };

// let arr = [10, 4, 5, 3, 6, 2, 8, 20];

// console.log(arr.length);

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 === 1) {
//     console.log(arr[i]);
//   }
// }

// let i = 0;
// while (i < 5) {
//   console.log('Hello' + ' ' + i);

//   i++;
// }

// Search an element in an array  and reruen the index if the element is not present then retuen -1

// function searchElement(arr, x) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === x) {
//       return i;
//     }
//   }
//   return -1;
// }

// let arr = [4, 2, 4, 5, 10, 40, 90, 30, 70];

// let res = searchElement(arr, 3);

// console.log(res);

// function the that return the number of negative numbers in in an array

// function negativeNumbers(arr) {
//   let negativeCount = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < 0) {
//       negativeCount++;
//     }
//   }

//   return negativeCount;
// }

let myArray = [10, 20, 9, 8, 10, 7, 20];

// const res = negativeNumbers(myArray);
// console.log(res);

function largest(arr) {
  let largestNum = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largestNum) {
      largestNum = arr[i];
    }
  }

  return largestNum;
}

function smallest(arr) {
  let smallestNumber = Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallestNumber) {
      smallestNumber = arr[i];
    }
  }

  return smallestNumber;
}

function secondLargestNumber(arr) {
  if (arr.length < 2) {
    return null;
  }
  let firstLargest = -Infinity;
  let secondLargest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > firstLargest) {
      secondLargest = firstLargest;
      firstLargest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] !== firstLargest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
}

const largestNumberResult = largest(myArray);
const smallestNumberResult = smallest(myArray);
const secondLargestNumberResult = secondLargestNumber(myArray);

console.log({
  largestNumberResult,
  smallestNumberResult,
  secondLargestNumberResult,
});

// Loop with in Loop
for (let i = 5; i > 0; i--) {
  for (let j = 0; j < i; j++) {
    console.log(`i = ${i} , j = ${j} `);
  }
}

for (let i = 0; i < 3; i++) {
  console.log(`i= *`);
  for (let j = i; j < 5; j++) {
    console.log(` j= *`);
  }
}
