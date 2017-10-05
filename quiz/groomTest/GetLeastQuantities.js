/**
 구름 화학은 다양한 화학 물질에 대한 연구개발을 하는 회사다. 구름 화학에서는 하나의 특수 광물 X 로부터 약품 개발에 필요한 N가지의 기본 물질을 각각 50g씩 추출할 수 있다는 사실을 발견했다. 

 약품 개발에는 일정 양의 기본 물질들과 합성 물질이 필요하다. 이 중에서 합성 물질은 인공적으로 합성하였기 때문에 특수 광물 X에서도 추출할 수 없다는 문제가 있다. 합성 물질은 서로 다른 세 종류의 기본 물질을 1:1:1로 혼합하면 만들어 낼 수 있다. 단, 합성 물질을 합성하는 과정에서 재료로 사용되는 기본 물질의 질량이 2/3가 손실되기 때문에 세 기본 물질을 각 1g씩 (총 3g)을 합성하면 총 1g의 합성 물질을 만들어 낼 수 있다.

 예를 들어서 한 약품 개발에 1, 2, 3번 기본 물질이 50g씩 필요하고 합성 물질이 7g이 필요하다면 하나의 특수 광물 X로는 필요한 물질들을 준비할 수 없다. 그러므로 두 개의 특수 광물 X를 통해 1, 2, 3번 물질을 100g씩 준비하고 각 물질을 7g씩 사용하여 합성 물질 7g을 합성해야만 한다. 결과적으로 1, 2, 3번 물질 93g씩과 합성 물질 7g을 만들 수 있다.

 약품 개발에 필요한 각 기본 물질의 양과 합성 물질의 양이 주어질 때, 모든 필요 물질을 준비하기 위해 필요한 특수 광물 X의 최소 갯수를 계산하는 프로그램을 작성하시오.
*/

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
var cnt = 0;
var testCases = 0;
var caseNo = 1;
var n ,g;


rl.on("line", function(line){
  if(cnt == 0){
    testCases = line;
  }else if(cnt%2 == 1){
    var inputArr = line.split(" ");
		n = inputArr[0];
		g = inputArr[1];
	}else if(cnt%2 == 0){
		var arr = line.split(" ").map(Number);
		solution(n,g,arr);
  }
	cnt++;
	
  if(cnt > (testCases*2) + 1){
    rl.close();
  }

  }).on("close", function() {
  process.exit();
});

function solution(n,g,arr){
  var cnt = 0;
	var answer = 0;
	
	
	while(cnt<g){
		arr.sort(sortNumber);
		arr[0] +=1;
		arr[1] +=1;
		arr[2] +=1;
		
		cnt++;
	}
	arr.sort(sortNumber);
	answer = Math.ceil(arr[n-1]/50);
	console.log('Case #'+caseNo);
	console.log(answer);
	caseNo++;
}

function sortNumber(a,b){
	return a-b;
}