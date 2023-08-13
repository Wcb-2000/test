/*
 * Author: 吴楚标
 * Date: 2021-06-14 16:59:17
 * LastEditors: 吴楚标
 * LastEditTime: 2021-06-14 17:12:54
 * Description: 
*/
//  util.promisify
// 引入 util 模块
// const util = require('util');
// 引入fs模块
// const fs = require('fs');
// 返回一个新的函数
// let mineReadFile = util.promisify(fs.readFile);
let mineReadFile = require('util').promisify(require('fs').readFile);

mineReadFile('../resource/content.txt').then(value => {
  console.log(value.toString());
})