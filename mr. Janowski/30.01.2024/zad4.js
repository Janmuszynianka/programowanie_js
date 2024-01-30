function myFunction() {
    alert("Kliknięto myszką!");
}

document.addEventListener("mousedown", myFunction);

function keyFunction(event) {
    alert("Wciśnięto klawisz: " + event.key);
}

document.addEventListener("keydown", keyFunction);
