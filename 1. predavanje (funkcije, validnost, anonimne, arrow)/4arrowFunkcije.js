let add = (a, b) => {
    return a + b
}

// moze i krace da se napise:

let add1 = (a, b) => a + b

console.log(add1(3, 4));

// Ovo je sve isto, samo drugaciji format pisanja funkcije

// Validnost stranica trougla preko arrow funkcije

let isValid = (a, b, c) => a > 0 && b > 0 && c > 0 && a + b > c && a + c > b && b + c > a;

console.log(isValid(3, 4, 5));