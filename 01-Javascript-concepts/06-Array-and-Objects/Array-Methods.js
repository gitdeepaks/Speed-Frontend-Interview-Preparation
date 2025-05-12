let x;

const arr = [25, 55, 66, 88, 99, 77];

//Push -

// arr.push(100);
// arr.pop();

// //add element at first place of Array
// arr.unshift(9);
// arr.shift();
// arr.reverse();

x = arr.includes(200);

x = arr.indexOf(88);

//Slice and Splice
x = arr.slice(1, 4);
// x = arr.splice(1, 5);

// x = arr.splice(3, 1);

//chain methode
x = arr.slice(1, 4).reverse().toString().charAt(0);
console.log(x);
