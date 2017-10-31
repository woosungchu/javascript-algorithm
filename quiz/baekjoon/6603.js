// 7 1 2 3 4 5 6 7

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
var cnt = 0;
var testCases = 0;
var result = new Array(6);
var num = [];


rl.on("line", function(line){
  if(cnt == 0){
    testCases = line;
  }
  solution(line);
  cnt++;

  if(cnt > testCases){
    rl.close();
  }

  }).on("close", function() {
  process.exit();
});

function solution(input){
  // 7 1 2 3 4 5 6 7
  var num = input.split(" ");

  num.shift();
  num.sort();

  for(var i = 0; i < num.length;i++){
    result[0] = i;
    dfs(0);
  }


}

function dfs(depth){
  if(depth==7){
    console.log(result.join(''));
    return;
  }

  for(var i = result[depth-1]; i < num.length; i++){
    result[depth] = i;
    dfs(depth+1);
  }


}
