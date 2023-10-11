let n = 4
function silnia2(n){
    let sil = 1;
    for (let i =1; i <= n; i++){
        sil *= i
    }
    return sil;
}


console.log(n + "! iteracyjnie= " + silnia2(n))
