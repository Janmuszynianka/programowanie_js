document.addEventListener("mousedown", function () {
    alert("Kliknięto myszką!");
});

document.addEventListener("keydown", function (event) {
    alert("Wciśnięto klawisz: " + event.key);
});
