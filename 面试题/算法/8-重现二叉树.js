/*
 * Author: 吴楚标
 * Date: 2021-06-27 16:43:51
 * LastEditors: 吴楚标
 * LastEditTime: 2021-06-27 18:42:40
 * Description:
 */
// 递归
// 前序序列[1,2,4,7,3,5,6,8]
// 中序序列[4,7,2,1,5,3,8,6]

let qianXu = [1, 2, 4, 7, 3, 5, 6, 8];
let zhongXu = [4, 7, 2, 1, 5, 3, 8, 6];

// {
//   // 保存根节点
//   function TreeNode(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }

//   // 遍历左子树和右子树
//   function rebuildTree(qianXu, zhongXu) {
//     if (qianXu[0]) {
//       let rootVal = qianXu[0];

//       let index = zhongXu.indexOf(rootVal); //获取节点下标

//       let leftTree = rebuildTree(
//         qianXu.slice(1, index + 1),
//         zhongXu.slice(0, index)
//       );
//       let rightTree = rebuildTree(
//         qianXu.slice(index + 1),
//         zhongXu.slice(index + 1)
//       );

//       let root = new TreeNode(rootVal);

//       root.left = leftTree;
//       root.right = rightTree;
//       return root;
//     }
//   }
// }

function TreeNode(val){
  this.val = val;
  this.left = null;
  this.right = null;
}

function rebuildTree(qianXu,zhongXu){
  if(qianXu[0]){
    let rootVal = qianXu[0];
    let index = qianXu.indexOf(rootVal);

    let leftTree = rebuildTree(qianXu.slice(1,index+1), zhongXu.slice(0, index));
    let rightTree = rebuildTree(qianXu.slice(index+1),zhongXu.slice(index+1));

    let root = new TreeNode(rootVal);
    root.left = leftTree;
    root.right = rightTree;

    return root;
  }
}

console.log(rebuildTree(qianXu, zhongXu));
function createBase(base){
    return function(next){
       return next + base;
    }
}

var addSix = createBase(6)
console.log(addSix(10)); //16
console.log(addSix(21)); //27