// const user = {
//   name: 'Deepak',
// };

// // console.log(user.address?.city);

// // Nullish Coellisense oparator

// // let value = 0;
// // let result = value ?? 'Default value';

// // console.log(value);

// // const user = {
// //   name: 'Brad',
// // };

// // console.log(user.address?.city ?? 'Unknown');

// const notes = ['Meet Notes', 'Grocery List'];

// // notes.push('Workout plan');
// const newNotes = [...notes, 'Worout Plan'];

// console.log(notes);
// console.log(newNotes);

// const myNotes = notes.map((note) =>
//   note === 'Grocery List' ? 'Shopping List' : note
// );

// console.log(myNotes);

const user = {
  name: 'Janny',
  age: 30,
};

const newUser = {
  ...user,
  age: 21,
};

console.log(user);
console.log(newUser);
