const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let arr1= arr.filter(item => item != -1);
  arr1.sort((a,b) => b-a);
  let arr2 = [];
  for (let elem of arr) {
    if (elem == -1) {
      arr2.push(elem);
    } else {
      arr2.push(arr1.pop());
      };
  }
  return arr2;
}

module.exports = {
  sortByHeight
};