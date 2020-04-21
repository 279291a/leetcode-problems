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
    // console.log(result);
  }

  return result;
};

const merge2 = (left, right) => {
  let temp = [];
  let leftIndex = 0;
  let rightIndex = 0;

  //判断两个数组中元素大小，依次插入数组
  while (left.length > leftIndex && right.length > rightIndex) {
    if (left[leftIndex] <= right[rightIndex]) {
      temp.push(left[leftIndex]);
      leftIndex++;
    } else {
      temp.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return [...temp, ...left.slice(leftIndex), ...right.slice(rightIndex)];
};

const mergeSort = (a) => {
  // 当任意数组分解到只有一个时返回
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

  // 找到中间值
  const middle = Math.floor((a.length + 1) / 2);

  // 分割数组
  const left = a.slice(0, middle);
  const right = a.slice(middle);

  return merge2(mergeSort(left), mergeSort(right));
};

const testArr = [];
let i = 0;
while (i < 100) {
  testArr.push(Math.floor(Math.random() * 1000));
  i++;
}

const res = mergeSort(testArr);
console.log(res.join(" "));
