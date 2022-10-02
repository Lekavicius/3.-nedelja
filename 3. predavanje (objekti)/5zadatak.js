let recept2 = {
    ime: 'Spagete u belom sosu',
    tezina: 'Laki',
    sastojci: ['Spagete', 'Pavlaka za kuvanje', 'Beli luk', 'Curece meso', 'Maslac', 'Jaja', 'Biber', 'So']
}
let recept3 = {
    ime: 'Spagete u belom sosu',
    tezina: 'Teski',
    sastojci: ['Spagete', 'Pavlaka za kuvanje', 'Beli luk', 'Curece meso', 'Maslac', 'Jaja', 'Biber', 'So']
}
let recept4 = {
    ime: 'Spagete u belom sosu',
    tezina: 'Pocetni',
    sastojci: ['Spagete', 'Pavlaka za kuvanje', 'Beli luk', 'Curece meso', 'Maslac', 'Jaja', 'Biber', 'So']
}

let recepti = [recept2, recept3, recept4]

// Treba da ispisemo samo one recepte koji su laki ili pocetni

function ispisLakihRecepata(recepti) {
    recepti.forEach(recept => {
        if (recept.tezina === 'Laki' || recept.tezina === 'Pocetni') {
            console.log(recept);
        }
    });

}
ispisLakihRecepata(recepti);

{
    let nizDuplikata = [1, 2, 3, 2, 1, 2, 3, 4, 5, 2]
    function obrisiDuplikate(niz) {
        let tmp = [];
        for (let i = 0; i < niz.length; i++) {
            if (!tmp.includes(niz[i])) {
                tmp.push(niz[i])
            }
            
        }
        return tmp;
    }
    console.log(obrisiDuplikate(nizDuplikata));
}

{
    let nizDuplikata = [1, 2, 3, 2, 1, 2, 3, 4, 5, 2, 6]
    function obrisiDuplikate(niz) {
        let tmp = [];
        niz.forEach(el => {
            if (!tmp.includes(el)) {
                tmp.push(el)
            }
        });
        return tmp
    }
    console.log(obrisiDuplikate(nizDuplikata));
}

