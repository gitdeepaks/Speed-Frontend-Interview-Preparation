function countVowels(str) {
  const formMatStr = str.toLowerCase();

  let count = 0;

  for (let i = 0; i < formMatStr.length; i++) {
    const char = formMatStr[i];

    if (
      char === 'a' ||
      char === 'o' ||
      char === 'i' ||
      char === 'o' ||
      char === 'u'
    ) {
      count++;
    }
  }

  return count;
}
