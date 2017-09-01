var param = process.argv[2] || 'Hello World!';

function reverse(str){
  return str.split('').reverse().join('');
}

function reverseWords(str){
  return str.split(' ').reverse();
}

console.log(param);
console.log(reverse(param));
console.log(reverseWords(param));
        