function rekurencyjnaSilnia(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * rekurencyjnaSilnia(n - 1); // rekurencja mnoży przez liczbę n-1
    }
}

console.log(rekurencyjnaSilnia(5)); // 120


