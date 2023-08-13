/*
 * Author: 吴楚标
 * Date: 2021-06-07 20:45:49
 * LastEditors: 吴楚标
 * LastEditTime: 2021-06-10 22:22:16
 * Description: 
*/

/**
 * 
 * @param {Array} arr 
 * @param {Function} callback 
 */
export function map(arr, callback) {
  //声明一个空数组
  let result = [];

  //遍历数组
  for(let i = 0;i<arr.length;i++){
    result.push(callback(arr[i], i));
  }

  //返回结果
  return result;
}

/** 
 * @param {Array} arr 
 * @param {Function} callback 
 * @param {*} initValue
 * 
*/
export function reduce(arr, callback, initValue){
  // 声明变量
  let result = initValue;
  //执行回调
  for(let i=0;i<arr.length;i++){
    // 执行回调
    result = callback(result, arr[i]);
  }
  // 返回结果
  return result;
}

/**
 * 
 * @param {Array} arr 
 * @param {Function} callback 
 */
export function filter(arr, callback){
  //声明空数组
  let result = [];
  //遍历数组
  for(let i = 0; i<arr.length;i++){
    //执行回调
    let res = callback(arr[i], i);
    //判断为真则压入result中
    if(res){
      result.push(arr[i]);
    }
  }
  return result;
}

/**
 * 
 * @param {Array} arr 
 * @param {Function} callback 
 * 
 */
export function find(arr, callback){
  for(let i=0;i<arr.length;i++){
    //遍历数组
    let res = callback(arr[i], i);
    //判断
    if(res){
      // 返回当前正在遍历的数组
      return arr[i];
    }
  }
  return undefined;
}

/**
 * 
 * @param {Array} arr 
 * @param {Function} callback 
 * 
 */
export function findIndex(arr, callback){
  for(let i=0;i<arr.length;i++){
    //遍历数组
    let res = callback(arr[i], i);
    //判断
    if(res){
      // 返回当前正在遍历的数组
      return i;
    }
  }
  // 如果没有遇到满足条件的返回 -1
  return -1;
}

/**
 * 
 * @param {Array} arr 
 * @param {Function} callback 
 * @returns 
 */
export function every(arr, callback){
  //遍历
  for(let i = 0; i<arr.length;i++){
    //执行回调,如果有不满足 则直接返回false  反之为true
    if(!callback(arr[i], i)){
      return false;
    }
  }
  // 如果都满足 返回true
  return true;
}

export function some(arr, callback){
  //遍历
  for(let i = 0; i<arr.length;i++){
    //执行回调,如果有满足 则直接返回true 反之返回false
    if(callback(arr[i], i)){
      return true;
    }
  }
  // 如果都不满足 返回true
  return false;
}