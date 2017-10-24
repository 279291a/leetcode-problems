var longestPalindrome = function (s) {
  //检验是否为回文
  var isHuiWen = function (x) {
    return x === x.split('').reverse().join('');
  };

  //防止字符串为空
  if (!s) return;

  if (s.length === 1) return s;

  var longest = '';
  var temp = '';

  for (var i = 0; i < s.length; i++) {
    for (var j = i; j < s.length + 1; j++) {
      temp = s.substring(i, j);
      if (isHuiWen(temp) && temp.length > longest.length) {
        longest = temp;
      }
    }
  }

  return longest;
};