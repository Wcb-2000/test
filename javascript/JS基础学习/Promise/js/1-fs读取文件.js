/*
 * Author: 吴楚标
 * Date: 2021-06-14 16:04:47
 * LastEditors: 吴楚标
 * LastEditTime: 2021-06-14 16:13:45
 * Description: 
*/
const fs = require('fs');

//回调函数形式
// fs.readFile('../resource/content.txt',(err, data) => {
//   // 如果出错 则抛出错误
//   if(err) throw err;
//   // 输出文件内容
//   console.log(data.toString());
// });

// Promise形式
let p =new Promise((resolve, reject) => {
  fs.readFile('../resource/content.txt',(err, data) => {
    // 如果出错
    if(err) reject(err);
    // 如果成功
    resolve(data);
  });

});

p.then(value => {
  console.log(value.toString());
},reason => {
  console.log(err);
})