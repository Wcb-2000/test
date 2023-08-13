/*
 * Author: 吴楚标
 * Date: 2021-06-06 15:40:35
 * LastEditors: 吴楚标
 * LastEditTime: 2021-06-10 22:39:30
 * Description: 
*/
import {call} from './call';
export function bind(Fn, obj, ...args){
  //返回新的函数
  return function(...args2){
    //执行call函数
    return call(Fn, obj, ...args, ...args2);
  }
}