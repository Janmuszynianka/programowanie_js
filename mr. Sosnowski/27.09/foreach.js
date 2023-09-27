let liczby = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let litery = ["a", "b", "c", "d", "e", "f", "g", "h", "i"];

liczby.forEach((element) => console.log(element));

litery.forEach((value, index) => {
    console.log(index + "-" + value);
});