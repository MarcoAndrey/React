// Manipular elemento html con js

const heading = document.querySelector(".heading");
const enlaces = document.querySelectorAll(".navegacion a");

heading.textContent = "un buevo elemento";

// Eliminar atributos, clases o ID
// heading.removeAttribute("class");

const inputNombre = document.querySelector("#nombre");
inputNombre.value = "un nuevo valor";
