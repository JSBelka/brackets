module.exports = function check(str, bracketsConfig) {
  const result = str.split('').reduce((acc, cur) => {
    Object.fromEntries(bracketsConfig[acc.at(-1)] === cur ? acc.pop() : acc.push(cur));
    return acc}, []);
  return result.length === 0;
}



