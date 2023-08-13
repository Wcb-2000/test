// 数组扁平化（数组， 扁平次数）
let arr = [1, [2, [3, [4]]]];
console.log(arr.flat(Infinity));

//ES5 手写 for循环
function flatten1(s, many){
  if(s.length ==0) return
  let newArr = [];
  for(let i=0;i<s.length;i++){
    if(Array.isArray(s[i])){
      newArr = newArr.concat(s[i])
    }else{
      newArr.push(s[i])
    }
  }
  return newArr;
}

//ES6  for of
function flatten2(s, many){
  if(s.length ==0) return
  let newArr = [];
  for(let item of s) {
    if(Array.isArray(item)){
      newArr = newArr.concat(item)
    }else{
      newArr.push(item);
    }
  }
  while(many>1){
    newArr = flatten2(newArr, --many);
  }
  return newArr;
}

console.log(flatten2(arr, 3));