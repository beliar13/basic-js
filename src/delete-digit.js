const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let a = n.toString();
  let b = a.length;
  let c = [];
  let d = '';
  for (i = 0; i < b; i++) {
    if (i === 0) {
     d = a.substring(i + 1, b)
     c.push(Number(d))
    }
    if (i === (b - 1)) {
      d = a.substring(0, b - 1)
      c.push(Number(d))
    }
    if ((i > 0) && (i < (b - 1))) {
      d = a.substring(0, i) + a.substring(i + 1, b)
      c.push(Number(d))
    }
  }
  return c.sort((a, b) => a - b)[c.length-1];
}

module.exports = {
  deleteDigit
};
