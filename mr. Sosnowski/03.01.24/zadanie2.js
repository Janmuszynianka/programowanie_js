utwórz listę nieuporządkowaną z trzema elementami element1, element2, element3.
    Wyświetl elementy listy  z wykorzystaniem document.querySelectorAll, spread, map, innerText

const numbers = [1, 2, 3, 4, 5];

const abc = ['a', 'b', 'c'];

const drinks = ['pepsi', 'kawa', 'sok'];

const meals = ['schabowy', 'spaghetti', 'zupa'];

function razyDwa(tablica){
    return tablica.map(function(element){
        return element * 2;
    });
}

const podwojoneNumbers = razyDwa(numbers);
console.log(podwojoneNumbers);

concatenated = numbers.concat(drinks);
console.log(concatenated);

const menu = [...drinks, ...meals];
console.log(menu);


