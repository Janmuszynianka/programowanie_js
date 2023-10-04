function suma_dow(){
    let i;
    wynik = 0;
    var l_parm=arguments.length;
    for (i=0; i< l_parm; i++){
        wynik += arguments[i];
    }
    return wynik;
}
suma_dow(3,5,7)
console.log(wynik)