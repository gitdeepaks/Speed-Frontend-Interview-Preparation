const nameMap = new Map([
  ['1', 'John'],
  ['2', 'Jack'],
  ['3', 'Jill'],
]);

const myfunction = () => {};
const myObj = {};

const map2 = new Map([
  ['name', 'John'],
  [1, 'number one'],
  [true, 'really true'],
  [null, 'null'],
  [myfunction, 'my function'],
  [myObj, 'my object'],
]);

// get Values

console.log(nameMap.get(1));
