const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  // console.log('---NEW---', typeof sampleActivity ,'string?', typeof sampleActivity == 'string')
  let activityValue, result;
  activityValue = (typeof sampleActivity == 'string') ? parseFloat(sampleActivity): NaN;
  // console.log('activityValue',activityValue);
  if (!isNaN(activityValue)) {
    // ratio ActivityModern/ActivitySample
    let activityRatio = MODERN_ACTIVITY/activityValue;
    // console.log('activityRatio', activityRatio);
    // console.log('Ln', Math.LN2);
    let koeff = Math.LN2/HALF_LIFE_PERIOD;
    // console.log('koeff', koeff);
    result = Math.log(activityRatio)/koeff;
    // console.log('result before ceil', result);
    result = Math.ceil(result);
    if (result <= 0 || !isFinite(result)) {
      result = false
    }
  } else {
    result = false;
  }
  // console.log('result',result);
  return result;
}


module.exports = {
  dateSample
};
// console.log(dateSample('1') ) //22387
// console.log(dateSample('WOOT!')) // false