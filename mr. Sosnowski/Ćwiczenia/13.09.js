const prompt=require("prompt-sync")({sigint:true});

let a = parseInt(prompt("Podaj 1 cyfre: "))
let b = parseInt(prompt("Podaj 2 cyfre: "))
let c = parseInt(prompt("Podaj 3 cyfre: "))

if (a > 0 && b>0 && c>0) {
    console.log("Wszystkie są dodatnie")
} else if (a < 0 && b<0 && c<0) {
    console.log("Wszystkie są ujemne")
} else {
    console.log("Mają różne znaki")
}