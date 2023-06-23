let informacion = document.getElementById("informacion")

// Agrega un evento de click al botón
informacion.addEventListener("click", function () {
    let nuevaVentana = window.open("", "_blank");

    nuevaVentana.document.write("<h1>Información desplegada en la nueva ventana</h1><p>¡Hola desde la nueva ventana!</p>");
});







