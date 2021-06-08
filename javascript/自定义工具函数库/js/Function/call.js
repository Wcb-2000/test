/*
 * Author: 吴楚标
 * Date: 2021-06-06 14:49:34
 * LastEditors: 吴楚标
 * LastEditTime: 2021-06-06 15:00:10
 * Description:
*/
function call(Fn, obj, ...args){
  if(obj === undefined || obj === null){
    obj = globalThis; //指向全局对象
  }
  //为 obj 添加临时的方法
  obj.temp = Fn;
  //调用 temp 方法
  let result = obj.temp(...args);
  //删除 temp 方法
  delete obj.temp;
  //返回执行结果
  return result;
}
