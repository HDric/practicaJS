// El catálogo concentra los datos para que la vista y la factura reutilicen la misma fuente.
const productos = [
    { nombre: "Tomate", precio: 0.75, unidad: "unidad", cantidad: 14 },
    { nombre: "Manzana", precio: 0.60, unidad: "unidad", cantidad: 0 },
    { nombre: "Zanahoria", precio: 0.45, unidad: "unidad", cantidad: 0 }
];

const cantidadesIniciales = productos.map(function (producto) {
    return producto.cantidad;
});
const listaProductos = document.getElementById("product-list");

for (let i = 0; i < productos.length; i++) {
    const productoActual = productos[i];
    console.log(productoActual);

    const elemento = document.createElement("li");
    elemento.className = "product-card";

    const nombre = document.createElement("h3");
    nombre.textContent = productoActual.nombre;

    const detalle = document.createElement("p");
    detalle.textContent = `${productoActual.precio.toFixed(2)} $ / ${productoActual.unidad}`;

    const controles = document.createElement("div");
    controles.className = "product-card-controls";

    const etiquetaCantidad = document.createElement("label");
    etiquetaCantidad.className = "quantity-label";
    etiquetaCantidad.textContent = "Cantidad";

    const cantidad = document.createElement("input");
    cantidad.className = "quantity-input";
    cantidad.type = "number";
    cantidad.min = "0";
    cantidad.step = "1";
    cantidad.value = String(productoActual.cantidad);
    cantidad.setAttribute("aria-label", `Cantidad de ${productoActual.nombre}`);
    cantidad.dataset.productIndex = String(i);
    etiquetaCantidad.appendChild(cantidad);

    const eliminar = document.createElement("button");
    eliminar.className = "remove-product";
    eliminar.type = "button";
    eliminar.textContent = "Eliminar de la compra";
    eliminar.dataset.productIndex = String(i);

    controles.appendChild(etiquetaCantidad);
    controles.appendChild(eliminar);
    elemento.appendChild(nombre);
    elemento.appendChild(detalle);
    elemento.appendChild(controles);
    listaProductos.appendChild(elemento);
}

function actualizarCatalogo(event) {
    const indice = Number(event.target.dataset.productIndex);
    if (event.target.classList.contains("quantity-input")) {
        productos[indice].cantidad = Math.max(0, Number(event.target.value) || 0);
        event.target.value = String(productos[indice].cantidad);
        window.dispatchEvent(new CustomEvent("productosActualizados"));
    }

    if (event.target.classList.contains("remove-product")) {
        productos[indice].cantidad = 0;
        event.target.closest(".product-card").querySelector(".quantity-input").value = "0";
        window.dispatchEvent(new CustomEvent("productosActualizados"));
    }
}

function actualizarCantidades(cantidadPorDefecto) {
    productos.forEach(function (producto, indice) {
        producto.cantidad = cantidadPorDefecto(indice);
        listaProductos.querySelector(`[data-product-index="${indice}"].quantity-input`).value = String(producto.cantidad);
    });
    window.dispatchEvent(new CustomEvent("productosActualizados"));
}

document.getElementById("clear-purchase").addEventListener("click", function () {
    actualizarCantidades(function () {
        return 0;
    });
});

document.getElementById("restore-products").addEventListener("click", function () {
    actualizarCantidades(function (indice) {
        return cantidadesIniciales[indice];
    });
});

listaProductos.addEventListener("input", actualizarCatalogo);
listaProductos.addEventListener("change", actualizarCatalogo);
listaProductos.addEventListener("click", actualizarCatalogo);
listaProductos.addEventListener("keydown", function (event) {
    if (event.key === "Enter" && event.target.classList.contains("quantity-input")) {
        event.preventDefault();
        event.target.blur();
    }
});

window.dispatchEvent(new CustomEvent("productosActualizados"));
