const prompt=require("prompt-sync")({sigint:true});


const monety = [1, 2, 5];
const transakcje = [];
let resztaDoWydania = parseInt(prompt("Podaj resztę (liczba całkowita) do wydania:"));

while (resztaDoWydania > 0) {
    let nominal = 0;
    for (let i = 0; i < monety.length; i++) {
        if (monety[i] <= resztaDoWydania && monety[i] > nominal) {
            nominal = monety[i];
        }
    }
    resztaDoWydania -= nominal;
    transakcje.push(nominal);
}
console.log(`Resztę można wydać ${transakcje.length} monetami.`);
console.log(`Użyte monety do wydania reszty to: ${transakcje.join(", ")}.`);

console.log(transakcje)