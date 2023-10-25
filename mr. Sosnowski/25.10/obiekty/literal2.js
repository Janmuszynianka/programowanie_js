function uczen(nazwisko, imie, wiek,klasa,sport){
    this.nazwisko = nazwisko;
    this.imie = imie;
    this.wiek = wiek;
    this.klasa = klasa;
    this.sport = sport;
    this.wypisz = function(){
        return this.nazwisko + " " + this.imie + " " + this.wiek + " " + this.klasa + " " + this.sport;
    }
    uczen.prototype.wypisz_Klasa = function () {
        return this.nazwisko + " " + this.imie + " " + this.klasa;
    }
}
let a1 = new uczen("Kowalski", "Jan", 29, "150B", "tenis");
let a2 = new uczen("Serafin", "Jacek", 30, "150B", "koszykówka");
let a3 = new uczen("Kowalski", "Jan", 29, "150B", "tenis");
let a4 = new uczen("Kowalski", "Jan", 29, "150B", "tenis");


console.log(a1.wypisz())
console.log(a1.wypisz_Klasa());
console.log("-----------")
console.log(a2.wypisz())
console.log(a2.wypisz_Klasa());