/**
 * 冒泡排序
 */

const bubbleSort = arr => {
  const n = arr.length;

  if (n === 1) return;

  for (let i = 0; i < n; i++) {
    let flag = false;

    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j + 1] < arr[j]) {
        var temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;

        flag = true;
      }
    }

    if (!flag) break;
  }
  console.log(arr);
};

bubbleSort([2, 3, 5, 2354, 6526, 6, 2, 6, 7, 2, 6]);
