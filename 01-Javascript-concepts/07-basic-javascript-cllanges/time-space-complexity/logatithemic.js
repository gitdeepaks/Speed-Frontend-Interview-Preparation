function findPower(base, exponent) {
  // base case
  if (exponent === 0) {
    return 1;
  }

  if (exponent % 2 === 0) {
    const halfPower = findPower(base, exponent / 2);

    return halfPower * halfPower;
  } else {
    const halfPower = findPower(base, (exponent - 1) / 2);

    return base * halfPower * halfPower;
  }
}

console.time('find power 1');
findPower(2, 100);
console.timeEnd('find power 1');

console.time('find power 2');
findPower(2, 1000000000);
console.timeEnd('find power 2');
