/*
 * Author: 吴楚标
 * Date: 2021-06-08 11:26:13
 * LastEditors: 吴楚标
 * LastEditTime: 2021-06-10 22:27:33
 * Description: 
*/
/**
 * 
 * @param {Array} arr 
 * @param  {*} args 
 * @returns 
 */
export function pull(arr, ...args){
  //声明空数组
  let result = [];
  // 遍历arr
  for(let i =0 ; i < arr.length ; i++){
    // 判断 args中是否存在数组中的元素
    if(args.includes(arr[i])){
      // 先压入 再删除 ， 否则下标改变 压的是后面的值
      result.push(arr[i]);
      // splice删除的是原数组，符合题目
      arr.splice(i,1);
      // 下标自减 ， 因为数组删了一位，少一位，不自减会跳过一个值
      i--;
    }
  }
  return result;
}


export function pullAll(arr, value){
  return pull(arr, ...value);
}
