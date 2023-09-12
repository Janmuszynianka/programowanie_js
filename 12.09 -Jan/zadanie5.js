const prompt=require("prompt-sync")({sigint:true});

let a = parseInt(prompt('Podaj liczbe a: '))
let b = parseInt(prompt('Podaj liczbe b: 1'))

if (a > b) {
    console.log("Większa jest liczba a: " + a)
} else {
    console.log("Większa jest liczba b: " + b)
}