function formatPhoneNumber(num) {
  const areaCode = num.slice(0, 3).join('');
  const preFix = num.slice(3, 6).join('');
  const lineNumber = num.slice(6).join('');

  return `(${areaCode}) ${preFix}-${lineNumber}`;
}
