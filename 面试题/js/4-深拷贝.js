/*
 * Author: 吴楚标
 * Date: 2021-06-24 10:27:22
 * LastEditors: 吴楚标
 * LastEditTime: 2021-06-30 16:37:28
 * Description: 
*/
/**
 * 方法一： JSON转换
 * 缺陷：属性丢失、循环引用出错
 * 1.不能克隆方法function
 * 2.不能循环引用 b中push c属性 c添加b属性  
 */
function deepClone1(obj){
  let str = JSON.stringify(obj);
  let data = JSON.parse(str);
  return data;
}


/**
 * 方法二、 递归拷贝
 * 解决问题：函数属性不丢失
 * 缺陷：循环引用报错
 */
function deepClone2(obj){
  if(typeof obj === 'object' && obj !== null){
    const result = Array.isArray(obj) ? [] : {};
    for(let key in obj){
      if(obj.hasOwnProperty(key)){
        result[key] = deepClone2(obj[key]);
      }
    }
    return result;
  }else{
    return obj;
  }
}

/**
 * 方法三、 引入键值对
 * 解决问题：循环引用
 */
function deepClone3(obj, map = new Map()){
  if(typeof obj === 'object' && obj !== null){
    let cache = map.get(obj);
    if(cache){
      return cache;
    }
    const result = Array.isArray(obj)? []:{};
    map.set(obj, result);
    for(let key in obj){
      if(obj.hasOwnProperty(key)){
        result[key] = deepClone3(obj[key], map);
      }
    }
    return result;
  }else{
    return obj;
  }
}


const obj = {
  a:1,
  b:['e','f','g'],
  c:{h:20},
  d:function(){}
}
obj.b.push(obj.c);
obj.c.j= obj.b;
const result = deepClone3(obj);
result.c.h = 30;  //测试
console.log(obj);
// console.log(result);

 
// 方法四，循环性能优化