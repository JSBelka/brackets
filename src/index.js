module.exports = function check(str, bracketsConfig) {
  const stack = [];
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    const openingBracket = bracketsConfig.find(x => x[0] === char);
    if (openingBracket) {
      stack.push(char);
    } else {
      const closingBracket = bracketsConfig.find(x => x[1] === char);
      if (closingBracket && stack.pop() !== closingBracket[0]) {
        return false;
      } else if (!closingBracket) {
        return false;
      }
    }
  }
  return stack.length === 0;
}
