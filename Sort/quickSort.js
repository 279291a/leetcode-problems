/**
 * 快速排序
 */

const partition = (A, p, r) => {
  var pivot = A[r];
  var temp;
  let i = p;
  for (let j = p; j < r; j++) {
    if (A[j] < pivot) {
      temp = A[i];
      A[i++] = A[j];
      A[j] = temp;
    }
  }

  temp = A[i];
  A[i] = A[r];
  A[r] = temp;

  return i;
};

var arr = [11, 8, 3, 9, 7, 1, 2, 5];

const quickSort = (A, p = 0, r = A.length - 1) => {
  if (p >= r) return;

  var q = partition(A, p, r);

  quickSort(A, p, q - 1);
  quickSort(A, q + 1, r);
};

console.log(quickSort(arr));
