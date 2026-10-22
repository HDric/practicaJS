
const persona = {
    nombre: "Ana",
    apellido: "Paz",
    edad: 32,
    cedula: 1714032789,
    direccion: "San Juan",
    correo: "apaz@gmail.com"
};

function saludo() {
    document.getElementById("customer-name").textContent = persona.nombre;
}

function mostrarBienvenida(nombre) {
    alert(`Bienvenido ${nombre}\nCorreo electrónico: ${persona.correo}`);
}

saludo();
document.getElementById("welcome-button").addEventListener("click", function () {
    mostrarBienvenida(persona.nombre);
});

const contactForm = document.getElementById("contact-form");
const formFeedback = document.getElementById("form-feedback");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    if (!contactForm.checkValidity()) {
        contactForm.reportValidity();
        return;
    }

    const nombre = document.getElementById("name").value.trim();
    formFeedback.textContent = `Gracias, ${nombre}. Tu mensaje fue validado correctamente.`;
    contactForm.reset();
});