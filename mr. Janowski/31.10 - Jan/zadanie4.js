let haslo = "niewiem1!"

function sprawdzanie(haslo){
    haslo = haslo.toLowerCase();
    const znaki = "!@#$%^&*()_+{}|:<>?~`-=[]";
    let wynik = "";
    for (let i = 0; i < haslo.length; i++) {
        const litera = haslo[i];
        if(znaki.indexOf(litera) && typeof litera === "number"){
            return "True"
        } else {
            return "False"
        }
    }
    return wynik;
}
console.log(sprawdzanie(haslo));