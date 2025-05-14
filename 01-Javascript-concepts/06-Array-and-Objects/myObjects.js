// let x;

// const person = {
//   name: 'John Doe',
//   age: 29,
//   isAdmin: true,
//   address: {
//     street: '123-boston-st',
//     city: 'NewYork',
//     state: 'NY',
//   },
//   hobbies: ['music', 'sports'],
// };

// x = person.name;
// x = person['age'];
// x = person.address.state;
// x = person.hobbies[0];

// person.name = 'Jimmy Stark';
// person['isAdmin'] = false;

// delete person.age;

// person.hasChildren = true;
// person.greet = function () {
//   console.log(`Hello my name i  ${this.name}`);
// };

// person.greet();

// const person2 = {
//   'first name': 'Deepak',
//   'last name': 'Sankhyan',
// };
// x = person2['first name'];
// console.log(x);
let x;
const todo = new Object();
todo.name = 'Buy  Cherry';
todo.completed = false;

todo.id = 1;

x = todo;
const person = {
  address: {
    coords: {
      lat: 42.4555,
      long: -71.2544554,
    },
  },
};

x = person.address.coords.lat;

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

const obj3 = { ...obj1, ...obj2 };

// Object Assign
const obj4 = Object.assign({}, obj1, obj2);

const todos = [
  { id: 1, name: 'Buy Sprouts' },
  { id: 2, name: 'Buy Speggetti' },
  { id: 3, name: 'Do Calithetics' },
  { id: 4, name: 'Take out trash' },
];

// x = todos[0].name;
x = Object.keys(todo);
x = Object.keys(todo).length;

x = Object.values(todo);
x = Object.entries(todo);

x = todo.hasOwnProperty('name');
console.log(x);
