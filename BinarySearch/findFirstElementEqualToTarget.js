/**
 * 给定 有重复元素的数组
 * 查找第一个值等于给定值的元素
 */

/**
 *
 * @param {number[]} nums
 * @param {number} value
 */
const findFirstEq = (nums, value) => {
  let low = 0;
  let high = nums.length - 1;
  let mid;

  while (low < high) {
    mid = Math.floor(high - ((high - low) >> 1));

    if (nums[mid] > value) {
      high = mid - 1;
    } else if (nums[mid] < value) {
      low = mid + 1;
    } else if (mid === 0 || nums[mid - 1] !== value) {
      return mid;
    } else {
      high = mid - 1;
    }
  }

  return -1;
};

console.log(findFirstEq([1, 2, 4, 4, 4, 4, 4, 6, 7, 8, 9], 4));
