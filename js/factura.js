
const costo = document.getElementById("cost");

// Se calcula sobre el arreglo compartido para evitar duplicar precios y cantidades.
function calcularTotal() {
    const total = productos.reduce(function (acumulado, producto) {
        return acumulado + producto.precio * producto.cantidad;
    }, 0);

    const unidades = productos.reduce(function (acumulado, producto) {
        return acumulado + producto.cantidad;
    }, 0);

    costo.textContent = `${unidades} producto(s) · Total: ${total.toFixed(2)} $`;
}

window.addEventListener("productosActualizados", calcularTotal);
calcularTotal();
