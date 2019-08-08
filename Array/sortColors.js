/**
 * 给定一个包含红色、白色和蓝色，一共 n 个元素的数组，原地对它们进行排序，使得相同颜色的元素相邻，并按照红色、白色、蓝色顺序排列。
 * 此题中，我们使用整数 0、 1 和 2 分别表示红色、白色和蓝色。
 * 思路：冒泡排序
 */

var sortColors = function(nums) {
  const n = nums.length;
  for (var i = 0; i < n - 1; i++) {
    for (var j = 0; j < n - 1 - i; j++) {
      if (nums[j] > nums[j + 1]) {
        var temp = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = temp;
      }
    }
  }
  console.log(nums);
};

/**
 * 思路：三路快排
 * nums[0,lt] ==0 ,nums[lt+1,i-1]==1，nums[i,gt]==2
 *
 */
var sortColors2 = function(nums) {
  let i = 0;
  let k = 0;
  j = nums.length - 1;
  while (k <= j) {
    let temp;
    if (nums[k] === 0) {
      temp = nums[i];
      nums[i++] = 0;
      nums[k++] = temp;
    }
    if (nums[k] === 2) {
      temp = nums[k];
      nums[k] = nums[j];
      nums[j--] = 2;
    }
    k++;
  }
};

console.log(sortColors2([2, 0, 2, 1, 1, 0]));
