const library = [
  {
    title: 'The Silent Patient',
    author: 'Alex Michaelides',
    status: {
      own: true,
      reading: false,
      read: true,
    },
  },
  {
    title: 'Atomic Habits',
    author: 'James Clear',
    status: {
      own: true,
      reading: true,
      read: false,
    },
  },
  {
    title: 'Sapiens',
    author: 'Yuval Noah Harari',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: 'Educated',
    author: 'Tara Westover',
    status: {
      own: true,
      reading: false,
      read: true,
    },
  },
  {
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    status: {
      own: true,
      reading: true,
      read: false,
    },
  },
];

library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;
library[3].status.read = true;
library[4].status.read = true;

//step3

const { title: firstBook } = library[0];

console.log(firstBook);

const libJSON = JSON.stringify(library);

console.log(libJSON);
