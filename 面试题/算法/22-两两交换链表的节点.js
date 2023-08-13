/*
 * Author: 吴楚标
 * Date: 2021-07-03 21:38:08
 * LastEditors: 吴楚标
 * LastEditTime: 2021-07-03 21:53:46
 * Description:
 */
function Node(val) {
  this.val = val;
  this.next = null;
}

function createList(arr) {
  let head = new Node(arr[0]);
  let tail = head;
  for (let i = 1; i < arr.length; i++) {
    tail.next = new Node(arr[i]);
    tail = tail.next;
  }
  return head;
}
let l1 = createList([1, 2, 3, 4, 6]);
console.log(l1);

function swapPairs(head) {
  let dummy = new Node();
  dummy.next = head;
  let p = dummy;

  while (p.next !== null && p.next.next !== null) {
    let n1 = p.next;
    let n2 = p.next.next;
    p.next = n2;
    n1.next = n2.next;
    n2.next = n1;
    p = n1;
  }
  return dummy.next;
}
console.log(swapPairs(l1));
