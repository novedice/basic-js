const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!(Array.isArray(arr))) {throw new Error ('\'arr\' parameter must be an instance of the Array!')};
  if (!(arr instanceof Array)) {throw new Error ('\'arr\' parameter must be an instance of the Array!')};
  let doubn = '--double-next',
      doubp = '--double-prev',
      disn = '--discard-next',
      disp = '--discard-prev',
      arrTransformed = arr.slice(),
      index;
  if (!(arr.includes(doubn) || arr.includes(doubp) || arr.includes(disn) || arr.includes(disp))) {return arr};
  function doubleNext(arrDN) {
    let arr1=[];
    index = arrDN.indexOf(doubn);
    for (let i=0; i<index; i++) {
      arr1.push(arrDN[i]);
    };
    if (index == arrDN.length-1) {return arr1};
    arr1.push(arrDN[index+1]);
    arr1.push(arrDN[index+1]);
    for (let j = index+2; j<arrDN.length; j++) {
      arr1.push(arrDN[j]);
    };
    return arr1;
 }
  function doublePrev(arrDP) {
    index = arrDP.indexOf(doubp);
    let arr2 = [];
    if (index == 0) {
      for (let n = 1; n<arrDP.length; n++) {
        arr2.push(arrDP[n]);
      };
      return arr2;
    }
    for (let i=0; i<index-1; i++) {
      arr2.push(arrDP[i]);
    };
    arr2.push(arrDP[index-1]);
    arr2.push(arrDP[index-1]);
    for (let j = index+1; j<arrDP.length; j++) {
      arr2.push(arrDP[j]);
    };
    return arr2;
  };
  function discardNext (arrDiNext) {
    index = arrDiNext.indexOf(disn);
    let arr3 = [];
    for (let i=0; i<index; i++) {
      arr3.push(arrDiNext[i]);
    };
    if (index == arrDiNext.length-1) {return arr3};
    arr3.push('delete');
    for (let j = index+2; j<arrDiNext.length; j++) {
      arr3.push(arrDiNext[j]);
    };
    return arr3;
  };
  function discardPrev (arrDiPrev) {
    index = arrDiPrev.indexOf(disp);
    let arr4 = [];
    if (index == 0) {
      for (let n = 1; n<arrDiPrev.length; n++) {
        arr4.push(arrDiPrev[n]);
      };
      return arr4;
    }
    for (let i=0; i<index-1; i++) {
      arr4.push(arrDiPrev[i]);
    };
    arr4.push('delete');
    for (let j = index+1; j<arrDiPrev.length; j++) {
      arr4.push(arrDiPrev[j]);
    };
    return arr4;
  };
  for (let elem of arr) {
    if (elem == doubn) {arrTransformed = doubleNext(arrTransformed)};
    if (elem == doubp) {arrTransformed = doublePrev(arrTransformed)};
    if (elem == disn) {arrTransformed = discardNext(arrTransformed)};
    if (elem == disp) {arrTransformed = discardPrev(arrTransformed)};
  };
  let arrFinal = [];
  for (let elem of arrTransformed) {
    if (elem != 'delete') {arrFinal.push(elem)}; 
  }
  return arrFinal;
  
}

module.exports = {
  transform
};
