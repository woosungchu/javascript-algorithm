/* wrong code
 wrong code
  wrong code
   wrong code
    wrong code */

function solution(n, t, m, timetable) {
    var answer = '';
		var hr = 9;
		var min = 0;
		var schedule = [];
		var bus = [];

		var busLimit = n;
		var manLimit = m;
		timetable = timetable.sort();

		function time(){
			while(min >=60){
				min = min -60;
				hr++;
			}

			return (hr > 9 ? hr : "0"+hr) + ":"+(min > 9 ? min : "0"+min);
		};

		timetable.forEach(function(man,i){
			while(man > time() || manLimit == 0){
				busLimit--;
				if(busLimit == 0){
					hr = 9;
					min =(n-1)*t;
					answer = time();
					return false;
				}
				manLimit = m;
				min += t;
			}

			if(busLimit <= 1 && manLimit <= 1){
				var tarr = man.split(":");

				if(tarr[1] == "00"){
					answer = ((parseInt(tarr[0]) - 1) < 10 ? "0"+(parseInt(tarr[0]) - 1) : (parseInt(tarr[0]) - 1)) + ":59";
				}else{
					answer = tarr[0] + ":" + ( (parseInt(tarr[1]) -1) < 10 ? "0"+(parseInt(tarr[1]) -1)  :(parseInt(tarr[1]) -1));
				}
				return false;
			}

			// 시간, 자리
			if(man <= time() && manLimit > 0){
				manLimit--;
			}

		});
    return answer || "09:00";
}

var result = solution(2,10,2,["09:10", "09:09", "08:00"]);
// var result = solution(2,1,2,["09:00", "09:00", "09:00", "09:00"]);
// var result = solution(1,1,5,["08:00", "08:01", "08:02", "08:03"]);
// var result = solution(10,60,45,["23:59","23:59", "23:59", "23:59", "23:59", "23:59", "23:59", "23:59", "23:59", "23:59", "23:59", "23:59", "23:59", "23:59", "23:59", "23:59"]);
// var result = solution(1,1,1,["23:59"]);
console.log(result)
