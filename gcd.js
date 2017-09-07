var left = process.argv[2] || 126;
var right = process.argv[3] || 64;

function gcd(a, b) {
    if (!b) return a;

    return gcd(b, a % b);
};

console.log(left + "," + right);
console.log(gcd(left,right));