module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 !== 0) return false;

  let arrayOfBrackets = bracketsConfig.map(i => i.join(''));

  for (let i = 0; i < arrayOfBrackets.length; i++) {
    if (str.includes(arrayOfBrackets[i])) {
      str = str.replace(arrayOfBrackets[i], '');
      i = -1;
    };
  }

  return !Boolean(str.length);
}