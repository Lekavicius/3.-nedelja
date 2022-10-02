let acc1 = {
    username: 'Pera',
    email: 'pera.peric@gmail.com',
    password: 'pera123',
    age: 17,
    adresa: {
        ulica: 'Nemanjina',
        broj: 17
    },
    dodatneInformacije: {
        avatar: 'img.png'
    }
}

let acc2 = {
    username: 'Pera',
    email: 'pera.peric@gmail.com',
    password: 'pera123',
    age: 23,
    adresa: {
        ulica: 'Nemanjina',
        broj: 17
    }
}

console.log(acc1.username, acc1.age);  // ovako se dohvata neki element objekta
console.log(acc1.adresa.ulica + ' ' + acc1.adresa.broj);

console.log(acc1.dodatneInformacije.avatar);

let osoba1 = {
    ime: 'Ana',
    godine: 34
}

osoba1.prezime = 'Mihajlovic'
console.log(osoba1.prezime); // Ispisace Mihajlovic. Dakle, mozemo i na ovaj nacin da dodamo nesto u objekat.

// delete osoba1.ime
// console.log(osoba1);  // Ispisace objekat bez Ana. Znaci, ovako mozemo da brisemo neki properti.


console.log(Object.keys(osoba1));  // Izlistace niz propertija koji se nalaze u ovom objektu (ime, godine, prezime)

console.log(Object.values(osoba1)); // Izlistace niz elemenata (Ana, 34, Mihajlovic)

console.log(Object.entries(osoba1)); // Dobicemo kombinacije kljuc-vrednost, kljuc-vrednost. ['ime', 'Milica']


osoba1.ime = 'Milica';   // Na ovaj nacin mozemo da promenimo properti u objektu.
console.log(osoba1.ime);


let o1 = {
    x: 7
}
let o2 = o1;
o2.x = 9;

console.log(o1, o2); // {x:9} {x:9} Prakticno se radi o jednom istom objektu
// Sad kad bismo npr. stavili o1.y=5; Dobili bismo 2 objekta {x:9, y:5}
// Dakle, ovo nije kopija vec isti objekat sa dve reference koje pokazuju na njega.

console.log('--------------------');

let obj1 = {
    x: 6
}
let obj2 = { ...obj1 }  // Spread operator ne radi za ugnjezdene objekte.
console.log(obj1, obj2); // Dobicemo dva objekta x:6, ali sada su to dva RAZLICITA objekta.
// Kada bismo sada dodelili neko Y bilo kojem od ova dva objekta, ispisalo bi ga samo u tom objektu.

// NIZ OBJEKATA

let nizObjekata = [acc1,acc2, {username: 'Leka', password: 'leka123', age: 27}]
console.log(nizObjekata);
console.log(nizObjekata[0].adresa.ulica);

// Imamo 3 objekta: acc1, acc2 i treci objekat koji smo uneli direktno u niz i zelimo da izvucemo Age iz svakog objekta.

for (let i = 0; i < nizObjekata.length; i++) {
    if(nizObjekata[i].age>=18){
    console.log(nizObjekata[i].age);}   
}