/*
 * Author: 吴楚标
 * Date: 2021-06-09 21:03:08
 * LastEditors: 吴楚标
 * LastEditTime: 2021-06-10 22:35:20
 * Description: 
*/
export const eventBus = {
  // 保存类型与回调的容器
  callbacks:{}
}

// 绑定事件
eventBus.on = function(type, callback){
  // 判断
  if(this.callbacks[type]){
    // 如果 callbacks 属性中存在该类型事件
    this.callbacks[type].push(callback);
  }else{
    // 如果 callbacks 属性中 不存在该类事件
    this.callbacks[type] = [callback];
  }
}

// 触发事件
eventBus.emit = function(type, data){
  // 判断
  if(this.callbacks[type] && this.callbacks[type].length > 0 ){
    // 遍历数组
    this.callbacks[type].forEach(callback => {
      // 执行回调
      callback(data);
    });
  }
}

// 事件的解绑
eventBus.off = function(eventName){
  // 若传入 eventName 事件类型
  if(eventName){
    // 只删除eventName对呀的事件回调
    delete this.callbacks[eventName];
  }else{
    // 传入的eventName为空时 ，全部清除
    this.callbacks ={};
  }
}