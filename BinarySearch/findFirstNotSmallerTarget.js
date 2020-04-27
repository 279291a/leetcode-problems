const findFirstNotSmallerTarget = (nums, target) => {
  let low = 0;
  let high = nums.length - 1;
  let mid;

  while (low <= high) {
    mid = (low + (high - low)) >> 1;
    if (nums[mid] < target) {
      low = mid + 1;
    } else {
      if (mid === 0 || nums[mid - 1] < target) return mid;
      else high = mid - 1;
    }
  }
  return -1;
};

console.log(findFirstNoSmaller([1, 2, 2, 3, 4, 4, 5, 5, 7], 4));
