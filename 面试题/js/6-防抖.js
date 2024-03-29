/*
 * Author: 吴楚标
 * Date: 2021-06-24 22:17:40
 * LastEditors: 吴楚标
 * LastEditTime: 2021-07-07 14:45:00
 * Description: 
*/
function debounce(callback, time){
  let timeId = null;
  return function(e){
    if(timeId !== null){
      clearTimeout(timeId);
    }
    timeId = setTimeout(() => {
      callback.call(this, e);
      timeId = null;
    }, time);
  }
}

function debounce(callback, time){
  let timeId = null;
  return function(e){
    if(timeId !== null){
      clearTimeout(timeId);
    }
    timeId = setTimeout(() => {
      callback.call(this, e);
    }, time);
  }
}
