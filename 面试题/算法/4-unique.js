/*
 * Author: 吴楚标
 * Date: 2021-06-24 22:43:01
 * LastEditors: 吴楚标
 * LastEditTime: 2021-06-29 22:49:11
 * Description: 
*/
// 方法一，forEach() 双重遍历 效率低
function unique1(arr){
  let result = [];
  arr.forEach(item => {
    if(result.indexOf(item) === -1){
      result.push(item);
    }
  })
  return result;
}

//方法二：forEach() 与对象的结合
function unique2(arr){
  let result = [];
  let obj = {};
  arr.forEach(item => {
    if(obj[item] === undefined){
      obj[item] = true;
      result.push(item);
     }
  })
  return result;
}

function unique3(arr){
  return [...new Set(arr)];
}
let arr = [1,2,3,4,5,4,3,2,1];
console.log(unique3(arr));