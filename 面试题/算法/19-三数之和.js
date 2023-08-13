/*
 * Author: 吴楚标
 * Date: 2021-06-29 23:22:20
 * LastEditors: 吴楚标
 * LastEditTime: 2021-06-30 00:01:30
 * Description:
 */
//三数之和为0  并且输出不能重复
let arr = [-1, 0, 1, 2, -1, -4];

function threeSum(arr) {
  let result = [];
  arr.sort();
  for (let i = 0; i < arr.length - 2; i++) {
    if (i === 0 || arr[i] !== arr[i - 1]) {
      let start = i + 1,
        end = arr.length - 1;

      while (start < end) {
        if (arr[i] + arr[start] + arr[end] === 0) {
          result.push([arr[i],arr[start],arr[end]])
          start++;
          end--;
          while(arr[start] === arr[start-1]){
            start++;
          }
          while(arr[end] === arr[end-1]){
            end--;
          }
        } else if (arr[i] + arr[start] + arr[end] < 0) {
          start++
        } else {
          end--;
        }
      }
    }
  }
  return result;
}
console.log(threeSum(arr));
