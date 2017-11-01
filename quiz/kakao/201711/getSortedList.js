function getSortedList(arr) {

  for(var i = arr.length -1 ; i >=0; i--){
		for(var j = 1; j <= i; j++){
      if(compare(arr[j-1],arr[j])){
				var temp = arr[j-1];
				arr[j-1] = arr[j];
				arr[j] = temp;
      }
		}
	}

  //a가 더 길거나 크면 return true;
  function compare(a,b){
    var l = a.split(' '),
        r = b.split(' '),
        left = {name:l[0],number:l[1]},
        right = {name:r[0],number:r[1]};

    // 더 짧은 이름이 len
    var len = left.name.length > right.name.length ? right.name.length : left.name.length;

    //대소문자 구분?
    for(var i=0; i <len; i++){
      if(left.name.charCodeAt(i) != right.name.charCodeAt(i)){
        return (left.name.charCodeAt(i) > right.name.charCodeAt(i))
      }
    }
    //이름이 같거나 짧다

    //왼쪽이 짧은놈보다 더길이가 크면 return true
    if(left.name.length > len)return true;
    if(right.name.length > len)return false;

    //이름이 같으면 숫자비교
    return decodeRomanNumber(left.number) > decodeRomanNumber(right.number)
  }

  function decodeRomanNumber(str){
      var digit = {'I':1,'V':5,'X':10,'L':50};
      var num = digit[str.charAt(0)];

      for(var i = 1; i < str.length; i++){
          var cur = digit[str.charAt(i)];
          var prev = digit[str.charAt(i-1)];

          if(cur > prev){//오른쪽이 더 클때
              num = num - prev*2
          }
          num += cur;
      }

      return num;
  }

  return arr;
}




var a = ['Asdsds','Asdsdsddfg','Asddefdvewe','Asqwdsvrvr','Azxcewfsdfsd','Asdasdasda','Asdasfafas','Asdasfasfadf','Asdadsadasd','Aaaasasdas','Aasdassdad'];
// var a = ['Louis IX','Louis VIIL','Louis LVIII','Louis XXXVIII','Louis XXLII','Louis XXLVII','Louis XLIII','Louis XLIIII','Louis XXXLII','Louis XLIII',
// 'Louis I','Louis II','Louis III','Louis IV','Louis V','Louis VI','Louis VI','Louis VII','Louis VIII','Louis IX','Louis X','Louis XI','Louis XII',
// 'Louis XV','Louis XIV','Louis XVI','Louis IIXX','Louis VXX','Louis XXVII','Louis XXXII','Louis XXXIII','Louis XXXVII','Louis XXXIIV','Louis XXXX','Louis XXX','Louis XX',
// ];
// var a = ['Philippe I','Philip II'];
var res = decodeRomanNumber('XLII');
// var res = getSortedList(a);
console.log(res);
