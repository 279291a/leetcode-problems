/**
 * 在未排序的数组中找到第 k 个最大的元素。请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。

  示例 1:

  输入: [3,2,1,5,6,4] 和 k = 2
  输出: 5
  示例 2:

  输入: [3,2,3,1,2,4,5,5,6] 和 k = 4
  输出: 4
  说明:

  你可以假设 k 总是有效的，且 1 ≤ k ≤ 数组的长度。

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/kth-largest-element-in-an-array
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

const partition = (nums, r = nums.length - 1) => {
  const pariot = nums[r];

  var tmp;
  var i = 0;
  var j = 0;

  while (j < nums.length) {
    if (nums[j] > pariot) {
      tmp = nums[i];
      nums[i++] = nums[j];
      nums[j] = tmp;
    }
    j++;
  }

  tmp = nums[i];
  nums[i] = pariot;
  nums[r] = tmp;

  return i;
};

var findKthLargest = function(nums, k) {
  var q = partition(nums);
  if (nums.length === 1) return nums[0];

  if (q + 1 === k) {
    return nums[q];
  }

  if (q + 1 < k) {
    return findKthLargest(nums.slice(q + 1), k - q - 1);
  } else {
    return findKthLargest(nums.slice(0, q), k);
  }
};
