/*
 * Author: 吴楚标
 * Date: 2021-06-26 22:31:05
 * LastEditors: 吴楚标
 * LastEditTime: 2021-06-26 23:46:37
 * Description: 
*/
//输入一个字符串，输出最长无重复字符串的长度
// 例：abcadbsa --> cadbs   返回5
let lengthOfLongestSubstring = function(s){
    const set = new Set();
    let i=0,j=0,maxLength = 0;
    if(s.length === 0){
      return 0;
    }

    for(i;i<s.length;i++){
      if(!set.has(s[i])){
        set.add(s[i]);
        maxLength = Math.max(maxLength, set.size);
      }else{
        while(set.has(s[i])){
          set.delete(s[j]);
          j++
        }
      }
    }
    return maxLength;
}
console.log(lengthOfLongestSubstring("abcbadaabc"));