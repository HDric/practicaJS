
const today = new Date();
const hourNow = today.getHours();
let mensajeSaludo;
const fechaHora = document.getElementById("fecha-hora");

console.log(today);
console.log(hourNow);

if (hourNow >= 18) {
    mensajeSaludo = "Buenas noches";
} else if (hourNow >= 12) {
    mensajeSaludo = "Buenas tardes";
} else {
    mensajeSaludo = "Buenos días";
}

document.getElementById("saludo-hora").textContent = mensajeSaludo;
fechaHora.textContent = today.toLocaleString("es-EC", {
    dateStyle: "long",
    timeStyle: "short"
});
