/**
 * 给定 有重复元素的数组
 * 查找最后一个值等于给定值的元素
 */

/**
 *
 * @param {number[]} nums
 * @param {number} value
 */
const findLastEqualToTarge = (nums, value) => {
  let low = 0;
  let high = nums.length - 1;
  let mid;

  while (low <= high) {
    mid = Math.floor(high - ((high - low) >> 1));

    if (nums[mid] > value) {
      high = mid - 1;
    } else if (nums[mid] < value) {
      low = mid + 1;
    } else {
      if (mid === nums.length - 1 || nums[mid + 1] !== value) {
        return mid;
      } else {
        low = mid + 1;
      }
    }
  }

  return -1;
};

console.log(findLastEqualToTarge([1, 2, 4, 4, 4, 4, 4, 6, 7, 8, 9], 4));
