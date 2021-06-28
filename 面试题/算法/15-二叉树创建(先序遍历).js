/*
 * Author: 吴楚标
 * Date: 2021-06-28 21:33:59
 * LastEditors: 吴楚标
 * LastEditTime: 2021-06-28 22:03:49
 * Description: 
*/
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

 let arr = ['a','b','d','#','f','#','#','#','c','#','e','#','#']
 console.log(createTree(arr));