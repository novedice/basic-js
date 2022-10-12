const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let fSum = 0;
  function intSum (num) {
    let s = ''+ num,
        sum = 0;
    for (let char of s) {
      sum = sum + parseInt(char); 
    };
    if (sum > 9) {
      intSum (sum);
    } else {
      fSum = sum;
    };
    return fSum;
  }
  return intSum(n);
}

module.exports = {
  getSumOfDigits
};
