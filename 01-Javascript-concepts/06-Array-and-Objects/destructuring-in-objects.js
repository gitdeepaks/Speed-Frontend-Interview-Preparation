const firsName = 'John';
const lastName = 'Doe';
const age = 30;

const person = {
  firsName,
  lastName,
  age,
};

console.log(person.age);

//Destructuring

const todo = {
  id: 1,
  title: 'Take the count',
  users: {
    name: 'Jonny',
  },
};

const {
  id: todoId,
  title,
  // user: { name },
} = todo;
console.log(todoId);

//destructure Arrays
const numbers = [23, 45, 85, 77, 700, 96];

const [first, second, ...nums] = numbers;

console.log(first, second, nums);
