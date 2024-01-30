function main() {
    const button = document.querySelector("button");
    function myFunction() {
        console.log(this);
    }
    button.onclick = myFunction;
}
main();
