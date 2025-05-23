// function countOccurences(str, char) {
//   let count = 0;

//   for (let i = 0; i <= str.length; i++) {
//     if (str[i] === char) {
//       count++;
//     }
//   }

//   return count;
// }

const countIccur = (str, char) => str.split(char).length - 1;
