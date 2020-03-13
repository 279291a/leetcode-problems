/**
 * 169. 多数元素
  给定一个大小为 n 的数组，找到其中的多数元素。多数元素是指在数组中出现次数大于 ⌊ n/2 ⌋ 的元素。

  你可以假设数组是非空的，并且给定的数组总是存在多数元素。
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  const count = Math.ceil(nums.length / 2);
  const obj = {};

  if (nums.length === 0) return;
  if (nums.length === 1) return nums[0];

  for (let i = 0; i < nums.length; i++) {
    if (obj[nums[i]]) {
      obj[nums[i]]++;
      if (obj[nums[i]] > count || obj[nums[i]] === count) {
        return nums[i];
      }
    } else {
      obj[nums[i]] = 1;
    }
  }

  return;
};
