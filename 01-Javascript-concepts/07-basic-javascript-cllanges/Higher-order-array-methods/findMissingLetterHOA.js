function findMissingLetter(arr) {
  let start = arr[0].charCodeAt(0);

  const missingCharCode = arr
    .map((char) => char.charCodeAt(0))
    .find((current) => {
      if (current - start > 1) {
        return true;
      }

      start = current;

      return false;
    });

  return missingCharCode ? String.fromCharCode(missingCharCode - 1) : '';
}

function anotherMethod(arr) {
  const missingCharCode = arr.filter((char, index) => {
    if (index === 0) return false;

    const prevCharCode = arr[index - 1].charCodeAt(0);

    const currentCharCode = char.charCodeAt(0);

    return currentCharCode - prevCharCode > 1;
  })[0];

  return missingCharCode
    ? String.fromCharCode(missingCharCode.charCodeAt(0) - 1)
    : '';
}
