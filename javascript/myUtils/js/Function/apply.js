/*
 * Author: 吴楚标
 * Date: 2021-06-06 15:23:53
 * LastEditors: 吴楚标
 * LastEditTime: 2021-06-10 22:37:47
 * Description: 
*/
  export function apply(Fn, obj, args){
    //判断
    if(obj === undefined || obj === null){
      obj = globalThis;
    }
    //为 obj 添加临时的方法
    obj.temp = Fn;
    //执行方法
    let result = obj.temp(...args);
    //删除临时属性
    delete obj.temp;
    //返回结果
    return result;
  }