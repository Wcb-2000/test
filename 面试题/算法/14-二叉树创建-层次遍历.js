/*
 * Author: 吴楚标
 * Date: 2021-06-28 12:02:04
 * LastEditors: 吴楚标
 * LastEditTime: 2021-06-28 16:20:56
 * Description: 
*/
 /*
 while(队列不为空){
   1.将队列队首的元素出队（要么是整颗树的跟节点、要么是子树的跟节点）
   2.把和出队元素相关的元素加入到队列（根节点的左右孩子）
 }
 */
let arr = ['a','b','c','d','#','#','e','#','f','#','#','#','#']


function treeNode(val){
  this.val = val;
  this.left = null;
  this.right = null;
}
function creat_createTree_levelOrder(arr){
  let queue = [];
  let root = null;
  if(arr[0] !== undefined){
    let nodeVal = arr.shift();
    root = new treeNode(nodeVal);
    queue.push(root);

    while(queue.length){
      let head = queue.shift();
      nodeVal = arr.shift();

      if(nodeVal != '#'){
      head.left = new treeNode(nodeVal);
      queue.push(head.left)
      }

      nodeVal = arr.shift();
      if(nodeVal != '#'){
        head.right = new treeNode(nodeVal);
        queue.push(head.right);
        }
    }
  }
  return root;
}
console.log(creat_createTree_levelOrder(arr));