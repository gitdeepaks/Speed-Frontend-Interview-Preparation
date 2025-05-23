function highScoringWord(str) {
  const words = str.split(' ');

  const scores = words.map((word) => {
    // let score = 0;
    // for (const letter of word) {
    //   score += letter.charCodeAt(0) - 96;
    // }

    // return score;

    Array.from(word).reduce(
      (acc, currVal) => acc + currVal.charCodeAt(0) - 96,
      0
    );
  });

  const heighestScore = Math.max(...scores);

  let heightIndex = scores.indexOf(heighestScore);

  // for (let i = 0; i < scores.length; i++) {
  //   if (scores[i] > highestScore) {
  //     highestScore = scores[i];

  //     heightIndex = i;
  //   }
  // }

  return words[heightIndex];
}
