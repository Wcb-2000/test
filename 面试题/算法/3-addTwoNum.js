/*
 * Author: 吴楚标
 * Date: 2021-06-23 11:33:30
 * LastEditors: 吴楚标
 * LastEditTime: 2021-06-23 12:15:28
 * Description: 
*/
/**
 * 输入：2 4 3  + 5 6 4
 * 输出7 0 8
 * 因为342+ 465 = 807
 */
function NodeList(val){
  this.val = val;
  this.next = null;
}
var addTwoNumbers = function(l1, l2){
  let dummy = new NodeList();
  let curr = dummy;
  let carry = 0;
  
  while(l1 !==null || l2 !==null){
    let sum = 0;
    if(l1 !==null){
      sum +=l1.val;
      l1 = l1.next;
    }
    if(l2 !== null){
      sum += l2.val;
      l2 = l2.next;
    }
    sum += carry;
    curr.next = new NodeList(sum % 10);
    carry = Math.floor(sum/10);
    curr = curr.next;
  }

  if(carry>0){
    curr.next = new NodeList(carry);
  }
  return dummy.next;
}

console.log(addTwoNumbers(("2","4","3"),("5","6","4")));