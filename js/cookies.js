const cookieBanner = document.getElementById("cookie-banner");
const cookieFeedback = document.getElementById("cookie-feedback");
const cookiePreference = "superfrutas_preferencia=";

function existePreferenciaDeCookies() {
    return document.cookie.split(";").some(function (cookie) {
        return cookie.trim().startsWith(cookiePreference);
    });
}

function guardarPreferenciaCookies(preferencia) {
    const secure = window.location.protocol === "https:" ? "; Secure" : "";
    document.cookie = `${cookiePreference}${preferencia}; Max-Age=31536000; Path=/; SameSite=Lax${secure}`;

    if (!existePreferenciaDeCookies()) {
        cookieFeedback.textContent = "No se pudo guardar la cookie. Abre la página desde un servidor web y revisa la configuración del navegador.";
        return;
    }

    cookieBanner.hidden = true;
}

if (!existePreferenciaDeCookies()) {
    cookieBanner.hidden = false;
}

document.getElementById("accept-cookies").addEventListener("click", function () {
    guardarPreferenciaCookies("aceptadas");
});

document.getElementById("decline-cookies").addEventListener("click", function () {
    guardarPreferenciaCookies("rechazadas");
});
