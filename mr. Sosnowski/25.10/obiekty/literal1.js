let pojazd = {
    marka: "Porsche",
    model: "911",
    rok_produkcji: 2022,
    przebieg: 15,

    wyswietldane: function() {
        console.log("Marka: "+this.marka)
        console.log("Model: "+this.model)
        console.log("Rok produkcji: "+this.rok_produkcji)
        console.log("Przebieg: "+this.przebieg)
    }
}

pojazd.numerRejestracyjny = "ABC 12345";

pojazd.wyswietlDetal = function() {
    console.log("Marka: " + this.marka);
    console.log("Numer rejestracyjny: " + this.numerRejestracyjny);
};

pojazd.wyswietldane()
console.log("-----------")
pojazd.wyswietlDetal();
console.log("-----------")
console.log(pojazd.marka);
