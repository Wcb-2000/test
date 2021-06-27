/*
 * Author: 吴楚标
 * Date: 2021-06-27 21:08:56
 * LastEditors: 吴楚标
 * LastEditTime: 2021-06-27 21:18:07
 * Description:
 */
// 青蛙可以跳1次或者n次

let cache = [,1,2];
function jumpFloor(n){
  if(cache[n] !== undefined) return cache[n];
  cache[n]=1;
  for(let i=n-1;i>=1;i--){
    cache[n] += jumpFloor(i);
  }
  return cache[n]
}
console.log(jumpFloor(10));
