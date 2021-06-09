/*
 * Author: 吴楚标
 * Date: 2021-06-09 09:48:18
 * LastEditors: 吴楚标
 * LastEditTime: 2021-06-09 10:14:02
 * Description: 
*/
function mergeObject(...objs){
  // 声明空对象
  const result = {};
  // 遍历所有的参数对象
  objs.forEach(obj => {
    // 获取当前对象所有的属性
    Object.keys(obj).forEach(key => {
      // 检测 result 中 是否存在key值
      if(result.hasOwnProperty(key)){
        result[key] = [].concat(result[key], obj[key]);
      }else{
        // 如果没有直接写入
        result[key] = obj[key];
      }
    });
  });
  return result;
}
