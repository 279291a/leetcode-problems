/**
 * 插入排序
 */

const insertSort = a => {
  const n = a.length;

  if (n <= 1) return;

  for (let i = 1; i < n; i++) {
    const value = a[i];
    for (var j = i - 1; j >= 0; j--) {
      if (a[j] > value) {
        a[j + 1] = a[j];
      } else {
        break;
      }
    }

    a[j + 1] = value;
    console.log(a);
  }
};

insertSort([3, 2, 1]);
