/*
 * Author: 吴楚标
 * Date: 2021-06-15 10:28:47
 * LastEditors: 吴楚标
 * LastEditTime: 2021-06-15 22:15:24
 * Description:
 */
// 声明构造函数
function Promise(executor) {
  // 添加属性
  this.PromiseState = "pending";
  this.PromiseResult = null;
  // 声明属性
  this.callbacks = [];
  // 保存实例对象的this值
  const self = this;
  // resolve函数
  function resolve(data) {
    // 判断状态只能修改一次
    if (self.PromiseState !== "pending") return;
    // 1.修改对象的状态
    self.PromiseState = "fulfilled";
    // 2.设置对象结果值
    self.PromiseResult = data;
    // 调用成功的回调函数
    self.callbacks.forEach((item) => {
      item.onResolved(data);
    });
  }
  // reject函数
  function reject(data) {
    // 判断状态只能修改一次
    if (self.PromiseState !== "pending") return;
    // 1.修改对象的状态
    self.PromiseState = "reject";
    // 2.设置对象结果值
    self.PromiseResult = data;
    // 调用失败的回调函数
    self.callbacks.forEach(item=> {
      item.onRejected(data);
    });
  }
  // try catch 捕获throw
  try {
    // 同步调用 [执行器函数]
    executor(resolve, reject);
  } catch (e) {
    // 修改状态
    reject(e);
  }
}

// 添加then方法
Promise.prototype.then = function (onResolved, onRejected) {
  const self = this;
  // 判断回调函数参数
  if(typeof onRejected !== 'function'){
    onRejected = reason => {
      throw reason;
    }
  }
  if(typeof onResolved !== 'function'){
    onResolved = value => value;
  }
 
  return new Promise((resolve, reject) => {
    function callback(type){
      try{
        // 获取回调函数的执行结果
        let result = type(self.PromiseResult);
        // 判断
        if(result instanceof Promise){
          // 如果是promise对象
          result.then(v => {
            resolve(v);
          }, r => {
            reject(r);
          })
        }else{
          // 结果为成功
          resolve(result);
        }
        }catch(e){
          reject(e);
      }
      
    }
    // 调用回调函数 PromiseState
    if (this.PromiseState === "fulfilled") {
      callback(onResolved);
    }
    if (this.PromiseState === "reject") {
      callback(onRejected);
    }
    // 判断 pending状态  异步
    if (this.PromiseState === "pending") {
      // 保存回调函数
      this.callbacks.push({
        onResolved:function(i){
          callback(onResolved);
        },
        onRejected: function(){
          callback(onRejected);
        }
      });
    }
  });
};

//添加 catch方法
Promise.prototype.catch = function(onRejected){
  return this.then(undefined, onRejected);
}