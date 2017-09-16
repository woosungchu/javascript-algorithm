var arr = process.argv[2] || [11,8,14,3,6,2,7];

function bubbleSort(arr){
	for(var i = arr.length -1 ; i >=0; i--){
		for(var j = 1; j <= i; j++){
			if( arr[j-1] > arr[j] ){
				var temp = arr[j-1];
				arr[j-1] = arr[j];
				arr[j] = temp;
			}
		}
	}
	return arr;
}

console.log(arr);
console.log(bubbleSort(arr));