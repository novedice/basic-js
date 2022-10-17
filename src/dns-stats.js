const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let obj = {},
      k = 1;
  for (let elem of domains) {
    let arr = elem.split('.');
    arr.reverse();
    let domain = '';
    for (let i = 0; i<arr.length; i++) {
      domain += '.'+arr[i];
      if (!obj.hasOwnProperty(domain)) {
        obj[domain] = 1;
      } else {
        obj[domain] += 1;
      }
    };
  };
  return obj;
}

module.exports = {
  getDNSStats
};