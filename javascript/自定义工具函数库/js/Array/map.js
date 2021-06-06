/*
 * Author: 吴楚标
 * Date: 2021-06-06 17:50:42
 * LastEditors: 吴楚标
 * LastEditTime: 2021-06-06 18:00:30
 * Description: 
*/
function map(arr, callback) {
  //声明一个空数组
  let result = [];

  //遍历数组
  for(let i = 0;i<arr.length;i++){
    result.push(callback(arr[i], i));
  }

  //返回结果
  return result;
}