/*
 * Author: 吴楚标
 * Date: 2021-06-16 20:57:29
 * LastEditors: 吴楚标
 * LastEditTime: 2021-06-16 21:10:17
 * Description: 
*/
const fs = require('fs');
const util = require('util');
const mineReadFile = util.promisify(fs.readFile);

async function main(){
  try{
    // 读取文件内容
    let data1 = await mineReadFile('../resource/content.txt');
    let data2 = await mineReadFile('../resource/content1.txt');
    let data3 =await mineReadFile('../resource/content3.txt');
    console.log(data1 + data2 + data3);
  }catch(e){
   console.log(e);
  }
}

main();