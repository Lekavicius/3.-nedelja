let recept1 = {
    ime: 'Spagete u belom sosu',
    tezina: 'Srednji',
    sastojci: ['Spagete', 'Pavlaka za kuvanje', 'Beli luk', 'Curece meso', 'Maslac', 'Jaja', 'Biber', 'So']
}

// Napraviti funkciju koja prima recept i ispisuje ga u sledecem formatu:
/* Spagete u belom sosu:
   Tezina: Srednji
   Sastojci: Spagete, Pavlaka za kuvanje, Beli luk..... */

function ispisRecepta(recept) {
    console.log(recept.ime + ':');
    console.log(`Tezina: ${recept.tezina}`);
    console.log(`Sastojci: ${recept.sastojci}`);
}
ispisRecepta(recept1)

// primer:
{
    let str = '';
    recept1.sastojci.forEach(sastojak => {
        str += sastojak + ', '
    });
    console.log(str);
}
console.log('--------------------');
// jos jedan nacin: 
console.log(recept1.sastojci.join(', '));

// JOIN spaja elemente niza u string


// FORIN
for (const key in recept1) {
    console.log(key);  //  ovako dobijamo kljuceve (ime, tezina, sastojci)
}
for (const key in recept1) {
    console.log(recept1[key]);  // dobijamo propertije (spagete u belom sosu, srednji...)
}
for (const key in recept1) {
    console.log(key + ':' + ' ' + recept1[key]);
        
    }

