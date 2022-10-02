// 1. Naci poziciju elementa Y u nizu.
{
    let a = [1, 9, 4, 5, 4, 2, 1, 9];
    let y = 9;

    for (let i = 0; i < a.length; i++) {
        if (a[i] === y) console.log(i);
    }
}
console.log('-------------');
// Ako hocemo da sacuvamo u promenljivoj ove pozicije na kojima se nalazi broj 9, sacuvacemo ih u nizu:
{
    let indeksi = [];
    let a = [1, 9, 4, 5, 4, 2, 1, 9];
    let y = 9;

    for (let i = 0; i < a.length; i++) {
        if (a[i] === y){
           indeksi.push(i) 
        }
    }
    console.log(indeksi);
}
console.log('--------');
// FUNKCIJA PUSH stavlja elemente na kraj niza.

// Isti zadatak, ali preko FOROF petlje
{
    let a = [1, 9, 4, 5, 4, 2, 1, 9];
    let y = 9;
    let indeksi = [];
    let count=0;
    for (const el of a) {
        if(el===y){
            indeksi.push(count)
        }
        count++
    }
    console.log(indeksi);
}

