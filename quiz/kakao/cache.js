function solution(cacheSize, cities) {
    var answer = 0;
		var store = [];

		if(cacheSize == 0){
			return cities.length * 5
		}

		cities.forEach(function(v,i){
			v = v.toLowerCase();
				var hit = false;

				store.forEach(function(value,index){
					if(v === value){
						hit =true;
						store.splice(index,1);
						return false;
					}
				});

				answer += hit ? 1 : 5;

				store.unshift(v);
				store = store.splice(0,cacheSize);
		});

    return answer;
}

var result = solution(5,["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "SanFrancisco", "Seoul", "Rome", "Paris", "Jeju", "NewYork", "Rome"]);
console.log(result)
var result = solution(1, ["Jeju", "Pangyo", "NewYork", "newyork"]);
console.log(result)
