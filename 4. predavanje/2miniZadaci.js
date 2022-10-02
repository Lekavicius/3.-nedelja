/* let studenti  =[
     {ime:'Ana', prezime:'Petrovic',indeks:123},
     {ime:'Mika', prezime:'Petrovic',indeks:123},
     {ime:'Marko', prezime:'Petrovic',indeks:123},
     {ime:'Jelena', prezime:'Jova',indeks:123},
 ]
// Promeniti Marku prezime u Jovic
 studenti[2].prezime = "Jovic"
console.log(studenti[2].prezime); 

studenti.forEach(student=>{
    if (student.ime==='Marko') {
        student.prezime = "Jovic"
    }
})
*/

// Za svakog studenta koji je na osnovnim studijama izracunati prosek i dodati ga kao novi properti objekta.

let studenti = [
    {
        ocene: [4, 6, 4],
        indeks: 34435,
        osnovneStudije: true,
    },
    {
        ocene: [4, 1, 4],
        indeks: 343,
        osnovneStudije: false
    },
    {
        ocene: [1, 2, 4],
        indeks: 7446,
        osnovneStudije: true,

    }
]

const prosek = (nizOcena) => {
    let sum = 0;
    nizOcena.forEach(el => {
        sum += el;
    })
    return sum / nizOcena.length;
}

for (let i = 0; i < studenti.length; i++) {
    if (studenti[i].osnovneStudije) {
        studenti[i].prosek = prosek(studenti[i].ocene)
    }
    
}
console.log(studenti);