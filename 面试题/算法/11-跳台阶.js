/*
 * Author: 吴楚标
 * Date: 2021-06-27 20:11:54
 * LastEditors: 吴楚标
 * LastEditTime: 2021-06-27 20:35:01
 * Description: 
*/
// 一只青蛙可以一次跳一阶或两阶
// f(n)=f(n-1)+f(n-2)
// 方法一：普通递归
function jump(n){
  if(n==1) return 1;
  else if(n==2) return 2;
  return jump(n-1)+jump(n-2);
}


// 方法二：记忆化递归  动态规划  空间换时间
let cache = [,1,2];
function jump2(n){
  if(cache[n] !== undefined){
    return cache[n];
  }
  return cache[n]=jump(n-1)+jump(n-2);
}

console.log(jump2(3));
console.log(jump2(4));
console.log(jump2(5));
console.log(jump2(100));