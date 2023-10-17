// Definicje dostępnych nominałów monet i ich wartości
const nominaly = [
    { nazwa: '1zł', wartosc: 1 },
    { nazwa: '2zł', wartosc: 2 },
    { nazwa: '5zł', wartosc: 5 },
    { nazwa: '10zł', wartosc: 10 },
];

// Funkcja do wydawania reszty
function wydajReszte(cena, platnosc) {
    let reszta = platnosc - cena;
    const iloscMonet = {}; // Obiekt do przechowywania ilości monet

    for (let i = nominaly.length - 1; i >= 0; i--) {
        const moneta = nominaly[i];
        const ilosc = Math.floor(reszta / moneta.wartosc);

        if (ilosc > 0) {
            iloscMonet[moneta.nazwa] = ilosc;
            reszta -= ilosc * moneta.wartosc;
        }
    }

    if (reszta === 0) {
        return iloscMonet;
    } else {
        return "Nie można dokładnie wydać reszty.";
    }
}

// Przykład użycia
const cenaProduktu = 7.5;
const platnoscKlienta = 20;

const reszta = wydajReszte(cenaProduktu, platnoscKlienta);

if (typeof reszta === 'string') {
    console.log(reszta);
} else {
    console.log("Wydano resztę:");
    for (const nazwaMonety in reszta) {
        const ilosc = reszta[nazwaMonety];
        console.log(`${nazwaMonety}: ${ilosc} szt.`);
    }
}
