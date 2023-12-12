let tablica = []
tablica.push('Jan')
tablica.push('Kowalski')
for (let i = 0; i < tablica.length; i++) {
    console.log(tablica[i])
}
//tablica wielowymiarowa
let tablicawielowymiarowa = [[1,2,3],[4,5,6],[7,8,9]]
console.log(tablicawielowymiarowa[1][1]) // 5
// łączenie elementów tablicy
let tablica2 = ['Jan','Kowalski']
console.log(tablica2.join(' ')) // Jan Kowalski
//odwracanie tablicy
let tablica3 = [1,2,3]
console.log(tablica3.reverse()) // [3,2,1]
//sortowanie tablicy
let tablica4 = [7,8,9,6,5,3,2,1]
console.log(tablica4.sort()) // [1,2,3,5,6,7,8,9]
//sprawdzanie czy element znajduje się w tablicy
let tablica5 = [1,2,3,4,5]
console.log(tablica5.includes(3)) // true