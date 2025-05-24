function recursivePower(base, exponent) {
  if (exponent === 0) {
    return 1;
  }

  return base * recursivePower(base, exponent - 1);
}
