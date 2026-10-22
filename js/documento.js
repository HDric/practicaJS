const documentInfo = document.getElementById("document-info");
const currentYear = document.getElementById("current-year");
const browserInfo = document.getElementById("browser-info");

console.log("URL de la página:", document.URL);
console.log("Título de la página:", document.title);
console.log("Última modificación:", document.lastModified);

documentInfo.textContent = `Última modificación del documento: ${document.lastModified}`;
currentYear.textContent = new Date().getFullYear();

const navegadorReglas = [
    { nombre: "Microsoft Edge", patron: /Edg\// },
    { nombre: "Opera", patron: /OPR\// },
    { nombre: "Google Chrome", patron: /Chrome\// },
    { nombre: "Mozilla Firefox", patron: /Firefox\// },
    { nombre: "Safari", patron: /Safari\// }
];
const userAgent = navigator.userAgent;
let navegador = "Navegador no identificado";

for (let i = 0; i < navegadorReglas.length; i++) {
    if (navegadorReglas[i].patron.test(userAgent)) {
        navegador = navegadorReglas[i].nombre;
        break;
    }
}

browserInfo.textContent = `${navegador} · idioma ${navigator.language}`;
