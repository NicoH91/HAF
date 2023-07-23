




let informacion = document.getElementById("informacion");


// Agrega un evento de click al botón
informacion.addEventListener("click", function () {
    let nuevaVentana = window.open("", "_blank");

    // Carga el archivo PDF en la nueva ventana
    nuevaVentana.location.href = "haf pdf.pdf";
});






//Filename: script.js




// Crear un objeto JSON con los datos de inicio de sesión para el formu
//Se agrega un login  con json para incluir los temas vistos. 
// Obtén los valores de usuario y contraseña del formulario



let botonLogin = document.getElementById("btn-login")

let usuario = document.getElementsByName('usuario')[0].value;
let contrasenia = document.getElementsByName('psw')[0].value
var cancelBtn = document.getElementById("cancel");



cancelBtn.addEventListener("click", function () {
    let modal = document.querySelector(".modalLogin");
    modal.style.display = "none";
});

botonLogin.addEventListener("click", function (e) {
    e.preventDefault(); // No se envía el formulario

    let usuario = document.getElementsByName('usuario')[0].value;
    let contrasenia = document.getElementsByName('psw')[0].value;

    let datos = {
        usuario: usuario,
        contrasenia: contrasenia
    };

    let datosJSON = JSON.stringify(datos);
    localStorage.setItem("datos", datosJSON);


    usuario === "coder" && contrasenia === "coderjs"
        ? window.open("https://www.coderhouse.com/", "_blank")
        : alert("Usuario o contraseña incorrectos. Usuario coder pw coderjs para acceder");

});


