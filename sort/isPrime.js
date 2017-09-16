var arg2 = process.argv[2];

//http://www.thatjsdude.com/interview/js1.html
function isPrime(n){
  var divisor = 2;

  while (n > divisor){
    if(n % divisor == 0){
     return false; 
    }
    else
      divisor++;
  }
  return true;
}

console.log(isPrime(arg2));