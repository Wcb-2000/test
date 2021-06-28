/*
 * Author: 吴楚标
 * Date: 2021-06-16 23:32:54
 * LastEditors: 吴楚标
 * LastEditTime: 2021-06-28 17:33:52
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

let arrs = [0,2,1,3,4,5,6,7];
function good(a,b){
  return b-a;
}
// let b = arrs.sort(good);
console.log(arrs);
// console.log(b);

let test = arrs.filter(item => item %2 ==0);
console.log(test);

let ccc = arrs.slice(1,3);
console.log(ccc);