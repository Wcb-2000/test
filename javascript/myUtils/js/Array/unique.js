/*
 * Author: 吴楚标
 * Date: 2021-06-07 21:43:23
 * LastEditors: 吴楚标
 * LastEditTime: 2021-06-10 22:29:30
 * Description: 
*/
export function unique1(arr){
  //声明空数组
  const result = [];
  arr.forEach(item => {
    //检测新数组中有没该值 ,有则插入  -1表示不存在该值
    if(result.indexOf(item) === -1){
      result.push(item);
    }
  });
  return result;
}

export function unique2(arr){
  //声明空数组
  const result = [];
  //声明空对象
  const obj = {};
  //遍历
  arr.forEach(item => {
    if(obj[item] === undefined){
    obj[item] = true;
    result.push(item)
    };
  });
  return result;
}

export function unique3(arr){
   //Set() 中的元素唯一
   //let set = new Set(arr)
   //将set展开创建为数组
   //let array = [...set]
   
  // let result = [...new Set(arr)];
  
  return [...new Set(arr)];
}