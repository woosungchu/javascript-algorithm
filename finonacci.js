var index = process.argv[2] || 20;

function fibonacci(n){
  return (n<=1) ? n : fibonacci(n-1) + fibonacci (n-2);  
}

function fibonacci2(n){
	var fibo = [0, 1];
	  
	  if (n <= 2) return 1;

	  for (var i = 2; i <=n; i++ ){
	   fibo[i] = fibo[i-1]+fibo[i-2];
	  }

	 return fibo[n];
}

console.log(index);
console.log(fibonacci(index));