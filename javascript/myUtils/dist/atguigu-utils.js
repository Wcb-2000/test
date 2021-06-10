/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["myUtils"] = factory();
	else
		root["myUtils"] = factory();
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/Array/arrMathod.js":
/*!*******************************!*\
  !*** ./js/Array/arrMathod.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"map\": () => (/* binding */ map),\n/* harmony export */   \"reduce\": () => (/* binding */ reduce),\n/* harmony export */   \"filter\": () => (/* binding */ filter),\n/* harmony export */   \"find\": () => (/* binding */ find),\n/* harmony export */   \"findIndex\": () => (/* binding */ findIndex),\n/* harmony export */   \"every\": () => (/* binding */ every),\n/* harmony export */   \"some\": () => (/* binding */ some)\n/* harmony export */ });\n/*\r\n * Author: 吴楚标\r\n * Date: 2021-06-07 20:45:49\r\n * LastEditors: 吴楚标\r\n * LastEditTime: 2021-06-10 22:22:16\r\n * Description: \r\n*/\r\n\r\n/**\r\n * \r\n * @param {Array} arr \r\n * @param {Function} callback \r\n */\r\nfunction map(arr, callback) {\r\n  //声明一个空数组\r\n  let result = [];\r\n\r\n  //遍历数组\r\n  for(let i = 0;i<arr.length;i++){\r\n    result.push(callback(arr[i], i));\r\n  }\r\n\r\n  //返回结果\r\n  return result;\r\n}\r\n\r\n/** \r\n * @param {Array} arr \r\n * @param {Function} callback \r\n * @param {*} initValue\r\n * \r\n*/\r\nfunction reduce(arr, callback, initValue){\r\n  // 声明变量\r\n  let result = initValue;\r\n  //执行回调\r\n  for(let i=0;i<arr.length;i++){\r\n    // 执行回调\r\n    result = callback(result, arr[i]);\r\n  }\r\n  // 返回结果\r\n  return result;\r\n}\r\n\r\n/**\r\n * \r\n * @param {Array} arr \r\n * @param {Function} callback \r\n */\r\nfunction filter(arr, callback){\r\n  //声明空数组\r\n  let result = [];\r\n  //遍历数组\r\n  for(let i = 0; i<arr.length;i++){\r\n    //执行回调\r\n    let res = callback(arr[i], i);\r\n    //判断为真则压入result中\r\n    if(res){\r\n      result.push(arr[i]);\r\n    }\r\n  }\r\n  return result;\r\n}\r\n\r\n/**\r\n * \r\n * @param {Array} arr \r\n * @param {Function} callback \r\n * \r\n */\r\nfunction find(arr, callback){\r\n  for(let i=0;i<arr.length;i++){\r\n    //遍历数组\r\n    let res = callback(arr[i], i);\r\n    //判断\r\n    if(res){\r\n      // 返回当前正在遍历的数组\r\n      return arr[i];\r\n    }\r\n  }\r\n  return undefined;\r\n}\r\n\r\n/**\r\n * \r\n * @param {Array} arr \r\n * @param {Function} callback \r\n * \r\n */\r\nfunction findIndex(arr, callback){\r\n  for(let i=0;i<arr.length;i++){\r\n    //遍历数组\r\n    let res = callback(arr[i], i);\r\n    //判断\r\n    if(res){\r\n      // 返回当前正在遍历的数组\r\n      return i;\r\n    }\r\n  }\r\n  // 如果没有遇到满足条件的返回 -1\r\n  return -1;\r\n}\r\n\r\n/**\r\n * \r\n * @param {Array} arr \r\n * @param {Function} callback \r\n * @returns \r\n */\r\nfunction every(arr, callback){\r\n  //遍历\r\n  for(let i = 0; i<arr.length;i++){\r\n    //执行回调,如果有不满足 则直接返回false  反之为true\r\n    if(!callback(arr[i], i)){\r\n      return false;\r\n    }\r\n  }\r\n  // 如果都满足 返回true\r\n  return true;\r\n}\r\n\r\nfunction some(arr, callback){\r\n  //遍历\r\n  for(let i = 0; i<arr.length;i++){\r\n    //执行回调,如果有满足 则直接返回true 反之返回false\r\n    if(callback(arr[i], i)){\r\n      return true;\r\n    }\r\n  }\r\n  // 如果都不满足 返回true\r\n  return false;\r\n}\n\n//# sourceURL=webpack://myUtils/./js/Array/arrMathod.js?");

/***/ }),

/***/ "./js/Array/chunk.js":
/*!***************************!*\
  !*** ./js/Array/chunk.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"chunk\": () => (/* binding */ chunk)\n/* harmony export */ });\n/*\r\n * Author: 吴楚标\r\n * Date: 2021-06-08 10:47:50\r\n * LastEditors: 吴楚标\r\n * LastEditTime: 2021-06-10 22:15:31\r\n * Description: \r\n*/\r\n\r\n//默认长度为1\r\nfunction chunk(arr, size = 1){\r\n  // 声明两个变量\r\n  let result = [];\r\n  let tmp = [];\r\n  //遍历\r\n  arr.forEach(item => {\r\n    //先压空数组，再压值。 判断长度为0 压入空数组\r\n    if(tmp.length === 0){\r\n      result.push(tmp);\r\n    }\r\n    // 压入值\r\n    tmp.push(item);\r\n    // 判断数组是否满了\r\n    if(tmp.length === size){\r\n      tmp = [];\r\n    }\r\n  })\r\n  return result;\r\n}\n\n//# sourceURL=webpack://myUtils/./js/Array/chunk.js?");

/***/ }),

/***/ "./js/Array/concat.js":
/*!****************************!*\
  !*** ./js/Array/concat.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"concat\": () => (/* binding */ concat)\n/* harmony export */ });\n/*\r\n * Author: 吴楚标\r\n * Date: 2021-06-07 22:06:26\r\n * LastEditors: 吴楚标\r\n * LastEditTime: 2021-06-10 22:25:00\r\n * Description: \r\n*/\r\nfunction concat(arr, ...args){\r\n  const result = arr;\r\n  //遍历数组\r\n  args.forEach(item => {\r\n    //判断item是否为数组,如果是则展开,不是则压入\r\n    if(Array.isArray(item)){\r\n      result.push(...item);\r\n    }else{\r\n      result.push(item)\r\n    };\r\n  });\r\n  return result;\r\n}\n\n//# sourceURL=webpack://myUtils/./js/Array/concat.js?");

/***/ }),

/***/ "./js/Array/difference.js":
/*!********************************!*\
  !*** ./js/Array/difference.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"difference\": () => (/* binding */ difference)\n/* harmony export */ });\n/*\r\n * Author: 吴楚标\r\n * Date: 2021-06-08 11:13:18\r\n * LastEditors: 吴楚标\r\n * LastEditTime: 2021-06-10 22:25:32\r\n * Description: \r\n*/\r\nfunction difference(arr1, arr2=[]){\r\n  //补充条件\r\n  if(arr1.length === 0){\r\n    return [];\r\n  }\r\n  if(arr2.length === 0){\r\n    //slice可以返回新数组\r\n    return arr1.slice();\r\n  }\r\n  \r\n  const result =arr1.filter(item => !arr2.includes(item));\r\n  return result;\r\n}\n\n//# sourceURL=webpack://myUtils/./js/Array/difference.js?");

/***/ }),

/***/ "./js/Array/drop.js":
/*!**************************!*\
  !*** ./js/Array/drop.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"drop\": () => (/* binding */ drop)\n/* harmony export */ });\n/*\r\n * Author: 吴楚标\r\n * Date: 2021-06-08 11:48:35\r\n * LastEditors: 吴楚标\r\n * LastEditTime: 2021-06-10 22:25:59\r\n * Description:\r\n */\r\nfunction drop(arr, size) {\r\n  //过滤原来数组，产生新数组\r\n  return arr.filter((value, index) => index >= size);\r\n}\r\n\r\nfunction dropRight(arr, size) {\r\n  return arr.filter((value, index) => index < arr.length-size);\r\n}\n\n//# sourceURL=webpack://myUtils/./js/Array/drop.js?");

/***/ }),

/***/ "./js/Array/flatten.js":
/*!*****************************!*\
  !*** ./js/Array/flatten.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"flatten1\": () => (/* binding */ flatten1),\n/* harmony export */   \"flatten2\": () => (/* binding */ flatten2)\n/* harmony export */ });\n/*\r\n * Author: 吴楚标\r\n * Date: 2021-06-08 10:11:19\r\n * LastEditors: 吴楚标\r\n * LastEditTime: 2021-06-10 22:26:29\r\n * Description:\r\n */\r\n/**\r\n * \r\n * @param {Array} arr \r\n * @returns \r\n */\r\nfunction flatten1(arr) {\r\n  let result = [];\r\n  //遍历\r\n  arr.forEach((item) => {\r\n    if (Array.isArray(item)) {\r\n      result = result.concat(flatten1(item));\r\n    } else {\r\n      result = result.concat(item);\r\n    }\r\n  });\r\n  \r\n  return result;\r\n}\r\n\r\n/**\r\n * \r\n * @param {Array} arr \r\n */\r\nfunction flatten2(arr){\r\n  //声明数组\r\n  let result = [...arr];\r\n  // 循环判断\r\n   while(result.some(item => Array.isArray(item))){\r\n     result = [].concat(...result);\r\n   }\r\n   return result;\r\n}\n\n//# sourceURL=webpack://myUtils/./js/Array/flatten.js?");

/***/ }),

/***/ "./js/Array/pull.js":
/*!**************************!*\
  !*** ./js/Array/pull.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"pull\": () => (/* binding */ pull),\n/* harmony export */   \"pullAll\": () => (/* binding */ pullAll)\n/* harmony export */ });\n/*\r\n * Author: 吴楚标\r\n * Date: 2021-06-08 11:26:13\r\n * LastEditors: 吴楚标\r\n * LastEditTime: 2021-06-10 22:27:33\r\n * Description: \r\n*/\r\n/**\r\n * \r\n * @param {Array} arr \r\n * @param  {*} args \r\n * @returns \r\n */\r\nfunction pull(arr, ...args){\r\n  //声明空数组\r\n  let result = [];\r\n  // 遍历arr\r\n  for(let i =0 ; i < arr.length ; i++){\r\n    // 判断 args中是否存在数组中的元素\r\n    if(args.includes(arr[i])){\r\n      // 先压入 再删除 ， 否则下标改变 压的是后面的值\r\n      result.push(arr[i]);\r\n      // splice删除的是原数组，符合题目\r\n      arr.splice(i,1);\r\n      // 下标自减 ， 因为数组删了一位，少一位，不自减会跳过一个值\r\n      i--;\r\n    }\r\n  }\r\n  return result;\r\n}\r\n\r\n\r\nfunction pullAll(arr, value){\r\n  return pull(arr, ...value);\r\n}\r\n\n\n//# sourceURL=webpack://myUtils/./js/Array/pull.js?");

/***/ }),

/***/ "./js/Array/slice.js":
/*!***************************!*\
  !*** ./js/Array/slice.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"slice\": () => (/* binding */ slice)\n/* harmony export */ });\n/*\r\n * Author: 吴楚标\r\n * Date: 2021-06-07 22:24:09\r\n * LastEditors: 吴楚标\r\n * LastEditTime: 2021-06-10 22:28:44\r\n * Description: \r\n*/\r\nfunction slice(arr, begin, end){\r\n  //若arr数组长度为 0\r\n  if(arr.length === 0){\r\n    return [];\r\n  }\r\n  \r\n  //判断 begin\r\n  begin = begin || 0;\r\n  if(begin >=arr.length){\r\n    return [];\r\n  }\r\n  \r\n  //判断end\r\n  end = end || arr.length;\r\n  if(end < begin){\r\n    end = arr.length;\r\n  }\r\n\r\n  //声明空数组   ,以为因为返回的是新数组\r\n  const result = [];\r\n  //遍历数组\r\n  for(let i = 0 ; i<arr.length;i++){\r\n    if(i >= begin && i < end){\r\n      result.push(arr[i]);\r\n    }\r\n  }\r\n  return result;\r\n}\n\n//# sourceURL=webpack://myUtils/./js/Array/slice.js?");

/***/ }),

/***/ "./js/Array/unique.js":
/*!****************************!*\
  !*** ./js/Array/unique.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"unique1\": () => (/* binding */ unique1),\n/* harmony export */   \"unique2\": () => (/* binding */ unique2),\n/* harmony export */   \"unique3\": () => (/* binding */ unique3)\n/* harmony export */ });\n/*\r\n * Author: 吴楚标\r\n * Date: 2021-06-07 21:43:23\r\n * LastEditors: 吴楚标\r\n * LastEditTime: 2021-06-10 22:29:30\r\n * Description: \r\n*/\r\nfunction unique1(arr){\r\n  //声明空数组\r\n  const result = [];\r\n  arr.forEach(item => {\r\n    //检测新数组中有没该值 ,有则插入  -1表示不存在该值\r\n    if(result.indexOf(item) === -1){\r\n      result.push(item);\r\n    }\r\n  });\r\n  return result;\r\n}\r\n\r\nfunction unique2(arr){\r\n  //声明空数组\r\n  const result = [];\r\n  //声明空对象\r\n  const obj = {};\r\n  //遍历\r\n  arr.forEach(item => {\r\n    if(obj[item] === undefined){\r\n    obj[item] = true;\r\n    result.push(item)\r\n    };\r\n  });\r\n  return result;\r\n}\r\n\r\nfunction unique3(arr){\r\n   //Set() 中的元素唯一\r\n   //let set = new Set(arr)\r\n   //将set展开创建为数组\r\n   //let array = [...set]\r\n   \r\n  // let result = [...new Set(arr)];\r\n  \r\n  return [...new Set(arr)];\r\n}\n\n//# sourceURL=webpack://myUtils/./js/Array/unique.js?");

/***/ }),

/***/ "./js/Function/apply.js":
/*!******************************!*\
  !*** ./js/Function/apply.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"apply\": () => (/* binding */ apply)\n/* harmony export */ });\n/*\r\n * Author: 吴楚标\r\n * Date: 2021-06-06 15:23:53\r\n * LastEditors: 吴楚标\r\n * LastEditTime: 2021-06-10 22:37:47\r\n * Description: \r\n*/\r\n  function apply(Fn, obj, args){\r\n    //判断\r\n    if(obj === undefined || obj === null){\r\n      obj = globalThis;\r\n    }\r\n    //为 obj 添加临时的方法\r\n    obj.temp = Fn;\r\n    //执行方法\r\n    let result = obj.temp(...args);\r\n    //删除临时属性\r\n    delete obj.temp;\r\n    //返回结果\r\n    return result;\r\n  }\n\n//# sourceURL=webpack://myUtils/./js/Function/apply.js?");

/***/ }),

/***/ "./js/Function/bind.js":
/*!*****************************!*\
  !*** ./js/Function/bind.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"bind\": () => (/* binding */ bind)\n/* harmony export */ });\n/* harmony import */ var _call__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./call */ \"./js/Function/call.js\");\n/*\r\n * Author: 吴楚标\r\n * Date: 2021-06-06 15:40:35\r\n * LastEditors: 吴楚标\r\n * LastEditTime: 2021-06-10 22:39:30\r\n * Description: \r\n*/\r\n\r\nfunction bind(Fn, obj, ...args){\r\n  //返回新的函数\r\n  return function(...args2){\r\n    //执行call函数\r\n    return (0,_call__WEBPACK_IMPORTED_MODULE_0__.call)(Fn, obj, ...args, ...args2);\r\n  }\r\n}\n\n//# sourceURL=webpack://myUtils/./js/Function/bind.js?");

/***/ }),

/***/ "./js/Function/call.js":
/*!*****************************!*\
  !*** ./js/Function/call.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"call\": () => (/* binding */ call)\n/* harmony export */ });\n/*\r\n * Author: 吴楚标\r\n * Date: 2021-06-06 14:49:34\r\n * LastEditors: 吴楚标\r\n * LastEditTime: 2021-06-10 22:39:48\r\n * Description:\r\n*/\r\nfunction call(Fn, obj, ...args){\r\n  if(obj === undefined || obj === null){\r\n    obj = globalThis; //指向全局对象\r\n  }\r\n  //为 obj 添加临时的方法\r\n  obj.temp = Fn;\r\n  //调用 temp 方法\r\n  let result = obj.temp(...args);\r\n  //删除 temp 方法\r\n  delete obj.temp;\r\n  //返回执行结果\r\n  return result;\r\n}\r\n\n\n//# sourceURL=webpack://myUtils/./js/Function/call.js?");

/***/ }),

/***/ "./js/Function/debounce.js":
/*!*********************************!*\
  !*** ./js/Function/debounce.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"debounce\": () => (/* binding */ debounce)\n/* harmony export */ });\n/*\r\n * Author: 吴楚标\r\n * Date: 2021-06-06 17:12:14\r\n * LastEditors: 吴楚标\r\n * LastEditTime: 2021-06-06 17:40:44\r\n * Description: \r\n*/\r\nfunction debounce(callback, time){\r\n  //定时器变量\r\n  let timeId = null;\r\n\r\n  //返回一个函数\r\n  return function(e){\r\n    // 判断\r\n    if(timeId !== null){\r\n      // 清空定时器\r\n      clearTimeout(timeId);\r\n    }\r\n    // 启动定时器\r\n    timeId = setTimeout(() => {\r\n      //执行回调\r\n      callback.call(this, e);\r\n      //重置定时器变量\r\n      timeId = null;  // 如果不重置，判断部分则没有意义， 逻辑意义回到初始位置\r\n    }, time);\r\n  }\r\n}\n\n//# sourceURL=webpack://myUtils/./js/Function/debounce.js?");

/***/ }),

/***/ "./js/Function/throttle.js":
/*!*********************************!*\
  !*** ./js/Function/throttle.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"throttle\": () => (/* binding */ throttle)\n/* harmony export */ });\n/*\r\n * Author: 吴楚标\r\n * Date: 2021-06-06 16:03:20\r\n * LastEditors: 吴楚标\r\n * LastEditTime: 2021-06-10 22:41:30\r\n * Description: \r\n*/\r\nfunction throttle(callback, wait){\r\n    //定义开始时间\r\n    let start = 0;\r\n    //返回结果是一个函数\r\n    return function(e){\r\n      //获取当前时间戳\r\n      let now = Date.now();\r\n      //判断\r\n      if(now - start >= wait){\r\n        //若满足条件，则执行回调函数\r\n        callback.call(this, e);\r\n        //修改开始时间\r\n        start = now;\r\n      }\r\n    }\r\n}\n\n//# sourceURL=webpack://myUtils/./js/Function/throttle.js?");

/***/ }),

/***/ "./js/Object/clone.js":
/*!****************************!*\
  !*** ./js/Object/clone.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"clone1\": () => (/* binding */ clone1),\n/* harmony export */   \"clone2\": () => (/* binding */ clone2),\n/* harmony export */   \"deepClone1\": () => (/* binding */ deepClone1),\n/* harmony export */   \"deepClone2\": () => (/* binding */ deepClone2),\n/* harmony export */   \"deepClone3\": () => (/* binding */ deepClone3),\n/* harmony export */   \"deepClone4\": () => (/* binding */ deepClone4)\n/* harmony export */ });\n/*\r\n * Author: 吴楚标\r\n * Date: 2021-06-09 10:15:08\r\n * LastEditors: 吴楚标\r\n * LastEditTime: 2021-06-10 22:42:22\r\n * Description:\r\n */\r\nfunction clone1(target) {\r\n  // 类型判断 {} [] null\r\n  if (typeof target === \"object\" && target !== null) {\r\n    // 判断是否为数组\r\n    if (Array.isArray(target)) {\r\n      return [...target];\r\n    } else {\r\n      return { ...target };\r\n    }\r\n  } else {\r\n    return target;\r\n  }\r\n}\r\n\r\nfunction clone2(target) {\r\n  // 判断\r\n  if (typeof target === \"object\" && target !== null) {\r\n    // 创建容器\r\n    const result = Array.isArray(target) ? [] : {};\r\n    // 遍历target 数据\r\n    for (let key in target) {\r\n      // 判断当前对象身上是否包含该属性\r\n      if (target.hasOwnProperty(key)) {\r\n        // 将属性设置到result 结果数据中\r\n        result[key] = target[key];\r\n      }\r\n    }\r\n    return result;\r\n  } else {\r\n    return target;\r\n  }\r\n}\r\n\r\nfunction deepClone1(target) {\r\n  // 通过数据创建 JSON 格式字符串\r\n  let str = JSON.stringify(target);\r\n  // 将JSON 字符串创建为JS数据\r\n  let data = JSON.parse(str);\r\n  return data;\r\n}\r\n\r\nfunction deepClone2(target) {\r\n  // 判断\r\n  if (typeof target === \"object\" && target !== null) {\r\n    // 创建容器\r\n    const result = Array.isArray(target) ? [] : {};\r\n    // 遍历target 数据\r\n    for (let key in target) {\r\n      // 判断当前对象身上是否包含该属性\r\n      if (target.hasOwnProperty(key)) {\r\n        // 将属性设置到result 结果数据中\r\n        result[key] = deepClone2(target[key]);\r\n      }\r\n    }\r\n    return result;\r\n  } else {\r\n    return target;\r\n  }\r\n}\r\n\r\nfunction deepClone3(target, map = new Map()) {\r\n  // 判断\r\n  if (typeof target === \"object\" && target !== null) {\r\n    // 克隆数据之前，判断数据是否克隆过\r\n    let cache = map.get(target);\r\n    if (cache) {\r\n      return cache;\r\n    }\r\n    // 创建容器\r\n    const result = Array.isArray(target) ? [] : {};\r\n    // 将新的结果存入到容器中\r\n    map.set(target, result); // 键名，键值\r\n    // 遍历target 数据\r\n    for (let key in target) {\r\n      // 判断当前对象身上是否包含该属性\r\n      if (target.hasOwnProperty(key)) {\r\n        // 将属性设置到result 结果数据中\r\n        result[key] = deepClone3(target[key], map);\r\n      }\r\n    }\r\n    return result;\r\n  } else {\r\n    return target;\r\n  }\r\n}\r\n\r\nfunction deepClone4(target, map = new Map()) {\r\n  // 判断\r\n  if (typeof target === \"object\" && target !== null) {\r\n    // 克隆数据之前，判断数据是否克隆过\r\n    let cache = map.get(target);\r\n    if (cache) {\r\n      return cache;\r\n    }\r\n    // 判断目标数据的类型\r\n    let isArray = Array.isArray(target)\r\n    // 创建容器\r\n    const result = isArray ? [] : {};\r\n    // 将新的结果存入到容器中\r\n    map.set(target, result); // 键名，键值\r\n    // 如果目标数据为数组\r\n    if (isArray) {\r\n      // forEach 遍历\r\n      target.forEach((item, index) => {\r\n        result[index] = deepClone4(item, map);\r\n      });\r\n    }else{\r\n      // 如果是对象，获取所有的键名，然后 forEach 遍历\r\n      Object.keys(target).forEach(key => {\r\n        result[key] = deepClone4(target[key], map);\r\n      });\r\n    }\r\n    return result;\r\n  } else {\r\n    return target;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://myUtils/./js/Object/clone.js?");

/***/ }),

/***/ "./js/Object/mergeObject.js":
/*!**********************************!*\
  !*** ./js/Object/mergeObject.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"mergeObject\": () => (/* binding */ mergeObject)\n/* harmony export */ });\n/*\r\n * Author: 吴楚标\r\n * Date: 2021-06-09 09:48:18\r\n * LastEditors: 吴楚标\r\n * LastEditTime: 2021-06-10 22:43:39\r\n * Description: \r\n*/\r\nfunction mergeObject(...objs){\r\n  // 声明空对象\r\n  const result = {};\r\n  // 遍历所有的参数对象\r\n  objs.forEach(obj => {\r\n    // 获取当前对象所有的属性\r\n    Object.keys(obj).forEach(key => {\r\n      // 检测 result 中 是否存在key值\r\n      if(result.hasOwnProperty(key)){\r\n        result[key] = [].concat(result[key], obj[key]);\r\n      }else{\r\n        // 如果没有直接写入\r\n        result[key] = obj[key];\r\n      }\r\n    });\r\n  });\r\n  return result;\r\n}\r\n\n\n//# sourceURL=webpack://myUtils/./js/Object/mergeObject.js?");

/***/ }),

/***/ "./js/Object/myInstanceOf.js":
/*!***********************************!*\
  !*** ./js/Object/myInstanceOf.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"myInstanceOf\": () => (/* binding */ myInstanceOf)\n/* harmony export */ });\n/*\r\n * Author: 吴楚标\r\n * Date: 2021-06-09 09:28:41\r\n * LastEditors: 吴楚标\r\n * LastEditTime: 2021-06-10 22:44:09\r\n * Description: \r\n*/\r\nfunction myInstanceOf(obj, Fn){\r\n  // 获取函数的显示原型\r\n  let prototype = Fn.prototype;\r\n  // 获取obj的隐式原型对象\r\n  let proto = obj.__proto__;\r\n  while(proto){\r\n    // 检测原型对象是否相等\r\n    if(prototype === proto){\r\n      return true;\r\n    }\r\n    // 这个对象不是，取这个对象的上一个对象对比\r\n    proto = proto.__proto__;\r\n  }\r\n  return false;\r\n}\r\n\n\n//# sourceURL=webpack://myUtils/./js/Object/myInstanceOf.js?");

/***/ }),

/***/ "./js/Object/newInstance.js":
/*!**********************************!*\
  !*** ./js/Object/newInstance.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"newInstance\": () => (/* binding */ newInstance)\n/* harmony export */ });\n/*\r\n * Author: 吴楚标\r\n * Date: 2021-06-08 12:08:41\r\n * LastEditors: 吴楚标\r\n * LastEditTime: 2021-06-10 22:44:42\r\n * Description: \r\n*/\r\nfunction newInstance(Fn, ...args){\r\n  // 创建新对象\r\n  const obj = {};\r\n  // 修改函数内部指针指向新对象 并执行\r\n  // Fn.call(obj, ...args);\r\n  const result = Fn.call(obj, ...args);\r\n  //修改新对象 原型对象\r\n  obj.__proto__ = Fn.prototype;\r\n  // 返回新对象 完善功能趋近原函数\r\n  // return obj\r\n  \r\n  return result instanceof Object ? result : obj;\r\n}\n\n//# sourceURL=webpack://myUtils/./js/Object/newInstance.js?");

/***/ }),

/***/ "./js/String.js":
/*!**********************!*\
  !*** ./js/String.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"reverseString\": () => (/* binding */ reverseString),\n/* harmony export */   \"palindrome\": () => (/* binding */ palindrome),\n/* harmony export */   \"truncate\": () => (/* binding */ truncate)\n/* harmony export */ });\n/*\r\n * Author: 吴楚标\r\n * Date: 2021-06-09 16:41:08\r\n * LastEditors: 吴楚标\r\n * LastEditTime: 2021-06-10 22:45:58\r\n * Description: \r\n*/\r\nfunction reverseString(str){\r\n  // 将字符串转为数组\r\n  // let arr = str.split('');\r\n  let arr = [...str];\r\n  // 反转数组\r\n  arr.reverse();\r\n  // 拼接数组 输出字符串\r\n  let result = arr.join('');\r\n  return result;\r\n}\r\n\r\nfunction palindrome(str){\r\n  // 反转是否相等\r\n  return reverseString(str) === str;\r\n}\r\n\r\nfunction truncate(str, size){\r\n   return str.slice(0,size) + '...';\r\n}\n\n//# sourceURL=webpack://myUtils/./js/String.js?");

/***/ }),

/***/ "./js/axios/index.js":
/*!***************************!*\
  !*** ./js/axios/index.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"axios\": () => (/* binding */ axios)\n/* harmony export */ });\n/*\r\n * Author: 吴楚标\r\n * Date: 2021-06-10 16:43:52\r\n * LastEditors: 吴楚标\r\n * LastEditTime: 2021-06-10 22:30:30\r\n * Description:\r\n */\r\nfunction axios({ method, url, params, data }) {\r\n  // 方法转换大写\r\n  method = method.toUpperCase();\r\n  // 返回值\r\n  return new Promise((resolve, reject) => {\r\n    // 四步骤\r\n    // 1. 创建对象\r\n    const xhr = new XMLHttpRequest();\r\n    // 2. 初始化\r\n    // 处理params 对象 a=100&b=200\r\n    let str = \"\";\r\n    for (let k in params) {\r\n      str += `${k}=${params[k]}&`;\r\n    }\r\n    str = str.slice(0, -1);\r\n    xhr.open(method, url + \"?\" + str);\r\n    // 3. 发送\r\n    if (method === \"POST\" || method === \"PUT\" || method === \"DELETE\") {\r\n      // Content-type mime类型设置\r\n      xhr.setRequestHeader(\"Content-type\", \"application/json\");\r\n      // 设置请求体\r\n      xhr.send(JSON.stringify(data));\r\n    } else {\r\n      xhr.send();\r\n    }\r\n    // 设置相应结果的类型为JSON\r\n    xhr.responseType = \"json\";\r\n    // 4. 处理结果\r\n    xhr.onreadystatechange = function () {\r\n      //\r\n      if (xhr.readyState === 4) {\r\n        // 判断响应状态码 2xx表示成功\r\n        if (xhr.status >= 200 && xhr.status < 300) {\r\n          // 成功的状态\r\n          resolve({\r\n            status: xhr.status,\r\n            message: xhr.statusText,\r\n            body: xhr.response,\r\n          });\r\n        } else {\r\n          reject(new Error(\"请求失败，失败的状态码为\" + xhr.status));\r\n        }\r\n      }\r\n    };\r\n  });\r\n}\r\n\r\naxios.get = function (url, options){\r\n  // 发送Ajax请求 GET\r\n  let config = Object.assign(options,{method: 'GET', url:url})\r\n  return axios(config);\r\n}\r\n\r\naxios.post = function (url, options){\r\n  // 发送Ajax请求 GET\r\n  let config = Object.assign(options,{method: 'POST', url:url})\r\n  return axios(config);\r\n}\r\n\r\naxios.put = function (url, options){\r\n  // 发送Ajax请求 GET\r\n  let config = Object.assign(options,{method: 'PUT', url:url})\r\n  return axios(config);\r\n}\r\n\r\naxios.delete = function (url, options){\r\n  // 发送Ajax请求 GET\r\n  let config = Object.assign(options,{method: 'DELETE', url:url})\r\n  return axios(config);\r\n}\n\n//# sourceURL=webpack://myUtils/./js/axios/index.js?");

/***/ }),

/***/ "./js/event-bind/event-bind.js":
/*!*************************************!*\
  !*** ./js/event-bind/event-bind.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addEventListener\": () => (/* binding */ addEventListener)\n/* harmony export */ });\n/*\r\n * Author: 吴楚标\r\n * Date: 2021-06-09 17:24:54\r\n * LastEditors: 吴楚标\r\n * LastEditTime: 2021-06-10 22:31:06\r\n * Description:\r\n */\r\nfunction addEventListener(el, type, fn, selector) {\r\n  // 判断 el 的类型\r\n  if (typeof el === \"string\") {\r\n    el = document.querySelector(el);\r\n  }\r\n  // 事件绑定\r\n  // 若没有传递子元素的选择器，则给el元素绑定事件\r\n  if (!selector) {\r\n    el.addEventListener(type, fn);\r\n  } else {\r\n    el.addEventListener(type, function (e) {\r\n      // 获取点击的目标事件源\r\n      const target = e.target;\r\n      // console.log(target); //li\r\n      // 判断选择器与目标元素是否相符合,匹配\r\n      if (target.matches(selector)) {\r\n        // 若符合 则调用回调\r\n        fn.call(target, e);\r\n      }\r\n    });\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://myUtils/./js/event-bind/event-bind.js?");

/***/ }),

/***/ "./js/event-bus/index.js":
/*!*******************************!*\
  !*** ./js/event-bus/index.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"eventBus\": () => (/* binding */ eventBus)\n/* harmony export */ });\n/*\r\n * Author: 吴楚标\r\n * Date: 2021-06-09 21:03:08\r\n * LastEditors: 吴楚标\r\n * LastEditTime: 2021-06-10 22:35:20\r\n * Description: \r\n*/\r\nconst eventBus = {\r\n  // 保存类型与回调的容器\r\n  callbacks:{}\r\n}\r\n\r\n// 绑定事件\r\neventBus.on = function(type, callback){\r\n  // 判断\r\n  if(this.callbacks[type]){\r\n    // 如果 callbacks 属性中存在该类型事件\r\n    this.callbacks[type].push(callback);\r\n  }else{\r\n    // 如果 callbacks 属性中 不存在该类事件\r\n    this.callbacks[type] = [callback];\r\n  }\r\n}\r\n\r\n// 触发事件\r\neventBus.emit = function(type, data){\r\n  // 判断\r\n  if(this.callbacks[type] && this.callbacks[type].length > 0 ){\r\n    // 遍历数组\r\n    this.callbacks[type].forEach(callback => {\r\n      // 执行回调\r\n      callback(data);\r\n    });\r\n  }\r\n}\r\n\r\n// 事件的解绑\r\neventBus.off = function(eventName){\r\n  // 若传入 eventName 事件类型\r\n  if(eventName){\r\n    // 只删除eventName对呀的事件回调\r\n    delete this.callbacks[eventName];\r\n  }else{\r\n    // 传入的eventName为空时 ，全部清除\r\n    this.callbacks ={};\r\n  }\r\n}\n\n//# sourceURL=webpack://myUtils/./js/event-bus/index.js?");

/***/ }),

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"test\": () => (/* binding */ test),\n/* harmony export */   \"aaaa\": () => (/* binding */ aaaa),\n/* harmony export */   \"chunk\": () => (/* reexport safe */ _Array_chunk__WEBPACK_IMPORTED_MODULE_0__.chunk),\n/* harmony export */   \"map\": () => (/* reexport safe */ _Array_arrMathod__WEBPACK_IMPORTED_MODULE_1__.map),\n/* harmony export */   \"reduce\": () => (/* reexport safe */ _Array_arrMathod__WEBPACK_IMPORTED_MODULE_1__.reduce),\n/* harmony export */   \"filter\": () => (/* reexport safe */ _Array_arrMathod__WEBPACK_IMPORTED_MODULE_1__.filter),\n/* harmony export */   \"find\": () => (/* reexport safe */ _Array_arrMathod__WEBPACK_IMPORTED_MODULE_1__.find),\n/* harmony export */   \"findIndex\": () => (/* reexport safe */ _Array_arrMathod__WEBPACK_IMPORTED_MODULE_1__.findIndex),\n/* harmony export */   \"every\": () => (/* reexport safe */ _Array_arrMathod__WEBPACK_IMPORTED_MODULE_1__.every),\n/* harmony export */   \"some\": () => (/* reexport safe */ _Array_arrMathod__WEBPACK_IMPORTED_MODULE_1__.some),\n/* harmony export */   \"concat\": () => (/* reexport safe */ _Array_concat__WEBPACK_IMPORTED_MODULE_2__.concat),\n/* harmony export */   \"difference\": () => (/* reexport safe */ _Array_difference__WEBPACK_IMPORTED_MODULE_3__.difference),\n/* harmony export */   \"drop\": () => (/* reexport safe */ _Array_drop__WEBPACK_IMPORTED_MODULE_4__.drop),\n/* harmony export */   \"flatten1\": () => (/* reexport safe */ _Array_flatten__WEBPACK_IMPORTED_MODULE_5__.flatten1),\n/* harmony export */   \"flatten2\": () => (/* reexport safe */ _Array_flatten__WEBPACK_IMPORTED_MODULE_5__.flatten2),\n/* harmony export */   \"pull\": () => (/* reexport safe */ _Array_pull__WEBPACK_IMPORTED_MODULE_6__.pull),\n/* harmony export */   \"pullAll\": () => (/* reexport safe */ _Array_pull__WEBPACK_IMPORTED_MODULE_6__.pullAll),\n/* harmony export */   \"slice\": () => (/* reexport safe */ _Array_slice__WEBPACK_IMPORTED_MODULE_7__.slice),\n/* harmony export */   \"unique1\": () => (/* reexport safe */ _Array_unique__WEBPACK_IMPORTED_MODULE_8__.unique1),\n/* harmony export */   \"unique2\": () => (/* reexport safe */ _Array_unique__WEBPACK_IMPORTED_MODULE_8__.unique2),\n/* harmony export */   \"unique3\": () => (/* reexport safe */ _Array_unique__WEBPACK_IMPORTED_MODULE_8__.unique3),\n/* harmony export */   \"axios\": () => (/* reexport safe */ _axios_index__WEBPACK_IMPORTED_MODULE_9__.axios),\n/* harmony export */   \"addEventListener\": () => (/* reexport safe */ _event_bind_event_bind__WEBPACK_IMPORTED_MODULE_10__.addEventListener),\n/* harmony export */   \"eventBus\": () => (/* reexport safe */ _event_bus_index__WEBPACK_IMPORTED_MODULE_11__.eventBus),\n/* harmony export */   \"apply\": () => (/* reexport safe */ _Function_apply__WEBPACK_IMPORTED_MODULE_12__.apply),\n/* harmony export */   \"call\": () => (/* reexport safe */ _Function_call__WEBPACK_IMPORTED_MODULE_13__.call),\n/* harmony export */   \"bind\": () => (/* reexport safe */ _Function_bind__WEBPACK_IMPORTED_MODULE_14__.bind),\n/* harmony export */   \"debounce\": () => (/* reexport safe */ _Function_debounce__WEBPACK_IMPORTED_MODULE_15__.debounce),\n/* harmony export */   \"throttle\": () => (/* reexport safe */ _Function_throttle__WEBPACK_IMPORTED_MODULE_16__.throttle),\n/* harmony export */   \"clone1\": () => (/* reexport safe */ _Object_clone__WEBPACK_IMPORTED_MODULE_17__.clone1),\n/* harmony export */   \"clone2\": () => (/* reexport safe */ _Object_clone__WEBPACK_IMPORTED_MODULE_17__.clone2),\n/* harmony export */   \"deepClone1\": () => (/* reexport safe */ _Object_clone__WEBPACK_IMPORTED_MODULE_17__.deepClone1),\n/* harmony export */   \"deepClone2\": () => (/* reexport safe */ _Object_clone__WEBPACK_IMPORTED_MODULE_17__.deepClone2),\n/* harmony export */   \"deepClone3\": () => (/* reexport safe */ _Object_clone__WEBPACK_IMPORTED_MODULE_17__.deepClone3),\n/* harmony export */   \"deepClone4\": () => (/* reexport safe */ _Object_clone__WEBPACK_IMPORTED_MODULE_17__.deepClone4),\n/* harmony export */   \"mergeObject\": () => (/* reexport safe */ _Object_mergeObject__WEBPACK_IMPORTED_MODULE_18__.mergeObject),\n/* harmony export */   \"myInstanceOf\": () => (/* reexport safe */ _Object_myInstanceOf__WEBPACK_IMPORTED_MODULE_19__.myInstanceOf),\n/* harmony export */   \"newInstance\": () => (/* reexport safe */ _Object_newInstance__WEBPACK_IMPORTED_MODULE_20__.newInstance),\n/* harmony export */   \"PubSub\": () => (/* reexport safe */ _pub_sub_index__WEBPACK_IMPORTED_MODULE_21__.PubSub),\n/* harmony export */   \"reverseString\": () => (/* reexport safe */ _String__WEBPACK_IMPORTED_MODULE_22__.reverseString),\n/* harmony export */   \"palindrome\": () => (/* reexport safe */ _String__WEBPACK_IMPORTED_MODULE_22__.palindrome),\n/* harmony export */   \"truncate\": () => (/* reexport safe */ _String__WEBPACK_IMPORTED_MODULE_22__.truncate)\n/* harmony export */ });\n/* harmony import */ var _Array_chunk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Array/chunk */ \"./js/Array/chunk.js\");\n/* harmony import */ var _Array_arrMathod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Array/arrMathod */ \"./js/Array/arrMathod.js\");\n/* harmony import */ var _Array_concat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Array/concat */ \"./js/Array/concat.js\");\n/* harmony import */ var _Array_difference__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Array/difference */ \"./js/Array/difference.js\");\n/* harmony import */ var _Array_drop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Array/drop */ \"./js/Array/drop.js\");\n/* harmony import */ var _Array_flatten__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Array/flatten */ \"./js/Array/flatten.js\");\n/* harmony import */ var _Array_pull__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Array/pull */ \"./js/Array/pull.js\");\n/* harmony import */ var _Array_slice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Array/slice */ \"./js/Array/slice.js\");\n/* harmony import */ var _Array_unique__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Array/unique */ \"./js/Array/unique.js\");\n/* harmony import */ var _axios_index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./axios/index */ \"./js/axios/index.js\");\n/* harmony import */ var _event_bind_event_bind__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./event-bind/event-bind */ \"./js/event-bind/event-bind.js\");\n/* harmony import */ var _event_bus_index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./event-bus/index */ \"./js/event-bus/index.js\");\n/* harmony import */ var _Function_apply__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Function/apply */ \"./js/Function/apply.js\");\n/* harmony import */ var _Function_call__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Function/call */ \"./js/Function/call.js\");\n/* harmony import */ var _Function_bind__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Function/bind */ \"./js/Function/bind.js\");\n/* harmony import */ var _Function_debounce__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Function/debounce */ \"./js/Function/debounce.js\");\n/* harmony import */ var _Function_throttle__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Function/throttle */ \"./js/Function/throttle.js\");\n/* harmony import */ var _Object_clone__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Object/clone */ \"./js/Object/clone.js\");\n/* harmony import */ var _Object_mergeObject__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Object/mergeObject */ \"./js/Object/mergeObject.js\");\n/* harmony import */ var _Object_myInstanceOf__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./Object/myInstanceOf */ \"./js/Object/myInstanceOf.js\");\n/* harmony import */ var _Object_newInstance__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./Object/newInstance */ \"./js/Object/newInstance.js\");\n/* harmony import */ var _pub_sub_index__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pub-sub/index */ \"./js/pub-sub/index.js\");\n/* harmony import */ var _String__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./String */ \"./js/String.js\");\n/*\r\n * Author: 吴楚标\r\n * Date: 2021-06-10 21:10:50\r\n * LastEditors: 吴楚标\r\n * LastEditTime: 2021-06-10 23:35:58\r\n * Description: \r\n*/\r\n//  在入口JS中暴露功能\r\nfunction test(){\r\n  // \r\n  document.write('测试自定义包');\r\n  console.log('test()');\r\n}\r\nfunction aaaa(){\r\n  // \r\n  document.write('测试自定义包');\r\n  console.log('aaaa()');\r\n}\r\n\r\n// 引入其他文件、再暴露\r\n// 1.目标文件中暴露数据  export 数据\r\n// import {chunk} from './Array/chunk'\r\n// 2. 暴露数据\r\n// export {chunk};\r\n\r\n// 此方法等效上面的方法\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://myUtils/./js/index.js?");

/***/ }),

/***/ "./js/pub-sub/index.js":
/*!*****************************!*\
  !*** ./js/pub-sub/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PubSub\": () => (/* binding */ PubSub)\n/* harmony export */ });\n/*\r\n * Author: 吴楚标\r\n * Date: 2021-06-09 22:13:47\r\n * LastEditors: 吴楚标\r\n * LastEditTime: 2021-06-10 22:45:25\r\n * Description: \r\n*/\r\nconst PubSub = {\r\n  // 订阅唯一id\r\n  id:1,\r\n  // 频道与回调保存容器\r\n  callbacks: {\r\n    // pay:{\r\n    //   token_1:fn\r\n    //   token_2:fn\r\n    // }\r\n  }\r\n}\r\n\r\n/* 订阅频道 */\r\nPubSub.subscribe = function(channel, callback){\r\n  // 创建唯一的编号\r\n  let token = \"token_\" +this.id++;\r\n  // 判断 callbacks 属性是否存在 pay\r\n  if(this.callbacks[channel]){\r\n    // token是变量 所以要[]\r\n    this.callbacks[channel][token] = callback;\r\n  }else{\r\n    this.callbacks[channel] = {\r\n      [token]:callback\r\n    }\r\n  }\r\n  return token;\r\n}\r\n\r\n\r\n/* 发布消息 */\r\nPubSub.publish = function(channel, data){\r\n  // 获取当前频道中的所有回调\r\n  if(this.callbacks[channel]){\r\n    Object.values(this.callbacks[channel]).forEach(callback => {\r\n      // 执行回调\r\n      callback(data);\r\n    })\r\n  }\r\n}\r\n\r\n/* 取消订阅 \r\n1.没有传值，flag为undefined\r\n2.传入token字符串\r\n3.msgName字符串*/\r\nPubSub.unsubscribe = function (flag){\r\n  // 如果flag为undefined 清空所有订阅\r\n  if(flag === undefined){\r\n    this.callbacks = {};\r\n  }else if(typeof flag === 'string'){\r\n    // 判断是否为 token_ 开头\r\n    if(flag.indexOf('token_') === 0){\r\n      // 如果是 表示 是一个订阅id\r\n      let callbackObj = Object.values(this.callbacks).find(obj => obj.hasOwnProperty(flag))\r\n      // 判断\r\n      if(callbackObj){\r\n        delete callbackObj[flag];\r\n      }\r\n    }else{\r\n      // 表明是一个频道名称\r\n      delete this.callbacks[flag];\r\n    }\r\n  }\r\n}\n\n//# sourceURL=webpack://myUtils/./js/pub-sub/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/index.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});