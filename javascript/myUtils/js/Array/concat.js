/*
 * Author: 吴楚标
 * Date: 2021-06-07 22:06:26
 * LastEditors: 吴楚标
 * LastEditTime: 2021-06-07 22:13:59
 * Description: 
*/
function concat(arr, ...args){
  const result = arr;
  //遍历数组
  args.forEach(item => {
    //判断item是否为数组,如果是则展开,不是则压入
    if(Array.isArray(item)){
      result.push(...item);
    }else{
      result.push(item)
    };
  });
  return result;
}