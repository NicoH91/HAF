hamburger = document.querySelector(".hamburger");
hamburger.onclick = function () {
    navBar = document.querySelector(".nav-bar");
    navBar.classList.toggle("active")
}


// Variables del formulario
// const nameInput = document.getElementById("name");
// const email = document.getElementById("email");
// const number = document.getElementById("number");
// const submitForm = document.getElementById("submitForm");
// const form = document.getElementById("form");
// const errorElement = document.getElementById("error");

// form.addEventListener("submit", (e) => {
//     let messages = [];
//     if (nameInput.value === "" || nameInput.value === null) {
//         messages.push("Name is required");
//     }
//     if (messages.length > 0) {
//         e.preventDefault();
//         errorElement.innerText = messages.join(",");
//     }
// });


// DOM
const slider = document.querySelector(".image-slider");
const arrLeft = document.querySelector(".arrow-left");
const arrRight = document.querySelector(".arrow-right");
const heading = document.querySelector(".caption h2");
const description = document.querySelector(".caption p");

//Data for the slider 

const images = ["carrousel1.jpg", "carrousel2.jpg", "carrousel3.jpg"]

const headings = ["Clases online", "Profesores de alto rendimiento", "Apuntes"]
const descriptions = [
    "Matematica Fisica Quimica",
    "Profesores academicos",
    "Apuntes gratis y tutorias",];

//slider ID
let id = 0;
//the slider function
function slide(id) {
    //setear the background image
    slider.style.backgroundImage = `url(images/${images[id]})`;
    //add image fade animation
    slider.classList.add("image-fade");

    setTimeout(() => {
        slider.classList.remove("image-fade");
    }, 1);
    //change heading
    heading.innerText = headings[id];
    //change description
    description.innerText = descriptions[id];
}


//add a click event to left arrow

arrLeft.addEventListener("click", () => {
    id--;
    if (id < 0) {
        id.images.length - 1;
    }
    //run the slide function
    slide(id);
});
//add click event to right arrow

arrRight.addEventListener("click", () => {
    id++;

    if (id > images.lenght - 1) {
        id = 0;
    }
   slide(id);
});
 

