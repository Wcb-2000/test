/*
 * Author: 吴楚标
 * Date: 2021-06-28 22:46:57
 * LastEditors: 吴楚标
 * LastEditTime: 2021-06-28 23:33:03
 * Description:
 */
// 根据二叉树  输出层次遍历序列

// 二叉树
let arr = ["a", "b", "d", "#", "f", "#", "#", "#", "c", "#", "e", "#", "#"];
function treeNode(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}
function createTree(arr) {
  let root = null;
  if (arr[0] !== undefined) {
    let nodeVal = arr.shift();
    if (nodeVal != "#") {
      root = new treeNode(nodeVal);
      root.left = createTree(arr);
      root.right = createTree(arr);
    }
  }
  return root;
}

let tree = createTree(arr);
console.log(tree);

// 层次遍历序列
function cengCi(tree, ans) {
  let queue = [];
  if(tree){
    ans.push(tree.val);
    queue.push(tree);
  }

  while(queue.length){
    let head = queue.shift();

    let left = head.left;
    if(left){
      ans.push(left.val);
      queue.push(left);
    }else{
      ans.push('#')
    }

    let right = head.right;
    if(right){
      ans.push(right.val);
      queue.push(right);
    }else{
      ans.push('#')
    }
  }
}
let ans = [];
// console.log(cengCi(tree, ans));
cengCi(tree, ans);
console.log(ans);