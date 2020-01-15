const merge = [];

const mergeSort = (a, p = 0, q = a.length - 1) => {
  if (q <= 0) return;

  const middle = Math.floor((a.length - 1) / 2);
  const left = mergeSort(a, p, r);
  mergeSort(a, r + 1, q);

  merge();
};
