/*
 * Author: 吴楚标
 * Date: 2021-07-02 00:39:16
 * LastEditors: 吴楚标
 * LastEditTime: 2021-07-02 00:52:12
 * Description: 
*/
// 将两个有序的链表合并
// 1->2->4   1->3->4
// 1->1->2->3->4->4
function Node(val){
  this.val = val;
  this.next = null;
}

function createList(arr){
  let head = new Node(arr[0]);
  let tail = head;
  for(let i=1;i<arr.length;i++){
    tail.next = new Node(arr[i]);
    tail = tail.next;
  }
  return head;
}
let l1 = createList([1, 2, 4]);
let l2 = createList([1, 3, 4]);
console.log(l1,l2);



function mergeTwoLists(l1,l2){
  let curr = new Node();
  let dummy = curr;

  while(l1 !== null && l2 !== null){
    if(l1.val<l2.val){
      curr.next = l1;
      l1 = l1.next;
    }else{
      curr.next = l2;
      l2 = l2.next;
    }
    curr = curr.next;
  }
  
  if(l1!==null){
    curr.next = l1;
  }
  if(l2!==null){
    curr.next =l2;
  }

  return dummy.next;
}
console.log(mergeTwoLists(l1,l2));