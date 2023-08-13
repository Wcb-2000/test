/*
 * Author: 吴楚标
 * Date: 2021-06-29 22:54:52
 * LastEditors: 吴楚标
 * LastEditTime: 2021-06-29 23:19:01
 * Description:
 */
function longestPalindrome(s) {
  if (s.length < 2) {
    return s;
  }

  let start = 0;
  let maxLength = 1;

  function expandAroundCenter(left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      if (right - left + 1 > maxLength) {
        maxLength = right - left + 1;
        start = left;
      }
      left--;
      right++;
    }
  }
  for (let i = 0; i < s.length; i++) {
    expandAroundCenter(i - 1, i + 1);
    expandAroundCenter(i, i + 1);
  }
  let result =s.substring(start, start + maxLength)
  return result;
}
let b = "aba";
// console.log(typeof b);
console.log(longestPalindrome(b));
