/*
 * Author: 吴楚标
 * Date: 2021-06-08 12:08:41
 * LastEditors: 吴楚标
 * LastEditTime: 2021-06-10 22:44:42
 * Description: 
*/
export function newInstance(Fn, ...args){
  // 创建新对象
  const obj = {};
  // 修改函数内部指针指向新对象 并执行
  // Fn.call(obj, ...args);
  const result = Fn.call(obj, ...args);
  //修改新对象 原型对象
  obj.__proto__ = Fn.prototype;
  // 返回新对象 完善功能趋近原函数
  // return obj
  
  return result instanceof Object ? result : obj;
}