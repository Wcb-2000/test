/*
 * Author: 吴楚标
 * Date: 2021-06-09 16:41:08
 * LastEditors: 吴楚标
 * LastEditTime: 2021-06-09 16:56:05
 * Description: 
*/
function reverseString(str){
  // 将字符串转为数组
  // let arr = str.split('');
  let arr = [...str];
  // 反转数组
  arr.reverse();
  // 拼接数组 输出字符串
  let result = arr.join('');
  return result;
}

function palindrome(str){
  // 反转是否相等
  return reverseString(str) === str;
}

function truncate(str, size){
   return str.slice(0,size) + '...';
}