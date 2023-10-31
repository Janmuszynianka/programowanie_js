const funA = {
    A: 0,
    funA: function (x) {
        this.A = Math.floor(Math.random() * x + 1)
        console.log(this.A)
        if (this.A === x) {
            console.log("True");
        } else {
            console.log("False");
        }
    }
}
const funB = {
    B: 0,
    funB: function (x) {
        this.B = Math.random() * x + 1;
        console.log(this.B);
        if (this.B === x) {
            console.log("True");
        } else {
            console.log("False");
        }
    }
};

funA.funA(5)
funB.funB(5)
