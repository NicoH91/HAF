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