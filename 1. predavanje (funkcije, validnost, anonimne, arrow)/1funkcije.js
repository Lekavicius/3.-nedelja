{
    function primeNumber(x) {
        if (x == 1) return false

        for (let i = 2; i < x; i++) {
            if (x % i == 0) {
                return false
            }
        }
        return true
    }
    console.log(primeNumber(1));
}

{
    for (let i = 1; i < 50; i++) {
        if (primeNumber(i)) {       // U for petlji smo pozvali napravljenu funkciju
            console.log(i);          // Sad moze ova funkcija da se zove uvek kada nam trebaju prosti brojevi
        }

    }
}
console.log('------------');
// Napisati funkciju koja proverava da li je broj deljiv sa 5
{
    let x = 24;
    function isDivisibleBy5(x) {
        return x % 5 == 0
    }
    console.log(isDivisibleBy5(x));
}
console.log('---------------');
{
    // Suma od N do M.

    function sumNM(N, M) {
        if (N > M) {
            let t = N;
            N = M;
            M = t;
        }
        let sum = 0;
        for (N; N < M; N++) {
            sum += N

        }
        return sum
    }
    console.log(`Suma iznosi ${sumNM(2, 5)}`);
}

// Ispisati sumu brojeva od 1 do random broja.

for (let i = 1; i < 100; i++) {
    console.log(sumNM(i, Math.random() * 100));
}

