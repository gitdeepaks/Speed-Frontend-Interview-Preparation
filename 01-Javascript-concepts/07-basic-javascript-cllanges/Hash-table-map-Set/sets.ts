const nameSet = new Set(['john', 'jane', 'joe']);

// Add to set

nameSet.add('Jack');
nameSet.add('Jill');

//check for values

console.log(nameSet.has('Jack'));
console.log(nameSet.has('Deepak'));

console.log(nameSet);

// get Size

console.log(nameSet.size);

///Get Values

console.log(nameSet.values());

for (const name of nameSet) {
  console.log(name);
}

//conver to an Array

const nameArray = [...nameSet];

console.log(nameArray);

//clear the set

nameSet.clear();

console.log(nameSet.size);
