// Array Methods
// ------------------------------------------------------------------------------------------------------------------------

const tecnologias = ["HTML", "CSS", "JavaScript", "React", "Node.js"];
const numeros = [10, 20, 50];

// Filter - nos sirve para sacar un elemento del arreglo o mantener ese elemento en el arreglo y sacar todos los demas en bases de siertas condiciones

// primera forma de uso
// const nuevoArray = tecnologias.filter(function (tech) {
//   console.log(tech);
// });

// ------------------------------------------------------------------------------------------------------------------------

// segunda forma de uso

// const nuevoArray = numeros.filter(ejemploFiltter);

// function ejemploFiltter(tech) {
//   console.log(tech);
// }

// ------------------------------------------------------------------------------------------------------------------------

// Includes

// const resultado = tecnologias.includes("JavaScript");
// console.log(resultado);

// cuando la sintaxis es asi tecnologias.includes quiere decir que es un metodo

// ------------------------------------------------------------------------------------------------------------------------
// some - devuelve true o false si al menos un elemento cumple con la condicion

// const resultado = numeros.some((nunmeros) => numeros > 3);

// console.log(resultado);

// ------------------------------------------------------------------------------------------------------------------------

// find - devuelve el primer elemento que cumple una condicion

// const resultado = numeros.find((numero) => numero > 20);
// console.log(resultado);

// ------------------------------------------------------------------------------------------------------------------------

// every - retorna true o false si todos los elementos cumplen con la condicion

// const resultado = numeros.every((numero) => numero > 15);
// console.log(resultado);

// ------------------------------------------------------------------------------------------------------------------------

// reduce - retorna un acumulado del total

const resultado = numeros.reduce((total, numero) => {
  console.log(total);
  console.log(numero);
  return total + numero;
}, 0);
console.log(resultado);
