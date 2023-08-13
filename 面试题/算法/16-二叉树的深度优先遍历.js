/*
 * Author: 吴楚标
 * Date: 2021-06-28 22:12:22
 * LastEditors: 吴楚标
 * LastEditTime: 2021-06-28 22:39:15
 * Description: 
*/
// 根据二叉树 输出前序序列、中序序列、后续序列

// 二叉树
let arr = ['a','b','d','#','f','#','#','#','c','#','e','#','#']
function treeNode(val){
  this.val = val;
  this.left = null;
  this.right = null;
 }
 function createTree(arr){
   let root = null;
   if(arr[0] !== undefined){
     let nodeVal = arr.shift();
     if(nodeVal != '#'){
       root = new treeNode(nodeVal);
       root.left = createTree(arr);
       root.right = createTree(arr);
     }
   }
   return root;
 }

let tree = createTree(arr);
console.log(tree);

// 根据二叉树 输出前序序列（根左右）
function qianXu(tree){
  if(tree){
    // console.log(tree.val);
    qianxu.push(tree.val);
    qianXu(tree.left);
    qianXu(tree.right);
  }else{
    // console.log('#');
    qianxu.push('#');
  }
  return qianxu; 
}
let qianxu = [];
console.log(qianXu(tree));

// 根据二叉树 输出中序序列（左根右）
function zhongXu(tree){
  if(tree){
    // console.log(tree.val);
    zhongXu(tree.left);
    zhongxu.push(tree.val);
    zhongXu(tree.right);
  }else{
    // console.log('#');
    zhongxu.push('#');
  }
  return zhongxu; 
}
let zhongxu = [];
console.log(zhongXu(tree));

// 根据二叉树 输出后序序列(左右根)
function houXu(tree){
  if(tree){
    // console.log(tree.val);
    houXu(tree.left);
    houXu(tree.right);
    houxu.push(tree.val);
  }else{
    // console.log('#');
    houxu.push('#');
  }
  return houxu; 
}
let houxu = [];
console.log(houXu(tree));