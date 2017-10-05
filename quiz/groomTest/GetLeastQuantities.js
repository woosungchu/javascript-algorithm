/**
 ���� ȭ���� �پ��� ȭ�� ������ ���� ���������� �ϴ� ȸ���. ���� ȭ�п����� �ϳ��� Ư�� ���� X �κ��� ��ǰ ���߿� �ʿ��� N������ �⺻ ������ ���� 50g�� ������ �� �ִٴ� ����� �߰��ߴ�. 

 ��ǰ ���߿��� ���� ���� �⺻ ������� �ռ� ������ �ʿ��ϴ�. �� �߿��� �ռ� ������ �ΰ������� �ռ��Ͽ��� ������ Ư�� ���� X������ ������ �� ���ٴ� ������ �ִ�. �ռ� ������ ���� �ٸ� �� ������ �⺻ ������ 1:1:1�� ȥ���ϸ� ����� �� �� �ִ�. ��, �ռ� ������ �ռ��ϴ� �������� ���� ���Ǵ� �⺻ ������ ������ 2/3�� �սǵǱ� ������ �� �⺻ ������ �� 1g�� (�� 3g)�� �ռ��ϸ� �� 1g�� �ռ� ������ ����� �� �� �ִ�.

 ���� �� �� ��ǰ ���߿� 1, 2, 3�� �⺻ ������ 50g�� �ʿ��ϰ� �ռ� ������ 7g�� �ʿ��ϴٸ� �ϳ��� Ư�� ���� X�δ� �ʿ��� �������� �غ��� �� ����. �׷��Ƿ� �� ���� Ư�� ���� X�� ���� 1, 2, 3�� ������ 100g�� �غ��ϰ� �� ������ 7g�� ����Ͽ� �ռ� ���� 7g�� �ռ��ؾ߸� �Ѵ�. ��������� 1, 2, 3�� ���� 93g���� �ռ� ���� 7g�� ���� �� �ִ�.

 ��ǰ ���߿� �ʿ��� �� �⺻ ������ ��� �ռ� ������ ���� �־��� ��, ��� �ʿ� ������ �غ��ϱ� ���� �ʿ��� Ư�� ���� X�� �ּ� ������ ����ϴ� ���α׷��� �ۼ��Ͻÿ�.
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