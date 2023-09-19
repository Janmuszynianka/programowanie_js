function informujTypDanych(zmienna) {
    if (typeof zmienna === 'number') {
        alert('Wprowadzona zmienna to liczba.');
    } else if (typeof zmienna === 'string') {
        alert('Wprowadzona zmienna to ciąg znaków (string).');
    } else if (typeof zmienna === 'boolean') {
        alert('Wprowadzona zmienna to wartość logiczna (boolean).');
    } else {
        alert('Wprowadzona zmienna to inny typ danych.');
    }
}

const wprowadzonaZmienna = prompt('Wprowadź zmienną:');

informujTypDanych(wprowadzonaZmienna);