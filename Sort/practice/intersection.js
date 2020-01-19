/**
 * 给定两个数组，编写一个函数来计算它们的交集。

  示例 1:

  输入: nums1 = [1,2,2,1], nums2 = [2,2]
  输出: [2]
  示例 2:

  输入: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
  输出: [9,4]
  说明:

  输出结果中的每个元素一定是唯一的。
  我们可以不考虑输出结果的顺序。

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/intersection-of-two-arrays
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 *
 * @param {number[]} nums
 */
const uniq = nums => {
  var i = 0;

  while (i <= nums.length) {}
};

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

var intersection = function(nums1, nums2) {
  const arr = [];
  const tmp = {};

  var i = 0;
  var length = Math.max(nums1.length, nums2.length);

  while (i < nums1.length) {
    var j = nums1[i];
    if (j !== undefined && tmp[j] === undefined) {
      tmp[j] = 1;
    }
    i++;
  }

  var t = 0;
  while (t < nums2.length) {
    var k = nums2[t];

    if (k !== undefined && tmp[k] !== undefined && tmp[k] === 1) {
      arr.push(k);
      tmp[k] = 0;
    }
    t++;
  }

  return arr;
};

console.log(intersection([8, 0, 3], [0, 0]));
