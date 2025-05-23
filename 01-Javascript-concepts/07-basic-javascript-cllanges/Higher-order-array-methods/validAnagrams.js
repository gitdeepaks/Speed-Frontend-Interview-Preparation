function validAnagram(str1, str2) {
  const frequencyCount1 = str1.split('').reduce((acc, currVal) => {
    acc[currVal] = (acc[currVal] || 0) + 1;
    return acc;
  }, {});
  const frequencyCount2 = str2.split('').reduce((acc, currVal) => {
    acc[currVal] = (acc[currVal] || 0) + 1;
    return acc;
  }, {});

  return Object.keys(frequencyCount1).every(
    (char) => frequencyCount1[char] === frequencyCount2[char]
  );
}
