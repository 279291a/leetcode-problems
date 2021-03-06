/**
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。

有效字符串需满足：

左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。
注意空字符串可被认为是有效字符串。
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  if (!s) return false;

  const arr = s.split("");

  if (arr.length % 2 !== 0) return false;

  var x = [];
  var y = [];

  const leftReg = /\(|\{|\[/;

  for (let i = 0; i < arr.length; i++) {
    if (leftReg.test(arr[i])) {
      x.push(arr[i]);
    } else {
      let item = x.pop();

      if (
        (item === "(" && arr[i] !== ")") ||
        (item === "{" && arr[i] !== "}") ||
        (item === "[" && arr[i] !== "]")
      ) {
        return false;
      }
    }
  }

  return x.length === 0;
};

console.log(isValid("([)]"));
