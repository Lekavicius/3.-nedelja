let sastojak1 = {
    ime: 'Spagete',
    kolicina: 1,
    cena: 100
}
let sastojak2 = {
    ime: 'Pavlaka',
    kolicina: 2,
    cena: 135
}
let sastojak3 = {
    ime: 'meso',
    kolicina: 0.3,
    cena: 500
}

let recept1 = {
    ime: 'Spagete u sosu',
    tezina: 'Laki',
    sastojci: [sastojak1,sastojak2,sastojak3]
}
let recept2 = {
    ime: 'Rec2',
    tezina: 'Teski',
    sastojci: [sastojak1,sastojak2]
}
let recept3 = {
    ime: 'Rec3',
    tezina: 'Laki',
    sastojci: [sastojak2]
}

function ukupnaCenaSastojka(sastojak){
    return sastojak.cena * sastojak.kolicina
}

//console.log(ukupnaCenaSastojka(sastojak2));

//Napisati funkciju koja racuna ukupnu cenu jednog recepta

/*function cenaRecepta(recept) {
    let sastojci = recept.sastojci;

    let ukupnaCenaRecepta = 0;
}

recept1.cena = function() {
    let ukupnaCenaRecepta = 0;
    this.sastojci.forEach(sastojak=>{
        ukupnaCenaRecepta += ukupnaCenaSastojka(sastojak)
});
    return ukupnaCenaRecepta;
}
console.log(recept1.cena()); */

// Kljucna rec this se odnosi bas na recept koji smo uneli, tj. na ono sto pise pre cena.
// This ne moze da se koristi kod arrow funkcija.

// Posto za svaki recept imamo ponavljanje koda, da ne bismo pisali za svaki isto, pravimo niz recepata.

let recepti = [recept1, recept2, recept3];

recepti.forEach(recept=>{
    recept.cena = function() {
        let ukupnaCenaRecepta = 0;
        this.sastojci.forEach(sastojak=>{
            ukupnaCenaRecepta += ukupnaCenaSastojka(sastojak)
    });
        return ukupnaCenaRecepta;
    }
})

recepti.forEach(recept=>{
    console.log(recept.cena());
})

