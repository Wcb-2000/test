/*
 * Author: 吴楚标
 * Date: 2021-07-17 22:53:06
 * LastEditors: 吴楚标
 * LastEditTime: 2021-07-17 23:22:38
 * Description: 
*/
/*
  输入[[1,3],[2,6],[8,10],[15,18]]
  输出：[[1,6],[8,10],[15,18]]
*/
function merge(intervals){
  if(intervals.length <2){
    return intervals;
  }

  intervals.sort(function(a,b){
    return a[0]-b[0];
  })
  
  let curr = intervals[0];
  let result = [];

  for(let interval of intervals){
    if(curr[1] >= interval[0]){
      curr[1] = Math.max(curr[1],interval[1]);
    }else{
      result.push(curr);
      curr = interval;
    }
  }

  if(curr.length !== 0){
    result.push(curr);
  }

  return result;
}

let arr = [[1,3],[2,6],[8,10],[15,18]];
console.log(merge(arr));