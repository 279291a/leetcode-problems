/**
 * 给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。
 *
 * 说明：本题中，我们将空字符串定义为有效的回文串。
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  let i = 0;
  let j = s.length - 1;
  s = s.toLowerCase();

  while (i < j) {
    while (!isValidChar(s[i])) {
      i++;
      if (i === s.length) return true;
    }

    while (!isValidChar(s[j])) {
      j--;
    }

    if (s[i] !== s[j]) return false;
    i++;
    j--;
  }
  return true;
};

const isValidChar = s => {
  //字符是字符或数字
  return (
    (s >= "a" && s <= "z") || (s >= "A" && s <= "Z") || (s >= "0" && s <= "9")
  );
};
console.log(isValidChar(" "));
console.log(isValidChar(" "));

console.log(isPalindrome("A mana plana canal: Panama"));
