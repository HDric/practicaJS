
const existencias = true;
const enviado = false;

const elStock = document.getElementById("stock");
elStock.className = `status-icon ${existencias}`;
elStock.textContent = existencias ? "Sí" : "No";
elStock.setAttribute("aria-label", existencias ? "Sí hay existencias" : "No hay existencias");

const elEnvio = document.getElementById("envio");
elEnvio.className = `status-icon ${enviado}`;
elEnvio.textContent = enviado ? "Sí" : "No";
elEnvio.setAttribute("aria-label", enviado ? "El pedido fue enviado" : "El pedido no ha sido enviado");
