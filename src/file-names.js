const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let properNames = names.slice();
  for (let i=0; i<names.length; i++) {
    let pos = -1,
        k = 1;
    while ((pos = properNames.indexOf(properNames[i], i+1)) != -1) {
      properNames[pos] = properNames[pos] + `(${k})`;
      k+=1;
    }
  }
  return properNames;
}

module.exports = {
  renameFiles
};
