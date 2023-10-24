let teraz = new Date();

let godzina = teraz.getHours();
let minuty = teraz.getMinutes();

let poraDnia;

if (godzina >= 0 && godzina < 12) {
    poraDnia = "poranna";
} else if (godzina >= 12 && godzina < 18) {
    poraDnia = "południowa";
} else {
    poraDnia = "popołudniowa";
}

if (godzina < 10) {
    godzina = "0" + godzina;
}
if (minuty < 10) {
    minuty = "0" + minuty;
}

let czasWFormacie = godzina + ":" + minuty + " " + poraDnia;

console.log(czasWFormacie);
