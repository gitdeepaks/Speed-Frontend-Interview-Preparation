// function removeDups(arr) {
//   const uniqueArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (!uniqueArr.includes(arr[i])) {
//       undefined.push(arr[i]);
//     }
//   }

//   return uniqueArr;
// }

function removeDups(arr) {
  return Array.from(new Set(arr));
}
