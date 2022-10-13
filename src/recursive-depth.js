const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {

calculateDepth(arr) {
    if (!Array.isArray(arr)) {return 0};
    let deepth = 0;
    for (let elem of arr) {
      deepth = Math.max (deepth, this.calculateDepth(elem));
    }
  return (deepth+1);
}
}

module.exports = {
  DepthCalculator
};
const depthCalc = new DepthCalculator();
 console.log(depthCalc.calculateDepth([1, 2, 3, 4, 5]))
 console.log(depthCalc.calculateDepth([1, 2, 3, [4, 5]]))
 console.log(depthCalc.calculateDepth([[[]]]))
 console.log(depthCalc.calculateDepth([1, 2, 3, 4, [1, 2, [1, 2, [[[]]]]], 5, [1, [[[[[[]]]]]]]]));
 console.log(Array.isArray([[]]));
