/*

Failed

*/
function counting(str) {
  var cnt = 0;

  for(var i =1; i < 50; i++){
    var zero = '0'.repeat(i);
    var one = '1'.repeat(i);

    var regex = new RegExp(zero + one,'g');
    var regex2 = new RegExp(one + zero,'g');

    cnt += (str.match(regex) || []).length;
    cnt += (str.match(regex2) || []).length;
  }

  return cnt;
}

var cnt = (str.match(/01/g) || []).length;


// var a = '10001';//2
var a = '10101';//2

var res = counting(a);
console.log(res);
