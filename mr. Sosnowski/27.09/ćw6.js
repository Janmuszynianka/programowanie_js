// 1.	kolejne liczby, od 5 do 20
let s = ""
for( let i = 5; i <= 20; i++) {
    s += i + " "
} console.log(s)

// 2.	liczby parzyste do 20


let parzyste = '';

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        parzyste += i + ' ';
    }
}

console.log(parzyste);

// 2.	liczby parzyste do 20


let nieparzyste = '';

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 1) {
        nieparzyste += i + ' ';
    }
}

console.log(nieparzyste);


// 4.	liczby podzielne prez 3

let podzielne = '';
let licznik =0
for (let i = licznik; licznik < 20; i++) {
    if (i % 3 === 0) {
        podzielne += i + ' ';
        licznik++
    }
}
console.log(podzielne);

// 4.	potęgi liczby 2

let potega = '';
let licznik1 =0
for (let i = licznik1; licznik1 <= 10; i++) {
        potega += 2 ** i + ' ';
        licznik1++
}
console.log(potega);
