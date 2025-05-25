function maxSubArrayLinear(arr, k) {
  let maxSum = 0;
  let currentSum = 0;

  for (let i = 0; i < k; i++) {
    maxSum += arr[i];
  }

  currentSum = maxSum;

  for (let j = k; j < arr.length; j++) {
    currentSum = currentSum - arr[i - k] + arr[i];

    maxSum = Math.max(maxSum, currentSum);
  }
  return maxSum;
}
