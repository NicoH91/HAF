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

buttonTutoria.onclick = function(){
  if (contentContainerTutoria.innerHTML!== "") {
    contentContainerTutoria.innerHTML="" ;
    return;//si hay contenido dentro del div
}

const cardElement = document.createElement("div");
cardElement.classList.add("card","tutoriaOnline")

contentContainerTutoria.innerHTML = `<div class="card classOnline zoom-in " style="width: 20rem;" id="myCard">
<img src="images/profesor.png" class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">Apuntes</h5>
  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius perferendis debitis quae veritatis magni.</p>
</div>
<ul class="list-group list-group-flush">
  <li class="list-group-item">Fisica</li>
  <li class="list-group-item">Analisis Matematico</li>
  <li class="list-group-item">Quimica</li>
</ul>
<button id="closeFiles"><i class="bi bi-x-lg"></i></button>
</div>`;

let buttonClose = getElementsByTagName("button");
buttonClose.onclick = function () {
  contentContainerTutoria.innerHTML = ""; // Cerrar la tarjeta al hacer clic en el botón de cierre
};

}



buttonApuntes.onclick = function(){
  if(contentContainerApuntes.innerHTML !== ""){
    contentContainerApuntes.innerHTML = "" ;//cierra la tarjeta si ya esta abierta. Tengo que repetir el proceso para la seccion de tutoria.
    return;
  }
  const cardElement = document.createElement("div");
  cardElement.classList.add("card", "apuntesOnline")

  contentContainerApuntes.innerHTML = ` <div class="card classOnline zoom-in " style="width: 20rem;" id="myCard">
  <img src="images/profesor.png" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Apuntes</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius perferendis debitis quae veritatis magni.</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Fisica</li>
    <li class="list-group-item">Analisis Matematico</li>
    <li class="list-group-item">Quimica</li>
  </ul>
  <button id="closeFiles"><i class="bi bi-x-lg"></i></button>
</div>`

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
  cardElement.classList.add("card", "classOnline");

  contentContainer.innerHTML = `
    <div class="card classOnline zoom-in " style="width: 20rem;" id="myCard">
      <img src="images/profesor.png" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Online Class</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius perferendis debitis quae veritatis magni.</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Fisica</li>
        <li class="list-group-item">Analisis Matematico</li>
        <li class="list-group-item">Quimica</li>
      </ul>
      <button id="closeFiles"><i class="bi bi-x-lg"></i></button>
    </div>
  `;



  let buttonClose = document.getElementById("closeFiles");
  buttonClose.onclick = function () {
    contentContainer.innerHTML = ""; // Cerrar la tarjeta al hacer clic en el botón de cierre
  };
};
