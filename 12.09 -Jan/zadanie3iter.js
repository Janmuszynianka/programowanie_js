function Silnia(n) { //deklaracja funkcji iteracyjna
    let wynik = 1; // zmienna wynik będzie przechowywać wynik silnii
    for (let i = 1; i <= n; i++) { //  Rozpoczynamy pętlę for, która będzie iterować od i = 1 do n, gdzie n to argument przekazany do funkcji.
        wynik *= i; // W każdym przebiegu pętli mnożymy aktualną wartość wynik przez wartość i główna operacja obliczenia silni.
    }
    return wynik; // zwracamy wynik
}

console.log(Silnia(3));