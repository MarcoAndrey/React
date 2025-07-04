// ------------------------------------------------------------------------------------------------------------------------
// Operadores de encadenamiento opcional y nullish coalescing
// Optional Chaining (?)

// te permitira acceder a propiedades de un objeto o llamar metodos de propiedades sin tener que verificar si existen o no
const alumno = {
  nombre: "Juan",
  clase: "programacion",
  aprobado: true,
  examenes: {
    examen1: 90,
  },
};

console.log(alumno.examenes?.examen1);

console.log("despues de alumno");

// ------------------------------------------------------------------------------------------------------------------------

// Nullish Coalescing Operator (??)
// Es un operador logico que devuelve el operando de la derecha cuando el operando de la izquierda es null o undefined, en caso contrario devuelve el operando de la izquierda.

const pagina = null ?? 1;
console.log(pagina);
