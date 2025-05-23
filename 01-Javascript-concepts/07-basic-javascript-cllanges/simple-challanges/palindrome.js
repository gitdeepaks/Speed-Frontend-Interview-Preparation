// function isPalindrome(str) {
//   const formatedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
//   const reversedStr = formatedStr.split('').reverse().join('');

//   return formatedStr === reversedStr;
// }
function isPalindrome(str) {
  const formattedString = removeNonAlphaNumeric(str.toLowerCase());
  const reveredStr = reveredString(formattedString);

  return formattedString === reveredStr;
}

function removeNonAlphaNumeric(str) {
  let formattedString = '';

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (isAlphaNumeric(char)) {
      formattedString += char;
    }
  }

  return formattedString;
}

function isAlphaNumeric(char) {
  const code = char.charCodeAt(0);

  return (
    (code >= 48 && code <= 57) || //Numbers 0-9
    (code >= 97 && code <= 122) //Lowecase a-z
  );
}

function reveredString(str) {
  let reveresed = '';

  for (let i = str.length - 1; i >= 0; i--) {
    reveresed += str[i];
  }

  reveresed;
}
