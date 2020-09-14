// 最长公共前缀
// 编写一个函数来查找字符串数组中的最长公共前缀。

// 如果不存在公共前缀，返回空字符串 ""。

// 示例 1:

// 输入: ["flower","flow","flight"]
// 输出: "fl"
// 示例 2:

// 输入: ["dog","racecar","car"]
// 输出: ""
// 解释: 输入不存在公共前缀。
// 说明:

// 所有输入只包含小写字母 a-z 。

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  let public = ''
  if (strs == null || strs.length == 0) return ''
  let min = strs[0],max = strs[0]
  //通过ASLL码比较最大和最小的字符串
  for(let i=0;i<strs.length;i++){
      if (strs[i] > max) {
          max = strs[i]
      } else if (strs[i] < min) {
          min = strs[i]
      }
  }
  // 这两个字符串的公共前缀即是题解
  
  for(let j = 0;j<min.length;j++) {
      if(max[j] == min[j]) {
          public += min[j]
      } else {
          return public
      }
  }
  return public
  
};