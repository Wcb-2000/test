/*
 * Author: 吴楚标
 * Date: 2021-06-10 20:48:22
 * LastEditors: 吴楚标
 * LastEditTime: 2021-06-10 21:23:35
 * Description: 
*/
// 引入 nodeJS 内置模块 path
const path = require('path')

module.exports = {
  // 模式
  mode: 'development', //也可以用 production生产模式，对代码压缩；development 开发模式，有注释
  // 入口
  entry: './js/index.js',
  // 出口
  output: {
    // 打包文件夹
    path: path.resolve(__dirname, 'dist'),
    // 打包文件
    filename: 'my-utils.js',
    // 向外暴露的对象的名称
    library: 'myUtils',
    // 打包生成库可以通过esm/commonjs/reqirejs的语法引入
    libraryTarget: 'umd',
  },
}