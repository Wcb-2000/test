/*
 * Author: 吴楚标
 * Date: 2021-06-24 21:34:40
 * LastEditors: 吴楚标
 * LastEditTime: 2021-06-24 22:07:56
 * Description: 
*/
// 
function throttle(callback, wait){
  let start = 0;
  return function(e){
    let now = Date.now();
    if(now - start >=wait){
      callback.call(this, e);
      start = now;
    }
  }
}

// 测试代码
window.addEventListener('scroll', throttle(function(e){
  console.log(Date.now());
  console.log(e);
}, 500));