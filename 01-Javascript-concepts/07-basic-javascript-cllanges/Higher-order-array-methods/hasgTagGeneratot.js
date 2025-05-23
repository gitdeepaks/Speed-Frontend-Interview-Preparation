// function hashTagGenerator(str) {
//   if (str.trim() === '') {
//     return false;
//   }

//   const words = str.trim().split(/\s+/); //for white spaces

//   const capitalizeWords = words.map(
//     (word) => word.charAt(0).toUpperCase() + word.slice(1)
//   );

//   const hashTag = '#' + capitalizeWords.join('');

//   return hashTag.length > 140 ? false : hashTag;
// }
function hashTagGenerator(str) {
  const hashTag = str.split(' ').reduce((tag, word) => {
    return tag + word.charAt(0).toUpperCase() + word.subString(1);
  }, '#');

  return hashTag.length === 1 || hashTag.length > 140 ? false : hashTag;
}
