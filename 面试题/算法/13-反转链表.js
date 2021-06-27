/*
 * Author: 吴楚标
 * Date: 2021-06-27 21:21:38
 * LastEditors: 吴楚标
 * LastEditTime: 2021-06-27 23:11:56
 * Description:
 */

// function Node(val) {
//   this.val = val;
//   this.next = null;
// }

// function createList(arr) {
//   let head = new Node(arr[0]);
//   let tail = head;
//   for (let i = 1; i <= arr.length - 1; i++) {
//     tail.next = new Node(arr[i]);
//     tail = tail.next;
//   }
//   return head;
// }

// let list = createList([1, 2, 3, 4, 5]);
// console.log(createList([1, 2, 3, 4, 5]));

// function reverceList(head) {
//   let arr = [];
//   let p = head;
//   while (p) {
//     arr.push(p.val);
//     p = p.next;
//   }
//   p = head;
//   while (p) {
//     p.val = arr.pop();
//     p = p.next;
//   }
//   return head;
// }

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

function reverceList(head){
  let arr = [];
  let p = head;
  while(p){
    arr.push(p.val);
    p = p.next;
  }
  p = head;
  while(p){
    p.val = arr.pop();
    p = p.next;
  }
  return head;
}
let list = createList([1, 2, 3, 4, 5])
console.log(reverceList(list));
