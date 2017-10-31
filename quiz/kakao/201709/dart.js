function solution(dartResult) {
	var answer = [];
	var arr = dartResult.split(/[0-9]+/).splice(1,3);
	var str = dartResult.split(/[SDT*#]+/).splice(0,3);
	var result = 0;

	arr.forEach(function(v,i){
		var point = parseInt(str[i]);

		if(v.indexOf("S") > -1){
			point = point;
		}else if(v.indexOf("D") > -1){
			point = Math.pow(point,2);
		}else{
			point = Math.pow(point,3)
		}

		if(v.indexOf("*") > -1){
			point = point * 2;
			if(i>0)
				answer[i-1] = answer[i-1] * (2);
		}else if(v.indexOf("#") > -1){
			point = point * (-1);
		}
		answer[i] = point;
	})
	answer.forEach(function(v){result+=v;});

	return result;
}

var result = solution("1D2S3T*");
console.log(result)
