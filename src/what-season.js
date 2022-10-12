const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  let er = new Error('Invalid date!');
  if (date == undefined) {return 'Unable to determine the time of year!'};
  if ((Object.prototype.toString.call(date) != '[object Date]')) {return 'Invalid date!'};
  if (date == 'Invalid Date') {return 'Invalid date!'};
  if (Object.getOwnPropertyNames(date).length != Object.getOwnPropertyNames(new Date()).length) {return 'Invalid date!'};
  let month = date.getMonth(),
      day = date.getDay(),
      season;
  // if ((month == 0 || month == 2 || month == 4 || month == 6 || month == 7 || month == 9 || month == 11) && (day>31)) {return er};
  // if ((month == 3 || month == 5 || month == 8 || month == 10) && (day>30)) {return 'Invalid date!'};
  // if (month == 1) {
  //   if (day > 28) {
  //     if ((date.getYear()%4) != 0) {
  //       return 'Invalid date!';
  //     } else if (day > 29) {return 'Invalid date!'};
  //   }
  // }
  if(month === 11 || month == 0 || month == 1) { season = 'winter'};
  if(month === 2 || month == 3 || month == 4) { season = 'spring'};
  if(month === 5 || month == 6 || month == 7) { season = 'summer'};
  if(month === 8 || month == 9 || month == 10) { season = 'autumn'};
return season;
}

module.exports = {
  getSeason
};
console.log(getSeason(null));
let data1 = new Date(2020, 02, 31);
console.log(getSeason(data1));
console.log (getSeason(new Date('kk')));
console.log(getSeason([2019, '27', 0 + '1']));