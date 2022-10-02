// Napraviti funkciju koja vraca novi niz u koji je ubacen element na zadatoj poziciji
// x = addElement(array,el,index)
{
    function dodajElement(niz, element, indeks) {
        let tmp = []
        for (let i = 0; i < niz.length; i++) {
            if (i === indeks) {
                tmp.push(element)
            }
            tmp.push(niz[i])
        }
        return tmp
    }

    let niz = [1, 2, 3, 4];
    let el = 34;
    let indeks = 1;
    niz = dodajElement(niz, el, indeks)

    console.log(niz);
}

// Funkcija koja ovo radi vec postoji i zove se Splice. Radi slicno. Ona brise elemente, ali moze po potrebi da ubacuje elemente.
// SPLICE - brise element/e i ako je potrebno dodaje novi element/e.

{
    let x = [1, 2, 3, 4];
    x.splice(1, 2, '*', '*');
    console.log(x); // [1,*,*,4]
    /*
    Kod Splice u zagradi. Prvi broj predstavlja od kog indeksa krece da se brise, drugi broj pokazuje koliko elemenata od tog indeksa se brise.
    Splice moze da se pise samo sa ta dva broja, znaci samo da se obrisu elementi.
    Sve sto se upise nakon prva dva broja unosi se u niz od unesenog indeksa.   */

    // console.log(x.splice(1,2))  -- vraca niz elemenata koje je obrisao
}

