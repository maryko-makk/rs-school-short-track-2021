/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Number}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  const array = n.split('-');
  const regex = /[0-9A-F]{2}/;
  let result = true;
  if (n.length !== 17) return false;
  for (let i = 0; i < array.length; i++) {
    if (!regex.test(array[i])) {
      result = false;
      break;
    } else {
      i++;
    }
  }
  return result;
}

module.exports = isMAC48Address;
