var longestPalindrome = function(s) {
  var result = s.split('');
  
  //检验是否为回文
  var isHuiWen  = function(x){
    x === x.split('').reverse().join('');
  };

  //防止字符串为空
  if(!s) return ;

  if(s.length === 1) return s;

  for(var i =0;i<result.length;i++){
    var k1 = s.lastIndexOf(v);
    if(k1 !== k){
      var substr = s.substr(k, k1);
      if(isHuiWen(substr)){
        result.push(substr);
      }
    }
  }
  result.filter((v,k) => {
    //如果存在与两个相同字符
    var k1 = s.lastIndexOf(v);
    if(k1 !== k){
      var substr = s.substr(k, k1);
    }
  });
};