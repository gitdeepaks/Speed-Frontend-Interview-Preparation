const items = ['books', 'table', 'chair', 'ball'];

const users = [
  {
    name: 'Steve',
  },
  {
    name: 'Kate',
  },
  {
    name: 'Deepak',
  },
  {
    name: 'Antonio',
  },
];
for (let i = 0; i < items.length; i++) {
  console.log(items[i]);
}

for (const item of items) {
  console.log(item);
}

for (const user of users) {
  console.log(user.name);
}

// Loop over strings

const str = 'Hello There';

for (const letter of str) {
  console.log(letter);
}

// Loop over Maps

const map = new Map();

map.set('name', 'Jonny');
map.set('age', 25);

for (const [key, value] of map) {
  console.log(key, value);
}
