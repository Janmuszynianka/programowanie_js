var i =0, k=5;
do {
    var j = k*i;
    console.log(j)
    if (j>90) break;
} while (i++<10);

for (var i = 0; i <= 30; i++) {
    if (i % 3 === 0) {
        continue;
    }
    console.log(i + "; ");
}

for (var i = 0; i <= 30; i++) {
    if (i % 2 !== 0) {
        continue;
    }
    console.log(i + "; ");
}

