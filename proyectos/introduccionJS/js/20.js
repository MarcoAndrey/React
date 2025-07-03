// Condicionales operadores
// ------------------------------------------------------------------------------------------------------------------------

const saldo = 1000;
const pagar = 1200;
const tarjeta = true;
/*
if / sirve para decir si se cumple una condicion o no
else if / sirve para revisar si no que se cumpla el else 
else / sirve para decir que no se cumple ninguna condicion


solo se cumple de arriba hacia abajo, si se cumple una condicion no se revisan las siguientes, si no se cumple la primera condicion se revisa la segunda y asi sucesivamente
si no se cumple ninguna condicion se ejecuta el else
si se cumple una condicion se ejecuta el codigo dentro del if, si no se cumple se ejecuta el codigo dentro del else if o else
*/

// if (saldo > pagar) {
//   console.log("Puedes pagar");
// } else if (tarjeta) console.log("Puedes pagar con tarjeta");
// else {
//   console.log("No puedes pagar");
// }

// ------------------------------------------------------------------------------------------------------------------------

/* logical Or y logical And
 * || Or - Al menos una se cumpla
 * && And - Revisa que todas se cumplan
 * ! Negacion - si no se cumple una condicion
 */

// Acorta el codigo utilizando operadores logicos && And

if (saldo > pagar || tarjeta) {
  console.log("Puedes pagar");
} else {
  console.log("No puedes pagar");
}
