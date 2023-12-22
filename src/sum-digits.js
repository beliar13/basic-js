const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let b = 0;
  let c = 0;
  a = n.toString();
  for ( let i = 0; i < a.length; i++) {
    b += Number(a[i]); 
  }
  if (b.toString().length > 1) {
    for ( let k = 0; k < b.toString().length; k++) {
      c += Number(b.toString()[k]); 
    }
    return c;
  }
  else {
    return b;
  }
}

module.exports = {
  getSumOfDigits
};
