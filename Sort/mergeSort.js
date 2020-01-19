const merge = (nums1, nums2) => {
  let i = 0;
  let j = 0;
  const result = [];

  while (nums1[i] !== undefined || nums2[j] !== undefined) {
    if (nums1[i] === undefined) {
      result.push(nums2[j++]);
    } else if (nums2[j] === undefined) {
      result.push(nums1[i++]);
    } else if (nums1[i] <= nums2[j]) {
      result.push(nums1[i++]);
    } else {
      result.push(nums2[j++]);
    }
    console.log(result);
  }

  return result;
};

const mergeSort = a => {
  if (a.length <= 1) return a;

  var tmp;

  if (a.length === 2) {
    if (a[0] > a[1]) {
      tmp = a[0];
      a[0] = a[1];
      a[1] = tmp;
    }
    return a;
  }

  const middle = Math.floor((a.length + 1) / 2);
  const left = a.slice(0, middle);
  const right = a.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
};
