const prompt=require("prompt-sync")({sigint:true});

// Funkcja do generowania losowej liczby od 1 do n
function losowaLiczba(n) {
    return Math.floor(Math.random() * n) + 1;
}

const liczbaKostek = parseInt(prompt("Podaj liczbę kostek do rzutu: "));
const liczbaOczek = parseInt(prompt("Podaj liczbę oczek na każdej kostce: "));
let wynikSumaryczny = 0;

for (let i = 0; i < liczbaKostek; i++) {
    const wynikLosowania = losowaLiczba(liczbaOczek);
    wynikSumaryczny += wynikLosowania;
}

console.log("Wynik sumaryczny rzutu to: " + wynikSumaryczny);
