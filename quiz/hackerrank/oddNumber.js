function oddNumber(l,r){
  var go = (l % 2 == 0) ? l+1 : l,
      result = [];

  while(r >= go){
    result.push(go);
    go +=2;
  }

  return result;
}

var a = 3;
var b = 9;
var res = oddNumber(a,b);
console.log(res);
