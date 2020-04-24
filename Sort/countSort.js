const countSort = (nums) => {
  if (nums.length <= 1) return nums;

  let max = nums[0].score;

  nums.forEach((v) => {
    if (max < v.score) {
      max = v.score;
    }
  });

  console.log(max);

  const count = Array(max).fill(0);
  const scores = [];
  const result = [];

  let i = 0;
  while (i < nums.length) {
    if (!scores[nums[i].score]) {
      scores[nums[i].score] = [];
    }
    scores[nums[i].score].push(nums[i].id);
    count[nums[i++].score]++;
  }

  count.forEach((v, k) => {
    if (k === 0) {
      count[k] = v;
    } else {
      count[k] = v + count[k - 1];
    }
  });

  let j = nums.length - 1;
  while (j >= 0) {
    const key = --count[nums[j].score];
    result[key] = nums[j];
    j--;
  }

  console.log(
    count.join(" "),
    scores,
    result.map((v) => JSON.stringify(v)).join(" ")
  );
};

/**
 * 假设给100个学生的成绩进行排名，分数为 0~n
 *
 * 1. 分成n+1个桶
 * 2. 遍历，计算每个分数的学生个数
 * 3. 排名
 * 4. 任意获取某个学生的名次
 */
const arr = [];

for (let i = 0; i < 100; i++) {
  arr.push({ id: i, score: Math.floor(Math.random() * 20) });
}

// console.log(arr);

countSort(arr);
