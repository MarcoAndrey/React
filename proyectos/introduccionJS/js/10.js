// regresar operaciones con Arrays

// ------------------------------------------------------------------------------------------------------------------------
const tecnologias = ["html", "css", "javascript", "react", "nodejs"]; //esto es un arregrlo
//tecnologias[5] = "nodejs"; // Agregar un elemento al final del array
console.table(tecnologias);

// ------------------------------------------------------------------------------------------------------------------------

const newArrays = [...tecnologias, "typescript", "nextjs"]; // Agregar varios elementos al final del array los trespuntos [...]sirven para copiar los arrelos
console.table(newArrays);

// ------------------------------------------------------------------------------------------------------------------------

// Eliminar primer elemento de un array

const tecnologias2 = ["html", "css", "javascript", "react", "nodejs"]; //esto es un arregrlo
tecnologias2.shift(); // Elimina el primer elemento del array
console.table(tecnologias2);

// ------------------------------------------------------------------------------------------------------------------------

// Eliminar el primer elemento de un array con funciones
// Al tener el filter el valor de (tech) es cada uno de los arreglos "html", "css", "javascript", "react", "nodejs"
// lo que hace la funcion es acceder a cada elementon del arreglo
// === los tres signos de igual son para comparar el valor y el tipo de dato !== solo compara el valor
// si el elemento es diferente de "html" lo agrega al nuevo arreglo
const tecnologiasDev = ["html", "css", "javascript", "react", "nodejs"]; //esto es un arregrlo
const tecnologias3 = tecnologiasDev.filter(function (tech) {
  if (tech !== "html") {
    return tech;
  }
});
console.log(tecnologias3);

// ------------------------------------------------------------------------------------------------------------------------

// Otra opcion y mejor forma de hacerlo sin utilizar filter y sin mutar el array original
// Utilizando el metodo map que recorre el array y devuelve un nuevo array con los elementos
// El map recorre el array y devuelve un nuevo array con los elementos que cumplen la condicion
// En este caso, si el elemento es diferente de "html" lo agrega al nuevo array
// El map no modifica el array original, sino que devuelve un nuevo array con los elementos que
// cumplen la condicion

const tecnologiasDev1 = [
  "html",
  "css",
  "javascript",
  "react",
  "nodejs",
  "tailwindcss",
]; //esto es un arregrlo
const tecnologias4 = tecnologiasDev1.map(function (tech) {
  if (tech === "nodejs") {
    return "nest.js";
  } else {
    return tech;
  }
});
console.log(tecnologias4);
