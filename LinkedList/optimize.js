/**
 * 哨兵优化
 */

const find = (a, key) => {
  if (!a || a.length === 0) return -1;

  let i = 0;
  let n = a.length;
  while (i < a.length) {
    if (a[i] === key) return i;
    ++i;
  }
  return -1;
};

const find2 = (a, key) => {
  if (!a || a.length === 0) return -1;

  const n = a.length;
  if (a[n - 1] === key) return n - 1;

  const tmp = a[n - 1];
  a[n - 1] = key;

  let i = 0;

  while (a[i] !== key) {
    i++;
  }

  a[n - 1] = tmp;

  if (i === n - 1) return -1;
  return i;
};
