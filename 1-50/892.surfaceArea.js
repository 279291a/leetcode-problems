/**
 * 在 N * N 的网格上，我们放置一些 1 * 1 * 1  的立方体。

  每个值 v = grid[i][j] 表示 v 个正方体叠放在对应单元格 (i, j) 上。

  请你返回最终形体的表面积。

 

  示例 1：

  输入：[[2]]
  输出：10

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/surface-area-of-3d-shapes
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
/**
 * 思路：每个小立方体的表面积为 6 ，最终要求的面积 = 6 * 立方体个数 - 重叠的面积
 *
 * a | b
 * c | d
 *
 * 以 a 进行观察，重叠的面积包括两部分，一部分是 a 个小立方体叠在一起，另一部分是 a 与相邻的网格重叠的面积
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var surfaceArea = function(grid) {
  if (grid.every(v => !v || v.length === 0)) return 0;
  let n = 0;
  let coverCount = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      n += grid[i][j];

      if (grid[i][j]) {
        coverCount = coverCount + grid[i][j] - 1;
      }

      if (i + 1 < grid.length && grid[i + 1][j]) {
        coverCount += Math.min(grid[i][j], grid[i + 1][j]);
      }

      if (j + 1 < grid[i].length && grid[i][j + 1]) {
        coverCount += Math.min(grid[i][j], grid[i][j + 1]);
      }
    }
  }

  return 6 * n - 2 * coverCount;
};
