/*
 * Author: 吴楚标
 * Date: 2021-06-23 21:57:40
 * LastEditors: 吴楚标
 * LastEditTime: 2021-06-23 22:09:36
 * Description: 
*/
// 一: 原型继承
var person = {
  friends:['a','b','c']
}
var p1 = Object.create(person);
p1.friends.push('ccc');
console.log(p1.__proto__);  //父类的实例作为子类的原型
console.log(person);

