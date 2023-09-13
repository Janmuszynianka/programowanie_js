const prompt=require("prompt-sync")({sigint:true});

let day = prompt("Podaj dzień: ")

switch (day){
    case "poniedzialek":
        console.log("Dzisiaj poniedziałek")
        break
    case "wtorek":
        console.log("Dzisaj wtorek")
        break
    case "środa":
        console.log("Dzisiaj środa")
        break
    case "czwartek":
        console.log("Dzisiaj czwartek")
        break
    case "piątek":
        console.log("Dzisiaj piątek")
        break
    case "sobota":
        console.log("Dzisiaj sobota")
        break
    case "niedziela":
        console.log("Dzisiaj niedziela")
        break
    default:
        console.log("Wprowadzono złą wartość (bez polskich znaków)")
}