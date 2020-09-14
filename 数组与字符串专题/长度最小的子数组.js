// 给定一个含有 n 个正整数的数组和一个正整数 s ，找出该数组中满足其和 ≥ s 的长度最小的 连续 子数组，并返回其长度。如果不存在符合条件的子数组，返回 0。

// 作者：力扣(LeetCode)
//链接：https://leetcode-cn.com/leetbook/read/array-and-string/c0w4r/
// 来源：力扣（LeetCode）

// 示例：

// 输入：s = 7, nums = [2,3,1,2,4,3]
// 输出：2
// 解释：子数组 [4,3] 是该条件下的长度最小的子数组。

/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
let s = 7, nums = [2, 3, 1, 2, 4, 3]
console.log(minSubArrayLen(s, nums));

var minSubArrayLen = function (s, nums) {
  if (!nums || nums.length == 0) {
    return 0
  }
  let len = nums.length
  let minLenght = Infinity
  let left = 0
  let right = 0
  let sum = 0
  while (right < len) {
    sum += nums[right]
    while (sum >= s) {
      sum -= nums[left]
      minLenght = Math.min(minLenght, right - left + 1)
      left++
    }
    right++
  }
  return minLenght == Infinity ? 0 : minLenght
};