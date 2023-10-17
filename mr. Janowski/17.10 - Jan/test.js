function sortujTablice(tablica) {
    let uporzadkowanaTablica = tablica.slice();
    uporzadkowanaTablica.sort(function(a, b) {
        return a - b;
    });
    return uporzadkowanaTablica;
}

alert("Uporządkowana tablica: " + uporzadkowanaTablica.join(", "));
