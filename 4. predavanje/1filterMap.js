let niz = [1,4,-3,-2,5,-7] // 1 4 5

// Izbaci negativne brojeve iz niza

// FOREACH
{
let nizPozitivnih = [];
niz.forEach(el=>{
    if (el>0) {
        nizPozitivnih.push(el)
    }
})
console.log(nizPozitivnih);
}

// FILTER
{
    let filtriraniNiz = niz.filter((el)=>{
        return el>0
    })
    console.log(filtriraniNiz);
}

// MAP

let x = [2,4,2,6,-7,3,1,-1,-14]

let y = x.map((el)=>{
    return el ** 2;
})
console.log(y);
console.log('----------------');

console.log(x.filter(el=>el>0).map(el=>el**2));
