let a = window.prompt("Podaj pierwszą liczbę: ");
switch (a) {
    case "1":
        alert("Pełne słońce, bez chmurno = słonecznie");
        break;
    case "2":
        alert("zachmurzenie i ciemne chmury = pochmurno");
        break;
    case "3":
        alert("deszcz i/lub monsun = deszczowo z ulewnym deszczem");
        break;
    case "4":
        alert("śnieg i/lub zamieć = śnieżnie");
        break;
    default:
        alert("Błąd!");
}