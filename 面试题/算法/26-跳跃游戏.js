/*
 * Author: 吴楚标
 * Date: 2021-07-12 23:54:50
 * LastEditors: 吴楚标
 * LastEditTime: 2021-07-13 01:18:07
 * Description:
 */
/*
 初始大小为可跳跃大小  比如2  则可跳跃0，1，2步
  输入[2,3,1,1,4]
  true
  
  输入[3,2,1,0,4]
  false
*/

//动态规划 自顶向下up-bottom
function canJump1(nums) {
  const totalLength = nums.length;
  const memo = Array(totalLength).fill(0); //ES6函数 arr.fill(value,start,end) 指定内容填充数组
  memo[totalLength - 1] = 1;

  function jump(position) {
    if (memo[position] === 1) {
      return true;
    } else if (memo[position] === -1) {
      return false;
    }

    const maxJump = Math.min(position + nums[position], totalLength - 1);
    for (let i = position + 1; i <= maxJump; i++) {
      const jumpResult = jump(i);
      if (jumpResult === true) {
        memo[position] = 1;
        return true;
      }
    }
    memo[position] = -1;
    return false;
  }

  let result = jump(0);
  return result;
}

//动态规划 自底向上bottom-up
function canJump2(nums) {
  const totalLength = nums.length;
  const memo = Array(totalLength).fill(0);
  memo[totalLength - 1] = 1;

  for (let i = totalLength - 2; i >= 0; i--) {
    const maxJump = Max.min(i + nums[i], totalLength - 1);
    for (let j = i + 1; j <= maxJump; j++) {
      if (memo[j] === 1) {
        memo[i] = 1;
        break;
      }
    }
  }

  if (memo[0] === 1) {
    return true;
  } else {
    return false;
  }
}

//贪心
function canJump3(nums) {
  let maxJump = nums.length - 1;
  for (let i = nums.length - 2; i >= 0; i--) {
    if (arr[i] + i >= maxJump) {
      maxJump = i;
    }
  }
  return maxJump === 0;
}

let arr = [3,1,0,2,4]
console.log(canJump3(arr));