function titleCase(str) {
  const splitChars = str.toLowerCase().split(' ');
  for (let i = 0; i < splitChars.length; i++) {
    splitChars[i] = splitChars[i][0].toUpperCase() + splitChars[i].slice(1);
  }

  return splitChars.join(' ');
}
