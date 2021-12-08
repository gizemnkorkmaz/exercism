// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  const firstNum = Number(array1.join(""));
  const secondNum = Number(array2.join(""));
  return firstNum + secondNum;
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean}  whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  const reversedNumber = Number(value.toString().split("").reverse().join(""));
  if (value === reversedNumber) return true;
  return false;
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  if (input == null || input.length === 0) {
    return "Required field";
  } else if (Number(input) === 0 || isNaN(Number(input))) {
    return "Must be a number besides 0";
  } else {
    return "";
  }
}
