/*
 * Author: 吴楚标
 * Date: 2021-06-08 11:48:35
 * LastEditors: 吴楚标
 * LastEditTime: 2021-06-08 11:59:58
 * Description:
 */
function drop(arr, size) {
  //过滤原来数组，产生新数组
  return arr.filter((value, index) => index >= size);
}

function dropRight(arr, size) {
  return arr.filter((value, index) => index < arr.length-size);
}