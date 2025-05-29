import { DoublyLinkedList } from './customDoublyLinkedList.js';

function findPairSumDoublyLinedList(nums, targetSum) {
  const seen = new DoublyLinkedList();

  for (const num of nums) {
    const diff = targetSum - num;

    if (seen.contains(diff)) {
      return [diff, num];
    }

    seen.append(num);
  }

  return null;
}

const num = [2, 6, 12, 11, 6, 10];

const targetSum = 21;

const test = findPairSumDoublyLinedList(num, targetSum);
console.log(test);
