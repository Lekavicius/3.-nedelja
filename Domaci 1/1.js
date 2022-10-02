// 1. Napisati funkciju koja vrsi sumiranje i mnozenje jednog niza i vratiti te vrednosti u niz.
// niz1 = [1,21,5,2,6,3]
// niz2 = [suma,proizvod]
{
    let array1 = [1, 2, 4, 5, 6];
    let array2 = [];
    function sumAndCount(array) {
        let sum = 0;
        let count = 1;
        for (let i = 0; i < array.length; i++) {
            sum += array[i];
            count *= array[i];
        }
        array2.push(sum, count);
        return array2;
    }
    console.log(sumAndCount(array1));
}
console.log('------------------');
// 2. Napisati funkciju koja iz datog niza izbacuje null, undefined, NaN, 0, "" itd...
{
    let array1 = [1, 2, null, 3, undefined, 4, NaN, 5, 0, 6,];
    let array2 = [];
    function deleteArrayMembers(array) {
        for (let i = 0; i < array.length; i++) {
            if (!array[i] == 0) {
                array2.push(array[i])
            }
        }
        return array2;
    }
    console.log(deleteArrayMembers(array1));

// KAKO DA VRATIM ISTI NIZ (ARRAY1), BEZ NULTI VREDNOSTI??

// 2. nacin:
{
    let array1 = [1, 2, null, 3, undefined, 4, NaN, 5, 0, 6,];
    let array2 = [];
    for (let i = 0; i < array1.length; i++) {
        if (array1[i]) {
            array2.push(array1[i])
        }
    }
    console.log(array2);
}



}


// 3. Za prvih 100 brojeva ispisati:
// Ako je deljiv sa 3 - Fizz, sa 5 - Buzz, i sa oba FizzBuzz
// Ako je deljiv sa 3,5,7 - FizzBuzzZazz

// 3,5 - FizzBuzz
// 3,7 - FizzZazz
// 5,7 - BuzzZazz

for (let i = 1; i < 101; i++) {
    if (i%3===0) console.log('Fizz');
    if (i%5===0)  console.log('Buzz');
    if(i%3===0 && i%5==0) console.log('FizzBuzz');
    if(i%3===0 && i%5===0 & i%7===0) console.log('FizzBuzzZazz');
}

// 4. Izvrsiti inverziju brojeva bez pomocne promenljive
// Primer: x = 5; y = 9;
// Resenje: x = 9; y = 5;


