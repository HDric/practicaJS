const productos = [
    { nombre: "Tomate", precio: 0.75, unidad: "unidad" },
    { nombre: "Manzana", precio: 0.60, unidad: "unidad" },
    { nombre: "Zanahoria", precio: 0.45, unidad: "unidad" }
];

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

    elemento.appendChild(nombre);
    elemento.appendChild(detalle);
    listaProductos.appendChild(elemento);
}
