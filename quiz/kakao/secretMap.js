/**비밀지도*/

function solution(n,arr1,arr2) {
	var answer = [];
  var result1 = [];
  var result2 = [];

  for(var i = 0; i < n; i++){
    var two = (arr1[i]).toString(2);
    var left = n - (two+"").length;
    var val = ""+two;

    while(left--){val="0"+val};

    result1[i] = val;
  }

  for(var i = 0; i < n; i++){
    var two = (arr2[i]).toString(2);
    var left = n - (two+"").length;
    var val = ""+two;

    while(left--){val="0"+val};

    result2[i] = val;
  }

  //공백은 = 0 벽 = 1 #
  for(var j =0; j < n; j++){
    var sum = "";
    for(var k =0; k < n; k++){
      if((result1[j][k] == 0) && (result2[j][k]==result1[j][k])){
        sum +=" "
      }else{
        sum +="#"
      }
    }
    answer[j] = sum;
  }

	return answer;
}

var result = solution(5,[9, 20, 28, 18, 11],[30, 1, 21, 17, 28]);
console.log(result)
