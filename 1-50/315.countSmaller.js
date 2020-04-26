/**
 * 给定一个整数数组 nums，按要求返回一个新数组 counts。数组 counts 有该性质： counts[i] 的值是  nums[i] 右侧小于 nums[i] 的元素的数量。

  示例:

  输入: [5,2,6,1]
  输出: [2,1,1,0] 
  解释:
  5 的右侧有 2 个更小的元素 (2 和 1).
  2 的右侧仅有 1 个更小的元素 (1).
  6 的右侧有 1 个更小的元素 (1).
  1 的右侧有 0 个更小的元素.
 */

/**
 * 第一版解法：将每一个数都与它右侧的数进行比较，统计
 * 时间复杂度：O(n^2)
 * 空间：O(n)
 */
/**
 *
 * @param {number[]} nums
 * @return {number[]}
 */
var countSmaller = function (nums) {
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    let count = 0;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] < nums[i]) {
        count++;
      }
    }
    result.push(count);
  }

  return result;
};

/**
 * 第二种解法：
 * 1. 以数组第一个元素分区，将小于它的放到左边，大于它的放到右边
 * 2. 如果下一个元素小于前一个元素，则缩小范围
 */

// var countSmaller = function (nums) {
//   const result = [];
//   if (!nums.length) return [];
//   if (nums.length === 1) return [0];
//   let base = nums[0];
//   const left = [];
//   const right = [];

//   for (let i = 1; i < nums.length; i++) {
//     if (nums[i] < base) {
//       left.push(nums[i]);
//     } else {
//       right.push(nums[i]);
//     }
//   }
//   result.push(left.length);

//   // return [left.length, ...countSmaller(right),...countSmaller(left), ];

//   for (let j = 1; j < nums.length; j++) {
//     let count = 0;
//     if (nums[j] < base) {
//       result.push(countLower(nums[j], j, left));
//       continue;
//     }
//     for (let k = j + 1; j < nums.length; j++) {
//       if (nums[k] < nums[j]) count++;
//     }
//     result.push(count);
//   }
//   return result;
// };

// const countLower = (value, key, nums) => {
//   let j = key + 1;
//   let count = 0;
//   while (j < nums.length) {
//     if (value < nums[j]) {
//       count++;
//     }
//   }
//   return count;
// };

// console.log(countSmaller([5, 2, 6, 1]));
