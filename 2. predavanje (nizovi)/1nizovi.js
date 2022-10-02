let imena = ['Nevena', 'Aleksandra', 'Kristina', 'Bojana'];   // Niz imena
let brojevi = [1, 4, 3, 5, -7, 0];   // Niz brojeva
let x = [2, 4, 7, 'ime', [1, 2, 3], {}]  // Mesoviti niz. Ovo ne moze u drugim programskim jezicima

console.log(imena[1]); // Ovako izvlacimo jedan element niza koji nam treba. Elementi idu od nule.
console.log(imena.length);  // Duzina niza.

brojevi[2] = 'dva';  // ispisace 1,4,dva,3....

console.log(typeof (brojevi));  // objekat. JS prepoznaje nizove kao da su objekti.
console.log(x[4][1]);  // dobija se dvojka iz podniza.

let str = 'abcdfg'
console.log(str[2]);  // dobicemo c, posto JS gleda ovaj string kao niz elemenata.


// PROLAZENJE KROZ NIZ:
{
    let niz = [2, 3, 6, 4, 8, 5, 1, 3]   // length=7
    for (let i = 0; i < niz.length; i++) {
        console.log(niz[i]);
    }
console.log('-----NEPARNI--------');
    function isOdd(x) {
        return x % 2 !== 0
    }
    
    for (let i = 0; i < niz.length; i++) {
        if (isOdd(niz[i])) 
        console.log(niz[i]);
        
    }

}
console.log('------------------');
// 2. NACIN ZA PROLAZAK KROZ ELEMENTE NIZA:  (FOROF)
{
    let niz = [2, 3, 6, 4, 8, 5, 1, 3]
    for (const el of niz) {
        console.log(el);
    }
}

// FOROF se obicno koristi kada treba da prodjemo kroz sve elemente niza, a FOR kada nam treba za odredjeni broj elemenata niza, kada nam je bitan index itd.
// Mada moze sve da se odradi sa obe funkcije.

