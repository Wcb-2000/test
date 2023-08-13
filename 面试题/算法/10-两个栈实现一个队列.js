/*
 * Author: 吴楚标
 * Date: 2021-06-27 19:37:13
 * LastEditors: 吴楚标
 * LastEditTime: 2021-06-27 20:09:49
 * Description:
 */
// 栈：先进后出（后进先出）
// 队列：先进先出

// 两个栈完实现一个队列   js数组模拟栈


let stack1 = [];
let stack2 = [];

function push(...args){
  stack1.push(...args);
}
function pop(node){
  while(stack1.length){
    stack2.push(stack1.pop());
  }
  let val = stack2.pop();
  while(stack2.length){
    stack1.push(stack2.pop());
  }
  return val;
}

push("a", "b", "c");
console.log(stack1);
console.log(pop());
push("d");
console.log(pop());
// stack1.pop();
// console.log(stack1);
