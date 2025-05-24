function recursiveFectorial(num) {
  if (num === 0 || num === 1) {
    return 1;
  }

  return num * recursiveFectorial(num - 1);
}
