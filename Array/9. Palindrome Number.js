/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  const arr = [...String(x)];

  let isPalindrome = true;

  for (let i = 0; i < arr.length / 2; i++) {
    if (Number(arr[i]) !== Number(arr[arr.length - (i + 1)])) {
      isPalindrome = false;
      break;
    }
  }
  return isPalindrome;
};
