var arr = process.argv[2] || [11,8,14,3,6,2,7];
var left = process.argv[3] || 0;
var right = process.argv[4] || arr.length;

function sort(arr){
	var len = arr.length,
		pivot = arr[Math.floor(len / 2)],
		lt = [], gt = [], eq = [];
	
	if(len <= 1)return arr;
	
	arr.forEach(function(a){
		if(a < pivot) lt.push(a);
		else if(a > pivot) gt.push(a);
		else eq.push(a);
	})
	
	return sort(lt).concat(eq).concat(sort(gt));
}

console.log(arr);
console.log(sort(arr));