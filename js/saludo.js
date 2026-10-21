
var today = new Date();
var hourNow = today.getHours();
var mensajeSaludo;


console.log(today);
console.log(hourNow);

if (hourNow > 18) {
    mensajeSaludo = 'Buenas noches';
} else if (hourNow > 12) {
    mensajeSaludo = 'Buenas tardes';
} else if (hourNow > 0) {
    mensajeSaludo = 'Buenos d&iacute;as';
} else {
    mensajeSaludo = 'Bienvenido!!';
}

document.write('<h3>' + mensajeSaludo + '</h3>');
