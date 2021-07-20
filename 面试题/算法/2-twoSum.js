/*
 * Author: 吴楚标
 * Date: 2021-06-23 10:29:25
 * LastEditors: 吴楚标
 * LastEditTime: 2021-07-20 23:20:30
 * Description: 
*/
// 两数之和
/**
 * 1.创建一个Map
 * 2.for循环遍历数组
 * 3.用target减去nums[i]，以计算哪个数等于这个差值，差值+nums[i]=target
 * 4.检查map中是否存在这个数字，如果有就返回，没有就存入，其中nums作为键名 index做为键值 ，方便输出下标  因为get是输出键值
 */
var twoSum = function(nums, target){
  const map = new Map();
  for(let i=0;i< nums.length;i++){
    const complement = target - nums[i];
    if(map.has(complement)){
      return [map.get(complement), i]
    }else{
      map.set(nums[i], i);
      console.log(map);
    }

  }
  return [];
}

console.log(twoSum([2,3,11,7], 9));

function sum(arr, target){
  const map = new Map();
  for(let i =0;i<arr.length;i++){
    let cha = target - arr[i];
    if(map.has(cha)){
      return [map.get(cha),i]
    }else{
      map.set(arr[i], i)
    }
  }
  return [];
}

console.log(sum([2,3,11,7], 9));