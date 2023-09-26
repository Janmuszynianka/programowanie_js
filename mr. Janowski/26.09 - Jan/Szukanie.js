// Zdefiniuj ciąg tekstowy, w którym będziemy szukać.
let tekst = "To jest przykładowy tekst zawierający kilka słów.";

// Określ szukany ciąg tekstowy.
let szukanyCiąg = "przykładowy";

// Inicjalizacja zmiennej, która będzie przechowywać pozycję znalezionego ciągu.
let pozycja = -1;

// Rozpocznij pętlę do przeszukiwania ciągu tekstowego.
for (let i = 0; i < tekst.length - szukanyCiąg.length + 1; i++) {
  // Sprawdź, czy ciąg tekstowy na danej pozycji zgadza się z szukanym ciągiem.
  let podciąg = tekst.slice(i, i + szukanyCiąg.length);
  
  if (podciąg === szukanyCiąg) {
    // Jeśli znaleziono szukany ciąg, zaktualizuj pozycję i przerwij pętlę.
    pozycja = i;
    break;
  }
}

// Sprawdź, czy znaleziono ciąg, i wyświetl odpowiedni komunikat.
if (pozycja !== -1) {
  console.log(`Znaleziono ciąg "${szukanyCiąg}" na pozycji ${pozycja}.`);
} else {
  console.log(`Ciąg "${szukanyCiąg}" nie został znaleziony.`);
}
