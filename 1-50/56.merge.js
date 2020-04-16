/**
 * 56. 合并区间
  给出一个区间的集合，请合并所有重叠的区间。

  示例 1:

  输入: [[1,3],[2,6],[8,10],[15,18]]
  输出: [[1,6],[8,10],[15,18]]
  解释: 区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].
  示例 2:

  输入: [[1,4],[4,5]]
  输出: [[1,5]]
  解释: 区间 [1,4] 和 [4,5] 可被视为重叠区间。
 */

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */

var merge = function (intervals) {
  if (!Array.isArray(intervals) || intervals.length === 0) return [];
  if (intervals.length === 1) return intervals;

  // 从小到大排序
  intervals.sort((a, b) => a[0] - b[0]);

  const result = [];
  result.push(intervals[0]);

  let i = 1;
  const n = intervals.length;
  while (i < n) {
    // 取最后一个元素与原数组进行判断
    const last = result[result.length - 1];

    //判断是否有重叠部分
    if (
      (last[1] >= intervals[i][0] && last[1] <= intervals[i][1]) ||
      (intervals[i][1] >= last[0] && intervals[i][1] <= last[1])
    ) {
      // 如果重叠，取并集
      result[result.length - 1] = [
        Math.min(last[0], intervals[i][0]),
        Math.max(last[1], intervals[i][1]),
      ];
    } else {
      // 不重叠，直接插入下一个元素
      result.push(intervals[i]);
    }
    i++;
  }

  return result;
};
