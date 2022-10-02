// PUSH - dodaje element na kraj niza
{
    let niz = [1, 2, 3];
    niz.push(4) // Dodaje na kraj niza element i vraca novu duzinu niza.
    console.log(niz);
}

// UNSHIFT - dodaje element na pocetak niza
{
    let niz = [1, 2, 3];
    niz.unshift(0)
    console.log(niz);
}
console.log('----------------');

// KOPIRANJE NIZOVA
{
    let x = [1, 2, 3];
    let y = [4, 5, 6, 7];
    x = y  // x postaje jednako y

    y.push(10)
    console.log(x, y);
}

// KOPIRANJE NIZOVA ISPRAVNO
{
    let x = [1, 2, 3];
    let y = [4, 5, 6, 7];
    let kopijaY = [];
    for (let i = 0; i < y.length; i++) {
        kopijaY.push(y[i])
    }
    y.push(10);
    console.log(y, kopijaY);   // U y ce biti dodato 10 na kraju, a u kopijaY nece, jer je to potpuno drugi niz.
}

{
    // LAKSI NACIN ZA KOPIRANJE NIZOVA
    // SPREAD OPERATOR   ....

    let niz = [1, 2, 3, 4];
    let kopija = [...niz]

    console.log(kopija);
}

{
    let niz1 = [1, 2, 3];
    let niz2 = [4, 5, 6];
    niz1.push(...niz2)
    console.log(niz1); // [1,2,3,4,5,6]
}
console.log('----------------');
{
    // DODAVANJE ELEMENTA NA ODREDJENU POZICIJU U NIZU

    let x = [1, 2, 3, 5, 6];
    let indeks = 3;
    let el = 4;
    let tmp = [];

    for (let i = 0; i < x.length; i++) {
        if (i === indeks) {
            tmp.push(el)
        }
        tmp.push(x[i])  // [1,2,3,4,5,6]
    }
    x = [...tmp];
    console.log(x);
}
