/*
 * Author: 吴楚标
 * Date: 2021-06-08 11:48:35
 * LastEditors: 吴楚标
 * LastEditTime: 2021-06-10 22:25:59
 * Description:
 */
export function drop(arr, size) {
  //过滤原来数组，产生新数组
  return arr.filter((value, index) => index >= size);
}

function dropRight(arr, size) {
  return arr.filter((value, index) => index < arr.length-size);
}