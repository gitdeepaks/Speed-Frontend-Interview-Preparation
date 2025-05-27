function anagramGrouping(words) {
  const anagramGroups = new Map();

  for (const word of words) {
    const sortedCharts = word.split('').sort('').join('');

    if (anagramGroups.has(sortedCharts)) {
      anagramGroups.get(sortedCharts).push(word);
    } else {
      anagramGroups.set(sortedCharts, [word]);
    }
  }

  return Array.from(anagramGroups, values());
}
