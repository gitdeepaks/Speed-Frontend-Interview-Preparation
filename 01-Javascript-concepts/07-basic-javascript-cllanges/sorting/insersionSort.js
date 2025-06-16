function insersionSort(arr) {
  let n = arr.length;
  for (let i = 1; i < n; i++) {
    let curr = arr[i];
    let prev = i - 1;

    while (arr[prev] > curr && prev >= 0) {
      arr[prev + 1] = arr[prev];
      prev--;
    }

    arr[prev + 1] = curr;
  }
  return arr;
}

const res = insersionSort([-21, 31, 23, 21, 1, 0, 9]);

console.log(`Sorted array will be-: ${res}`);
