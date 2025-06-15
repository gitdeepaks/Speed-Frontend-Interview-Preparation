const newArr = [-10, -21, 11, 43, 33, 6, 8, 9, 3, 2, 4, 5, 1];

function selectionSort(arr) {
  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let min = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }

    if (min != i) {
      let temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }

  return arr;
}

const res = selectionSort(newArr);
console.log(res);
