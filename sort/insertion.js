var arr = process.argv[2] || [11,8,14,3,6,2,7];

function insertSort(arr){
	var len = arr.length;
    for (var i = 1; i < len; i++) {
        var tmp = arr[i]; 
        
        for (var j = i - 1; j >= 0 && (arr[j] > tmp); j--) {
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = tmp;
    }
    retrun
}

console.log(arr);
console.log(insertSort(arr));