// Condicionales == Igual que / === Igual que y del mismo tipo estricto
// ------------------------------------------------------------------------------------------------------------------------

const numero1 = 20; // number // esto es por que es una variable de tipo number, si no tuviera el numero 20 entre comillas seria un string
const numero2 = "20"; // string esto es por que es una variable de tipo string todo lo que este entre comillas es un string

console.log(typeof numero1); // number
console.log(typeof numero2); // string

/*
== (comparador no estricto)
===(comparador estricto) 

siempre utilizar el operdador estricto === para comparar valores, ya que este compara el tipo de dato y el valor, mientras que el operador no estricto == solo compara el valor.
El operador no estricto == puede dar resultados inesperados, ya que convierte los tipos de datos antes de compararlos, lo que puede llevar a errores sutiles en el código. 

Por ejemplo, si comparamos un número y una cadena de texto que representa ese número, el operador no estricto los considerará iguales, mientras que el operador estricto no lo hará. Por lo tanto, es recomendable utilizar siempre el operador estricto === para evitar confusiones y errores en el código.

*/

if (numero1 == numero2) {
  // se cumple la condicion
  console.log("Los numeros si son iguales");
} else {
  // se cumple la condicion
  console.log("Los numeros no, no son iguales");
}
