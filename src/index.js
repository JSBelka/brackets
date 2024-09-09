module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 !== 0) {
    return false;
  }
  let newStr;
  while (str !== newStr) {
    newStr = str;
    bracketsConfig.forEach((x) => {
      str = str.replace(x.join(''), '');
    })
  }
  return str.length === 0;
}



