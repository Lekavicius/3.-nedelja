// 1. Napisati funkciju koja vraca niz parnih brojeva
{
let niz = [1,2,3,4,5,6,7,8,9];
function samoParni(niz) {
    let nizParnih = niz.filter(el=>{
        return el%2===0;
    })
    return nizParnih
}
console.log(samoParni(niz));
}

// 2. Napisati funkciju koja vraca niz apsolutnih vrednosti parnih brojeva.
{
let niz = [-5, -4 , -3 , -2, 1, 3, 4, 5, 6];
function apsolutniParni(niz) {
   let nizApsolutnihParnih = niz.filter(el=>el%2===0).map(el=>Math.abs(el))
   return nizApsolutnihParnih;
}

console.log(apsolutniParni(niz));
}

// 3. Napisati funkciju koja filtira niz tako da dobijemo novi niz koji nema false vrednosti.
{
let niz = [1, 0 , 2, NaN, 5, false, 6];

function filtrirajNiz(niz) {
    return niz.filter(el=>el);
}
console.log(filtrirajNiz(niz));
}



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

// 4. Napisati funkciju koja ce za jedan recept da vrati string u sledecem formatu:
/* Naziv recepta: Spagete u sosu, sastojci: sastojak1 * 2, sastojak 2*4....*/

function formatRecept(recept) {
    let str = `Naziv recepta: ${recept.ime}, sastojci: `

    let sastojciStr = recept.sastojci.map(sastojak=>`${sastojak.ime} * ${sastojak.kolicina}`).join(' ,')
    return str + sastojciStr;
}
console.log(formatRecept(recept1));

let recepti = [
    {
        ime: "Spagete 1",
        tezina: "Laki",
        sastojci: [{ime:'s1', kolicina:4,cena:1},{ime:'s1', kolicina:1,cena:1},{ime:'s3', kolicina: 2,cena:1}]
    },
    {
        ime: "Spagete 2",
        tezina: "Laki",
        sastojci: [{ime:'s1', kolicina:4,cena:50},{ime:'s1', kolicina:1,cena:200},{ime:'s3', kolicina: 2,cena:60}]
    },
    {
        ime: "Spagete 3",
        tezina: "Teski",
        sastojci: [{ime:'s1', kolicina:1,cena:50},{ime:'s1', kolicina:2,cena:30},{ime:'s3', kolicina: 2, cena: 60}]
    }
]
console.log('------------------');
// Za niz recepata ispisati svaki recept koji je skuplji od 100, u formatu kao u prethodnom primeru.

function ukupnaCena(recept) {
    let ukupnaCena = 0;
    recept.sastojci.forEach(sastojak => {    
      ukupnaCena += sastojak.kolicina * sastojak.cena;  
     });
     return ukupnaCena;
}

function skupiRecepti(recepti) {
    let noviNiz = recepti.filter(recept=>{
        return ukupnaCena(recept)>100;
    })
    noviNiz.forEach(el=>{
        console.log(formatRecept(el));
    })
}
skupiRecepti(recepti);