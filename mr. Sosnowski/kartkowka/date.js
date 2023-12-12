var data = new Date();
var rok = data.getFullYear(); // Rok
var miesiac = data.getMonth(); // Miesiąc (0-11)
var dzien = data.getDate(); // Dzień miesiąca (1-31)
var godzina = data.getHours(); // Godziny (0-23)
var minuta = data.getMinutes(); // Minuty (0-59)
var sekunda = data.getSeconds(); // Sekundy (0-59)
var milisekunda = data.getMilliseconds(); // Milisekundy (0-999)
var dzienTygodnia = data.getDay(); // Dzień tygodnia (0-6, gdzie 0 to niedziela)
console.log(data.getDate())
