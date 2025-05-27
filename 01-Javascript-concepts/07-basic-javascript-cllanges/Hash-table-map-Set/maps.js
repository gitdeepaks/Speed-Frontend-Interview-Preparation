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

console.log(map2.get(myfunction));
console.log(map2.get(myObj));

//set Values

nameMap.set('4', 'Mike');
nameMap.set('5', 'Sara');

console.log(nameMap);

// check values

console.log(nameMap.has(1));
console.log(nameMap.has(10));

// Remove values

nameMap.delete(1);
console.log(nameMap.has(1));
//get size
console.log(nameMap.size);

//iterating over

for (const [key, value] of nameMap) {
  console.log(key, value);
}

nameMap.forEach((value, key) =>
  console.log({
    value,
    key,
  })
);

//get Keys

// console.log(nameMap, key());

console.log(nameMap.values());

//clear map

nameMap.clear();
console.log(nameMap.size);
