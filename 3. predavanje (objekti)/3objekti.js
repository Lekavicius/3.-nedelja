let osobe = [{ ime: 'Pera', prezime: 'Peric' },
{ ime: 'Ana', prezime: 'Peric' },
{ ime: 'Ivan', prezime: 'Peric' }]

// Treba da nadjemo properti koju cuva vrednost Ana.

let keys = Object.keys(osobe[1])  // Ovde dobijam niz kljuceva kao stringovi ['ime', 'prezime']
// console.log(keys);

let findKey = 'Ana';

for (let i = 0; i < keys.length; i++) {
    if (findKey === osobe[1][keys[i]]) {
        console.log(keys[i]);
    }
}

// const findAna = osobe.find(osoba=>osoba.ime===findKey)
console.log('-------------------');
{
    let osobe = [{ ime: 'Pera', prezime: 'Peric' },
    { ime: 'Ana', prezime: 'Peric', godine: 34 },
    { ime: 'Ivan', prezime: 'Peric', godine: 23 }]

    for (let i = 0; i < osobe.length; i++) {
        let keys = Object.keys(osobe[i]);
        for (let j = 0; j < keys.length; j++) {
            if ('Ana'===osobe[i][keys[j]]) {
               console.log(keys[j]);
            }
            
        }
    }
}
