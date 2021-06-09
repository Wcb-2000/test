/*
 * Author: 吴楚标
 * Date: 2021-06-09 09:28:41
 * LastEditors: 吴楚标
 * LastEditTime: 2021-06-09 09:43:29
 * Description: 
*/
function myInstanceOf(obj, Fn){
  // 获取函数的显示原型
  let prototype = Fn.prototype;
  // 获取obj的隐式原型对象
  let proto = obj.__proto__;
  while(proto){
    // 检测原型对象是否相等
    if(prototype === proto){
      return true;
    }
    // 这个对象不是，取这个对象的上一个对象对比
    proto = proto.__proto__;
  }
  return false;
}
