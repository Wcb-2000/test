/*
 * Author: 吴楚标
 * Date: 2021-06-07 22:24:09
 * LastEditors: 吴楚标
 * LastEditTime: 2021-06-10 22:28:44
 * Description: 
*/
export function slice(arr, begin, end){
  //若arr数组长度为 0
  if(arr.length === 0){
    return [];
  }
  
  //判断 begin
  begin = begin || 0;
  if(begin >=arr.length){
    return [];
  }
  
  //判断end
  end = end || arr.length;
  if(end < begin){
    end = arr.length;
  }

  //声明空数组   ,以为因为返回的是新数组
  const result = [];
  //遍历数组
  for(let i = 0 ; i<arr.length;i++){
    if(i >= begin && i < end){
      result.push(arr[i]);
    }
  }
  return result;
}