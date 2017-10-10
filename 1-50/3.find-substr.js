var length = function (s) {
  if(!s) return; 

  var ary = s.split('');
  var longest = ary.slice();
  for(var i = 0;i < ary.length; i++){
    for(var j = i+1; j<ary.length;j++){
      if(longest[i].indexOf(ary[j]) < 0){
        longest[i] += ary[j];
      }else{
        break;
      }
    }
  }
  var length = longest.map(v => v.length);
  
  return Math.max(...length)
};