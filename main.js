hamburger = document.querySelector(".hamburger");
hamburger.onclick = function () {
    navBar = document.querySelector(".nav-bar");
    navBar.classList.toggle("active")
}




// DOM
let buttonClasses = document.getElementById("classes");
let contentContainer = document.getElementById("contentContainer");

buttonClasses.onclick = function () {
    if (contentContainer.innerHTML !== "") {
        contentContainer.innerHTML = ""; // Cerrar la tarjeta si ya está abierta
        return; // Salir de la función
    }
    const cardElement = document.createElement("div");
  cardElement.classList.add("card", "classOnline", "zoom-in");
  
    contentContainer.innerHTML = `
    <div class="card classOnline" style="width: 20rem;" id="myCard">
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
