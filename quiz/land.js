function solution(land) {
	var answer = 0;
  var before = -1;

  for(var i =0; i < land.length; i++){
    var max = 0;
    var check = 0;

    for(var j =0; j < 4; j++){
      if(before != j){
        if(land[i][j] > max){
          max = land[i][j];
          check = j;
        }
      }
    }
    
    before = check;
    answer += max;
  }

	return answer;
}

var result = solution([[1,2,3,5],[5,6,7,8],[4,3,2,1]]);
console.log(result)
