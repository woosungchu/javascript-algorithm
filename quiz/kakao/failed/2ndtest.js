/*

Failed

*/

//https://github.com/bitinn/node-fetch
var fetch = require('node-fetch');
var kakao = 'http://api.welcome.kakao.com';

var loginToken = 'URdglqbB9mXXvtzyymOMjvXZ2iJDW6k4nxGN0t-Nyd4q-';
var submitToken = '';

function toKakao(url, method, header, callback, json, param,error){
  var headers = header || {'Content-Type': 'application/json'};
  var json = json || false;
  var body = param || '{}';
  var errorCallback = error || function(err){
    console.log(err.code)
    console.log(err.message)
  };

  if(json){
    fetch(kakao+url, {
      method: method,
      headers: headers,
      body: body
    }).then(res => res.json()).then(callback).catch(errorCallback);
  }else{
    fetch(kakao+url, {
      method: method,
      headers: headers,
      body: body
    }).then(res => res.text()).then(callback).catch(err => console.error(err));;
  }

}

function main(){
  tokenAPI().then(function(){
    seedAPI().then(function(arr){
      arr.forEach(function(path){
        documentAPI(path);
      });
    });
  });

}

// Document_API 전송하고 featuring실행
function documentAPI(path){
  toKakao(path,'get', {'X-Auth-Token' : submitToken} ,function(json){
    featuring(json,path);
  }, true);
}

// documentAPI에서 json을 받아 중복처리 후 add,del API를 날리는 곳.
// nextUrl 과 전것이 같으면 featuring 안함
function featuring(json,path){
  if(path == json.next_url && json.images.length < 1){
    setTimeout(function(){ documentAPI(json.next_url); }, 150);
    //reject
  }else{
    var filtered = filter(json.images);

    aaa(filtered);
  }

  function aaa(param){
    extract(param).then(function(arr){
      bbb(arr);
    },function(){
      aaa(param);
    });
  }

  function bbb(param){
    saveAPI(param).then(function(num){
      setTimeout(function(){ documentAPI(json.next_url); }, 150);
    },function(){
      bbb(param);
    });
  }
}


function saveAPI(arr){
  var add = arr.add;
  var del = arr.del;
  var req = [];
  var cnt = 0;

  while(add.length != 0){
    req.push({
      'method' : 'post',
      'data'   : JSON.stringify(add.splice(0,50))
    })
  }

  while(del.length != 0){
    req.push({
      'method' : 'delete',
      'data'   : JSON.stringify(del.splice(0,50))
    })
  }

  return new Promise(function(resolve,reject){
    req.forEach(function(item){
      toKakao('/image/feature',item.method, {'X-Auth-Token' : submitToken}, json => {
        cnt++;
        if(cnt >= req.length ){
          resolve(cnt);
        }
      },false, '{"data":'+item.data+'}',err => reject());
    })
  });

}

// obj를 넣어 feature특징값과 함께 arr로 반환
function extract(obj){
  var param = "?id=";
  var len = Object.keys(obj).length;
  var req = [];
  var cnt = 1;
  var result = {
    add : [],
    del : []
  };

  for (var k in obj){
    if(cnt>50){
      param = param.substring(0, param.length - 1);
      req.push(param);
      param = "?id=";
      cnt = 1;
    }
    param += k +","
    cnt++;
  }

  if((len % 50) != 0){
    param = param.substring(0, param.length - 1);
    req.push(param);
  }

  return new Promise(function(resolve,reject){
    var arrLen = 0;
    req.forEach(function(r){

      toKakao('/image/feature'+r,'get', {'X-Auth-Token' : submitToken}, json => {
        // console.log('success')
        var arr = json.features;
        arrLen+= arr.length;
        arr.forEach(function(a){
          if(obj[a.id] == 1){
            result.add.push(a)
          }else{
            result.del.push({'id':a.id})
          }
        })

        //arr.len == obj.len
        if(arrLen == len ){
          resolve(result);
        }

      },true,null,err => reject());//
    })
  });
}


//중복처리
function filter(images){
  var arr = {};
  images.forEach(function(a){
    arr[a.id] = (a.type == 'add')? 1:0;
  })
  return arr;
}



// TOKEN_API
function tokenAPI(){
  return new Promise(function(resolve,reject){
    if(submitToken){
        resolve();
    }else{
      toKakao('/token/'+loginToken,'get', null, body => {
        if(body){
          submitToken = body;
        }
        resolve();
      });
    }
  });
}

// SEED_API
function seedAPI(){
  var seedArr = [];

  return new Promise(function(resolve,reject){
    toKakao('/seed','get', {'X-Auth-Token' : submitToken} , body => {
      seedArr = body.split('\n');
      seedArr.splice(-1,1);
      resolve(seedArr);
    });
  });
}


main();
