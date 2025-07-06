// // // // const user = {
// // // //   name: 'Deepak',
// // // //   sayHi: () => {
// // // //     console.log('Hey Hi', this.name); //this points to an user object
// // // //   },
// // // // };

// // const { use } = require('react');

// // // // // user.sayHi();

// // // // // function creatrCounter() {
// // // // //   let count = 0;

// // // // //   return function () {
// // // // //     count++;

// // // // //     return count;
// // // // //   };
// // // // // }

// // // // // class Person {

// // // // Destructuring in JS

// // const User = {
// //   name: 'Deepak',
// //   age: 33,
// //   location: 'Jaipur',
// // };

// // const { name, age, location: city } = User;

// // console.log(name, age, city);

// // const { email = 'Not provided' } = User;

// // console.log(email);
// // shallow and deep copy

// // const originalObj = {
// //   name: 'Deepak',
// //   address: { city: 'Jaipur' },
// // };

// // const shallowCopy = Object.assign({}, originalObj);

// const shallowCopy = { ...originalObj };
// const deepCopy = JSON.parse(JSON.stringify(originalObj));

// originalObj.address.city = 'Gurugram';

// console.log(deepCopy.address.city);
//

const users = [
  { id: 1, name: 'John Deo', age: 21, price: 550 },
  { id: 2, name: 'John Depp', age: 23, price: 570 },
  { id: 3, name: 'John Wick', age: 25, price: 580 },
  { id: 4, name: 'John Sins', age: 27, price: 790 },
];

// const names = users.map((user) => {
//   return user.name.toUpperCase();
// });

// const age = users
//   .filter((user) => user.age < 25)
//   .map((user) => user.name.toUpperCase());

// const nameString = names.join(', ');

// const nameArr = nameString.split(', ');

// console.log(names);
// console.log(age);
// console.log(nameString);
// console.log(nameArr);

const Myname = users.find((user) => user.age < 27);

// console.log(Myname);

const totalPrice = users.reduce((sum, user) => sum + user.price, 0);

console.log(totalPrice);
