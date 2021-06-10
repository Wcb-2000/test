/*
 * Author: 吴楚标
 * Date: 2021-06-08 10:47:50
 * LastEditors: 吴楚标
 * LastEditTime: 2021-06-08 11:09:44
 * Description: 
*/

//默认长度为1
function chunk(arr, size = 1){
  // 声明两个变量
  let result = [];
  let tmp = [];
  //遍历
  arr.forEach(item => {
    //先压空数组，再压值。 判断长度为0 压入空数组
    if(tmp.length === 0){
      result.push(tmp);
    }
    // 压入值
    tmp.push(item);
    // 判断数组是否满了
    if(tmp.length === size){
      tmp = [];
    }
  })
  return result;
}