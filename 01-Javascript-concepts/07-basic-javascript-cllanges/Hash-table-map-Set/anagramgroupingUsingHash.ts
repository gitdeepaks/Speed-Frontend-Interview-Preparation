import { HashTable } from './customHashTable';

function anagramGroupingWithHash(words: string[]) {
  // Correct generic instantiation
  const anagramGroups = new HashTable<string[]>();

  for (const word of words) {
    const sortedChars = word.split('').sort().join('');
    const group = anagramGroups.get(sortedChars);

    if (group) {
      group.push(word);
    } else {
      anagramGroups.set(sortedChars, [word]);
    }
  }
  return anagramGroups.getValues();
}
