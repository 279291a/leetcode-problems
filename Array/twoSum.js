/**
 * 给定一个已按照升序排列 的有序数组，找到两个数使得它们相加之和等于目标数。
 * 函数应该返回这两个下标值 index1 和 index2，其中 index1 必须小于 index2。
 *
 * 说明:
 * 返回的下标值（index1 和 index2）不是从零开始的。
 * 你可以假设每个输入只对应唯一的答案，而且你不可以重复使用相同的元素。
 */

/**
 * 思路：双指针遍历
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  const j = numbers.length - 1;
  for (var k = 0; k < j; k++) {
    let other = target - numbers[k];
    for (var x = k + 1; x <= j; x++) {
      if (numbers[x] === other) {
        return [k + 1, x + 1];
      }
    }
  }
};
/**
 * 思路二：双指针，i从前遍历，j从后遍历，计算其和,小于target则i++,大于target j--
 *
 * @param {Array} numbers
 * @param {Number} target
 */
var twoSum2 = function(numbers, target) {
  let i1 = 0;
  let i2 = numbers.length - 1;

  while (i1 < i2) {
    let sum = numbers[i1] + numbers[i2];

    if (sum > target) {
      i2--;
    }
    if (sum < target) {
      i1++;
    }
    if (sum === target) {
      return [i1 + 1, i2 + 1];
    }
  }
  return [-1, -1];
};

console.log(twoSum2([2, 7, 11, 15], 9));
