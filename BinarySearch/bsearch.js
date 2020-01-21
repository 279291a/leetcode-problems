/**
 * 查找值等于给定值的数据元素下标
 *
 * 有序数组不存在重复元素
 */

/**
 *
 * @param {number[]} nums
 * @param {number} value
 */
const bsearch = (nums, value) => {
  let low = 0;
  let high = nums.length - 1;
  let mid;

  while (low < high) {
    mid = Math.floor(high - (high - low) / 2);

    if (nums[mid] === value) return mid;

    if (nums[mid] > value) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return null;
};

console.log(bsearch([1, 2, 3, 4, 5, 6, 7, 8, 8], 2));
