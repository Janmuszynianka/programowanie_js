// Metoda prostokątów
function rectangleMethod(func, a, b, n) {
     const h = (b - a) / n;
     let sum = 0;
 
     for (let i = 0; i < n; i++) {
         const x = a + i * h;
         sum += func(x);
     }
 
     return h * sum;
 }
 
 // Metoda trapezów
 function trapezoidMethod(func, a, b, n) {
     const h = (b - a) / n;
     let sum = 0;
 
     for (let i = 0; i < n; i++) {
         const x0 = a + i * h;
         const x1 = a + (i + 1) * h;
         sum += (func(x0) + func(x1)) / 2;
     }
 
     return h * sum;
 }
 
 // Przykład użycia
 const f = x => x * x; // Przykładowa funkcja, którą chcemy całkować
 const a = 0; // Dolna granica całkowania
 const b = 2; // Górna granica całkowania
 const n = 1000; // Liczba podziałów przedziału
 
 const resultRectangle = rectangleMethod(f, a, b, n);
 const resultTrapezoid = trapezoidMethod(f, a, b, n);
 
 console.log(`Metoda prostokątów: ${resultRectangle}`);
 console.log(`Metoda trapezów: ${resultTrapezoid}`);
 