/**
 * @param {number[]} deck
 * @return {boolean}
 */

const gcd = (a, b) => {
  if (a % b === 0) return b;
  return gcd(b, a % b);
};
var hasGroupsSizeX = function(deck) {
  if (deck.length < 2) return false;

  const arr = [];
  for (let i = 0; i < deck.length; i++) {
    if (arr[deck[i]]) {
      arr[deck[i]] += 1;
    } else {
      arr[deck[i]] = 1;
    }
  }
  const result = arr.filter(v => !!v);

  if (result.every(v => v === result[0])) return true;

  let x = 0;
  for (let j = 0; j < result.length; j++) {
    x = gcd(x, result[j]);
    if (x === 1) return false;
  }
  return true;
};
