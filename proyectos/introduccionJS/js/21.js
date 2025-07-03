// Condicionales operadores ternarios
// ------------------------------------------------------------------------------------------------------------------------

const auth = true;

const saldo = 1000;
const pagar = 1200;
const tarjeta = true;

// auth
//   ? console.log("Usuario autenticado")
//   : console.log("Usuario no autenticado");

/*
 * auth / es una condicion
 * ?  console.log("Usuario autenticado") / lo que se ejecuta si se cumple la condicion
 * : console.log("Usuario no autenticado"); / dos puntos y lo que sigue, lo que se ejecuta si no se cumple la condicion
 */

// ------------------------------------------------------------------------------------------------------------------------
// se pueden utilizar todos los operadores

// saldo > pagar ? console.log("Puedes pagar") : console.log("No puedes pagar");

// ------------------------------------------------------------------------------------------------------------------------

// Ternario anidado
// saldo > pagar
//   ? console.log("Puedes pagar")
//   : tarjeta
//   ? console.log("Puedes pagar con tarjeta")
//   : console.log("No puedes pagar");

// ------------------------------------------------------------------------------------------------------------------------
// Ternario anidado se puede usar como el if / else / else if
// || Or y && And

saldo > pagar || tarjeta
  ? console.log("Puedes pagar")
  : console.log("No puedes pagar");
