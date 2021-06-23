/*
 * Author: 吴楚标
 * Date: 2021-06-23 16:16:34
 * LastEditors: 吴楚标
 * LastEditTime: 2021-06-23 21:37:01
 * Description: 
*/
//定义在原型链
Function.prototype.newCall = function(obj){
  if(typeof this !== 'function'){
    throw new TypeError('Not a Function')
  }
  obj = obj || globalThis
  obj.fn = this;
  let args = Array.from(arguments).slice(1)
  let result = obj.fn(...args)
  delete obj.fn;
  return result;
}

function person(a){
  var b =a;
  console.log(this.name,this.age,b);
}
globalThis.name= 'wcb' ;  //全局
var ex = {
  name: 'wcb',
  age: 18,
}
person.newCall(ex,10);

Function.prototype.luckyApply = function(obj){
  if(typeof this !== 'function'){
    throw TypeError('Not a Function');
  }
  obj = obj || globalThis
  obj.fn = this;
  const result = arguments[1]?obj.fn(...arguments[1]):obj.fn();
  delete obj.fn;
  return result;
}

function add(a, b){
  var d = a+b+this.c;
  console.log(d);
}
let e= {
  c:5
}
add.luckyApply(e, [10,20]);


Function.prototype.myBind = function (context) {
  //1.对context进行深拷贝，防止bind执行后返回函数未执行期间，context被修改
  const ctx = JSON.parse(JSON.stringify(context)) || window
  //2.把函数挂到目标对象上
  ctx.func = this
  //3.保存参数
  const args = Array.from(arguments).slice(1)
  //bind只返回做改变不执行
  return function () {
      //bind方法只需要合并两次函数执行的参数
      const Allargs = args.concat(Array.from(arguments))
      return Allargs.length > 0 ? ctx.func(...Allargs) : ctx.func()
  }
}
obj = {
  c: 2
}

function a(x, y, z) {
  console.log(this, x, y, z)
}

a.myBind(obj, 1, 2)(3)