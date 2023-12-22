const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let b = matrix.length;
  let counter = 0;
  for (i = 0; i < b; i++) {
    if ((matrix[i].filter((el) => el === '^^')).length > 0) {
      counter += (matrix[i].filter((el) => el === '^^')).length
    }
  }
  return counter;
}

module.exports = {
  countCats
};
