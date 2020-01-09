/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function(T) {
  if (T.length === 0) return [];
  if (T.length === 1) return [0];
  const popArr = [];
  const result = [0];
  let cur = 0;

  while (T.length > 1) {
    popArr.push(T.pop());
    cur = T[T.length - 1];
    let count = 0;

    for (let i = popArr.length - 1; i >= 0; i--) {
      if (cur < popArr[i]) {
        count = popArr.length - i;
        break;
      }
    }

    result.unshift(count);
  }

  return result;
};

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));
