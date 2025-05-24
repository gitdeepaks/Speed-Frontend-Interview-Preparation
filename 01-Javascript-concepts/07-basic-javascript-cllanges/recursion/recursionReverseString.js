function recursiveStringReverse(str) {
  if (str === '') {
    return '';
  }

  return recursiveStringReverse(str.substr(1)) + str.charAt(0);
}

const anotherMethod = (str) =>
  (str === '' ? '' : anotherMethod(str.substr())) + str.charAt(0);
