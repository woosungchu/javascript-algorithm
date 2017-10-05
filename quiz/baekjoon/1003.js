const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
var cnt = 0;
var testCases = 0;


rl.on("line", function(line){
  if(cnt == 0){
    testCases = line;
  }else{
    solution(line);
  }
  cnt++;

  if(cnt > testCases){
    rl.close();
  }

  }).on("close", function() {
  process.exit();
});

function solution(n){
  var fibo = [[1,0],[0,1]];

  if(n > 1){
    for (var i = 2; i <=n; i++ ){
     fibo[i] = [ fibo[i-1][0]+fibo[i-2][0] , fibo[i-1][1]+fibo[i-2][1] ];
    }
  }

  console.log(fibo[n][0] +" " + fibo[n][1]);
}
