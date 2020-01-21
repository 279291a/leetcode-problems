/**
 * 查找值等于给定值的数据元素下标
 *
 * 有序数组不存在重复元素
 */

/**
 *
 * 二分查找：循环实现
 *
 * @param {number[]} nums
 * @param {number} value
 */
const bsearch = (nums, value) => {
  let low = 0;
  let high = nums.length - 1;
  let mid;

  while (low <= high) {
    /**
     * 多种写法：
     * 1. 直观： mid = Math.floor((high + low) /2) 可能溢出
     * 2. 防止溢出： mid = Math.floor(low + (high - low) / 2)
     * 3. 位运算法，效率最高： mid = Math.floor(low + ((high - low) >> 1))
     */
    mid = Math.floor(high - (high - low) / 2);

    if (nums[mid] === value) return mid;

    if (nums[mid] > value) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return -1;
};

/**
 * 二分查找的递归实现
 *
 * @param {number []} nums
 * @param {number} value
 */
const bsearch2 = (nums, value) => {
  let low = 0;
  let high = nums.length - 1;

  if (low > high) return -1;

  let mid = Math.floor(low + (high - low) / 2);

  if (nums[mid] === value) return mid;

  if (nums[mid] < value) {
    return bsearch2(nums.slice(mid + 1), value);
  } else {
    return bsearch2(nums.slice(low, mid), value);
  }
};

console.log(bsearch2([1, 2, 3, 4, 5, 6, 7, 8, 8], 2));
