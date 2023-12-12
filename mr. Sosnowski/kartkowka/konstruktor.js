function Uczen(nazwisko,imie,wiek,klasa,sport){
    this.nazwisko = nazwisko
    this.imie = imie
    this.wiek = wiek
    this.klasa = klasa
    this.sport = sport
    this.wyswietldane = function (){
        console.log(`Nazwisko: ${this.nazwisko}, Imie: ${this.imie}, Wiek: ${this.wiek}, Klasa: ${this.klasa}, Sport: ${this.sport}`)
    }
}
let uczen1 = new Uczen('Kowalski','Jan',15,'1A','piłka nożna')
console.log(uczen1.wyswietldane())