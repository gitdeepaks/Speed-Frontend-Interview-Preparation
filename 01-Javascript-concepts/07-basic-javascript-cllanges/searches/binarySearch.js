function search(nums, target) {
  let lp = 0;
  let rp = nums.length - 1;

  while (rp >= lp) {
    let middle = Math.floor((lp + rp) / 2);

    if (target === nums[middle]) {
      return middle;
    } else if (target < nums[middle]) {
      rp = middle - 1;
    } else {
      lp = middle + 1;
    }
  }
  return -1;
}
