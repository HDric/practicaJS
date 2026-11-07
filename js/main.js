"use strict";

function registrarAnchoDeVentana() {
    document.documentElement.style.setProperty("--viewport-width", `${window.innerWidth}px`);
}

window.addEventListener("resize", registrarAnchoDeVentana);
registrarAnchoDeVentana();
