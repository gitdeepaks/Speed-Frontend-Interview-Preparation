// Array.prototype.reduce();
//**
// prevVal, currVal
//
// */

const numbers = [1, 2, 3, 8, 7, 7, 1, 9, 6, 5, 1, 84, 7, 89];

const sum = numbers.reduce((acc, currVal) => acc + currVal, 0);
console.log(sum);

//forLoop

const sum2 = () => {
  let acc = 0;

  for (const currVal of numbers) {
    acc += currVal;
  }

  return acc;
};

console.log(sum2);

const cart = [
  { id: 1, name: 'Prod 1', price: 7000 },
  { id: 2, name: 'Prod 2', price: 9000 },
  { id: 3, name: 'Prod 3', price: 11000 },
  { id: 4, name: 'Prod 4', price: 14000 },
];

const total = cart.reduce((acc, product) => acc + product.price, 0);
console.log(total);

//challange 1
const people = [
  {
    firstName: 'Alice',
    lastName: 'Johnson',
    email: 'alice.johnson@example.com',
    phone: '+1-555-123-4567',
    age: 28,
  },
  {
    firstName: 'Bob',
    lastName: 'Smith',
    email: 'bob.smith@example.com',
    phone: '+1-555-987-6543',
    age: 34,
  },
  {
    firstName: 'Charlie',
    lastName: 'Brown',
    email: 'charlie.brown@example.com',
    phone: '+1-555-555-1212',
    age: 22,
  },
  {
    firstName: 'Diana',
    lastName: 'Evans',
    email: 'diana.evans@example.com',
    phone: '+1-555-222-3333',
    age: 41,
  },
  {
    firstName: 'Ethan',
    lastName: 'Williams',
    email: 'ethan.williams@example.com',
    phone: '+1-555-444-5555',
    age: 30,
  },
  {
    firstName: 'Fiona',
    lastName: 'Garcia',
    email: 'fiona.garcia@example.com',
    phone: '+1-555-666-7777',
    age: 27,
  },
  {
    firstName: 'George',
    lastName: 'Miller',
    email: 'george.miller@example.com',
    phone: '+1-555-888-9999',
    age: 36,
  },
  {
    firstName: 'Hannah',
    lastName: 'Lee',
    email: 'hannah.lee@example.com',
    phone: '+1-555-101-2020',
    age: 25,
  },
  {
    firstName: 'Ivan',
    lastName: 'Petrov',
    email: 'ivan.petrov@example.com',
    phone: '+1-555-303-4040',
    age: 32,
  },
  {
    firstName: 'Julia',
    lastName: 'Martinez',
    email: 'julia.martinez@example.com',
    phone: '+1-555-505-6060',
    age: 29,
  },
];
//challange 2
const youngPeople = people
  .filter((p) => p.age <= 25)
  .map((p) => {
    return {
      name: `${p.firstName} ${p.lastName}`,
      email: p.email,
    };
  });

console.log(youngPeople);

const numbers2 = [2, -30, 50, -12, -9, 7, 10, 18];

const positive = numbers2.filter((n) => n > 0).reduce((acc, curr) => acc + curr, 0);
console.log(positive);

// Challange 3

const words = ['coder', 'programmer', 'developer'];

const cWOrds = words.map((w) => w[0].toUpperCase() + w.slice(1, w.length));
console.log(cWOrds);
