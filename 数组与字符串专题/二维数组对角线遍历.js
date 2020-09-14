// 对角线遍历
// 给定一个含有 M x N 个元素的矩阵（M 行，N 列），请以对角线遍历的顺序返回这个矩阵中的所有元素，对角线遍历如下图所示。

 

// 示例:

// 输入:
// [
//  [ 1, 2, 3 ],
//  [ 4, 5, 6 ],
//  [ 7, 8, 9 ]
// ]

// 输出:  [1,2,4,7,5,3,6,8,9]

// 说明:

// 给定矩阵中的元素总数不会超过 100000 。

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var findDiagonalOrder = function(matrix) {
  if (matrix == null || matrix[0] == null) {
      return []
  }
  let x = 0
  let y = 0
  let m = matrix.length -1
  let n = (matrix[0].length) -1
  let direction = true
  let arr = []
  arr.push(matrix[y][x])
  while (x<=n && y<=m) {
      // 重新确定遍历起点位置
      if (direction) {
          if(x < n) {
              x++
          } else {
              y++
          }
          //添加到数组
          for (;x>=0 && y<=m;x--,y++) {
              arr.push(matrix[y][x])
          }
          //跳出for循环之后修正xy值
          y--,x++
          direction = !direction
      } else {
          if(y < m) {
              y++
          } else {
              x++
          }
          for (;y>=0 && x<=n;y--,x++) {
              arr.push(matrix[y][x])
          }
          //跳出for循环之后修正xy值
          y++,x--
          direction = !direction
      }
  }
  return arr
  
};