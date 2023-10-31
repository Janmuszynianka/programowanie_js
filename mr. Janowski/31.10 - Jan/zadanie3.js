function funD(tekst) {
    tekst = tekst.toLowerCase();

    const samogloski = "aeiouy";

    let wynik = "";

    for (let i = 0; i < tekst.length; i++) {
        const litera = tekst[i];

        if (samogloski.indexOf(litera) === -1) {
            wynik += litera;
        }
    }

    return wynik;
}

const tekst = "To jest przykład tekstu z spółgłoskami.";
const bezsamoglosek = funD(tekst);
console.log(bezsamoglosek);
