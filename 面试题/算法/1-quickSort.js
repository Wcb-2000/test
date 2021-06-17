/*
 * Author: 吴楚标
 * Date: 2021-06-16 23:47:57
 * LastEditors: 吴楚标
 * LastEditTime: 2021-06-17 00:16:23
 * Description: 快速排序一
*/

  // let arr=[31,23,34,3,13,245,7,15,33,36];

  // function quickSort(arr){
  //   let base_num = arr[0];
  //   let left_arr = [];
  //   let right_arr = [];
  //   for(let i =1;i<arr.length;i++){
  //     if(arr[i]< base_num){
  //       left_arr.push(arr[i]);
  //     }else{
  //       right_arr.push(arr[i]);
  //     }
  //   }

  //   if(left_arr.length>=2) left_arr = quickSort(left_arr);
  //   if(right_arr.length>=2) right_arr = quickSort(right_arr);

  //   return left_arr.concat(base_num,right_arr);
  // }

  // console.log(quickSort(arr));
  
  let arr=[31,23,34,3,13,245,7,15,33,36];
  
  function quickSort(arr){
    let base_num = arr[0];
    let left_num =[];
    let right_num =[];
    for(let i =1;i<arr.length;i++){
      if(arr[i]<=base_num){
        left_num.push(arr[i]);
      }else{
        right_num.push(arr[i]);
      }
    }

    if(left_num.length >=2) left_num = quickSort(left_num);
    if(right_num.length >=2) right_num = quickSort(right_num);
    
    return left_num.concat(base_num,right_num);
  }

  console.log(quickSort(arr));