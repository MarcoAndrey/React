// Funciones que retornan valores
// ------------------------------------------------------------------------------------------------------------------------

// function expression

// const sumar = function (numero1 = 0, numero2 = 0) {
//   return numero1 + numero2; // Retorna el resultado de la suma
// };

// const resultado = sumar(10, 20); // Llama a la función y almacena el resultado en una variable
// console.log(resultado); // Imprime el resultado de la suma

// ------------------------------------------------------------------------------------------------------------------------

// fuction declaration

// function sumar(numero1 = 0, numero2 = 0) {
//   return numero1 + numero2;
// }

// const resultado = sumar(10, 20); // Llama a la función y almacena el resultado en una variable
// console.log(resultado); // Imprime el resultado de la suma
// ------------------------------------------------------------------------------------------------------------------------

// Arrow function
// cuando es una linea se puede omitir las llaves y el return
const sumar = (numero1 = 0, numero2 = 0) => numero1 + numero2;

// si tienes varias lineas de codigo debes usar llaves y el return
// const sumar = (numero1 = 0, numero2 = 0) => {
//   return numero1 + numero2;
// };

const resultado = sumar(10, 20); // Llama a la función y almacena el resultado en una variable
console.log(resultado); // Imprime el resultado de la suma
