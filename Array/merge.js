/**
 * 给定两个有序整数数组 nums1 和 nums2，将 nums2 合并到 nums1 中，使得 num1 成为一个有序数组。
 * 输入:
 * nums1 = [1,2,3,0,0,0], m = 3
 * nums2 = [2,5,6],       n = 3
 *
 * 输出: [1,2,2,3,5,6]
 *
 *
 * 思路：赋值一个nums1Copy,遍历两数组，将较小的值填入结果中
 */
var merge = function(nums1, m, nums2, n) {
  let cur = 0;
  const nums1_copy = Array.from(nums1);
  let p = 0;
  let p1 = 0,
    p2 = 0;
  while (p1 < m && p2 < n) {
    if (nums1_copy[p1] < nums2[p2]) {
      nums1[p++] = nums1_copy[p1++];
    } else {
      nums1[p++] = nums2[p2++];
    }
  }
  while (p1 < m) {
    nums1[p++] = nums1_copy[p1++];
  }

  while (p2 < n) {
    nums1[p++] = nums2[p2++];
  }
};

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
