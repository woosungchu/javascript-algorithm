var arg2 = process.argv[2];

//http://www.thatjsdude.com/interview/js1.html
function primeFactors(n){
  var factors = [], 
      divisor = 2;
  
  while(n>2){
    if(n % divisor == 0){
       factors.push(divisor); 
       n= n/ divisor;
    }
    else{
      divisor++;
    }     
  }
  return factors;
}

console.log(primeFactors(arg2));