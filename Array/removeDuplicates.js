/**
 * 给定一个排序数组，你需要在原地删除重复出现的元素，使得每个元素只出现一次，返回移除后数组的新长度。
 * 不要使用额外的数组空间，你必须在原地修改输入数组并在使用 O(1) 额外空间的条件下完成。
 *
 * 思路：遍历数组项，与该项之前的所有项进行比对，如果不存在则更新
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  var i = 0;
  j = 1;
  len = nums.length;
  while (j < len) {
    for (var k = 0; k < j; k++) {
      if (nums[j] === nums[k]) {
        break;
      } else if (k === j - 1) {
        i++;
        nums[i] = nums[j];
      }
    }
    j++;
  }
  return i + 1;
};
