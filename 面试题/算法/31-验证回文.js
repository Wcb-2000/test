// 判断是否回文，不包括符号
let arr = 'absa sba'
function isPalindrome(s){
  let a = s.toLowerCase().replace(/[W_]/g, "");
  if(a.length<2) return true;
  let left = 0;
  let right = s.length -1;
  
  while(left < right){
    if(a[left] !== a[right]){
      return false
    }
    left++;
    right--;
  }
  return true
}
console.log(isPalindrome(arr))