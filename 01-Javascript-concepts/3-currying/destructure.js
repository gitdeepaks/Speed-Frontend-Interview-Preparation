const notes = [{ node1: 'ola', node2: 'ola2', node3: 'ola3', node4: 'ola4' }];

const [firstNode, secondNotes, ...otherNotes] = notes;

console.log(firstNode);

console.log(...otherNotes);

const user = {
  name: 'Ben',
  address: { city: 'Boston', state: 'MA' },
};

const {
  name,
  address: { city, state },
} = user;
