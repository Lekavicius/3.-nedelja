// Validnost stranica trougla
{
    function isValid(a, b, c) {
        if (a <= 0 || b <= 0 || c <= 0) return false
        if (a + b <= c || a + c <= b || b + c <= a) return false
        return true
    }
    console.log(isValid(3, 4, 5));
}
// 2. nacin:
{
    function isValid2(a, b, c) {
        return a > 0 && b > 0 && c > 0 && a + b > c && a + c > b && b + c > a
    }
    console.log(isValid2(3, 4, 0));
}
console.log('-----------');
// Validnost emaila
{
    function isValidEmail(str) {
        return str.includes('@') && str.length > 10
    }
    console.log(isValidEmail('lekovic.marko@gmail.com'));
}
console.log('-----------');

let a = 4;
let b = 3;
let c = 3;
if (isValid(a, b, c)) {
    let P = povrsinaTrougla(a, b, c)
}

console.log('-------------');

// 