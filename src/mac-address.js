const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  if (n.length != 17) {return false};
  let validMac = '0123456789ABCDEF';
  let arr = n.split('-');
  if (arr.length != 6) {return false};
  for (let elem of arr) {
    if (elem.length != 2) {return false};
    if ((validMac.indexOf(elem[0]) == -1) || (validMac.indexOf(elem[1]) == -1)) {return false};
  }
  return true;
}
module.exports = {
  isMAC48Address
};
// console.log(isMAC48Address('001B-63-84-45-E6'));
