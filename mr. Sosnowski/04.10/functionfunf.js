function potega(x,n){
    if (n === 0){
        return 1;
    } else {
        return x*potega(x, n-1);
    }
}
