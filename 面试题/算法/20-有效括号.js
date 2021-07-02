/*
 * Author: 吴楚标
 * Date: 2021-07-01 23:33:33
 * LastEditors: 吴楚标
 * LastEditTime: 2021-07-02 00:18:57
 * Description: 
*/
// 判断括号是否合并 ()[]{}
function isValid(s){
  const mapppings = new Map();
  mapppings.set('(',')');
  mapppings.set('[',']');
  mapppings.set('{','}');

  const stack = [];
  for(let i=0;i<s.length;i++){
    if(mapppings.has(s[i])){
      stack.push(mapppings.get(s[i]));
    }else{
      if(stack.pop() !== s[i]){
        return false;
      }
    }
  }
  if(stack.length !== 0){
    return false;
  }
  return true;
}
let s = '([]){}';
console.log(isValid(s));