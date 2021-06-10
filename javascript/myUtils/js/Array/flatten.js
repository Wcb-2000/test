/*
 * Author: 吴楚标
 * Date: 2021-06-08 10:11:19
 * LastEditors: 吴楚标
 * LastEditTime: 2021-06-10 22:26:29
 * Description:
 */
/**
 * 
 * @param {Array} arr 
 * @returns 
 */
export function flatten1(arr) {
  let result = [];
  //遍历
  arr.forEach((item) => {
    if (Array.isArray(item)) {
      result = result.concat(flatten1(item));
    } else {
      result = result.concat(item);
    }
  });
  
  return result;
}

/**
 * 
 * @param {Array} arr 
 */
export function flatten2(arr){
  //声明数组
  let result = [...arr];
  // 循环判断
   while(result.some(item => Array.isArray(item))){
     result = [].concat(...result);
   }
   return result;
}