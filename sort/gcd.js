var left = process.argv[2] || 126;
var right = process.argv[3] || 64;

//recursive
function gcd(a, b) {
    if (!b) return a;

    return gcd(b, a % b);
};

//iterative
function gcdi(a,b) {
    a = Math.abs(a);
    b = Math.abs(b);
    if (b > a) {var temp = a; a = b; b = temp;}
    while (true) {
        if (b == 0) return a;
        a %= b;
        if (a == 0) return b;
        b %= a;
    }
}

console.log(left + "," + right);
console.log(gcd(left,right));