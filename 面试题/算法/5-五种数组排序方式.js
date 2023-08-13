/*
 * Author: 吴楚标
 * Date: 2021-06-24 23:42:04
 * LastEditors: 吴楚标
 * LastEditTime: 2021-07-20 23:03:41
 * Description: 
*/
// 方法一： sort()排序  
// 根据条件排序
var arr = [123,2,203,23,13,34,65,65,45,89,13,1];

function func(a,b){
	return a-b;
}
// console.log(arr.sort(func));

// 方法二 选择排序    O(n^2)
// 选择最小（最大）放在开头，剩下的再选择
function sort2(arr){
  for(var i =0;i<arr.length;i++){
    for(var j=i+1;j<arr.length;j++){
      if(arr[i]>arr[j]){
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}
// console.log(sort2(arr));

// 方法三：冒泡排序     O(n^2)
function sort3(arr){
  for(var i=0;i<arr.length-1;i++){
    for(var j=0;j<arr.length-1-i;j++){
      if(arr[j]>arr[j+1]){
        var temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }
  }
  return arr;
}
// console.log(sort3(arr));

// 方法四：插入排序     O(n^2)
function sort4(arr) {
  var preIndex, current;
  for (var i = 1; i < arr.length; i++) {
      preIndex = i - 1;
      current = arr[i];
      while(preIndex >= 0 && arr[preIndex] > current) {
      //这一个循环的含义:当前的元素和数组中下标小于它的元素作对比，如果当前元素大于，则位置不变，小于的话继续比较，然后找到大于的位置插入进去
          arr[preIndex+1] = arr[preIndex];
          preIndex--;
      }
      arr[preIndex+1] = current;
  }
  return arr;
}
// console.log(sort4(arr));

// 方法五：快速排序     O(nlogn)
function sort5(arr){
  let base_num = arr[0];
  let left_num = [];
  let right_num = [];
  for(let i=1;i<arr.length;i++){
    if(arr[i]<base_num){
      left_num.push(arr[i]);
    }else{
      right_num.push(arr[i]);
    }
  }

  if(left_num.length>=2) left_num = sort5(left_num);
  if(right_num.length>=2) right_num = sort5(right_num);

  return left_num.concat(base_num, right_num);
}
console.log(sort5(arr));