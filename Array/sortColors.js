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
};

/**
 * 思路：三路快排
 * nums[0,lt] ==0 ,nums[lt+1,i-1]==1，nums[gt,n-1]==2
 *
 */
var sortColors2 = function(nums) {
  let lt = -1;
  let k = 0;
  gt = nums.length;
  while (k < gt) {
    if (nums[k] === 0) {
      nums[k++] = nums[++lt];
      nums[lt] = 0;
    } else if (nums[k] === 2) {
      nums[k] = nums[--gt];
      nums[gt] = 2;
    } else {
      k++;
    }
  }
};
