const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let n=1;
  newStr = '';
  for (let i=0; i<str.length; i++) {
    if (str[i] == str[i+1]) {
      n+=1;
    } else {
      if (n!=1) {
        newStr = newStr + n + str[i];
        n=1;
      } else if (n == 1) {
          newStr = newStr + str[i];
        }
      }
    }
  return newStr;
}

module.exports = {
  encodeLine
};