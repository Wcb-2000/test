/*
 * Author: 吴楚标
 * Date: 2021-06-08 11:13:18
 * LastEditors: 吴楚标
 * LastEditTime: 2021-07-15 16:02:59
 * Description: 
*/
export function difference(arr1, arr2=[]){
  //补充条件
  if(arr1.length === 0){
    return [];
  }
  if(arr2.length === 0){
    //slice可以返回新数组
    return arr1.slice();
  }
  
  const result =arr1.filter(item => !arr2.includes(item));
  return result;
}