function sumaElementow(tablica) {
    let suma = 0;
    for (let i = 0; i < tablica.length; i++) {
        suma += tablica[i];
    }

    return suma;
}

const mojaTablica = [1, 2, 3, 4, 5];
const wynik = sumaElementow(mojaTablica);

console.log(wynik);
