// 只能一次买卖
let arr = [7,1,5,3,6,4];
function Maxpoint(arr){
  if (arr.length === 0) return;
  let min = arr[0];
  let max = 0;
  arr.forEach( item => {
    if(item < min){
      min = item;
      // console.log(min);
    }else if(item - min > max){
      max = item - min;
      // console.log(max);
    }
  });
  return max;
}
console.log(Maxpoint(arr));


// 可进行多次买卖
// let arr = [7,1,5,3,6,4];
// function manyMaxpoint(arr){
//   if ( arr.length ===0 ) return;
//   let min = arr[0];
//   let max = 0;
//   let point = 0;
//   arr.forEach( item => {
//     if(item <= min){
//       min = item;
//     }else if(item > max){
//       max = item;
//     }else if(item <max){
//       point += max - min;
//       // console.log(point);
//       min = item;
//       max = item;
//     }
//   });
//   return point;
// }
function manyMaxpoint(arr){
  if ( arr.length ===0 ) return;
  let point = 0;
 for( let i =0; i<arr.length -1 ; i++){
   if(arr[i]<arr[i+1]){
     point += arr[i+1] - arr[i]
   }
 }
  return point;
}
console.log(manyMaxpoint(arr));