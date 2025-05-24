function recursiveNumberRange(startNum, endNum) {
  if (startNum === endNum) {
    return [startNum];
  }

  const numbers = recursiveNumberRange(startNum, endNum - 1);
  numbers.push(endNum);
  return numbers;
}
