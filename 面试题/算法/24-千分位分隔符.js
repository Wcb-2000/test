/*
 * Author: 吴楚标
 * Date: 2021-07-07 15:28:03
 * LastEditors: 吴楚标
 * LastEditTime: 2021-07-07 15:28:04
 * Description: 
*/
function thousand(num) {

  return (num+"").replace(/\d(?=(\d{3})+$)/g, "$&,")
}
console.log(thousand(123456789));