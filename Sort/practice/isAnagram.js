/**
 * 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。

示例 1:

输入: s = "anagram", t = "nagaram"
输出: true
示例 2:

输入: s = "rat", t = "car"
输出: false
说明:
你可以假设字符串只包含小写字母。

进阶:
如果输入字符串包含 unicode 字符怎么办？你能否调整你的解法来应对这种情况？

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/valid-anagram
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * 思路：使用桶排序，计算组成单词的字母个数是否一样
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if (s.length !== t.length) return false;

  const result = {};

  for (let i = 0; i < s.length; i++) {
    if (result[s[i]] === undefined) {
      result[s[i]] = 1;
    } else {
      result[[s[i]]]++;
    }

    if (result[t[i]] === undefined) {
      result[t[i]] = -1;
    } else {
      result[t[i]]--;
    }
  }

  for (const key in result) {
    if (result.hasOwnProperty(key)) {
      if (result[key] !== 0) {
        return false;
      }
    }
  }

  return true;
};

console.log(isAnagram("a", "ab"));
