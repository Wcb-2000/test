/*
 * Author: 吴楚标
 * Date: 2021-05-11 21:59:05
 * LastEditors: 吴楚标
 * LastEditTime: 2021-05-11 22:28:20
 * Description: 
*/
//引入fs模块
const fs = require("fs");

// fs.readFile('../你好.md', (err, data1) => {

//     fs.readFile('../殿.md', (err, data2) => {

//         fs.readFile('../真.md', (err, data3) => {
//             let result = data1 +'\r\n'+data2 +'\r\n'+data3;
//             console.log(result);
//         });
//     });
// });

//使用promise 实现
const p = new Promise((resolve, reject) => {
    fs.readFile("../你好.md", (err, data) => {
        resolve(data);
    });
});

p.then(value => {
    return new Promise((resolve, reject) => {
        fs.readFile("../殿.md", (err, data) => {
            resolve([value, data]);
        });
    });
}).then(value => {    //此时的value为 数组
    return new Promise((resolve, reject) => {
        fs.readFile("../真.md", (err, data) => {
            //压入
            value.push(data);
            resolve(value);
        });
    })
}).then(value => {
    console.log(value.join('\n'));
})