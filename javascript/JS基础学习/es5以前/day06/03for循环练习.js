/*
 * Author: 吴楚标
 * Date: 2021-03-31 15:54:39
 * LastEditors: 吴楚标
 * LastEditTime: 2021-03-31 15:57:00
 * Description: 
*/
//打印1-100之间的所有7的倍数的个数及总和
var sum = 0;
for(i=0;i<=100;i++){
    if(i%7==0){
        sum == sum +i;
    }
}
console.log(sum);
