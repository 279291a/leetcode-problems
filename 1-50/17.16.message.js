/**
 * 一个有名的按摩师会收到源源不断的预约请求，每个预约都可以选择接或不接。在每次预约服务之间要有休息时间，因此她不能接受相邻的预约。给定一个预约请求序列，替按摩师找到最优的预约集合（总预约时间最长），返回总的分钟数。

  注意：本题相对原题稍作改动

   

  示例 1：

  输入： [1,2,3,1]
  输出： 4
  解释： 选择 1 号预约和 3 号预约，总时长 = 1 + 3 = 4。

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/the-masseuse-lcci
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * 使用回溯算法实现
 * @param {number[]} nums
 * @return {number}
 */

var massage = function(nums) {
  if (!nums || nums.length === 0) return 0;

  const n = nums.length - 1;

  const a = f(nums, n, 0, nums[0]);
  const b = f(nums, n, 1, nums[1]);

  return Math.max(a, b);
};

const f = (nums, n, i, max) => {
  if (i >= n - 1) return max || 0;

  const a = f(nums, n, i + 2, max + nums[i + 2]) || 0;
  const b = f(nums, n, i + 3, max + nums[i + 3]) || 0;
  // console.log(i, a, b);
  return Math.max(a, b);
};

/**
 *
 */
