function swap(tab, index) {
    if (index < 0 || index >= tab.length - 1) {
        console.error("Indeks jest poza zakresem tablicy.");
        return tab;
    }

    const temp = tab[index];
    tab[index] = tab[index + 1];
    tab[index + 1] = temp;

    return tab;
}

const mojaTablica = [1, 2, 3, 4, 5];
console.log("Przed zamianą:", mojaTablica);

swap(mojaTablica, 2);
console.log("Po zamianie:", mojaTablica);
