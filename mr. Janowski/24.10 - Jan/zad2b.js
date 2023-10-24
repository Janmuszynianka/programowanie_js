var teraz = new Date();

var godziny = teraz.getHours();
var minuty = teraz.getMinutes();

var amPm = godziny >= 12 ? "PM" : "AM";

if (godziny > 12) {
    godziny -= 12;
}

if (godziny < 10) {
    godziny = "0" + godziny;
}
if (minuty < 10) {
    minuty = "0" + minuty;
}

var czasWFormacie = godziny + ":" + minuty + " " + amPm;

console.log(czasWFormacie);
