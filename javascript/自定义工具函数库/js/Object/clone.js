/*
 * Author: 吴楚标
 * Date: 2021-06-09 10:15:08
 * LastEditors: 吴楚标
 * LastEditTime: 2021-06-09 16:34:07
 * Description:
 */
function clone1(target) {
  // 类型判断 {} [] null
  if (typeof target === "object" && target !== null) {
    // 判断是否为数组
    if (Array.isArray(target)) {
      return [...target];
    } else {
      return { ...target };
    }
  } else {
    return target;
  }
}

function clone2(target) {
  // 判断
  if (typeof target === "object" && target !== null) {
    // 创建容器
    const result = Array.isArray(target) ? [] : {};
    // 遍历target 数据
    for (let key in target) {
      // 判断当前对象身上是否包含该属性
      if (target.hasOwnProperty(key)) {
        // 将属性设置到result 结果数据中
        result[key] = target[key];
      }
    }
    return result;
  } else {
    return target;
  }
}

function deepClone1(target) {
  // 通过数据创建 JSON 格式字符串
  let str = JSON.stringify(target);
  // 将JSON 字符串创建为JS数据
  let data = JSON.parse(str);
  return data;
}

function deepClone2(target) {
  // 判断
  if (typeof target === "object" && target !== null) {
    // 创建容器
    const result = Array.isArray(target) ? [] : {};
    // 遍历target 数据
    for (let key in target) {
      // 判断当前对象身上是否包含该属性
      if (target.hasOwnProperty(key)) {
        // 将属性设置到result 结果数据中
        result[key] = deepClone2(target[key]);
      }
    }
    return result;
  } else {
    return target;
  }
}

function deepClone3(target, map = new Map()) {
  // 判断
  if (typeof target === "object" && target !== null) {
    // 克隆数据之前，判断数据是否克隆过
    let cache = map.get(target);
    if (cache) {
      return cache;
    }
    // 创建容器
    const result = Array.isArray(target) ? [] : {};
    // 将新的结果存入到容器中
    map.set(target, result); // 键名，键值
    // 遍历target 数据
    for (let key in target) {
      // 判断当前对象身上是否包含该属性
      if (target.hasOwnProperty(key)) {
        // 将属性设置到result 结果数据中
        result[key] = deepClone3(target[key], map);
      }
    }
    return result;
  } else {
    return target;
  }
}

function deepClone4(target, map = new Map()) {
  // 判断
  if (typeof target === "object" && target !== null) {
    // 克隆数据之前，判断数据是否克隆过
    let cache = map.get(target);
    if (cache) {
      return cache;
    }
    // 判断目标数据的类型
    let isArray = Array.isArray(target)
    // 创建容器
    const result = isArray ? [] : {};
    // 将新的结果存入到容器中
    map.set(target, result); // 键名，键值
    // 如果目标数据为数组
    if (isArray) {
      // forEach 遍历
      target.forEach((item, index) => {
        result[index] = deepClone4(item, map);
      });
    }else{
      // 如果是对象，获取所有的键名，然后 forEach 遍历
      Object.keys(target).forEach(key => {
        result[key] = deepClone4(target[key], map);
      });
    }
    return result;
  } else {
    return target;
  }
}
