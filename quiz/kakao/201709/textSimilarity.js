function solution(str1, str2) {
    var answer = 0;
		var arr1 = [];
		var arr2 = [];
		var cnt = 0;
		var sm = [];
		var lg = [];

		str1 = str1.toUpperCase();
		str2 = str2.toUpperCase();

		for(var i = 0; i < str1.length-1; i++){
			var val = str1[i] + str1[i+1];
			if(val.match(/^[a-zA-Z]+$/)){
					arr1.push(val);
			}
		}

		for(var i = 0; i < str2.length-1; i++){
			var val = str2[i] + str2[i+1];
			if(val.match(/^[a-zA-Z]+$/)){
					arr2.push(val);
			}
		}

		if(arr1.length > arr2.length){
			sm = arr2;
			lg = arr1;
		}else{
			sm = arr1;
			lg = arr2;
		}

		var total = sm.length + lg.length;
		var len = sm.length;
		var i = 0;

		while(len--){
			var a = sm[i];
			for(var j = 0; j < lg.length; j++){
				if(a === lg[j]){
					cnt++;
					lg.splice(j,1);
					break;
				}
			}

			i++;
		}

		answer = (cnt == 0 && (total - cnt) == 0 ) ? 1 :cnt / (total - cnt);
		// console.log(answer)
    return Math.floor(answer * 65536);
}
// var result = solution("handshake", "shake hands");
var result = solution("FRANCE", "french");
// var result = solution("aa1+aa2", "AAAA12");
console.log(result)
// var result = solution("aaa", "aaaaa");
// console.log(result)
