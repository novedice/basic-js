const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(isReverse) {
    this.reverse = isReverse;
  }
  encrypt(message, key) {
    if (message == undefined || key == undefined) { throw new Error('Incorrect arguments!')};
    message = message.toUpperCase();
    key = key.toUpperCase();
    key = key.repeat(Math.ceil(message.length/key.length));
    let arrOfAlph = [];
    let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    for (let i=0; i<alphabet.length; i++) {
      arrOfAlph.push(alphabet[i]);
    };
    function strToArr (str) {
      let arr = [];
      for (let j=0; j<str.length; j++) {
        if (alphabet.includes(str[j])) {
          arr.push(arrOfAlph.indexOf(str[j]));
        } else arr.push(str[j]);
      };
      return arr;
    };
    let arrOfMessage = strToArr(message),
        arrOfKey = strToArr(key);
    for (let i=0; i<arrOfMessage.length; i++) {
      if (!Number.isFinite(arrOfMessage[i])) {
        arrOfKey.splice(i, 0, arrOfMessage[i]);
      };
    };
    arrOfKey = arrOfKey.slice(0, arrOfMessage.length);
    let encryptMessage = [];
    for (let i = 0; i< arrOfMessage.length; i++) {
      if (Number.isFinite(arrOfMessage[i])) {
        encryptMessage.push(arrOfAlph[Math.abs(arrOfMessage[i]+arrOfKey[i])%26]);
      } else {
        encryptMessage.push(arrOfMessage[i]);
      }
    };
    if (this.reverse === true || this.reverse === undefined) {return encryptMessage.join('');} else {
      return encryptMessage.reverse().join('');
    }
    
  }
  decrypt(encryptedMessage, key) {
    if (encryptedMessage == undefined || key == undefined) { throw new Error('Incorrect arguments!')};
    key = key.toUpperCase();
    encryptedMessage = encryptedMessage.toUpperCase();
    key = key.repeat(Math.ceil(encryptedMessage.length/key.length));
    let arrOfAlph = [];
    let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    for (let i=0; i<alphabet.length; i++) {
      arrOfAlph.push(alphabet[i]);
    };
    function strToArr (str) {
      let arr = [];
      for (let j=0; j<str.length; j++) {
        if (alphabet.includes(str[j])) {
          arr.push(arrOfAlph.indexOf(str[j]));
        } else arr.push(str[j]);
      };
      return arr;
    };
    let arrOfIncrMessage = strToArr(encryptedMessage),
        arrOfKey = strToArr(key);
    for (let i=0; i<arrOfIncrMessage.length; i++) {
      if (!Number.isFinite(arrOfIncrMessage[i])) {
        arrOfKey.splice(i, 0, arrOfIncrMessage[i]);
      };
    };
    arrOfKey = arrOfKey.slice(0, arrOfIncrMessage.length);
    let message = [];
    for (let i = 0; i< arrOfIncrMessage.length; i++) {
      if (Number.isFinite(arrOfIncrMessage[i])) {
        message.push(arrOfAlph[(26 + arrOfIncrMessage[i]-arrOfKey[i])%26]);
      } else {
        message.push(arrOfIncrMessage[i]);
      };
    };
    if (this.reverse === true || this.reverse === undefined) {
      return message.join('');
    } else {
      return message.reverse().join('');
    };
  }
}


module.exports = {
  VigenereCipheringMachine
};
