/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const array = str.split('');
  let result = '';
  let counter = 1;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === array[i + 1]) {
      counter++;
    } else {
      result += counter + array[i];
      counter = 1;
    }
  }
  return result.replace(/1/g, '');
}

module.exports = encodeLine;
