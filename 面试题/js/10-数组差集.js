/*
 * Author: 吴楚标
 * Date: 2021-07-16 01:38:57
 * LastEditors: 吴楚标
 * LastEditTime: 2021-07-16 01:38:58
 * Description: 
*/
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [3, 4, 5, 6, 7];

function good(arr1, arr2) {
    const result = [];
    arr1.forEach(item=>{
        if (arr2.indexOf(item) === -1) {
            result.push(item);
        }
    }
    );
    return result;
}
let a = good(arr1, arr2);
console.log(a);
