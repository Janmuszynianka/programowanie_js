let auto={
    marka: 'Audi',
    model: 'RS7 Competition Plus',
    rok: 2023,
    wyswietldane: function(){
        console.log(`Marka: ${this.marka}, Model: ${this.model}, Rok: ${this.rok}`)
    }
}
auto.rejestracja = 'DOL 123456'
console.log(auto)
auto.wyswietldane()
