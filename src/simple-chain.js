const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  arr: [],
  getLength() {
   return (this.arr).length;
  },
  addLink(value) {
    (this.arr).push(value);
    return this;
  },
  removeLink(position) {
    if (typeof position != 'number' || position <=0 || position > this.arr.length) {this.arr = []; throw new Error('You can\'t remove incorrect link!')};
    // if (position > this.arr.length) {
    //   // console.log('trololo',position,this.arr.length)
    //   throw new Error('You can\'t remove incorrect link!');
    // };
    // if (position <= 0) {throw new Error('You can\'t remove incorrect link!')};
    try {
    // console.log(position-1)
    this.arr.splice(position-1,1);
    } catch {
      throw new Error('You can\'t remove incorrect link!');
    }
    return this;
  },
  reverseChain() {
    this.arr.reverse();
    // console.log(this.arr)
    return this;
  },
  finishChain() {
    let res = (this.arr).map((el) => '( '+el+' )').join('~~');
    this.arr = [];
    return res;
  }
};

module.exports = {
  chainMaker
};
//console.log(chainMaker.addLink('GHI').addLink(null).reverseChain().addLink(333).reverseChain().reverseChain().addLink(0).reverseChain().reverseChain().addLink('GHI').finishChain(), '( null )~~( GHI )~~( 333 )~~( 0 )~~( GHI )');
// console.log(chainMaker.addLink(function () { }).addLink('2nd').addLink('3rd').removeLink(2).reverseChain().finishChain(), '( 3rd )~~( function () { } )');
// console.log(chainMaker.addLink(1).addLink(2).addLink(3));
// console.log(chainMaker.addLink(1).addLink(2).addLink(3).removeLink(4));
//console.log(chainMaker.addLink(1).addLink(2).addLink(3).removeLink('0'));
// console.log(chainMaker.addLink('GHI').addLink(null).reverseChain().addLink(333).reverseChain().reverseChain().addLink(0).reverseChain().reverseChain().addLink('GHI').finishChain(), '( null )~~( GHI )~~( 333 )~~( 0 )~~( GHI )');
// console.log(chainMaker.addLink('8.963').reverseChain().reverseChain().reverseChain().reverseChain().addLink({ 0: 'first', 1: 'second', 'length': 2 }).reverseChain().addLink(3.14).addLink('DEF').reverseChain().finishChain(), '( DEF )~~( 3.14 )~~( 8.963 )~~( [object Object] )');
// console.log(chainMaker.addLink(false).reverseChain().reverseChain().reverseChain().addLink({ 0: 'first', 1: 'second', 'length': 2 }).addLink(1.233).addLink(false).addLink(1).reverseChain().addLink(1).finishChain(), '( 1 )~~( false )~~( 1.233 )~~( [object Object] )~~( false )~~( 1 )');