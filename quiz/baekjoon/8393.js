var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString();
var sum = 0;

for(var i = 1; i <= Number(input); i++){
    sum += i;
}

console.log(sum);
