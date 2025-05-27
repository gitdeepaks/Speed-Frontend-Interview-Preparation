import { HashTable } from './customHashTable';

function wordInstanceCounter(str: string, word: string) {
  const words = str.toLocaleLowerCase().split(/\W+/);
  const wordFrequency = new HashTable();

  const targetWord = word.toLocaleLowerCase();

  let count: number = 0;

  for (const currentWord of words) {
    if (currentWord === '') continue;
    let currentCount = wordFrequency.get(currentWord);
    if (typeof currentCount !== 'number') {
      currentCount = 0;
    }
    wordFrequency.set(currentWord, currentCount + 1);
    if (currentWord === targetWord) {
      const value = wordFrequency.get(currentWord);
      count = typeof value === 'number' ? value : 0;
    }
  }

  return count;
}
