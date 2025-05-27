function logestConsecutiveNumbers(nums: number[]) {
  const numSet = new Set(nums);

  let longestSequence = 0;

  for (const num of numSet) {
    if (!numSet.has(num - 1)) {
      let currentNum: number = num;
      let currentSeq = 1;

      while (numSet.has(currentNum + 1)) {
        currentNum++;
        currentSeq++;
      }
      longestSequence = Math.max(longestSequence, currentSeq);
    }
  }

  return longestSequence;
}
