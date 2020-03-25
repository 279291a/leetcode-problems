/**
 * 我们有一个背包，背包总的承载重量是 Wkg。
 * 现在我们有 n 个物品，每个物品的重量不等，并且不可分割。
 * 我们现在期望选择几件物品，装载到背包中。在不超过背包所能装载重量的前提下，如何让背包中物品的总重量最大？
 *
 * 背包问题：动态规划
 */

//weight: 物品重量数组  n:物品个数  w:背包可承载重量
const knapsack = (weight, n, w) => {
  const states = Array(n).fill(Array(w + 1).fill(false));

  states[0][0] = true;
  states[0][weight[0]] = true;

  for (let i = 1; i <= n; i++) {
    for (let j = 0; j <= w; j++) {
      //不把第i个物品放入背包
      if (states[i - 1][j] === true) {
        states[i][j] = states[i - 1][j];
      }
    }

    for (let j = 0; j <= w - weight[i]; j++) {
      //将第i个物品放入背包
      if (states[i - 1][j] === true) {
        states[i - 1][j + weight[i]] = true;
      }
    }

    for (let i = w; i >= 0; i--) {
      if (states[n - 1][i] === true) return i;
    }

    return 0;
  }
};

//使用一维数组降低空间复杂度
const knapsack2 = (weight, n, w) => {
  const states = Array(w + 1).fill(false);

  states[0] = true;
  states[weight[0]] = true;

  for (let i = 0; i < n; i++) {
    for (let j = w - weight[i]; j >= 0; --j) {
      if (states[j] === true) states[j + weight[i]] = true;
    }
  }

  for (let k = w; k >= 0; k--) {
    if (states[k] === true) return i;
  }

  return 0;
};
