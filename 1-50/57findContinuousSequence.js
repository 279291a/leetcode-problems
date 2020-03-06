/**
 * 输入一个正整数 target ，输出所有和为 target 的连续正整数序列（至少含有两个数）。

  序列内的数字由小到大排列，不同序列按照首个数字从小到大排列。

   

  示例 1：

  输入：target = 9
  输出：[[2,3,4],[4,5]]
  示例 2：

  输入：target = 15
  输出：[[1,2,3,4,5],[4,5,6],[7,8]]
   

  限制：

  1 <= target <= 10^5

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/he-wei-sde-lian-xu-zheng-shu-xu-lie-lcof
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {number} target
 * @return {number[][]}
 */

function createArray(start, length) {
  return new Array(length).fill(start).map((v, k) => start + k);
}

var findContinuousSequence = function(target) {
  var result = [];

  var a0 = 1;
  var max = Math.floor(target / 2 + 1);

  while (a0 < max) {
    var count = 1;
    var Sn = a0;

    while (Sn < target) {
      Sn += a0 + count;
      count++;
    }

    if (Sn === target) {
      result.push(createArray(a0, count));
      a0++;
    } else {
      a0++;
      continue;
    }
  }

  return result;
};

var findContinuousSequence2 = function(target) {
  var result = [];

  var a0 = 1;
  var max = Math.floor(target / 2 + 1);

  while (a0 < max) {
    var n =
      Math.sqrt(2 * target + Math.pow(2 * a0 - 1, 2) / 4) - (2 * a0 - 1) / 2;
    if (Math.floor(n) === n) {
      result.push(createArray(a0, n));
    }
    a0++;
  }

  return result;
};

console.log(findContinuousSequence2(9));
