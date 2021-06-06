/*
 * Author: 吴楚标
 * Date: 2021-05-11 20:04:30
 * LastEditors: 吴楚标
 * LastEditTime: 2021-05-11 22:11:41
 * Description: 
*/
//1.引入fs模块 (node  自带的核心功能)
const fs = require('fs');   

//2. 调用方法读取文件
// fs.readFile('../你好.md',(err,data)=>{
//     //如果失败，则抛出异常
//     if(err) throw err;
//     //如果没有出错，则输出内容
//     console.log(data.toString());
// });

//3.使用Promise封装
 const p = new Promise(function(resolve,reject){
     fs.readFile('../你好.md',(err,data)=>{
         //判断如果失败
         if(err) reject(err);
         //如果成功
         resolve(data);
     })
 });
 
 p.then(function(value){
     console.log(value.toString())      //toString()将buffer转为内容
 },function(reason){
    console.log("读取失败！");
 })