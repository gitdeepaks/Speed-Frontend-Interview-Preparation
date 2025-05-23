function sumOfEvenNumbers(number) {
  const evenSq = number
    .filter((n) => n % 2 === 0)
    .map((n) => n ** 2)
    .reduce((acc, currVal) => acc + currVal, 0);

  return evenSq;
}
