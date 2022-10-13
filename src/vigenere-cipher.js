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
  constructor(isReverse = true) {
    this.reverse = isReverse;
  }
  encrypt(message, key) {
    if (message == undefined || key == undefined) { throw new Error('Incorrect arguments!')};
    let arrOfMessageEncrypt = [];
    message = message.toUpperCase();
    key = key.toUpperCase();  
    function strToArr (str) {
      let arr = [];
      for (let i=0; i<str.length; i++) {
        arr.push(str.charCodeAt(i))
      }
      return arr;
    }
    let arrOfMessage = strToArr(message),
        arrOfKey = strToArr(key);
    console.log(arrOfKey, arrOfMessage);
    
  }
  decrypt(encryptedMessage, key) {
    if (encryptedMessage == undefined || key == undefined) { throw new Error('Incorrect arguments!')};
  }
}

module.exports = {
  VigenereCipheringMachine
};
// const directMachine = new VigenereCipheringMachine();
// const reverseMachine = new VigenereCipheringMachine(false);
// console.log(directMachine.encrypt('attack at dawn!', 'alphonse'))
// console.log(directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse'))
// console.log(reverseMachine.encrypt('attack at dawn!', 'alphonse')) 
// console.log(reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse'))
// console.log(directMachine.encrypt(''))