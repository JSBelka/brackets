module.exports = function check(str, bracketsConfig) {
  const stack = [];
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (bracketsConfig[char]) {
      stack.push(char);
    } else if (Object.values(bracketsConfig).includes(char)) {
      if(stack.length === 0 || bracketsConfig[stack.pop()] !== char) {
        return false;
      }
    }
  }
  return stack.length === 0;
}
