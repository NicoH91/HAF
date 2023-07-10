

hamburger = document.querySelector(".hamburger");
hamburger.onclick = function () {
  navBar = document.querySelector(".nav-bar");
  navBar.classList.toggle("active")
}




// DOM
//funcion para CARD 
let buttonClasses = document.getElementById("classes");
let contentContainer = document.getElementById("contentContainer");

let contentContainerApuntes = document.getElementById("contentContainerApuntes")
let buttonApuntes = document.getElementById("apuntes")



let buttonTutoria = document.getElementById("tutoria")
let contentContainerTutoria = document.getElementById("contentContainerTutoria")

// Obtén todos los elementos h5 con la clase "card-title"
let cardTitles = document.querySelectorAll('.card-title');

let btnOpenModal = document.getElementById("btnOpenModal");
btnOpenModal.addEventListener("click", openModal);

let btnCloseModal = document.getElementById("btnCloseModal");
btnCloseModal.addEventListener("click", closeModal);

function openModal() {
  let modal = document.querySelector(".modalLogin");
  modal.style.display = "block";
}

function closeModal() {
  let modal = document.querySelector(".modalLogin");
  modal.style.display = "none";
}
// Cuando se clickea afuera del modal se cierra.
// window.onclick = function (event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }

// Agrega una clase común a todos los elementos h5
cardTitles.forEach(function (title) {
  title.classList.add('card-h5');
});






buttonTutoria.onclick = function () {
  if (contentContainerTutoria.innerHTML !== "") {
    contentContainerTutoria.innerHTML = "";
    return;//si hay contenido dentro del div
  }

  const cardElement = document.createElement("div");
  cardElement.classList.add("card", "tutoriaOnline")

  //   contentContainerTutoria.innerHTML = `<div class="card classOnline zoom-in " style="width: 20rem;" id="myCard">

  // <div class="card-body">
  //   <h5 class="card-title card-h5">Apuntes</h5>
  //   <p class="card-text">En la seccion apuntes podras encontrar un ejemplo de como recibiras tu material de estudio y coplementario que podra ayudarte duraten tu periodo de preparacion. Haz click en el boton de descarga para poder ver un ejemplo!</p>
  // </div>
  // <ul class="list-group list-group-flush">
  //   <li class="list-group-item">Apuntes Fisica <a><i class="bi bi-download"></i></a> </li>
  //   <li class="list-group-item">Apuntes Analisis Matematico <a><i class="bi bi-download"></i></a></li>
  //   <li class="list-group-item">Apuntes Quimica <a><i class="bi bi-download"></i></a></li>
  // </ul>

  // <button class="close" id="closeFiles"><i class="bi bi-x-lg"></i></button>
  // </div>`;
  Swal.fire({

    title: '<div class="card classOnline zoom-in " style="width: 20rem;" id="myCard">',


    html:
      ' <div class="card-body"> ' +
      '<h5 class="card-title card-h5">Apuntes</h5>' +
      '<p class="card-text">En la seccion apuntes podras encontrar un ejemplo de como recibiras tu material de estudio y coplementario que podra ayudarte duraten tu periodo de preparacion. Haz click en el boton de descarga para poder ver un ejemplo!</p> ' +
      '  </div> ' +
      '<ul class="list-group list-group-flush"> ' +
      '<li class="list-group-item">Apuntes Fisica <a><i class="bi bi-download"></i></a> </li>' +
      '<li class="list-group-item">Apuntes Analisis Matematico <a><i class="bi bi-download"></i></a></li> ' +
      '<li class="list-group-item">Apuntes Quimica <a><i class="bi bi-download"></i></a></li> ' +

      '</ul>' +
      '</div>',
    confirmButtonText:
      '<i class="bi bi-x-lg"></i>',
    cancelButtonText:
      '<i class="bi bi-x-lg"></i>',
    cancelButtonAriaLabel: 'bi bi-cross'
  })

  let buttonClose = getElementsByTagName("button");
  buttonClose.onclick = function () {
    contentContainerTutoria.innerHTML = ""; // Cerrar la tarjeta al hacer clic en el botón de cierre
  };

}



buttonApuntes.onclick = function () {
  if (contentContainerApuntes.innerHTML !== "") {
    contentContainerApuntes.innerHTML = "";//cierra la tarjeta si ya esta abierta. Tengo que repetir el proceso para la seccion de tutoria.
    return;
  }
  const cardElement = document.createElement("div");
  cardElement.classList.add("card", "apuntesOnline", "close")


  //   contentContainerApuntes.innerHTML = ` <div class="card classOnline zoom-in " style="width: 20rem;" id="myCard">

  //   <div class="card-body">
  //     <h5 class="card-title card-h5"></h5>
  //     <p class="card-text">
  //     .</p>
  //   </div>

  //   <button class="close" id="closeFiles"><i class="bi bi-x-lg"></i></button>
  // </div>`
  Swal.fire({

    title: '<div class="card classOnline zoom-in " style="width: 20rem;" id="myCard">',


    html:
      ' <div class="card-body"> ' +
      '<h5 class="card-title card-h5">Tutoria</h5>' +
      '<p class="card-text">Nuestra tutoría te capacita para rendir exámenes con confianza. Te acompañamos en tu proceso de aprendizaje, brindándote apoyo y orientación personalizada. ¡Alcanza tu máximo potencial académico con nosotros!</p> ' +
      '  </div> ',

    confirmButtonText:
      '<i class="bi bi-x-lg"></i>',
    cancelButtonText:
      '<i class="bi bi-x-lg"></i>',
    cancelButtonAriaLabel: 'bi bi-cross'
  })


  let buttonClose = getElementsByTagName("button");
  buttonClose.onclick = function () {
    contentContainerApuntes.innerHTML = ""; // Cerrar la tarjeta al hacer clic en el botón de cierre
  };
}

buttonClasses.onclick = function () {
  if (contentContainer.innerHTML !== "") {
    contentContainer.innerHTML = ""; // Cerrar la tarjeta si ya está abierta
    return; // Salir de la función
  }
  const cardElement = document.createElement("div");
  cardElement.classList.add("card", "classOnline", "close");

  // contentContainer.innerHTML = `
  //   <div class="card classOnline zoom-in " style="width: 20rem;" id="myCard">

  //     <div class="card-body">
  //       <h5 class="card-title card-h5">Clases Online</h5>
  //       <p class="card-text">Sumérgete en nuestra modalidad online y disfruta de clases de matemática, física, química y más. Amplía tus conocimientos desde cualquier lugar, con instructores expertos</p>
  //     </div>
  //     <ul class="list-group list-group-flush">
  //       <li class="list-group-item">Fisica</li>
  //       <li class="list-group-item">Analisis Matematico</li>
  //       <li class="list-group-item">Quimica</li>
  //     </ul>
  //     <button class="close" id="closeFiles"><i class="bi bi-x-lg"></i></button>
  //   </div>
  // `;
  Swal.fire({

    title: '<div class="card classOnline zoom-in " style="width: 20rem;" id="myCard">',


    html:
      ' <div class="card-body"> ' +
      '<h5 class="card-title card-h5">Clases Online</h5>' +
      '<p class="card-text">Sumérgete en nuestra modalidad online y disfruta de clases de matemática, física, química y más. Amplía tus conocimientos desde cualquier lugar, con instructores expertos</p>, ' +
      '  </div> ' +
      '<ul class="list-group list-group-flush"> ' +
      '<li class="list-group-item">Fisica</li> ' +
      '<li class="list-group-item">Fisica</li> ' +
      '<li class="list-group-item">Quimica</li> ' +
      '<li class="list-group-item">Matematica</li> ' +
      '</ul>' +
      '</div>',
    confirmButtonText:
      '<i class="bi bi-x-lg"></i>',
    cancelButtonText:
      '<i class="bi bi-x-lg"></i>',
    cancelButtonAriaLabel: 'bi bi-cross'
  })


  let buttonClose = document.getElementById("closeFiles");
  buttonClose.onclick = function () {
    contentContainer.innerHTML = ""; // Cerrar la tarjeta al hacer clic en el botón de cierre
  };
};


