// Funciones
// las funciones son bloques de código que se pueden reutilizar
// se definen con la palabra reservada function

// ------------------------------------------------------------------------------------------------------------------------
// Terminos importantes
// las funciones nos permiten reutilizar código, son bloques de código que se pueden ejecutar en cualquier momento, se definen con la palabra reservada function, y pueden recibir parámetros y devolver valores

// ------------------------------------------------------------------------------------------------------------------------
// las funciones deben servir para algo tiene que tener un proposito, las funciones deben tener nombres descriptivos que indiquen su proposito, las funciones deben ser pequeñas y concisas, las funciones deben ser reutilizables, las funciones deben ser fáciles de entender, las funciones deben ser fáciles de mantener

// Functions declaration

// function sumar() {
//   console.log(1 + 1);
// }
// sumar(); // 1 + 1

// ------------------------------------------------------------------------------------------------------------------------

// Parametros en funciones es una variable especial que se utiliza en una funcion y cuyo valor se refiere a valores que vienen del esterior
// Las funciones pueden recibir parámetros, que son valores que se pasan a la función cuando se llama

// lo que esta entre parentesis es un parametro, es una variable especial que se utiliza en una funcion y cuyo valor se refiere a valores que vienen del esterior

// function sumar(numero1, numero2) {
//   console.log(numero1 + numero2);
// }

// lo que esta en parentesis se conoce como argumento, es el valor que se le pasa a la funcion cuando se llama
// sumar(10, 20);
// sumar(100, 200);

// ------------------------------------------------------------------------------------------------------------------------

function sumar(numero1, numero2) {
  console.log(numero1 + numero2);
}

sumar(10, 20);
sumar(100, 200);
