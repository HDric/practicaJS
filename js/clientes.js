
var persona = {
    "nombre": "Ana",
    "apellido": "Paz",
    "edad": 32,
    "cedula": 1714032789,
    "direccion": "San Juan",
    "correo": "apaz@gmail.com"
};

function saludo() {
    document.write("Hola " + persona.nombre);
}


function mostrarBienvenida(nombre) {
    alert("Bienvenido " + nombre + "\nCorreo electrónico: " + persona.correo);
}


window.addEventListener('load', function () {
    mostrarBienvenida(persona.nombre);
});