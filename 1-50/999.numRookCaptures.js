/**
 * 在一个 8 x 8 的棋盘上，有一个白色车（rook）。也可能有空方块，白色的象（bishop）和黑色的卒（pawn）。它们分别以字符 “R”，“.”，“B” 和 “p” 给出。大写字符表示白棋，小写字符表示黑棋。

  车按国际象棋中的规则移动：它选择四个基本方向中的一个（北，东，西和南），然后朝那个方向移动，直到它选择停止、到达棋盘的边缘或移动到同一方格来捕获该方格上颜色相反的卒。另外，车不能与其他友方（白色）象进入同一个方格。

  返回车能够在一次移动中捕获到的卒的数量。

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/available-captures-for-rook
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * 思路： 找与车在同行同列上可到达的卒
 * @param {character[][]} board
 * @return {number}
 */
var numRookCaptures = function(board) {
  if (!board || board.length === 0) return 0;

  let px;
  let py;
  let count = 0;

  //找到车的位置
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === "R") {
        px = i;
        py = j;
        break;
      }
    }
  }

  //在车所在行，往左找
  for (let k = py - 1; k >= 0; k--) {
    if (board[px][k] === ".") {
      continue;
    }

    if (board[px][k] === "p") {
      count++;
      break;
    }
    break;
  }

  //在车所在行，往右找
  for (let k = py + 1; k <= board[px].length; k++) {
    if (board[px][k] === ".") {
      continue;
    }

    if (board[px][k] === "p") {
      count++;
      break;
    }
    break;
  }

  //在车所在列，往上找
  for (let k = px - 1; k >= 0; k--) {
    if (board[k][py] === ".") {
      continue;
    }
    console.log(board[k][py]);

    if (board[k][py] === "p") {
      count++;
      break;
    }
    break;
  }

  //在车所在行，往下找
  for (let k = px + 1; k < board[px].length; k++) {
    if (board[k][py] === ".") {
      continue;
    }

    if (board[k][py] === "p") {
      count++;
      break;
    }
    break;
  }

  return count;
};

console.log(
  numRookCaptures([
    [".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", "p", ".", ".", ".", "."],
    [".", ".", ".", "R", ".", ".", ".", "p"],
    [".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", "p", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", "."]
  ])
);
