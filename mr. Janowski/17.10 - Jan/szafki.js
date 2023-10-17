const prompt = require('prompt-sync')();

function kolorSzafki(liczba) {
    let lista = [];
    let kolor1 = 'red';
    let kolor2 = 'white';
    let kolor3 = 'yellow';
    let kolor4 = 'blue';
    let m = Math.floor(2400 / 4);

    for (let i = 0; i < m; i++) {
        lista.push(kolor1);
        lista.push(kolor2);
        lista.push(kolor3);
        lista.push(kolor4);
    }

    return lista[liczba - 1];
}

let liczba = parseInt(prompt("Podaj numer elementu listy: "));
console.log(kolorSzafki(liczba));
