/*
 * Author: 吴楚标
 * Date: 2021-06-23 22:19:18
 * LastEditors: 吴楚标
 * LastEditTime: 2021-06-23 23:44:19
 * Description: 
*/
// ES6
function clone1(obj){
  if(typeof obj === 'object' && obj !== null){
    if(Array.isArray(obj)){
      return [...obj];
    }else{
      return {...obj};
    }
  }else{
    return obj;
  } 
}

// ES5
function clone2(obj){
  if(typeof obj === 'object' && obj !== null){
    const result = Array.isArray(obj) ? []:{};
    for(let key in obj){   // for in 会遍历原型 因此加判断去掉其他不需要的
      if(obj.hasOwnProperty(key)){
        result[key] = obj[key];
      }
    }
    return result;
  }else{
    return obj
  }
}

const obj = {
  x: 'abc',
  y:{m:1}
};
const result1 = clone1(obj);
result1.y.m =2;
console.log(result1);

const result2 = clone2(obj);
console.log(result2);