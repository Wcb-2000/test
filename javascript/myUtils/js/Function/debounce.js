/*
 * Author: 吴楚标
 * Date: 2021-06-06 17:12:14
 * LastEditors: 吴楚标
 * LastEditTime: 2021-06-06 17:40:44
 * Description: 
*/
export function debounce(callback, time){
  //定时器变量
  let timeId = null;

  //返回一个函数
  return function(e){
    // 判断
    if(timeId !== null){
      // 清空定时器
      clearTimeout(timeId);
    }
    // 启动定时器
    timeId = setTimeout(() => {
      //执行回调
      callback.call(this, e);
      //重置定时器变量
      timeId = null;  // 如果不重置，判断部分则没有意义， 逻辑意义回到初始位置
    }, time);
  }
}