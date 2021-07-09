/*
 * Author: 吴楚标
 * Date: 2021-07-08 15:38:24
 * LastEditors: 吴楚标
 * LastEditTime: 2021-07-08 15:43:37
 * Description: 
*/
class Student{
  constructor(name,age){
    this.name = name
    this.age = age
  }
  teach(){
    console.log(`my: ${this.name},age:${this.age}`);
  }
}

let my = new Student('js',10);
console.log(my);
my.teach();