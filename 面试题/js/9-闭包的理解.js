/*
 * Author: 吴楚标
 * Date: 2021-07-09 01:12:58
 * LastEditors: 吴楚标
 * LastEditTime: 2021-07-09 15:46:16
 * Description: 
*/

// * 什么是闭包：函数执行，形成私有的执行上下文，使内部私有变量不受外界干扰，起到保护和保存的作用
// * 闭包3个特点：1.函数嵌套函数； 2.函数内部可以引用函数外部的参数和变量；  3.参数和变量不会被垃圾回收机制回收
// * 应用场景： 1.设计模式中的单例模式
//             2.for循环中的保留i的操作
//             3.防抖和节流
//             4.函数柯里化
// * 缺点： 会造成内存泄漏

// * 自由变量的查找，是在函数定义的地方，向上级作用域查找，而并不是在执行的地方

//函数作为返回值
function create(){
  let a = 100;
  return function(){
    console.log(a);
  }
}
let fn = create();
let a = 200;
fn();

// 函数作为参数
function print(fn){
  let b = 200;
  fn();
}
let b = 100;
function fs(){
  console.log(b);
}

print(fs);

// 应用场景，隐藏数据，只提供API
function createCache(){
  const data = {};
  return {
    set: function(key, val){
      data[key] = val
    },
    get: function(key){
      return data[key]
    }
  }
}

const c = createCache();
c.set('a', 100);
console.log(c.get('a'));