const arr = [1, 2, 3, 4, 5];

arr.reverse();
arr.push(0);
arr.unshift(6);

console.log(arr);

const arr1 = [1, 2, 4, 5, 6];
const arr2 = [2, 4, 5, 6, 7];

let nerArr = [...arr1, ...arr2].splice(4, 1);

// nerArr = arr1.slice(1, 4).concat(arr2);
console.log(nerArr);
