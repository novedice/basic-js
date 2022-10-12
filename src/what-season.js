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
  // console.log(typeof date, date);
  // console.log('date.constructor.name',date.constructor.name)
  // console.log('Date.prototype.isPrototypeOf(date)',Date.prototype.isPrototypeOf(date))
  // console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(date)));
  
  
  // function getAllFuncs(toCheck) {
  //   const props = [];
  //   let obj = toCheck;
  //   do {
  //       props.push(...Object.getOwnPropertyNames(obj));
  //   } while (obj = Object.getPrototypeOf(obj));
  //   return props.sort().filter((e, i, arr) => { 
  //      if (e!=arr[i+1] && typeof toCheck[e] == 'function') return true;
  //   });
  // }
  // console.log(getAllFuncs(date));


  // const p = [];
  // let obj = date;
  // do {
  //   console.log(typeof obj, obj.constructor.name)
  //   // p.push(...Object.getOwnPropertyNames(obj))
  // } while (obj = Object.getPrototypeOf(obj))
  // console.log(p);
  
  // while (obj = Object.getPrototypeOf(obj)) {
  //   console.log('check prototype => typeof:',typeof obj, ' name:', obj.constructor.name)
  // }


  const isValidDate = (d) => {
    try {
      d.getDay();
      return d instanceof Date && !isNaN(d);
    } catch (error) {
      console.error(error);
      return false;
    }
  };
  let er = new Error('Invalid date!');
  if (date == undefined) {return 'Unable to determine the time of year!'};
  if (!isValidDate(date)) throw new Error('Invalid date!');
  // if ((Object.prototype.toString.call(date) != '[object Date]')) { throw new Error('Invalid date!')};//{return er}//'Invalid date!'};
  // if (date == 'Invalid Date') { throw new Error('Invalid date!')};//{return er}//'Invalid date!'};
  // if (Object.getOwnPropertyNames(date).length != Object.getOwnPropertyNames(new Date()).length) { throw new Error('Invalid date!')};//{return er}//'Invalid date!'};
  let month = date.getMonth(),
      day = date.getDay(),
      season;
  if(month === 11 || month == 0 || month == 1) { season = 'winter'};
  if(month === 2 || month == 3 || month == 4) { season = 'spring'};
  if(month === 5 || month == 6 || month == 7) { season = 'summer'};
  if(month === 8 || month == 9 || month == 10) { season = 'autumn'};
return season;
}

module.exports = {
  getSeason
};

// console.log(getSeason([2019, '27', 0 + '1']))
// console.log(getSeason(() => new Date()))

// console.log(getSeason(null));
// let data1 = new Date(2020, 02, 31);
// console.log(getSeason(data1));
// console.log (getSeason(new Date('kk')));
// console.log(getSeason([2019, '27', 0 + '1']));