/*
 * Author: 吴楚标
 * Date: 2021-06-16 23:32:54
 * LastEditors: 吴楚标
 * LastEditTime: 2021-06-17 10:34:27
 * Description: 
*/
let arr = [1,2,3,4];
console.log(arr);

var person = {
  friends: ["a", "b", "c", "d"]
}

var p1 = Object.create(person)

p1.friends.push("aaa")//缺点：子类的实例共享了父类构造函数的引用属性

console.log(p1);
console.log(person);//缺点：子类的实例共享了父类构造函数的引用属性
