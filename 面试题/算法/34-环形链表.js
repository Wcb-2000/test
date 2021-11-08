// 判断链表是否有环  注意链表的形式
// 给定一个链表，pos表示链尾与链表中的索引链接的位置
function lint(arr, pos){
  if(arr.length -1 > pos ){
    return true
  }else{
    return false
  }
}

var b = [1,2,3,4];
var a =2;
console.log(lint(b,a));