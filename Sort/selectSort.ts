/**
 * 选择排序
 */

interface NumberArray {
  [index: number]: number;
  length: number;
}

const selectSort: (a: NumberArray) => void = (a: NumberArray) => {
  const n: number = a.length;

  if (n <= 1) return;

  for (let i: number = 0; i < n - 1; i++) {
    let minKey: number = i;

    for (let j: number = i; j < n - 1; j++) {
      if (a[j + 1] < a[j]) {
        minKey = j + 1;
      } else {
        break;
      }
    }
    var tmp = a[i];
    a[i] = a[minKey];
    a[minKey] = tmp;
  }
};

selectSort([4, 3, 2, 1]);
