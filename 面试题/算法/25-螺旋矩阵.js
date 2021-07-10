/*
 * Author: 吴楚标
 * Date: 2021-07-10 23:31:02
 * LastEditors: 吴楚标
 * LastEditTime: 2021-07-11 00:06:55
 * Description: 
*/
/*
var arr = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
]

输出：[1,2,3,6,9,8,7,4,5]
*/
var spiralOrder = function(arr){
  if(arr.length === 0){
    return [];
  }

  let top = 0;
  let bottom = arr.length - 1;
  let left = 0;
  let right = arr[0].length - 1;

  let direction = "right";
  let result = [];

  while(left <= right && top <= bottom){
    if(direction === "right"){
      for(let i =left ; i<=right ; i++){
        result.push(arr[top][i]);
      }
      top++;
      direction = "down";
    }else if(direction === "down"){
      for(let i = top;i<=bottom;i++){
        result.push(arr[i][right]);
      }
      right--;
      direction = "left";
    }else if(direction === "left"){
      for(let i = right;i>=left;i--){
        result.push(arr[bottom][i]);
      }
      bottom--;
      direction = "up";
    }else if(direction === "up"){
      for(let i =bottom;i>=top;i--){
        result.push(arr[i][left]);
      }
      left++;
      direction = "right";
    }
  }
  return result;
}
var arr = [
  [1,2,3,4],
  [4,5,6,5],
  [7,8,9,5]
  // [3,5,4,7]
];
console.log(spiralOrder(arr));