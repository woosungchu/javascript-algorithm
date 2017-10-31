function findNumber(arr,k){
  var result = arr.some(function(el){
    return el == k;
  })

  return result ? "YES" : "NO";
}

var a = [1,2,3,4,5,6];
var b = 7;
var res = findNumber(a,b);
console.log(res);
