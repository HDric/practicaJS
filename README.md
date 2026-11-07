# SuperFrutas

Práctica 03 de Fundamentos de JavaScript. La página demuestra manipulación del DOM, variables, tipos de datos, condicionales, bucles, funciones, validación de formularios, cookies, animaciones y un diseño responsive con Flexbox.

## Cómo ejecutar

Abre `index.html` desde un servidor web (por ejemplo, Tomcat). El servidor permite que el navegador guarde la cookie de preferencias; el formulario de contacto valida y muestra una confirmación local, pero no envía datos a un servidor.

## Ejercicios incluidos

- `saludo.js`: fecha, hora visible, salida en consola y saludo condicional.
- `productos.js`: arreglo de productos, recorrido con `for`, cantidades editables y eliminación dinámica de elementos.
- `factura.js`: cálculo dinámico del total a partir del precio y la cantidad de cada producto.
- `stock.js`: valores booleanos y actualización de clases CSS.
- `clientes.js`: objeto de persona, funciones de saludo y validación del formulario.
- `cookies.js`: guarda la preferencia de cookies en una cookie propia.
- `documento.js`: consulta datos del documento y detecta el navegador.
- `main.js`: coordina el comportamiento general relacionado con el tamaño de la ventana.

El diseño adaptable y la animación de las tarjetas de producto están definidos en `css/styles.css`. El código está modularizado por responsabilidad y utiliza APIs nativas del navegador para evitar dependencias innecesarias; la única librería externa es Google Fonts para la tipografía.

En el catálogo, `Eliminar de la compra` conserva el producto y establece su cantidad en cero. Los botones `Restaurar productos` y `Limpiar` restauran las cantidades iniciales o dejan la compra en cero, respectivamente.

## Estructura

```text
pagina-web/
|-- index.html
|-- css/
|   |-- styles.css
|-- js/
|   |-- main.js
|   |-- productos.js
|   |-- stock.js
|   |-- clientes.js
|   |-- factura.js
|   |-- saludo.js
|   |-- cookies.js
|   |-- documento.js
|-- images/
```
