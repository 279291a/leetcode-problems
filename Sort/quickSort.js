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

const quickSort = (A, p = 0, r = A.length - 1) => {
  if (p >= r) return;

  var q = partition(A, p, r);

  quickSort(A, p, q - 1);
  quickSort(A, q + 1, r);
  return A;
};

const arr = [];

for (let i = 0; i < 1000; i++) {
  arr.push(Math.floor(Math.random() * 1000));
}

console.log(quickSort(arr));
