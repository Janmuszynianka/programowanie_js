function funC(tekst) {
    tekst = tekst.toLowerCase();

    const spolgloski = "bcdfghjklmnpqrstvwxyz";

    let wynik = "";

    for (let i = 0; i < tekst.length; i++) {
        const litera = tekst[i];

        if (spolgloski.indexOf(litera) === -1) {
            wynik += litera;
        }
    }

    return wynik;
}

const tekst = "To jest przykład tekstu z spółgłoskami.";
const bezspolglosek = funC(tekst);
console.log(bezspolglosek);
