// FOREACH
let acc1 = {
    username: 'Pera',
    email: 'pera.peric@gmail.com',
    password: 'pera123',
    age: 17,
    adresa: {
        ulica: 'Nemanjina',
        broj: 17
    },
    dodatneInformacije: {
        avatar: 'img.png'
    }
}
let acc2 = {
    username: 'Pera',
    email: 'pera.peric@gmail.com',
    password: 'pera123',
    age: 23,
    adresa: {
        ulica: 'Nemanjina',
        broj: 17
    }
}
let nizObjekata = [acc1, acc2, { username: 'Leka', password: 'leka123', age: 27 }]

// Foreach petlja ocekuje u sebi neku drugu funkciju (da joj se prosledi cela druga funkcija)
// i tu je zgodna Arrow funkcija.

nizObjekata.forEach((element) => { console.log(element.username) })

/* Foreach petlja uzima redom elemente iz niza i poziva ovu Arrow funkciju tako sto joj 
 prosledjuje jedan po jedan element redom. */

/* Osim ovog elementa, Foreach petlja prosledjuje ovoj funkciji jos i index, tj. poziciju i jos
   ceo ovaj niz (nizObjekata) */

nizObjekata.forEach((element, indeks) => { console.log(element.username, indeks) })

nizObjekata.forEach((element, indeks, niz) => { console.log(element.username, indeks, niz) })

{
    function kvadratBroja(x) {
        console.log(x * x);
    }

    let nizBrojeva = [1, 4, 3, 6, 8];
    nizBrojeva.forEach(kvadratBroja)
}