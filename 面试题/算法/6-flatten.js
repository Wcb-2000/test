/*
 * Author: 吴楚标
 * Date: 2021-06-25 00:16:42
 * LastEditors: 吴楚标
 * LastEditTime: 2021-06-25 00:42:10
 * Description: 
*/
function flatten1(arr){
  let result = [];
  arr.forEach(item => {
    if(Array.isArray(item)){
      result = result.concat(flatten1(item));
    }else{
      result = result.concat(item);
    }
  })
  return result;
}

function flatten2(arr){
  let result = [...arr];
  while(result.some(item => Array.isArray(item))){
    result = [].concat(...result);
  }
  return result;
}

let arr = [1,2,3,[4,5,[6,7]]];
console.log(flatten1(arr));