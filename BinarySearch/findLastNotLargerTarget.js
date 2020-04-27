const findLastNotLargerTarget = (nums, target) => {
  let low = 0;
  let high = nums.length - 1;

  while (low <= high) {
    const mid = (low + (high - low)) >> 1;
    if (nums[mid] > target) {
      high = mid - 1;
    } else {
      if (mid === nums.length - 1 || nums[mid + 1] > target) return mid;
      else low = mid + 1;
    }
  }

  return -1;
};

console.log(findLastNotLargerTarget([3, 5, 6, 8, 9, 10], 7));
