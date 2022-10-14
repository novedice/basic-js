const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  str = ''+str;
  let n = options.repeatTimes,
      addition = options.addition,
      sep = options.separator,
      addRepeat = options.additionRepeatTimes,
      addSeparator = options.additionSeparator;
  if (addition === undefined) {
    addition = '';
    addRepeat = 0;
    addSeparator = '';
  } else {
    addition = ''+addition;
    if (addSeparator == undefined) {addSeparator = '|'};
    if (addRepeat == undefined) {addRepeat = 1};
  };
  if (n == undefined) {n=1};
  if (sep == undefined) {sep = '+'};
  function newStr (someStr, separ, times) {
    let arr = [];
    for (let i = 0; i<times; i++) {
      arr.push(someStr)
    };
    return arr.join(separ);
  }
  let s1 = newStr(addition, addSeparator, addRepeat);
  return newStr((str+s1), sep, n);
}

module.exports = {
  repeater
};

console.log(repeater('STRING', { repeatTimes: 3, separator: '**', addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' }));
console.log(repeater('la', { repeatTimes: 3 }));
const objWithSpecificCoercion = {
  [Symbol.toPrimitive]: hint => hint !== 'number' ? 'STRING_OR_DEFAULT' : 'NUMBER'
};
console.log (repeater(objWithSpecificCoercion, { repeatTimes: 2, addition: objWithSpecificCoercion }));
console.log(repeater(9.234, { repeatTimes: 4, separator: '||', addition: { a: 5 }, additionRepeatTimes: 3, additionSeparator: '&&' }));
console.log(repeater(-222, { repeatTimes: 4, separator: '||', addition: new Map(), additionRepeatTimes: 3, additionSeparator: '&&' }));
console.log(repeater(new Set(), { repeatTimes: 3, separator: '??? ', addition: [1, 2, 3, '4'], additionRepeatTimes: 2, additionSeparator: '!!!' }));
console.log(repeater(true, { repeatTimes: 3, separator: '??? ', addition: false, additionRepeatTimes: 2, additionSeparator: '!!!' }));
console.log(repeater(null, { repeatTimes: 3, separator: '??? ', addition: null, additionRepeatTimes: 3, additionSeparator: '!!!' }));
