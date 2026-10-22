
const producto = "tomate";
const precio = 0.75;
const cantidad = 14;
const total = precio * cantidad;
const costo = document.getElementById("cost");

costo.textContent = `${cantidad} ${producto}(s) × ${precio.toFixed(2)} $ = ${total.toFixed(2)} $`;
