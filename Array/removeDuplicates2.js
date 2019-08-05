/**
 * 给定一个排序数组，你需要在原地删除重复出现的元素，使得每个元素最多出现两次，返回移除后数组的新长度。
 * 不要使用额外的数组空间，你必须在原地修改输入数组并在使用 O(1) 额外空间的条件下完成。
 *
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  var n = nums.length;

  if (n <= 2) return n;
  let i = 0;
  let j = i + 1;

  while (j < n) {
    if (!(nums[j] === nums[j + 1] && nums[j] === nums[j - 1])) {
      nums[i + 1] = nums[j];
      i += 1;
    }
    j++;
  }
  return i + 1;
};

console.log(removeDuplicates([0, 0, 1, 1, 1, 1, 2, 3, 3]));
