const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let str = ''+n,
      max = parseInt(str.slice(1));
  for (let i=1; i<str.length; i++) {
    let s1 = str.slice(0,i) + str.slice(i+1);
    if (parseInt(s1) > max) {max = parseInt(s1)};
  }
  return max;
}

module.exports = {
  deleteDigit
};
deleteDigit(452);