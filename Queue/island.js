/**
 * 给定一个由 '1'（陆地）和 '0'（水）组成的的二维网格，计算岛屿的数量。一个岛被水包围，并且它是通过水平方向或垂直方向上相邻的陆地连接而成的。你可以假设网格的四个边均被水包围。
 *
 * 示例：
 * 输入:
 * 11110
 * 11010
 * 11000
 * 00000
 *
 * 输出: 1
 *
 * 示例 2：
 * 输入:
 *
 * 11000
 * 11000
 * 00100
 * 00011
 *
 * 输出: 3
 */

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  let result = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      let top, right, bottom, left;

      if (i === 0) {
        top = 0;
      } else {
        top = grid[i - 1][j];
      }

      if (i === grid.length - 1) {
        bottom = 0;
      } else {
        bottom = grid[i + 1][j];
      }

      if (j === 0) {
        left = 0;
      } else {
        left = grid[i][j - 1];
      }

      if (j === grid[i].length) {
        right = 0;
      } else {
        right = grid[i][j + 1];
      }

      if ((right === 0 && left === 0) || (top === 0 && bottom === 0)) {
        result++;
      }
      console.log(
        "value",
        grid[i][j],
        left,
        right,
        top,
        bottom,
        "result",
        result
      );
    }
  }

  return result;
};

const arr = [
  [1, 1, 1, 1, 0],
  [1, 1, 0, 1, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0]
];
console.log(numIslands(arr));
