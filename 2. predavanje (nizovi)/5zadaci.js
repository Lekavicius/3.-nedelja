// 1. Napisati funkciju koja prima niz i vraca niz elemenata deljivih sa 5.
{
    let niz = [1, 3, 5, 7, 10, 15, 1, 25];
    function divisibleBy5(niz) {
        let tmp = [];
        for (let i = 0; i < niz.length; i++) {
            if (niz[i] % 5 === 0) {
                tmp.push(niz[i])
            }
        }
        return tmp
    }
    console.log(divisibleBy5(niz));
}

// 2. Napisati funkciju koja vraca prosecnu vrednost brojeva niza (Aritmeticka sredina)
{
    let niz = [1, 2, 3, 4];
    function aritmetickaSredina(niz) {
        let sum = 0;
        for (let i = 0; i < niz.length; i++) {
            sum += niz[i]
        }
        return sum / niz.length
    }
    console.log(aritmetickaSredina(niz));
}

// 3. Ispisati zbir brojeva deljivih sa 2, a proizvod brojeva koji nisu deljivi sa 2.
{
    let niz = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    function racun(niz) {
        let sum = 0;
        let count = 1;
        for (let i = 0; i < niz.length; i++) {
            if (niz[i] % 2 === 0) sum += niz[i]
            if (niz[i] % 2 !== 0) count *= niz[i]
        }
        return `Zbir parnih brojeva iznosi ${sum}, a proizvod neparnih brojeva iznosi ${count}.`
    }
    console.log(racun(niz));
}

// 4. Ispisati zbir brojeva na parnim pozicijama, a proizvod brojeva na neparnim pozicijama niza.
{
    let niz = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    function racun(niz) {
        let sum = 0;
        let count = 1;
        for (let i = 0; i < niz.length; i++) {
            if (i % 2 === 0) sum += niz[i]
            if (i % 2 === 0) count *= niz[i]
        }
        return `Zbir brojeva na parnim pozicijama niza iznosi ${sum}, a proizvod brojeva na neparnim pozicijama iznosi ${count}.`
    }
    console.log(racun(niz));
}
console.log('----------------------');
/* 5. Napisati funkciju koja prima niz ljudi koji su lajkovali neki post i onda vraca String u sledecem formatu:

[] => "Nikome se ne svidja."
["Petar"] => "Petar voli ovo."
["Jakov", "Aleksa"] => "Jakov i Aleksa vole ovo."
["Maksimilijan", "Dzoni", "Marko"] => "Maksimilijan, Dzoni i Marko vole ovo."
["Aleksa", "Jakov", "Marko", "Maksimilijan"] => "Aleksa, Jakov i 2 drugih vole ovo."
["Aleksa", "Jakov", "Marko", "Maksimilijan", "Gabrijela"] => "Aleksa, Jakov i 3 drugih vole ovo." */

function likes(array) {
    switch (array.length) {
        case 0:
            return 'Nikome se ne svidja.';
        case 1:
            return `${array[0]} voli ovo.`;
        case 2:
            return `${array[0]} i ${array[1]} vole ovo.`;
        case 3:
            return `${array[0]}, ${array[1]} i ${array[2]} vole ovo.`;
        default:
            return `${array[0]}, ${array[1]} i ${array.length - 2} drugih vole ovo.`;
    }
}
console.log(likes(["Aleksa", "Jakov", "Marko", "Maksimilijan", "Gabrijela", "Kristina"]));

// 6. Izbrisati duplikate iz niza.
{
    let a = [1, 2, 5, 2, 1, 8];  // [1,2,5,8]
    let b = [];
    for (const broj of a) {
        if (!b.includes(broj)) {
            b.push(broj)
        }
    }
    a = [...b];
    console.log(a);
}

// 2. nacin:
{
    let a = [1, 2, 5, 2, 1, 8];
    console.log([...new Set(a)]);
}

