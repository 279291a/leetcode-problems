/**
 * 给定一个排序数组，你需要在原地删除重复出现的元素，使得每个元素只出现一次，返回移除后数组的新长度。
 * 不要使用额外的数组空间，你必须在原地修改输入数组并在使用 O(1) 额外空间的条件下完成。
 *
 * 思路：遍历数组项，与该项之前的所有项进行比对，如果不存在则更新
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function (nums) {
  let i = 0;
  j = 1;
  len = nums.length;
  while (j < len) {
    for (let k = 0; k < j; k++) {
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

/**
 *思路：i 表示头指针,比较nums[i]和nums[j],如果不等且元素相邻，将i+1,否则赋值
 * @param {*} nums
 */
const removeDuplicates2 = function (nums) {
  let i = 0;
  j = i + 1;
  n = nums.length;
  if (n === 0 || n === 1) return n;
  while (j < n) {
    if (nums[j] !== nums[i]) {
      if (i + 1 !== j) {
        nums[i + 1] = nums[j];
      }
      i++;
    }
    j++;
  }

  return i + 1;
};

console.log(removeDuplicates2([3, 3, 2]));
