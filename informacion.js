




let informacion = document.getElementById("informacion");


// Agrega un evento de click al botón
informacion.addEventListener("click", function () {
    let nuevaVentana = window.open("", "_blank");

    // Carga el archivo PDF en la nueva ventana
    nuevaVentana.location.href = "haf pdf.pdf";
});






//Filename: script.js
let rev = 0;
carousel(rev);

function previousReview() {
    rev = rev - 1;
    carousel(rev);
}

function nextReview() {
    rev = rev + 1;
    carousel(rev);
}


function carousel(review) {
    let reviews = document.getElementsByClassName("review__items");
    review = review >= reviews.length ? 0 : review;
    rev = review >= reviews.length ? 0 : rev;

    review = review < 0 ? reviews.length - 1 : review;
    rev = review < 0 ? reviews.length - 1 : rev;

    for (let i = 0; i < reviews.length; i++) {
        reviews[i].style.display = "none";
    }
    reviews[review].style.display = "block";

    for (let i = 0; i < reviews.length; i++) {
        reviews[i].classList.remove("active");
    }
    reviews[review].classList.add("active");
}

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


