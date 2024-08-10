module.exports = function check(str, bracketsConfig) {
  let result = true;
  bracketsConfig.flat().join(', ');
  for (let i = 0; i < str.length; i ++) {
    if(!bracketsConfig.includes(str[i])) {
      result = false;
    }
  }
  return result;
}
