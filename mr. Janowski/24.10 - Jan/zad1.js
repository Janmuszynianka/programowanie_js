var dzisiaj = new Date();

var dzien = dzisiaj.getDate();
var miesiac = dzisiaj.getMonth() + 1;
var rok = dzisiaj.getFullYear();


if (dzien < 10) {
    dzien = "0" + dzien;
}
if (miesiac < 10) {
    miesiac = "0" + miesiac;
}

var dataWFormacie = dzien + "-" + miesiac + "-" + rok;

console.log(dataWFormacie);
