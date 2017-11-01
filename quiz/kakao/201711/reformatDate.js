function reformatDate(dates) {
  var month = { 'Jan' : '01' , 'Feb' : '02', 'Mar':'03','Apr':'04','May':'05','Jun':'06','Jul':'07','Aug':'08','Sep':'09','Oct':'10','Nov':'11','Dec':'12'};
  var answer = [];

  dates.forEach(function(a){
    var arr = a.split(' ');
    var day = arr[0].slice(0,-2),
        mon = month[arr[1]],
        year = arr[2];

    if(day.length <2) day = '0'+day;

    answer.push(year+"-"+mon+"-"+day);
  });

  return answer;
}


var a = ['20th Oct 2052','6th Jun 1933'];

var res = reformatDate(a);
console.log(res);
